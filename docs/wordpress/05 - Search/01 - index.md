---
title: "Specialized Search Results"
---

WordPress has a built-in search engine, that will search by default in every post type you have in your site, and also inside pages! The search engine will use the page *Search Results* that you created in Webflow, you don't need any special configuration to use the basic search engine. It's all automatic. 

If you want though to make a search page that is specialized just for one post type, you need to configure it in a certain way, follow these 2 simple steps!

## 1. Create a specialized Search Form

By default the search form of Webflow will search on all your database, if you want to make instead a search form that searches only within 1 post type use the following attribute on the **Search** element.

<custom-attribute dynamic name="post-type" value="post-type"></custom-attribute>

For example if you want to search only in Products, you can use:

<custom-attribute name="post-type" value="product"></custom-attribute>

or you can just copy the search form below:

<copy-element name="Search Form for Products">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmRjMjggNTUzNy01IGQ4Mi0xYSAzMy0zNGUgOS0xY2I0IDRjMjYzZiQ0N+eCgHRhZ0Hngqpmb3Jt54KZQGNsYXNz6oKIJDVE5YC5aGlsUGRyZW7ogqLvgpNb74KT4YKTOOeDs++DgO+DgC406ISg74Ot74OtNGIn4oWr5oK+64W7U2VhMHJjaEbqg7dkI+WFveaFrWF0dHJB64CwY3Rpb+aDvDnihqVGc+OBpeKHjzdf5YSi6ICy5oaz64ex5oWn5oGPJnjpgoTmh5BuYW0h6IiicG9zdC0j5oi044iWdmFsdSHpgYByb2R1Y1505YKj4Yao4YKp5IKs74icL++InO+InOmGqeqInGxhWGJlbO+Ine+Ine+InVfvipDvipDiipA574eD5oyeIeKGvUJsb2NrXkzrgqHuh4fmirvvhpHrg5xf5oeB7oe14Yu5546P64ev74WpL++Npe+Npe2DteSNpWV4QeOGvjNBdHLih5hf44ej7Yqm6Imh74+R74+R74+RI+mMseqPkWlucHVf44i374+S74+S7I+S742O6I2OLknrgbTvjY/ujY91dEBvZm9jdeWSsDBmYWxz5YSgZCBpc2FibGUj5ZOa6YC5bWF4bDBlbmd05Y2hMiw1NuSUiuuMs3F1KGVyeeiUpWxhIGNlaG9sZCZl6Ieo5YW2RTIlUDgwJUHhgaTllZEgcmVxdWlyX+aCmOiGsOuWlOiPtOOWhemVnV/vkI7vkI7tl5/nhqTvia/vlrRf75a075On75a074iD75a175a1I++Ig++UsUJ1dHQv5JSE75Sz75Sz74WadWJcbWnoipTsk4nujIrvlYs97pycYueCqueOreaah3NYdHls75qf4peR4Zq2RnTvmrfhjKx4Me+bjCfhgLXhnafonZppbnQsZXLkmILvm7kyMlBldmVu74G655izWExpc+2Cl+eWpuGLtCJl7Jm2dW5saSBua2VkU3kgbWJvbENvNHVu5ZGAMOWco3Igb3BwZWRMJ+GBheWfquaAuXluQiBpbmRSZW1Qb3ZlZO+BmeKBgCfigqnvgYTqgb1wYWdYaW5h4pun74Gn4YKgIeOZnA==</copy-element>

## 2. Create a specialized Search results page

To create a specialized search results page, you just need to create a page in Webflow that has as slug the following pattern:

<div class="center">
    <pre><code class="language-text">search-{post-type}</code></pre>
</div>

So for example if you want to create a search results page just for products the page slug must be: 

<div class="center">
    <pre><code class="language-text">search-product</code></pre>
</div>


Inside this page to show search results, create a collection list of products and add the following attribute on the collection list wrapper:

<custom-attribute name="query-name" value="main"></custom-attribute>