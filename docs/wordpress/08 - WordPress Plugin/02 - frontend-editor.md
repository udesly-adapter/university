---
title: "Frontend Editor"
---
The Frontend Editor allows to edit some content in your WordPress site visually, without need to access your Webflow theme again. It is accessible by enabling the Udesly WP plugin.

You can disable the frontend editor from the Udesly Adapter. It automatically takes: images, texts, links, iframes and videos.

![](/images/frontend-editor.png)


To access the frontend editor, you just need to click the button **Open Frontend Editor**, that you can find while you navigate the frontend of your site

![](/images/open-frontend-editor.png)


## How it works?

Contents are referenced through an hashing of the content itself.

E.G. an H1 with content "my title" gets hashed to a code like text_12123123, so when the client edits this, it changes the value that referres to that specific code. Every conversion releases always the same hash for the same content, so you lose your client's edits only if you change the H1 with text "my title" with another content.

Because the hashing is always the same, if you have two duplicates elements in the same page (2 lorem ipsum, for example), these elements cannot be edited separately. To overcome this problem you can use the following attribute:

<custom-attribute dynamic name="key" value="unique key"></custom-attribute>

The unique key is totally up to you, just be sure that this is unique per page.

The data inside symbols is globally modified, so if you change it in one page it will be changed in all the pages.

Symbols data can be modified by pressing the **Hamburger Button** on the top left side of the frontend editor and then by pressing on: **Symbols**

![](/images/symbols-fe.png)


## Not Editable

For now the following elements are still not convertible yet, but will be convertible in next updates (hopefully!)

* Colors

* Background Images

