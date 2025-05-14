const express = require('express');
// const {posts} = require("./posts");
const postsRouter = require('./routers/posts.js');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// app.get('/bacheca', (req, res) => {
//     res.send(posts);
// });

app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log('app listening on port' + " " + port);
});