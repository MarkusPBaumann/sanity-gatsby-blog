export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629a27bc58a0d4118c5715d0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-5nenouj9",
                  apiId: "0d495170-fc8a-44e2-918f-484e29401e8f",
                },
                {
                  buildHookId: "629a27bc912db4126faebec7",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-z325uk1a",
                  apiId: "6cc62798-a581-4726-866a-ae91f4c8e663",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/MarkusPBaumann/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-z325uk1a.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
