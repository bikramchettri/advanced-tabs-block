// import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
const { RawHTML } = wp.element;

export default function save({ attributes }) {
	const {
		tabLabelsArray,
		uniqueId,
		labelsPosition,
		makeActiveTabSeparateLess,
		customClass,
		anchorId,
	} = attributes;
	const blockProps = useBlockProps.save({
		className: `atbs__tabs_${uniqueId} ${customClass}`,
	});
	return (
		<div {...blockProps} id={anchorId ? anchorId : null}>
			<ul
				className={`atbs__tab-labels ${labelsPosition} ${
					makeActiveTabSeparateLess
						? 'make-active-tab-separate-less'
						: ''
				}`}
				role="tablist"
				aria-label="tabbed content"
			>
				{tabLabelsArray.map((label, i) => {
					return (
						<li
							key={i}
							className={
								i === 0
									? 'atbs__tab-label active'
									: 'atbs__tab-label'
							}
							role="tab"
							aria-selected={i === 0 ? 'true' : 'false'}
							aria-controls={label}
							tabIndex="0"
						>
							<RawHTML>{label}</RawHTML>
						</li>
					);
				})}
			</ul>
			<div className="atbs__tab-content">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
