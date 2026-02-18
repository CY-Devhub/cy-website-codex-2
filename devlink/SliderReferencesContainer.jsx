"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SliderReferencesContainer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-9","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".cureo-accordionheader","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"},"targets":[{"selector":".cureo-accordionheader","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664677039541},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".cureo-accordionheader","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"},"targets":[{"selector":".cureo-accordionheader","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664677039541}},"actionLists":{"a-9":{"id":"a-9","title":"Lynx Accordion - Open","actionItemGroups":[{"actionItems":[{"id":"a-9-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content","selectorGuids":["8a421ae7-3ac3-f54e-3310-d0ed2af13bea"]},"value":"none"}},{"id":"a-9-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content","selectorGuids":["8a421ae7-3ac3-f54e-3310-d0ed2af13bea"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-9-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content","selectorGuids":["8a421ae7-3ac3-f54e-3310-d0ed2af13bea"]},"value":"block"}}]},{"actionItems":[{"id":"a-9-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content","selectorGuids":["8a421ae7-3ac3-f54e-3310-d0ed2af13bea"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-9-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".lynx-icon-arrow","selectorGuids":["8a421ae7-3ac3-f54e-3310-d0ed2af13beb"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1664677042168},"a-10":{"id":"a-10","title":"Lynx Accordion - Close","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content","selectorGuids":["8a421ae7-3ac3-f54e-3310-d0ed2af13bea"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-10-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".lynx-icon-arrow","selectorGuids":["8a421ae7-3ac3-f54e-3310-d0ed2af13beb"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-10-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content","selectorGuids":["8a421ae7-3ac3-f54e-3310-d0ed2af13bea"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1664677042168}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SliderReferencesContainer({
  as: _Component = _Builtin.BlockContainer,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "sliderreferences")}
      grid={{
        type: "container",
      }}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "allicondiv")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "icondiv")} tag="div">
          <_Builtin.Icon
            className={_utils.cx(_styles, "iconarrow", "_2", "left")}
            widget={{
              type: "icon",
              icon: "slider-left",
            }}
          />
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "icondiv")} tag="div">
          <_Builtin.Icon
            className={_utils.cx(_styles, "iconarrow", "_2", "right")}
            widget={{
              type: "icon",
              icon: "slider-left",
            }}
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "innerslidersection")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-14")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "heroheader2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-30")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading1", "b")}
                tag="h1"
              >
                {"How"}
              </_Builtin.Heading>
              <_Builtin.Image
                className={_utils.cx(_styles, "cureo-in-headertext")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/6549f62b5a6182cdbc2a976f_cureo_RGB-01_CUT.png"
              />
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading1", "b")}
              tag="h1"
            >
              {"supports medical professionals"}
            </_Builtin.Heading>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.SliderWrapper
        className={_utils.cj(_utils.cx(_styles, "slider-4"), "w-clearfix")}
        fs-cmsslider-element="slider"
        navSpacing={3}
        navShadow={false}
        autoplay={false}
        delay={4000}
        iconArrows={true}
        animation="slide"
        navNumbers={false}
        easing="ease"
        navRound={true}
        hideArrows={true}
        disableSwipe={false}
        duration={500}
        infinite={true}
        autoMax={0}
        navInvert={true}
      >
        <_Builtin.SliderMask className={_utils.cx(_styles, "mask-4")}>
          <_Builtin.SliderSlide
            className={_utils.cx(_styles, "slide-4")}
            tag="div"
          />
          <_Builtin.SliderSlide tag="div" />
        </_Builtin.SliderMask>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "left-arrow-2")}
          dir="left"
        >
          <_Builtin.Icon
            className={_utils.cx(_styles, "iconarrow")}
            widget={{
              type: "icon",
              icon: "slider-left",
            }}
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "right-arrow-2")}
          dir="right"
        >
          <_Builtin.Icon
            className={_utils.cx(_styles, "iconarrow")}
            widget={{
              type: "icon",
              icon: "slider-right",
            }}
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderNav className={_utils.cx(_styles, "slide-nav-2")} />
      </_Builtin.SliderWrapper>
      <_Builtin.NotSupported _atom="DynamoWrapper" />
    </_Component>
  );
}
