---
title: Deploy on Netlify
description: Intro to Netlify
---

**Netlify** is one of the most comprehensive platform for web projects and has an enourmous free tier that allows you to host many and many sites for free and even with custom domains! Also with **Netlify Identity** free tier you can create 5 admins for each site you deploy!

## How to deploy/update a site?

Once converted just follows these steps:

1. Upload your project to Github, either using the Udesly App, the Github CLI, or the Github desktop app!


**Only on first deploy**

* Create a [**Netlify account**](https://app.netlify.com/signup) by logging with **Github**;
* Once in your dashboard Press on **New Site from Git**
![](/images/new-site-from-git.png)
* Select **Github**
![](/images/select-github.png)
* Select your repository;
* Press on **Deploy Site**.
![](/images/deploy-site-button.png)



<ol>2. Wait Netlify building process;</ol>


## Admin users

To add admin users to your site, select your site from the Netlify dashboard. 

* Press on **Site Settings**;

![](/images/site-settings.png)

* Select **Identity**;

![](/images/netlify-identity.png)

* Press on **Enable Identity**;

* Under **Registration preferences** select **Invite Only**;

* Under **Services** press on **Enable Git Gateway**;

* Press on **Identity** tab on top bar;

![](/images/netlify-identity-tab.png)

* Press on **Invite users** and add the emails of your admins!

## Domains

To assign a custom domain to your site, just follow the [**official netlify doc**](https://docs.netlify.com/domains-https/custom-domains/#assign-a-domain-to-a-site)