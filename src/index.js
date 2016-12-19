//@flow
'use strict';

require("babel-polyfill");

import type { Hotel } from './models/Hotel';

const client = require('./client');

const x: Hotel = {
    code: 'XYZ',
    name: 'Gatwick Hilton'
};

console.log(x);

const doStuff = async function() {
    const response = await client.get('https://www.google.com/');
    return await response.text();
}

doStuff().then(text => {
    console.log('text', text);
    process.exit();
});
