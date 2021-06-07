---
title: Theme Structure
description: Theme Structure
---

The adapter exports an **11ty** theme with a modified theme structure, below you will find a list and an explanations of all files you will find in your theme folder


## Files

### package.json

All node projects, contains this file called **package.json** - this file holds various metadata relevant to the project. This file is used to give information to npm (Node Package Manager) that allows it to identify the project as well as handle the project's dependencies. 
In order to develop your project locally you must install your node project dependencies first, by launching the following command in the root of your folder:

```
npm i
```

### netlify.toml

The netlify.toml file is a configuration file that specifies how Netlify builds and deploys your site — including redirects, branch and context-specific settings, and more. You can find more info about this file on [*Netlify doc.*](https://docs.netlify.com/configure-builds/file-based-configuration/)


### .eleventy.js

This file configures how the 11ty project will get build in terms of structures

## Folders

### admin

This folder contains only one file the configuration for Netlify CMS, you can modify it if needed according to the [**official doc**](https://www.netlifycms.org/docs/configuration-options/#configuration-file)

### theme

This folders contains all your html theme files and assets, symbols code can be found inside **partials** subfolder. You should usually not modify these files, but if needed keep in mind that CMS templates have a name like *[collection-slug].html*.

> For example **[posts].html** is the file corresponding to the **Posts Template** of Webflow

### _utils

This folder contains all code that helps 11ty in building up your theme. 

☢️ ☢️ **Probably you should just ignore this folder** ☢️ ☢️


### cms

This folder contains all the markdown and json files of your theme, basically all your data and settings will be there.
The subfolder **_data** contains all your texts, images, colors and other settings of your site. While all the data of your site is divided by subfolders named with the slug of your CMS collections, for example if you have an Event on Webflow named my-event, you will find your event data following the path: **cms/event/my-event.md**

