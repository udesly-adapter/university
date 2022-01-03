---
title: "Conditionals"
---

Sometime is usefull to show/hide some elements according to certain conditions. While CMS conditions are all automatically converted, there are some conditions that Webflow doesn't supports yet, and can instead be used with custom attributes.

> Note that the elements are not visually hidden, they will not be present at all in your HTML!


## Show If
You can let Ghost render an element only if a condition is met, by using the attribute:

<custom-attribute dynamic name="show-if" value="condition"></custom-attribute>

## Hide If
Hide an item when a condition is met, by using the attribute:

<custom-attribute dynamic name="hide-if" value="condition"></custom-attribute>

### Logged In

To show/hide something when the user *is logged in* you can use respectively:

<custom-attribute name="show-if" value="member"></custom-attribute>

<custom-attribute name="hide-if" value="member"></custom-attribute>

### Has Subscriptions

To show/hide something when the user *has subscriptions*:

<custom-attribute name="show-if" value="has-subscriptions"></custom-attribute>

<custom-attribute name="hide-if" value="has-subscriptions"></custom-attribute>

### Paid Member

To show/hide something when the user is a *paid member*:

<custom-attribute name="show-if" value="paid-member"></custom-attribute>

<custom-attribute name="hide-if" value="paid-member"></custom-attribute>

### Has Access

To show/hide something when the user has *access* to the current showed resource

<custom-attribute name="show-if" value="access"></custom-attribute>

<custom-attribute name="hide-if" value="access"></custom-attribute>