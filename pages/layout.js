import Head from 'next/head';


const Layout = (props) => {
  const { children, title, description, image, keywords, url } = props;
  // head内のデフォルト値
  const siteTitle = "GAKUX";
  const metaDescription = "This is GAKUXx's site. I hope you enjoy."
  const ogContent = {
    type: 'website',
    url: 'https://gakux.net/',
    image: '/logo.png',
    site_name: 'GAKUX',
    locale: "ja_JP"
  }
  const metaKeywords = 'gakux,takane,software engineer,creator';

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta content={description ? `${metaDescription} | ${description}` : metaDescription} />
        <meta name="keywords" content={keywords ? `${metaKeywords},${keywords}` : metaKeywords} />
        <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
        <meta property="og:dscription" content={description ? `${metaDescription} | ${description}` : metaDescription} />
        <meta property="og:type" content={ogContent.type} />
        <meta property="og:url" content={url ? `${ogContent.url}${url}` : ogContent.url} />
        <meta property="og:image" content={image ? image : ogContent.image} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:locale" content={ogContent.locale} />
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      </Head>
      {children}
    </>
  );
}


export default Layout;