"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SlideReference.module.css";

export function SlideReference({
  as: _Component = _Builtin.BlockContainer,
  heading2RichText = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "container-13")}
      grid={{
        type: "container",
      }}
      tag="div"
    >
      <_Builtin.Block tag="div" />
    </_Component>
  );
}
