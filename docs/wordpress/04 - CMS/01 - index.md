---
title: "CMS Collections"
---

The CMS configuration will automatically be translated into WordPress configuration. The Udesly WordPress plugin already includes ACF plugin, so fields and custom fields will all be automatically configured without doing anything! 

Based on your Webflow CMS configuration, your CMS collections will either be created as **Custom Post Types** or **Taxonomies**, according to the slug you used in the configuration.

## Reserved Names

To prioritize already built-in collections of WordPress, some names are recognized and changed automatically!

For example:

* **posts**: will be mapped to **post** that is the default post type of WordPress
* **blog-categories**: will be mapped to **category**, this to allow eCommerce users to use native Blog Categories of WordPress, since when you activate eCommerce on Webflow, category will be used by Product Categories;
* **blog-category**: will be mapped to **category**, this to allow eCommerce users to use native Blog Categories of WordPress, since when you activate eCommerce on Webflow, category will be used by Product Categories;
* **categories**: will be mapped to **category**, this to allow eCommerce users to use native Blog Categories of WordPress, since when you activate eCommerce on Webflow, category will be used by Product Categories;
* **tags**: will be mapped to **post_tag** that is the taxonomy tag of the blog in WordPress
* **tag**: will be mapped to **post_tag** that is the taxonomy tag of the blog in WordPress

## Common Collection Names

To reference some already built-in WordPress/WooCommerce collections, use these slugs for your CMS Collections

* **author** to reference Authors of your Blog;
* **product_tag**: to reference Product Tags of WooCommerce;


