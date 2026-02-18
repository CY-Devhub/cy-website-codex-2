"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./TherapieZieleEvidenzen.module.css";

export function TherapieZieleEvidenzen({
  as: _Component = _Builtin.TabsWrapper,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "tabs")}
      current="Tab 1"
      easing="ease"
      fadeIn={300}
      fadeOut={100}
    >
      <_Builtin.TabsMenu
        className={_utils.cx(_styles, "", "tabs-menu")}
        tag="div"
      >
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "tabwindow")}
          data-w-tab="Tab 1"
          block="inline"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tabs-heading")}
            tag="div"
          >
            {"Indications"}
          </_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "tabwindow")}
          data-w-tab="Tab 2"
          block="inline"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tabs-heading")}
            tag="div"
          >
            {"Areas of Application"}
          </_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "tabwindow")}
          data-w-tab="Tab 3"
          block="inline"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tabs-heading")}
            tag="div"
          >
            {"Therapy Goals"}
            <br />
            {""}
          </_Builtin.Block>
        </_Builtin.TabsLink>
        <_Builtin.TabsLink
          className={_utils.cx(_styles, "tabwindow")}
          data-w-tab="Tab 4"
          block="inline"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "tabs-heading")}
            tag="div"
          >
            {"Evidenzen"}
          </_Builtin.Block>
        </_Builtin.TabsLink>
      </_Builtin.TabsMenu>
      <_Builtin.TabsContent
        className={_utils.cx(_styles, "tabs-content")}
        tag="div"
      >
        <_Builtin.TabsPane
          className={_utils.cx(_styles, "tab-pane-tab-1")}
          tag="div"
          data-w-tab="Tab 1"
        >
          <_Builtin.RichText
            className={_utils.cx(_styles, "paragraph-1")}
            tag="div"
            slot=""
          >
            <_Builtin.Paragraph>
              <_Builtin.Strong>
                {
                  "The therapy was developed for use on patients for the following indications, among others:"
                }
              </_Builtin.Strong>
            </_Builtin.Paragraph>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {
                  "Stroke of ischaemic or haemorrhagic origin with residual hemiplegia/paresis"
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"(Infantile) cerebral palsy"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {
                  "Spinal cord injuries (commotio, contusio, compressio spinalis)"
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Craniocerebral trauma"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Musculoskeletal diseases"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Neuropathy (Guillain-Barré syndrome, PNP)"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {
                  "Neurodegenerative diseases (e.g. multiple sclerosis, Parkinson's disease, ALS)"
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Ataxia of the upper limbs and trunk"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Paragraph>{"‍"}</_Builtin.Paragraph>
          </_Builtin.RichText>
        </_Builtin.TabsPane>
        <_Builtin.TabsPane
          className={_utils.cx(_styles, "tab-pane-tab-2")}
          tag="div"
          data-w-tab="Tab 2"
        >
          <_Builtin.RichText
            className={_utils.cx(_styles, "paragraph-1")}
            tag="div"
            slot=""
          >
            <_Builtin.Paragraph>
              <_Builtin.Strong>{"CUREO"}</_Builtin.Strong>
              {
                "® addresses cognitive, sensorimotor and perceptual impairments:"
              }
            </_Builtin.Paragraph>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Motor deficits of the upper extremities"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Sensory deficits Proprioception disorders"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Neglect"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Apraxias"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Attention disorders"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Impaired memory, e.g. visual, auditory and language memory"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Acute pain"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Paragraph>
              <_Builtin.Strong>{"CUREO"}</_Builtin.Strong>
              {
                "® is particularly suitable for the improvement and aftercare of the following conditions:"
              }
            </_Builtin.Paragraph>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Neuro-surgical interventions"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Orthopedic surgery"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {
                  "Ortho-surgical interventions such as TEP glenohumeral and art. cubiti, as well as amputations"
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Paragraph>
              <_Builtin.Strong>{"CUREO"}</_Builtin.Strong>
              {"® addresses the upper body and its functions:"}
            </_Builtin.Paragraph>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {
                  "Upper extremities including shoulder girdle, upper arm, forearm and hand"
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Trunk, body straightening and postural control"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Head movements and gaze control"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Paragraph>
              <_Builtin.Strong>{"CUREO"}</_Builtin.Strong>
              {
                "® has a positive effect on complications in relation to the indications listed:"
              }
            </_Builtin.Paragraph>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Post-traumatic conditions"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Depressions"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Hospitalism"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Stress regulation"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Anxiety, pain and depression"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Paragraph>{"‍"}</_Builtin.Paragraph>
          </_Builtin.RichText>
        </_Builtin.TabsPane>
        <_Builtin.TabsPane tag="div" data-w-tab="Tab 3">
          <_Builtin.RichText
            className={_utils.cx(_styles, "paragraph-1")}
            tag="div"
            slot=""
          >
            <_Builtin.Paragraph>
              {
                "High frequency therapy with multimodal feedback has a positive effect on the neural system and helps to rebuild and improve sensory, motor and cognitive abilities such as spatial orientation and body perception. This can also lead to pain reduction. Improved motivation and quickly visible, gradual training successes, as well as active relaxation tools, reinforce the success of the therapy."
              }
            </_Builtin.Paragraph>
            <_Builtin.Paragraph>
              {"Improved cognitive skills"}
            </_Builtin.Paragraph>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Spatial perception e.g. arrangement of objects"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Perception of shape and colour"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Attention and perception"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Memory and learning"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Planning and executive functions"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {
                  "Memory (e.g. working and word-finding memory) and orientation"
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Motivation and concentration"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Paragraph>
              {"Improved motor function of the upper extremities and trunk"}
            </_Builtin.Paragraph>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Range of motion (RoM), quantity and quality of movement"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Coordination"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Proprioception"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Postural control in sitting and fall-protected standing"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Reach of the upper extremities"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {
                  "Mobilisation of the patient, self-initiated movements and muscle development"
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {
                  "Hand and finger functions (basic grasping functions and hand opening)"
                }
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Finger movement"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Fine motor skills of the hand e.g. tweezer grip, power grip"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Paragraph>{"General improvements"}</_Builtin.Paragraph>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Body awareness and self-regulation"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Stress reduction"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Pain reduction"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Mood enhancement"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Anxiety regulation"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Tone regulation"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>
                {"Therapy motivation (compliance and adherence)"}
              </_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Reduction of depression"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.List tag="ul" unstyled={false}>
              <_Builtin.ListItem>{"Neuroregulation"}</_Builtin.ListItem>
            </_Builtin.List>
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-6")}>
              {"‍"}
            </_Builtin.Paragraph>
          </_Builtin.RichText>
        </_Builtin.TabsPane>
        <_Builtin.TabsPane tag="div" data-w-tab="Tab 4">
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-1")}>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
            }
          </_Builtin.Paragraph>
        </_Builtin.TabsPane>
      </_Builtin.TabsContent>
    </_Component>
  );
}
