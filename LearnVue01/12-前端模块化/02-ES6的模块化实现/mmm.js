import {
    flag,sum,number
} from "./aaa.js";

if (flag){
    console.log("success using flag");
}

sum(1,2);

console.log(number);

//使用这样的导入方式会将所有export default 导出的内容进行导入
import addr from "./aaa.js"

console.log(addr);

//统一全部导入
//将所有导入的变量封装成一个对象，想取得变量，只需按照普通的对象那样取值即可
import * as aaa from './aaa.js'

console.log(aaa.sum(10,20)+" !");

