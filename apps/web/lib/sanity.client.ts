// import {createClient} from "next-sanity";
import { createClient, type SanityClient } from "@sanity/preview-kit/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const token = process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN!;
export type { SanityClient };

export const sanityClient = createClient({
  projectId,
  dataset,
  useCdn: false,
  studioUrl: "https://betanet.liskscan.com/studio",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  encodeSourceMapAtPath: () => true,
});

// Used to preview drafts as they will appear once published
export const draftsClient = sanityClient.withConfig({
  perspective: "previewDrafts",
  // required by previewDrafts
  apiVersion: "X",
  useCdn: false,
  token,
});
