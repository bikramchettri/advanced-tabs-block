import {
	__experimentalNumberControl as NumberControl,
	Icon,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// import style
import './singleinputbox.scss';

const SingleInputBox = ({
	label,
	top,
	bottom,
	left,
	right,
	topAttr,
	bottomAttr,
	leftAttr,
	rightAttr,
	linked,
	linkedAttr,
	linkedValue,
	linkedValueAttr,
	setAttributes,
}) => {
	return (
		<div className="atbs__devices_inputs">
			<div className="atbs__label_flex">
				<p className="atbs__label_nomargin">{label}</p>
				<div className="atbs__devices">
					<button className={`atbs__device active`}>
						{__('PX', 'atomic-blocks')}
					</button>
				</div>
			</div>
			<div className="atbs__inputs_group">
				<div className="atbs_input__controls">
					<NumberControl
						label={__('Top', 'advanced-timeline-block')}
						value={linked ? linkedValue : top}
						onChange={(value) => {
							setAttributes(
								linked
									? {
											[linkedValueAttr]: value,
									  }
									: {
											[topAttr]: value,
									  }
							);
						}}
						labelPosition="bottom"
						min={0}
					/>
					<NumberControl
						label={__('Right', 'advanced-timeline-block')}
						value={linked ? linkedValue : right}
						onChange={(value) => {
							setAttributes(
								linked
									? {
											[linkedValueAttr]: value,
									  }
									: {
											[rightAttr]: value,
									  }
							);
						}}
						labelPosition="bottom"
						min={0}
					/>
					<NumberControl
						label={__('Bottom', 'advanced-timeline-block')}
						value={linked ? linkedValue : bottom}
						onChange={(value) => {
							setAttributes(
								linked
									? {
											[linkedValueAttr]: value,
									  }
									: {
											[bottomAttr]: value,
									  }
							);
						}}
						labelPosition="bottom"
						min={0}
					/>
					<NumberControl
						label={__('Left', 'advanced-timeline-block')}
						value={linked ? linkedValue : left}
						onChange={(value) => {
							setAttributes(
								linked
									? {
											[linkedValueAttr]: value,
									  }
									: {
											[leftAttr]: value,
									  }
							);
						}}
						labelPosition="bottom"
						min={0}
					/>

					<button
						className={`atbs__linked_settings ${
							linked ? 'active' : ''
						}`}
						onClick={() => {
							setAttributes({
								[linkedAttr]: !linked,
							});
						}}
					>
						<Icon
							icon={`${linked ? 'admin-links' : 'editor-unlink'}`}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};
export default SingleInputBox;
