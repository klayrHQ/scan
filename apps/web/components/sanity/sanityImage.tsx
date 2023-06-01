"use client";

import { SanityImage as SImage } from "sanity-image";
import { builder as validBuilder } from "../../lib/sanity.image";
import {
  SanityImageProps,
} from "sanity-image/dist/types";
import React from "react";

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;
type ExcludeBuilder<T> = Without<T, "builder">;

export const SanityImage = ({
  ...props
}: ExcludeBuilder<SanityImageProps & {className?: string}>) => (
  <SImage builder={validBuilder} {...props} />
);
