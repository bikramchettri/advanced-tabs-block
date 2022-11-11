/* eslint-disable @wordpress/no-unsafe-wp-apis */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	TabPanel,
	SelectControl,
	CardDivider,
	RangeControl,
	TextControl,
	Tip,
} from '@wordpress/components';
const { Fragment } = wp.element;
import { useSelect } from '@wordpress/data';

const ALLOWED_BLOCKS = ['atbs/tab'];

import './tab';

// editor style
import './editor.scss';

// admin editor style
import '../../utilities/admin/editor.scss';

// Editor Styled
import TabStyle from '../../utilities/admin/editor-styled';

// single components
import SingleInputBox from '../../utilities/components/singleinputbox/singleinputbox';
import MarginBox from '../../utilities/components/marginbox/marginbox';
import InputBox from '../../utilities/components/inputbox/inputbox';
import ButtonsBox from '../../utilities/components/buttonsbox/buttonsbox';
import ColorPicker from '../../utilities/components/colorpicker/colorpicker';

// options
import borderstyles from '../../utilities/options/borderstyles';
import separatorstyles from '../../utilities/options/separatorstyles';
import aligns from '../../utilities/options/aligns';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		tabLabelsArray,
		updateChild,
		tabLayout,
		activeTabColor,
		activeTabBg,
		containerBorderStyle,
		containerTopBorderWidth,
		containerRightBorderWidth,
		containerBottomBorderWidth,
		containerLeftBorderWidth,
		enableContainerLinkedBorder,
		containerLinkedBorderWidth,
		containerTopBorderRadius,
		containerRightBorderRadius,
		containerBottomBorderRadius,
		containerLeftBorderRadius,
		enableContainerLinkedBorderRadius,
		containerLinkedBorderRadius,
		containerDeskTopMargin,
		containerDeskBottomMargin,
		containerTabTopMargin,
		containerTabBottomMargin,
		containerMobTopMargin,
		containerMobBottomMargin,
		enableContainerBoxShadow,
		containerBorderColor,
		showSeparator,
		separatorStyle,
		separatorColor,
		separatorHeight,
		labelsPosition,
		labelsDeskPaddingTop,
		labelsDeskPaddingRight,
		labelsDeskPaddingBottom,
		labelsDeskPaddingLeft,
		enableLinkedDeskPadding,
		labelsLinkedDeskPadding,
		labelsTabPaddingTop,
		labelsTabPaddingRight,
		labelsTabPaddingBottom,
		labelsTabPaddingLeft,
		enableLinkedTabPadding,
		labelsLinkedTabPadding,
		labelsMobPaddingTop,
		labelsMobPaddingRight,
		labelsMobPaddingBottom,
		labelsMobPaddingLeft,
		enableLinkedMobPadding,
		labelsLinkedMobPadding,
		labelsColor,
		labelsBg,
		addLabelsSeparator,
		labelsSeparatorStyle,
		labelsSeparatorColor,
		labelsSeparatorWidth,
		tabsContentDeskPaddingTop,
		tabsContentDeskPaddingRight,
		tabsContentDeskPaddingBottom,
		tabsContentDeskPaddingLeft,
		enableLinkedContentDeskPadding,
		tabsContentLinkedDeskPadding,
		tabsContentTabPaddingTop,
		tabsContentTabPaddingRight,
		tabsContentTabPaddingBottom,
		tabsContentTabPaddingLeft,
		enableLinkedContentTabPadding,
		tabsContentLinkedTabPadding,
		tabsContentMobPaddingTop,
		tabsContentMobPaddingRight,
		tabsContentMobPaddingBottom,
		tabsContentMobPaddingLeft,
		enableLinkedContentMobPadding,
		tabsContentLinkedMobPadding,
		tabsContentColor,
		tabsContentBg,
		makeActiveTabSeparateLess,
		useCustomColors,
		zIndex,
		customClass,
		anchorId,
	} = attributes;

	const buildTabLabelsArray = () => {
		const parentBlockID = clientId;
		const { innerBlockCount } = useSelect((select) => ({
			innerBlockCount:
				select('core/block-editor').getBlockCount(parentBlockID),
		}));

		const tabLabels = [];

		for (let block = 0; block < innerBlockCount; block++) {
			const tabLabel = wp.data
				.select('core/block-editor')
				.getBlocks(parentBlockID)[block].attributes.tabLabel;
			tabLabels.push(tabLabel);
		}

		return tabLabels;
	};

	const labelsArray = buildTabLabelsArray();
	const labelLengthChange = labelsArray.length !== tabLabelsArray.length;

	if (labelLengthChange || updateChild) {
		setAttributes({ tabLabelsArray: labelsArray });
		setAttributes({ updateChild: false });
	}
	// set unique ID
	setAttributes({
		uniqueId: clientId.slice(0, 8),
	});

	return (
		<Fragment>
			<InspectorControls>
				<TabPanel
					className="atbs__tabs"
					activeClass="active_tab"
					initialTabName={'atbs__general'}
					tabs={[
						{
							name: 'atbs__general',
							title: __('General', 'advanced-tabs-block'),
							className: 'atbs__tab',
						},
						{
							name: 'atbs__style',
							title: __('Colors', 'advanced-tabs-block'),
							className: 'atbs__tab atbs__middle',
						},
						{
							name: 'atbs__advanced',
							title: __('Advanced', 'advanced-tabs-block'),
							className: 'atbs__tab',
						},
					]}
				>
					{(tab) => {
						if (tab.name === 'atbs__general') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}>
										<ButtonsBox
											label={__(
												'Layout',
												'advanced-tabs-block'
											)}
											value={tabLayout}
											options={[
												{
													label: __(
														'Horizontal',
														'advanced-tabs-block'
													),
													value: 'horizontal',
												},
												{
													label: __(
														'Vertical',
														'advanced-tabs-block'
													),
													value: 'vertical',
													pro: true,
												},
											]}
											onClick={(value) =>
												setAttributes({
													tabLayout: value,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										initialOpen={false}
										title={__(
											'Container',
											'advanced-tabs-block'
										)}
									>
										<MarginBox
											label={__(
												'Container Margin',
												'advanced-tabs-block'
											)}
											dTop={containerDeskTopMargin}
											dBottom={containerDeskBottomMargin}
											tTop={containerTabTopMargin}
											tBottom={containerTabBottomMargin}
											mTop={containerMobTopMargin}
											mBottom={containerMobBottomMargin}
											dTopAttr={'containerDeskTopMargin'}
											dBottomAttr={
												'containerDeskBottomMargin'
											}
											tTopAttr={'containerTabTopMargin'}
											tBottomAttr={
												'containerTabBottomMargin'
											}
											mTopAttr={'containerMobTopMargin'}
											mBottomAttr={
												'containerMobBottomMargin'
											}
											setAttributes={setAttributes}
										/>
										<SelectControl
											label={__(
												'Border Style',
												'advanced-tabs-block'
											)}
											value={containerBorderStyle}
											options={borderstyles}
											onChange={(style) => {
												setAttributes({
													containerBorderStyle: style,
												});
											}}
										/>
										{containerBorderStyle !== 'none' && (
											<Fragment>
												<SingleInputBox
													label={__(
														'Border Width',
														'advanced-tabs-block'
													)}
													top={
														containerTopBorderWidth
													}
													right={
														containerRightBorderWidth
													}
													bottom={
														containerBottomBorderWidth
													}
													left={
														containerLeftBorderWidth
													}
													linked={
														enableContainerLinkedBorder
													}
													linkedValue={
														containerLinkedBorderWidth
													}
													topAttr="containerTopBorderWidth"
													rightAttr="containerRightBorderWidth"
													bottomAttr="containerBottomBorderWidth"
													leftAttr="containerLeftBorderWidth"
													linkedAttr="enableContainerLinkedBorder"
													linkedValueAttr="containerLinkedBorderWidth"
													setAttributes={
														setAttributes
													}
												/>
												<SingleInputBox
													label={__(
														'Border Radius',
														'advanced-tabs-block'
													)}
													top={
														containerTopBorderRadius
													}
													right={
														containerRightBorderRadius
													}
													bottom={
														containerBottomBorderRadius
													}
													left={
														containerLeftBorderRadius
													}
													linked={
														enableContainerLinkedBorderRadius
													}
													linkedValue={
														containerLinkedBorderRadius
													}
													topAttr="containerTopBorderRadius"
													rightAttr="containerRightBorderRadius"
													bottomAttr="containerBottomBorderRadius"
													leftAttr="containerLeftBorderRadius"
													linkedAttr="enableContainerLinkedBorderRadius"
													linkedValueAttr="containerLinkedBorderRadius"
													setAttributes={
														setAttributes
													}
												/>
											</Fragment>
										)}
										<CardDivider />
										<ToggleControl
											label={__(
												'Enable Container Box Shadow',
												'advanced-tabs-block'
											)}
											help={
												enableContainerBoxShadow
													? __(
															'box shadow is enabled.',
															'advanced-tabs-block'
													  )
													: __(
															'box shadow is disabled.',
															'advanced-tabs-block'
													  )
											}
											checked={enableContainerBoxShadow}
											onChange={() =>
												setAttributes({
													enableContainerBoxShadow:
														!enableContainerBoxShadow,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Separator',
											'advanced-tabs-block'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Show Separator',
												'advanced-tabs-block'
											)}
											help={
												showSeparator
													? __(
															'Separator is visible between tabs labels and content',
															'advanced-tabs-block'
													  )
													: __(
															'Separator is hidden between tabs labels and content',
															'advanced-tabs-block'
													  )
											}
											checked={showSeparator}
											onChange={() =>
												setAttributes({
													showSeparator:
														!showSeparator,
												})
											}
										/>
										{showSeparator && (
											<Fragment>
												<CardDivider />
												<SelectControl
													label={__(
														'Separator Style',
														'advanced-tabs-block'
													)}
													value={separatorStyle}
													options={separatorstyles}
													onChange={(style) => {
														setAttributes({
															separatorStyle:
																style,
														});
													}}
												/>
												<RangeControl
													label={__(
														'Separator Height',
														'advanced-tabs-block'
													)}
													value={separatorHeight}
													onChange={(height) =>
														setAttributes({
															separatorHeight:
																height,
														})
													}
													min={1}
													max={50}
													allowReset={true}
													resetFallbackValue={1}
													help={
														__(
															'Separator height: ',
															'advanced-tabs-block'
														) +
														separatorHeight +
														'px'
													}
												/>
											</Fragment>
										)}
									</PanelBody>
									<PanelBody
										title={__(
											'Tabs Labels',
											'advanced-tabs-block'
										)}
										initialOpen={false}
									>
										<Tip
											status="info"
											isDismissible={false}
										>
											{__(
												'Some options [position,separator] are only visible in the Frontend.',
												'advanced-tabs-block'
											)}
										</Tip>
										<ButtonsBox
											value={labelsPosition}
											label={__(
												'Position',
												'advanced-tabs-block'
											)}
											onClick={(value) =>
												setAttributes({
													labelsPosition: value,
												})
											}
											options={aligns}
											icons={{
												left: 'editor-alignleft',
												center: 'editor-aligncenter',
												right: 'editor-alignright',
												justify: 'editor-justify',
											}}
										/>
										<InputBox
											label={__(
												'Padding',
												'advanced-tabs-block'
											)}
											dTop={labelsDeskPaddingTop}
											dRight={labelsDeskPaddingRight}
											dBottom={labelsDeskPaddingBottom}
											dLeft={labelsDeskPaddingLeft}
											dLinked={enableLinkedDeskPadding}
											dLinkedValue={
												labelsLinkedDeskPadding
											}
											tTop={labelsTabPaddingTop}
											tRight={labelsTabPaddingRight}
											tBottom={labelsTabPaddingBottom}
											tLeft={labelsTabPaddingLeft}
											tLinked={enableLinkedTabPadding}
											tLinkedValue={
												labelsLinkedTabPadding
											}
											mTop={labelsMobPaddingTop}
											mRight={labelsMobPaddingRight}
											mBottom={labelsMobPaddingBottom}
											mLeft={labelsMobPaddingLeft}
											mLinked={enableLinkedMobPadding}
											mLinkedValue={
												labelsLinkedMobPadding
											}
											dTopAttr={'labelsDeskPaddingTop'}
											dRightAttr={
												'labelsDeskPaddingRight'
											}
											dBottomAttr={
												'labelsDeskPaddingBottom'
											}
											dLeftAttr={'labelsDeskPaddingLeft'}
											dLinkedAttr={
												'enableLinkedDeskPadding'
											}
											dLinkedValueAttr={
												'labelsLinkedDeskPadding'
											}
											tTopAttr={'labelsTabPaddingTop'}
											tRightAttr={'labelsTabPaddingRight'}
											tBottomAttr={
												'labelsTabPaddingBottom'
											}
											tLeftAttr={'labelsTabPaddingLeft'}
											tLinkedAttr={
												'enableLinkedTabPadding'
											}
											tLinkedValueAttr={
												'labelsLinkedTabPadding'
											}
											mTopAttr={'labelsMobPaddingTop'}
											mRightAttr={'labelsMobPaddingRight'}
											mBottomAttr={
												'labelsMobPaddingBottom'
											}
											mLeftAttr={'labelsMobPaddingLeft'}
											mLinkedAttr={
												'enableLinkedMobPadding'
											}
											mLinkedValueAttr={
												'labelsLinkedMobPadding'
											}
											setAttributes={setAttributes}
										/>
										<CardDivider />
										<ToggleControl
											label={__(
												'Add Labels Separator',
												'advanced-tabs-block'
											)}
											help={
												addLabelsSeparator
													? __(
															'Separator is added at the right of the labels.',
															'advanced-tabs-block'
													  )
													: __(
															'Separator is removed from the right of the labels.',
															'advanced-tabs-block'
													  )
											}
											checked={addLabelsSeparator}
											onChange={() =>
												setAttributes({
													addLabelsSeparator:
														!addLabelsSeparator,
												})
											}
										/>
										{addLabelsSeparator && (
											<Fragment>
												<CardDivider />
												<SelectControl
													label={__(
														'Separator Style',
														'advanced-tabs-block'
													)}
													value={labelsSeparatorStyle}
													options={separatorstyles}
													onChange={(style) => {
														setAttributes({
															labelsSeparatorStyle:
																style,
														});
													}}
												/>
												<RangeControl
													label={__(
														'Separator Width',
														'advanced-tabs-block'
													)}
													value={labelsSeparatorWidth}
													onChange={(width) =>
														setAttributes({
															labelsSeparatorWidth:
																width,
														})
													}
													min={1}
													max={50}
													allowReset={true}
													resetFallbackValue={1}
													help={
														__(
															'Separator width: ',
															'advanced-tabs-block'
														) +
														labelsSeparatorWidth +
														'px'
													}
												/>
											</Fragment>
										)}
									</PanelBody>
									<PanelBody
										title={__(
											'Tabs Content',
											'advanced-tabs-block'
										)}
										initialOpen={false}
									>
										<InputBox
											label={__(
												'Padding',
												'advanced-tabs-block'
											)}
											dTop={tabsContentDeskPaddingTop}
											dRight={tabsContentDeskPaddingRight}
											dBottom={
												tabsContentDeskPaddingBottom
											}
											dLeft={tabsContentDeskPaddingLeft}
											dLinked={
												enableLinkedContentDeskPadding
											}
											dLinkedValue={
												tabsContentLinkedDeskPadding
											}
											tTop={tabsContentTabPaddingTop}
											tRight={tabsContentTabPaddingRight}
											tBottom={
												tabsContentTabPaddingBottom
											}
											tLeft={tabsContentTabPaddingLeft}
											tLinked={
												enableLinkedContentTabPadding
											}
											tLinkedValue={
												tabsContentLinkedTabPadding
											}
											mTop={tabsContentMobPaddingTop}
											mRight={tabsContentMobPaddingRight}
											mBottom={
												tabsContentMobPaddingBottom
											}
											mLeft={tabsContentMobPaddingLeft}
											mLinked={
												enableLinkedContentMobPadding
											}
											mLinkedValue={
												tabsContentLinkedMobPadding
											}
											dTopAttr={
												'tabsContentDeskPaddingTop'
											}
											dRightAttr={
												'tabsContentDeskPaddingRight'
											}
											dBottomAttr={
												'tabsContentDeskPaddingBottom'
											}
											dLeftAttr={
												'tabsContentDeskPaddingLeft'
											}
											dLinkedAttr={
												'enableLinkedContentDeskPadding'
											}
											dLinkedValueAttr={
												'tabsContentLinkedDeskPadding'
											}
											tTopAttr={
												'tabsContentTabPaddingTop'
											}
											tRightAttr={
												'tabsContentTabPaddingRight'
											}
											tBottomAttr={
												'tabsContentTabPaddingBottom'
											}
											tLeftAttr={
												'tabsContentTabPaddingLeft'
											}
											tLinkedAttr={
												'enableLinkedContentTabPadding'
											}
											tLinkedValueAttr={
												'tabsContentLinkedTabPadding'
											}
											mTopAttr={
												'tabsContentMobPaddingTop'
											}
											mRightAttr={
												'tabsContentMobPaddingRight'
											}
											mBottomAttr={
												'tabsContentMobPaddingBottom'
											}
											mLeftAttr={
												'tabsContentMobPaddingLeft'
											}
											mLinkedAttr={
												'enableLinkedContentMobPadding'
											}
											mLinkedValueAttr={
												'tabsContentLinkedMobPadding'
											}
											setAttributes={setAttributes}
										/>
									</PanelBody>
								</Fragment>
							);
						} else if (tab.name === 'atbs__style') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}>
										<ToggleControl
											label={__(
												'Use Custom Colors Pallet',
												'advanced-tabs-block'
											)}
											help={
												useCustomColors
													? __(
															'Note: You are using Plugin Custom Colors Palette',
															'advanced-tabs-block'
													  )
													: __(
															'Note: You are using Theme Colors Palette',
															'advanced-tabs-block'
													  )
											}
											checked={useCustomColors}
											onChange={() =>
												setAttributes({
													useCustomColors:
														!useCustomColors,
												})
											}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Container',
											'advanced-tabs-block'
										)}
										initialOpen={false}
									>
										<ColorPicker
											label={__(
												'Border Color',
												'advanced-tabs-block'
											)}
											value={containerBorderColor}
											onChange={(value) =>
												setAttributes({
													containerBorderColor: value,
												})
											}
											enableCustomColors={useCustomColors}
											clearable={false}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Separator',
											'advanced-tabs-block'
										)}
										initialOpen={false}
									>
										<ColorPicker
											label={__(
												'Color',
												'advanced-tabs-block'
											)}
											value={separatorColor}
											onChange={(value) =>
												setAttributes({
													separatorColor: value,
												})
											}
											enableCustomColors={useCustomColors}
											clearable={false}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Tabs Labels',
											'advanced-tabs-block'
										)}
										initialOpen={false}
									>
										<ColorPicker
											label={__(
												'Color',
												'advanced-tabs-block'
											)}
											value={labelsColor}
											onChange={(value) =>
												setAttributes({
													labelsColor: value,
												})
											}
											enableCustomColors={useCustomColors}
											clearable={true}
										/>
										<ColorPicker
											label={__(
												'Separator Color',
												'advanced-tabs-block'
											)}
											value={labelsSeparatorColor}
											onChange={(value) =>
												setAttributes({
													labelsSeparatorColor: value,
												})
											}
											enableCustomColors={useCustomColors}
											clearable={false}
										/>
										<CardDivider />
										<ColorPicker
											label={__(
												'Background',
												'advanced-tabs-block'
											)}
											value={labelsBg}
											onChange={(value) =>
												setAttributes({
													labelsBg: value,
												})
											}
											enableCustomColors={useCustomColors}
											clearable={true}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Tabs Content',
											'advanced-tabs-block'
										)}
										initialOpen={false}
									>
										<ColorPicker
											label={__(
												'Color',
												'advanced-tabs-block'
											)}
											value={tabsContentColor}
											onChange={(value) =>
												setAttributes({
													tabsContentColor: value,
												})
											}
											enableCustomColors={useCustomColors}
											clearable={true}
										/>
										<ColorPicker
											label={__(
												'Background',
												'advanced-tabs-block'
											)}
											value={tabsContentBg}
											onChange={(value) =>
												setAttributes({
													tabsContentBg: value,
												})
											}
											enableCustomColors={useCustomColors}
											clearable={true}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Active Tab',
											'advanced-tabs-block'
										)}
										initialOpen={false}
									>
										<ToggleControl
											label={__(
												'Make active tab bottom separate free',
												'advanced-tabs-block'
											)}
											help={
												makeActiveTabSeparateLess
													? __(
															'bottom separate inactive',
															'advanced-tabs-block'
													  )
													: __(
															'bottom separate active',
															'advanced-tabs-block'
													  )
											}
											checked={makeActiveTabSeparateLess}
											onChange={() =>
												setAttributes({
													makeActiveTabSeparateLess:
														!makeActiveTabSeparateLess,
												})
											}
										/>
										<CardDivider />
										<ColorPicker
											label={__(
												'Color',
												'advanced-tabs-block'
											)}
											value={activeTabColor}
											onChange={(value) =>
												setAttributes({
													activeTabColor: value,
												})
											}
											enableCustomColors={useCustomColors}
											clearable={false}
										/>
										<ColorPicker
											label={__(
												'Background',
												'advanced-tabs-block'
											)}
											value={activeTabBg}
											onChange={(value) =>
												setAttributes({
													activeTabBg: value,
												})
											}
											enableCustomColors={useCustomColors}
											clearable={true}
										/>
									</PanelBody>
								</Fragment>
							);
						} else if (tab.name === 'atbs__advanced') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}>
										<RangeControl
											label={__(
												'Z-Index',
												'advanced-team-blocks'
											)}
											value={zIndex}
											onChange={(value) =>
												setAttributes({
													zIndex: value,
												})
											}
											min={-100}
											max={100}
											allowReset={true}
											resetFallbackValue={''}
											help={__(
												'Z-index property specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.',
												'advanced-team-blocks'
											)}
										/>
									</PanelBody>
									<PanelBody
										title={__(
											'Miscellaneous',
											'advanced-team-blocks'
										)}
										initialOpen={false}
									>
										<TextControl
											label={__(
												'HTML Anchor ID',
												'advanced-team-blocks'
											)}
											value={anchorId}
											onChange={(className) =>
												setAttributes({
													anchorId: className.replace(
														/[^a-zA-Z0-9_-]/g,
														'-'
													),
												})
											}
											help={__(
												'Anchor ID lets you link directly to a section on a page.',
												'advanced-team-blocks'
											)}
										/>
										<TextControl
											label={__(
												'Additional Class (es)',
												'easy-accordion-block'
											)}
											value={customClass}
											onChange={(className) =>
												setAttributes({
													customClass: className,
												})
											}
											help={__(
												'Use space to separate multiple classes.',
												'advanced-team-blocks'
											)}
										/>
									</PanelBody>
								</Fragment>
							);
						}
					}}
				</TabPanel>
			</InspectorControls>

			<TabStyle
				{...useBlockProps()}
				marginDeskTop={containerDeskTopMargin}
				marginDeskBottom={containerDeskBottomMargin}
				containerBorderStyle={containerBorderStyle}
				containerTopBorderWidth={containerTopBorderWidth}
				containerRightBorderWidth={containerRightBorderWidth}
				containerBottomBorderWidth={containerBottomBorderWidth}
				containerLeftBorderWidth={containerLeftBorderWidth}
				enableContainerLinkedBorder={enableContainerLinkedBorder}
				containerLinkedBorderWidth={containerLinkedBorderWidth}
				containerBorderColor={containerBorderColor}
				containerTopBorderRadius={containerTopBorderRadius}
				containerRightBorderRadius={containerRightBorderRadius}
				containerBottomBorderRadius={containerBottomBorderRadius}
				containerLeftBorderRadius={containerLeftBorderRadius}
				enableContainerLinkedBorderRadius={
					enableContainerLinkedBorderRadius
				}
				containerLinkedBorderRadius={containerLinkedBorderRadius}
				enableContainerBoxShadow={enableContainerBoxShadow}
				showSeparator={showSeparator}
				separatorStyle={separatorStyle}
				separatorColor={separatorColor}
				separatorHeight={separatorHeight}
				labelsDeskPaddingTop={labelsDeskPaddingTop}
				labelsDeskPaddingRight={labelsDeskPaddingRight}
				labelsDeskPaddingBottom={labelsDeskPaddingBottom}
				labelsDeskPaddingLeft={labelsDeskPaddingLeft}
				enableLinkedDeskPadding={enableLinkedDeskPadding}
				labelsLinkedDeskPadding={labelsLinkedDeskPadding}
				labelsColor={labelsColor}
				labelsBg={labelsBg}
				tabsContentDeskPaddingTop={tabsContentDeskPaddingTop}
				tabsContentDeskPaddingRight={tabsContentDeskPaddingRight}
				tabsContentDeskPaddingBottom={tabsContentDeskPaddingBottom}
				tabsContentDeskPaddingLeft={tabsContentDeskPaddingLeft}
				enableLinkedContentDeskPadding={enableLinkedContentDeskPadding}
				tabsContentLinkedDeskPadding={tabsContentLinkedDeskPadding}
				tabsContentColor={tabsContentColor}
				tabsContentBg={tabsContentBg}
			>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={[['atbs/tab']]}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</TabStyle>
		</Fragment>
	);
}
