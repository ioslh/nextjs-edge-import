# Issue Description

When using MDX in a Next.js project, Next.js may mistakenly bundle the browser-targeted code from the `decode-named-character-reference` library into the edge-runtime. This code attempts to access `document` at the top level, resulting in an error. You can reproduce this issue by running `pnpm build` in the current repository.

# Solution

Until the authors of `decode-named-character-reference` or `Next.js` provide an official update to address this, you can apply one of the following two fixes using the `pnpm patch` command.

- [Patch entry point](https://github.com/ioslh/nextjs-edge-import/pull/1)
- [Patch runtime code](https://github.com/ioslh/nextjs-edge-import/pull/2)
