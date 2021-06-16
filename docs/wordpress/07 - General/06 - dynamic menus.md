---
title: "Dynamic Menus"
---

WordPress has a cool feature that allows you to add dynamic menus and control them from the admin panel! 

You can find your Menus from *Appearance » Menus*.

![](/images/wp-menu.png)

Every Menu has it's own Name. You must create it in WordPress and use the same name in the attributes below in order to indicate which menu you want to show


## Simple One Level Menu

To create a simple One Level Menu inside Webflow, just add a *Link Element*, with the attribute:

<custom-attribute dynamic name="menu" value="Menu Name"></custom-attribute>

Don't forget that the *Menu Name* must correspond to the Menu you created in WordPress. The element below has as name "Simple Menu", so if you don't create a menu with the same name, or you don't change the attribute you will not see anything after conversion!

<copy-element name="Simple Menu">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjJiNTQgZDc0Yi02IDNmOS01NiBkZS0zYmEgYy1mMzI4IGQ4OWY1NSQ3M+eCgHRhZyPngqrogpZjbGFzMnPqgoU1ROWAuWggaWxkcmVuT+iCn++CkO+CkOGCkDTihI4j5oGk64SeTGluay3nhI1k5YSa5oSKYnUodHRv5YKMdHJWdeGFlOKEs2zlgZPmhLAmbeGEsOeFrmV4dEBlcm5hbOeFoUx1cuOArOSGizLjhJkiN+WDrXhhdHRCcu2FqW5hbeiGuzBtZW5154aqdixhbOKCouWHllNpKG1wbOGHpTBNX+WBhOGBteGFheGBu+SBvu+Gtl/vhrbvhrbkhYbkhrbhg6fuhJcudu+CnO2CnOOJkHN0PHls74eZ4oe84YewdCHvh7EyMml4MS/viIbhgLXhip7oipFpbiHhhbRhY3RpbyZu74iz4YaSdmVuJ++BuuKJruOBkUxpcy/tgpfnhYPihoDsiJB1biHih7xlZFN5bSBib2xDb3UqbuWEpjDliYByb1BwcGVk4omU5YyhIeaAuXluQmluIGRSZW1vdlxlZO+BmeKBgOKCqe+BhCHqgb1wYWdpbj5h4oSF74Gn4YKg44e5</copy-element>

> Remember, the link must be unique! The link that has the custom attribute will be repeated once for each link you add in the corresponding menu in WordPress! If you create multiple links with the same attributes you will get a totally duplicated structure that is not what you need! The link in Webflow must be just one simple placeholder!


## One Level Menu with Images and Subtitles

WordPress allows for each link to add also a subtitle and an Icon, this can be usefull to create more dynamic menus, that have more infos.

To create such a menu add on a *Link Block Element* the attribute:

<custom-attribute dynamic name="menu" value="Menu Name"></custom-attribute>

Inside this Link you can add all (or just one) element from the list below:

### Title

It's the text of the link, can be used on text links with the attribute:

<custom-attribute name="menu-item" value="title"></custom-attribute>


### Subtitle

It's the subtitle of the link, can be used on text links with the attribute:

<custom-attribute name="menu-item" value="subtitle"></custom-attribute>

### Image

It's the image of the link, can be used either on Image elements or Div blocks as background with the attribute:

<custom-attribute name="menu-item" value="image"></custom-attribute>

Don't forget that the *Menu Name* must correspond to the Menu you created in WordPress. The element below has as name "Simple Menu", so if you don't create a menu with the same name, or you don't change the attribute you will not see anything after conversion!


