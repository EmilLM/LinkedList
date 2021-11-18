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

Example: `$ yarn add @goldwindev/utils`

For type checking add to `tsconfig.json, compilerOptions:`

```
"typeRoots": [
      "./node_modules/@goldwindev/utils/types"
    ]
```
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
