import Link from 'next/link'
import {Header, Segment, List} from "semantic-ui-react";

function Page({ stats }) {
    console.log(stats)
    return (
        <>
            <Header as='h1'>Статьи:</Header>
            <Segment style={{marginTop: '20px'}}>
                <List divided relaxed>
                    {stats && stats.map((stat) =>
                        <List.Item>
                            <List.Content>
                                <List.Header>
                                    <Link href={`/stats/${stat.id}`}>{stat.Title}</Link>
                                </List.Header>
                            </List.Content>
                        </List.Item>)}
                </List>
            </Segment>
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://admin/statistics/`)
    const stats = await res.json()
    console.log(stats)
    return { props: { stats } }
}

export default Page
