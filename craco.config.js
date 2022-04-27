const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#f9e54c', // primary color for all components
                            '@secondary-text-color': "#ffffff",
                            '@background-color': "#00000000", // link color
                            '@link-color': "#f9e54c",
                            '@text-color': "#ffffff", // major text color
                            '@input-background-color': "#00000000",
                            '@input-border-color': "#000000",
                            '@button-background-color': '#f9e54c',
                            '@button-text-color': '#ffffff',
                            '@label-color': "#ffffff",
                            '@div-color': "#ffffff",
                            '@div-background-color': "#00000000"


                            // '@success-color': "#52c41a", // success state color
                            // '@warning-color': "#faad14", // warning state color
                            // '@error-color': "#f5222d", // error state color
                            // '@font-size-base': "14px", // major text font size
                            // '@heading-color': "rgba(0, 0, 0, 0.85)", // heading text color
                            // '@text-color-secondary': "rgba(0, 0, 0, 0.45)", // secondary text color
                            // '@disabled-color': "rgba(0, 0, 0, 0.25)", // disable state color
                            // '@border-radius-base': "2px", // major border radius
                            // '@border-color-base': "#d9d9d9", // major border color
                            // '@box-shadow-base': "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)", // major shadow for layers
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};