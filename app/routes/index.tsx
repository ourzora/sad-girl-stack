import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getLocalMDXPage, useMdxComponent } from "~/utils/mdx";

export const loader = async () => {
  // const mdxPage = await getLocalMDXPage("index.mdx");
  const mdxPage = await getLocalMDXPage("../readme.md");

  invariant(mdxPage, "Page not found");

  return json({
    mdxPage,
  });
};

export default function Index() {
  const { mdxPage } = useLoaderData<typeof loader>();

  const Component = useMdxComponent(mdxPage?.code);

  return <Component />;
}
