import express from 'express'
import SSR from './SSR'

const app = express()

app.disable('x-powered-by')
app.use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
// SSR should always be used in the end, as it contains a catch-all rule
app.use(SSR)

export default app
