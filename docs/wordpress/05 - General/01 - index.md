---
title: "Introduction"
---

In this section you will find all generic functionalities specific of WordPress that do not fall into any other section, like shortcodes, widgets and so on. All functionalities that unfortunately cannot still be automatically converted, so you need custom attributes for that. Just as a reminder if you skipped the [**reading tips**](/wordpress/intro/reading-tips).


Custom attributes are a special way to *provide additional information* to elements. They are made of 2 parts:

1. **Name**
2. **Value**

And they can be added inside the Element settings menu



![custom attributes menu](/images/add-custom-attributes.png)

You will find them inside the doc in the following ways:



* Static Attributes

<custom-attribute name="name" value="value"></custom-attribute> 

These attributes are static, so do not change them, just copy the left part inside *Name* and the right part inside *Value*. To copy faster, you can just press on name and on value, they will copy the value to clipboard so you don't need to rewrite them!



* Dynamic Attributes

<custom-attribute dynamic name="name" value="dynamic-value"></custom-attribute> 

These attributes are dynamic, and it means that the name can be copied, but the value can change according to the situation and will be explained time by time.



## Copy Elements

You can find inside the doc directly the elements preconfigured with attributes that you can paste inside Webflow, *yes you can paste them inside Webflow.*

Just try it! Press on the button bellow:

<copy-element name="Sample Element">IHsidHlwZSAiOiJAd2UgYmZsb3cvIFhzY3BEYSB0YSIsInAgYXlsb2FkICI6eyJubyBkZXMiOlsweyJfaeGAsSIgYTNiMzYwIDcwLTljZSJh4YClOWQtNyRmZeGAr2I0ZCA0N2JiMGYkZWPhgaJ0YWcj4oGN4YGsY2xhcypz44GjXeGArWhpQGxkcmVu4YGxI++Bqu+BqmZlZCIj4YGU5YOITGluay3hgrtk4oOC4YK4YnUodHRv4YGodHJAdWUsImzigL0t4YOObeGDjuGDtGV4IHRlcm5hbDHhg6t1cmzhhIUjICJ9LCJ4YSh0dHLjg6tuYSJt4oSbc2FtcCBsZS12YWxcdWXhhJbkgKjngLfjgYVAfV19fSzvhJw/74Sc6YOS4YSc4YKf5oK5dkXhhoJT44KHIELkg5IifeGEp3N0eWwr5oSz4oS+dOWEv2l4KjHmgKky4oadaW4h4YOoYWN0aW8ibuWFoWV2ZW5D5oGO5IC5TGlz5IGfMeGDiSJtZeSEvnUibuKEsmVkU3kgbWJvbENvNHVu4YKyMOGFnnJAb3BwZWTihawj4Ye14oCxeW5CaSBuZFJlbW9IdmVk6YGJeeOBuSPvgLzigaVwYWdpLG5h4oK17YGXfX0=</copy-element>

Go to Webflow and press <kbd>ctrl + v</kbd>/<kbd>⌘ + v</kbd>

You should now see a Button, with text "Sample Button", and a custom attribute:

<custom-attribute name="sample-name" value="sample-value"></custom-attribute> 
