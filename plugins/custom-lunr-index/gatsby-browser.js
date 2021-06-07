import lunr from 'lunr';


export const onClientEntry = (args, {indexes, fetchOptions = {}}) => {
    window.__LUNR__ = window.__LUNR__ || {};
    indexes.forEach( async index => {
        try {
            const res = await fetch(`${__PATH_PREFIX__}/search_index_${index.name}.json`,
            fetchOptions);
            const data = await res.json();
            window.__LUNR__[index.name] = {
                index: lunr.Index.load(data.index),
                store: data.store,
            }
            document.body.dispatchEvent(new CustomEvent('loaded-search-index', {detail: index.name}), {bubbles: true})
        } catch(e) {
            console.log("Failed to fetch", index.name)
            document.body.dispatchEvent(new CustomEvent('failed-load-search-index', {detail: index.name}), {bubbles: true})
        }
         
    });
}