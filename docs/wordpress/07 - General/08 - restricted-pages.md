---
title: "Restricted Pages"
---

In the previous versions of Udesly App, you could restrict pages using the Rule functionality that was included in the WordPress plugin. This functionality has been removed, 99% of the times the only rule that was getting used was to restrict page for not logged in users. 
Webflow will introduce this page restriction later this year, and it will be so automatically configured by the extension. 
Until that feature will be available there is a simple workaround, you just need to copy and paste one of the following elements inside the before ```</body>``` section of Webflow.

The code that you have to paste inside Webflow is basically just a configurable custom element

```html
<redirect-rule condition="not-logged-in" to="/"></redirect-rule>
```

As you can see there are 2 attributes ```condition``` and ```to```:

### Condition

This attribute can have just 2 values for now:

* not-logged-in
* logged-in

Pretty autoexplicative, 

```html
<redirect-rule condition="not-logged-in" to="/"></redirect-rule>
```

Will redirect users that are not logged in to the home page.

While

```html
<redirect-rule condition="logged-in" to="/"></redirect-rule>
```

will redirect users that are logged in to the home page

### To

The attribute **to** allows you to decide where to redirect the user

For example you can set the attribute ```to="/login"```

To redirect the user to a page of your site that has as slug **login**



### Advanced Usage

Actually the redirect-rule custom attribute can also be used without specifying ```condition``` in this case, you can add your own custom php code that will redirect the users, for example


```html
<redirect-rule>
if (!is_user_logged_in()) {
    wp_redirect(site_url("/"));
}
</redirect-rule>
```

Is exactly the same thing of writing

```html
<redirect-rule condition="not-logged-in" to="/"></redirect-rule>
```

But since the Udesly app recognizes only those 2 conditions, you might want to write your own condition that is more complex

Example

```html
<redirect-rule>
if (date('l') !== "Saturday") {
    wp_redirect(site_url("/"));
}
</redirect-rule>
```

Basically the page is accessible only on Saturday! 🤣