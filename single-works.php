<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <div class="work-single-wrapper">
        <!-- =========== navigation bar=================-->
        <div class="single-page">
            <header>
                <nav class="nav-bar">
                    <ul class="menu">
                        <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/works">Back</a></li>
                        <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/about">About</a></li>
                        <li class="menu-list"><a href="<?php echo esc_url(home_url()); ?>/works">Works</a></li>
                    </ul>
                </nav>
                <h1 class="section-title single-page-title"><?php the_title(); ?></h1>
            </header>
        </div>

    <section class="project-page project-first">
        <div class="container">
            <div class="summary-content">
                <div class="first-content">
                    <h2>Project Summary</h2>
                    <p><?php the_field('project-summary'); ?></p>
                </div>
                <div class="second-content">
                    <h2>Languages and Tools</h2>
                    <p class="tool-desc"><?php the_field('langandtool'); ?></p>
                    <h2>My Role</h2>
                    <p><?php the_field('role'); ?></p>
                </div>
            </div>

                <div class="btn-class">
                     <a href="<?php the_field('url'); ?>" class="page-btn" target="_blank">Visit WebSite</a>
                </div>
                <img class="single-img" src="<?php the_field('works-img'); ?>" alt="portfolio-work">
                <?php if( $image2 = get_field('works-img2') ) : ?>
                  <img class="single-img" src="<?php the_field('works-img2'); ?>" alt="portfolio-work">
                    <?php elseif ( $image3 = get_field('works-img3') ) : ?>
                     <img class="single-img" src="<?php the_field('works-img3'); ?>" alt="portfolio-work">
                <?php endif; ?>
        </div>
    </section>


    <footer>
        <p>Created by <i class="fas fa-heart"></i> Nagisa Kojima</p>
    </footer>
</div>

<?php endwhile;endif;
wp_reset_postdata(); ?>

<?php get_footer(); ?>