import { defineType, defineField } from "sanity";

export const Category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) =>
        rule.required().min(2).max(50).warning("Name should be descriptive."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (rule) => rule.required(),
      options: {
        source: "name", // Automatically generate the slug from the "name" field
        maxLength: 96, // Limit the length of the slug
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Optional description of the category.",
      validation: (rule) => rule.max(200),
    }),
  ],
});
