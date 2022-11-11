import styled from 'styled-components';

const TabStyle = styled.div`
	${(props) =>
		props.marginDeskTop &&
		`margin-top: ${props.marginDeskTop}px !important;`}
	${(props) =>
		props.marginDeskBottom &&
		`margin-bottom: ${props.marginDeskBottom}px !important;`}

    .wp-block-atbs-tab {
		${(props) =>
			props.containerBorderStyle !== 'none' &&
			`
            border-style: ${props.containerBorderStyle};
            border-color: ${props.containerBorderColor};
            ${
				props.enableContainerLinkedBorder
					? `border-width: ${props.containerLinkedBorderWidth}px;`
					: `border-width: ${props.containerTopBorderWidth}px ${props.containerRightBorderWidth}px ${props.containerBottomBorderWidth}px ${props.containerLeftBorderWidth}px;`
			};
        `}
		${(props) =>
			props.enableContainerLinkedBorderRadius
				? `border-radius: ${props.containerLinkedBorderRadius}px;`
				: `border-radius: ${props.containerTopBorderRadius}px ${props.containerRightBorderRadius}px ${props.containerBottomBorderRadius}px ${props.containerLeftBorderRadius}px;`}
        ${(props) =>
			props.enableContainerBoxShadow &&
			`box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);`}
		.atbs__tab_label {
			${(props) =>
				props.showSeparator &&
				`border-bottom: ${props.separatorHeight}px ${props.separatorStyle} ${props.separatorColor};`}
			${(props) =>
				props.enableLinkedDeskPadding
					? `padding: ${props.labelsLinkedDeskPadding}px;`
					: `padding: ${props.labelsDeskPaddingTop}px ${props.labelsDeskPaddingRight}px ${props.labelsDeskPaddingBottom}px ${props.labelsDeskPaddingLeft}px;`}
			${(props) => props.labelsColor && `color: ${props.labelsColor};`}
			${(props) => props.labelsBg && `background-color: ${props.labelsBg};`}
		}
		.block-editor-block-list__layout {
			${(props) =>
				props.enableLinkedContentDeskPadding
					? `padding: ${props.tabsContentLinkedDeskPadding}px;`
					: `padding: ${props.tabsContentDeskPaddingTop}px ${props.tabsContentDeskPaddingRight}px ${props.tabsContentDeskPaddingBottom}px ${props.tabsContentDeskPaddingLeft}px;`}

			${(props) =>
				props.tabsContentBg &&
				`background-color: ${props.tabsContentBg};`}
			${(props) => props.tabsContentColor && `color: ${props.tabsContentColor};`}
		}
	}
`;
export default TabStyle;
