---
title: "Accounts"
---
In this page you will find all the forms related to all the accounts functionalities, like login, register and so on!

### Login

This form allows your users to login into your site.

This form can be added only in the Login page (The page that you create in Webflow with the slug **login**).

> To declare a login form, set as **Form Name** the value **Login**.

#### Inputs

Inside this form you should have 3 inputs:

* Input type plain (text) that is the username or email of the user;
* Input type password, that is naturally the password of the user;
* Submit button;

You can just copy the element below for an example of a Login form.

<copy-element name="Login Form">ICU3QiUyMjB0eXBl4YCnJSQzQeKApjQwdyBlYmZsb3cgJTJGWHNjQHBEYXRh4oC+JDJD4YGLcGF5UGxvYWTlgY7jgZ5Abm9kZXPlgZ9ENULkgLRfaeaBgyAyMmU2ZDkgNGJjOC1jIDBmMy0yYiBmNC00ZDggMC04YzYwIGNhYzgzMSQ4Y+eCgHRhZzHngqpkaXbngphjMGxhc3Pqgoc1IkTlgLloaWxkWHJlbuiCoe+Cku+Ckj/hgpLjg6Ljg7Lvgr/vgr85TjXvgY3vg6zogY044oWqI+aCvuuFukZvcm0gV3JhcHBlOnLnhbBk5YW95oWtZjfhgYTqhb3rhrt36IGdN15E5YCj4Ya274aS74aS74aSX+mEoOqGkuaCnu+Gk++Gk++Gk1/viIXviIXjioPvhpPviLLkhpNOMO+HgO+Jn+iHgDHvh61b74qM6IetM++Imu+KueiIml4074et6oet4oex74eq5oy3WGF0dOOIh+aNh+mMsih3Zi3iiIgtTDhvZ2nji5njjbtuPGFt6YiL74GD5omOLV/rgYjngaPkiKvviaHsj7zriIBf74Go5oGo74m574+r74+r74iGIe2Pq2xhYmVsX++Pre+Pre+Pre+Rn++Rn+KRnyZm746T6o6TQmxvWGNrTOuCoe+Olu+Oll/plLHng5zmhoPuh7rhj5TnlZ5d4oelLeOKg++Pgu+UtO+UtEPvg7XllLRleHTklr9YdHJ14ZeJ4pao45S6QeOXkFVzZXLkiZsiMOKCqDBlbWFeaemDj++Wr++Wr++Wr+mOnUHqlq9pbnB144KoP++Wse+WseyWse+UreaUrVQ94YO5SeuBtu+Npe2NpWEgdXRvZm9jInXlmpBmYWxzIeWEsW1heGxlMG5ndGjkm6kyXDU274225Ya+4Zuq742vLeacnU7khanogYNwbCBhY2Vob2xeZOSXlOSdguebjeqdmOaHhifjnYfpnJ/ugpRpc2E4Ymxl5Z2i6YOhckBlcXVpcuyAuV/vj7XvmLbvhrjvg6/mg6/vmZJf75+E75+E75aF75+E74+575+GX++fhu+fhu+guOiemeOHi++drF/vj7nvj7nvna/vna/vj7nvj7kl7Y+5UOGioHdvclxkLeOYs++en++kke+kkV/vg7nvj73vj73ogpbvj7Dvpb9f76W/75yT74+w74+w76aB76aBX++PsO+PsO+PsO+cte+PsO+PsF/vj7Dvj7DvhrXvnYPvgYXhq5Q+MOiBh++PuO+PuOassHBf6Yaj7o+874Kg75CA75CA5a2bX+OXqu+flO+ole+Wl++En+qDul/vqLXvrqfvrqfvpI7vrqfvmJgv766p766p75iY7p6ydXRcdG/so7bvpZrvrKTlsr9Ac3VibWnomqc4dmFs4pyz5bOcU1PsgL3jpY93YeSBj+SPpkhsZWHimZIw4oC2WC4uLu+lmu+um+W0tl5i7IOT74G174G176+A77SyX++0su+yk++0su+0su+0su+0sl/vtLLvtqTltIXhnZDvs5jos5ggU3VjY2VzRHNN4YCkYWfor6on77Of77Of6bm6bXNnUC1kb27juovvs6Bf77mS77mS74OO77mS77mS77mST++5ku+5ku+7hOa4pTfvt7hf5r2S46qB77ey57ei77uy76e2X+WQrO+3ru+9oO+9oOqCvO+pjCHvqYwyVGhhbiHhg4oweW91ISHhqZBZb3VyJSAyMHN1Ym0gaXNzaW9uMeGArWhhc+GAs2IkZWXigK1yZWMgZWl2ZWQhICUyMiU3RCAlMkMlN0Ix4YCsX2lk4oCyMyJB4YC4ZTZkOSA0YmM4LWMgMGYzLTJiIGY0LTRkOCAwLThjNjAgY2FjODMxLDk44oGf4YGcMjIodGFn54GZZGkidueAuGNsYXMsc2XhgprjgbU1QiwlNeOCjeGAuWhpWGxkcuKCreaAuu+CkjvvgpLhgpI54oOR5oGkdCh5cGXng49GbyBybUVycm8gck1lc3NhJmfjgLnjgrtkYXRWYeWDteOEhGbhgYnqgLAh64GmbXNnLWZYYWls5YS45ICj74S+X++Evu+EvueDjO+Evu+Evu+Evl/vhL7vhL7vhrDlhrDjhIjvhL4h4oetQmxvY2sv74Sz54Sj74ee5Ye2ZXgidOSIsHRydWVf74Su74mM74mM7oK874G24YG2J+OJoOOJkuOKl09vcCJz4Yq3MFNvbUBldGhpbuGJuDAwd2Vu4YKoMFh3cm/kgK/hiZzhiJkp5IyAdHTkgYR0aDvigLPih70u5Yu15oqLc1h0eWzviqPhjJniiroidO+KuzIyaXg+Me+LkOGAteGMiuiJpWkgbnRlcmFjTnThjbzvi73hjZt24YORJ++MleGCkuOBkUxpczftgpfniofhiqFl7IuOdSBubGlua2UgZFN5bWJvUGxDb3XihKrij4IiMOWLvnJvcHBYZWRM4YGF5Y6G5oC5IHluQmluZFBSZW1v4ZCJ74GZL+KBgOKCqe+BhOqBvXBhUGdpbmHihIXvgacj4YKg442A</copy-element>


