"use client";

import config from "../../../../sanity.config";
// eslint-disable-next-line import/no-unresolved
import { NextStudioLoading } from "next-sanity/studio/loading";

export default function Loading() {
  return <NextStudioLoading config={config} />;
}
