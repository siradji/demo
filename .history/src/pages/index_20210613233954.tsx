import { Sidebar } from '@modules/blocks/sidebar';
import { TopBar } from '@modules/blocks/topbar';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import firebase from 'firebase';
import { Camera } from '@modules/sections/Camera';
import { Gallery } from '@modules/sections/Gallery';
import { Rss } from '@modules/sections/Rss';
import { Browser } from '@modules/sections/Browser';
import { Auth } from '../modules/sections/Auth';

export default function Home({ data, rssFeed }) {
  const [logged, setLogged] = useState<boolean>(false);
  const [camera, setCamera] = useState<boolean>(false);
  const [gallery, setGallery] = useState<boolean>(false);
  const [browser, setBrowser] = useState<boolean>(false);
  const [rss, setRss] = useState<boolean>(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogged(true);
      }
    });
  }, []);
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Dlabs Assignment" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tailwindcss/typography@0.2.x/dist/typography.min.css"
        />
      </Head>
      {logged ? (
        <>
          <TopBar />
          {camera && <Camera camera={setCamera} />}
          {gallery && <Gallery photos={data} gallery={setGallery} />}
          {rss && <Rss rss={rssFeed} cancel={setRss} />}
          {browser && <Browser browser={setBrowser} />}

          <Sidebar
            camera={setCamera}
            gallery={setGallery}
            browser={setBrowser}
            rss={setRss}
          />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const response = await fetch('https://picsum.photos/v2/list');
  const res = await fetch(
    'https://api.rss2json.com/v1/api.json?rss_url=https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
  );
  const data = await response.json();
  const rss = await res.json();

  return {
    props: { data, rssFeed: rss.items }, // will be passed to the page component as props
  };
}
