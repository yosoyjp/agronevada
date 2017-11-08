import graphql from './';

export function secado(id){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
                secado(id: `+id+`){
                    id
                    descripcion
                }
            }
        `,
        function(req, res) {
            if(res.status === 401) {
                throw new Error('Not authorized')
            }
        })
        .then(function(body) {
            resolve(body)
        })
        .catch(function(err) {
            reject(err.message)
        })
    })
}

export function secados(){
    return new Promise( (resolve, reject) => {
        graphql.query(`
            query{
                secados{
                    id
                    descripcion
                }
            }
        `,
        function(req, res) {
            if(res.status === 401) {
                throw new Error('Not authorized')
            }
        })
        .then(function(body) {
            resolve(body)
        })
        .catch(function(err) {
            reject(err.message)
        })
    })
}