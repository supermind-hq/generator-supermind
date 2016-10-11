## Install Yeoman & Supermind Generator

```bash
npm install yo --global
npm install generator-supermind --global
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

## Contributing

All generator code is written in ES6 and is transpiled through Babel.

#### Clone & Link Supermind Generator

```bash
git clone https://github.com/supermind-hq/generator-supermind
cd generator-supermind
npm link
```
