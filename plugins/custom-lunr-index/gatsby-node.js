const lunr = require("lunr");
// const { enhanceLunr } = require("./common.js");
const fs = require("fs");



exports.onPostBootstrap = ({ getNodes, getNode }, pluginOptions) => {
    const {
        indexes = [],
        fields = [],
        resolvers = {},
    } = pluginOptions;


    const storeFields = fields.filter(f => f.store === true);

    const fullIndex = {};

    indexes.forEach(
        ({
            name,
            filterNodes = () => true,
            customEntries = [],
            plugins = []
        }) => {
            const store = {};
            const index = lunr(function() {
                plugins.forEach(plugin => {
                    this.use(plugin(lunr));
                });
                this.ref("id");
                fields.forEach(({ name, attributes = {} }) => {
                    this.field(name, attributes);
                });
                this.metadataWhitelist = ['position']
                getNodes()
                    .filter(filterNodes)
                    .forEach(n => {
                        const fieldResolvers = resolvers[n.internal.type];
                        if (fieldResolvers) {
                            const doc = {
                                id: n.id,
                                ...Object.keys(fieldResolvers).reduce(
                                    (prev, key) => ({
                                        ...prev,
                                        [key]: fieldResolvers[key](n, getNode)
                                    }),
                                    {}
                                )
                            };
                            this.add(doc);

                            store[n.id] = storeFields.reduce(
                                (acc, f) => ({
                                    ...acc,
                                    [f.name]: doc[f.name]
                                }),
                                {}
                            );
                        }
                    });

                customEntries.forEach((entry, index) => {
                    const id = `custom_${index}`;
                    this.add({ id, ...entry });
                    store[id] = entry;
                });
            });

            fullIndex[name] = { index, store };
        }
    );

    for(let name in fullIndex) {
        fs.writeFileSync(`public/search_index_${name}.json`, JSON.stringify(fullIndex[name]));
    }
    
};