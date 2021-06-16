---
title: "User meta"
---

If you want to create a page that is dynamic for each user, you can use user meta values to show User specific values. For example you can create a restricted page, specialized for each user with it's own data!

Just add the following attribute on a text block

<custom-attribute dynamic name="usermeta" value="usermeta name" ></custom-attribute>

Where user meta must be the Database name of the user meta

Some user meta already predefined by WordPress are:

* ```first_name```
* ```last_name```
* ```description```
* ```url```

Some others will get created by WooCommerce like:

* ```billing_state```;
* ```shipping_state```;

But you can show your own user metas just adding the name you wish, for example:
* ```food_preference```;

You can also let your user change it's own usermeta by using the [**Edit User Form**](/wordpress/forms/account#edit-user)!