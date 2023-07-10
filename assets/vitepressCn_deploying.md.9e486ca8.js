import{_ as s,o as a,c as l,a as n}from"./app.b47a0ee6.js";const F=JSON.parse('{"title":"VitePress\u90E8\u7F72 - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u90E8\u7F72","frontmatter":{"title":"VitePress\u90E8\u7F72 - VitePress\u4E2D\u6587\u6587\u6863","description":"VitePress\u4E2D\u6587\u6587\u6863\u4E4B\u90E8\u7F72","tags":["VitePress\u4E2D\u6587\u6587\u6863,VitePress\u90E8\u7F72"],"head":[["meta",{"name":"keywords","content":"VitePress\u4E2D\u6587\u6587\u6863,VitePress\u90E8\u7F72"}]]},"headers":[{"level":2,"title":"\u672C\u5730\u6784\u5EFA\u548C\u6D4B\u8BD5","slug":"\u672C\u5730\u6784\u5EFA\u548C\u6D4B\u8BD5"},{"level":2,"title":"Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render","slug":"netlify-vercel-aws-amplify-cloudflare-pages-render"},{"level":2,"title":"GitHub Pages","slug":"github-pages"},{"level":3,"title":"\u4F7F\u7528 GitHub Actions","slug":"\u4F7F\u7528-github-actions"},{"level":2,"title":"GitLab Pages","slug":"gitlab-pages"},{"level":3,"title":"\u4F7F\u7528 GitLab CI","slug":"\u4F7F\u7528-gitlab-ci"},{"level":2,"title":"Azure Static Web Apps","slug":"azure-static-web-apps"},{"level":2,"title":"Firebase","slug":"firebase"},{"level":2,"title":"Surge","slug":"surge"},{"level":2,"title":"Heroku","slug":"heroku"},{"level":2,"title":"Layer0","slug":"layer0"}],"relativePath":"vitepressCn/deploying.md"}'),e={name:"vitepressCn/deploying.md"},o=n(`<h1 id="\u90E8\u7F72" tabindex="-1">\u90E8\u7F72 <a class="header-anchor" href="#\u90E8\u7F72" aria-hidden="true">#</a></h1><details class="details custom-block"><summary>\u539F\u6587</summary><p>The following guides are based on some shared assumptions:</p><ul><li><p>You are placing your docs inside the docs directory of your project.</p></li><li><p>You are using the default build output location (.vitepress/dist).</p></li><li><p>VitePress is installed as a local dependency in your project, and you have set up the following scripts in your package.json:</p></li></ul></details><p>\u4E0B\u9762\u7684\u6307\u5357\u662F\u57FA\u4E8E\u4E00\u4E9B\u5171\u540C\u7684\u5047\u8BBE:</p><ul><li><p>\u4F60\u628A\u4F60\u7684\u6587\u6863\u653E\u5728\u9879\u76EE\u7684<code>docs</code>\u76EE\u5F55\u4E0B\u3002</p></li><li><p>\u4F60\u6B63\u5728\u4F7F\u7528\u9ED8\u8BA4\u7684\u6784\u5EFA\u8F93\u51FA\u4F4D\u7F6E\uFF08.vitepress/dist\uFF09\u3002</p></li><li><p>VitePress \u4F5C\u4E3A\u672C\u5730\u4F9D\u8D56\u9879\u5B89\u88C5\u5728\u60A8\u7684\u9879\u76EE\u4E2D\uFF0C\u5E76\u4E14\u60A8\u5728 package.json \u4E2D\u8BBE\u7F6E\u4E86\u4EE5\u4E0B\u811A\u672C:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:build</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress build docs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ul><details class="details custom-block"><summary>\u539F\u6587</summary><p>If your site is to be served at a subdirectory (<a href="https://example.com/subdir/" target="_blank" rel="noopener noreferrer">https://example.com/subdir/</a>), then you have to set &#39;/subdir/&#39; as the base in your docs/.vitepress/config.js.</p><p>Example: If you&#39;re using Github (or GitLab) Pages and deploying to <a href="http://user.github.io/repo/" target="_blank" rel="noopener noreferrer">user.github.io/repo/</a>, then set your base to /repo/.</p></details><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u4F60\u7684\u7F51\u7AD9\u8981\u5728\u4E00\u4E2A\u5B50\u76EE\u5F55\u4E0B\u63D0\u4F9B\u670D\u52A1( <a href="https://example.com/subdir/" target="_blank" rel="noopener noreferrer">https://example.com/subdir/</a> )\uFF0C\u90A3\u4E48\u4F60\u5FC5\u987B\u5728<code>docs/.vitepress/config.js</code>\u4E2D\u5C06<a href="/vitepressCn/config-app.html#base">base</a>\u8BBE\u7F6E<code>\u4E3A&#39;/subdir/&#39;</code>\u3002</p><p>\u4F8B\u5B50\u3002\u5982\u679C\u4F60\u4F7F\u7528Github\uFF08\u6216GitLab\uFF09\u9875\u9762\uFF0C\u5E76\u90E8\u7F72\u5230<code>user.github.io/repo/</code>\uFF0C\u90A3\u4E48\u5C06\u4F60\u7684<code>base</code>\u8BBE\u7F6E\u4E3A<code>/repo/</code>\u3002</p></div><h2 id="\u672C\u5730\u6784\u5EFA\u548C\u6D4B\u8BD5" tabindex="-1">\u672C\u5730\u6784\u5EFA\u548C\u6D4B\u8BD5 <a class="header-anchor" href="#\u672C\u5730\u6784\u5EFA\u548C\u6D4B\u8BD5" aria-hidden="true">#</a></h2><ul><li><p>\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u6784\u5EFA\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ yarn docs:build</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u6784\u5EFA\u5B8C\u6210\u540E\uFF0C\u4F60\u53EF\u4EE5\u5728\u672C\u5730\u901A\u8FC7\u8FD0\u884C\u6765\u6D4B\u8BD5\u5B83\u4EEC\uFF1A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ yarn docs:serve</span></span>
<span class="line"></span></code></pre></div></li></ul><details class="details custom-block"><summary>\u539F\u6587</summary><p>The serve command will boot up a local static web server that will serve the files from .vitepress/dist at <code>http://localhost:5000</code>. It&#39;s an easy way to check if the production build looks fine in your local environment.</p></details><p>serve \u547D\u4EE4\u5C06\u542F\u52A8\u4E00\u4E2A\u672C\u5730\u9759\u6001 Web \u670D\u52A1\u5668\uFF0C\u5B83\u5C06\u5728 <code>http://localhost:5000</code>\uFF0C\u4E3A .vitepress/dist \u7684\u6587\u4EF6\u63D0\u4F9B\u670D\u52A1\u3002\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u68C0\u67E5\u4F60\u5728\u672C\u5730\u73AF\u5883\u4E2D\u662F\u5426\u80FD\u6B63\u5E38\u8FD0\u884C\u6784\u5EFA\u5B8C\u6210\u7684\u7F51\u7AD9\u9879\u76EE\u3002</p><ul><li><p>\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F20\u9012<code>--port</code>\u4F5C\u4E3A\u4E00\u4E2A\u53C2\u6570\u6765\u914D\u7F6E\u670D\u52A1\u5668\u7684\u7AEF\u53E3:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">docs:serve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitepress serve docs --port 8080</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u73B0\u5728\uFF0C<code>docs:service</code>\u65B9\u6CD5\u542F\u52A8\u7684\u670D\u52A1\u5C06\u8FD0\u884C\u5728<code>http://localhost:8080</code>\u4E0A\u3002</p></li></ul><h2 id="netlify-vercel-aws-amplify-cloudflare-pages-render" tabindex="-1">Netlify, Vercel, AWS Amplify, Cloudflare Pages, Render <a class="header-anchor" href="#netlify-vercel-aws-amplify-cloudflare-pages-render" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>\u539F\u6587</summary><p>Set up a new project and change these settings using your dashboard:</p><ul><li>Build Command: yarn docs:build</li><li>Output Directory: docs/.vitepress/dist</li><li>Node Version: 14 (or above, by default it usually will be 14 or 16, but on Cloudflare Pages the default is still 12, so you may need to change that)</li></ul></details><p>\u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7684\u9879\u76EE\uFF0C\u5E76\u901A\u8FC7\u4F60\u7684\u63A7\u5236\u53F0\u6765\u6539\u53D8\u8FD9\u4E9B\u8BBE\u7F6E\u3002</p><ul><li>\u6784\u5EFA\u547D\u4EE4\uFF1A<code>yarn docs:build</code></li><li>\u8F93\u51FA\u76EE\u5F55\uFF1A<code>docs/.vitepress/dist</code></li><li>Node\u7248\u672C\uFF1A<code>14</code>\uFF08\u6216\u4EE5\u4E0A\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u901A\u5E38\u662F14\u621616\uFF0C\u4F46\u5728Cloudflare Pages\u4E0A\uFF0C\u9ED8\u8BA4\u8FD8\u662F12\uFF0C\u6240\u4EE5\u4F60\u53EF\u80FD\u9700\u8981\u6539\u53D8\u4E00\u4E0B\uFF09</li></ul><details class="details custom-block"><summary>\u539F\u6587</summary><p>Don&#39;t enable options like Auto Minify for HTML code. It will remove comments from output which have meaning to Vue. You may see hydration mismatch errors if they get removed.</p></details><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u4E0D\u8981\u542F\u7528 HTML \u4EE3\u7801\u7684\u81EA\u52A8\u6700\u5C0F\u5316\u7B49\u9009\u9879\u3002\u5B83\u5C06\u4ECE\u8F93\u51FA\u4E2D\u5220\u9664\u5BF9 Vue \u6709\u610F\u4E49\u7684\u6CE8\u91CA\u3002\u5982\u679C\u5B83\u4EEC\u88AB\u5220\u9664\uFF0C\u4F60\u53EF\u80FD\u4F1A\u51FA\u73B0 hydration \u540E\u4E0D\u5339\u914D\u7684\u9519\u8BEF\u3002</p></div><h2 id="github-pages" tabindex="-1">GitHub Pages <a class="header-anchor" href="#github-pages" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528-github-actions" tabindex="-1">\u4F7F\u7528 GitHub Actions <a class="header-anchor" href="#\u4F7F\u7528-github-actions" aria-hidden="true">#</a></h3><ol><li><p>\u5728\u4F60\u9879\u76EE\u7684<code>.github/workflows</code>\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>deploy.yml</code>\u7684\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B:</p><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v2</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn install --frozen-lockfile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">github_token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">publish_dir</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"></span></code></pre></div><details class="details custom-block"><summary>\u539F\u6587</summary><p>Please replace the corresponding branch name. For example, if the branch you want to build is master, then you should replace main with master in the above file.</p></details><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8BF7\u66FF\u6362\u76F8\u5E94\u7684\u5206\u652F\u540D\u79F0\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u60F3\u6784\u5EFA\u7684\u5206\u652F\u662F master\uFF0C\u90A3\u4E48\u4F60\u5E94\u8BE5\u5728\u4E0A\u8FF0\u6587\u4EF6\u4E2D\u7528 master \u66FF\u6362 main\u3002</p></div></li><li><p>\u73B0\u5728\u63D0\u4EA4<code>commit</code>\u4F60\u7684\u4EE3\u7801\uFF0C\u5E76\u5C06\u5176\u63A8\u9001<code>push</code>\u5230\u4E3B\u5206\u652F\u3002</p></li></ol><details class="details custom-block"><summary>\u539F\u6587</summary><ol start="3"><li>Wait for actions to complete. Then select gh-pages branch as GitHub Pages source in your repository settings. Now your docs will automatically deploy each time you push.</li></ol></details><ol start="3"><li>\u7B49\u5F85<code>actions</code>\u5B8C\u6210\u540E\u5728\u4ED3\u5E93\u8BBE\u7F6E<code>settings</code>\u4E2D\u9009\u62E9<code>gh-pages</code>\u5206\u652F\u4F5C\u4E3A<code>GitHub Pages</code>\u6E90\u3002\u73B0\u5728\u6BCF\u6B21\u63A8\u9001\u65F6\uFF0C\u4F60\u7684\u6587\u6863\u90FD\u4F1A\u81EA\u52A8\u90E8\u7F72\u3002</li></ol><h2 id="gitlab-pages" tabindex="-1">GitLab Pages <a class="header-anchor" href="#gitlab-pages" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528-gitlab-ci" tabindex="-1">\u4F7F\u7528 GitLab CI <a class="header-anchor" href="#\u4F7F\u7528-gitlab-ci" aria-hidden="true">#</a></h3><ol><li>\u5C06<code>docs/.vitepress/config.js</code>\u4E2D\u7684<code>outDir</code>\u8BBE\u7F6E\u4E3A<code>./public</code>\u3002</li></ol><details class="details custom-block"><summary>\u539F\u6587</summary><ol start="2"><li>Create a file called .gitlab-ci.yml in the root of your project with the content below. This will build and deploy your site whenever you make changes to your content</li></ol></details><ol start="2"><li><p>\u5728\u4F60\u7684\u9879\u76EE\u6839\u90E8\u521B\u5EFA\u4E00\u4E2A\u5185\u5BB9\u5982\u4E0B\u7684\u540D\u4E3A<code>.gitlab-ci.yml</code>\u7684\u6587\u4EF6\u3002\u8FD9\u5C06\u5728\u4F60\u5BF9\u5185\u5BB9\u8FDB\u884C\u4FEE\u6539\u65F6\u81EA\u52A8\u6784\u5EFA\u548C\u90E8\u7F72\u4F60\u7684\u7F51\u7AD9\uFF1A</p><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node:16</span></span>
<span class="line"><span style="color:#F07178;">pages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node_modules/</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn install</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">artifacts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">paths</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">only</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="azure-static-web-apps" tabindex="-1">Azure Static Web Apps <a class="header-anchor" href="#azure-static-web-apps" aria-hidden="true">#</a></h2><ol><li><p>\u9075\u5FAA<a href="https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration?tabs=github-actions" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></p></li><li><p>\u5728\u4F60\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u8FD9\u4E9B\u503C\uFF08\u5E76\u5220\u9664\u4F60\u4E0D\u9700\u8981\u7684\u503C\uFF0C\u5982\uFF1Aapi_location\uFF09</p><ul><li>app_location:<code>/</code></li><li>output_location: <code>docs/.vitepress/dist</code></li><li>app_build_command: <code>yarn docs:build</code></li></ul></li></ol><h2 id="firebase" tabindex="-1">Firebase <a class="header-anchor" href="#firebase" aria-hidden="true">#</a></h2><ol><li><p>\u5728\u4F60\u7684\u9879\u76EE\u6839\u90E8\u521B\u5EFA<code>firebase.json</code>\u548C<code>.firebaserc</code>:</p><p><code>firebase.json</code>:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">hosting</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">public</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">ignore</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>.firebaserc</code>:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">projects</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;YOUR_FIREBASE_ID&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u8FD0\u884C<code>yarn docs:build</code>\u540E\uFF0C\u8FD0\u884C\u8FD9\u4E2A\u547D\u4EE4\u6765\u90E8\u7F72:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">firebase deploy</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="surge" tabindex="-1">Surge <a class="header-anchor" href="#surge" aria-hidden="true">#</a></h2><ol><li><p>\u8FD0\u884C<code>yarn docs:build</code>\u540E\uFF0C\u8FD0\u884C\u8FD9\u4E2A\u547D\u4EE4\u6765\u90E8\u7F72:</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">npx surge docs/.vitepress/dist</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="heroku" tabindex="-1">Heroku <a class="header-anchor" href="#heroku" aria-hidden="true">#</a></h2><ol><li><p>\u6309\u7167<a href="https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static" target="_blank" rel="noopener noreferrer">heroku-buildpack-static</a>\u4E2D\u7684\u6587\u6863\u548C\u6307\u5357\u3002</p></li><li><p>\u5728\u4F60\u7684\u9879\u76EE\u6839\u90E8\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A<code>static.json</code>\u7684\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B:</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="layer0" tabindex="-1">Layer0 <a class="header-anchor" href="#layer0" aria-hidden="true">#</a></h2><p>\u53C2\u8003 <a href="https://docs.layer0.co/guides/vitepress" target="_blank" rel="noopener noreferrer">Refer Creating and Deploying a VitePress App with Layer0</a>\u3002</p>`,37),p=[o];function t(c,r,i,y,d,D){return a(),l("div",null,p)}var C=s(e,[["render",t]]);export{F as __pageData,C as default};