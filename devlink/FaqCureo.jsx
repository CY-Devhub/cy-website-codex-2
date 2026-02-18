"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FaqCureo.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-600":{"id":"e-600","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-601"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".lynx-accordion-header-4","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"},"targets":[{"selector":".lynx-accordion-header-4","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664677039541},"e-601":{"id":"e-601","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-600"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".lynx-accordion-header-4","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"},"targets":[{"selector":".lynx-accordion-header-4","originalId":"6337874661a7c316956c3354|bdc4f8a9-d222-dc38-9e2e-baa9f536ce74","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1664677039541}},"actionLists":{"a-41":{"id":"a-41","title":"Lynx Accordion - Open 5","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-5","selectorGuids":["c695f3c4-d2b2-c6b7-e55a-aeae00641472"]},"value":"none"}},{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-5","selectorGuids":["c695f3c4-d2b2-c6b7-e55a-aeae00641472"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-41-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-5","selectorGuids":["c695f3c4-d2b2-c6b7-e55a-aeae00641472"]},"value":"block"}}]},{"actionItems":[{"id":"a-41-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-5","selectorGuids":["c695f3c4-d2b2-c6b7-e55a-aeae00641472"]},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-41-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".lynx-icon-arrow-5","selectorGuids":["c695f3c4-d2b2-c6b7-e55a-aeae00641473"]},"zValue":90,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1664677042168},"a-42":{"id":"a-42","title":"Lynx Accordion - Close 5","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-5","selectorGuids":["c695f3c4-d2b2-c6b7-e55a-aeae00641472"]},"heightValue":0,"widthUnit":"px","heightUnit":"px","locked":false}},{"id":"a-42-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".lynx-icon-arrow-5","selectorGuids":["c695f3c4-d2b2-c6b7-e55a-aeae00641473"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-42-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":280,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".lynx-accordion-content-5","selectorGuids":["c695f3c4-d2b2-c6b7-e55a-aeae00641472"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1664677042168}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FaqCureo({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "div-block-268")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "lynx-content-5")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "lynx-block-center-5-copy")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "cureo-heading-2")}
            tag="div"
          >
            {"FAQ"}
          </_Builtin.Block>
          <_Builtin.Heading
            className={_utils.cx(_styles, "cureo-heading-0")}
            tag="h1"
          >
            {"Find out more about CUREO"}
            <_Builtin.Span className={_utils.cx(_styles, "text-span-4")} />
          </_Builtin.Heading>
          <_Builtin.Paragraph
            className={_utils.cx(_styles, "cureo-paragraph-1")}
          >
            {
              "Answers to the most frequently asked questions about our therapy system."
            }
          </_Builtin.Paragraph>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "lynx-block-faq-5")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h2"
              >
                <_Builtin.Strong>{"What is CUREO?"}</_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-top"
                )}
              >
                {"CUREO"}
                {
                  " is a therapy software for rehabilitation with more than 50 trainings in 7 modules. It utilizes Virtual Reality and gamification to increase patient motivation and therapy adherence and it’s already implemented in far more than 150 clinical and ambulantory institutions (used for physiotherapy, occupational therapy, and neuropsychology) for patients with sensorimotor, cognitive, and perceptual impairments."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h2"
              >
                <_Builtin.Strong>
                  {"What is virtual reality therapy (VR therapy)?"}
                </_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {
                  "Virtual reality (VR) is a familiar term, especially in the entertainment industry, and is widely being used for games. Where previously the game environment was only displayed on a monitor, users are now immersed in and surrounded by virtual worlds via VR glasses. But VR is no longer just for entertainment.There are also promising possibilities in the medical, especially therapeutic field. With our VR therapy system CUREO"
                }
                {
                  ", we are utilizing the potential of VR technology and offer patients a new type of therapy."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h3"
              >
                <_Builtin.Strong>
                  {"What is CUREO VR therapy used for?"}
                </_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {"CUREO"}
                {
                  " addresses sensorimotor, cognitive, and perceptual impairments. The high frequency, immersive therapy with multimodal feedback has a positive effect on neuronal processes and contributes to the recovery of motor and cognitive skills as well as the improvement of sensory perception, which leads to improved everyday ability. Increased motivation through gamification, quickly visible training progress, and active relaxation tools contribute to the success of the therapy."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h3"
              >
                <_Builtin.Strong>
                  {"What are the advantages of CUREO"}
                </_Builtin.Strong>
                <_Builtin.Strong>{" VR therapy?"}</_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {" CUREO"}
                {" is efficient, effective, and versatile. "}
                <br />
                <br />
                {"Efficient:"}
                <br />
                {"• Group therapy and parallel treatment for up to 6 patients"}
                <br />
                {
                  "• Utilize the training plan to create a therapy session lasting up to 60 minutes and let it run semi-autonomously"
                }
                <br />
                {
                  "• Quick set-up times thanks to a rapid system start and quick calibration "
                }
                <br />
                {
                  "• Utilizing innovative approaches will enhance your attractiveness as an employer "
                }
                <br />
                {"• Due it it's small and light form factor, CUREO"}
                <_Builtin.Superscript>{"®"}</_Builtin.Superscript>
                {" can be used anywhere, even in bedside therapy"}
                <br />
                <br />
                {"Effective: "}
                <br />
                {
                  "• 84% of study participants show clinically relevant improvements in arm functionality "
                }
                <br />
                {"Increase in treatment adherence:"}
                <br />
                {" • 95% of CUREO"}
                <_Builtin.Superscript>{"®"}</_Builtin.Superscript>
                {" patients are enthusiastic"}
                <br />
                {" • 97% of patients would like to continue with CUREO"}
                <_Builtin.Superscript>{"®"}</_Builtin.Superscript>
                {" therapy "}
                <br />
                <br />
                {"Versatile: "}
                <br />
                {
                  "• 50+ training sessions in 7 modules for broad use in physiotherapy, occupational therapy, and   neuropsychology "
                }
                <br />
                {
                  "• Intersectoral usage and location independence: From acute & early rehabilitation to follow-up rehabilitation"
                }
                <br />
                {
                  "• Regular updates with new, improved, and expanded training sessions and features"
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h3"
              >
                <_Builtin.Strong>
                  {"Which patients can be treated with CUREO"}
                  {" VR therapy?"}
                </_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {"CUREO"}
                {
                  " was developed for the treatment of the following indications, amongst others: "
                }
                <br />
                {"• Stroke"}
                <br />
                {
                  "• Neurodegenerative diseases such as multiple sclerosis, Parkinson‘s disease, ALS "
                }
                <br />
                {"• (Infantile) cerebral palsy (CP) "}
                <br />
                {"• Injuries to the spinal cord "}
                <br />
                {"• Craniocerebral trauma "}
                <br />
                {"• Diseases of the musculoskeletal system "}
                <br />
                {"• Pain"}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h4"
              >
                <_Builtin.Strong>
                  {"What do recent studies say about VR therapy?"}
                </_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {
                  "In the field of therapy research, virtual reality (VR) has developed into a steadily growing research focus over the last 10 years. With regard to VR technology development, studies emphasize the advantages for neurological rehabilitation as well as the remarkable practicability and variety of applications of virtual tools for successful therapy. Motor training is also of specific interest to many researchers, as VR therapy is a particularly resource-efficient option simply due to the accessibility of the devices. Muscle strength and tone are improved through neuroplastic changes and increased motivation, while pain is significantly reduced through distraction and neuroregulation. The possible applications are therefore diverse and particularly exciting for rehabilitation. Find out "
                }
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"more"}
                </_Builtin.Link>
                {"."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2", "align-left")}
                tag="h5"
              >
                <_Builtin.Strong>
                  {"How does CUREO"}
                  {
                    " VR therapy support inpatient clinics with rehabilitation? "
                  }
                </_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {"CUREO"}
                {
                  " was developed with clinical partners and continuously refined based on their feedback. As a result, it meets the high clinical standards and requirements. CUREO"
                }
                {
                  " is already the most widely used VR therapy system for sensorimotor, cognitive and perceptive therapy in German clinics. In 2023 alone, it is estimated that over 200,000 therapy sessions were conducted with CUREO"
                }
                {
                  ". One particular advantage is its use throughout all stages of rehabilitation. This allows for low risk therapy starting from the early phase of rehabilitation for immobilized patients inhospital beds, and can be progressively used through to the follow-up care of less impaired patients. CUREO"
                }
                {
                  " is robust, mobile, and easy to disinfect – just perfect for everyday clinical use. Find out "
                }
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"more"}
                </_Builtin.Link>
                {"."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2", "align-left")}
                tag="h5"
              >
                <_Builtin.Strong>
                  {"How does CUREO"}
                  {
                    " VR therapy support outpatient practices with rehabilitation?"
                  }
                </_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {
                  "Outpatient practices usually have a high volume of patients and a high therapy cycle. Frequent short-term absences, long-term vacancies or shortage of staff may lead to high pressure and/or a risk of profit loss. Thanks to CUREO"
                }
                {
                  ", more therapy sessions per day and parallel documentation can be performed. This takes the pressure off your staff and enables a higher therapy frequency. With modern methods, you not only attract patients, but also new staff, because CUREO"
                }
                {
                  " makes therapy creative, motivating, and versatile for both patients and your therapists. Find out "
                }
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"more"}
                </_Builtin.Link>
                {"."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2", "align-left")}
                tag="h5"
              >
                <_Builtin.Strong>
                  {"I work in rehabilitation - How can I get CUREO"}
                  {"? "}
                </_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {"CUREO"}
                {"and CUREO"}
                {
                  " GROUP are based on the simple Software-as-a-Service model. Our staff will gladly support you in finding the best solution for your therapeutic facility. Simply arrange an appointment via our "
                }
                <_Builtin.Link
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"booking portal"}
                </_Builtin.Link>
                {"."}
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2")}
                tag="h5"
              >
                <_Builtin.Strong>
                  {"CUREO"}
                  {" and CUREO"}
                </_Builtin.Strong>
                {" GROUP - "}
                <_Builtin.Strong>{"What is the difference?"}</_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {"CUREO"}
                {
                  " was developed for individual therapy in practices and clinics, to fully focus on the individual needs of each single patient. CUREO"
                }
                {
                  " GROUP can be used in parallel treatment and/or group therapy to simultaneously treat up to 6 patients at the same time or to save time by preparing necessary tasks such as documentations. The training plan feature allows therapists to create a therapy sequence which lasts up to 60 minutes, and let it run autonomously."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "lynx-accordion-item-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-header-4")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "cureo-heading-2", "align-left")}
                tag="h6"
              >
                <_Builtin.Strong>
                  {
                    "Is virtual reality therapy suitable for elderly patients or children?"
                  }
                </_Builtin.Strong>
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "lynx-icon-arrow-5")}
                tag="div"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "lynx-accordion-content-5")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-1",
                  "margin-bottom",
                  "align-left"
                )}
              >
                {"Yes, many elderly as well as young patients use CUREO"}
                {
                  " successfully and are greatly motivated by it. From a therapeutic/medical point of view there are no restrictions regarding age, however the system is recommended from the age of 12. The CUREO"
                }
                {" therapy itself does not require any German or "}
                <br />
                {
                  "German or English, but the patient must be able to understand simple instructions from the therapist. "
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
