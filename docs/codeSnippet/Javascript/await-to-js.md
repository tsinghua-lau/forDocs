### await-to-js 

## 模拟


```javascript
const getUserList = (userId) => {
    return new Promise((resolve, reject) => {
        if (userId) {
            resolve(userId);
        }
        reject("userId error");
    });
},


async function asyncTask() {
    try {
        const data = await getUserList(null);
    } catch (error) {
        console.log(error);  // userId error
    }
}
```

## 使用
```javascript
npm i await-to-js --save

async function asyncTask() {
    const [err, data] = await to(getUserList(null));
    console.log(err);  // userId error
    console.log(data);
}

```

上面的代码转换成 `await-to-js` 的形式，可以看到代码更加简洁，而且不用写 `try catch` 了，这样就可以避免 `try catch` 带来的性能问题。

异步函数   `getUserList(null)` 的结果作为参数 传入to函数，to函数返回一个数组，数组的第一个元素是错误信息，第二个元素是正确的结果。

如果没有错误，第一个元素为undefined，如果有错误，第一个元素为错误信息。




