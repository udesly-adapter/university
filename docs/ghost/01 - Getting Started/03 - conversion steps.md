---
title: Conversion Steps
description: Conversion steps
---

Converting a site is very very simple, below you will find a guide divided into 3 simple parts

## Webflow

1.  Design your theme in Webflow, with the correct CMS structure; 
2.  After you are done and ready to convert, open up our extension and click on **Configure Attributes**;
3.  The extension will add attributes and download a configuration file;
4.  After the configuration has been downloaded you can export your Webflow *.zip*;

![](/images/wf-to-ghost-attributes.png)

If you want you can also start from our  [**cloneable**](https://webflow.com/website/webflow-to-ghost-theme), it's a free Webflow theme modified with a basic CMS structure suitable for Ghost.

## Udesly App

1. Upload your zip file into the Udesly App;
2. Add the configuration file and configure the settings;
3. Press on **Convert**;
4. At the end of the conversion the Udesly App will allows you to either download the zip and all the data you need;

![](/images/ghost-convert.png)


### Download Theme

Press this button to download the Ghost theme zip.

### Download Data

Press this button to download the data with CMS elements and pages that you can import into Ghost platform.

### Download Routes

Press this button to download the routes.yaml file that controls how your Ghost CMS will route the static and cms pages


## Ghost

Login into your Ghost dashboard, the url is usually yourdomain.com/ghost.

### Upload theme

Follow the path: Settings > Design > Change Theme > Upload Theme

![](/images/ghost-upload.png)


### Upload Data

Follow the path: Settings > Labs and upload the JSON data file inside the "Import Content" input.

![](/images/ghost-content.png)


### Upload Routes

Follow the path: Settings > Labs and upload the YAML Routes file pressing on "Upload Routes YAML" button.

![](/images/ghost-routes.png)