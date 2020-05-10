
//使用common.js的模块化规范
const {add,mul}=require('./js/mathUtils.js');

console.log(add(20, 30));
console.log(mul(20, 30));

//2、使用ES6的模块化规范
import {name,age,height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

//3、依赖css文件
require('./css/normal.css')


//如果这里没有写路径，webpack就会从node_modules里去寻找并进行引用

//5、使用Vue进行开发
import Vue from 'vue';

const app=new Vue({
    el: "#app",
    data:{
        message: "hello webpack"
    },
    template: `
       <div>
            <button>按钮</button>
       </div>
    `
})