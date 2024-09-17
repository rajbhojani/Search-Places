# Search Places

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

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
## Environment Configuration

Before running the server, you need to configure the environment variables.

### Steps to Set Up

1. **Create a `.env` File**

   In the root directory of your project, create a file named `.env`.

2. **Add Environment Variable**

   Open the `.env` file and add the following line:

   ```env
   RAPIDAPI_KEY=your_rapidapi_key_here

Replace `YOUR_RAPIDAPI_KEY` with the API key you obtain from [RapidAPI](https://rapidapi.com/wirefreethought/api/geodb-cities).


## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

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
pnpm run build

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
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
