import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import './files/c.js';


const random = Math.random();
const require = createRequire(
    import.meta.url);

let unknownObject;
let modulePath;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
const __filename = fileURLToPath(
    import.meta.url);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${path.dirname(__filename)}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer
};