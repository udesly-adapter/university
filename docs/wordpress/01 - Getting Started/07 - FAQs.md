---
title: FAQs
description: FAQs for WordPress
---

Below you can find a list of all the most frequently asked questions we receive daily!

## 1. Can I delete the Webflow project after conversion?

You can if you want, but it's greatly adviced to not do it! Webflow doesn't allow to get back the project from your hard drive and if you want to modify your site in terms of style and layout you need to reconvert it!

## 2. Do I need an active Udesly subscription to use the site?

No you don't need to, once converted your site will be there and it will work also without a subscription. But you need the subscription in order to convert again your project. And you will need to reconvert if you need to modify your site layout or style.

## 3. What are the limits of the Free plan?

Well for WordPress there are few limits:

* **Made with Udesly** Banner;

* **All collection lists** are limited to 3 items per collection;

* **Contact Forms** are disabled;

## 4. Can I change style or layout after conversion?

If you can code, you can add style snippets directly in WordPress, otherwise you need to modify in Webflow and convert again!

## 5. Do I lose CMS data when I reupload the theme to WordPress?

No, WordPress never deletes your settings when you update a theme, and the Udesly App doesn't even update posts or pages with the same slug already created!

## 6. Can I use plugin X?

Sure you can, but probably you need to add some php code somewhere or use shortcodes. But you can do both in Webflow!

## 7. Can I modify the theme using a page builder?

No you can't! Your page builder is Webflow!

## 8. When I upload the theme there's an error saying that the link is expired!

This error is basically a wrong naming. An error like this, or an error saying 413 entity too large means only one thing in WordPress. Your theme is **too big** 🐘 to be uploaded! 
You can do 2 things:

1. Modify your server **php.ini**: search for the properties ```post_max_size``` and ```upload_max_filesize```, both must be higher than your theme size!

2. Use an FTP client to upload the theme;

## 9. I don't receive forms by Email!

99% of times this means your server has a wrongly configured SMTP, use a plugin like [**WP Mail SMTP**](https://wordpress.org/plugins/wp-mail-smtp/), in order to check or change your server configuration.

## 10. My homepage scrolls infinitely and repeats itself!

WordPress is born as a Blog Engine, so by default the Homepage of your WordPress site will be the blog page. If you don't want to have the blog page on your home, you should set your homepage as static and select a page to show! You can do it from your WordPress admin panel, following the path *Settings » Reading*.