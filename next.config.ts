import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.linzip.com',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'cdn.jsdelivr.net',
                pathname: '**'
            }
        ],
        formats: ['image/avif', 'image/webp']
    },
    async rewrites() {
        return [
            {
                source: '/feed',
                destination: '/feed.xml'
            },
            {
                source: '/rss',
                destination: '/feed.xml'
            },
            {
                source: '/rss.xml',
                destination: '/feed.xml'
            }
        ];
    }
};

export default nextConfig;
