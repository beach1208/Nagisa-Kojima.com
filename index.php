<?php get_header(); ?>

<nav class="nav-bar first-page-nav">
     <ul class="menu">
         <li id="mymenu" class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/"><img class="logo" src="<?php echo get_template_directory_uri(); ?>/img/logo.svg"></li>
         <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/about">About</a></li>
         <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/works">Works</a></li>
        </ul>
</nav>
  <!-- =========== navigation bar=================-->
  <div class="top-border-rect">
    <p class="btn__box">
      <a href="#"><img class="logo" src="<?php echo get_template_directory_uri(); ?>/img/logo.svg"></a>
    </p>
  </div>

  <div id="main" class="main-top">
    <div class="top-title">
      <h1 class="name-title"><span class="greed">Hello,</span> <br><span class="name">I'm Nagisa Kojima.</span></h1>
      <p class="position-title">Front End Developer</p>
      <a href="<?php echo esc_url(home_url()); ?>/works" class="check-work">Check My Works<i class="far fa-hand-point-right"></i></a></li>
    </div>
  </div>

<?php wp_footer(); ?>
<?php get_footer(); ?>