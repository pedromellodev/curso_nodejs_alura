const LivroDAO = require('../infra/livro-dao');
const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function (req, res) {
        res.marko(
            require('../views/livros/livro/livro.marko')
        );
    });

    app.get('/home', function (req, res) {
        res.marko(
            require('../views/livros/home/home.marko')
        );
    });

    app.get('/livros', function (req, res) {

        const livroDAO = new LivroDAO(db);

        livroDAO.lista()
            .then(livros => res.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: livros
                }
            ))
            .catch(error => console.log(error));
    });

};
