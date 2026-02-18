"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { ConteactFormProcedure } from "./ConteactFormProcedure";
import * as _utils from "./utils";
import _styles from "./ContactSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-83":{"id":"e-83","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-84"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e10c82ba-cf24-b547-ad15-f59b243eca7c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e10c82ba-cf24-b547-ad15-f59b243eca7c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":5,"scrollOffsetUnit":"%","delay":150,"direction":"BOTTOM","effectIn":true},"createdOn":1710422391423}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ContactSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "contactsection")}
      grid={{
        type: "section",
      }}
      tag="section"
      id="ContactSection"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "contactsectioncontent")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "cureo-heading-1",
            "align-middle",
            "white",
            "lowerspace",
            "margin-bottom"
          )}
          tag="h3"
        >
          {"Interested in using CUREO"}
          <_Builtin.Span className={_utils.cx(_styles, "text-span-5")}>
            <_Builtin.Superscript>{"®"}</_Builtin.Superscript>
          </_Builtin.Span>
          {" in your Institution?"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-178")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "contactstepsdiv")}
            tag="div"
          >
            <ConteactFormProcedure paragraphText="Fill out the contact form and tell us about your institution" />
            <ConteactFormProcedure
              heading3Text="2"
              paragraphText="We will schedule a video call and find out how we can support you."
            />
            <ConteactFormProcedure
              heading3Text="3"
              paragraphText="You will receive an individualised offer fitting to your specific needs.   "
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-180")}
              data-w-id="e10c82ba-cf24-b547-ad15-f59b243eca7c"
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-78")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65cf5186a551e215a5e858b8_DSC01698.jpg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-181")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "cureo-heading-2",
                    "white",
                    "margin-none"
                  )}
                  tag="h4"
                >
                  {"Jannik Schmitz"}
                </_Builtin.Heading>
                <_Builtin.Heading
                  className={_utils.cx(
                    _styles,
                    "cureo-heading-3",
                    "white",
                    "margin-none"
                  )}
                  tag="h5"
                >
                  {"Head of Sales"}
                </_Builtin.Heading>
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "white",
                  "align-center"
                )}
              >
                {"\"Let's figure out how CUREO"}
                <_Builtin.Span className={_utils.cx(_styles, "text-span-5")}>
                  <_Builtin.Superscript>{"®"}</_Builtin.Superscript>
                </_Builtin.Span>
                {' can help your institution!"'}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "contactform")}
            tag="div"
          >
            <_Builtin.FormWrapper className={_utils.cx(_styles, "form-block")}>
              <_Builtin.FormForm
                className={_utils.cx(_styles, "form")}
                name="wf-form-Sales-Contact-Form"
                data-name="Sales Contact Form"
                method="get"
                id="wf-form-Sales-Contact-Form"
              >
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="First-Name"
                >
                  {"First Name*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="First-Name"
                  maxLength={256}
                  data-name="First Name"
                  disabled={false}
                  type="text"
                  required={true}
                  autoFocus={false}
                  id="First-Name"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Last-Name"
                >
                  {"Last Name*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="Last-Name"
                  maxLength={256}
                  data-name="Last Name"
                  disabled={false}
                  type="text"
                  required={true}
                  autoFocus={false}
                  id="Last-Name"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Phone-3"
                >
                  {"Phone"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="Phone"
                  maxLength={256}
                  data-name="Phone"
                  disabled={false}
                  type="tel"
                  required={false}
                  autoFocus={false}
                  id="Phone-3"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Mail"
                >
                  {"Email Address*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="Mail"
                  maxLength={256}
                  data-name="Mail"
                  disabled={false}
                  type="email"
                  required={true}
                  autoFocus={false}
                  id="Mail"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Name-of-institution"
                >
                  {"Name of your Institution*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="Name-of-institution"
                  maxLength={256}
                  data-name="Name of institution"
                  disabled={false}
                  type="text"
                  required={true}
                  autoFocus={false}
                  id="Name-of-institution"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Type-of-institution"
                >
                  {"Type of your Institution*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormSelect
                  className={_utils.cx(_styles, "select-field")}
                  name="Type-of-institution"
                  data-name="Type of institution"
                  required={true}
                  multiple={false}
                  id="Type-of-institution"
                  options={[
                    {
                      t: "Select one...",
                      v: "",
                    },
                    {
                      t: "Clinic",
                      v: "Clinic",
                    },
                    {
                      t: "Practise",
                      v: "Practise",
                    },
                    {
                      t: "Other",
                      v: "other",
                    },
                  ]}
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Message"
                >
                  {"(Optional) What in specific interests you in CUREO"}
                  <_Builtin.Span className={_utils.cx(_styles, "text-span-5")}>
                    <_Builtin.Superscript>{"®"}</_Builtin.Superscript>
                  </_Builtin.Span>
                  {"?"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field")}
                  name="Message"
                  maxLength={256}
                  data-name="Message"
                  disabled={false}
                  type="text"
                  required={false}
                  autoFocus={false}
                  id="Message"
                />
                <_Builtin.FormCheckboxWrapper
                  className={_utils.cx(_styles, "checkbox-field")}
                >
                  <_Builtin.FormCheckboxInput
                    type="checkbox"
                    name="Newsletter"
                    data-name="Newsletter"
                    required={false}
                    checked={false}
                    id="Newsletter"
                    form={{
                      type: "checkbox-input",
                      name: "Newsletter",
                    }}
                    inputType="default"
                  />
                  <_Builtin.FormInlineLabel
                    className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  >
                    {"Receive our newsletter for occasional updates"}
                  </_Builtin.FormInlineLabel>
                </_Builtin.FormCheckboxWrapper>
                <_Builtin.FormButton
                  className={_utils.cx(
                    _styles,
                    "submit-button",
                    "submitbutton"
                  )}
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage
                className={_utils.cx(_styles, "success-message")}
              >
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "paragraph-white",
                    "contactform-succes"
                  )}
                  tag="div"
                >
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
