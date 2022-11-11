import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useState } from '@wordpress/element';

// import style
import './marginbox.scss';

const MarginBox = ({
	label,
	dTop,
	dBottom,
	dTopAttr,
	dBottomAttr,
	tTop,
	tBottom,
	tTopAttr,
	tBottomAttr,
	mTop,
	mBottom,
	mTopAttr,
	mBottomAttr,
	setAttributes,
}) => {
	const [device, setDevice] = useState('desktop');
	return (
		<div className="atbs__devices_inputs">
			<div className="atbs__label_flex">
				<p className="atbs__label_nomargin">{label}</p>
				<div className="atbs__devices">
					<button
						className={`atbs__device ${
							device === 'desktop' ? 'active' : ''
						}`}
						onClick={() => setDevice('desktop')}
					>
						<svg width="8" height="7" viewBox="0 0 8 7">
							<path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
						</svg>
					</button>
					<button
						className={`atbs__device middle_device ${
							device === 'tablet' ? 'active' : ''
						}`}
						onClick={() => setDevice('tablet')}
					>
						<svg width="6" height="7" viewBox="0 0 6 7">
							<path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
						</svg>
					</button>
					<button
						className={`atbs__device ${
							device === 'mobile' ? 'active' : ''
						}`}
						onClick={() => setDevice('mobile')}
					>
						<svg width="4" height="7" viewBox="0 0 4 7">
							<path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
						</svg>
					</button>
				</div>
			</div>
			<div className="atbs__inputs_group margin_inputs">
				{device === 'desktop' && (
					<div className="atbs_input__controls">
						<NumberControl
							label={__('Top', 'advanced-tabs-block')}
							value={dTop}
							onChange={(value) => {
								setAttributes({
									[dTopAttr]: value,
								});
							}}
							labelPosition="bottom"
							min={0}
						/>
						<NumberControl
							label={__('Bottom', 'advanced-tabs-block')}
							value={dBottom}
							onChange={(value) => {
								setAttributes({
									[dBottomAttr]: value,
								});
							}}
							labelPosition="bottom"
							min={0}
						/>
						<button className={`atlb__linked_settings active`}>
							{__('PX', 'advanced-tabs-block')}
						</button>
					</div>
				)}
				{device === 'tablet' && (
					<div className="atbs_input__controls">
						<NumberControl
							label={__('Top', 'advanced-tabs-block')}
							value={tTop}
							onChange={(value) => {
								setAttributes({
									[tTopAttr]: value,
								});
							}}
							labelPosition="bottom"
							min={0}
						/>
						<NumberControl
							label={__('Bottom', 'advanced-tabs-block')}
							value={tBottom}
							onChange={(value) => {
								setAttributes({
									[tBottomAttr]: value,
								});
							}}
							min={0}
							labelPosition="bottom"
						/>
						<button className={`atlb__linked_settings active`}>
							{__('PX', 'advanced-tabs-block')}
						</button>
					</div>
				)}
				{device === 'mobile' && (
					<div className="atbs_input__controls">
						<NumberControl
							label={__('Top', 'advanced-tabs-block')}
							value={mTop}
							onChange={(value) => {
								setAttributes({
									[mTopAttr]: value,
								});
							}}
							labelPosition="bottom"
							min={0}
						/>
						<NumberControl
							label={__('Bottom', 'advanced-tabs-block')}
							value={mBottom}
							onChange={(value) => {
								setAttributes({
									[mBottomAttr]: value,
								});
							}}
							labelPosition="bottom"
							min={0}
						/>
						<button className={`atlb__linked_settings active`}>
							{__('PX', 'advanced-tabs-block')}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
export default MarginBox;
