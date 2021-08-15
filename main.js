const express = require('express');
const app = express();
const cors = require('cors')
const userRouter = require('./routers/userRouter')
require('./configs/database.js');
app.use(cors());
app.use(express.json());
app.use('/api/users', userRouter)
app.listen(8000, () => {
    console.log('listening on port 8000');
})