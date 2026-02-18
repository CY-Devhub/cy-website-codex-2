"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./GalerieBlock.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6548c6e5ab9a929dbb64e89c|5bb8fac1-535f-8c0f-cc92-98d862d7b9a4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6548c6e5ab9a929dbb64e89c|5bb8fac1-535f-8c0f-cc92-98d862d7b9a4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700136369008},"e-2":{"id":"e-2","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6548c6e5ab9a929dbb64e89c|5bb8fac1-535f-8c0f-cc92-98d862d7b9a4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6548c6e5ab9a929dbb64e89c|5bb8fac1-535f-8c0f-cc92-98d862d7b9a4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1700136369009},"e-850":{"id":"e-850","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-851"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3c4c9654724f2e1b926be|5bb8fac1-535f-8c0f-cc92-98d862d7b9a4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3c4c9654724f2e1b926be|5bb8fac1-535f-8c0f-cc92-98d862d7b9a4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758708938594},"e-851":{"id":"e-851","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-850"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68d3c4c9654724f2e1b926be|5bb8fac1-535f-8c0f-cc92-98d862d7b9a4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68d3c4c9654724f2e1b926be|5bb8fac1-535f-8c0f-cc92-98d862d7b9a4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758708938594}},"actionLists":{"a":{"id":"a","title":"CUREO Slider Animation","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".galerieblock.textbox","selectorGuids":["1c01e2ea-da07-6cae-b76f-81d524df20f6","05d4bb58-7323-9978-3f7d-1dce1ad77001"]},"widthUnit":"PX","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".galerieblock.textbox","selectorGuids":["1c01e2ea-da07-6cae-b76f-81d524df20f6","05d4bb58-7323-9978-3f7d-1dce1ad77001"]},"widthValue":500,"heightValue":160,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1700136971768},"a-2":{"id":"a-2","title":"BackToNormal","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6548c6e5ab9a929dbb64e89c|5bb8fac1-535f-8c0f-cc92-98d862d7b9a4"},"widthUnit":"PX","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1700137712839}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GalerieBlock({
  as: _Component = _Builtin.Block,
  galerieBlockText = "Erfahren Sie wie CUREO in der Ergotherapie angewandt wird",
  galerieBlockTextLong = "Die Praxis Wiesbaden setzte CUREO..",
}) {
  _interactions.useInteractions(_interactionsData, _styles);
  return (
    <_Component
      className={_utils.cx(_styles, "galerieblock", "textbox")}
      tag="div"
    >
      {galerieBlockText}
    </_Component>
  );
}
