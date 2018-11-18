<?php
function my_styles()
{
    wp_enqueue_style('basic-style', get_template_directory_uri() . '/css/base.css');
    wp_enqueue_style('normalize', get_template_directory_uri() . '/css/normalize.css');
    wp_enqueue_style('normalize', get_template_directory_uri() . '/css/normalize.css');
    wp_enqueue_style('google_fonts', "https://fonts.googleapis.com/css?family=Merriweather|Noto+San");
    wp_enqueue_style('fontawesome', "https://use.fontawesome.com/releases/v5.0.13/css/all.css");


}
add_action('wp_enqueue_scripts', 'my_styles');


function my_scripts()
{
    wp_enqueue_script(
        'jquery',
        'https://code.jquery.com/jquery-3.3.1.min.js',
        array(),
        false,
        true
    );
    wp_enqueue_script(
        'TweenLite',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenLite.min.js',
        array(),
        false,
        true
    );
    wp_enqueue_script(
        'TimeLineLite',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TimelineLite.min.js',
        array(),
        false,
        true
    );
    wp_enqueue_script(
        'CSSPlugin',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/plugins/CSSPlugin.min.js',
        array(),
        false,
        true
    );
    wp_enqueue_script(
        'EasePlugin',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/easing/EasePack.min.js',
        array(),
        false,
        true
    );
    wp_enqueue_script(
        'scrollifyJs',
        get_template_directory_uri() . '/js/jquery.scrollify.js',
        array(),
        false,
        true
    );
    wp_enqueue_script(
        'main-script',
        get_template_directory_uri() . '/js/script.js',
        array(),
        false,
        true
    );
}

add_action('wp_enqueue_scripts', 'my_scripts');

