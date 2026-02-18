"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ManualRefSliderCms.module.css";

export function ManualRefSliderCms({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section-24")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.SliderWrapper
        className={_utils.cx(_styles, "slider-8")}
        navSpacing={5}
        navShadow={true}
        autoplay={false}
        delay={4000}
        iconArrows={true}
        animation="slide"
        navNumbers={false}
        easing="ease"
        navRound={true}
        hideArrows={false}
        disableSwipe={false}
        duration={500}
        infinite={true}
        autoMax={0}
        navInvert={true}
      >
        <_Builtin.SliderMask>
          <_Builtin.SliderSlide tag="div">
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.SliderSlide>
          <_Builtin.SliderSlide tag="div">
            <_Builtin.NotSupported _atom="DynamoWrapper" />
          </_Builtin.SliderSlide>
        </_Builtin.SliderMask>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "left-arrow-4")}
          dir="left"
        >
          <_Builtin.Icon
            className={_utils.cx(_styles, "icon-6")}
            widget={{
              type: "icon",
              icon: "slider-left",
            }}
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderArrow
          className={_utils.cx(_styles, "right-arrow-4")}
          dir="right"
        >
          <_Builtin.Icon
            className={_utils.cx(_styles, "icon-7")}
            widget={{
              type: "icon",
              icon: "slider-right",
            }}
          />
        </_Builtin.SliderArrow>
        <_Builtin.SliderNav className={_utils.cx(_styles, "slide-nav-5")} />
      </_Builtin.SliderWrapper>
    </_Component>
  );
}
