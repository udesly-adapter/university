---
title: "Contact"
---

Contact forms can be used to collect any type of data or to let your user send you a message without exposing directly the email of your business!

> To declare a contact form, set as **Form Name** the value **Contact**.

By default the contact form will be stored in your database into a custom post type called **Contact Forms**:

![](/images/contact-forms-wp.png)

and will be sent by email on the address you specify into the Contact forms settings. (By default it will be the admin email).

## Settings
You can change what happens when a form is sent by following the path: **Contact Forms > Settings**:

![](/images/contact-forms-settings.png)

### On Form sent action
This option defines what happens when a form is sent, you can choose between:

1. Send email and save into database;
2. Send only email;
3. Save only into database;

### Email To
It's the email that will receive the form, defaults to the admin email;

### Email Subject
It's the subject used for the email sent by default it will be "New message from {Site title}"

## \[Advanced] Hooks

The Udesly App WordPress plugin allows you to further modify the contact forms behaviours using [**hooks**](/wordpress/intro/glossary#hooks).

## Actions

Action Hooks allow you to insert custom code at various points (wherever the hook is run).

### Before form sent

Fired before form get's saved to database/sent by email.

```php
do_action('udesly/ajax/contact/before_form_sent', array $form_data)
```

#### Parameters

* **$form_data**: associative array containing the data sent by the form, e.g: ```$form_data['email']``` is the field with the name email;

This action can be used for example to prevent a form to be sent in certain conditions: (for example, an user not logged in, or a form data is invalid and so on!)

> The example below prevents the usage of forms for not logged in users. Since it's an ajax call, to stop execution of the process, you just need to use ```wp_send_json_error``` or ```wp_send_json_success```, both functions automatically call ```wp_die``` function.

```php
function mytheme_disable_forms_for_not_loggedin_users($form_data) {
    if (!is_user_logged_in()) {
        wp_send_json_error("Only logged in users can send forms!");
    }
}

add_action('udesly/ajax/contact/before_form_sent', 'mytheme_disable_forms_for_not_loggedin_users' );
```

### After form Sent

Fired after a form get's saved to database/sent to email.


```php
do_action('udesly/ajax/contact/after_form_sent', array $form_data)
```

#### Parameters

* **$form_data**: associative array containing the data sent by the form, e.g: ```$form_data['email']``` is the field with the name email;

This action can be used for example to log a form data into a file or to send it to a third party API and so on.

```php
function mytheme_save_to_debug_log($form_data) {
    error_log( var_export( $form_data, true ) );
}

add_action('udesly/ajax/contact/before_form_sent', 'mytheme_save_to_debug_log' );
```


## Filters

Filter Hooks allow you to manipulate and return a variable.

> Do never forget to return the variable you are going to modify with the filter! Or your server will die ☠️

### Contact Form Options

Filter that can be used to modify the contact options


```php
apply_filters('udesly/params/contact_form_options', array $config_options, array $form_data)
```

#### Parameters

* **$config_options**: associative array containing the options used to send the form, by default it has this form:

```php
$config_options = array(
    'on_send_form' => 'both', // valid values can be both, only_save, only_send
    'email_to' => 'admin@email', // there's also another filter that can be used to change this paramenter
    'email_subject' => 'New message from your site', // there's also another filter that can be used to change this parameter
)
```

* **$form_data**: associative array containing the data sent by the form, e.g: ```$form_data['email']``` is the field with the name email;

This filter can be used for example to change the parameter ```on_send_form```, based on the user type:

```php
function mytheme_modify_contact_options($contact_options, $form_data) {
    // if the user is admin do not send email, only save to the database;
    if (current_user_can('administrator')) {
        $contact_options['on_send_form'] = "only_save";
    }
    return $contact_options;
}
add_filter('udesly/params/contact_form_options', 'mytheme_modify_contact_options', 10, 2);
```


### Mail To

Filter that allows to modify the email to parameter;

```apply_filters('udesly/ajax/contact/mail_to', string $mail_to, array $form_data)```


#### Parameters

* **$mail_to**: string containing the email recipient;
* **$form_data**: associative array containing the data sent by the form, e.g: ```$form_data['email']``` is the field with the name email;

This filter can be used for example to change the email recipient based on a form value;

```php
function mytheme_modify_mail_to($mail_to, $form_data) {
    // if the form field foo is set to bar send to another email;
    if ("bar" === $form_data["foo"]) {
        $mail_to = "admin@admin.com";
    }
    return $mail_to;
}
add_filter('udesly/ajax/contact/mail_to', 'mytheme_modify_mail_to', 10, 2);
```