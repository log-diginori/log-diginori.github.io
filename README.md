# grep -E 'oepn|source|mind' log.diginori.log
- https://log.diginori.com
- Technical Blog of digiNORI

# Technical stack
## [vuepress v2.0.0-beata53](https://v2.vuepress.vuejs.org)
- Vue3
- node
- yarn
- a writing talent and [spell checker](http://speller.cs.pusan.ac.kr/)

# Getting Started with Development
```
git clone https://github.com/log-diginori/log-diginori.github.io.git
```
```
cd log-diginori.github.io.git
```
```
yarn install
```
```
yarn run docs:dev
```
> yarn run v1.22.19

> $ vuepress dev docs

> ✔ Initializing and preparing data - done in 75ms

>  vite v3.1.8 dev server running at:

>  ➜  Local:   http://localhost:8080/

# Distribute and show off
```
git branch page
```
```
git checkout page
```
```
yarn run docs:build
```
> yarn run v1.22.19

> $ vuepress build docs

> ✔ Initializing and preparing data - done in 77ms

> ✔ Compiling with vite - done in 1.76s

> ✔ Rendering 2 pages - done in 59ms

> success VuePress build completed in 1.92s!

> ✨  Done in 2.49s.

```
rm -rf docs/*
```
```
mv docs/.vuepress/dist/* docs/
```
```
$ tree docs 
docs
├── 404.html
├── assets
│   ├── 404.html.cde49078.js
│   ├── 404.html.d2dc3323.js
│   ├── a.cc6380d7.webp
│   ├── app.f460780e.js
│   ├── back-to-top.8efcbe56.svg
│   ├── crowd.03a3b0df.webp
│   ├── dooray.b7bc7577.webp
│   ├── index.html.398d577d.js
│   ├── index.html.b123705f.js
│   └── style.e06f2840.css
├── images
│   └── nhnforword
│       ├── a.webp
│       ├── bus.webp
│       ├── crowd.webp
│       ├── dooray-g.webp
│       ├── dooray.webp
│       ├── goods-1.webp
│       ├── sweatsuit.webp
│       ├── talk.webp
│       └── vue.webp
└── index.html
```
```
git push --set-upstream origin page
```
- last distribute step : github page setting

# Happy hacking
