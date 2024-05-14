import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fly.io 使用手册",
  description: "Fly.io 使用手册",
  cleanUrls: true,
  base: '/docs.fly.io/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: 'deep',
    nav: [
      { text: 'Pricing', link: '/about/pricing' },
      { text: 'Support', link: '/about/support' },
    ],

    sidebar: [
      {text: 'Index', link: '/'},
      {
        text: 'Getting started',
        link: '/getting-started/',
        collapsed: true,
        items: [
          { text: 'Speedrun: Launch on Fly.io', link: '/getting-started/' },
          { 
            text: 'Hands-on with Fly.io',
            link: '/',
            base: '/hands-on',
            collapsed: true,
            items: [
              {text: '1. Install flyctl', link: '/install-flyctl'},
              {text: '2. Sign up / Sign in', link: '/sign-up-sign-in'},
              {text: '3. Launch app', link: '/launch-app'},
              {text: '4. Check app status', link: '/check-app-status'},
              {text: '5. Visit app', link: '/open-app'},
              {text: '6. Deploy changes', link: '/deploy-app'},
              {text: '7. Learn more', link: '/next'},
            ] 
          },
          {
            text: 'Troubleshooting Deployments',
            collapsed: false,
            link: '/getting-started/troubleshooting/'
          }
        ]
      },
      {text: 'blueprints', link: '/', base: '/blueprints', collapsed: false,
        items: [
          {text: 'Git Branch Preview Environments on Github', link: '/review-apps-guide'},
          {text: 'Run an ssh server', link: '/opensshd'},
          {text: 'Crontab with Supercronic', link: '/supercronic'}
        ]
      },
      { text: 'About', link: '/', base: '/about', collapsed: false,
        items: [
          {text: 'Pricing', link: '/pricing'},
          {text: 'Support', link: '/support'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
