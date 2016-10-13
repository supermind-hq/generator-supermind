## Installation

```bash
npm install yo generator-supermind --global
```

## Project Generator

```bash
mkdir awesome-project
cd awesome-project
yo supermind
```

## Sub Generators

#### Linting

```bash
yo supermind:linting
```

#### Packager

```bash
yo supermind:packager
```

#### React Component

```bash
yo supermind:component component-name
```

#### React Container

```bash
yo supermind:container container-name
```

#### React Router Route

```bash
yo supermind:route route-name
```

#### Redux State Node

```bash
yo supermind:state state-name
```

## Development

```
git clone https://github.com/supermind-hq/generator-supermind
cd generator-supermind
```

We use [yarn][yarn] to manage our project dependencies. To install yarn:

```bash
npm install yarn --global
```

Next install the project dependencies with yarn:

```bash
yarn install
```

To make the generator available globally on your system run:

```bash
yarn link
```

Open up a new terminal window and create a dummy project somewhere else on your system:

```bash
mkdir ~/Desktop/dummy-project
```

Link `generator-supermind` within the dummy project:

```bash
cd ~/Desktop/dummy-project
yarn link generator-supermind
```

All generator code is written in ES6 and is transpiled through Babel.

From within the `generator-supermind` terminal window run:

```bash
yarn run watch
```

This command will run a `gulp` script that watches the source directory for changes, compile any generator code and copy across any template files into a `generators` folder at the root of the project.

The `generators` directory is deployed to `npm`, but _not_ committed to `git`.

[yarn]:https://yarnpkg.com/
