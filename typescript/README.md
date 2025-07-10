## Idea

Figma: [https://www.figma.com/design/XNfK3eUB089jsCpj5P5UzC/Untitled?node-id=1-2&t=HcI1Hwevxa0P4ZHi-1]

Online: [https://venerable-mandazi-d864bc.netlify.app/compares/mexico,sweden]

(its a free hostage sometimes can be slow)

This project is a web application for checking and comparing key financial indicators for different countries, inspired by the Trading Economics platform.

## Tech Stack
- SSR: Used to keep the Trading Economics API key secure on the server
- Tailwind: Chosen for allowing a rapid UI development, avoiding disorganization in css classes 

I choose:
- Current Account Balance by country (BoP, US$)
- Credit ratings
- indicator?s=bn.cab.xoka (All the countries with Current Account Balance by country)

The user should specifies countries in the URL path, example: `.../compares/sweden,mexico,new Zealand`

The component maps all countries with Current Account Balance by country and filter by the url countries

`MEX.BN.CAB.XOKA.CD,NZL.BN.CAB.XOKA.CD,SWE.BN.CAB.XOKA.CD,THA.BN.CAB.XOKA.CD`
uses these IDs to fetch the relevant historical data
[https://api.tradingeconomics.com/worldBank/historical/?s=MEX.BN.CAB.XOKA.CD,NZL.BN.CAB.XOKA.CD,SWE.BN.CAB.XOKA.CD,THA.BN.CAB.XOKA.CD&c=guest:guest]

# Starter

it needs to have:
- node
- .env

for run docker, create a folder and inside a .env

- _docker
-    .env

NUXT_PUBLIC_API_BASE_URL="https://api.tradingeconomics.com"

NUXT_API_KEY="guest:guest" << api key

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production


Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
