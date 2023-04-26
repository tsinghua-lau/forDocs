---
title: VitePress部署 - VitePress中文文档
description: VitePress中文文档之部署
tags: 
  - VitePress中文文档,VitePress部署
head:
  - - meta
    - name: keywords
      content: VitePress中文文档,VitePress部署
---

# 部署

::: details 原文
The following guides are based on some shared assumptions:

* You are placing your docs inside the docs directory of your project.

* You are using the default build output location (.vitepress/dist).

* VitePress is installed as a local dependency in your project, and you have set up the following scripts in your package.json:
:::

下面的指南是基于一些共同的假设:

* 你把你的文档放在项目的`docs`目录下。

* 你正在使用默认的构建输出位置（.vitepress/dist）。

* VitePress 作为本地依赖项安装在您的项目中，并且您在 package.json 中设置了以下脚本:

    ``` json
    {
      "scripts": {
        "docs:build": "vitepress build docs",
        "docs:serve": "vitepress serve docs"
      }
    }
    ```

::: details 原文
If your site is to be served at a subdirectory (https://example.com/subdir/), then you have to set '/subdir/' as the base in your docs/.vitepress/config.js.

Example: If you're using Github (or GitLab) Pages and deploying to user.github.io/repo/, then set your base to /repo/.
:::

::: tip
如果你的网站要在一个子目录下提供服务( https://example.com/subdir/ )，那么你必须在`docs/.vitepress/config.js`中将[base](/vitepressCn/config-app#base)设置`为'/subdir/'`。

例子。如果你使用Github（或GitLab）页面，并部署到`user.github.io/repo/`，那么将你的`base`设置为`/repo/`。
:::

## 本地构建和测试

* 使用如下命令构建：

    ``` sh
    $ yarn docs:build
    ```

* 构建完成后，你可以在本地通过运行来测试它们：

    ``` sh
    $ yarn docs:serve
    ```

::: details 原文
The serve command will boot up a local static web server that will serve the files from .vitepress/dist at `http://localhost:5000`. It's an easy way to check if the production build looks fine in your local environment.
:::

serve 命令将启动一个本地静态 Web 服务器，它将在 `http://localhost:5000`，为 .vitepress/dist 的文件提供服务。这个方法可以检查你在本地环境中是否能正常运行构建完成的网站项目。

* 你可以通过传递`--port`作为一个参数来配置服务器的端口:

    ``` json
    {
      "scripts": {
        "docs:serve": "vitepress serve docs --port 8080"
      }
    }
    ```
    现在，`docs:service`方法启动的服务将运行在`http://localhost:8080`上。

## Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render

::: details 原文
Set up a new project and change these settings using your dashboard:

* Build Command: yarn docs:build
* Output Directory: docs/.vitepress/dist
* Node Version: 14 (or above, by default it usually will be 14 or 16, but on Cloudflare Pages the default is still 12, so you may need to change that)
:::

建立一个新的项目，并通过你的控制台来改变这些设置。

* 构建命令：`yarn docs:build`
* 输出目录：`docs/.vitepress/dist`
* Node版本：`14`（或以上，默认情况下通常是14或16，但在Cloudflare Pages上，默认还是12，所以你可能需要改变一下）

::: details 原文
Don't enable options like Auto Minify for HTML code. It will remove comments from output which have meaning to Vue. You may see hydration mismatch errors if they get removed.
:::

::: warning
不要启用 HTML 代码的自动最小化等选项。它将从输出中删除对 Vue 有意义的注释。如果它们被删除，你可能会出现 hydration 后不匹配的错误。
:::

## GitHub Pages

### 使用 GitHub Actions 

1. 在你项目的`.github/workflows`目录下创建一个名为`deploy.yml`的文件，内容如下:

    ``` yaml
    name: Deploy

    on:
      push:
        branches:
          - main

    jobs:
      deploy:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v3
            with:
              node-version: 16
              cache: yarn
          - run: yarn install --frozen-lockfile

          - name: Build
            run: yarn docs:build

          - name: Deploy
            uses: peaceiris/actions-gh-pages@v3
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: docs/.vitepress/dist
    ```
    ::: details 原文
    Please replace the corresponding branch name. For example, if the branch you want to build is master, then you should replace main with master in the above file.
    :::

    ::: tip
    请替换相应的分支名称。例如，如果你想构建的分支是 master，那么你应该在上述文件中用 master 替换 main。
    :::

2. 现在提交`commit`你的代码，并将其推送`push`到主分支。

::: details 原文
3. Wait for actions to complete. Then select gh-pages branch as GitHub Pages source in your repository settings. Now your docs will automatically deploy each time you push.
:::

3. 等待`actions`完成后在仓库设置`settings`中选择`gh-pages`分支作为`GitHub Pages`源。现在每次推送时，你的文档都会自动部署。

## GitLab Pages

### 使用 GitLab CI

1. 将`docs/.vitepress/config.js`中的`outDir`设置为`./public`。

::: details 原文
2. Create a file called .gitlab-ci.yml in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content
:::

2. 在你的项目根部创建一个内容如下的名为`.gitlab-ci.yml`的文件。这将在你对内容进行修改时自动构建和部署你的网站：

    ``` yaml
    image: node:16
    pages:
      cache:
        paths:
          - node_modules/
      script:
        - yarn install
        - yarn docs:build
      artifacts:
        paths:
          - public
      only:
        - main
    ```

## Azure Static Web Apps

1. 遵循[官方文档](https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration?tabs=github-actions)

2. 在你的配置文件中设置这些值（并删除你不需要的值，如：api_location）
    * app_location:`/`
    * output_location: `docs/.vitepress/dist`
    * app_build_command: `yarn docs:build`

## Firebase

1. 在你的项目根部创建`firebase.json`和`.firebaserc`:

    `firebase.json`:

    ``` json
    {
      "hosting": {
        "public": "docs/.vitepress/dist",
        "ignore": []
      }
    }
    ```

    `.firebaserc`:

    ``` json
    {
      "projects": {
        "default": "<YOUR_FIREBASE_ID>"
      }
    }
    ```

2. 运行`yarn docs:build`后，运行这个命令来部署:

    ``` sh
    firebase deploy
    ```

## Surge

1. 运行`yarn docs:build`后，运行这个命令来部署:

    ``` sh
    npx surge docs/.vitepress/dist
    ```

## Heroku

1. 按照[heroku-buildpack-static](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static)中的文档和指南。

2. 在你的项目根部创建一个名为`static.json`的文件，内容如下:

    ``` json
    {
      "root": "docs/.vitepress/dist"
    }
    ```

## Layer0

参考 [Refer Creating and Deploying a VitePress App with Layer0](https://docs.layer0.co/guides/vitepress)。