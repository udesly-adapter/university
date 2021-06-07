---
title: Create CMS Items
description: Markdown files example
---

## Markdown
To create a CMS item with your text editor you must create a new markdown file, for example if your site has a posts collection and you want to create a new post called that has a permalink "hello-world", create a file in the following path:

```
cms/posts/hello-world.md
```

and populate your file according to your own CMS structure. 

> It's greatly adviced to duplicate an already made CMS item exported from Webflow and modify the code accordingly.


Below you can find an example of a Markdown file of a post of the CMS

![markdwon example](/images/frontmatter-example.png)

Every Markdown file is composed by 2 parts:

### Frontmatter

Frontmatter is the starting part of the file delimited by 

```
---
```

this part defines all the properties of the current CMS item using the [**YAML Format**](https://yaml.org/).

### Content

This is the content of your cms item, and can be found after the frontmatter, this part of the file uses actual Markdown syntax, for a quick remind about markdown syntax follow this [**cheatsheet**](https://www.markdownguide.org/cheat-sheet/) or just the basic recap below here


| Element | Syntax |
| ----------- | ----------- |
| Headings | # H1 </br> ## H2 </br> ### H3|
| Bold | \**bold text** |
| Italic | \*italicized text* |
| Blockquote | \> blockquote |	
| Link | \[title](https://www.example.com) |
| Image | \!\[title](image.jpg) |



## \[BETA] Local Netlify CMS

If you are not too practical with Markdown Files, and you want to use Netlify CMS locally to develop your site. Follows these steps:


1. Check **Local Backend** in Udesly App settings;

![](/images/local-backend-setting.png)

2. Convert your theme;

3. Download the zip;

4. Unzip the theme;

5. Open two terminal windows;

6. Launch respectively the following commands in the different windows:

```
cd "Full unzipped folder path" && npm i && npm run serve
```

```
cd "Full unzipped folder path" && npm run local-backend
```

> Naturally, you have to swap Full unzipped folder path, with the actual full path of your folder, for example ~/home/downloads/my-theme or D:\\Downloads\my-theme

7. By default **11ty** serve command will spin a local server that listens to the port 8080, so open your browser and go to **localhost:8080/admin** to open Netlify CMS;