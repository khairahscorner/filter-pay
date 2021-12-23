# Scelloo Test

## Table of contents

- [Installation](#installation)
- [Design](#design)
- [Technologies](#technologies)
- [Reuseables](#reuseables)

## Installation

#### Setup

```
$ yarn install
$ yarn serve
```

#### Config params

> can be found in /.env

```
CANDIDATE_ID=your-id

```

#### Repo Structure

```
/
├─ public/
│  ├─ favicon.ico   #favicon
│  └─ index.html 
|   
├─ src/
│  ├─ assets/     # Assets
│  │  └─ icons/    # Icons used   
│  │
│  ├─ components/        # components
│  │  ├─ axios.js       # 
│  │  ├─ index.js       # 
│  │  └─ index.json   
│  │
│  ├─ styled-components/  #components using styled-components
│  │  ├─ axios.js       # 
│  │  ├─ index.js       # 
│  │  └─ index.json       # 
│  │
│  ├─ utils/                # General theming
│  │  ├─ color.json         # Colors
│  │  ├─ dimension.json     # Font sizes
│  │  └─ sizes.js           # Screen sizes (not used)
│  │
│  ├─ views/                    # Main pages
│  │  └─ DataTable.js            # Table
│  │
│  ├─ App.vue         # Main app file	    
│  ├─ main.js         # App config
│  ├─ mixins.js       # mixins
│  └─ router.js       # Routes
│
├─ .env              # Env file to add config params to (needs to be created manually)
├─ .gitignore        # List of files and folders not tracked by Git
├─ babel.config.js   # Babel config
├─ package.json      # Project config
├─ yarn.lock         # Project config
└─ README.md         # This file
```

---

## Design

Figma Link - <a href="https://www.figma.com/file/lxNl9Hj2GAOuyP4v1OMCsR/Data-Table-v2-(Community)?node-id=424%3A3085" target="_blank">Test design</a>

---

## Technologies

#### Vue

<a href="https://vuejs.org/" target="_blank">Vue</a> is a progressive JavaScript framework.


#### Styled Components

<a href="https://styled-components.com/" target="_blank">Styled Components</a> is the best bits of ES6 and CSS to style your apps without stress 💅🏾

#### Vue Router 

<a href="https://router.vuejs.org/" target="_blank">Vue Router</a>

#### Axios

<a href="https://www.npmjs.com/package/axios" target="_blank">Axios</a> is a promise based HTTP client for the browser and node.js

