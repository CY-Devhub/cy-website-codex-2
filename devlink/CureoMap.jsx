"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CureoMap.module.css";

export function CureoMap({
  as: _Component = _Builtin.Block,
  cureoHeading1Text = (
    <>
      {"The "}
      {"O"}
      {" community is constantly growing"}
    </>
  ),
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "div-block-185", "gap-10")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "div-block-186")} tag="div">
        <_Builtin.Heading
          className={_utils.cx(_styles, "cureo-heading-1", "align-center")}
          tag="h1"
        >
          {cureoHeading1Text}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-238")} tag="div">
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "html_maps")}
          value="%3Cdiv%20class%3D%22responsive-iframe%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22map-overlay%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%3Ciframe%20src%3D%22https%3A%2F%2Fwww.google.com%2Fmaps%2Fd%2Fu%2F1%2Fembed%3Fmid%3D1Pp9dqls0w6EhcUDP8nXjIHmoD50te1E%26ehbc%3D2E312F%26noprof%3D1%22%20width%3D%22100%25%22%20height%3D%22650%22%20frameborder%3D%220%22%20scrolling%3D%22no%22%3E%3C%2Fiframe%3E%0A%3C%2Fdiv%3E%0A%0A%0A.responsive-iframe%20%7B%0A%20%20%20%20max-width%3A%201600px%3B%0A%20%20%20%20min-width%3A%20990px%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20margin%3A%20auto%3B%20%2F*%20Center%20align%20the%20iframe%20*%2F%0A%20%20%20%20position%3A%20relative%3B%20%2F*%20Needed%20to%20position%20the%20overlay%20*%2F%0A%7D%0A%0Aiframe%20%7B%0A%20%20%20%20width%3A%2090%25%20!important%3B%0A%20%20%20%20height%3A%20650px%3B%0A%20%20%20%20border%3A%200%3B%0A%7D%0A%0A.map-overlay%20%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%200%3B%0A%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20left%3A%200%3B%0A%20%20%20%20right%3A%200%3B%0A%20%20%20%20background%3A%20transparent%3B%0A%7D%0A%3Cscript%20src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F3.5.1%2Fjquery.min.js%22%3E%3C%2Fscript%3E%0A%0A%0A%3Cscript%3E%0A%24(document).ready(function()%20%7B%0A%20%20%20%20%2F%2F%20Function%20to%20enable%20map%20interaction%0A%20%20%20%20function%20enableMapInteraction()%20%7B%0A%20%20%20%20%20%20%20%20%24('.map-overlay').css('pointer-events'%2C%20'none')%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20Function%20to%20disable%20map%20interaction%0A%20%20%20%20function%20disableMapInteraction()%20%7B%0A%20%20%20%20%20%20%20%20%24('.map-overlay').css('pointer-events'%2C%20'auto')%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20%2F%2F%20By%20default%2C%20the%20map%20interaction%20is%20disabled%0A%20%20%20%20disableMapInteraction()%3B%0A%0A%20%20%20%20%2F%2F%20Listen%20for%20keydown%20and%20keyup%20events%0A%20%20%20%20%24(document).keydown(function(event)%20%7B%0A%20%20%20%20%20%20%20%20if%20(event.ctrlKey%20%7C%7C%20event.metaKey)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20enableMapInteraction()%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%24(document).keyup(function(event)%20%7B%0A%20%20%20%20%20%20%20%20%2F%2F%20Check%20for%20the%20specific%20keys%20in%20case%20other%20keys%20are%20released%0A%20%20%20%20%20%20%20%20if%20(!event.ctrlKey%20%26%26%20!event.metaKey)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20disableMapInteraction()%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%2F%2F%20Optional%3A%20Consider%20re-enabling%20the%20overlay%20when%20the%20mouse%20leaves%20the%20iframe%20area%0A%20%20%20%20%2F%2F%20This%20ensures%20the%20overlay%20is%20active%20again%20after%20interaction%2C%20requiring%20Control%2FCommand%20to%20be%20pressed%20again%20for%20further%20interactions.%0A%20%20%20%20%24('iframe').mouseleave(function()%20%7B%0A%20%20%20%20%20%20%20%20disableMapInteraction()%3B%0A%20%20%20%20%7D)%3B%0A%7D)%3B%0A%0A%3C%2Fscript%3E"
        />
      </_Builtin.Block>
    </_Component>
  );
}
