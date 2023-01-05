import { useMemo } from "react";
import * as mdxBundler from "mdx-bundler/client";

import type { MDXPage } from "~/types";
import { mdxComponents } from "~/components/markdown";
import { getLocalFile } from "./fs.server";
import { compileMdx } from "./mdx.server";

export const getLocalMDXPage = async (
  path: string,
): Promise<MDXPage | null> => {
  const markdownSource = await getLocalFile(path);

  return await compileMdx(markdownSource);
};

/**
 * This should be rendered within a useMemo
 * @param code the code to get the component from
 * @returns the component
 */
export const getMdxComponent = (code: string) => {
  const Component = mdxBundler.getMDXComponent(code);
  function MdxComponent({
    components,
    ...rest
  }: Parameters<typeof Component>["0"]) {
    return (
      // @ts-expect-error the types are wrong here
      <Component components={{ ...mdxComponents, ...components }} {...rest} />
    );
  }
  return MdxComponent;
};

export const useMdxComponent = (code: string) => {
  return useMemo(() => getMdxComponent(code), [code]);
};
