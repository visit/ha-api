var HAApi = function(options){
    'use strict';
    options = options ||{};

    var HARemote = require('./ha-remote'),
        haremote = this.haremote = new HARemote(options.socket);
};

module.exports = HAApi;