<copy-element name="Menu with Image and Subtitle">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjgwODYgOTNiMC0yIDc2NC02ZCBkMS0yZDIgOS01MjdmIDY0NzcyOSQ3ZueCgHRhZyPngqrogpZjbGFzKnPqgoUy4YChMzEgMjRiOC0zIDQ3NS1lOCBiMi1jNDEgZC00NjJkIDc5MTg1NURlMeKDtDVE5YGjIGhpbGRyZSJu6oGkNzZlOCA0Mjk0LTUgMTczLTIxIDlhLTBmZiA0LTRiMGQgZjkxNzczJGU554SaNzVhIGFmMTRhLSAyYTM4LTUgOWUzLWIyIGZmLTM5OCA4ZjU0OGM4Nzg26oKR64W1TEhpbmvnhaRk5YWxQeaFoWJsb2PjgL4h44agaW5saW4/44av44aR4YCt5oC844eMbSPhho7nh4xleHRlMHJuYWznhr91RnLjgKzkh6kyM+KHtSI35YSheGF0dEJy7YeHbmFt6IiZMG1lbnXniIh2KGFsdeiItFNpKG1wbOGJgzBNX+WBhOGBteGFueGBu+SBvu+IlC/vhbrvhbrphbrqiJRpbV/jiKDviJbjibvvh6zvgLrri6pQSW1hZ+iFqe6GlkPphK/jjKVzcmPnjKRAaHR0cHPjjK8iRuGMpWQzZTUgNHYxMDNqIDhxYmIuYyBsb3VkZnIgb250Lm5lInThjYVwbHVnJGlu4YyjRkJhNHNp4YGmRuKLjnQh4oCxcGxhY2UgaG9sZGVyIC42MGY5YiAxODQwYy4sc3bohIbija9pbkHojJZsYXp5546PQHdpZHRo6IyxKHV0b+eOqmhlWGlnaOGCn+2AvOaIj1/lhanmj4XpjrDvg4/vg4/jg48v5YOE74mf74mf6YmfLWlYdGVt74mk5oe65YauX++JnO6JnO+Oie+OieOOie+RkFhkaXbvkZLviZzvkKgh4ZSgMWUzM2Eh4ZOELTQwMzAgLTFhYTMtMDAyNDHhkIVhIDk4M2UxMCRiNOiQqGU4N0BkY2JiZuKQqCA3LWQzYzQgLWZiMzItIDI0YTU0N0AyNTgzMeORlVvvkKjilb1C5pCL75Cp45aoX++Dre+Og+iVt++Dle+DlemDlV/vhYfvlbnvjoPvlY/vhYfvhYdcYjTjmYnvlKLvhJrvlKNGdOGTquSaonRy4pKYX++Hu+mHu++Tqe+Tqe+KquyTrlh0aXTik63vk6bvm5pf74i474i45ISR5Jua74Oj4ZWmLeedtlDokKnnlacwVF/pgqnvlabviovviovniovvnZpecO+dmu+VpO+csO+Lu++Luyfii7vviIHohIJhcmFQZ3JhcOOTj++ciD/ioofvmqLvmqLvkaPsmqdzXHVi74ec75qi74Wc74+HP+uDrO+HnO+HnO2HnOSdhzAj74Ks5KWAc3R5bF/vpK7qpK7vo5jvo5jko5jjpo4oZmFr5aa5ZmFcbHPmjLjqp47jpLrnpr5B65+wRmxleOmfk1nngYFzcOGatOmhhuamhDhvbWLvgLbkg7BMNmXkgoTlloZz4Zu2eUnjqY0wZuKChDPhqaQiMOKPoi1kZWMgb3JhdGlvUm7kgL9ub+GjquKAv0HnobZyaWFu4py6L+apn+aivu+mv+iFsmVsMGVjdG/lo5tuWHVsbOqGkOaeiu6hg1xpeOOonu6AteOEj+ectFJu4aWeYWPig4/vooVZ4aW8dmXog4rpop3kgZFYTGlz7YKX56St4qWqJeyogXXip7NrZWQgU3ltYm9sMENvdW7ln5gwIeWosXJvcHBlLmTiqYXlranmgLl5biBCaW5kUmVAbW92ZWTvgZkv4oGA4oKp74GE6oG9cGE/4aK944a074Gn4YKg46ej</copy-element>


## 2 Level Menu

You can also create a menu that has 2 levels of nesting, to create it you must add on a *Div Block* the following attribute:

<custom-attribute dynamic name="mega-menu" value="Menu Name"></custom-attribute>

Inside this Div Block you must add 2 elements

* A Link Element
* A Dropdown Element

Don't forget that the *Menu Name* must correspond to the Menu you created in WordPress. The element below has as name "Simple Menu", so if you don't create a menu with the same name, or you don't change the attribute you will not see anything after conversion!

