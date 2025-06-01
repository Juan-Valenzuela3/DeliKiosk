/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            }
        ]
    },
    // Mejoras para desarrollo y producción
    productionBrowserSourceMaps: false,
    experimental: {
        optimizePackageImports: ['react-toastify']
    },
    webpack: (config, { dev }) => {
        if (dev) {
            // Silenciar warnings innecesarios en desarrollo
            config.ignoreWarnings = [
                { module: /node_modules\/react-toastify/ },
                { file: /react-toastify/ }
            ];
        }
        return config;
    }
};

export default nextConfig;
