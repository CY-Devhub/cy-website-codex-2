"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { FeatureComponent } from "./FeatureComponent";
import * as _utils from "./utils";
import _styles from "./CureoFeaturesectionAdvantages.module.css";

export function CureoFeaturesectionAdvantages({
  as: _Component = _Builtin.Section,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "_1000pxsection", "_75vh")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "cureo-in-headerdiv", "features")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "cureo-heading-1", "align-middle")}
          tag="h1"
        >
          {"Your advantages with "}
          <_Builtin.Span className={_utils.cx(_styles, "text-span-4")}>
            <_Builtin.Strong className={_utils.cx(_styles, "bold-text")}>
              {"CURE"}
            </_Builtin.Strong>
          </_Builtin.Span>
          <_Builtin.Strong>{"O"}</_Builtin.Strong>
          <_Builtin.Span className={_utils.cx(_styles, "text-span-5")}>
            <_Builtin.Superscript>{"®"}</_Builtin.Superscript>
          </_Builtin.Span>
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.NotSupported _atom="DynamoWrapper" />
    </_Component>
  );
}
