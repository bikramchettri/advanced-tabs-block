<?php
/**
 * Plugin Name:       Advanced Tabs Gutenberg Block
 * Description:       A custom Gutenberg Block to show content in tabs style.
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           1.1.0
 * Author:            Zakaria Binsaifullah
 * Author URI:        https://makegutenblock.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       advanced-tabs-block
 *
 * @package           @wordpress/create-block 
 */

 /**
  * @package Zero Configuration with @wordpress/create-block
  *  [atbs] && [ATBS] ===> Prefix
  */

// Stop Direct Access 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// include admin page
require_once plugin_dir_path( __FILE__ ) . 'admin/admin.php';

/**
 * Blocks Final Class
 */

final class ATBS_BLOCKS_CLASS {
	public function __construct() {

		// define constants
		$this->atbs_define_constants();

		// block initialization
		add_action( 'init', [ $this, 'atbs_blocks_init' ] );

		// admin page
		add_action( 'activated_plugin', [ $this, 'atbs_user_admin_page' ] );

		// blocks category
		if( version_compare( $GLOBALS['wp_version'], '5.7', '<' ) ) {
			add_filter( 'block_categories', [ $this, 'atbs_register_block_category' ], 10, 2 );
		} else {
			add_filter( 'block_categories_all', [ $this, 'atbs_register_block_category' ], 10, 2 );
		}

		// enqueue block assets
		add_action( 'enqueue_block_assets', [ $this, 'atbs_external_libraries' ] );
	}

	/**
	 * Initialize the plugin
	 */

	public static function init(){
		static $instance = false; 
		if( ! $instance ) {
			$instance = new self();
		}
		return $instance;
	}

	/**
	 * Define the plugin constants
	 */
	private function atbs_define_constants() {
		define( 'ATBS_VERSION', '1.1.0' );
		define( 'ATBS_URL', plugin_dir_url( __FILE__ ) );
		define( 'ATBS_LIB_URL', ATBS_URL . 'lib/' );		
	}

	/**
	 * Blocks Registration 
	 */

	public function atbs_register_block( $name, $options = array() ) {
		register_block_type( __DIR__ . '/build/blocks/' . $name, $options );
	 }

	 // render inline css
	public function atbs_render_inline_css( $handle, $css ) {
		wp_register_style( $handle, false );
		wp_enqueue_style( $handle );
		wp_add_inline_style( $handle, $css );
	}
	

	/**
	 * Blocks Initialization
	*/
	public function atbs_blocks_init() {
		// register single block
		$this->atbs_register_block( 'tabs', array(
			'render_callback' => [ $this, 'atbs_render_block' ],
		) );
	}

	// inline css 
	public function atbs_inline_css($handle, $css){
		// register inline style
		wp_register_style( $handle, false );
		// enqueue inline style
		wp_enqueue_style( $handle );
		// add inline style at head
		wp_add_inline_style( $handle, $css );
	}

	// render function 
	public function atbs_render_block($attributes, $content){
		require_once __DIR__ . '/templates/tabs.php';
		$handle = 'atbs-'.$attributes['uniqueId'];
		$this->atbs_inline_css( $handle, tabs_callback($attributes));
		return $content;
	}

	/**
	 * Register Block Category
	 */

	public function atbs_register_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug'  => 'atbs-block',
					'title' => __( 'Tabs Block', 'advanced-tabs-block' ),
				),
			),
			$categories,
		);
	}

	// Admin page
	public function atbs_user_admin_page( $plugin ) {
		if( plugin_basename(__FILE__) == $plugin ){
			wp_redirect( admin_url( 'tools.php?page=atbs-block' ) );
			die();
		}
	}

	/**
	 * Enqueue Block Assets
	 */
	public function atbs_external_libraries() {
		// enqueue JS
		if( ! is_admin() && has_block('atbs/tabs')){
			wp_enqueue_script( 'atbs-tabs', ATBS_LIB_URL . 'js/tabs.js', array(), ATBS_VERSION, true );
		}
	}

}

/**
 * Kickoff
*/

ATBS_BLOCKS_CLASS::init();

