const { Router } = require('express');

const items = [
    {
        "id": 1,
        "name": "Vio"
    },
    {
        "name": "Joah",
        "id": 2
    },
    {
        "name": "Joash",
        "id": 3
    },
    {
        "name": "Jowash",
        "id": 4
    },
    {
        "id": 5,
        "name": "Vio"
    },
    {
        "name": "Joah",
        "id": 6
    },
    {
        "name": "Joash",
        "id": 7
    },
    {
        "name": "Jowash",
        "id": 8
    },
    {
        "id": 9,
        "name": "Vio"
    },
    {
        "name": "Joah",
        "id": 10
    },
    {
        "name": "Joash",
        "id": 11
    },
    {
        "name": "Jowash",
        "id": 12
    },
    {
        "id": 13,
        "name": "Vio"
    },
    {
        "name": "Joah",
        "id": 14
    },
    {
        "name": "Joash",
        "id": 15
    },
];

const attach = (app) => {
    const router = new Router();
    router
        .get('/', (req, res) => {
            let {
                q,
                page,
                size
            } = req.query;
            page = +page || 1;
            size = +size || 10;

            let result = items;
            if (q) {
                q = q.toLowerCase();
                result = 
                    result.filter((item) => {
                        return item.name.toLowerCase().includes(q);
                    });
            }
            result = result.slice((page - 1) * size, page * size);
            res.send(result);
        })
        // .get('/', (req, res) => {
        //     let q = req.query.q;
        //     let result = items;
        //     if (q) {
        //         q = q.toLowerCase();
        //         result = 
        //             result.filter((item) => {
        //                 return item.name.toLowerCase().includes(q);
        //             });
        //     }
        //     res.send(result);
        // })
        .get('/:id', (req, res) => {
                const id = +req.params.id;
                const item = items.find((i) => i.id == id);
                if(!item) {
                    return res
                        .status(404)
                        .send({
                            error: 'Not found bre'
                        });
                    
                }
                return res.send(item);
            })
        .post('/', (req, res) => {
            const item = req.body;
            item.id = items.length + 1;
            items.push(item);
            res.status(201)
                .send(item);
        });
        app.use('/api/items', router);

};

module.exports = attach;

