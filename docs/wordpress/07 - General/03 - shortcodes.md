---
title: "Shortcodes"
---

A **shortcode** lets you do nifty things with very little effort. Think about a shortcode as a *shortcut* to add features to your website that would normally require lots of complicated code and technical ability.

A shortcode is written inside two square brackets. WordPress includes by default several built-in shortcodes that you can find on the [**official codex**](https://codex.wordpress.org/Shortcode).

For example, the ```[youtube https://www.youtube.com/watch?v=mzw6OGsoYSc]``` shortcode can be used to add a youtube video in page or post.

In Webflow you can add shortcodes on every page you want, but to do that you need to use custom attributes. Use a text block and add the attribute:

<custom-attribute name="shortcode" value="true"></custom-attribute>

Inside the text block you should add the shortcode code.

To get an example just copy and paste the following element:

<copy-element name="Shortcode">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjU2MTIgNGE4MC02IGVjNi1lZiA4MS0yZTAgMS1kYmZiIGJjOGNiMiRkNOeCgHRhZzHngqpkaXbngphjMGxhc3PqgocyIDI3ZDYzNyA3ZDUtODkgMzQtZmM5IDctN2EyYiAtZGRmMzkgOWI5NTIzQeGDlTIlNUTlgaMgaGlsZHJlLm7qgaTvgrzvgrxkNSPqgaTrhYpCbG9jOmvnhLpk5YWH5oS3dChleHTkhbV0ci514YW/74O+6YO+eGEodHRy7YWjbmEibeiGtXNob3IsdGPhhonnhql2YS5s4oG25YeV5IKDMiVcN0TihI/hgKbhgKnhh5Bf74as74as74as5ISQ5Ias74OiI+GCl+iJiDVCeW8wdXR1YuGJmzBAaHR0cHPjiaAiRuGJlnd3dy5B5YC8LmNvbeKAsiBhdGNoJTMgRnYlM0RtIHp3Nk9Hc1BvWVNj44a85oOWQeOKgHN0eWzvia4/6omu74iW74iW5IiW44uOZiRha+WLuWZhbF5z5oal6oyO44m454u+74aUI+yGlOKGs3NwYWND6Y2N54uAb21i74C2OeSDrkxl5IKC7IGRdiBhcmlhbnRf5o2Z4Y6o5IeT74uI4Y2z54S9IGVsZWN0b0HliYpudWxs6oWbJ+KNgeeBsOmBlml4MS/vgavhgLXjjLzmj6RpbiB0ZXJhY3QoaW9u74GiMjJYZXZl6IOK6YKw5IGROExpc+2Cl+eKoDIoMm1l7Iy2dW4gbGlua2VkIFN5bWJvbDBDb3Vu5Y2FMCHljaZyb3BwZTxkTOGBheWRtOaAuXkgbkJpbmRSIGVtb3ZlZD/vgZnigYDigqnvgYTqgb1wQGFnaW5h4oSFJ++Bp+GCoOONlg==</copy-element>