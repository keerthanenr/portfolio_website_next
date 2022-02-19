module.exports = {
    async redirects() {
        return [
            {
                source: '/calendar',
                destination: 'https://calendly.com/keerthanen/30min',
                permanent: true,
            },
        ]
    },
}