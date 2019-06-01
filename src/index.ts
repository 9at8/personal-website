import express from 'express'

// this require is necessary for server HMR to recover from error
// tslint:disable-next-line:no-var-requires
let app = require('./server').default

/* tslint:disable:no-console */
if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...')
    try {
      app = require('./server').default
    } catch (error) {
      console.error(error)
    }
  })
  console.info('✅  Server-side HMR Enabled!')
}

const port = process.env.PORT || 3000

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(port, () => console.log(`> Started on port ${port}`))

if (process.env.NODE_ENV === 'production') {
  console.log(__dirname)
}

/* tslint:enable:no-console */
