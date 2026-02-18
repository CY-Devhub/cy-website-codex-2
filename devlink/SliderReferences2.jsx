"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SliderReferences2.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-10":{"id":"e-10","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-21","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-11"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".lynx-accordion-header-3","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"},"targets":[{"selector":".lynx-accordion-header-3","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664677039541},"e-11":{"id":"e-11","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".lynx-accordion-header-3","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"},"targets":[{"selector":".lynx-accordion-header-3","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664677039541}},"actionLists":{"a-21":{"id":"a-21","title":"Lynx Accordion - Open 4","actionItemGroups":[{"actionItems":[{"id":"a-21-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-4","selectorGuids":["c8704b7c-ec1d-bb15-1a33-3171fedd2226"]},"value":"none"}},{"id":"a-21-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-4","selectorGuids":["c8704b7c-ec1d-bb15-1a33-3171fedd2226"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-21-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-4","selectorGuids":["c8704b7c-ec1d-bb15-1a33-3171fedd2226"]},"value":"block"}}]},{"actionItems":[{"id":"a-21-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-4","selectorGuids":["c8704b7c-ec1d-bb15-1a33-3171fedd2226"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-21-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".lynx-icon-arrow-4","selectorGuids":["c8704b7c-ec1d-bb15-1a33-3171fedd2227"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1664677042168},"a-22":{"id":"a-22","title":"Lynx Accordion - Close 4","actionItemGroups":[{"actionItems":[{"id":"a-22-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-4","selectorGuids":["c8704b7c-ec1d-bb15-1a33-3171fedd2226"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-22-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".lynx-icon-arrow-4","selectorGuids":["c8704b7c-ec1d-bb15-1a33-3171fedd2227"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-22-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-4","selectorGuids":["c8704b7c-ec1d-bb15-1a33-3171fedd2226"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1664677042168}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SliderReferences2({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-21")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.NotSupported _atom="DynamoWrapper" />
    </_Component>
  );
}
