import Image from 'next/image'
import Head from 'next/head'
import Nhentai from '../../components/nhentai'
import styles from '../../styles/Reader.module.css'
import bot_styles from '../../styles/Info.module.css'
import AddBot from '../../Add-bot'

function Page({ metadata, code }) {
  if (metadata.content.status == 404){
    return (
      <>
        <h1>404 Not Found</h1>
      </>
    )
  } else {
    var imgUrl=[], i, fileType;
    for (i = 1; i <= metadata.content.page; i++){
      switch (metadata.content.images[i-1].t) {
        case 'j':
          fileType = '.jpg'
          break;
        case 'p':
          fileType = '.png'
          break;
        case 'g':
          fileType = '.gif'
          break
      }
      imgUrl[i-1] = `/api/img/${metadata.content.media_id}/${i}${fileType}`
    }
    return (
      <>
      <Head>
        <title>{metadata.content.title_en}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.metadata}>
          <div>
            <AddBot style={bot_styles.add_bot}/>
          </div>
          <div style={{marginTop: '15px'}}>
            <a href={`/nhen-info/${code}`}> {metadata.content.title_en}</a>
          </div>
        </div>
        <div className={styles.main}>
          {imgUrl.map( (url, key) => 
            <div className={styles.img} key={key}>
              <Image 
                src={url}
                alt={url}
                layout="responsive"
                width={600}
                height={800}
                unoptimized>
              </Image>
            </div>
        )}
        </div>
      </div>
      </>
    )
  }
}

export async function getServerSideProps({
  params: {
    code
  }
}) {
  const metadata = await Nhentai(code)
  if (metadata.status == 404) {
    return { notFound: true }
  } else {
    return { props: { metadata, code } }
  }
}

export default Page