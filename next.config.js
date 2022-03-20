module.exports = {
  images: {
    domains: ['images-assets.nasa.gov'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search',
        permanent: true,
      },
    ]
  },
}
