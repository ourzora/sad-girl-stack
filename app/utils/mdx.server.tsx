import { bundleMDX } from "mdx-bundler";

export const compileMdx = async <
  FrontmatterType extends Record<string, unknown>,
>(
  source: string,
) => {
  const { frontmatter, code } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? [])];
      options.rehypePlugins = [...(options.rehypePlugins ?? [])];

      return options;
    },
  });

  return {
    code,
    frontmatter: frontmatter as FrontmatterType,
  };
};
