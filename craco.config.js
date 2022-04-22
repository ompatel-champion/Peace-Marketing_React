const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#f9e54c',
                            '@secondary-color': "#ffffff",
                            '@background-color': "#00000000",
                            '@link-color': "#ffffff"
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};