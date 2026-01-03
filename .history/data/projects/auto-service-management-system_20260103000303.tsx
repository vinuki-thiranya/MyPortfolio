A param property was accessed directly with `params.slug`. `params` is now a Promise and should be unwrapped with `React.use()` before accessing properties of the underlying params object. In this version of Next.js direct access to param properties is still supported to facilitate migration but in a future version you will be required to unwrap `params` with `React.use()`.

app\projects\[slug]\page.tsx (15:11) @ ProjectPage


  13 |
  14 | export default function ProjectPage({ params }: { params: { slug: string } }) {
> 15 |   const { slug } = params
     |           ^
  16 |   const project = getProjectBySlug(slug)
  17 |
  18 |   if (!project) {
Call Stack
7

Show 6 ignore-listed frame(s)
ProjectPage
app\projects\[slug]\page.tsx (15:11)
