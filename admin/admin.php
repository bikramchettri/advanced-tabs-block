<?php

// class to add admin submenu page

class ATGB_Admin_Page {

    /**
     * Constructor
     */
    public function __construct() {
        add_action( 'admin_menu', [ $this, 'atbs_admin_menu' ] );

        // enqueue admin assets
        add_action( 'admin_enqueue_scripts', [ $this, 'atbs_admin_assets' ] );
    }

    /**
     * Enqueue admin scripts
     */
    public function atbs_admin_assets($screen) {
        if( $screen === 'tools_page_atbs-block' ){
            wp_enqueue_style( 'atbs-admin-style', ATBS_URL . 'admin/admin.css', [], ATBS_VERSION );
            // JS
            wp_enqueue_script( 'atbs-admin-script', ATBS_URL . 'admin/admin.js', [ 'jquery' ], ATBS_VERSION, true );
        }
    }

    /**
     * Add admin menu
     */
    public function atbs_admin_menu() {
        add_submenu_page(
            'tools.php',
            __( 'Tabs Block', 'advanced-tabs-blocks' ),
            __( 'Tabs Block', 'advanced-tabs-blocks' ),
            'manage_options',
            'atbs-block',
            [ $this, 'atbs_admin_page' ]
        );
    }

    /**
     * Admin page
     */
    public function atbs_admin_page() {
        ?>
        <div class="atbs__wrap">
            <div class="plugin_max_container">
                <div class="plugin__head_container">
                    <div class="plugin_head">
                        <h1 class="plugin_title">
                            <?php _e( 'Advanced Tabs Blocks', 'advanced-tabs-blocks' ); ?>
                        </h1>
                        <p class="plugin_description">
                            <?php _e( 'Advanced Tabs Blocks is a Custom Gutenberg block that allows you to create different content tabs styles with ease in Gutenberg Editor without any coding knowledge', 'advanced-tabs-blocks' ); ?>
                        </p>
                    </div>
                </div>
                <div class="plugin__body_container">
                    <div class="plugin_body">
                        <div class="tabs__panel_container">
                            <div class="tabs__titles">
                                <p class="tab__title active" data-tab="tab1">
                                    <?php _e( 'Help and Support', 'advanced-tabs-blocks' ); ?>
                                </p>
                                <p class="tab__title" data-tab="tab2">
                                    <?php _e( 'Changelog', 'advanced-tabs-blocks' ); ?>
                                </p>
                            </div>
                            <div class="tabs__container">
                                <div class="tabs__panels">
                                    <div class="tab__panel active" id="tab1">
                                        <div class="tab__panel_flex">
                                            <div class="tab__panel_left">
                                                <h3 class="video__title">
                                                    <?php _e( 'Video Tutorial', 'advanced-tabs-blocks' ); ?>
                                                </h3>
                                                <p class="video__description">
                                                    <?php _e( 'Watch the video tutorial to learn how to use the plugin. It will help you start your own design quickly.', 'advanced-tabs-blocks' ); ?>
                                                </p>
                                                <div class="video__container">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/3sJkbQuyd2w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                </div>
                                            </div>
                                            <div class="tab__panel_right">
                                                <div class="single__support_panel">
                                                    <h3 class="support__title">
                                                        <?php _e( 'Report a Bug', 'advanced-tabs-blocks' ); ?>
                                                    </h3>
                                                    <p class="support__description">
                                                        <?php _e( 'If you find any issue or have any suggestion, please let me know.', 'advanced-tabs-blocks' ); ?>
                                                    </p>
                                                    <a href="https://wordpress.org/support/plugin/advanced-tabs-block/" class="support__link" target="_blank">
                                                        <?php _e( 'Support', 'advanced-tabs-blocks' ); ?>
                                                    </a>
                                                </div>
                                                <div class="single__support_panel">
                                                    <h3 class="support__title">
                                                        <?php _e( 'Spread Your Love', 'advanced-tabs-blocks' ); ?>
                                                    </h3>
                                                    <p class="support__description">
                                                        <?php _e( 'If you like this plugin, please share your opinion', 'advanced-tabs-blocks' ); ?>
                                                    </p>
                                                    <a href="https://wordpress.org/support/plugin/advanced-tabs-block/reviews/" class="support__link" target="_blank">
                                                        <?php _e( 'Rate the Plugin', 'advanced-tabs-blocks' ); ?>
                                                    </a>
                                                </div>
                                                <div class="single__support_panel">
                                                    <h3 class="support__title">
                                                        <?php _e( 'Similar Blocks', 'advanced-tabs-blocks' ); ?>
                                                    </h3>
                                                    <p class="support__description">
                                                        <?php _e( 'Want to get more similar blocks, please visit my website', 'advanced-tabs-blocks' ); ?>
                                                    </p>
                                                    <a href="https://makegutenblock.com" class="support__link" target="_blank">
                                                        <?php _e( 'Visit my Website', 'advanced-tabs-blocks' ); ?>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="custom__block_request">
                                            <h3 class="custom__block_request_title">
                                                <?php _e( 'Need to Hire Me?', 'advanced-tabs-blocks' ); ?>
                                            </h3>
                                            <p class="custom__block_request_description">
                                                <?php _e( 'I am available for any freelance projects. Please feel free to share your project detail with me.', 'advanced-tabs-blocks' ); ?>
                                            </p>
                                            <div class="available__links">
                                                <a href="mailto:zbinsaifullah@gmail.com" class="available__link mail" target="_blank">
                                                    <?php _e( 'Send Email', 'advanced-tabs-blocks' ); ?>
                                                </a>
                                                <a href="https://makegutenblock.com/contact" class="available__link web" target="_blank">
                                                    <?php _e( 'Send Message', 'advanced-tabs-blocks' ); ?>
                                                </a>
                                                <a href="https://www.fiverr.com/devs_zak" class="available__link fiverr" target="_blank">
                                                    <?php _e( 'Fiverr', 'advanced-tabs-blocks' ); ?>
                                                </a>
                                                <a href="https://www.upwork.com/freelancers/~010af183b3205dc627" class="available__link upwork" target="_blank">
                                                    <?php _e( 'UpWork', 'advanced-tabs-blocks' ); ?>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab__panel" id="tab2">
                                        <div class="change__log_head">
                                            <h3 class="change__log_title">
                                                <?php _e( 'Changelog', 'advanced-tabs-blocks' ); ?>
                                            </h3>
                                            <p class="change__log_description">
                                                <?php _e( 'This is the changelog of the plugin. You can see the changes in each version.', 'advanced-tabs-blocks' ); ?>
                                            </p>
                                            <div class="change__notes">
                                                <div class="single__note">
                                                    <span class="info change__note"><?php _e( 'i', 'advanced-tabs-blocks' ); ?></span>
                                                    <span class="note__description"><?php _e( 'Info', 'advanced-tabs-blocks' ); ?></span>
                                                </div>
                                                <div class="single__note">
                                                    <span class="feature change__note"><?php _e( 'N', 'advanced-tabs-blocks' ); ?></span>
                                                    <span class="note__description"><?php _e( 'New Feature', 'advanced-tabs-blocks' ); ?></span>
                                                </div>
                                                <div class="single__note">
                                                    <span class="update change__note"><?php _e( 'U', 'advanced-tabs-blocks' ); ?></span>
                                                    <span class="note__description"><?php _e( 'Update', 'advanced-tabs-blocks' ); ?></span>
                                                </div>
                                                <div class="single__note">
                                                    <span class="fixing change__note"><?php _e( 'F', 'advanced-tabs-blocks' ); ?></span>
                                                    <span class="note__description"><?php _e( 'Issue Fixing', 'advanced-tabs-blocks' ); ?></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="change__log_body">
                                            <div class="single__log">
                                                <div class="plugin__info">
                                                    <span class="log__version">1.1.0</span>
                                                    <span class="log__date">2022-11-11</span>
                                                </div>
                                                <div class="log__description">
                                                    <span class="change__note feature">U</span>
                                                    <span class="description__text"><?php _e( 'A great updates with completely different looks and feel.', 'advanced-tabs-blocks' ); ?></span>
                                                </div>
                                            </div>
                                            <div class="single__log">
                                                <div class="plugin__info">
                                                    <span class="log__version">1.0.0</span>
                                                    <span class="log__date">2021-05-21</span>
                                                </div>
                                                <div class="log__description">
                                                    <span class="change__note info">i</span>
                                                    <span class="description__text"><?php _e( 'Initial Release', 'advanced-tabs-blocks' ); ?></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
}

new ATGB_Admin_Page();