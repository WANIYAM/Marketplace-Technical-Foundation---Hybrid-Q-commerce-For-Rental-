import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "Title",
      validation: (rule) => rule.required(),
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      validation: (rule) => rule.required(),
      type: "slug",
      options: {
        source: "name", // Automatically generate the slug based on the product name
        maxLength: 96,  // Optionally, limit the length of the slug
      },
    }),
    defineField({
      name:'images',
      type:'array',
      title:'Product Images',
      of:[{type:'image'}],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (rule) => rule.required().min(0), // Ensure price is non-negative
    }),
    
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Detailed description of the product",
    }),
    
    
    
  ],
});
