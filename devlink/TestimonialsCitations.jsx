"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TestimonialsCitations.module.css";

export function TestimonialsCitations({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "expert-testimonials")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Heading className={_utils.cx(_styles, "heading1")} tag="h1">
        {"Voices for CUREO:"}
      </_Builtin.Heading>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-35")} tag="div">
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Block>
    </_Component>
  );
}
