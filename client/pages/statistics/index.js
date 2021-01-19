import Link from 'next/link'

function Page({ stats }) {
    return (
        <>
            <div>Statistics:</div>
            <ul>
                {stats && stats.map((stat) => <li><Link href={`/statistics/${stat.id}`}>{stat.Title}</Link></li>)}
            </ul>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://167.172.111.220:3000/statistics/`)
    const stats = await res.json()
    return { props: { stats } }
}

export default Page
