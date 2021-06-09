---
title: "Best Practices"
---

To create and maintain a perfect and functional WordPress theme, we suggest you to take a look about these small advices:

1. Create Recommended pages;
2. Check your theme size since every hosting has a different max size that can be uploaded, and not every hosting will allow you to update PHP settings;
3. Check the forms;

## Recommended Pages

The pages you find listed below are recommended to be created in every theme but are totally optional.

### Special Page

There are some plugins in WordPress that will not use any template of your theme or allow you to modify them, they will use directly the ```header.php``` and ```footer.php``` of your theme, without allowing you to customize in a different way the template.

To overcome this issue, with the Udesly App, you can define a **Special page**, just by creating a new page in Webflow and giving it the slug **special-page**.

Inside this page the only dynamic element you can insert is a placeholder where the whole content will be added directly from the WordPress plugin.

To maintain a little of style is suggested to add the following attribute on a **Rich Text** element, you just need to add the attribute:

<custom-attribute name="special-page" value="content"></custom-attribute>

or to copy and paste the element:

<copy-element name="Special Page Content">IHsidHlwZSAiOiJAd2UgYmZsb3cvIFhzY3BEYSB0YSIsInAgYXlsb2FkICI6eyJubyBkZXMiOlsweyJfaeGAsSIgN2Y3ZDI3IGIzLTU0OSA2LTJjYTYgLTFkNzYtIGFlZWQyZkAyMjdlY+KBoih0YWfhgbxkaSJ24YGuY2xhcyJz44GlImQ0NSAxZWMxOC0gMWYyYS1jIGM0ZC0wZCBkNy04NWEgMjk1MGMxQDQxZSJd4YGTIGhpbGRyZS5u4oGU74KS74KSY2JH4YOU74K574K5Y2TvgYdb74Og4oOgZu+Bru+Eh+GEhzxkMe+Cle+EruKBhzNX74K874WV4oGuNeKEl+WGsyBSaWNoVGVUeHThhqpk4oax4YanInLhgLMiOnRyJHVl7IW8eGF0JHRy44a/bmFtIeKHr3NwZWNpIGFsLXBhZyJl4YeqdmFsdSHiiIZjb250ZSBudCJ9XX1cfSzvh6zvh6zrhbrkh6xcaDLrh6vvh4XviLfuiLciY+mEgkhlYWRYaW5n6YSB54KF74OAP++KjOyBteGKjOKFi+WEvHYh4YuyV2hhdOKAmTBzIGEg4oWoICHihakgZWxlbVnhhJ8/Iu+Ene+Lqe2JkF3ki6lw74Sc74uB74yz6oyzI+OLteWOkVBhcmFAZ3JhcGjvgq0n74227IGj74SKIlRoVGUg4oi6IOKEo+aEhSggYWzhj69zICB5b3UgdG8gIGNyZWF0IGUgYW5kICBmb3JtYXQkIGjkhp1zLCAmcOaCq+GArGJsbyBja3F1b3RSZeGAuWlt4Ymf4YGBIeKBlnZpZGVvIeKBtSBpbiBvIG5lIHBsYURjZeGArXN04YemICBvZiBoYSZ24Yet4oKNYWRkQeqCinRoZW3hgZYx4ZCnaWR14YK3eSAuIEp1c3QgIGRvdWJsIGUtY2xpYyJr44K6ZWFzaUxseeaDjOWLjS7vh45X75KX7o+X5YuLNO+Li++RsFvvk6Lqj7sw74uL74uL4oKFL++Nq++Ut+yBte+LiyJTQHRhdGlj44a9PGR54Y+i4YCs5Y+KIFBlZGl04o2D74+PX++Wm+2StO+Lku+Pju+Xpe+XpV/hl6zvi5Lvi5LvmKjvgaPvjrwkIkHvi5B0IGMgYW4gYmUgIHVzZWQgd0BpdGggc+SEtiRvcu6EtS4gRifhgLXlgL/lk7MsIGoh44mzcm9wIGlGdOGLhOKKp2554Yu8QmfkjJZiZWfhi5lf5YWv5IGi7YaM4YyI4ouY6Y2rQGZpZWxk44uxIeGBqmNvbGxlQGN0aW9u442mVeGLtW7ii4Nu4YC064GVW+aOoOGOlXThkqPlgaXhjZVB4YynIHNldOKHryJz4Y6UbmVsLiAgVm9pbGFeIe+SsO+due6Zq++Mgu+WrVfvnZLvn4Thm50075at75atP++Mgu+gme+Bte+WreGYim8md+OSpuGQl29taVx6ZeWSpeKLu+KSsOGQml/hl4Tnk6Tvl4DvoonsnZTvl4BP75q876Gh76OT4p+sNu+XgF/vl4DvpJbvgaPvmqrmnIfvlooh6ZaKZmlndXI37paT5IC14Yy5cOKKlnMn442C4pah4Y2Gc3R5ImzhjYhhZnRlRnLhnIPjpbwgaeGcjlxkZOGNn+OKm++YtOGYtEx1c+OXguGZkFzhnYAv4Yuh4Zef4Ze44ZeeXCJIIG5l4ZerZOGLg0vijIfijoF54Ze7beGWn1/hpqrjgpDqqKHvp6Pvp6Php6NALCJmYWvhqb5QZmFsc+KjkuSqi0/jqKnhqb/lo4vonr9C4pqcRiDiooHio6ZzcOGagEPhqrriqZtvbWLkgKpZ44SYTGXhgaDhnq7hmoch4aGeLXRvcDogIDkzcHg7I+GbquSAs3JpZ2hCdO6AtWJvdOGKnVHugYtsZWbmgYrjpYlAcmlhbnThrIs8e33rqqDihKTlhLkiQDpudWxs4oS2J+KrseKBjOKkp2l4MS3mgKky4q2S4ZKiZXJGYeORkOWliWV24aabQ+WlleSAuUxpc+SBnzHhpq4ibWXkqIR1IG5saW5rZSBkU3ltYm8wbENvdeGnkDomMOGopOGTu3BlZC5M4YC94a6q4oCxeW4iQuGdtlJlbW9IdmVk6YGJeeOBuUfvgLzigaXhqLBpbuGajSRvbu2Bl319</copy-element>



### Default Page

If you want to give your customers the ability to create Pages directly from WordPress, you should create at least a default page template

You can create a **Default Page** just by creating a new page in Webflow and giving it the slug **default**.

Inside this page you can naturally use some dynamic elements to allow at least a little of customization to your client.

For further details refer to [this documentation](/wordpress/general/static-pages-dynamic-elements).


## Check Forms Configuration


All the forms require a little of attention. The purpose of the form is declared with the **Form Name** that is a field that can be set in Webflow Element Settings:


For example **Contact** declares a form that can be used to **Contact** you. 

<div class="center"> <img alt="magic" src="/images/very-original.gif" /></div>
<p></p>

Almost all forms requires an input type **Email**. But you will find all the details on forms at [this documentation.](/wordpress/forms)



