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
        res.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos Node.JS'
                    },
                    {
                        id: 2,
                        titulo: 'Node.JS avançado'
                    }
                ]
            }
        );
    });
    
};
