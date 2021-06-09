---
title: Limitations
description: JamStack limitations
---

Well… not all that glitters is gold!

Below you can find a list of limitations that hopefully will be resolved in the future, but you should be aware before converting.

## Udesly App

* CMS bindings added inside before ```</head>``` or ```</body>``` sections of Webflow will not be automatically converted, use embeds if you need to add CMS driven code;

* Code optimizations like *defer all scripts* or *defer css* are not implemented yet;

* Video Field doesn't work correctly yet;

## Netlify CMS

* No support for i18n;

## Snipcart

* Missing support for subscriptions, this feature is in Beta for Snipcart and it's still not implemented in the Udesly App;

