---
title: Third-party Services
description: Intro to Netlify
---

With JamStack you can create also eCommerce websites by just integrating some services! There is a common misconception that static websites can't really handle or offer some of the basic eCommerce features and functionalities. In particular on the checkout and account features.
These limitations can be overcome with the use of third-party tools. JamStack ecosystem is already huge and it comes with plenty of API options.
Some of these options can be integrated using directly Webflow Ecommerce elements, some of others can be used just using Webflow CMS instead.


## Webflow CMS

Below you can find a list of services that you can use using just the Webflow CMS and without eCommerce elements support

### Shopify Buy Buttons

You can use Shopify Buy buttons, just like you would do on a Webflow hosted website, you can just follow in fact the [**official doc**](https://university.webflow.com/integrations/shopify).

### Foxy

You can use Foxy integration as well, just like you would do on a Webflow hosted website, just follow the [**official tutorial**](https://support.foxy.io/webflow/getting-started-with-foxy-webflow)


## Webflow eCommerce

Below you can find a list of services that you can use using instead the Webflow eCommerce elements, like the Cart flyout and the add to cart buttons (Checkout and Order confirmation are not used).

### Snipcart

Just create your site as a normal Webflow eCommerce website. The only steps you have to follow are:

1. Grab your public ApiKey from [**here**](https://app.snipcart.com/dashboard/account/credentials);
2. Open your Netlify CMS admin panel;
3. Navigate to **Theme Settings**;

![](/images/theme-settings-jamstack.png)

4. Press on **eCommerce**;

5. Paste your **Public Api Key**;

![](/images/snipcart-settings.png)

6. \[Optional] change the Snipcart style settings according to your theme;

7. Configure your [**domains**](https://app.snipcart.com/dashboard/account/domains);

8. If you want to import your products in snipcart too add the url https://yourdomain.tld/data/products.json on [**this page**](https://app.snipcart.com/dashboard/products/fetch);


### \[Backlog] Stripe Checkout 

> 🚧 In development 🚧