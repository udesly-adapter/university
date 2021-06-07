---
title: Limitations
description: Shopify platform limitations
---



Well... not all that glitters is gold!

Below you can find a list of limitations that hopefully will be resolved in the future, but you should be aware before converting. 



## Webflow

1. Elements regarding the **Account** functionalities still need to be made with *Custom Attributes*;
2. The **Cart** page (not the Mini Cart), that is not mandatory, needs a specific configuration since there's no comparable element in Webflow;



## Shopify

1. Theme max size in **MB** is 50. You can't upload theme that are bigger than **50MB**, the Udesly App will refuse to convert such sites, to avoid bad sorrows when you will upload the theme inside Shopify;
2. The max number of translation keys is hard capped at 3000. The Udesly App will fail to convert and ask you to disable translations if your site has a lot more texts;
3. The page permalink structure is defined and not changeable, all your pages will be under the path /pages/, *e.g: your page contact-us in Webflow, will be /pages/contact-us in Shopify*;
4. **Checkout** is not modifiable, in Shopify you can just upload a css file and only if you have a **Shopify Plus** plan ($299+);
5. Shopify as CMS is pretty limited and only allows you to create *Blogs*, fortunately you can create unlimited *Blogs*, so the Udesly App will create 1 different *blog* for each CMS collection you created in Webflow, but the permalink structure is locked also here. *e.g: if you created a collection called events in Webflow, you will find it under /blog/events in Shopify* and you can't change it;
6. All the style modifications can be done only in Webflow, in Shopify you can just modify some settings and CMS data, if you need to change style, layout, create new pages, you need to do it in Webflow and reconvert.



## Udesly App

1. Some Shopify functionalities are not convertible yet and are available only through *Liquid Elements*;
2. Sections conversion has not reached feature parity with old Udesly App;
3. Integrations with third party Shopify apps needs better support and explanations with examples for the most important and used apps;



## Shopify App

1. Featured images of variation are imported as product images so they must be attached manually after import;