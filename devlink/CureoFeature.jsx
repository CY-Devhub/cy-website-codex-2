"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CureoFeature.module.css";

export function CureoFeature({
  as: _Component = _Builtin.Block,
  text = "This is the default text value",
  advantagesText = "Personalentlastung",

  link = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-20")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image-9")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/655232c93e31e0d5e58e1b64_PersonICON.jpg"
      />
      <_Builtin.Heading className={_utils.cx(_styles, "heading-6")} tag="h1">
        {advantagesText}
      </_Builtin.Heading>
      <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-white")}>
        {
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "
        }
        <br />
        <br />
        {
          "Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. "
        }
        <br />
        <br />
        {
          "Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
        }
      </_Builtin.Paragraph>
    </_Component>
  );
}
