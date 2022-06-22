const express = require('express')
const app = express()
const port = 3000
// const router = express.Router

const indexRouter = require('./routes'); // router.get('/', (req, res) => { ... 을 불러옴
const userRouter = require('./routes/user'); // router.get('/', (req, res) => { ... 을 불러옴
 
app.set('port', process.env.PORT || 3000);
 
app.use('/', indexRouter); // 각기 다른 경로에 미들웨어 장착
app.use('/user', userRouter); // 각기 다른 경로에 미들웨어 장착
 
app.use((req, res, next) => { // 기본경로나 /user말고 다른곳 진입했을경우 실행
    res.status(404).send('Not Found');
});
 
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })