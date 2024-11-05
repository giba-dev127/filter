import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(helmet.contentSecurityPolicy({
   directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      imgSrc: ["'self'", "data:"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
    },
}))
app.use(cors({
   credentials: true,
   origin: 'http://localhost:5173/filter'
}))

app.listen(1234, () => {
   console.log("Express is running on port 1234")
})