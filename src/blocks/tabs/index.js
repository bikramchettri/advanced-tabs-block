import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

// deprecated version
import v1 from './deprecated/v1';

/**
 * Block Registration
 */

registerBlockType(metadata, {
	deprecated: [v1],
	icon: {
		src: (
			<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1">
				<path
					d="M6 1v1h-6v4h1v4h5v6.018h11v-15.018h-11zM2 6h4v1h-4v-1zM2 9v-1h4v1h-4zM16 15.018h-9v-10.018h-6v-2h6v-1h9v13.018z"
					fill="#38687c"
				/>
			</svg>
		),
		foreground: '#38687c',
	},
	edit: Edit,
	save: Save,
});
