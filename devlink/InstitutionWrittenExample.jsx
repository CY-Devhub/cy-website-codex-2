"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InstitutionWrittenExample.module.css";

export function InstitutionWrittenExample({
  as: _Component = _Builtin.Block,
  paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  image110Image = "https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65faa02a2c784424ecebd99d_smile1.jpg",
  cureoHeading1Text = "Neuropraxis Düsseldorf",

  cureoButton1Link = {
    href: "#",
  },
}) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-223")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image-110")}
        width="291"
        height="auto"
        loading="lazy"
        alt=""
        src={image110Image}
      />
      <_Builtin.Block className={_utils.cx(_styles, "div-block-224")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "cureo-heading-2")}
          tag="h3"
        >
          {cureoHeading1Text}
        </_Builtin.Heading>
        <_Builtin.Paragraph className={_utils.cx(_styles, "cureo-paragraph-1")}>
          {paragraphText}
        </_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-229")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "cureo-button-1")}
            button={true}
            block=""
            options={cureoButton1Link}
          >
            {"Watch video"}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
