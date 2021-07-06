---
title: "Conditionals"
---

Sometime is useful to show/hide some elements according to certain conditions. While CMS conditions are all automatically converted, there are some conditions that Webflow doesn't supports yet, and can instead be used with custom attributes.

> Note that the elements are not visually hidden, they will not be present at all in your HTML!

## Generic conditions

Below you can find a list (very short) of all supported conditions that you can use in 2 ways:

### Show If
You can let WordPress render an element only if a condition is met, by using the attribute:

<custom-attribute dynamic name="show-if" value="condition"></custom-attribute>


### Hide If
Hide an item when a condition is met, by using the attribute:

<custom-attribute dynamic name="hide-if" value="condition"></custom-attribute>


### Logged In

To show/hide something when the user *is logged in* you can use respectively:

<custom-attribute name="show-if" value="logged-in"></custom-attribute>

<custom-attribute name="hide-if" value="logged-in"></custom-attribute>


### Is Reset Password page

To show/hide something when the current page is the reset password page, you can use respectively

<custom-attribute name="show-if" value="is-reset-password-page"></custom-attribute>

<custom-attribute name="hide-if" value="is-reset-password-page"></custom-attribute>


## WooCommerce Conditions

Below you can find a list (very short) of all supported conditions related only to WooCommerce that you can use in 2 ways:

### Show If
You can let WordPress render an element only if a condition is met, by using the attribute:

<custom-attribute dynamic name="show-if:wc" value="condition"></custom-attribute>


### Hide If
Hide an item when a condition is met, by using the attribute:

<custom-attribute dynamic name="hide-if:wc" value="condition"></custom-attribute>

### Upsells

To show/hide something when the current product has upsell products you can use respectively:

<custom-attribute name="show-if:wc" value="upsells"></custom-attribute>

<custom-attribute name="hide-if:wc" value="upsells"></custom-attribute>

Note that this condition can be used only within Product page or within a collection list of products.


## Usermeta Conditions

Usefull to show/hide some elements if user has or not an usermeta value

### Show If
You can let WordPress render an element only if a condition is met, by using the attribute:

<custom-attribute dynamic name="show-if:usermeta" value="usermeta"></custom-attribute>


### Hide If
Hide an item when a condition is met, by using the attribute:

<custom-attribute dynamic name="hide-if:usermeta" value="usermeta"></custom-attribute>

> For usermeta you can use any usermeta value, but remember it must be equal to the database name of the usermeta. E.g: billing_country, username


## Capability Conditions

Usefull to show/hide some elements if user has or not a capability

### Show If
You can let WordPress render an element only if a condition is met, by using the attribute:

<custom-attribute dynamic name="show-if:capability" value="capability"></custom-attribute>

### Hide If
Hide an item when a condition is met, by using the attribute:

<custom-attribute dynamic name="hide-if:capability" value="capability"></custom-attribute>

> All the default capabilities can be found on the [**official codex**](https://wordpress.org/support/article/roles-and-capabilities/)

For example you can add on a page an element that only admin can see using:

<custom-attribute name="show-if:capability" value="administrator"></custom-attribute>