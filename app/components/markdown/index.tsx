import { IsomorphicLink } from "remix-isomorphic-link";

export const mdxComponents = {
  a: ({ href, ...props }: { href: string }) => (
    <IsomorphicLink to={href} {...props} />
  ),
};
