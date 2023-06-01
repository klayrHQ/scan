import { sanityClient } from "./sanity.client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: string) => builder.image(source)
