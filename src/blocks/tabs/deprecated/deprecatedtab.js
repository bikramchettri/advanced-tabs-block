import { InnerBlocks } from '@wordpress/block-editor';
const deprecatedTab = {
	attributes: {
		tabLabel: {
			type: 'string',
			default: '',
		},
		blockIndex: {
			type: 'number',
			default: '',
		},
	},
	save: ({ attributes }) => {
		const { tabLabel } = attributes;
		return (
			<div
				className="atbs__tab-panel"
				role="tabpanel"
				tabIndex="0"
				aria-labelledby={tabLabel}
			>
				<InnerBlocks.Content />
			</div>
		);
	},
};
export default deprecatedTab;
