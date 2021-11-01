const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger/swagger.json');


const app = express()
const port = process.env.PORT || 4000
swaggerDocument.host = process.env.HOST

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port', port)
    console.log(`See API docs at http://${process.env.HOST}/api-docs`)
})
