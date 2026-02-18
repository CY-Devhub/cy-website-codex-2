"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AwardSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-89":{"id":"e-89","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-90"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8508f521-55f5-d59d-6246-283a422956b4","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8508f521-55f5-d59d-6246-283a422956b4","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":350,"direction":"LEFT","effectIn":true},"createdOn":1710429187357},"e-91":{"id":"e-91","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-92"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8508f521-55f5-d59d-6246-283a422956b9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8508f521-55f5-d59d-6246-283a422956b9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":300,"direction":"RIGHT","effectIn":true},"createdOn":1710429196112}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AwardSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "_1000pxsection",
        "margin",
        "margin-below",
        "flex-vertical",
        "margin-l-r",
        "vertical"
      )}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "div-block-104-copy-copy")}
        data-w-id="8508f521-55f5-d59d-6246-283a422956b4"
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image-90")}
          id={_utils.cx(
            _styles,
            "w-node-_8508f521-55f5-d59d-6246-283a422956b5-422956b3"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65f312f0e5e771340b1e0d4b_Innovationspreis.png"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "image-91")}
          id={_utils.cx(
            _styles,
            "w-node-_8508f521-55f5-d59d-6246-283a422956b6-422956b3"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65f312f067e570875146e367_WSA-Winner-2020_winner-1030x390_edited.jpg"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "image-92")}
          id={_utils.cx(
            _styles,
            "w-node-_8508f521-55f5-d59d-6246-283a422956b7-422956b3"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65f312f073685dd4e40f04ec_MKA2022_Winner.jpg"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "image-128")}
          id={_utils.cx(
            _styles,
            "w-node-_8508f521-55f5-d59d-6246-283a422956b8-422956b3"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/6616951bc6eac5af61383b6f_Scale_up_NRW_Logo_color.png"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "whitetransparentdiv-copy")}
        data-w-id="8508f521-55f5-d59d-6246-283a422956b9"
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "cureo-heading-1", "align-middle")}
          tag="h2"
        >
          {"Award winning product and company"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "cureo-paragraph-1")}>
          {
            "For our innovative solutions in the healthcare market, we have received several awards, such as the German innovation award."
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
    </_Component>
  );
}
