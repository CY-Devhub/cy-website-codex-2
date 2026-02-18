"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./NewContactSectionMeetergo.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-608":{"id":"e-608","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-609"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"c04427d0-d621-1a82-20d1-7558ff3c18fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"c04427d0-d621-1a82-20d1-7558ff3c18fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1730285727648}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function NewContactSectionMeetergo({
  as: _Component = _Builtin.Section,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "_1000pxsection", "meetergo", "contact")}
      data-w-id="c04427d0-d621-1a82-20d1-7558ff3c18fe"
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "div-block-208")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "cureo-heading-1", "white")}
          tag="h4"
        >
          <_Builtin.Span>
            {"Join the future of therapy with CUREO"}
          </_Builtin.Span>
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-284")} tag="div">
        <_Builtin.Link
          className={_utils.cx(
            _styles,
            "cureo-button-2",
            "action-btn-submit-013-pf",
            "gtag_report_conversion"
          )}
          button={true}
          id="kontakt-button"
          block=""
          options={{
            href: "https://meetings-eu1.hubspot.com/cureosity/terminbuchungstool-de",
            target: "_blank",
          }}
        >
          {"Book appointment"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "cureo-paragraph-3", "align-center")}
      >
        {
          "Please accept the cookies at the bottom left to see the contact form. "
        }
      </_Builtin.Paragraph>
    </_Component>
  );
}
