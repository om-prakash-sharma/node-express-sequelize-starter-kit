/**
 * Created by OmPrakashSharma on 19-06-2019.
 */

module.exports = function (app) {

    var multiparty = require('connect-multiparty');
    var multipartyMiddleware = multiparty();

    app.route('/api/v1/project').get(app.getProjectList);

};