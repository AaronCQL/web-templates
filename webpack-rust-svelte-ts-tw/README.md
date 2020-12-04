# Webpack + Rust + Svelte + TypeScript + Tailwind

Monorepo project template for developing Svelte apps with TypeScript and Rust-generated WASM.

## Get started

This project is powered by [`wasm-pack-plugin`](https://github.com/wasm-tool/wasm-pack-plugin), and [`wasm-pack` must first be installed](https://rustwasm.github.io/wasm-pack/installer/).

Firstly, clone this template via [degit](https://github.com/Rich-Harris/degit):

```
npx degit AaronCQL/web-templates/webpack-rust-svelte-ts-tw#main my-app
```

Then, install all dependencies:

```sh
cd my-app
yarn
```

## Available scripts

### `yarn dev`

- Builds the project for development and opens it in the browser
- Auto-reloads when any code changes

### `yarn build`

- Builds the project for production and places it into the `dist` folder

### `yarn test`

- Runs unit tests for the Rust code

### `yarn svelte-check`

- Runs the [`svelte-check`](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check) utility for type checking and other diagnostics within the Svelte app

## Project structure

- **`Cargo.toml`**: contains the standard Rust metadata
  - Change this file with your details (name, description, version, authors, categories)
- **`package.json`**: contains the standard npm metadata
  - Change this file with your details (author, name, version)
- **`tsconfig.json`**: contains the TypeScript configuration
- **`webpack.config.js`**: contains the Webpack configuration
- **`tailwind.config.js`**: contains the Tailwind CSS configuration
- **`/crate` directory**: contains the Rust code
- **`/tests` directory**: contains the Rust unit tests
- **`/src` directory**: contains the Svelte code
- **`/public` directory**: contains files that will be copied as-is to the `/dist` directory
  - The metadata in `index.html` can be modified (injection of scripts and CSS will be handled by `html-webpack-plugin`)

## Acknowledgements

- [`rust-webpack-template`](https://github.com/rustwasm/rust-webpack-template)
- [`sveltejs/template-webpack`](https://github.com/sveltejs/template-webpack)
