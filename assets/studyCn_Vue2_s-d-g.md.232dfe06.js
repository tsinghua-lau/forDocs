import{_ as e,o as n,c as s,R as a}from"./chunks/framework.d95bcf44.js";const g=JSON.parse('{"title":"npm -s -d -g","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":" ","6":"基","7":"础"},"headers":[],"relativePath":"studyCn/Vue2/s-d-g.md"}'),t={name:"studyCn/Vue2/s-d-g.md"},p=a(`<h1 id="npm-s-d-g" tabindex="-1">npm -s -d -g <a class="header-anchor" href="#npm-s-d-g" aria-label="Permalink to &quot;npm -s -d -g&quot;">​</a></h1><ol><li><p>npm install XXX -s npm install XXX -s 相当于 npm install -S 相当于 npm install --save</p><pre><code> 这样安装是局部安装的，会写进package.json文件中的dependencie里。

 dependencies： 表示生产环境下的依赖管理；

 说白了你安装一个库如果是用来构建你的项目的，比如echarts、element-ui，是实际在项目中起作用，就可以使用 -s 来安装。
</code></pre></li><li><p>npm install XXX -d npm install XXX -d 相当于 npm install -D 相当于 npm install --save-dev</p><pre><code> 这样安装是局部安装的，会写进package.json文件中的devDependencies 里。

 devDependencies ：表示开发环境下的依赖管理；

 如果你安装的库是用来打包的、解析代码的，比如webpack、babel，就可以用 -d 来安装，项目上线了，这些库就没用了，不然留这些库给用户自己来打包和解析代码嘛。               
</code></pre></li><li><p>npm install XXX -g npm install XXX -g 表示全局安装，安装一次过后，你就可以在其他直接用啦。</p></li><li><p>npm install XXX npm install XXX 什么都不加的时候</p><pre><code> npm 5开始通过npm install 什么都不加 和 npm install --save一样，都是局部安装并会把模块自动写入package.json中的dependencies里。
</code></pre></li></ol>`,2),l=[p];function i(d,c,o,r,m,_){return n(),s("div",null,l)}const u=e(t,[["render",i]]);export{g as __pageData,u as default};
