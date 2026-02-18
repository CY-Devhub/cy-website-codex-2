"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./LottieHeadsetMobileSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-348":{"id":"e-348","name":"","animationType":"custom","eventTypeId":"SCROLLING_IN_VIEW","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-39","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9118303f-921c-c05c-561b-01bae39c65f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9118303f-921c-c05c-561b-01bae39c65f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-39-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1711622923964}},"actionLists":{"a-39":{"id":"a-39","title":"LottieScroll2 4","continuousParameterGroups":[{"id":"a-39-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":52,"actionItems":[{"id":"a-39-n","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".lottieheadset-mobile","selectorGuids":["f32e12bd-ff18-a0c7-dd68-86752c6d75a3"]},"value":0}}]},{"keyframe":66,"actionItems":[{"id":"a-39-n-2","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".lottieheadset-mobile","selectorGuids":["f32e12bd-ff18-a0c7-dd68-86752c6d75a3"]},"value":98}}]}]}],"createdOn":1705059369474}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function LottieHeadsetMobileSection({
  as: _Component = _Builtin.Block,
}) {
  _interactions.useInteractions(_interactionsData, _styles);
  return;
}
