"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./GroupSectionFull.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-794":{"id":"e-794","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-795"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0051b2e9-d428-99eb-342a-4d5086252067","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0051b2e9-d428-99eb-342a-4d5086252067","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":null,"effectIn":true},"createdOn":1747121027900},"e-796":{"id":"e-796","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-797"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0051b2e9-d428-99eb-342a-4d508625206f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0051b2e9-d428-99eb-342a-4d508625206f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1747121036349},"e-798":{"id":"e-798","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-799"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0051b2e9-d428-99eb-342a-4d5086252074","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0051b2e9-d428-99eb-342a-4d5086252074","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1747121048916},"e-800":{"id":"e-800","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-801"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0051b2e9-d428-99eb-342a-4d5086252079","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0051b2e9-d428-99eb-342a-4d5086252079","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":15,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1747121059052},"e-802":{"id":"e-802","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-803"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0051b2e9-d428-99eb-342a-4d508625207e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0051b2e9-d428-99eb-342a-4d508625207e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":20,"scrollOffsetUnit":"%","delay":0,"direction":"LEFT","effectIn":true},"createdOn":1747121068040},"e-806":{"id":"e-806","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-807"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"0051b2e9-d428-99eb-342a-4d5086252087","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"0051b2e9-d428-99eb-342a-4d5086252087","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1747122190340},"e-808":{"id":"e-808","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-809"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8c9be9e1-4397-92c1-f3fe-a7485173be66","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8c9be9e1-4397-92c1-f3fe-a7485173be66","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":0,"direction":"BOTTOM","effectIn":true},"createdOn":1747214636712}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GroupSectionFull({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section-72")}
      grid={{
        type: "section",
      }}
      tag="section"
      id="cureo-group-section-full"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "lynx-content-8")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-291")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cureo-heading-0", "green")}
            data-w-id="0051b2e9-d428-99eb-342a-4d5086252067"
            tag="div"
          >
            {"Individual group therapy, up to 6 Patients "}
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "image-112-copy")}
            data-w-id="8c9be9e1-4397-92c1-f3fe-a7485173be66"
            loading="lazy"
            width="auto"
            height="auto"
            alt="Group Therapy with CUREO Group"
            src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/6613e0ba13d9a32a50bde28a_Sequence%2001.00_21_06_26.Standbild006.jpg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "container-17")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cureo-heading-0", "align-center")}
          tag="div"
        >
          {"CUREOGROUP"}
        </_Builtin.Block>
        <_Builtin.Heading
          className={_utils.cx(_styles, "cureo-heading-1")}
          tag="h2"
        >
          {"Maximum efficiency for your facility"}
        </_Builtin.Heading>
        <_Builtin.Image
          className={_utils.cx(_styles, "image-149")}
          id={_utils.cx(
            _styles,
            "w-node-_0051b2e9-d428-99eb-342a-4d508625206f-86252064"
          )}
          data-w-id="0051b2e9-d428-99eb-342a-4d508625206f"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/6821b9221cdf9045834c39ac_CUREO_GROUP_TABLET2.jpeg"
        />
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "cureo-paragraph-1", "align-center")}
        >
          {
            "While patients follow exercises in their individual playlist, the therapist can switch views, survey the performance and assists."
          }
        </_Builtin.Paragraph>
        <_Builtin.Block tag="div">
          <_Builtin.Grid
            className={_utils.cx(_styles, "lynx-grid-features-copy")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-features-bg")}
              id={_utils.cx(
                _styles,
                "w-node-_0051b2e9-d428-99eb-342a-4d5086252074-86252064"
              )}
              data-w-id="0051b2e9-d428-99eb-342a-4d5086252074"
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h6"
              >
                {"3X Efficiency boost"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "cureo-paragraph-1")}
              >
                {
                  "If just 1 therapist in your facility conducts group therapy with 5 patients, you can offer 3x as many therapy sessions, with constant personnel costs and much less organization expenditure."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-features-bg")}
              id={_utils.cx(
                _styles,
                "w-node-_0051b2e9-d428-99eb-342a-4d5086252079-86252064"
              )}
              data-w-id="0051b2e9-d428-99eb-342a-4d5086252079"
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h6"
              >
                {"Offer individualized group therapy"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "cureo-paragraph-1")}
              >
                {
                  "Integrate patients with individual therapy goals and different indications into one group to perform semi-autonomous VRtherapy."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-features-bg")}
              id={_utils.cx(
                _styles,
                "w-node-_0051b2e9-d428-99eb-342a-4d508625207e-86252064"
              )}
              data-w-id="0051b2e9-d428-99eb-342a-4d508625207e"
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h6"
              >
                {"Can still be used as a single system"}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "cureo-paragraph-1")}
              >
                {
                  "With a simple checkout system therapist can seemlessly blend in between single and group settings."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Grid>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-292")}
          data-w-id="0051b2e9-d428-99eb-342a-4d5086252087"
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "cureo-heading-1", "align-center")}
            tag="h1"
          >
            {"Want to know more about CUREOGROUP?"}
          </_Builtin.Heading>
          <_Builtin.Link
            className={_utils.cx(_styles, "cureo-button-1")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Contact us!"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-287")}
          data-w-id="0051b2e9-d428-99eb-342a-4d508625208c"
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cureo-heading-0", "align-center")}
            tag="div"
          >
            {"CUREOGROUP in clinics"}
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "image-143")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/681a09277ab34812bc1278e2_CUREO_GROUP_SONNENBLICK.jpeg"
          />
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
