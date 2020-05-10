var name = '小明';
var age = 18;
var flag = true;

function sum(num1,num2) {
    return num1 + num2;
}

if (flag){
    console.log(sum(10,20));
}

//1、导出方式1
export {
   flag,sum
}

//2、导出方式2
export var number=1;

//export default
//某些情况下，一个模块中包含某个的功能，我们并不希望给这个功能命名。而且让导入者可以自己命名
const address="上海";
//使用export default导出的变量只能有一个
export default address
