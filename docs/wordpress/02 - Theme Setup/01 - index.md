---
title: "Pages"
---

Any Webflow theme is convertible without any structure limitation in terms of number of pages and cms structure.

The Udesly App automatically understands your page structure and creates the WordPress pages according to your theme. 

All static pages are automatically created as static page in WordPress, and all dynamic pages are mapped either as Single pages or Archive/Taxonomy pages.

You can slightly modify this behaviour just using a different page slug that you can change in Webflow. 

Just as a reminder, the **page slug** is the user friendly and URL valid name of your page in Webflow. Inside slugs you can not use spaces, accented characters, special characters or uppercase characters. You can modify your page slug, inside page settings under the name **Slug**

![webflow page slug setting](/images/webflow-slug.png)


You will find how to define relevant pages in next sections, divided by context, but most of the times you will not need to do any modification to your theme structure, unless you need some specific functions.


## Example Structure

To do a simple recap and example of how this works, 

Let's start from a free [Webflow template](https://webflow.com/templates/html/grit-fashion-website-template) and let's analyze how 

![Page Structure](/images/page-structure.png)

and let's see how this structure will translate in WordPress

### Utility pages

All utility pages are used with same purpose also in 

1. **Password Page** will be used if your pages are passowrd protected
2. **404** page will be used as page not found;
3. **Search Page** will be used as a page to show

### E-Commerce Pages

1. **Products Template** will be used as the page to shows your single product;
2. **Categories Template** will be used as the page that shows all products of a *specific category* (Taxonomy page for Product Category);
3. **Checkout**, will be used as Checkout for WooCommerce;
4. **Checkout (Paypal)**,  will be deleted, one checkout is more than enough! Or not?;
5. **Order Confirmation** will be used as Thank you page of WooCommerce;

More details about E-Commerce and pages can be found on the E-Commerce section.

### CMS Collection Pages

Since in WordPress you can make everything you want, the Udesly App translates all different CMS Collections either as different *Custom post Types* or *Custom Taxonomies*, based on the CMS field structure, so every page that you can find inside the section **CMS Collection Pages**, will be converted as a *single template* or a *taxonomy template*.

For example if you create a CMS collection called **Event** in Webflow, you will find all single events inside the url structure /event/event-slug, and this url will use the page **Event Template** that you find under *CMS Collection Pages*.


### Static Pages

All static pages will be converted as static pages as well, unless they have a reserved **page slug** or use a reserved **page slug pattern**.


## Reserved Page Slugs or Patterns

Below you can find a list of page slugs or patterns that will allow you to define pages that have a particular functionality for WordPress!

### CMS

<ol>
<li> <strong>archive-{post-type}</strong>: used to create the template for the archive of the post-type, for example if you created a CMS collection in Webflow that has as slug "event", and you want to modify the page used as archive of all events (that by default can be found at the url "/event"), your page slug should be "archive-event";
</li>
<li> <strong>search-{post-type}</strong>: used to create results pages specific to only one post type. For example if you want to create a search form that searches only on the CMS collection "event" and you want to create a search page just for that page you have to make 3 steps:
<ul>
    <li>Create a page with slug: <strong>search-event</strong></li>
    <li>On the search form you want to specialize only for events set the custom attribute
<custom-attribute name="post-type" value="event"></custom-attribute>     
</li>
<li>On the collection list that you want to use to show the search results add the custom attribute
    <custom-attribute name="query-name" value="main"></custom-attribute> *
    More info on these attributes can be found later
</li>
</ul>
</li>

</ol>

### Page Templates

1. **page** or **default**: used to create a default page template, useful to create pages directly in WordPress;
2. **special-page**: used for some special third party plugins that uses only header and footer php and do not allow you to filter the content;
3. **template-***: all pages that have as slug something that starts with template- will be converted as Template pages, note that these pages must have a custom attribute on the **body element** to define for which post type they can be used, with no value they will be converted as template for pages

<custom-attribute dynamic name="post-type" value="post-type-slug"></custom-attribute> 

For example if you want to create a template for a post you have to set on the **body element** this attribute:

<custom-attribute name="post-type" value="post"></custom-attribute> 



### Utility Pages

1. **maintenance**: used for Maintenance mode that can be enabled in WordPress on the path: **Settings » Theme » Site Mode**;
2. **wp-die**: used when your server crashes on the frontend, pretty cool feature that allows you to make your site declare in a stylish way that it's on fire and something really bad happened! 🔥 (...or simply when the token for the passwordless login expired 😅)




