import Head from 'next/head'
import Nhentai from '../../components/nhentai'
import styles from '../../styles/Info.module.css'
import AddBot from '../../Add-bot'

function Page({ metadata, code }) {
  if (metadata.content.status == 404){
    return (
      <>
        <h1>404 Not Found</h1>
      </>
    )
  } else {
    let fileType;
    switch (metadata.content.images[0].t) {
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
    const url = `/api/img/${metadata.content.media_id}/1${fileType}`;
    let title_jp = null;
    if (metadata.content.title_jp) {
        title_jp = <h2>{metadata.content.title_jp}</h2>
    }
    return (
      <>
      <Head>
        <title>{metadata.content.title_en}</title>
      </Head>
      <div className={styles.container}>
          <div className={styles.main_box}>
            <AddBot style={styles.add_bot}/>
            <div className={styles.main_content}>
              <div className={styles.container_img}>
                  <img src={url} className={styles.img}/>
              </div>
              <div className={styles.container_content}>
                  <h2>{metadata.content.title_en}</h2>
                  {title_jp}
                  <p>#{code}</p>
                  <div>
                      <div>
                          Tags: {metadata.content.tags.map(tag => 
                              tag.type === 'tag' ? <button className={styles.span_tag}>{tag.name}</button> : ''
                          )}
                      </div>
                      <div>
                          Artist: {metadata.content.tags.map(tag => 
                              tag.type === 'artist' ? <button className={styles.span_tag}>{tag.name}</button> : ''
                          )}
                      </div>
                      <div>
                          Languages: {metadata.content.tags.map(tag => 
                              tag.type === 'language' ? <button className={styles.span_tag}>{tag.name}</button> : ''
                          )}
                      </div>
                      <div>
                          Categories: {metadata.content.tags.map(tag => 
                              tag.type === 'category' ? <button className={styles.span_tag}>{tag.name}</button> : ''
                          )}
                      </div>
                      <div>
                          Pages: <button className={styles.span_tag}>{metadata.content.page}</button>
                      </div>
                      <div style={{display: 'flex', justifyContent: 'center'}}>
                          <button className={`${styles.span_tag} ${styles.read_button_margin}`}><a href={`/nhen-reader/${code}`}>READ THE DOUJIN</a></button>
                      </div>
                  </div>
              </div>
            </div>
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