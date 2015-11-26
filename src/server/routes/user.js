module.exports = function(app) {
    var api = '/api/';
    var data = '/../data/';
    var jsonfileservice = require('../utils/jsonfileservice')();
    var four0four = require('../utils/404')();

    app.get(api + 'users/:id', getUser);
    app.get(api + 'users', getUsers);

    app.get(api + '*', four0four.notFoundMiddleware);

    function getUser(req, res, next) {
        var id = req.params.id;
        var msg = 'user id ' + id + ' not found. ';
        try {
            var json = jsonfileservice.getJsonFromFile(data + 'users.json');
            var user = json.filter(function(c) {
                return c.id === parseInt(id);
            });
            if (user && user[0]) {
                res.send(user[0]);
            } else {
                four0four.send404(req, res, msg);
            }
        }
        catch (ex) {
            four0four.send404(req, res, msg + ex.message);
        }
    }

    function getUsers(req, res, next) {
        var msg = 'users not found. ';
        try {
            var json = jsonfileservice.getJsonFromFile(data + 'users.json');
            if (json) {
                res.send(json);
            } else {
                four0four.send404(req, req, msg);
            }
        }
        catch (ex) {
            four0four.send404(req, res, msg + ex.message);
        }
    }
};
