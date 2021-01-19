function Page({id, content, title}) {
    return (
        <>
            <div>Post nr.{id}: {title}</div>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </>
    )
}

export async function getServerSideProps({ params: {id} }) {
    const res = await fetch(`http://admin/statistics/${id}`)
    const post = await res.json()
    console.log(post)
    return { props: { id, content: post.Content, title: post.Title } }
}


export default Page
