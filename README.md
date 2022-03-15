# Codename: bicycle

A pair/mob programming tool.

## Developing

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Run the playwright tests:

```shell
npm run test
```

Run svelte-check:

```shell
npm run check

# or run it in watch mode
npm run check:watch
```

Run prettier check and eslint:
```shell
npm run lint
```

Format the code using prettier:
```shell
npm run format
```

## Building

To create a production version of the app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

