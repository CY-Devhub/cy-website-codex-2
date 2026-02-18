"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Accordion.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708332859886},"e-18":{"id":"e-18","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-17"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f40","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f40","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1708332859886},"e-43":{"id":"e-43","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-44"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65afaef7455c725f3025074c|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65afaef7455c725f3025074c|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710342201951},"e-44":{"id":"e-44","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-43"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65afaef7455c725f3025074c|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65afaef7455c725f3025074c|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1710342201951},"e-441":{"id":"e-441","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-442"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6644639c39fd76b1a2cbe496|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6644639c39fd76b1a2cbe496|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715757982314},"e-442":{"id":"e-442","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-441"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6644639c39fd76b1a2cbe496|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6644639c39fd76b1a2cbe496|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1715757982314},"e-632":{"id":"e-632","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-633"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67371c681c5d0ff1f36da961|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67371c681c5d0ff1f36da961|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1731665000837},"e-633":{"id":"e-633","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-632"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67371c681c5d0ff1f36da961|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67371c681c5d0ff1f36da961|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1731665000837},"e-882":{"id":"e-882","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-29","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-883"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68da4d47fd9ef5ed64da39d5|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68da4d47fd9ef5ed64da39d5|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759137096044},"e-883":{"id":"e-883","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-882"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68da4d47fd9ef5ed64da39d5|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68da4d47fd9ef5ed64da39d5|5d668a34-05da-3085-02f3-ee6783899d9a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1759137096044}},"actionLists":{"a-29":{"id":"a-29","title":"AccordionOpens","actionItemGroups":[{"actionItems":[{"id":"a-29-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f40"},"heightValue":380,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-29-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"boundaryMode":true,"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f45"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-29-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":true,"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f40"},"heightValue":650,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-29-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":300,"target":{"boundaryMode":true,"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f45"},"xValue":0,"zValue":180,"xUnit":"deg","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1708332905112},"a-30":{"id":"a-30","title":"Accordion Close","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f40"},"heightValue":650,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-30-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"boundaryMode":true,"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f45"},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-30-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":true,"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f40"},"heightValue":380,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-30-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":300,"target":{"boundaryMode":true,"id":"521d47a2-d9a8-99a9-f2e4-2f1345511f45"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1708334668426}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Accordion({
  as: _Component = _Builtin.DropdownWrapper,
  cureoHeading2Text = "This is some text inside of a div block.",
  image53CopyImage = "https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65cddd9b1dd94fa2f41484aa_Trainingsraum.jpg",
  richTextBlock10RichText = "",
  richTextBlockRichText = "",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "cureo-accordion")}
      data-w-id="521d47a2-d9a8-99a9-f2e4-2f1345511f40"
      tag="div"
      delay={0}
      hover={false}
    >
      <_Builtin.DropdownToggle
        className={_utils.cx(_styles, "cureo-accordion-toggle")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image-53-copy")}
          loading="lazy"
          width="306"
          height="auto"
          alt=""
          src={image53CopyImage}
        />
        <_Builtin.RichText
          className={_utils.cx(_styles, "cureo-heading-2")}
          tag="div"
          slot=""
        >
          {richTextBlockRichText}
        </_Builtin.RichText>
        <_Builtin.Icon
          className={_utils.cx(
            _styles,
            "cureo-accordion-icon-copy-copy-copy-copy-copy"
          )}
          data-w-id="521d47a2-d9a8-99a9-f2e4-2f1345511f45"
          widget={{
            type: "icon",
            icon: "dropdown-toggle",
          }}
        />
      </_Builtin.DropdownToggle>
      <_Builtin.DropdownList
        className={_utils.cx(_styles, "dropdown-list-3")}
        tag="nav"
      >
        <_Builtin.Block className={_utils.cx(_styles, "popouttext")} tag="div">
          <_Builtin.RichText
            className={_utils.cx(_styles, "rich-text-block-10")}
            tag="div"
            slot=""
          >
            {richTextBlock10RichText}
          </_Builtin.RichText>
        </_Builtin.Block>
      </_Builtin.DropdownList>
    </_Component>
  );
}
