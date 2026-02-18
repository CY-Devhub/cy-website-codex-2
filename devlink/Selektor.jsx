"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Selektor.module.css";

export function Selektor({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "div-block-257")} tag="div">
      <_Builtin.Heading
        className={_utils.cx(_styles, "cureo-heading-0", "align-center")}
        tag="h3"
      >
        {"Find out which CUREO"}
        <_Builtin.Span className={_utils.cx(_styles, "text-span-5")}>
          <_Builtin.Superscript>{"®"}</_Builtin.Superscript>
        </_Builtin.Span>
        {" solution fits best for you:"}
      </_Builtin.Heading>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "code-embed-2")}
        value="%3Ciframe%20id%3D%22responsive-iframe%22%20src%3D%22https%3A%2F%2Fdigitizer.app%2Fselector%2F%23!%2FE3C49D70-EE3A-11EC-9BCC-29223D06BF60%2Fde_DE%2Fquestionnaire%2F0%22%20width%3D%22100%25%22%20height%3D%221000px%22%20name%3D%22cureo%20selector%22%20title%3D%22CUREO%20Selector%22%3E%0A%3C%2Fiframe%3E"
      />
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "cureo-paragraph-3", "align-center")}
      >
        {
          "Please accept the cookies at the bottom left to see the selection form. "
        }
      </_Builtin.Paragraph>
    </_Component>
  );
}
