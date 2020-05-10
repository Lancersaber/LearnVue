const path= require('path');

//这个配置是在使用webpack进行打包时直接使用webpack指令即可，而不用每次都指定后面的目标文件以及生成的文件
//webpack是开发时依赖，运行时并不需要

//package.json中的scripts的脚本在执行时，会按照移到的顺序寻找命令对应的位置
    //首先，会寻找本地的node_modules/.bin路径中对应的命令
    //如果没有找到，会去全局的环境变量中寻找

//webpack用来做什么？
/**
 * webpack用来做什么？
 *  1、可以帮我们处理写的js代码，并且webpack会自动处理js之间相关的依赖
 *
 * loader使用过程
 * 1、通过npm安装需要使用的loader
 * 2、在webpack.config.js中的modules关键字下进行配置
 */
module.exports={
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}