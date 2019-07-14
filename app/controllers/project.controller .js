/**
 * Created by OmPrakashSharma on 19-06-2019.
 */

'use strict';

var responseStatus = require('../../config/api-codes');
var config = require('../../config/config');
var fs = require('fs');
var async = require('async');
var _ = require('lodash');
var path = require('path');

module.exports = function (app) {

    var User = app.models.User;

    app.getProjectList = function (req, res) {

        User.findAll().then(function (users) {
            return res.status(responseStatus.SUCCESS).send({
                prjects: users,
                status: true
            });
        }).catch(function (error) {
            return res.status(responseStatus.INTERNAL_ERROR).send({
                message: 'INTERNAL SERVER ERROR',
                error: err
            });
        });
    };

};