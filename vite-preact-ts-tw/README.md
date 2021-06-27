# Vite + Preact + TypeScript + Tailwind

Minimal project template for developing Preact apps with TypeScript, powered by [`vite`](https://vitejs.dev/).

## Get started

Firstly, clone this template via [degit](https://github.com/Rich-Harris/degit):

```
npx degit AaronCQL/web-templates/vite-preact-ts-tw#main my-app
```

Then, install all dependencies:

```sh
cd my-app
yarn
```

## Available scripts

### `yarn dev`

- Builds the project for development
- Auto-reloads when any code changes

### `yarn build`

- Builds the project for production and places it into the `dist` folder

### `yarn serve`

- Serves the built project (run after `yarn build` to test the production build)

### `yarn lint`

- Lints the code within the `/src` folder

## Project structure

- **`package.json`**: contains the standard npm metadata
  - Change this file with your details (author, name, version)
- **`tsconfig.json`**: contains the TypeScript configuration
- **`vite.config.ts`**: contains the Vite configuration
- **`/src` directory**: contains the Preact code

## Acknowledgements

- [`vite`](https://vitejs.dev/)
