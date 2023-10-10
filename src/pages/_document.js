import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Styles */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link href="/css/fontawesome-all.css" rel="stylesheet" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link href="/css/swiper.css" rel="stylesheet" />
        <link href="/css/magnific-popup.css" rel="stylesheet" />
        <link href="/css/styles.css" rel="stylesheet" />
        {/* Favicon  */}
        {/* <link rel="icon" href="images/favicon.png" />  */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/script.js"></script> 
        {/* Scripts*/}
        {/* <script src="/js/scroll-header.js"></script>  */}
        {/* jQuery for JavaScript plugins*/}
        {/* <script src="/js/jquery.min.js"></script>  */}
        {/* jQuery Easing for smooth scrolling between anchors*/}
        {/* <script src="/js/jquery.easing.min.js"></script>  */}
        {/* Swiper for image and text sliders*/}
        {/* <script src="/js/swiper.min.js"></script>  */}
        {/* Magnific Popup for lightboxes*/}
        {/* <script src="/js/jquery.magnific-popup.js"></script>  */}
        {/* Custom scripts*/ }
        {/* <script src="/js/scripts.js"></script> */}
      </body>  
    </Html>
  );
}