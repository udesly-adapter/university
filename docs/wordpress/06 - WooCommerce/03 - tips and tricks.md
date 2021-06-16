---
title: "Tips & Tricks"
---

In this page you can find a list of **Tips & Tricks** that can help you into the WooCommerce customization that requires some custom code!


## PHP Snippets

These snippets are common snippets that can be frequently used upon development, we suggest using the plugin [**Code Snippets**](https://wordpress.org/plugins/code-snippets/), to manage your PHP snippets!


### Disable all WC styles

WooCommerce enqueues 3 different stylesheets, if you want to disable them all, to avoid strange behaviours with your Webflow CSS, just add this snippet below:

```php
add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );
```

### Disable specific WC style

In order to remove just 1 or to remove selectively styles included by WooCommerce, take a look at the example below and customize the code according to your own needs:

```php
add_filter( 'woocommerce_enqueue_styles', function( $enqueue_styles ) {
	unset( $enqueue_styles['woocommerce-general'] );	// Remove the gloss
	unset( $enqueue_styles['woocommerce-layout'] );		// Remove the layout
	unset( $enqueue_styles['woocommerce-smallscreen'] );	// Remove the smallscreen optimisation
	return $enqueue_styles;
});
```