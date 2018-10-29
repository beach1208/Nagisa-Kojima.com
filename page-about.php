<?php get_header(); ?>
<!-- <?php wp_head(); ?> -->

<nav class="nav-bar">
     <ul class="menu">
         <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/"><img src="/wp-content/themes/portfolio/img/logo.png" class="logo"></a></li>
         <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/about">About</a></li>
         <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/works">Works</a></li>
        </ul>
</nav>
        <div class="about-section">
            <div class="flex-container">

                <div class="flex-item-left">
                    <img id="myimg" class="profile-img" src="/wp-content/themes/portfolio/img/IMG_7208.jpg" alt="profile">
                </div>
                <div class="flex-item-right">
                    <div class="content">
                        <h1 class="about-title">About Me</h1>
                        <p>My name is Nagisa. I'm a Japanese Front End Developer based in Vancouver,Canada.
                        I have enrolled in 12 months Web and Mobile Application Development Course at Cornerstone International College.
                        My speciality is Front End Development and UI Design.</p>
                        <p>My Skills</p>
                        <p>HTML/CSS/SASS/Javascript/JQuery
                        PHP/Bootstrap/Wordpress/Gulp/Git
                        AdobeXD/Photoshop/Sketch/Illustrator</p>

                        

                        <ul class="social-icons contact">
                            <li class="icon-list"><a href="https://dribbble.com/beach1208" target="_blank"><i class="fab fa-dribbble"></i></a></li>
                            <li class="icon-list"><a href="https://github.com/beach1208" target="_blank"><i class="fab fa-github"></i></a></li>
                            <li class="icon-list"><a href="https://www.linkedin.com/in/nagisa-kojima-703209144/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                            <li class="icon-list"><a href="https://www.instagram.com/nagisa_design/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                        <a href="mailto:nk.bg.1208@gmail.com" class="btn-class btn-animation">Send a Message</a>
              
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php wp_footer(); ?>
<?php get_footer(); ?>