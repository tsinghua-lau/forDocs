---
title 基础
---

# npm -s -d -g

1. npm install XXX -s 
        npm install XXX -s 相当于 npm install -S 相当于 npm install --save

        这样安装是局部安装的，会写进package.json文件中的dependencie里。

        dependencies： 表示生产环境下的依赖管理；

        说白了你安装一个库如果是用来构建你的项目的，比如echarts、element-ui，是实际在项目中起作用，就可以使用 -s 来安装。

2. npm install XXX -d
        npm install XXX -d 相当于 npm install -D 相当于 npm install --save-dev

        这样安装是局部安装的，会写进package.json文件中的devDependencies 里。

        devDependencies ：表示开发环境下的依赖管理；

        如果你安装的库是用来打包的、解析代码的，比如webpack、babel，就可以用 -d 来安装，项目上线了，这些库就没用了，不然留这些库给用户自己来打包和解析代码嘛。               

3. npm install XXX -g
        npm install XXX -g 表示全局安装，安装一次过后，你就可以在其他直接用啦。

4. npm install XXX
        npm install XXX   什么都不加的时候

        npm 5开始通过npm install 什么都不加 和 npm install --save一样，都是局部安装并会把模块自动写入package.json中的dependencies里。