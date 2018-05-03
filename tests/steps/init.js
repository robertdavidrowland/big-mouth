'use strict';

const co = require('co');
const Promise = require('bluebird');

let initialized = false;

let init = co.wrap(function* () {
    if (initialized) {
        return;
    }

    process.env.restaurants_api = "https://czrz05mgkh.execute-api.eu-west-1.amazonaws.com/dev/restaurants";
    process.env.restaurants_table = "restaurants";
    process.env.AWS_REGION = "eu-west-1";
    process.env.cognito_user_pool_id = "eu-west-1_FaFt7TZSS";
    process.env.cognito_client_id = "test_cognito_client_id";
    process.env.cognito_server_client_id = "4kvf9ve4fa6psns3avaor4le1q";

    initialized = true;
})

module.exports.init = init;