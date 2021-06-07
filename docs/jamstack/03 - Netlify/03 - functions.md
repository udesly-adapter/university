---
title: Functions
description: Functions on Netlify
---

[*Netlify functions*](https://www.netlify.com/products/functions/) are a way to build scalable, dynamic applications. They allows you to deploy server-side code that works as API endpoints, runs automatically in response to events, or processes more complex jobs in the background. 

The Udesly App allows you to upload custom functions along your JamStack site, just by adding zips during conversion process, the adapter already makes a redirect on Netlify configuration, to serve all your functions behind the routes **/api/\***.

So for example if you create a function called hello world, you can call it using JS of Webflow Forms at the action/url **/api/hello-world**



## How to write a λ function?

First of all read carefully the Netlify introduction on [*JS functions*](https://docs.netlify.com/functions/build-with-javascript/) or [*Go functions*](https://docs.netlify.com/functions/build-with-go/), or take inspiration from some [*example*](https://functions.netlify.com/examples/).


## How to deploy a λ function?

After your code has been written in JS, TS or Go, you have to create a Zip of your function using <div class="center"><a href="https://github.com/netlify/zip-it-and-ship-it" target="_blank"><img class="mw" src="https://raw.githubusercontent.com/netlify/zip-it-and-ship-it/main/zip-it-and-ship-it.png" alt="netlify zip it and ship it"/></a></div>

Once the zip has been created you can upload it during the conversion on the Udesly App.

## How to use a λ function?

You can send custom data to your λ endpoint just by using Webflow forms and setting as action */api/slug-of-the-function*, or you can use JS scripts like

```js
(async () => {

    // Data to send
    const jsonBody = JSON.stringify({
        foo: bar
    });

    const response = await fetch('/api/slug-of-the-function', {method: "POST", body: jsonBody});

    if (response.ok) {
        const data = await response.json();

        // do something with the response
        console.log(data);
    }
})()
```