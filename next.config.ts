import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgo: true,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'preset-default',
                                    params: {
                                        overrides: {
                                            // 禁用移除 viewBox 的默认行为
                                            removeViewBox: false,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        });

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.linzip.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                pathname: '**',
            },
        ],
        formats: ['image/avif', 'image/webp'],
    },
    async rewrites() {
        return [
            {
                source: '/feed',
                destination: '/feed.xml',
            },
            {
                source: '/rss',
                destination: '/feed.xml',
            },
            {
                source: '/rss.xml',
                destination: '/feed.xml',
            },
        ];
    },
};

export default nextConfig;
