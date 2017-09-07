const attach = (app) => {
    app.get('/', (req, res) => {
        res
            .status(404)
            .send("<h1>Home</h1>")
    });

    app.get('/json', (req, res) => {
        res.send({
            id: 1,
            name: "Pesho",
            interests: ['math', 'bio'],
        });
    });

    app.get('/all', (req, res) => {
        
    });
};

module.exports = attach;