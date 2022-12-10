<?php
/**
 * Tabs Callback
 */

 function tabs_callback($attributes){
    $handle = 'atbs__tabs_' . $attributes['uniqueId'];
    $atbs_css = '';
    /**
     * Normal CSS
     */

    // zindex
    if(isset($attributes['zIndex'])){
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.'{';
            $atbs_css .= 'z-index: '.$attributes['zIndex'].';';
        $atbs_css .= '}';
    }

    // container 
    $atbs_css .= '.wp-block-atbs-tabs.'.$handle.'{';
        if( isset($attributes['enableContainerLinkedBorderRadius'])) {
            $atbs_css .= 'border-radius: '.$attributes['containerLinkedBorderRadius'].'px;';
        } else {
            $atbs_css .= 'border-radius: '.$attributes['containerTopBorderRadius'].'px '.$attributes['containerRightBorderRadius'].'px '.$attributes['containerBottomBorderRadius'].'px '.$attributes['containerLeftBorderRadius'].'px;';
        }

        if(isset($attributes['contentBorderStyle']) && $attributes['contentBorderStyle'] != 'none'){
            $atbs_css .= 'border-color: '.$attributes['containerBorderColor'].';';
            $atbs_css .= 'border-style: '.$attributes['containerBorderStyle'].';';
            if( isset($attributes['enableContainerLinkedBorder'])){
                $atbs_css .= 'border-width: '.$attributes['containerLinkedBorderWidth'].'px;';
            }else {
                $atbs_css .= 'border-width: '.$attributes['containerTopBorderWidth'].'px' . ' ' . $attributes['containerRightBorderWidth'].'px' . ' ' . $attributes['containerBottomBorderWidth'].'px' . ' ' . $attributes['containerLeftBorderWidth'].'px;';
            }
        }

        if(isset($attributes['enableContainerBoxShadow'])){
            $atbs_css .= 'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);';
        }
    $atbs_css .= '}';

    // separator 
    $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-labels{';
        if( isset($attributes['showSeparator']) ) {
            $atbs_css .= 'border-bottom: '.$attributes['separatorHeight'].'px '.$attributes['separatorStyle'].' '.$attributes['separatorColor'].';';
        }
        if(isset($attributes['labelsBg'])){
            $atbs_css .= 'background-color: '.$attributes['labelsBg'].';';
        }
    $atbs_css .= '}';
    
    $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-labels.center .atbs__tab-label:first-child{';
        if(isset($attributes['addLabelsSeparator'])){
            $atbs_css .= 'border-left-color: '.$attributes['labelsSeparatorColor'].';';
            $atbs_css .= 'border-left-style: '.$attributes['labelsSeparatorStyle'].';';
            $atbs_css .= 'border-left-width: '.$attributes['labelsSeparatorWidth'].'px;';
        }
    $atbs_css .= '}';

    $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-labels.right .atbs__tab-label:first-child{';
        if(isset($attributes['addLabelsSeparator'])){
            $atbs_css .= 'border-left-color: '.$attributes['labelsSeparatorColor'].';';
            $atbs_css .= 'border-left-style: '.$attributes['labelsSeparatorStyle'].';';
            $atbs_css .= 'border-left-width: '.$attributes['labelsSeparatorWidth'].'px;';
        }
    $atbs_css .= '}';

    // single label separator  
    $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-label{';
        if(isset($attributes['addLabelsSeparator'])){
            $atbs_css .= 'border-right-color: '.$attributes['labelsSeparatorColor'].';';
            $atbs_css .= 'border-right-style: '.$attributes['labelsSeparatorStyle'].';';
            $atbs_css .= 'border-right-width: '.$attributes['labelsSeparatorWidth'].'px;';
        }
        if(isset($attributes['labelsColor'])){
            $atbs_css .= 'color: '.$attributes['labelsColor'].';';
        }
    $atbs_css .= '}';

    // content Padding
    $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-content{';
        if(isset($attributes['tabsContentColor'])){
            $atbs_css .= 'color: '.$attributes['tabsContentColor'].';';
        }
        if(isset($attributes['tabsContentBg'])){
            $atbs_css .= 'background-color: '.$attributes['tabsContentBg'].';';
        }
    $atbs_css .= '}';

    // active tab colors/bg  
    $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-label.active{';
        if(isset($attributes['activeTabColor'])){
            $atbs_css .= 'color: '.$attributes['activeTabColor'].' !important;';
        }
        if(isset($attributes['activeTabBg'])){
            $atbs_css .= 'background-color: '.$attributes['activeTabBg'].' !important;';
        }
    $atbs_css .= '}';

    if(isset($attributes['makeActiveTabSeparateLess'])){
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-label.active:after{';
            $atbs_css .= 'bottom: -'.$attributes['separatorHeight'].'px!important;';
            $atbs_css .= 'height: '.$attributes['separatorHeight'].'px!important;';
            if(isset($attributes['activeTabBg'])) {
                $atbs_css .= 'background-color: '.$attributes['activeTabBg'].';';
            }
        $atbs_css .= '}';
    }

    /**
     * Desktop View
     */

    $atbs_css .= '@media only screen and (min-width: 1025px) {';
        // Container Margin
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.'{';
            if(isset($attributes['containerDeskTopMargin'])){
                $atbs_css .= 'margin-top: '.$attributes['containerDeskTopMargin'].'px;';
            }
            if(isset($attributes['containerDeskBottomMargin'])){
                $atbs_css .= 'margin-bottom: '.$attributes['containerDeskBottomMargin'].'px;';
            }
        $atbs_css .= '}';

        // labels Padding
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-label{';
            if(isset($attributes['enableLinkedDeskPadding'])){
                $atbs_css .= 'padding: '.$attributes['labelsLinkedDeskPadding'].'px;';
            }else {
                $atbs_css .= 'padding-top: '.$attributes['labelsDeskPaddingTop'].'px;';
                $atbs_css .= 'padding-right: '.$attributes['labelsDeskPaddingRight'].'px;';
                $atbs_css .= 'padding-bottom: '.$attributes['labelsDeskPaddingBottom'].'px;';
                $atbs_css .= 'padding-left: '.$attributes['labelsDeskPaddingLeft'].'px;';
            }
        $atbs_css .= '}';

        // content Padding
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-content{';
            if(isset($attributes['enableLinkedContentDeskPadding'])){
                $atbs_css .= 'padding: '.$attributes['tabsContentLinkedDeskPadding'].'px;';
            }else {
                $atbs_css .= 'padding-top: '.$attributes['tabsContentDeskPaddingTop'].'px;';
                $atbs_css .= 'padding-right: '.$attributes['tabsContentDeskPaddingRight'].'px;';
                $atbs_css .= 'padding-bottom: '.$attributes['tabsContentDeskPaddingBottom'].'px;';
                $atbs_css .= 'padding-left: '.$attributes['tabsContentDeskPaddingLeft'].'px;';
            }
        $atbs_css .= '}';

    $atbs_css .= '}';

    /**
     * Tablet View
     */
    
    $atbs_css .= '@media only screen and (min-width: 768px) and (max-width: 1024px) {';
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.'{';
            if(isset($attributes['containerTabTopMargin'])){
                $atbs_css .= 'margin-top: '.$attributes['containerTabTopMargin'].'px;';
            }
            if(isset($attributes['containerTabBottomMargin'])){
                $atbs_css .= 'margin-bottom: '.$attributes['containerTabBottomMargin'].'px;';
            }
        $atbs_css .= '}';

        // labels Padding
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-label{';
            if(isset($attributes['enableLinkedTabPadding'])){
                $atbs_css .= 'padding: '.$attributes['labelsLinkedTabPadding'].'px;';
            }else {
                $atbs_css .= 'padding-top: '.$attributes['labelsTabPaddingTop'].'px;';
                $atbs_css .= 'padding-right: '.$attributes['labelsTabPaddingRight'].'px;';
                $atbs_css .= 'padding-bottom: '.$attributes['labelsTabPaddingBottom'].'px;';
                $atbs_css .= 'padding-left: '.$attributes['labelsTabPaddingLeft'].'px;';
            }
        $atbs_css .= '}';

        // content Padding
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-content{';
            if(isset($attributes['enableLinkedContentTabPadding'])){
                $atbs_css .= 'padding: '.$attributes['tabsContentLinkedTabPadding'].'px;';
            }else {
                $atbs_css .= 'padding-top: '.$attributes['tabsContentTabPaddingTop'].'px;';
                $atbs_css .= 'padding-right: '.$attributes['tabsContentTabPaddingRight'].'px;';
                $atbs_css .= 'padding-bottom: '.$attributes['tabsContentTabPaddingBottom'].'px;';
                $atbs_css .= 'padding-left: '.$attributes['tabsContentTabPaddingLeft'].'px;';
            }
        $atbs_css .= '}';

    $atbs_css .= '}';

    /** 
     * Mobile View
     */

    $atbs_css .= '@media only screen and (max-width: 767px) {';
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.'{';
            if(isset($attributes['containerMobTopMargin'])){
                $atbs_css .= 'margin-top: '.$attributes['containerMobTopMargin'].'px;';
            }
            if(isset($attributes['containerMobBottomMargin'])){
                $atbs_css .= 'margin-bottom: '.$attributes['containerMobBottomMargin'].'px;';
            }
        $atbs_css .= '}';

        // labels Padding
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-label {';
            if(isset($attributes['enableLinkedMobPadding'])){
                $atbs_css .= 'padding: '.$attributes['labelsLinkedMobPadding'].'px;';
            }else {
                $atbs_css .= 'padding-top: '.$attributes['labelsMobPaddingTop'].'px;';
                $atbs_css .= 'padding-right: '.$attributes['labelsMobPaddingRight'].'px;';
                $atbs_css .= 'padding-bottom: '.$attributes['labelsMobPaddingBottom'].'px;';
                $atbs_css .= 'padding-left: '.$attributes['labelsMobPaddingLeft'].'px;';
            }
        $atbs_css .= '}';

        // border bottom for single label 
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-label{';
            if(isset($attributes['addLabelsSeparator'])){
                $atbs_css .= 'border-bottom-color: '.$attributes['labelsSeparatorColor'].';';
                $atbs_css .= 'border-bottom-style: '.$attributes['labelsSeparatorStyle'].';';
                $atbs_css .= 'border-bottom-width: '.$attributes['labelsSeparatorWidth'].'px;';
            }
            if(isset($attributes['labelsColor'])){
                $atbs_css .= 'color: '.$attributes['labelsColor'].';';
            }
        $atbs_css .= '}';

        // content Padding
        $atbs_css .= '.wp-block-atbs-tabs.'.$handle.' .atbs__tab-content{';
            if(isset($attributes['enableLinkedContentMobPadding'])){
                $atbs_css .= 'padding: '.$attributes['tabsContentLinkedMobPadding'].'px;';
            }else {
                $atbs_css .= 'padding-top: '.$attributes['tabsContentMobPaddingTop'].'px;';
                $atbs_css .= 'padding-right: '.$attributes['tabsContentMobPaddingRight'].'px;';
                $atbs_css .= 'padding-bottom: '.$attributes['tabsContentMobPaddingBottom'].'px;';
                $atbs_css .= 'padding-left: '.$attributes['tabsContentMobPaddingLeft'].'px;';
            }
        $atbs_css .= '}';

    $atbs_css .= '}';

    return $atbs_css;
 }