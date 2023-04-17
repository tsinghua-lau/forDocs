import{_ as e,c as t,o as i,e as n}from"./app.4acad237.js";const x=JSON.parse('{"title":"","description":"","frontmatter":{"0":"进","1":"阶","2":" ","3":"基","4":"础"},"headers":[{"level":2,"title":"nextTick","slug":"nexttick","link":"#nexttick","children":[]}],"relativePath":"guide/Vue2/advanced.md","lastUpdated":1675387745000}'),a={name:"guide/Vue2/advanced.md"},l=n('<h2 id="nexttick" tabindex="-1">nextTick</h2><h4 id="为什么会有nexttick这个东西的存在" tabindex="-1">为什么会有nextTick这个东西的存在?</h4><p>因为 vue 采用的异步更新策略，当监听到数据发生变化的时候不会立即去更新DOM， 而是开启一个任务队列，并缓存在同一事件循环中发生的所有数据变更; 这种做法带来的好处就是可以将多次数据更新合并成一次，减少操作DOM的次数， 如果不采用这种方法，假设数据改变100次就要去更新100次DOM，而频繁的DOM更新是很耗性能的；</p><h4 id="宏任务" tabindex="-1">宏任务</h4><p>script （主代码块）、setTimeout 、setInterval 、setImmediate 、I/O 、UI rendering</p><h4 id="微任务" tabindex="-1">微任务</h4><p>script process.nextTick（Nodejs） 、promise 、Object.observe 、MutationObserver</p><h4 id="区别" tabindex="-1">区别</h4><ul><li><p>宏任务是每次执行栈执行的代码（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）</p></li><li><p>浏览器为了能够使得JS引擎线程与GUI渲染线程有序切换，会在当前宏任务结束之后，下一个宏任务执行开始之前，对页面进行重新渲染（宏任务 &gt; 渲染 &gt; 宏任务 &gt; ...）</p></li><li><p>微任务是在当前宏任务执行结束之后立即执行的任务（在当前 宏任务执行之后，UI渲染之前执行的任务）。微任务的响应速度相比setTimeout（下一个宏任务）会更快，因为无需等待UI渲染。</p></li></ul><p>当前宏任务执行后，会将在它执行期间产生的所有微任务都执行一遍。</p><h4 id="流程" tabindex="-1">流程</h4><ol><li>执行一个宏任务（首次执行的主代码块或者任务队列中的回调函数）</li><li>执行过程中如果遇到微任务，就将它添加到微任务的任务队列中</li><li>宏任务执行完毕后，立即执行当前微任务队列中的所有任务（依次执行）</li><li>JS引擎线程挂起，GUI线程执行渲染</li><li>GUI线程渲染完毕后挂起，JS引擎线程执行任务队列中的下一个宏任务</li></ol><h4 id="nexttick原理" tabindex="-1">nextTick原理</h4><ul><li><p>Vue中 数据变化 =&gt; DOM变化 是异步过程，一旦观察到数据变化，Vue就会开启一个任务队列，然后把在同一个事件循环 (Event loop) 中观察到数据变化的 Watcher（Vue源码中的Wacher类是用来更新Dep类收集到的依赖的）推送进这个队列。</p></li><li><p>如果这个watcher被触发多次，只会被推送到队列一次。这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和DOM操作。而在下一个事件循环时，Vue会清空队列，并进行必要的DOM更新。</p></li><li><p>nextTick的作用是为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback)，JS是单线程的，拥有事件循环机制，nextTick的实现就是利用了事件循环的宏任务和微任务。</p></li></ul><h4 id="dom操作是异步的吗" tabindex="-1">dom操作是异步的吗</h4><p>dom的操作其实是同步的，但是渲染是异步的。因为JavaScript引擎线程跟GUI渲染线程是互斥的，即我执行的时候，你就靠边站，我执行完你才能执行。</p>',16),c=[l];function d(p,o,s,r,_,h){return i(),t("div",null,c)}const k=e(a,[["render",d]]);export{x as __pageData,k as default};