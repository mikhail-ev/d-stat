import Head from 'next/head'
import Link from 'next/link'
import {Header} from "semantic-ui-react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DrugStat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header>Добро пожаловать</Header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur delectus eos esse eum ex fuga laudantium modi molestias, natus?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto assumenda at beatae harum iste iusto laborum libero magnam necessitatibus, obcaecati odio perspiciatis praesentium quas ratione reprehenderit ullam vel? A accusamus ad, adipisci blanditiis dolor eius expedita facere fugiat minima quaerat quo ullam voluptatem. Adipisci aut distinctio dolorem exercitationem in, laboriosam magnam nesciunt, nisi pariatur porro quis, saepe voluptas. Ad aspernatur at dolorum enim eum ex exercitationem facere ipsam molestiae nostrum nulla, reiciendis, unde voluptate. Blanditiis commodi consequatur consequuntur culpa cupiditate dolorem doloremque doloribus earum excepturi, facere magnam maxime nesciunt porro recusandae repellat repudiandae unde vel veniam veritatis vero. Odit.</p>
    </div>
  )
}
