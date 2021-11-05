# Blog

The code of my personal blog. **Is a working in progress.**

## Roadmap

1. [x] Configure the basics to create a article
2. [ ] Create a first good article
3. [ ] Create the initial architecture
4. [ ] Create the minimum of the code to make it work
5. [ ] Deploy it

## Installation

1. Install [Vale](https://docs.errata.ai/vale/install)

2. Install project
```bash
yarn install
```

## Architecture

This project is using Lerna + Yarn Monorepo to maintain a monorepo strategy.
Each folder represents a module in the project. 

### `posts`
This module has all the posts of the blog.