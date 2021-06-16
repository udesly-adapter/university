---
title: "HTML Elements"
---

There are few HTML attributes that can be used to slightly modify Webflow elements structure! They are pretty powerfull and will allow you to create something that in Webflow cannot be done!


## Attributes

<custom-attribute dynamic name="html:attribute" value="attributes pattern"></custom-attribute>

This attribute allows you to add on conversion attributes to any elements, the **attributes pattern** has this structure:

```attribute-name|attribute-value```

You can also add multiple attributes and values at the same time following the pattern below

```name1|value1;name2|value2;```

If you are asking yourself: "Why should I use it, if there are already custom attributes? 🤔". Well, Webflow doesn't allow to add all html attributes possible, some of that are reserved, and also Webflow doesn't allow you to change attributes that are already defined!

How many times you needed an input type hidden on your forms and you ended up using embeds?! You don't need to do it anymore! 🤩

Just read this example, if in Webflow on a input type plain text you add the attribute

<custom-attribute name="html:attribute" value="type|hidden;value|my-hidden-value"></custom-attribute>

You will have an input type hidden that has as value my-hidden-value!

```html
<input type="text" name="My Input" html:attribute="type|hidden;value|my-hidden-value"/>
```

will be converted into

```html
<input type="hidden" name="My Input" value="my-hidden-value"/>
```


### Unwrap

<custom-attribute name="html:unwrap" value="true"></custom-attribute>

Will unwrap the html element where the attribute is placed, this is usefull for example to remove the extra div of the webflow html embeds.

For example if you inside the Embed in Webflow you have only one html child, you can add on that child the attribute html:unwrap="true", in this way the embed div of Webflow once converted will be removed


```html
<div class="w-embed">
    <script html:unwrap="true">
    // do something
    </script>
</div>
```

Will be converted into

```html
<script>
    // do something
</script>
```

If you add this element inside a collection list item, that item will be unwrapped from the collection list, and the collection list will be removed!