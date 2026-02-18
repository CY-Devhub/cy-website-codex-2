import * as React from "react";
import * as Types from "./types";

declare function SplitTabView(props: {
  as?: React.ElementType;
  tabsHeading1Text?: React.ReactNode;
  tabsHeading2Text?: React.ReactNode;
  tabsHeading3Text?: React.ReactNode;
  paragraph1RichText?: Types.Basic.RichTextChildren;
  cureoHeading1Text?: React.ReactNode;
  cureoParagraph1RichText?: Types.Basic.RichTextChildren;
  cureoParagraph1RichText2?: Types.Basic.RichTextChildren;
}): React.JSX.Element;
