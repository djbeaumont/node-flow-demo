//@flow
'use strict';

const fetch = require('isomorphic-fetch');

module.exports = {
    get: async (url: string) => fetch(url)
};
