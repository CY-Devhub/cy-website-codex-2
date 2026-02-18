"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CureoInDerPraxis.module.css";

export function CureoInDerPraxis({
  as: _Component = _Builtin.BlockContainer,
  heading4Text3 = "Wie die Neuropraxis Düsseldorf CUREO einsetzt:",
  image8Id,
  image8Image = "https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/654b5150a0a7c558d16bd6cd_DSC04602_komp.jpg",
  image8Image2 = "https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/654b63d0495bf02c0ceffde1_Wiesbaden_Cropped.jpg",
  paragraphText = (
    <>
      {"eErgopraxis test"}
      <br />
      {"‍"}
    </>
  ),
  paragraphText2 = (
    <>
      {"teeest"}
      <br />
      <br />
      {"‍"}
    </>
  ),
  richTextBlockRichText = "",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "container-4")}
      grid={{
        type: "container",
      }}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "div-block-19")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "image-8")}
          loading="lazy"
          width="auto"
          height="auto"
          Image={image8Id}
          id={image8Id}
          alt=""
          src={image8Image2}
        />
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-18")} tag="div">
        <_Builtin.Heading className={_utils.cx(_styles, "heading-4")} tag="h1">
          {heading4Text3}
        </_Builtin.Heading>
        <_Builtin.Paragraph>{paragraphText2}</_Builtin.Paragraph>
        <_Builtin.Block
          className={_utils.cx(_styles, "div-block-24")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "button-2")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Button Text"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block tag="div">{heading4Text3}</_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
