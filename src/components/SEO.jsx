import { Helmet } from "react-helmet";

const SEO = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags - Optimized for name searches and software development */}
      <title>
        Ikramullah Karokhail - Full Stack Developer | React, Node.js Expert
      </title>
      <meta
        name="description"
        content="Portfolio of Ikramullah Karokhail (اکرام الله کروخیل) - Full Stack Developer specializing in React, Node.js, Mobile Apps, and Web Development. View my projects, resume, testimonials and skills."
      />
      <meta
        name="keywords"
        content="Ikramullah, Ikramullah Karokhail, Karokhail, اکرام الله کروخیل, کروخیل, Afghan Developer, Software Developer, Full Stack Developer, React Developer, JavaScript Developer, Node.js Developer, Web Developer, Mobile App Developer, Frontend Developer, Backend Developer, Kabul Developer, React Native Developer"
      />
      <meta name="author" content="Ikramullah Karokhail" />

      {/* Alternative name variations for search engines */}
      <meta name="name.alternate" content="Ikramullah" />
      <meta name="name.alternate" content="Karokhail" />
      <meta name="name.alternate" content="Ikramullah Karokhail" />
      <meta name="name.alternate" content="اکرام الله کروخیل" />

      {/* Skills and technologies for search engines */}
      <meta
        name="skills"
        content="JavaScript, React, Node.js, Express, MongoDB, SQL, HTML, CSS, Tailwind CSS, React Native, Mobile App Development, Web Development, RESTful APIs, Git, GitHub, UI/UX Design"
      />
      <meta
        name="expertise"
        content="Full Stack Development, Frontend Development, Backend Development, Mobile App Development, Web Development, API Development, UI/UX Design, React Development, JavaScript Development"
      />

      {/* Work experience for SEO */}
      <meta
        name="work-experience"
        content="Frontend Developer, Mobile App Developer, Web Developer, React Developer, React Native Developer, Asan Systems, Adil Fashion, Farhannet"
      />

      {/* Education for SEO */}
      <meta
        name="education"
        content="Bachelor of Computer Science, Jahan University, Kabul, Afghanistan, Computer Science Degree"
      />

      {/* Open Graph Tags - Enhanced for name recognition and software development */}
      <meta
        property="og:title"
        content="Ikramullah Karokhail | Full Stack Developer - React & Node.js Expert"
      />
      <meta
        property="og:description"
        content="Portfolio of Ikramullah Karokhail - Full Stack Developer specializing in modern web technologies, React, Node.js and mobile app development. View projects, work experience, and testimonials."
      />
      <meta property="og:type" content="profile" />
      <meta
        property="og:url"
        content="https://ikramullahkarokhail.vercel.app"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="profile:first_name" content="Ikramullah" />
      <meta property="profile:last_name" content="Karokhail" />
      <meta property="profile:username" content="Ikramullahkarokhil" />
      <meta
        property="og:site_name"
        content="Ikramullah Karokhail - Developer Portfolio"
      />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Ikramullah Karokhail - Full Stack Developer & Software Engineer"
      />
      <meta
        name="twitter:description"
        content="Explore my portfolio showcasing React, Node.js, full-stack development projects, work experience, and client testimonials"
      />
      <meta name="twitter:creator" content="@IkramullahKarokhail" />

      {/* Technical Meta Tags */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow, snippet, archive" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />

      {/* Schema.org markup for Person */}
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
            "description": "Full Stack Developer specializing in React, Node.js, and modern web technologies",
            "knowsAbout": ["JavaScript", "React", "Node.js", "Web Development", "Mobile App Development", "Full Stack Development"],
            "url": "https://ikramullahkarokhail.vercel.app",
            "sameAs": [
              "https://github.com/Ikramullahkarokhil",
              "https://www.linkedin.com/in/ikramullah-karokhil-002431245"
            ],
            "workExample": [
              {
                "@type": "SoftwareApplication",
                "name": "AdilFashion",
                "applicationCategory": "MobileApplication",
                "operatingSystem": "Android, iOS",
                "description": "A comprehensive mobile application for tailor shop management"
              },
              {
                "@type": "SoftwareApplication",
                "name": "HolyQuran",
                "applicationCategory": "MobileApplication",
                "operatingSystem": "Android, iOS",
                "description": "A multilingual Quran application featuring translations in Pashto, Dari, English, and Arabic"
              }
            ],
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Jahan University",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kabul",
                "addressCountry": "Afghanistan"
              }
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kabul",
              "addressCountry": "Afghanistan"
            },
            "hasOccupation": [
              {
                "@type": "Occupation",
                "name": "Frontend Developer",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Asan Systems"
                },
                "estimatedSalary": {
                  "@type": "MonetaryAmount",
                  "currency": "USD",
                  "value": {
                    "@type": "QuantitativeValue",
                    "minValue": 45000,
                    "maxValue": 60000,
                    "unitText": "YEAR"
                  }
                },
                "skills": "React, JavaScript, HTML, CSS, Web Development"
              },
              {
                "@type": "Occupation",
                "name": "Mobile App Developer",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Adil Fashion"
                },
                "skills": "React Native, Mobile Development, JavaScript"
              }
            ]
          }
        `}
      </script>

      {/* Schema.org markup for WebSite */}
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "name": "Ikramullah Karokhail - Full Stack Developer Portfolio",
            "url": "https://ikramullahkarokhail.vercel.app",
            "description": "Professional portfolio showcasing full-stack development projects, work experience, skills and testimonials in React, Node.js and modern web technologies.",
            "keywords": ["Full Stack Developer", "React Developer", "Node.js Developer", "Web Developer", "JavaScript", "Mobile App Developer", "Software Engineer", "Portfolio", "Ikramullah Karokhail"],
            "potentialAction": {
              "@type": "ViewAction",
              "target": [
                "https://ikramullahkarokhail.vercel.app/#about",
                "https://ikramullahkarokhail.vercel.app/#skills",
                "https://ikramullahkarokhail.vercel.app/#resume",
                "https://ikramullahkarokhail.vercel.app/#projects",
                "https://ikramullahkarokhail.vercel.app/#testimonials",
                "https://ikramullahkarokhail.vercel.app/#contact"
              ]
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
