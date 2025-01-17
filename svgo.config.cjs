module.exports = {
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    // disable a default plugin
                    removeViewBox: false,
                    // customize the params of a default plugin
                    inlineStyles: {
                        onlyMatchedOnce: false,
                    },
                },
            },
        },
        {
            name: 'convertColors',
            params: {
                currentColor: true,
            },
        },
        'removeDimensions',
        {
            name: 'addAttributesToSVGElement',
            params: {
                // 将以下属性添加到根部svg元素上，填色采用fill，禁用stroke填色
                attributes: [
                    {
                        stroke: 'none',
                        fill: 'currentColor',
                        width: '1em',
                        height: '1em',
                    },
                ],
            },
        },
    ],
};
