"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./GeneralContactSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-95":{"id":"e-95","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-96"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"4e467a3d-2692-e6a0-dee6-d59114632642","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"4e467a3d-2692-e6a0-dee6-d59114632642","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":10,"scrollOffsetUnit":"%","delay":100,"direction":"BOTTOM","effectIn":true},"createdOn":1710487577995}},"actionLists":{"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function GeneralContactSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "contactsection",
        "full-width",
        "max-h-220"
      )}
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
          className={_utils.cx(_styles, "cureo-heading-0", "white")}
          tag="h1"
        >
          {"Get in touch with us:"}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "contactstepsdiv")}
          tag="div"
        />
        <_Builtin.Block className={_utils.cx(_styles, "contactform")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-195")}
            data-w-id="4e467a3d-2692-e6a0-dee6-d59114632642"
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "cureo-heading-2", "white")}
              tag="h1"
            >
              {"Are you a patient?"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "cureo-paragraph-1",
                "white",
                "align-center"
              )}
            >
              <_Builtin.Strong>{"CURE"}</_Builtin.Strong>
              {"O is currently not available for private"}
              <br />
              {"purchases. Check out our page dedicated to "}
              <br />
              {"patients to learn more: "}
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "button",
                "cureo_mainbutton",
                "margin-none"
              )}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"For patients"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-196")}
            tag="div"
          >
            <_Builtin.FormWrapper className={_utils.cx(_styles, "form-block")}>
              <_Builtin.FormForm
                className={_utils.cx(_styles, "form")}
                name="wf-form-General-Contact"
                data-name="General Contact"
                method="get"
                id="wf-form-General-Contact"
              >
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="First-Name-2"
                >
                  {"First name*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="First-Name-2"
                  maxLength={256}
                  data-name="First Name 2"
                  disabled={false}
                  type="text"
                  required={true}
                  autoFocus={false}
                  id="First-Name-2"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="name"
                >
                  {"Last name*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="Last-name-2"
                  maxLength={256}
                  data-name="Last Name 2"
                  disabled={false}
                  type="text"
                  required={true}
                  autoFocus={false}
                  id="Last-name-2"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Phone-4"
                >
                  {"Phone"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="Phone-4"
                  maxLength={256}
                  data-name="Phone 4"
                  disabled={false}
                  type="tel"
                  required={false}
                  autoFocus={false}
                  id="Phone-4"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Mail-2"
                >
                  {"Email address*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="Mail-2"
                  maxLength={256}
                  data-name="Mail 2"
                  disabled={false}
                  type="email"
                  required={true}
                  autoFocus={false}
                  id="Mail-2"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Institution-2"
                >
                  {"Name of your institution*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "text-field-2")}
                  name="Institution-2"
                  maxLength={256}
                  data-name="Institution 2"
                  disabled={false}
                  type="text"
                  required={true}
                  autoFocus={false}
                  id="Institution-2"
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Type-of-institution-2"
                >
                  {"Type of institution*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormSelect
                  name="Type-of-institution-2"
                  data-name="Type Of Institution 2"
                  required={true}
                  multiple={false}
                  id="Type-of-institution-2"
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
                    {
                      t: "Media ",
                      v: "Another option",
                    },
                  ]}
                />
                <_Builtin.FormBlockLabel
                  className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  htmlFor="Mesage"
                >
                  {"Please provide some information what interests you in "}
                  <_Builtin.Strong>{"CURE"}</_Builtin.Strong>
                  {"O for your institution*"}
                </_Builtin.FormBlockLabel>
                <_Builtin.FormTextarea
                  className={_utils.cx(_styles, "textarea")}
                  name="Mesage"
                  maxLength={5000}
                  data-name="Mesage"
                  required={true}
                  autoFocus={false}
                  id="Mesage"
                />
                <_Builtin.FormCheckboxWrapper
                  className={_utils.cx(_styles, "checkbox-field")}
                >
                  <_Builtin.FormCheckboxInput
                    type="checkbox"
                    name="Receive-newsletter-2"
                    data-name="Receive Newsletter 2"
                    required={false}
                    checked={false}
                    id="Receive-newsletter-2"
                    form={{
                      type: "checkbox-input",
                      name: "Receive Newsletter 2",
                    }}
                    inputType="default"
                  />
                  <_Builtin.FormInlineLabel
                    className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
                  >
                    {"Receive occasional updates via newsletter"}
                  </_Builtin.FormInlineLabel>
                </_Builtin.FormCheckboxWrapper>
                <_Builtin.FormReCaptcha
                  className={_utils.cx(_styles, "recaptcha")}
                  siteKey={process.env.DEVLINK_ENV_GOOGLE_RECAPTCHA_API_KEY}
                />
                <_Builtin.FormButton
                  className={_utils.cx(
                    _styles,
                    "submit-button",
                    "submitbutton",
                    "action-btn-plc-ord-018-pf",
                    "gtag_report_conversion"
                  )}
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                  id="6Lc-NyIqAAAAAPEmEQjmnezzXVUW8yzqyXcobV0j"
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
        <_Builtin.Paragraph
          className={_utils.cx(_styles, "cureo-paragraph-1", "white")}
        >
          {"*Required fields"}
        </_Builtin.Paragraph>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
