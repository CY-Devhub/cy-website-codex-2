"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ReferenceInstitutionsSector.module.css";

export function ReferenceInstitutionsSector({
  as: _Component = _Builtin.Section,
  cureoHeading1Text = (
    <>
      {"Partners of "}
      {"OSITY"}
    </>
  ),
}) {
  return (
    <_Component
      className={_utils.cx(
        _styles,
        "reference-institutionsection",
        "_1000pxsection",
        "references",
        "_100vh",
        "height-min-20"
      )}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "cureo-heading-1", "align-middle")}
        tag="h1"
      >
        {cureoHeading1Text}
      </_Builtin.Heading>
      <_Builtin.Block className={_utils.cx(_styles, "div-block-199")} tag="div">
        <_Builtin.NotSupported _atom="DynamoWrapper" />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "cureo-references-logos-div")}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image-40")}
          id={_utils.cx(
            _styles,
            "w-node-_27297dad-8f54-ccfb-e39f-993fed142f54-ed142f40"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65659a4702c9a3052f0e38b8_UKB.png"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "image-40")}
          id={_utils.cx(
            _styles,
            "w-node-_27297dad-8f54-ccfb-e39f-993fed142f55-ed142f40"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65659a39bfe253b2834fd5a5_Scho%CC%88n-Klinik.png"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "image-40")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65659a3dbfe253b2834fd8fd_Wicker-Logo-Kompakt.svg"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "image-40")}
          id={_utils.cx(
            _styles,
            "w-node-_27297dad-8f54-ccfb-e39f-993fed142f57-ed142f40"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65659a4654a71e2696d800fe_Fizioterapije_Lubljana.png"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "image-40")}
          id={_utils.cx(
            _styles,
            "w-node-_27297dad-8f54-ccfb-e39f-993fed142f58-ed142f40"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65659a4702c9a3052f0e38b8_UKB.png"
        />
        <_Builtin.Image
          className={_utils.cx(_styles, "image-40")}
          id={_utils.cx(
            _styles,
            "w-node-_27297dad-8f54-ccfb-e39f-993fed142f59-ed142f40"
          )}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65659a4702c9a3052f0e38b8_UKB.png"
        />
      </_Builtin.Block>
    </_Component>
  );
}
