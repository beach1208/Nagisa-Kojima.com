<?php get_header(); ?>


 <nav class="nav-bar">
     <ul class="menu">
         <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/"><img class="logo" src="<?php echo get_template_directory_uri(); ?>/img/logo.svg"></a></li>
         <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/about">About</a></li>
         <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/works">Works</a></li>
        </ul>
</nav>

<?php
query_posts(array(
    'post_type' => 'works'
));
?>
        

<?php if (have_posts()) : while (have_posts()) : the_post();
$count++;
?>

<div id="fullpage">
<section class="section scroll-section" data-section-name="section<?php echo $count ?>">
    <div class="work-section slide-section" >
        <div class="flex-container">
            <div class="flex-item-left">
                <div class="content">
                    <h1 class="section-title work-title"><?php the_title(); ?></h1>
                    <p class="work-description"><?php the_field('workspagesummary'); ?></p>
                    <div class="btn-class work-btn">
                    <a href="<?php the_permalink(); ?>">More Details</a>
                    </div>
                </div>
            </div>

            <div class="flex-item-right">
                <img class="work-img-one" src="<?php the_field('works-img'); ?>" alt="portfolio-work">
            </div>
        </div>
    </div>
</section>
</div>

<ul class="pager" id="js-pager"></ul>

<?php
endwhile;
endif;
?>
 
<?php get_footer(); ?>