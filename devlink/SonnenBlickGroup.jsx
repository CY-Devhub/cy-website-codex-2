"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./SonnenBlickGroup.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-828":{"id":"e-828","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-829"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"92ff1151-d793-a874-33fd-46b0ce595946","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"92ff1151-d793-a874-33fd-46b0ce595946","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1747290077056},"e-830":{"id":"e-830","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-831"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"92ff1151-d793-a874-33fd-46b0ce595947","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"92ff1151-d793-a874-33fd-46b0ce595947","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"RIGHT","effectIn":true},"createdOn":1747290135213},"e-832":{"id":"e-832","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-833"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"92ff1151-d793-a874-33fd-46b0ce595945","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"92ff1151-d793-a874-33fd-46b0ce595945","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1747290153853}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SonnenBlickGroup({ as: _Component = _Builtin.Grid }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "lynx-grid-image-left")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "lynx-block-image-2")}
        id={_utils.cx(
          _styles,
          "w-node-_92ff1151-d793-a874-33fd-46b0ce595944-ce595943"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image-147")}
          data-w-id="92ff1151-d793-a874-33fd-46b0ce595945"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/681aff6b327233cca1d75563_logo-klinik-sonnenblick-marburg.png"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "lynx-image")}
          data-w-id="92ff1151-d793-a874-33fd-46b0ce595946"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/681afcea32ac536983501ef3_SonnenBlickScreenshot2_JPEG.jpg"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "lynx-block-right")}
        id={_utils.cx(
          _styles,
          "w-node-_92ff1151-d793-a874-33fd-46b0ce595947-ce595943"
        )}
        data-w-id="92ff1151-d793-a874-33fd-46b0ce595947"
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "cureo-heading-2")}
          tag="h2"
        >
          {
            "Klinik Sonnenblick in Margburg conducts individualized group therapy with CUREOGROUP in a setting with 5 patients. "
          }
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-294")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "cureo-button-1")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Watch video"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
