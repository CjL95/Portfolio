import { Html, Head, Main, NextScript } from 'next/document';
import { Header } from '../components/Header/Header';
import React from 'react';
import { Footer } from '../components/Footer/Footer';
export default function Document() {
  return (
    <Html lang="en">
        <Head>
            {/*Bootstrap CSS */} 
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossOrigin="anonymous"/>
            
            {/*Bootstrap JS */} 
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossOrigin="anonymous"></script>

            {/*Google Fonts*/}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fjalla+One&family=Montserrat&display=swap" rel="stylesheet"/>
            
            {/*Font Awesome */}
            <script src="https://kit.fontawesome.com/1af5cf1f7d.js" crossOrigin="anonymous"></script>


            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        </Head>
        <body>
            <Header />
            <Main />
            <NextScript />
            <Footer />
        </body>
    </Html>
  )
}