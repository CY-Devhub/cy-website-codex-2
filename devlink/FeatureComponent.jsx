"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FeatureComponent.module.css";

export function FeatureComponent({
  as: _Component = _Builtin.Block,
  cureoHeading2Text = "Heading",
  cureoParagraph1RichText = "",
  image20Image = "",
}) {
  return (
    <_Component className={_utils.cx(_styles, "featurecomponent")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image-20")}
        dyn={{
          bind: {},
        }}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image20Image}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "cureo-textblock-padding")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "cureo-heading-2")}
          dyn={{
            bind: {},
          }}
          tag="h1"
        >
          {cureoHeading2Text}
        </_Builtin.Heading>
        <_Builtin.RichText
          className={_utils.cx(_styles, "cureo-paragraph-1")}
          tag="div"
          slot=""
        >
          {cureoParagraph1RichText}
        </_Builtin.RichText>
      </_Builtin.Block>
    </_Component>
  );
}
