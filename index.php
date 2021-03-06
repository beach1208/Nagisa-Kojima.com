<?php get_header(); ?>

  <!-- =========== navigation bar=================-->
<nav class="nav-bar first-page-nav">
     <ul id='main-nav' class="menu">
        <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/"><img class="logo" src="<?php echo get_template_directory_uri(); ?>/img/logo.svg"></a></li>
        <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/about">About</a></li>
        <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/works">Works</a></li>
     </ul>
</nav>

  <div id="top-border-rect" style="visibility: visible;">
    <p class="btn__box">
      <a href="#"><img class="logo" src="<?php echo get_template_directory_uri(); ?>/img/logo.svg"></a></a>
    </p>
  </div>

  <div id="main" class="main-top">
    <div class="top-title">
      <h1 class="name-title">
        <span class="hello">Hello,</span>
        <span class="name">I'm Nagisa.</span>
      </h1>
        <p class="position-title">Front End Developer</p>
      <a href="<?php echo esc_url(home_url()); ?>/works" class="check-work">Check out my work<i class="fas fa-angle-double-right"></i></a></li>
    </div>
  </div>

<?php wp_footer(); ?>
<?php get_footer(); ?>