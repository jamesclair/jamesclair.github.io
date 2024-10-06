import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Docs Home",
  description: "Personal Documentation and Blog",
  base: '/blog',
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Main Site', link: '../', target: '_self' },
      { text: 'Portfolio', link: '../portfolio/', target: '_self' },
      { text: 'Resume', link: '../resume/', target: '_self' },
    ],
    logo: 'favicon.ico',

    sidebar: [
      {
        text: 'Posts',
        items: [
          { text: 'Building a Scalable, Reliable, and Cost-Effective Real-Time Event Processing Pipeline', link: '/EventProcessingServiceArchitecure' },
          { text: 'A Deep Dive Into OL* Databases and Data Mesh', link: '/OLAP_OLEP_OLTP_And_DataMeshes' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JamesClair' }
    ]
  },
  vite: {
    server: {
      port: 3000,
    },
  },
})
