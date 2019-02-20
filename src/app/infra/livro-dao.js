class LivroDAO {

    constructor(db) {
        this._db = db;
    }

    delete(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                DELETE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível deletar o livro!');
                }

                resolve();
            });
        });
    };

    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    };

    adiciona(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (?,?,?)
                `,[
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                function (error) {
                    if (error) {
                        console.log(error);
                        return reject('Não foi possível listar os livros!');
                    }

                    resolve();
                } 
            )
        });
    };
    
    buscaPorId(id) {

        return new Promise((resolve, reject) => {
            this._db.get(
                `
                    SELECT *
                    FROM livros
                    WHERE id = ?
                `,
                [id],
                (erro, livro) => {
                    if (erro) {
                        return reject('Não foi possível encontrar o livro!');
                    }
                    return resolve(livro);
                }
            );
        });
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