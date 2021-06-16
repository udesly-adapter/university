---
title: "Collections Lists"
---

All the CMS collections will create a template-part file in your WordPress theme, the template name will be created automatically based on your Collection configuration. For example if in your Collection you have selected to show posts, sorted by date and limited to 3 posts. The template part will be called something like: ```posts-sorted-by-data-limit-3```.

Ok, probably you are asking, why should I bother about this? 🤔

Probably you shouldn't! But there are some cases where you would need to know it, or to *change it*.

To change the name of a Collection List template part, just add the following attribute on the **Collection List Wrapper**.

<custom-attribute dynamic name="query-name" value="query-slug"></custom-attribute>

It can be usefull in 2 cases:

## 1. Hooks

Every collection list will create a ```WP_Query``` with arguments that are defined by your collection configuration in Webflow. 
The arguments can be filtered since a dynamic hook will be called:

```apply_filters('udesly/posts/${query-name}', array $args);``` (if your collection references posts)


```apply_filters('udesly/terms/${query-name}', array $args);``` (if your collection references taxonomies)


There could be some cases where you need to modify the arguments, and since these hooks are based on the names and the name is chosen from the Webflow configuration, it would be better to use a fixed query name, that you never change, so your filter will always work even if in Webflow you decide to change the list configuration.

For example you can add the attribute

<custom-attribute name="query-name" value="homepage-posts"></custom-attribute>

and the dynamic filter that will be called for that collection list will always be:

```apply_filters('udesly/posts/homepage-posts', array $args);```

So for example you can add custom filter to make your posts show different kind of posts based on a certain condition 

```php
function mytheme_filter_homepage_posts($args) {

    if (is_user_logged_in()) {
        $args['post_status'] => 'future'; // show only posts scheduled for future
    }

    return $args;
}

add_filter('udesly/posts/homepage-posts', 'mytheme_filter_homepage_posts');
```


## 2. Special Collection Lists

There are some special collection lists that cannot be configured using the Webflow collection configuration, they can be configured using the hooks told before, but for convenience, since they can be used sometimes, they can be set automatically just by using a predefined query name, using the following attribute on a **Collection List Wrapper**, (note that the collection list wrapper, is the parent of the collection list that is the parent of the collection item)

![](/images/collection-list-wrapper.png)

<custom-attribute dynamic name="query-name" value="query name"></custom-attribute>

### Main Query

The “main query” is whatever WordPress uses to build the content on the current page. For instance, on search results page the main query, is the query that shows all the current results.

Since it's pretty difficult to understand automatically if one of the collection list is supposed to be a main query (think about a page that has multiple collection lists all related to the same scope of the page), the Udesly app never makes this assumption. But if in the remote case you need to be sure that your collection list is associated to the main query, you just have to add the following attribute on the collection list wrapper:

<custom-attribute name="query-name" value="main"></custom-attribute>

You will need to use this query name on specialized search pages. You can make multiple search result pages in WordPress specialized for different post types, for example a page that shows only events, or products and so on... If you want to make a list of search results, in that case you need to use this attribute, since in Webflow you can use search results normally only on the search page. 

For example, if you want to use more dynamic elements in the default search page of Webflow, instead of being limited to just the title, the link and the search excerpt, you can use a collection list with this query name. In this case, you will be able to use more dynamic elements, don't use elements that you know are specific only to 1 post type, (don't use price for example inside the default search page, otherwise your server will throw errors saying the function get_price is not defined and so on).

### Upsells

This query is specific to WooCommerce and can be used only in the **Product Template** page of Webflow. This query has no equivalent in Webflow, since actually the upsells are manually selected product by product in WooCommerce.

To show Upsells products you just have to create a list of products in Webflow and add the following attribute on the collection list wrapper:

<custom-attribute name="query-name" value="upsells"></custom-attribute>

### Related Products

This query is specific to WooCommerce and can be used only in the **Product Template** page of Webflow. This query has no equivalent in Webflow, since actually the related are manually selected by WooCommerce.

To show Related products you just have to create a list of products in Webflow and add the following attribute on the collection list wrapper:

<custom-attribute name="query-name" value="related"></custom-attribute>

### Cross Sells

This query is specific to WooCommerce and can be used in any page of Webflow. This query has no equivalent in Webflow, since actually the cross-sells are manually selected product by product in WooCommerce, and are based on the products that your user actually have inside the Cart.

To show Cross sells product you just have to create a list of products in Webflow and add the following attribute on the collection list wrapper:

<custom-attribute name="query-name" value="cross-sells"></custom-attribute>

### Featured Products


This query is specific to WooCommerce and can be used in any page of Webflow. This query has no equivalent in Webflow, since "featured" is a term of a custom taxonomy called "product_visibility" (A total mess there by WooCommerce)

To show Cross sells product you just have to create a list of products in Webflow and add the following attribute on the collection list wrapper:

<custom-attribute name="query-name" value="featured-products"></custom-attribute>