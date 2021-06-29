---
title: "Hooks"
---

In WordPress development, **Hooks** are functions that can be applied to an Action or a Filter. Actions and Filters in WordPress are functions that can be modified by theme and plugin developers to change the default WordPress functionality. It is important to note that actions and filters are not the same thing. Actions are functions performed when a certain event occurs in WordPress. Filters allow you to modify certain functions. A simple way to create actions and snippets in WordPress directly from the dashboard is the plugin [**Code Snippets**](https://wordpress.org/plugins/code-snippets/). [**Simple guide on hooks**](https://docs.presscustomizr.com/article/26-wordpress-actions-filters-and-hooks-a-guide-for-non-developers)


Below you can find the Actions and Filters that are available to modify the Udesly WP plugin.

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

### On registration Success

Fired after a new user get's registered by using the Registration Form


```php
do_action('udesly/ajax/registration_success', int $user_id );
```

#### Parameters

* **$user_id**: integer that contains the new user ```user_id```;

This action can be used for example to log how many registrations you received into a day;

```php
function mytheme_on_registration_success($user_id) {
    send_event_to_google_analytics('new_user'); // Define this function somewhere else
}

add_action('udesly/ajax/registration_success', 'mytheme_on_registration_success' );
```

> Note! This is pseudo code, the function ```send_to_google_analytics``` is just an example, and probably doesn't exists!


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

Filter that allows to modify the *email to* parameter;

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

### Mail CCs

Filter that allows to modify the *email ccs* parameter;

```apply_filters('udesly/ajax/contact/mail_ccs', array $mail_ccs, array $form_data)```


#### Parameters

* **$mail_ccs**: array containing the email recipients;
* **$form_data**: associative array containing the data sent by the form, e.g: ```$form_data['email']``` is the field with the name email;

This filter can be used for example to change the email recipients based on a form value;

```php
function mytheme_modify_mail_ccs($mail_ccs, $form_data) {
    // if the form field foo is set to bar add to ccs to another email;
    if ("bar" === $form_data["foo"]) {
        // Also send the email to admin@admin.com
        $mail_ccs[] = "admin@admin.com";
    }
    return $mail_ccs;
}
add_filter('udesly/ajax/contact/mail_ccs', 'mytheme_modify_mail_ccs', 10, 2);
```

### Mail Subject

Filter that allows to modify the *subject* parameter;

```apply_filters('udesly/ajax/contact/mail_subject', string $mail_subject, array $form_data)```


#### Parameters

* **$mail_subject**: string containing the email subject;
* **$form_data**: associative array containing the data sent by the form, e.g: ```$form_data['email']``` is the field with the name email;

This filter can be used for example to change the subject based on a form value;

```php
function mytheme_modify_mail_subject($email_subject, $form_data) {
    // if the form field foo is set to bar add to ccs to another email;
    if ("bar" === $form_data["foo"]) {
        // Also send the email to admin@admin.com
        $email_subject = "Received a new request with foo = bar";
    }
    return $email_subject;
}
add_filter('udesly/ajax/contact/mail_subject', 'mytheme_modify_mail_subject', 10, 2);
```

### Mail Message

Filter that allows to modify the *message* parameter;

```apply_filters('udesly/ajax/contact/mail_message', string $mail_message, array $form_data)```


#### Parameters

* **$mail_message**: string containing the email message;
* **$form_data**: associative array containing the data sent by the form, e.g: ```$form_data['email']``` is the field with the name email;

This filter can be used for example to change the format of the message, below you find how by default the message is constructed;

```php
function mytheme_modify_mail_message($email_message, $form_data) {
    
	$message = __( 'Someone sent a message from ' )  . get_bloginfo( 'name' ) .  __( ':' ) . "\r\n\r\n";

	foreach ($form_data as $key => $value) {
	    $key = sanitize_key($key);
	    $value = sanitize_textarea_field($value);
	    $form_data[$key] = $value;

	    $message .= ucfirst($key) . ": " . $value . "\r\n";
    }

    return $message;
}

add_filter('udesly/ajax/contact/mail_message', 'mytheme_modify_mail_message', 10, 2);
```

### Mail Headers

Filter that allows to modify the *headers* parameter;

```apply_filters('udesly/ajax/contact/headers', array $headers, array $form_data)```


#### Parameters

* **$headers**: array containing all the headers;
* **$form_data**: associative array containing the data sent by the form, e.g: ```$form_data['email']``` is the field with the name email;

This filter can be used for example to change the headers of the message;

```php
function mytheme_modify_mail_headers($headers, $form_data) {
      // if the form field foo is set to bar add an header;
    if ("bar" === $form_data["foo"]) {
        $headers[] = "X-Priority: 1"; // Urgent message!
    }
	
    return $headers;
}

add_filter('udesly/ajax/contact/headers', 'mytheme_modify_mail_headers', 10, 2);
```


### Secure Cookies

Filter that can modify the option **use secure cookie** on login, by default secure cookie are disabled, this means that users logged in from frontend, will need to login the same from backend to access the WordPress dashboard.

```php
apply_filters('udesly/params/use_secure_cookie', bool $use_secure_cookie, string $user_login );
```

#### Parameters

* **$use_secure_cookie**: boolean;
* **$user_login**: string that can be the email or the username;


This filter can be used for example to set *use secure cookie* to true for every user:

```php
add_filter('udesly/params/use_secure_cookie', '__return_true');
```

or to set *use secure cookie* to true for just one user:

```php
function mytheme_change_use_secure_cookie($use_secure_cookie, $user_login) {

    if ("admin_username" === $user_login || "adminemail@email.com" === $user_login) {
        $use_secure_cookie = true;
    }
    return $use_secure_cookie;
}

add_filter('udesly/params/use_secure_cookie', 'mytheme_change_use_secure_cookie', 10, 2);
```

### Login Error Message

Filter that can modify the message sent to the user when his credentials are invalid.

```php
apply_filters('udesly/ajax/login/error_message', string $error_message );
```

#### Parameters

* **$error_message:** string that contains the default error message sent back by the function ```wp_signon```, by default WordPress is pretty explicit on this error, and will also give you messages like "The email is correct, but the password it's not correct", this can be used by attackers to enumerate your users email and then bruteforce their passwords, it's a good practice to change this error message to always something pretty generic, like "Invalid Credentials".


```php
function mytheme_change_login_error_message($error_message) {
    return "Sorry you can't login with these credentials :(";
}

add_filter('udesly/ajax/login/error_message', 'mytheme_change_login_error_message');
```

### Password Strenght

Filter that can be used to refuse some passwords too simple.

```php
apply_filters('udesly/ajax/register_password/strength_check', bool $valid, string $password );
```

#### Parameters

* **$valid**: boolean
* **$password**: string

For example you can write a filter to prevent the usage of password that are lower than 10 characters:


```php
function mytheme_check_password_strength($valid, $password) {
    
    if (strlen($password) < 10) {
        $valid = false;
    }

    return $valid;
}

add_filter('udesly/ajax/register_password/strength_check', 'mytheme_check_password_strength', 10, 2);
```

### Password Strenght Error message

Filter that can be used to change the error message for invalid passwords.

```php
apply_filters('udesly/ajax/register_password/strength_check_message', string $error_message );
```

#### Parameters

* **$error_message**: string, by default the error message is "The password is invalid"

```php
function mytheme_change_password_strength_message($error_message) {
    return "The password is too short, it should be at least 10 characters long!";
}

add_filter('udesly/ajax/register_password/strength_check_message', 'mytheme_change_password_strength_message');
```

### Lost Password Invalid Email Message

Filter that can be used to change the error message when user asks for a reset password link

```php
apply_filters('udesly/ajax/lost_password/invalid_email_message', string $error_message );
```

#### Parameters

* **$error_message**: string, by default the error message is "There is no user registered with that email address."

```php
function mytheme_change_lp_invalid_email_message($error_message) {
    return "There's no user registered with this email/username.";
}

add_filter('udesly/ajax/lost_password/invalid_email_message', 'mytheme_change_lp_invalid_email_message');
```

### Passwordless Login Invalid Email Message

Filter that can be used to change the error message when user asks for a magic login link with an uknown email

```php
apply_filters('udesly/ajax/passwordless_login/no_user_message', string $error_message );
```

#### Parameters

* **$error_message**: string, by default the error message is "No user with this email!"

```php
function mytheme_change_pl_invalid_email_message($error_message) {
    return 'This mail is not registered on our systems, <a href="/register">register here</a>';
}

add_filter('udesly/ajax/passwordless_login/no_user_message', 'mytheme_change_pl_invalid_email_message');
```

### Passwordless Registration Email already in use

Filter that can be used to change the error message when user asks for a magic registration link with an already used email

```php
apply_filters('udesly/ajax/passwordless_registration/email_already_in_use_message', string $error_message );
```

#### Parameters

* **$error_message**: string, by default the error message is "This email is already in use!"

```php
function mytheme_change_pr_used_email_message($error_message) {
    return 'This mail is already in use <a href="/login">login here</a>';
}

add_filter('udesly/ajax/passwordless_registration/email_already_in_use_message', 'mytheme_change_pr_used_email_message');
```


### Magic Links token expiration

Filter that allows to change the token expiration duration (expressed in seconds)

```php
apply_filters('udesly/params/token_expiration', int $expiration );
```

#### Parameters

* **$expiration**: int, by default 300.

```php
add_filter('udesly/params/token_expiration', function($expiration) {
    return 600;
});
```

### Too many login attempts

Filter that can be used to change the error message when user asked for too many magic links.

```php
apply_filters('udesly/ajax/login/too_many_attempts', string $error_message );
```

#### Parameters

* **$error_message**: string, by default the error message is "Try again later! Limit on email requests reached, try again in few minutes"

```php
function mytheme_change_pr_too_many_message($error_message) {
    return 'Wait 5 minutes before asking for a new login link';
}

add_filter('udesly/ajax/login/too_many_attempts', 'mytheme_change_pr_too_many_message');
```


### Login Email Subject

Filter that can be used to change the login subject when user asks for a magic link

```php
apply_filters('udesly/ajax/login/email_subject', string $subject );
```

#### Parameters

* **$subject**: string, by default the subject is "Login to [site name]"

```php
add_filter('udesly/ajax/login/email_subject', function($subject) {
    return "Press on the link to login to MySite!";
});
```

### Registration Email Subject

Filter that can be used to change the registration subject when user asks for a magic link

```php
apply_filters('udesly/ajax/register/email_subject', string $subject );
```

#### Parameters

* **$subject**: string, by default the subject is "Register to [site name]"

```php
add_filter('udesly/ajax/register/email_subject', function($subject) {
    return "Press on the link to confirm the registration to MySite!";
});
```

### Edit Email Subject

Filter that can be used to change the edit email subject when user asks for an email change

```php
apply_filters('udesly/ajax/edit_email/email_subject', string $subject );
```

#### Parameters

* **$subject**: string, by default the subject is "Email change confirmation [site name]"

```php
add_filter('udesly/ajax/edit_email/email_subject', function($subject) {
    return "Press on the link to confirm the email change to MySite!";
});
```


### Login Email Message

Filter that can be used to change the login message when user asks for a magic link

```php
apply_filters('udesly/ajax/login/email_message', string $message, string $login_url );
```

#### Parameters

* **$message**: string;
* **$login_url**: string;

> Do not forget to print the login_url into the message, otherwise the email will kinda be useless!

```php

function mytheme_change_magic_login_message($message, $login_url) {
 return sprintf("Hello! Login at MySite! by visiting this url: <a href=\"%s\" target=\"_blank noreferrer noopener\">Login</a>", $login_url);
}

add_filter('udesly/ajax/login/email_message', 'mytheme_change_magic_login_message', 10, 2);
```

### Registration Email Message

Filter that can be used to change the registration message when user asks for a magic link

```php
apply_filters('udesly/ajax/register/email_message', string $message, string $register_url );
```

#### Parameters

* **$message**: string;
* **$register_url**: string;

> Do not forget to print the register_url into the message, otherwise the email will kinda be useless!

```php

function mytheme_change_magic_register_message($message, $login_url) {
 return sprintf("Hello! Register at MySite! by visiting this url: <a href=\"%s\" target=\"_blank noreferrer noopener\">Register</a>", $register_url);
}

add_filter('udesly/ajax/login/email_message', 'mytheme_change_magic_register_message', 10, 2);
```

### Edit Email Message

Filter that can be used to change the edit email message when user asks for a magic link

```php
apply_filters('udesly/ajax/edit_email/email_message', string $message, string $url );
```

#### Parameters

* **$message**: string;
* **$url**: string;

> Do not forget to print the url into the message, otherwise the email will kinda be useless!

```php

function mytheme_change_edit_email_message($message, $url) {
 return sprintf("Hello! Confirm your email change by visiting this url: <a href=\"%s\" target=\"_blank noreferrer noopener\">Confirm</a>", $url);
}

add_filter('udesly/ajax/edit_email/email_message', 'mytheme_change_edit_email_message', 10, 2);
```

### WP_Query Args

Every WP_Query created with the Udesly App has a dynamic filter that can be used to modify the arguments sent to the WP_Query

```php
apply_filters('udesly/posts/${query_name}', array $args );
```

#### Parameters

* **$args**: associative array containing the parameters of the query;


```php
function mytheme_filter_homepage_posts($args) {

    if (is_user_logged_in()) {
        $args['post_status'] => 'future'; // show only posts scheduled for future
    }

    return $args;
}

add_filter('udesly/posts/homepage-posts', 'mytheme_filter_homepage_posts');
```

> Note, it's better if you also read this [**document**](/wordpress/cms/collection-lists#hooks)

### WP_Term_Query Args

Every WP_Term_Query created with the Udesly App has a dynamic filter that can be used to modify the arguments sent to the WP_Query

```php
apply_filters('udesly/terms/${query_name}', array $args );
```

#### Parameters

* **$args**: associative array containing the parameters of the query;


```php
function mytheme_filter_homepage_terms($args) {

    $args['hide_empty'] = true; // Hide terms that do not have any associated post

    return $args;
}

add_filter('udesly/terms/homepage-terms', 'mytheme_filter_homepage_terms');
```

> Note, it's better if you also read this [**document**](/wordpress/cms/collection-lists#hooks)


### Post Type Args

Filter that allows to modify arguments that will be passed to ```register_post_type``` function

```php
apply_filters('udesly/post_type/args', array $args, string $post_type);
```

#### Parameters

* **$args**: associative array containing the parameters of the post_type;
* **$post_type**: slug of the post type, e.g: event


```php
function mytheme_filter_post_type_args($args, $post_type) {

    if ($post_type == "team-member") {
        $args['menu_icon'] = 'dashicons-groups';
    }
    return $args;
}

add_filter('udesly/post_type/args', 'mytheme_filter_post_type_args', 10, 2);
```

### Taxonomy Args

Filter that allows to modify arguments that will be passed to ```register_taxonomy``` function

```php
apply_filters('udesly/taxonomy/args', array $args, string $taxonomy);
```

#### Parameters

* **$args**: associative array containing the parameters of the post_type;
* **$post_type**: slug of the post type, e.g: event


```php
function mytheme_filter_taxonomy_args($args, $taxonomy) {

    if ($taxonomy == "event-category") {
        $args['description'] = 'This is the new description of the taxonomy';
    }
    return $args;
}

add_filter('udesly/taxonomy/args', 'mytheme_filter_taxonomy_args', 10, 2);
```