"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Locations.module.css";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Locations({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-71")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "cureo-heading-1", "align-center")}
        tag="h1"
      >
        {"Our locations:"}
      </_Builtin.Heading>
      <_Builtin.NotSupported _atom="DynamoWrapper" />
    </_Component>
  );
}
