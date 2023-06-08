export default {
  name: "NavLinks",
  type: "document",
  title: "navLinks",
  fields: [
    {
      name: "link",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "link",
        maxLength: 96,
      },
    },
  ],
}
