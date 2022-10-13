import { createClient } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";
import createImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "sho4tsku",
  dataset: "production",
  apiVersion: "2022-10-09",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = createImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
