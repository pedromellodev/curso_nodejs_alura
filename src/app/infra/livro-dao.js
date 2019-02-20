class LivroDAO {

    constructor(db) {
        this._db = db;
    }

    lista() {
        // instância de uma Promise
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros', 
                (error, result) => {
                    if (error) return reject('Não foi possível listar os livros!');

                    return resolve(result);
                }
            )
        });
    };
};

module.exports = LivroDAO;