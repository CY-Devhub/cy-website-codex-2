"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CureoRefSlideImageHeadTextButton.module.css";

export function CureoRefSlideImageHeadTextButton({
  as: _Component = _Builtin.Block,
  cureoHeading1Text = "Heading",
  cureoButton1Text = "Button Text",
  cureoButton1Text2 = "Button Text",
  image35CopyImage = "",
  cureoParagraph1RichText = "",

  cureoButton1Link = {
    href: "#",
    target: "_blank",
  },
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "refslide-copy", "vertical")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "refimageblock")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image-35-copy")}
          dyn={{
            bind: {},
          }}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src={image35CopyImage}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "reftextblock")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "cureo-heading-1", "align-middle")}
          dyn={{
            bind: {},
          }}
          tag="h3"
        >
          {cureoHeading1Text}
        </_Builtin.Heading>
        <_Builtin.RichText
          className={_utils.cx(_styles, "cureo-paragraph-1")}
          tag="div"
          slot=""
        >
          {cureoParagraph1RichText}
        </_Builtin.RichText>
        <_Builtin.Block
          className={_utils.cx(_styles, "refbuttonblock")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "cureo-button-1")}
            button={true}
            dyn={{
              bind: {},
            }}
            block=""
            options={cureoButton1Link}
          >
            {cureoButton1Text2}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
