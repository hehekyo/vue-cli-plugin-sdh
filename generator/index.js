module.exports = (api, options, rootOptions) => {
    // 安装一些基础公共库
    api.extendPackage({
        dependencies: {
            "axios": "^0.18.0",
            "lodash": "^4.17.10",
            "keymirror": "^0.1.1"
        },
        devDependencies: {
            "mockjs": "^1.0.1-beta3",
            "postcss-px2rem": "^0.3.0",
            '@types/express': '^4.16.0',
            '@types/webpack-chain': '^4.8.1',
            'cross-env': '^5.2.0',
            'mockjs': '^1.0.1-beta3',
            'express': '^4.16.4',
            'mocker-api': '^1.6.6'
        }
    });

    // 安装 vuex
    // if (options.vuex) {
    //     api.extendPackage({
    //         dependencies: {
    //             vuex: '^3.0.1'
    //         }
    //     });

    //     api.render('./template/vuex');
    // }

    // 安装 element-ui 库
    // if (options.elementUI) {
    //     api.extendPackage({
    //         devDependencies: {
    //             "element-ui": "^2.4.6"
    //         }
    //     });
    // }

    // 公共基础目录和文件
    api.render('./template');
    // 配置文件  
}
