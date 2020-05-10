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
        filename: 'bundle.js',
        //加上publicPath,以后打包的项目只要涉及url时，会自动带上这个前缀
        publicPath: "dist/"
    },
    module:{
        rules: [
            //css loader只负责将css文件进行加载，并不负责使css文件生效
            //style loader负责将样式添加到DOM中
            //使用多个loader时，是从右向左读取的
            // \. 表示转义 ， $表示结尾
            { test: /\.css$/, use: ['style-loader','css-loader'] },
            {
                test: /\.(png|jpg|gif)$/,
                use:[
                    {
                        loader: "url-loader",
                        options:{
                            //当加载的图片小于limit时，会将图片编译成base64字符串形式
                            //当加载的图片大于limit时，会去寻找file-loader进行加载

                            /***
                             * 在webpack打包图片时，webpack会自动帮我们生成一个非常长的名字
                             * 这是一个32位的hash值，目的是防止名字重复
                             *
                             * 因此，我们可以在options中添加如下选项
                             * img: 文件要打包到的文件夹
                             * name: 获取图片原来的名字，放在该位置
                             * hash: 8 为防止图片名字重复，依旧使用hash，但是我们只保留8位
                             * ext：使用图片原来的扩展名
                             */
                            limit: 1000,
                            name: '/img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}