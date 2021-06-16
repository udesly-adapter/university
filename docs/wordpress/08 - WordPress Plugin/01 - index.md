---
title: "Udesly Plugin"
---

Your Webflow theme will work thanks to our [**Udesly WP Plugin**](https://github.com/udesly-adapter/udesly-wp-app), that is an open source plugin, you can find on Github. So if you have any issue, you can also open up a bug there. (Or make a pull request 😇).

This plugin will automatically be installed once you activate the first time your Webflow plugin!

Just follow these steps:

1. Upload and activate your theme by following the path Appearance » Themes;
2. [optional] Install WooCommerce from WordPress respository if your site is an eCommerce site;
3. You will see a notice on your top bar asking you to install Udesly Adapter plugin;

![](/images/udesly-adapter-plugin.png)

4. Follow the steps inside the notice;

The plugin is responsible of your data and pages import. It will listen to some file changes and automatically trigger the Data import.

After activating the plugin for the first time is adviced to go to the WordPress dashboard and wait few seconds;

You'll see a notice telling you that data is being imported;

![](/images/udesly-notice.png)

And this will happen any time you upload again your theme into WordPress! Don't worry, the data you already have in your CMS will never be modified, but actually not even ever modified. So for example if you changed all the data inside the Webflow CMS and you want to reimport the data that is in Webflow, you need first to delete your data inside WordPress and then you have to press on **Force import data from Webflow** from the Menu that you find on the top bar

![](/images/udesly-top-bar.png)

> ☠️ As you can see from the screen there is also an option called "Delete All frontend editor data", this will delete all the modifications presents in your database, so be carefull!!! ☠️