---
title: Glossary
description: Glossary
---

Below you can find a list of some of the most used terms inside the documentation that are specific to Webflow or to Shopify, and can help you get a better understanding of what you are reading.


## Webflow

### Page Slug

is the user friendly and URL valid name of your page in Webflow. Inside slugs you can not use spaces, accented characters, special characters or uppercase characters. You can modify your page slug, inside page settings under the name **Slug**

![webflow page slug setting](/images/webflow-slug.png)

### Element Settings

Element settings is a menu that you can find on the top right part of the Webflow interface and it's accessible pressing on the ⚙️ icon



![webflow settings](/images/webflow-settings.png)



### Custom Attributes

Custom attributes are a special way to *provide additional information* to elements. They are made of 2 parts:

1. **Name**
2. **Value**

And they can be added inside the Element settings menu



![custom attributes menu](/images/add-custom-attributes.png)

* Static Attributes

<custom-attribute name="name" value="value"></custom-attribute> 

These attributes are static, so do not change them, just copy the left part inside *Name* and the right part inside *Value*. To copy faster, you can just press on name and on value, they will copy the value to clipboard so you don't need to rewrite them!



* Dynamic Attributes

<custom-attribute dynamic name="name" value="dynamic-value"></custom-attribute> 

These attributes are dynamic, and it means that the name can be copied, but the value can change according to the situation and will be explained time by time.





## WordPress

### Slug

**Slug** is the user friendly and URL valid name of anything in WordPress. Inside handle you can not use spaces, accented characters, special characters or uppercase characters. This term is used everywhere in WordPress to reference one specific item, and with item you can talk about: *pages, products, articles, blogs, etc.* Everything that has a name, also as a slug. 

### Action
In WordPress, an Action is a PHP function that is executed at specific points throughout the WordPress Core.

Developers can create a custom Action using the [**Action API**](https://codex.wordpress.org/Function_Reference/add_action) to add or remove code from an existing Action by specifying any [**existing Hook**](https://codex.wordpress.org/Plugin_API/Action_Reference). This process is called “hooking“.

### Post
Also known as “articles” and sometimes incorrectly referred to as “blogs”. In WordPress, “posts” are articles that you write to populate your blog.

### Post Type
Post type refers to the various structured data that is maintained in the WordPress posts table. Native (or built-in) registered post types are post, page, attachment, revision, and nav-menu-item. Custom post types are also supported in WordPress and are automatically defined by the Udesly App whenever you use them in Webflwo. Custom post types allow users to easily create and manage such things as portfolios, projects, video libraries, podcasts, quotes, chats, and whatever a user can imagine.

### Shortcode
A Shortcode is a technique for embedding a snippet of PHP code into the body of a page or other content item.

### Sidebar
A sidebar is a vertical column provided by a theme for displaying information other than the main content of the web page. Themes usually provide at least one sidebar at the left or right of the content. Sidebars usually contain widgets that an administrator of the site can customize.

### Taxonomy
A taxonomy allows for the classification of things. In WordPress, there are two built-in taxonomies, categories and tags. These taxonomies help further classify posts and custom post types. The Udesly App automatically creates your custom taxonomies based on the structure of your Webflow CMS.

### Term
In WordPress, a term is a classification, group or subset of a Taxonomy, basically is what is Post for a Post Type.

### Widget
In WordPress a widget is a self-contained area of a web page that performs a specific function, or the code that generates such a self-contained area. For example, WordPress has a built-in widget that displays a list of pages in a weblog’s sidebar, and it has another built-in widget that displays a list of recent comments in the Dashboard. Plugins and themes can provide additional widgets.

