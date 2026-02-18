"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./LookingForMoreDiv.module.css";

export function LookingForMoreDiv({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "lookingformorediv")} tag="div">
      <_Builtin.Heading
        className={_utils.cx(_styles, "cureo-heading-2", "align-middle")}
        tag="h5"
      >
        {"Want to find out what's new around CUREOSITY and CUREO?"}
      </_Builtin.Heading>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-51")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "cureo-button-1")}
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Visit our newsroom"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
