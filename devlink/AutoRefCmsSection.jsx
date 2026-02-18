"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AutoRefCmsSection.module.css";

export function AutoRefCmsSection({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "institutionssection")}
      grid={{
        type: "section",
      }}
      tag="nav"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "maincasescontainer")}
        grid={{
          type: "container",
        }}
        tag="aside"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "heroheader5", "spaces")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading1", "spacelower")}
            tag="h1"
          >
            {"Leading medical institutions "}{" "}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-44")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading1")}
              tag="h1"
            >
              {"use"}
              {""}
            </_Builtin.Heading>
            <_Builtin.Image
              className={_utils.cx(_styles, "cureo-in-headertext", "first")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/6549f62b5a6182cdbc2a976f_cureo_RGB-01_CUT.png"
            />
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.SliderWrapper
          className={_utils.cx(_styles, "slider-6")}
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
          hideArrows={false}
          disableSwipe={false}
          duration={500}
          infinite={true}
          autoMax={0}
          navInvert={true}
        >
          <_Builtin.SliderMask className={_utils.cx(_styles, "mask-5")}>
            <_Builtin.SliderSlide
              className={_utils.cx(_styles, "slide-6")}
              tag="div"
            />
            <_Builtin.SliderSlide
              className={_utils.cx(_styles, "slide-7")}
              tag="div"
            />
          </_Builtin.SliderMask>
          <_Builtin.SliderArrow
            className={_utils.cx(_styles, "left-arrow-3")}
            dir="left"
          >
            <_Builtin.Icon
              className={_utils.cx(_styles, "icon")}
              widget={{
                type: "icon",
                icon: "slider-left",
              }}
            />
          </_Builtin.SliderArrow>
          <_Builtin.SliderArrow
            className={_utils.cx(_styles, "right-arrow-3")}
            dir="right"
          >
            <_Builtin.Icon
              className={_utils.cx(_styles, "icon-2")}
              widget={{
                type: "icon",
                icon: "slider-right",
              }}
            />
          </_Builtin.SliderArrow>
          <_Builtin.SliderNav
            className={_utils.cx(_styles, "", "", "slide-nav-3")}
          />
        </_Builtin.SliderWrapper>
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.BlockContainer>
    </_Component>
  );
}
