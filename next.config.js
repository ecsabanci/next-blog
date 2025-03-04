/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s3.amazonaws.com', 'images.credly.com', 'cdn.filestackcontent.com'],
    },
}

module.exports = nextConfig 