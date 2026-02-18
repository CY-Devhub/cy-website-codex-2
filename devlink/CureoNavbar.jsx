"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CureoNavbar.module.css";

export function CureoNavbar({ as: _Component = _Builtin.NavbarWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "cureo_navbar")}
      tag="div"
      config={{
        animation: "default",
        collapse: "medium",
        docHeight: false,
        duration: 400,
        easing: "ease",
        easing2: "ease",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarContainer
        className={_utils.cx(_styles, "container-2")}
        tag="div"
      >
        <_Builtin.NavbarBrand
          className={_utils.cx(_styles, "brand-2")}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-2")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/6548de993ba0822e0f5dd3f1__CU_Logo_CUREosity_rgb.png"
          />
        </_Builtin.NavbarBrand>
        <_Builtin.NavbarMenu
          className={_utils.cx(_styles, "nav-menu")}
          tag="nav"
          role="navigation"
        >
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "dropdown")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "nav-link")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-12", "cureonavmenu")}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/6549f62b5a6182cdbc2a976f_cureo_RGB-01_CUT.png"
              />
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list")}
              tag="nav"
            >
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown-link")}
                options={{
                  href: "#",
                }}
              >
                {"Our therapy solution"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown-link")}
                options={{
                  href: "#",
                }}
              >
                {"For inpatient rehab"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown-link")}
                options={{
                  href: "#",
                  preload: "prerender",
                }}
              >
                {"For outpatient rehab"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown-link")}
                options={{
                  href: "#",
                }}
              >
                {"For patients"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.NavbarLink
            className={_utils.cx(
              _styles,
              "nav-link",
              "cureo-paragraph-2",
              "navtext"
            )}
            options={{
              href: "#",
            }}
          >
            {"NEWS &EVENTS"}
          </_Builtin.NavbarLink>
          <_Builtin.DropdownWrapper
            className={_utils.cx(_styles, "dropdown", "navtext")}
            tag="div"
            delay={0}
            hover={true}
          >
            <_Builtin.DropdownToggle
              className={_utils.cx(_styles, "nav-link")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "cureo-paragraph-2",
                  "navlink-text"
                )}
                tag="div"
              >
                {"ABOUT"}
              </_Builtin.Block>
            </_Builtin.DropdownToggle>
            <_Builtin.DropdownList
              className={_utils.cx(_styles, "dropdown-list")}
              tag="nav"
            >
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown-link")}
                options={{
                  href: "#",
                }}
              >
                {"Company"}
              </_Builtin.DropdownLink>
              <_Builtin.DropdownLink
                className={_utils.cx(_styles, "dropdown-link")}
                options={{
                  href: "#",
                }}
              >
                {"Career"}
              </_Builtin.DropdownLink>
            </_Builtin.DropdownList>
          </_Builtin.DropdownWrapper>
          <_Builtin.NavbarLink
            className={_utils.cx(
              _styles,
              "nav-link",
              "cureo-paragraph-2",
              "navtext",
              "navmargin1",
              "action-btn-cntct-003-pf"
            )}
            options={{
              href: "#",
            }}
          >
            {"CONTACT"}
          </_Builtin.NavbarLink>
          <_Builtin.NavbarLink
            className={_utils.cx(
              _styles,
              "nav-link",
              "cureo-paragraph-2",
              "navtext"
            )}
            options={{
              href: "https://cureo-center.com/knowledge-dashboard",
              target: "_blank",
            }}
          >
            {"LOGIN"}
          </_Builtin.NavbarLink>
          <_Builtin.NotSupported _atom="LocalesWrapper" />
        </_Builtin.NavbarMenu>
        <_Builtin.NavbarButton
          className={_utils.cx(_styles, "menu-button")}
          tag="div"
        >
          <_Builtin.Icon
            className={_utils.cx(_styles, "icon-3")}
            widget={{
              type: "icon",
              icon: "nav-menu",
            }}
          />
        </_Builtin.NavbarButton>
      </_Builtin.NavbarContainer>
    </_Component>
  );
}
