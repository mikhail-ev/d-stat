function Page({id, content, title}) {
    return (
        <>
            <div>Post nr.{id}: {title}</div>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </>
    )
}

export async function getServerSideProps({ params: {id} }) {
    const res = await fetch(`http://167.172.111.220:3000/statistics/${id}`)
    const post = await res.json()
    console.log(post)
    return { props: { id, content: post.Content, title: post.Title } }
}


export default Page
