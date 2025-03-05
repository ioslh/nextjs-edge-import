import { MDXRemote } from 'next-mdx-remote/rsc'

export const runtime = 'edge'

async function getRemoteMarkdown(slug: string) {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      resolve(`# Hello ${slug}\n random: ${Math.random()}`)
    }, 1000)
  })
}

export default async function RemoteMdxPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const markdown = await getRemoteMarkdown((await params).slug)
  return <MDXRemote source={markdown} />
}