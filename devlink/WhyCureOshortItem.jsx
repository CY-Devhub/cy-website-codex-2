"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WhyCureOshortItem.module.css";

export function WhyCureOshortItem({
  as: _Component = _Builtin.Block,
  image51Image = "",
  cureoHeading2Text = "Heading",
}) {
  return (
    <_Component className={_utils.cx(_styles, "whycureoshortitem")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image-51")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={image51Image}
      />
      <_Builtin.Heading
        className={_utils.cx(_styles, "cureo-heading-2")}
        tag="h1"
      >
        {cureoHeading2Text}
      </_Builtin.Heading>
    </_Component>
  );
}