<copy-element name="2 Level Menu">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMjcxZDcgYjhmNS1jIDEzYS02NCAzZC1mZjEgYy04OThmIGY2OGViOSRkMOeCgHRhZzHngqpkaXbngphjUGxhc3PqgofigbggMjRkZTA3IC03NThlLSAyNWQyLWUgNTRiLWE4IDFjYjM4Nyg2Yzjhg5UyJSQ1ROWBo2hpbDBkcmVu6oGkMCBmNmNjMTkiMeGBpGRjLTIgNjUxLWZhIDQ1LTI5YyBjNGNmN2YkMjfohJw1ZjQgMGM1NDItIGYxNzAtMCBhMjUtODYkMTnhgZczNWVINDY04YOuNeqCkSHrhbdCbG9ja13nhadk5YW05oWk74SX5YaPQHhhdHRy7YW8KG5hbeiHjm1lIGdhLW1lbiJ154eCdmFsdSHoh65TaW1wbCnhh70wTeWBhDdEX+KEseGApuGAqeGHsu+Hju+Esj/vhLLphLLqh47oiYTvh4wyQDI0Mjgx4YiMKGItNeGAqC0wIDYwZC0wZSA2Ni1jODMgNTE2ODFlWGVkOe+HjO+HjO+HjC3uh4xi74af5ou2TGlWbu+GnueLomzlgL3mi7ImbeGLsueMsGV4dEBlcm5hbOeMoyx1cuOArOSNjTIzX+WFte+Fsu+Fsu+KhO2DmOSMoFPhgo/kjqt0cuKHp+OHsiHnjrxQbGFjZUBob2xkZeGItV4w5oO074eq5I+p74uP74uPX+SLj++OmO+OmOqPv++NrumOslPvjYHvjYE2Nu+Nru+Nri/oja7jkpfvja7ik4VEciBvcGRvd25AV3JhcHDihK1X7424742465GvZOWBoOqTqChob3bkgaozQTBmYWxz5YadZFBlbGF55JS94ZOGXe+Pt3fogqHkjbHhjKnoj5Nb45W+4pCMLemBveOVrOmQqF4t6YKD4pKz74mx74e575KoX++SqOiGh++Vse+Vse+Hue+Vh0PvlJrvlJpmNjfvlYc775WH6JWHOO+Vh+6HuVRYb2dn4pOY75WQ75WQV++HuO6HuOubvnTngbjvj5Rf742c75iL74SR75uU75uU742cJ++aquuNtuueqkljbyfjm43vmZLin5R3aWQsZ2XlkYvvhIgyMj5p6oGc5oCt5J225Y2bLV/vhKvvmLHvkafvnJbph6/vn59f75+f75Gn756175Gn756I5Z6IX+uZje+eiO+eiO+eiO6hv+2Wl1/vnL/vlbXvoKTtgrzvl63vl61f7Zet6pKy756775ex76Kg6pWSWe+lqW5h76Wp75ex76S/X++Xse+kkuOkkuibm++kv++kvz4246mY76Ws76Ws5KWsZkPvpazumJ5MaXPjnY0/76Wz7qWz6oSh75ib7qyhbF/lgbbvn7Xvnb3vqKzvhLrvq7Vf76WH752776uJ752776qc5KqcXmPvqpzvhZDvpKXqm4fvnLMn74S46qKP75yIMmhyXmXjh5PvpLnvqovvo4HvrbAv64O076S576S55ae/MDFf76Sv76Sv76+e74q/76u577KlX++kre+xu++xju+xjuKxjuO2lV/vsY7vh5LvsZXvh5LvnI3vh5Jf76K674eS76ur77C977Si77SiX+aDtO+rq++rq+aHkuO3gu+yq1/vq6HvtpDqkYTvuZnvsqvvq59P77it76uf77iA4riAN+O7iV/vuIDvjoTvuIfvjoTvor/vjoRf76ms746E77Kd77ev77uU77uUIGZmNzAlMjAyJTJD4YCmdChleHTigK0zQTB0cnVl5IC0diPkgLHhgYRMaW5rMCUyMDPigY83MEQlNUTkgZVzQHR5bGVz5YGGQDVCJTdC4YGwKF9pZOeBmDcxIDI0ZGUwNyAtNzU4ZS0gMjVkMi1lIDU0Yi1hOCAxY2IzODc4NmM44YKg5YKjZixha+GCmeKCo2ZhJGxz5YKkdHlwI+WAteGDi2NsYXND44KP44OTbmFt6IC7ME1lZ2Hhg4JNKGVudeuBgXNwLGFj6IGh54SPY28sbWLvgLbkg7BMZSPkgoTjhJlkaXNwKGxheeOEpjBiIGxvY2slMyHhhIUwanVzdCBpZnktY29AbnRlbnTkgYAyY+GAqmVy5IGBYSBsaWduLWlQdGVtc++AveWGkyB2YXJpYW4+dOaFoOGFneGFu+SCvmggaWxkcmVuI+iFuueGkmVsZWModG9y5IeLbnUsbGzlgZXvhps0MiA4MWY2OGIkLTXhgKgtMDYgMGQtMGU2IDYtYzgzNSAxNjgxZWVcZDnvhpvvhpvvhpvvhptf5oi974aU74aU74aU74aU74aUIDIwaW5saVxuZe+Fl++Fl++Fl++Fl1fvhZfni6fhibVl54an6YaNWGl4Me+GouGAteOLkifkh5HhgYTiiJNhY3QoaW9u74GiMjJcZXbhiL3vgbrhgpLjgZFYTGlz7YKX4Y285oikOG1ldOGLseiCiXUh4oSpa2VkU3kgbWJvbENvPnXhipbjj5Dhj6Tij6FkIHJvcHBlZCfij4rljrLmgLl5bkIgaW5kUmVtUG92ZWTvgZnigYAn4oKp74GE6oG9cGFnWGluYeKEhe+Bp+GCoCHjg5Y=</copy-element>


## \[IMPORTANT] Notes!

<ol>
<li> If you don't create the Menu with the exact same name in WordPress you will never see anything;</li>

<li> If you want to use dynamic menus in Webflow you have to create only 1 link, don't create your navbars with 5 links all with the same menu attribute! If in Wordpress you add 3 links then on your pages you will have 15 links! </li>
</ol>