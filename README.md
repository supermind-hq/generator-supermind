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

Link `generator-supermind` within the dummy project, and then generate its boilerplate:

```bash
cd ~/Desktop/dummy-project
yarn link generator-supermind
yo supermind
```

From within the `generator-supermind` terminal window run:

```bash
yarn run watch
```

Now, any changes you make to `generator-supermind` will be immediately available to all the linked projects (so running `yo supermind` again in the `dummy-project` will apply the latest changes you've made to `generator-supermind`). 

The `generators` directory in `generator-supermind` represents the _compiled generator code_ and is deployed to `npm`, but _not_ committed to `git`.

[yarn]:https://yarnpkg.com/
