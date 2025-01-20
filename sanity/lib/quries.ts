import { defineQuery } from "next-sanity";

export const STARTUP_QURIES =
  defineQuery(`*[_type == "startup" &&defined(slug.current)] | order(_createdAt, desciption) {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
    _id, name, image, bio},
    views,
    description,
    image,
    category 
    
    }`);
