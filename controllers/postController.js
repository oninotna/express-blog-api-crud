const {posts} = require('../data/posts.js');

const index = (req, res) => {
    let filteredPosts = posts;

    if(req.query.titolo) {
        filteredPosts = posts.filter(post => post.titolo.includes(req.query.titolo));
    };

    if(req.query.tags) {
    filteredPosts = posts.filter(post => post.tags.includes(req.query.tags));
    };

    if(req.query.contenuto) {
    filteredPosts = posts.filter(post => post.contenuto.includes(req.query.contenuto));
    };

    res.json(filteredPosts);
};

const show = (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    if(post === undefined) {
        res.status(404);
        res.json({
            message: 'Nessun post trovato'
        })
        return;
    }
    
    res.json(post);
};

const store = (req, res) => {
    res.json('creazione nuovo post');
};

const update = (req, res) => {
    res.json(`modifica totale del post ${req.params.id}`);
};

const modify = (req, res) => {
    res.json(`modifica parziale del post ${req.params.id}`);
};

const destroy  = (req, res) => {
    const id = parseInt(req.params.id);

    const post = posts.find(post => post.id === id);

    if(post === undefined) {
    res.status(404);
    res.json({
        message: 'Nessun post trovato'
    })
    return;
    } 

    posts.splice(posts.indexOf(post), 1);
    console.log(posts);
};

module.exports = {index, show, store, update, modify, destroy};