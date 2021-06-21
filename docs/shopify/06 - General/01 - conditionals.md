---
title: "Conditionals"
---

Sometime is usefull to show/hide some elements according to certain conditions. While CMS conditions are all automatically converted, there are some conditions that Webflow doesn't supports yet, and can instead be used with custom attributes.

> Note that the elements are not visually hidden, they will not be present at all in your HTML!


## Show If
You can let Shopify render an element only if a condition is met, by using the attribute:

<custom-attribute dynamic name="show-if" value="condition"></custom-attribute>

## Hide If
Hide an item when a condition is met, by using the attribute:

<custom-attribute dynamic name="hide-if" value="condition"></custom-attribute>

### Logged In

To show/hide something when the user *is logged in* you can use respectively:

<custom-attribute name="show-if" value="logged-in"></custom-attribute>

<custom-attribute name="hide-if" value="logged-in"></custom-attribute>

### Has orders

To show/hide something when the user *has orders*:

<custom-attribute name="show-if" value="has-orders"></custom-attribute>

<custom-attribute name="hide-if" value="has-orders"></custom-attribute>

### Has items in cart

To show/hide something when the user *has items in cart*:

<custom-attribute name="show-if" value="has-items-in-cart"></custom-attribute>

<custom-attribute name="hide-if" value="has-items-in-cart"></custom-attribute>

### Cart is empty

To show/hide something when the cart *is empty*:

<custom-attribute name="show-if" value="cart-empty"></custom-attribute>

<custom-attribute name="hide-if" value="cart-empty"></custom-attribute>


### Customer accepts marketing

To show/hide something when the user *accepts marketing*:

<custom-attribute name="show-if" value="accepts-marketing"></custom-attribute>

<custom-attribute name="hide-if" value="accepts-marketing"></custom-attribute>

## Gift Card Conditions

Following conditions can be used only inside Gift card page.

### Expired

To show/hide something when the gift card *is expired*:

<custom-attribute name="show-if" value="gift-card-expired"></custom-attribute>

<custom-attribute name="hide-if" value="gift-card-expired"></custom-attribute>

### Active

To show/hide something when the gift card *is active*:

<custom-attribute name="show-if" value="gift-card-active"></custom-attribute>

<custom-attribute name="hide-if" value="gift-card-active"></custom-attribute>

### Used

To show/hide something when the gift card *has been used*:

<custom-attribute name="show-if" value="gift-card-used"></custom-attribute>

<custom-attribute name="hide-if" value="gift-card-used"></custom-attribute>