### Guest Login

If accounts are set as optional in Shopify, the guest login form will be shown as an option when coming from checkout, not on the default /login page.

This form can be added only in the Login page (The page that you create in Webflow with the slug **login**).

> To declare a login form, set as **Form Name** the value **Guest Login**.

#### Inputs

Inside this form you should have only 1 input:

* Submit button;

You can just copy the element below for an example of a Guest Login form.

// TODO ADD GUEST LOGIN FORM ELEMENT

### Recover Password Form

This form allows your user to request a password change if they lost it! ☹️

> To declare a Recover password form, set as **Form Name** the value **Recover password**.  The form must contain only one input **type email** (that is the email of the user who lost the password) and a **submit button**!

You can just copy the element below for an example of a Lost password form.

// TODO: ADD RECOVER PASSWORD FORM


### Register

This form allows your users to register into your site.

This form can be added only in the Register page (The page that you create in Webflow with the slug **register**).

> To declare a register form, set as **Form Name** the value **Register**.

#### Inputs

Inside this form you should have the following inputs:

* Input type email that is the email of the user;
* Input type password with name Password, that is naturally the password of the user;
* Input type plain (text) and name First Name;
* Input type plain (text) and name Last Name;
* Submit button;

Optionally you can add any extra inputs too, they will all be saved as customer notes.

You can just copy the element below for an example of a Register form.

// TODO: ADD REGISTER FORM ELEMENT


### Reset Password Form

This form allows your user to change their password, after they asked for a password reset. 

This form can be added only in the Reset page (The page that you create in Webflow with the slug **reset**).

> To declare a Lost password form, set as **Form Name** the value **Reset Password**.  

#### Inputs

Inside this form you should have the following inputs:
* Input type password with name Password, that is naturally the new password of the user;
* Input type password with name Password Confirmation that is the password confirmation;
* Submit button;

You can just copy the element below for an example of a Reset Password form.

// TODO add reset password form

### Activate Account Form

This form allows your user to create their password, after you sent them an Account invite from your Shopify Dashboard. 

This form can be added only in the Activate Account page (The page that you create in Webflow with the slug **activate**).

> To declare a Lost password form, set as **Form Name** the value **Activate**.  

#### Inputs

Inside this form you should have the following inputs:
* Input type password with name Password, that is naturally the new password of the user;
* Input type password with name Password Confirmation that is the password confirmation;
* Submit button;

You can just copy the element below for an example of a Activate Account form.

// TODO add activate account form


### Addresses

This form allows your customers to view/modify their addressess in their account page

🛠️ This form is not available yet 🛠️

### New Address

This form allows your customers to add a new address in their account page

🛠️ This form is not available yet 🛠️