# Remix Sad Girl Stack _wip_

```sh
npx create-remix@latest --template ourzora/sad-girl-stack
```

Sad Girl is a [Remix](https://remix.run) [stack](https://remix.run/docs/en/v1/pages/stacks) for boilerplate-free web3 hacking. We pulled it out of experiments in the Zora&times;PublicAssembly&times;Nouns ecosystems.

## Besties

- Styling with [Tailwind](https://tailwindcss.com/)
- Content with [mdx-bundler](https://github.com/kentcdodds/mdx-bundler)
- web3 connection with RainbowKit&times;[wagmi](https://wagmi.sh/)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
yarn i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
yarn install
```

Afterwards, start the Remix development server like so:

```sh
yarn run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
