---
title: "Search and Pagination"
---

Search and pagination are 2 features provided only for premium users of Udesly App. In order to work, this feature leverages the content api of Ghost to enable 2 functionalities that actually Ghost doesn't provide out of box.

In order to work you must provide a content api key, that you can generate from Ghost admin dashboard.

Follow the path: Settings > Integrations.

And press on the button **Add Custom Integration**, give to it any name you wish, and copy the Content api key that ghost generated for you.

![](/images/ghost-content-key.png)

This code you copied can be pasted in 2 different spots:

1. Directly inside our app when you are converting:

![](/images/ghost-content-key-field.png)

2. Directly inside the Ghost Admin, following the path: Settings > Design > Site-Wide

![](/images/ghost-api-key-admin-field.png)
