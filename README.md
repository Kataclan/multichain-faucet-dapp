<p align="center">
  <img src="img/logo-192x192.png" width="200" alt="openfaucet" />
</p>

# Open Faucet - Opensource One-per-address Token faucet

This projects aims to be a template for a One-per-address Token Faucet DApp with multichain support. 

Users can fill in the environment files with the addresses of their faucet contracts and their token for each chain, and thus adapt it to their needs.

## How to build

In order to build the project with your contract addresses, you will need first to clone this repository into a local folder and follow this steps:

### Step one: change enviroment variables

Open `.env.production` file and you will see a series of TODOs in order to setup the project for your token. 

You will need to add the token & faucet contract addresses for each chain you want to make it work in that chain.

If the faucet or token contracts addresses are left empty, they won't appear in the network selector and the website will show an error message in the middle of the screen.

If you would want to run the project locally, then you will need to update `.env.development` too.


### Step two: install packages

You need to install node packages before building the project. You can do it with `yarn` or `npm`

#### Npm

```bash
npm install
```

#### Yarn

```bash
yarn
```

### Step three: Build

You need to run the build commands in order to generate `/build` folder with the app bundle. You can do it within the following ways:

#### Npm

```bash
npm build
```

#### Yarn

```bash
yarn build
```

#### react-scripts

```bash
react-scripts build
```

### Step four: Serve

Now you need to copy all the files of generated `build` folder to your server root folder. It contains all the compiled js & css files, the hmtl and the images. 


## How to run

You can also run the project locally in order to check it before deploy. You only need to run one of this commands after having installed the packages:

#### Yarn

```bash
yarn start
```

#### npm

```bash
npm start
```

It will open a new browser window and serve a temporary builded package from your local code. This is the `development enviroment`, so the variables it will grab are in `.env.development`.

(If you are running the project locally and change some enviroment variables, you will need to restart it to see the changes)


