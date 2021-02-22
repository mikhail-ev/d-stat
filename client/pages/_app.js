import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Link from 'next/link'
import {Container, Header, Menu} from "semantic-ui-react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu fixed='top' inverted>
        <Container>
          <Link href='/'>
            <Menu.Item header>
              <span>
                Drug stat
              </span>
            </Menu.Item>
          </Link>
          {/*<Link href='/journal'>*/}
          {/*  <Menu.Item header>*/}
          {/*    <span>*/}
          {/*      Журнал*/}
          {/*    </span>*/}
          {/*  </Menu.Item>*/}
          {/*</Link>*/}
          <Link href='/stats'>
            <Menu.Item header>
              <span>
                Статистика
              </span>
            </Menu.Item>
          </Link>
        </Container>
      </Menu>

      <Container text style={{position: 'absolute', top: '40px', bottom: '0px', left: '0px', right: '0px'}}>
        <Container text style={{margin: '0 auto', padding: '20px 0'}}>
          <Component {...pageProps} />
        </Container>
      </Container>
    </>
  )
}

export default MyApp
