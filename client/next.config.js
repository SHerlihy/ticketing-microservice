const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' https://connect-js.stripe.com https://js.stripe.com;
  frame-src https://connect-js.stripe.com;
  style-src 'self' 'unsafe-unline';
  font-src 'self';  
`
const CSPSecurityHeader = {
  key: 'Content-Security-Policy',
  value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
}

const securityHeaders = [CSPSecurityHeader]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
}
