# Blog

The code of my personal blog.

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

### `webapp`
This module has all the code for the webapp of the blog.


## Development
It is using Storybook as tool to develop components. To start the development, run:

```bash
yarn storybook
```