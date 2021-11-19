# Frontend artifact: 🎒 Utils

## How to use this artifact in a wrapper frontend
- create a `.npmrc`
- paste the following code
```
//npm.pkg.github.com/:_authToken=TOKEN
@goldwindev:registry=https://npm.pkg.github.com
```
- replace TOKEN with the Github token
- now any package with `@goldwindev/` prefix will target the private Goldwin Github packages

Install: `$ yarn add @goldwindev/utils`

Importing: ` import *utility* from "@goldindev/utils/*utility*" `

Type checking: add to  `tsconfig.json, compilerOptions:` of current project

```
"typeRoots": [
      "./node_modules/@goldwindev/utils/dist"
    ]
```
## Adding new utility

- create new file in src/*utility*/*utility.ts*
- if logic contains only a few and simple types, use them in the same file if not ->
- complex types should be added as global types in src/@types/index.d.ts
- add changes to package.json & webpack.config.js based on existing files

## Publishing a new version
- create a `.npmrc`
- paste the following code
```
//npm.pkg.github.com/:_authToken=TOKEN
@goldwindev:registry=https://npm.pkg.github.com
```
- replace TOKEN with the Github token
- increment the `version` in `package.json`
- make sure that tests and linting scripts are successful
- `$ npm publish`
