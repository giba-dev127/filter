import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(helmet.contentSecurityPolicy({
   directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline', 'unsafe-eval'"],
      imgSrc: ["'self'", "data:"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
    },
}))
app.use(cors({
   credentials: true,
   origin: 'https://giba-dev127.github.io/filter/'
}))

app.get('/', (req, res) => {
   res.send('Hello World');
 });

app.listen(1234, () => {
   console.log("Express is running on port 1234")
})