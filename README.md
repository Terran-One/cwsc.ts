# `cwsc`: The CWScript Compiler

This repository contains the source code for `cwsc`, the standard reference implementation compiler for CWScript. `cwsc` is written in TypeScript and requires Node.js v16 or later.

## Build and installation

### Building from source

From the repository root:

```sh
npm install
npm run build # ignore the build errors from the eslint webpack dependency
npm pack
```

### Installing

```sh
npm install -g cwsc-0.1.0.tgz # double-check this is the correct version number
```

### Uninstalling

```sh
npm remove cwsc
```

## Usage

```sh
cwsc compile my-contract.cw
```

## License

CWScript, `cwsc` and its bundled toolchain are licensed under the [MIT License](LICENSE.md).

## Copyright

Copyright &copy; 2021-2022 Terran One, inc.
