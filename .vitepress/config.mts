import { defineConfig } from 'vitepress'

// Served from GitHub Pages at https://mikescriptsfivem.github.io/MS_FlightSim-docs/
const BASE = '/MS_FlightSim-docs/'

const flightSim = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Introduction', link: '/ms-flightsim/' },
      { text: 'Requirements', link: '/ms-flightsim/requirements' },
      { text: 'Installation', link: '/ms-flightsim/installation' },
      { text: 'Configuration', link: '/ms-flightsim/configuration' },
      { text: 'Updating', link: '/ms-flightsim/updating' },
      { text: 'Troubleshooting', link: '/ms-flightsim/troubleshooting' },
    ],
  },
  {
    text: 'Gameplay',
    items: [
      { text: 'Player Journey', link: '/ms-flightsim/player-journey' },
      { text: 'Jobs & Missions', link: '/ms-flightsim/jobs' },
      { text: 'Cockpit & Flying', link: '/ms-flightsim/cockpit' },
    ],
  },
  {
    text: 'Airport & ATC',
    items: [
      { text: 'Air Traffic Control', link: '/ms-flightsim/atc' },
      { text: 'Airports & Airspace', link: '/ms-flightsim/airports' },
      { text: 'Ground Services', link: '/ms-flightsim/ground-services' },
      { text: 'Systems Overview', link: '/ms-flightsim/systems' },
    ],
  },
  {
    text: 'Business',
    items: [
      { text: 'Companies', link: '/ms-flightsim/companies' },
      { text: 'Economy & Pay', link: '/ms-flightsim/economy' },
    ],
  },
  {
    text: 'Server Owners',
    items: [
      { text: 'Commands & Admin', link: '/ms-flightsim/commands' },
      { text: 'Integrations & Exports', link: '/ms-flightsim/integrations' },
      { text: 'Performance', link: '/ms-flightsim/performance' },
      { text: 'Languages', link: '/ms-flightsim/languages' },
    ],
  },
  {
    text: 'Release Notes',
    items: [{ text: "What's New", link: '/ms-flightsim/changelog' }],
  },
]

export default defineConfig({
  base: BASE,
  lang: 'en-US',
  title: 'MikeScripts Docs',
  description: 'Documentation for MikeScripts FiveM resources',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',
  srcExclude: ['README.md'],
  markdown: { languageAlias: { cfg: 'ini' } },
  head: [
    ['link', { rel: 'icon', href: `${BASE}favicon.svg`, type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
  ],
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'MikeScripts Docs',
    nav: [
      { text: 'MS_FlightSim', link: '/ms-flightsim/', activeMatch: '/ms-flightsim/' },
    ],
    sidebar: {
      '/ms-flightsim/': flightSim,
    },
    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    lastUpdated: { text: 'Last updated' },
    footer: {
      message: 'MS_FlightSim is an escrowed Cfx.re resource. Support is handled through tickets in the MikeScripts Discord.',
      copyright: '© MikeScripts',
    },
  },
})
