"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NavBar.module.css";

export function NavBar({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "section")}
      grid={{
        type: "section",
      }}
      tag="header"
    >
      <_Builtin.Image
        className={_utils.cx(_styles, "image")}
        loading="lazy"
        width="300"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/6548de993ba0822e0f5dd3f1__CU_Logo_CUREosity_rgb.png"
      />
      <_Builtin.Block className={_utils.cx(_styles, "div-block")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "header")} tag="header">
          <_Builtin.Heading
            className={_utils.cx(_styles, "navmenuitem")}
            tag="h1"
          >
            {"CUREO"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "navmenuitem")}
            tag="h1"
          >
            {"CUREO"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "navmenuitem")}
            tag="h1"
          >
            {"CUREO"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "navmenuitem")}
            tag="h1"
          >
            {"CUREO"}
          </_Builtin.Heading>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-2")} tag="div" />
    </_Component>
  );
}
