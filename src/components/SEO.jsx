import { Helmet } from 'react-helmet';

const SEO = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags - Optimized for name searches */}
      <title>Ikramullah Karokhail - Full Stack Developer | Portfolio</title>
      <meta name="description" content="Official portfolio website of Ikramullah Karokhail (اکرام الله کروخیل) - Full Stack Developer from Afghanistan. Specializing in React, Node.js, and modern web development." />
      <meta name="keywords" content="Ikramullah, Ikramullah Karokhail, Karokhail, اکرام الله کروخیل, کروخیل, Afghan Developer, Ikramullah Portfolio, Karokhail Developer, Ikramullah Karokhail Developer, Web Developer Kabul, React Developer Afghanistan" />
      <meta name="author" content="Ikramullah Karokhail" />
      
      {/* Alternative name variations for search engines */}
      <meta name="name.alternate" content="Ikramullah" />
      <meta name="name.alternate" content="Karokhail" />
      <meta name="name.alternate" content="Ikramullah Karokhail" />
      <meta name="name.alternate" content="اکرام الله کروخیل" />
      
      {/* Open Graph Tags - Enhanced for name recognition */}
      <meta property="og:title" content="Ikramullah Karokhail | Full Stack Developer Portfolio" />
      <meta property="og:description" content="Official portfolio of Ikramullah Karokhail - Full Stack Developer from Afghanistan specializing in modern web development." />
      <meta property="og:type" content="profile" />
      <meta property="og:url" content="https://ikramullahkarokhail.vercel.app" />
      <meta property="og:locale" content="en_US" />
      <meta property="profile:first_name" content="Ikramullah" />
      <meta property="profile:last_name" content="Karokhail" />
      
      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ikramullah Karokhail - Full Stack Developer" />
      <meta name="twitter:description" content="Official portfolio of Ikramullah Karokhail - Full Stack Developer from Afghanistan" />
      
      {/* Technical Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Schema.org markup for Google+ */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Person",
            "name": "Ikramullah Karokhail",
            "givenName": "Ikramullah",
            "familyName": "Karokhail",
            "alternateName": ["اکرام الله کروخیل", "Ikramullah", "Karokhail"],
            "jobTitle": "Full Stack Developer",
            "url": "https://ikramullahkarokhail.vercel.app",
            "sameAs": [
              "https://github.com/Ikramullahkarokhil",
              "https://www.linkedin.com/in/ikramullah-karokhil-002431245"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kabul",
              "addressCountry": "Afghanistan"
            }
          }
        `}
      </script>
      
      {/* Add canonical URL */}
      <link rel="canonical" href="https://ikramullahkarokhail.vercel.app" />
    </Helmet>
  );
};

export default SEO; 