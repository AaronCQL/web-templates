# Preact CLI + TypeScript

Minimal project template for developing Preact apps with TypeScript, powered by [`preact-cli`](https://github.com/preactjs/preact-cli) ([see available features](https://github.com/preactjs/preact-cli#features)).

## Get started

Firstly, clone this template via [degit](https://github.com/Rich-Harris/degit):

```
npx degit AaronCQL/web-templates/preact-ts#main my-app
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

- Builds the project for production and places it into the `build` folder

### `yarn serve`

- Serves the built project (run after `yarn build` to test the production build)

### `yarn lint`

- Lints the code within the `/src` folder

## Project structure

- **`package.json`**: contains the standard npm metadata
  - Change this file with your details (author, name, version)
- **`tsconfig.json`**: contains the TypeScript configuration
- **`/src` directory**: contains the React code

## Acknowledgements

- [`preact-cli`](https://github.com/preactjs/preact-cli)
- [`preactjs-templates/typescript`](https://github.com/preactjs-templates/typescript)
