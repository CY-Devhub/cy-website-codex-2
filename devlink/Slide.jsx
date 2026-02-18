"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GalerieBlock } from "./GalerieBlock";
import * as _utils from "./utils";
import _styles from "./Slide.module.css";

export function Slide({
  as: _Component = _Builtin.Block,
  galerieBlockGalerieBlockText = "Erfahren Sie wie CUREO in der Ergotherapie angewandt wird",
  image11Image = "https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/654a12d4c753b8b26e2b0d2c_DSC04227_komprimiert.jpg",
  roundButtonText = "+",
  roundButtonValue = "+",
  roundButtonValue2 = "-",
  roundButtonText2 = "-",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "slidediv", "slideimage")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "slideimg")} tag="div" />
      <_Builtin.YouTubeVideo
        videoId="BPWFQ-FT0b4"
        aspectRatio={0.5617021276595745}
        title="How CUREO (VR Therapy) is successfully integrated into occupational therapy (Praxis Wiesbaden)"
        startAt={0}
        showAllRelatedVideos={false}
        controls={true}
        autoplay={false}
        muted={false}
        privacyMode={true}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "slidetextblock")}
        tag="div"
      >
        <GalerieBlock galerieBlockText={galerieBlockGalerieBlockText} />
        <_Builtin.Link
          className={_utils.cx(_styles, "roundbutton")}
          button={true}
          Text={roundButtonValue}
          block=""
          options={{
            href: "#",
          }}
        >
          {roundButtonText}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
