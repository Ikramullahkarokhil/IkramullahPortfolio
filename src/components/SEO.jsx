import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      <title>Ikramullah Karokhail | Full Stack Developer</title>
      <meta name="description" content="Professional portfolio of Ikramullah Karokhail - Full Stack Developer specializing in React, Node.js, and modern web development. Based in Kabul, Afghanistan." />
      <meta name="keywords" content="Ikramullah Karokhail, ikramullah, karokhail, Afghan developer, Kabul developer, React developer, Full Stack Developer, JavaScript developer, Web Developer Afghanistan" />
      <meta name="author" content="Ikramullah Karokhail" />
      
      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:title" content="Ikramullah Karokhail | Full Stack Developer" />
      <meta property="og:description" content="Professional portfolio of Ikramullah Karokhail - Full Stack Developer specializing in React, Node.js, and modern web development." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ikramullahkarokhail.vercel.app" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ikramullah Karokhail | Full Stack Developer" />
      <meta name="twitter:description" content="Professional portfolio of Ikramullah Karokhail - Full Stack Developer specializing in React, Node.js, and modern web development." />
      
      {/* Technical Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Add canonical URL */}
      <link rel="canonical" href="https://ikramullahkarokhail.vercel.app" />
    </Helmet>
  );
};

export default SEO; 