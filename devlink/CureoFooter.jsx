"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CureoFooter.module.css";

export function CureoFooter({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "footer")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "uui-footer03_component")}
        tag="footer"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "uui-page-padding")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "uui-container-large")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "uui-padding-vertical-xlarge")}
            tag="div"
          >
            <_Builtin.Grid
              className={_utils.cx(_styles, "uui-footer03_top-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "uui-footer03_left-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_63a284ab-1615-8707-9d75-dc6888c0872b-88c08725"
                )}
                tag="div"
              >
                <_Builtin.NavbarBrand
                  className={_utils.cx(_styles, "uui-footer03_logo-link")}
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "uui-logo_component")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "uui-logo_logotype")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Untitled UI logotext"
                      src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/6548de993ba0822e0f5dd3f1__CU_Logo_CUREosity_rgb.png"
                    />
                    <_Builtin.Image
                      className={_utils.cx(_styles, "uui-logo_image")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Logo"
                      src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65521b6125dbb78cb5a90c25_untitled-ui-logo.png"
                    />
                  </_Builtin.Block>
                </_Builtin.NavbarBrand>
                <_Builtin.Block
                  className={_utils.cx(_styles, "uui-footer03_details-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "cureo-paragraph-1",
                      "align-center"
                    )}
                    tag="div"
                  >
                    {"CUREosity GmbH"}
                    <br />
                    {"Hansaallee 299, 40549 Düsseldorf"}
                    <br />
                    <br />
                    {"Mail: info@cureosity.de"}
                    <br />
                    {"‍Phone:+49 211 82 20 46-6"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Grid
                  className={_utils.cx(_styles, "uui-footer03_social-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-footer03_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.facebook.com/CUREosity/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "social-icon")}
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M24%2012C24%205.37258%2018.6274%200%2012%200C5.37258%200%200%205.37258%200%2012C0%2017.9895%204.3882%2022.954%2010.125%2023.8542V15.4688H7.07812V12H10.125V9.35625C10.125%206.34875%2011.9166%204.6875%2014.6576%204.6875C15.9701%204.6875%2017.3438%204.92188%2017.3438%204.92188V7.875H15.8306C14.34%207.875%2013.875%208.80008%2013.875%209.75V12H17.2031L16.6711%2015.4688H13.875V23.8542C19.6118%2022.954%2024%2017.9895%2024%2012Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-footer03_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.instagram.com/cureosity_vr/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "social-icon")}
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M12%202.16094C15.2063%202.16094%2015.5859%202.175%2016.8469%202.23125C18.0188%202.28281%2018.6516%202.47969%2019.0734%202.64375C19.6313%202.85938%2020.0344%203.12188%2020.4516%203.53906C20.8734%203.96094%2021.1313%204.35938%2021.3469%204.91719C21.5109%205.33906%2021.7078%205.97656%2021.7594%207.14375C21.8156%208.40937%2021.8297%208.78906%2021.8297%2011.9906C21.8297%2015.1969%2021.8156%2015.5766%2021.7594%2016.8375C21.7078%2018.0094%2021.5109%2018.6422%2021.3469%2019.0641C21.1313%2019.6219%2020.8688%2020.025%2020.4516%2020.4422C20.0297%2020.8641%2019.6313%2021.1219%2019.0734%2021.3375C18.6516%2021.5016%2018.0141%2021.6984%2016.8469%2021.75C15.5813%2021.8063%2015.2016%2021.8203%2012%2021.8203C8.79375%2021.8203%208.41406%2021.8063%207.15313%2021.75C5.98125%2021.6984%205.34844%2021.5016%204.92656%2021.3375C4.36875%2021.1219%203.96563%2020.8594%203.54844%2020.4422C3.12656%2020.0203%202.86875%2019.6219%202.65313%2019.0641C2.48906%2018.6422%202.29219%2018.0047%202.24063%2016.8375C2.18438%2015.5719%202.17031%2015.1922%202.17031%2011.9906C2.17031%208.78438%202.18438%208.40469%202.24063%207.14375C2.29219%205.97187%202.48906%205.33906%202.65313%204.91719C2.86875%204.35938%203.13125%203.95625%203.54844%203.53906C3.97031%203.11719%204.36875%202.85938%204.92656%202.64375C5.34844%202.47969%205.98594%202.28281%207.15313%202.23125C8.41406%202.175%208.79375%202.16094%2012%202.16094ZM12%200C8.74219%200%208.33438%200.0140625%207.05469%200.0703125C5.77969%200.126563%204.90313%200.332812%204.14375%200.628125C3.35156%200.9375%202.68125%201.34531%202.01563%202.01562C1.34531%202.68125%200.9375%203.35156%200.628125%204.13906C0.332812%204.90313%200.126563%205.775%200.0703125%207.05C0.0140625%208.33437%200%208.74219%200%2012C0%2015.2578%200.0140625%2015.6656%200.0703125%2016.9453C0.126563%2018.2203%200.332812%2019.0969%200.628125%2019.8563C0.9375%2020.6484%201.34531%2021.3188%202.01563%2021.9844C2.68125%2022.65%203.35156%2023.0625%204.13906%2023.3672C4.90313%2023.6625%205.775%2023.8687%207.05%2023.925C8.32969%2023.9812%208.7375%2023.9953%2011.9953%2023.9953C15.2531%2023.9953%2015.6609%2023.9812%2016.9406%2023.925C18.2156%2023.8687%2019.0922%2023.6625%2019.8516%2023.3672C20.6391%2023.0625%2021.3094%2022.65%2021.975%2021.9844C22.6406%2021.3188%2023.0531%2020.6484%2023.3578%2019.8609C23.6531%2019.0969%2023.8594%2018.225%2023.9156%2016.95C23.9719%2015.6703%2023.9859%2015.2625%2023.9859%2012.0047C23.9859%208.74688%2023.9719%208.33906%2023.9156%207.05938C23.8594%205.78438%2023.6531%204.90781%2023.3578%204.14844C23.0625%203.35156%2022.6547%202.68125%2021.9844%202.01562C21.3188%201.35%2020.6484%200.9375%2019.8609%200.632812C19.0969%200.3375%2018.225%200.13125%2016.95%200.075C15.6656%200.0140625%2015.2578%200%2012%200Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M12%205.83594C8.59688%205.83594%205.83594%208.59688%205.83594%2012C5.83594%2015.4031%208.59688%2018.1641%2012%2018.1641C15.4031%2018.1641%2018.1641%2015.4031%2018.1641%2012C18.1641%208.59688%2015.4031%205.83594%2012%205.83594ZM12%2015.9984C9.79219%2015.9984%208.00156%2014.2078%208.00156%2012C8.00156%209.79219%209.79219%208.00156%2012%208.00156C14.2078%208.00156%2015.9984%209.79219%2015.9984%2012C15.9984%2014.2078%2014.2078%2015.9984%2012%2015.9984Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3Cpath%20d%3D%22M19.8469%205.59214C19.8469%206.38902%2019.2%207.0312%2018.4078%207.0312C17.6109%207.0312%2016.9688%206.38433%2016.9688%205.59214C16.9688%204.79526%2017.6156%204.15308%2018.4078%204.15308C19.2%204.15308%2019.8469%204.79995%2019.8469%205.59214Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-footer03_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.linkedin.com/company/cureosity-gmbh/",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.HtmlEmbed
                      className={_utils.cx(_styles, "social-icon")}
                      value="%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M22.2234%200H1.77187C0.792187%200%200%200.773438%200%201.72969V22.2656C0%2023.2219%200.792187%2024%201.77187%2024H22.2234C23.2031%2024%2024%2023.2219%2024%2022.2703V1.72969C24%200.773438%2023.2031%200%2022.2234%200ZM7.12031%2020.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906%207.43438C4.19531%207.43438%203.27188%206.51094%203.27188%205.37187C3.27188%204.23281%204.19531%203.30937%205.33906%203.30937C6.47813%203.30937%207.40156%204.23281%207.40156%205.37187C7.40156%206.50625%206.47813%207.43438%205.33906%207.43438ZM20.4516%2020.4516H16.8937V14.8828C16.8937%2013.5562%2016.8703%2011.8453%2015.0422%2011.8453C13.1906%2011.8453%2012.9094%2013.2937%2012.9094%2014.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891%209.66094%2014.4516%208.70938%2016.1813%208.70938C19.7859%208.70938%2020.4516%2011.0813%2020.4516%2014.1656V20.4516Z%22%20fill%3D%22currentColor%22%2F%3E%0A%3C%2Fsvg%3E"
                    />
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-footer03_social-link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "https://www.youtube.com/@cureosity_vr",
                      target: "_blank",
                    }}
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-62")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="YouTube icon social sharing widget"
                      src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65c21738d507c9b87cc65986_youtube-123.svg"
                    />
                  </_Builtin.Link>
                </_Builtin.Grid>
              </_Builtin.Block>
              <_Builtin.Grid
                className={_utils.cx(_styles, "uui-footer03_menu-wrapper")}
                id={_utils.cx(
                  _styles,
                  "w-node-_63a284ab-1615-8707-9d75-dc6888c08744-88c08725"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "uui-footer03_link-list")}
                  tag="div"
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-footer03_link")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_63a284ab-1615-8707-9d75-dc6888c08746-88c08725"
                    )}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cureo-paragraph-1")}
                      tag="div"
                    >
                      {"About us"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-footer03_link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cureo-paragraph-1")}
                      tag="div"
                    >
                      {"Careers"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-footer03_link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cureo-paragraph-1")}
                      tag="div"
                    >
                      {"Privacy policy"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-footer03_link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cureo-paragraph-1")}
                      tag="div"
                    >
                      {"Contact"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "uui-footer03_link")}
                    button={false}
                    block="inline"
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "cureo-paragraph-1")}
                      tag="div"
                    >
                      {"Imprint"}
                    </_Builtin.Block>
                  </_Builtin.Link>
                </_Builtin.Block>
              </_Builtin.Grid>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-125")}
                id={_utils.cx(
                  _styles,
                  "w-node-_5b348218-980d-7d10-c654-81878dc2bd41-88c08725"
                )}
                tag="div"
              >
                <_Builtin.Block tag="div">
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-114")}
                    id={_utils.cx(
                      _styles,
                      "w-node-_5e02a8a7-ce35-3c8f-ac4a-dee30bf9c3eb-88c08725"
                    )}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt=""
                    src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/65fd4c5353e594d4dadb716a_65f312f0e5e771340b1e0d4b_Innovationspreis.png"
                  />
                </_Builtin.Block>
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-49-copy")}
                  id={_utils.cx(
                    _styles,
                    "w-node-c6b9e8f8-8af6-248d-6528-098b7b84dff6-88c08725"
                  )}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/6548c6e5ab9a929dbb64e897/654b5edc0497f91e22afad91_bec_Afnor_Zertzeichen_13485_D_Rev1.0.jpg"
                />
              </_Builtin.Block>
            </_Builtin.Grid>
            <_Builtin.Block
              className={_utils.cx(_styles, "uui-footer03_bottom-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "cureo-paragraph-1")}
                tag="div"
              >
                {"©2026 CUREosity GmbH"}
              </_Builtin.Block>
              <_Builtin.Grid
                className={_utils.cx(_styles, "uui-footer03_legal-list")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "cureo-paragraph-1")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Terms"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "cureo-paragraph-1")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Privacy "}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "cureo-paragraph-1")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Cookies"}
                </_Builtin.Link>
              </_Builtin.Grid>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
