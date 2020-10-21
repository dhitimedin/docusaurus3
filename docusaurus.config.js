module.exports = {
  title: 'MCOMS',
  tagline: 'The tagline of my site',
  url: 'https://dhitimedin.github.io',
  baseUrl: '/docusaurus3/',
  onBrokenLinks: 'throw',
  favicon: 'img/Mcoms_SquareSun_Black.png',
  organizationName: 'Dhitimedin', // Usually your GitHub org/user name.
  projectName: 'docusaurus3', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'MCOMS Logo',
        src: 'img/Mcoms_SquareSun_Black.png',
        srcDark: 'img/Mcoms_SquareSun_White.png',
      },
      hideOnScroll: true,      
      items: [
          {
            activeBaseRegex: 'hi',
            prependBaseUrlToHref: 'true',  
          },
        /*{
          to: 'docs/',
          //activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },*/
        {
          type: 'docsVersionDropdown',
          position: 'right',
          //to: "/", // by default, link to active/latest version
          //label: "हिंदी" // by default, show active/latest version label          
        },                
      ],
    },
    announcementBar: {
      id: 'download', // Any value that will identify this message.
      content:
        '<a href="/docusaurus3/img/HindiVersion.pdf" target="_blank">|| पीडीएफ प्रारूप में इस वेबसाइट के हिंदी संस्करण की सामग्री डाउनलोड करें ||</a><a href="/docusaurus3/img/EnglishVersion.pdf" target="_blank"> || Download content of English Version this websites  in PDF format ||</a>',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },      
    footer: {
      style: 'dark',
     /* links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],*/
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: [
    [require.resolve('@cmfcmf/docusaurus-search-local'), {
      //blogRouteBasePath: '/blog', // must correspond to the base route path configured for the blog plugin
      docsRouteBasePath: '/docs', // must correspond to the base route path configured for the docs plugin
      //indexBlog: true, // whether to index blog pages
      indexDocs: true, // whether to index docs pages
      indexPages: false, // whether to index static pages
      // /404.html is never indexed
      language: "en" // language of your documentation, see next section
    }]
  ],  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          //path: './docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/', // Set this value to '/'.
          //homePageId: 'welcome',           
          editUrl: '/',
          lastVersion: "current",    
          versions: { 
            current: {
              label: 'हिंदी',
              //path: 'hi',
            },
          'English': {
            label: 'English',
            path: 'en',
            }, 
          },    
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
