import { Metadata } from 'next'
import { Header } from './components/Header/header';
import React from 'react';
import { Footer } from './components/Footer/footer';
import './styles/styles.scss';
export const metadata: Metadata = {
  title: 'Chris Long',
  description: 'Welcome to my portfolio!',
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
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
        </head>
        <body>
            <Header/>
            {children}
            <Footer />
        </body>
      </html>
    )
  }