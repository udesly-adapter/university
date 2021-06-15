---
title: "PHP Elements"
---

Naturally due to the nature of WordPress that is infinitely extensible there are surely some advanced stuffs that is still not covered by the automatic conversion or by the attributes conversion. But don't worry, with PHP elements you are free to make anything you wish, and add your own PHP code directly in Webflow!

> Do it at your own risks, the Udesly App doesn't ensure that the PHP code you inject will be valid, so it is not responsible for bricked servers, fires or thermonuclear wars ☢️. So be sure that the code you are writing is correct! (Or at least be sure you have an FTP access in order to rollback the theme if WordPress explodes 💣)


## If

You can wrap any element inside an If custom condition just by adding the custom attribute:

<custom-attribute dynamic name="php:if" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div php:if="date('l') == 'Saturday'"> 
    Show only if today is Saturday
</div>
```

It will be converted into:

```php
<?php if( date('l') == 'Saturday' ) : ?>
    <div>Show only if today is Saturday</div>
<?php endif; ?>
```


## Unless

In PHP actually **unless** doesn't exists, this is just a shortcut to make the inverse of the if condition! (Kindly stolen by Liquid language)
You can wrap any element inside an Unless custom condition just by adding the custom attribute:

<custom-attribute dynamic name="php:unless" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div php:unless="date('l') == 'Saturday'"> 
    Show only if today is not Saturday
</div>
```

It will be converted into:

```php
<?php if( !(date('l') == 'Saturday' ) ) : ?>
    <div>Show only if today is not Saturday</div>
<?php endif; ?>
```

Basically, it's just usefull when you write the wrong if condition, and you actually instead wanted to write the opposite result 🤷‍♂️

## For

You can wrap any element inside a For loop just by adding the custom attribute:

<custom-attribute dynamic name="php:for" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div php:for="$i = 0; $i < 10; $i++"> 
    I will be shown 10 times
</div>
```

It will be converted into:

```php
<?php for ($i = 0; $i < 10; $i++) : ?>
    <div>I will be shown 10 times</div>
<?php endfor; ?>
```

> Kinda useless example, but obviously you can mix PHP elements to make complex and dynamic html structures!

## Foreach

You can wrap any element inside a Foreach loop just by adding the custom attribute:

<custom-attribute dynamic name="php:foreach" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div php:foreach="[1,2,3,4] as $number"> 
    I will be shown 4 times
</div>
```

It will be converted into:

```php
<?php foreach ([1,2,3,4] as $number) : ?>
    <div> I will be shown 4 times</div>
<?php endforeach; ?>
```

> Kinda useless example too, but obviously you can mix PHP elements to make complex and dynamic html structures!


## Echo

You can add the following custom attribute to just use the php echo function inside the element where the attribute is placed (all the content inside will be deleted):

<custom-attribute dynamic name="php:echo" value="code"></attribute>

For example if in Webflow you create a structure like this:

```html
<div> 
    Today is <span php:echo="date('l')"></span>
</div>
```

It will be converted into:

```php
<div> 
    Today is <span><?php echo date('l') ?></span>
</div>
```

```php:echo``` attribute can also be modified with the optional attribute ```where``` explained below.

## PHP

You can add the following custom attribute to just output a generic php code inside the element where the attribute is placed (all the content inside will be deleted):

```html
<div> 
    Today is <span php="echo date('l')"></span>
</div>
```

It will be converted into:

```php
<div> 
    Today is <span><?php echo date('l') ?></span>
</div>
```

> Yes! it's basically the same example as before, written with a different attribute! 😅 



```php``` attribute can also be modified with the optional attribute ```where``` explained below.


### Where

Where attribute is an optional attribute that can be used only in combination with ```php:echo``` and ```php``` attribute explained before. This attribute modifies where the code inserted inside the ```php:echo``` or ```php``` attribute will be outputted.

<custom-attribute dynamic name="where" value="position"></custom-attribute>

For **position** you can use several values

#### Before

<custom-attribute name="where" value="before"></custom-attribute>

Will output the code **before** the element where ```php:echo``` or ```php``` attribute is placed.

For example if in Webflow you create a structure like this:

```html
<div php="$timestamp = time();" where="before"> 
    My Div
</div>
```

it will be converted into 

```php
<?php $timestamp = time(); ?>
<div>
    My Div
</div>
```

#### After

<custom-attribute name="where" value="after"></custom-attribute>

Will output the code **after** the element where ```php:echo``` or ```php``` attribute is placed.

For example if in Webflow you create a structure like this:

```html
<div php="$timestamp = time();" where="after"> 
    My Div
</div>
```

it will be converted into 

```php
<div>
    My Div
</div>
<?php $timestamp = time(); ?>
```


#### Prepend

<custom-attribute name="where" value="prepend"></custom-attribute>

Will **prepend** the code inside the element where ```php:echo``` or ```php``` attribute is placed.

For example if in Webflow you create a structure like this:

```html
<div php="$timestamp = time();" where="prepend"> 
   <ul>
        <li>other elements....</li>
   </ul>
</div>
```

it will be converted into 

```php
<div>
   <?php $timestamp = time(); ?>
   <ul>
        <li>other elements....</li>
   </ul>
</div>
```

#### Append

<custom-attribute name="where" value="append"></custom-attribute>

Will **append** the code inside the element where ```php:echo``` or ```php``` attribute is placed.

For example if in Webflow you create a structure like this:

```html
<div php="$timestamp = time();" where="append"> 
   <ul>
        <li>other elements....</li>
   </ul>
</div>
```

it will be converted into 

```php
<div>
   <ul>
        <li>other elements....</li>
   </ul>
   <?php $timestamp = time(); ?>
</div>
```

#### Style.

<custom-attribute dynamic name="where" value="style.style-property"></custom-attribute>

Will output the property on the style attribute of the element where ```php:echo``` or ```php``` attribute is placed according to the style-property used

For example if in Webflow you create a structure like this:

```html
<div php:echo="random_color();" where="style.background-color"> 
   My Div
</div>
```

it will be converted into

```php
<div style="background-color: <?php echo random_color(); ?>"> 
   My Div
</div>
```

> ```random_color``` function obviously doesn't exist, it's a pseudo-example. But nothing stops you to create that function and really change the background color of the div to a random one, (do it in JS though, use your server resources for better things!)

Care about the style-property ```background-image```

In this case if in Webflow you create a structure like this:

```html
<div php:echo="random_image_url();" where="style.background-image"> 
   My Div
</div>
```

it will be converted into

```php
<div style="background-image: url('<?php echo random_image_url(); ?>')"> 
   My Div
</div>
```

So you don't have to output also ```url( )```!


#### HTML Attribute

<custom-attribute dynamic name="where" value="html-attribute"></custom-attribute>

Will output the property on the attribute of the element where ```php:echo``` or ```php``` attribute is placed according to the html-attribute used.

For example if in Webflow you create a structure like this:

```html
<div php:echo="my_post_category();" where="data-category"> 
   My Div
</div>
```

it will be converted into

```php
<div data-category="<?php echo my_post_category(); ?>"> 
   My Div
</div>
```


> With PHP elements the sky is your only limit, you can be creative and create any type of structure you need! But there's actual one limit though, inside the value of the attribute do not use ```"``` (double quotation marks) but only ```'``` (single quotation marks)