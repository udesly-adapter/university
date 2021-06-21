---
title: "Liquid Elements"
---

Naturally due to the nature of Shopify that is infinitely extensible there are surely some advanced stuffs that is still not covered by the automatic conversion or by the attributes conversion. But don't worry, with Liquid elements you are free to make anything you wish, and add your own Liquid code directly in Webflow!

> Do it at your own risks, the Udesly App doesn't ensure that the Liquid code you inject will be valid, so it is not responsible for bricked servers, fires or thermonuclear wars ☢️. So be sure that the code you are writing is correct! (Or at least be sure you have an FTP access in order to rollback the theme if WordPress explodes 💣)


## If

You can wrap any element inside an If custom condition just by adding the custom attribute:

<custom-attribute dynamic name="liquid:if" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div liquid:if="customer.orders_count > 5"> 
    Show only if customer has made more than 5 orders
</div>
```

It will be converted into:

```liquid
{%- if  customer.orders_count > 5  -%>
    <div>Show only if customer has made more than 5 orders</div>
{%- endif -%}
```


## Unless

You can wrap any element inside an Unless custom condition just by adding the custom attribute:

<custom-attribute dynamic name="liquid:unless" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div liquid:unless="customer.orders_count > 5"> 
    Show unless customer has made more than 5 orders
</div>
```

It will be converted into:

```liquid
{%- unless customer.orders_count > 5  -%>
    <div>Show unless customer has made more than 5 orders</div>
{%- endunless -%}
```


## For

You can wrap any element inside a For loop just by adding the custom attribute:

<custom-attribute dynamic name="liquid:for" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div liquid:for="product in collection.products"> 
    I will be repeated once for each product inside the collection
</div>
```

It will be converted into:

```liquid
{% for product in collection.products %}
  <div> I will be repeated once for each product inside the collection</div>
{% endfor %}
```

> Kinda useless example, but obviously you can mix Liquid elements to make complex and dynamic html structures!


## Object

You can add the following custom attribute to just output a liquid object inside the element where the attribute is placed (all the content inside will be deleted):

<custom-attribute dynamic name="liquid:object" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div> 
    Today is <span liquid:object="'now' | date: '%Y-%m-%d %H:%M'"></span>
</div>
```

It will be converted into:

```liquid
<div> 
    Today is <span>{{ "now" | date: "%Y-%m-%d %H:%M" }}</span>
</div>
```

```liquid:object``` attribute can also be modified with the optional attribute ```where``` explained below.


## Tag

You can add the following custom attribute to just output a liquid tag inside the element where the attribute is placed (all the content inside will be deleted):

<custom-attribute dynamic name="liquid:tag" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div liquid:tag="render 'snippet'"> 
    
</div>
```

It will be converted into:

```liquid
<div> 
    {% render 'snippet' %}
</div>
```

```liquid:tag``` attribute can also be modified with the optional attribute ```where``` explained below.



### Where

Where attribute is an optional attribute that can be used only in combination with ```liquid:object``` and ```liquid:tag``` attribute explained before. This attribute modifies where the code inserted inside the ```liquid:object``` and ```liquid:tag``` attribute will be outputted.

<custom-attribute dynamic name="where" value="position"></custom-attribute>

For **position** you can use several values

#### Before

<custom-attribute name="where" value="before"></custom-attribute>

Will output the code **before** the element where ```liquid:object``` or ```liquid:tag``` attribute is placed.

For example if in Webflow you create a structure like this:

```html
<div liquid:tag="assign tag = product.tags | first" where="before"> 
    My Div
</div>
```

it will be converted into 

```liquid
{%- assign tag = product.tags | first -%}
<div>
    My Div
</div>
```

#### After

<custom-attribute name="where" value="after"></custom-attribute>

Will output the code **after** the element where ```liquid:object``` or ```liquid:tag``` attribute is placed.

For example if in Webflow you create a structure like this:

```html
<div liquid:tag="assign tag = product.tags | first" where="after"> 
    My Div
</div>
```

it will be converted into 

```liquid
<div>
    My Div
</div>
{%- assign tag = product.tags | first -%}
```


#### Prepend

<custom-attribute name="where" value="prepend"></custom-attribute>

Will **prepend** the code inside the element where ```liquid:object``` or ```liquid:tag``` attribute is placed.

For example if in Webflow you create a structure like this:

```html
<div liquid:tag="assign tag = product.tags | first" where="prepend"> 
   <ul>
        <li>other elements....</li>
   </ul>
</div>
```

it will be converted into 

```liquid
<div>
   {%- assign tag = product.tags | first -%}
   <ul>
        <li>other elements....</li>
   </ul>
</div>
```

#### Append

<custom-attribute name="where" value="append"></custom-attribute>

Will **append** the code inside the element where ```liquid:object``` or ```liquid:tag``` attribute is placed.

For example if in Webflow you create a structure like this:

```html
<div liquid:tag="assign tag = product.tags | first" where="append"> 
   <ul>
        <li>other elements....</li>
   </ul>
</div>
```

it will be converted into 

```liquid
<div>
   <ul>
        <li>other elements....</li>
   </ul>
    {%- assign tag = product.tags | first -%}
</div>
```

#### Style.

<custom-attribute dynamic name="where" value="style.style-property"></custom-attribute>

Will output the property on the style attribute of the element where ```liquid:object``` or ```liquid:tag``` attribute is placed according to the style-property used

For example if in Webflow you create a structure like this:

```html
<div liquid:object="product.metafields.general.color" where="style.background-color"> 
   My Div
</div>
```

it will be converted into

```liquid
<div style="background-color: {{ product.metafields.general.color }}"> 
   My Div
</div>
```

Care about the style-property ```background-image```

In this case if in Webflow you create a structure like this:

```html
<div liquid:object="product.metafields.general.image" where="style.background-image"> 
   My Div
</div>
```

it will be converted into

```liquid
<div style="background-image: url('{{ product.metafields.general.color }}')"> 
   My Div
</div>
```

So you don't have to output also ```url( )```!


#### HTML Attribute

<custom-attribute dynamic name="where" value="html-attribute"></custom-attribute>

Will output the property on the attribute of the element where ```liquid:object``` or ```liquid:tag``` attribute is placed according to the html-attribute used.

For example if in Webflow you create a structure like this:

```html
<div liquid:object="product.handle" where="id"> 
   My Div
</div>
```

it will be converted into

```liquid
<div id="{{ product.handle }}">
   My Div
</div>
```


> With Liquid elements the sky is your only limit, you can be creative and create any type of structure you need! But there's actual one limit though, inside the value of the attribute do not use ```"``` (double quotation marks) but only ```'``` (single quotation marks)