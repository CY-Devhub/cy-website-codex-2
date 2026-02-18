"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ConteactFormProcedure.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-79":{"id":"e-79","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-80"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8ec73814-cb44-a7bf-47c0-8c2cd58502a5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8ec73814-cb44-a7bf-47c0-8c2cd58502a5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":100,"direction":null,"effectIn":true},"createdOn":1710421636699}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ConteactFormProcedure({
  as: _Component = _Builtin.Block,
  divBlock33Id,
  paragraphText = "",
  heading3Text = "1",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "div-block-33", "full")}
      data-w-id="8ec73814-cb44-a7bf-47c0-8c2cd58502a5"
      tag="div"
      Text="Fill out text"
      Number="1"
      id={divBlock33Id}
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "heading-3")}
        tag="h1"
        Number="1"
      >
        {heading3Text}
      </_Builtin.Heading>
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
      >
        {paragraphText}
      </_Builtin.Paragraph>
    </_Component>
  );
}
