import { InnerBlocks, RichText } from '@wordpress/block-editor';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { subscribe } from '@wordpress/data';

// deprecated version
import deprecatedTab from './deprecated/deprecatedtab';

registerBlockType('atbs/tab', {
	title: __('Tab', 'advanced-tabs-block'),
	description: __('Acts as child block for Tabs', 'advanced-tabs-block'),
	deprecated: [deprecatedTab],
	supports: {
		html: false,
		customClassName: false,
	},
	icon: {
		foreground: '#38687c',
		src: 'minus',
	},
	parent: ['atbs/tabs'],
	category: 'atbs-block',
	keywords: [
		__('tab', 'advanced-tabs-block'),
		__('tabs', 'advanced-tabs-block'),
	],
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
	edit: ({ className, attributes, setAttributes, clientId }) => {
		const { tabLabel, blockIndex } = attributes;

		const parentBlockID = wp.data
			.select('core/block-editor')
			.getBlockParentsByBlockName(clientId, ['atbs/tabs']);
		const savedBlockIndex = blockIndex;
		const getBlockIndex = wp.data
			.select('core/block-editor')
			.getBlockOrder(parentBlockID)
			.indexOf(clientId);

		const unsubscribe = subscribe(() => {
			const newBlockIndex = wp.data
				.select('core/block-editor')
				.getBlockOrder(parentBlockID)
				.indexOf(clientId);
			const blockIndexChange = newBlockIndex !== savedBlockIndex;

			if (blockIndexChange) {
				unsubscribe();
				setAttributes({ blockIndex: newBlockIndex });
				wp.data
					.dispatch('core/block-editor')
					.updateBlockAttributes(parentBlockID, {
						updateChild: true,
					});
			}
		});

		const onChangeTabLabel = (newTabLabel) => {
			setAttributes({ tabLabel: newTabLabel });
			setAttributes({ blockIndex: getBlockIndex });
			wp.data
				.dispatch('core/block-editor')
				.updateBlockAttributes(parentBlockID, { updateChild: true });
		};
		return (
			<div className={className}>
				<RichText
					tagName="p"
					className={`atbs__tab_label`}
					value={tabLabel}
					onChange={onChangeTabLabel}
					placeholder={__('Tab label..', 'advanced-tabs-block')}
				/>
				<InnerBlocks
					allowedBlocks={true}
					template={[['core/paragraph']]}
				/>
			</div>
		);
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
});
