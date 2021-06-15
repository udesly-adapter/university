---
title: "Sidebar & Widgets"
---

A **sidebar** in WordPress is referred to a widget-ready area used by WordPress themes to display information that is not a part of the main content. It is not always a vertical column on the side. It can be a horizontal rectangle below or above the content area, footer, header, or anywhere in the theme.

Sidebars play an important role in designing the layout of a WordPress website to display content other than the main articles of a website. For example, a short list of recent articles, recent comments, a list of pages, or popular articles on a website can easily be displayed across the entire site.

It can also be used to display advertisements from third-party websites. Users can drag and drop items into sidebars from *Appearance » Widgets* in the admin panel.

To add a sidebar in Webflow you just have to add a simple *Div Block* or a *Rich Text* in order to get at least a minimuum styling (almost zero), with the attribute:

<custom-attribute dynamic name="sidebar" value="Sidebar Name"></custom-attribute>

The *Sidebar Name* is up to you, it can be everything you want, the Udesly App will automatically create the Sidebar in WordPress with that Sidebar Name!

<copy-element name="Sample Sidebar">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjlhNDYgNjBlNy03IDZjYy1iNyA1NC0yYWMgOC04ZjBmIGZiZGZkNiY444Gw44KAdGFnMeeCqmRpdueCmGMwbGFzc+qChzUiROWAuWhpbGRYcmVu6IKh74KS74KSP+GCkuOEkOODsu+Cv++CvzkuMOKEveaCkeuFjVJpIGNoVGV4dE3nhYBk5YWN5oS9cuGBgVHkhbt0cnXhhoXvhIQh6YSEeGF0dHIx7YWpbmFt6Ia7c0BpZGViYeOBg1Hjhq12YWzigbTlh5kgTXklMjBGKGlyc+GCrjBTWeiBizdE4oWN4YCm4YCpX+GHpO+HgO+HgO+HgOmFjuqHgF5o4Yi074a/74a/74a/74ixUe+IsTY4Zu+GkuaKvyBIZWFkaW5f44mF74aR44us74OB74Sa74q6X++Kuu2CqeSKuuWIh+qHquOLgCPjjZbnhpAwcGxhIGNlaG9sZF5l5oae74aV74y174y154qWXe+MtXDvjLPvjLPvjLPhkIMgMmU2ZTlhIDk5LWYzMiHhjqAxODYtOCBiM2ItODggODU1ZDc1UDUwYjXvjIbmkLMgUGFyYWdyXGFw44uq74mm5JGX74KBL++CgeSCge+FrO+FrDJJJm7ijInhi610aGkj4ZG57IWyMHlvdUHhjIh3aWxs4YyPNHNl4oGIYeOArHQiaOKBlHdpZGckZXTigZd0aGFX4oyq7YGQ4oy9aeGRjuWBjyBXb3JkUHIkZXPigohBZG1B44C6UGFuZeGBvSPmjZrjlJhzdHlsP++Sn+GVm+KStuKCju6St2lceDHvk4zhgLXjjZLmlZkgaW50ZXJhQGN0aW9u75O5UeGHkXZlbu+BuuKCklHjgZFMaXPtgpfnkIEwMjJtZeySpXUgbmxpbmtlIGRTeW1ib0BsQ291buWLqiPhk7njk5Vyb3BwWGVkTOGBheWXqeaAuSB5bkJpbmQgUmVtb3ZlXmTvgZnigYDigqnvgYTqgb0gcGFnaW5hL+KEhe+Bp+GCoOOStw==</copy-element>

### Widgets

A widget adds content and features to a widget area (also called a sidebar). Widget areas provide a way for users to customize their site. Widgets can be really helpful in helping your visitors to navigate your site and encouraging them to take actions like signing up for your newsletter or following you on social media. You can widgets inside Sidebar (like explained in the previous paragraphs). But you can also use widgets alone without a sidebar. To do it, you should add a *Div Block* with the attribute

<custom-attribute dynamic name="widget" value="Widget_Class_Name"></custom-attribute>

The Widget class name is pretty difficult to find in third party plugins, WordPress defines already some widgets that are documented on the [**official codex**](https://developer.wordpress.org/reference/functions/the_widget/). Usually all widgets will extend the class ```WP_Widget```, so if you need to know if a plugin has some widget, just <kbd>Ctrl+f</kbd>/<kbd>⌘ + f</kbd> inside the plugin folder that class! 🕵️

Some valid Class Names for example are:

* WP_Widget_Archives
* WP_Widget_Calendar
* WP_Widget_Categories
* WP_Widget_Links
* WP_Widget_Meta
* WP_Widget_Pages
* WP_Widget_Recent_Comments
* WP_Widget_Recent_Posts
* WP_Widget_RSS
* WP_Widget_Search
* WP_Widget_Tag_Cloud
* WP_Widget_Text
* WP_Nav_Menu_Widget

So for example using the following attribute on a *Div Block*:

<custom-attribute name="widget" value="WP_Widget_Archives"></custom-attribute>

You will show inside it the WordPress widget that shows all Archives of your Blog (Like Posts of December 2022 and so on).

Widgets can also have some settings that you can add with the optional attribute:

<custom-attribute dynamic name="settings" value="settings string"></custom-attribute>

> The settings string must be an URL Query encoded array! e.g: dropdown=1&title=My Title

<copy-element name="Sample Widget with Settings">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjQ4MDUgNjk0OS00IGZkZS01MSI34YCqMWM0LSBjYWExOTggNzdiNzMwMeeCgHRhZ+eCqmQkaXbngphjbGFEc3Pqgoc1ROWAuSBoaWxkcmU+buiCoe+Cku+CkuGCkjEn4oSQ5oGk64SgQmxvVGNr54SQZOWEneaEjTB0ZXh05IWLdDxydeGFle+DlOmDlHgwYXR0cu2EuW4kYW3ohot3aWQsZ2Xjga/jhbx2YSZs4oGz5YaoV1BfQlfjgYBfQXLhhIU6duSGhDfjhJfvgasyIHNldHRpbi5n44ao74Gt4YWrcm8gcGRvd24lXDNE44Sa4YGn4YWh4YGtX+mBsO+HlO+HlO+FouWHlO+EtEPhg6zpg6glMjDkg6ogJUMyJUEwIeiDrzBQbGFjIGVob2xkZSfjhYjkgrbjiohzdHlObO+Ij+GLi+KIpnTviKdQMjJpeOOHsu6AtSPhi5boi4lpbnRlIHJhY3RpbyJu74mpMjJldjxlbu+BuuKCkuOBkUwsaXPtgpfnhZ0yMiRtZeyJhXVubCBpbmtlZFMgeW1ib2xDWG91buWJlOGMiOOJtUHhhq5wZWRM4YGFI+WNmeaAuXluQmkgbmRSZW1vWHZlZO+BmeKBgOKCqSPvgYTqgb1wYWdpXG5h4oSF74Gn4YKg44iT</copy-element>