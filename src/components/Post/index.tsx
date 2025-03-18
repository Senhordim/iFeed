
type PostProps = {
    title: string,
    content: string,
}
export function Post({ title, content }: PostProps) {
  return (
    <>
        <h2>{title}</h2>
        <p>{content}</p>
        <hr />
    </>
  )
}
