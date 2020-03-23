module.exports = (api, options, rootOptions) => {
    // 安装一些基础公共库
    api.extendPackage({
        dependencies: {
            "axios": "^0.18.0",
            "lodash": "^4.17.10",
            "keymirror": "^0.1.1"
        },
        devDependencies: {
            "mockjs": "^1.0.1-beta3"
        }
    });

    // 安装 vuex
    if (options.vuex) {
        api.extendPackage({
            dependencies: {
                vuex: '^3.0.1'
            }
        });

        api.render('./template/vuex');
    }

    // 安装 element-ui 库
    if (options.elementUI) {
        api.extendPackage({
            devDependencies: {
                "element-ui": "^2.4.6"
            }
        });
    }

    // 公共基础目录和文件
    // api.render('./template');

    // 配置文件
    api.render({
        './src/main.js': './template/src/main.s',        
    });
}
