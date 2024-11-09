module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['zenn.dev', 'apple-resources.s3.amazonaws.com', 'play.google.com', 'assets.st-note.com']
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      }
    })
    return config
  },
}
