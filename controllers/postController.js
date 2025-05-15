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
    const {titolo, contenuto, immagine, tags} = req.body;

    let newId = 0;
    for (post of posts) {
        if (post.id > newId) newId = post.id;
    };

    const newPost = {id: newId +1, titolo, contenuto, immagine, tags};
    posts.push(newPost);

    console.log(newPost);
    
    res.json(posts);
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
    res.sendStatus(204);

    console.log(posts);
};

module.exports = {index, show, store, update, modify, destroy};