"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ContactFormAlternative.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-99":{"id":"e-99","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825a0bef-6076-6687-13f8-3237c3a160eb","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825a0bef-6076-6687-13f8-3237c3a160eb","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":200,"direction":"RIGHT","effectIn":true},"createdOn":1710494217342},"e-101":{"id":"e-101","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-102"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"825a0bef-6076-6687-13f8-3237c3a160d6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"825a0bef-6076-6687-13f8-3237c3a160d6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1710494235688}},"actionLists":{"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ContactFormAlternative({
  as: _Component = _Builtin.Section,
  image67Image = "https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65c3800f644a09f7481ab555_ST_Katharina%20(1).jpg",
  cureoHeading2Text = "Dr. rer. medic. Katarina Buchmann",
  cureoHeading3Text = "Reimbursement & Medical Affairs",
  cureoParagraph1Text = '"Feel free to leave your contact details, so we can present to you our individual care solutions from which both patients and cost bearers can benefit."',
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "full_width_section",
        "align-center",
        "justify-middle",
        "_75vh",
        "green"
      )}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Heading
        className={_utils.cx(
          _styles,
          "cureo-heading-1",
          "align-middle",
          "white",
          "margin-t"
        )}
        tag="h1"
      >
        {"Contact us!"}
      </_Builtin.Heading>
      <_Builtin.Row
        className={_utils.cx(_styles, "columns")}
        tag="div"
        columns={{
          main: "6|6",
          medium: "",
          small: "",
          tiny: "",
        }}
      >
        <_Builtin.Column className={_utils.cx(_styles, "column")} tag="div">
          <_Builtin.FormWrapper>
            <_Builtin.FormForm
              className={_utils.cx(_styles, "form-3")}
              data-w-id="825a0bef-6076-6687-13f8-3237c3a160d6"
              name="email-form"
              data-name="Email Form"
              method="get"
              id="email-form"
            >
              <_Builtin.FormBlockLabel
                className={_utils.cx(_styles, "cureo-paragraph-2", "white")}
                htmlFor="name-2"
              >
                {"Name"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                autoFocus={false}
                maxLength={256}
                name="name-2"
                data-name="Name 2"
                type="text"
                disabled={false}
                required={false}
                id="name-2"
              />
              <_Builtin.FormBlockLabel
                className={_utils.cx(_styles, "cureo-paragraph-2", "white")}
                htmlFor="email-4"
              >
                {"Company name"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                autoFocus={false}
                maxLength={256}
                name="email-4"
                data-name="Email 4"
                type="email"
                disabled={false}
                required={true}
                id="email-4"
              />
              <_Builtin.FormBlockLabel
                className={_utils.cx(_styles, "cureo-paragraph-2", "white")}
                htmlFor="email-4"
              >
                {"Phone"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                autoFocus={false}
                maxLength={256}
                name="email-3"
                data-name="Email 3"
                type="email"
                disabled={false}
                required={true}
                id="email-3"
              />
              <_Builtin.FormBlockLabel
                className={_utils.cx(_styles, "cureo-paragraph-2", "white")}
                htmlFor="email-4"
              >
                {"Message"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                autoFocus={false}
                maxLength={256}
                name="email-2"
                data-name="Email 2"
                type="email"
                disabled={false}
                required={true}
                id="email-2"
              />
              <_Builtin.FormButton
                className={_utils.cx(_styles, "button", "cureo_mainbutton")}
                type="submit"
                value="Submit"
                data-wait="Please wait..."
              />
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage>
              <_Builtin.Block tag="div">
                {"Thank you! Your submission has been received!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage>
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
        </_Builtin.Column>
        <_Builtin.Column className={_utils.cx(_styles, "column-2")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-158")}
            data-w-id="825a0bef-6076-6687-13f8-3237c3a160eb"
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-67")}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src={image67Image}
            />
            <_Builtin.Heading
              className={_utils.cx(_styles, "cureo-heading-2", "white")}
              tag="h1"
            >
              {cureoHeading2Text}
            </_Builtin.Heading>
            <_Builtin.Heading
              className={_utils.cx(_styles, "cureo-heading-3", "white")}
              tag="h1"
            >
              {cureoHeading3Text}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "cureo-paragraph-1",
                "white",
                "align-center"
              )}
            >
              {cureoParagraph1Text}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Column>
      </_Builtin.Row>
    </_Component>
  );
}
