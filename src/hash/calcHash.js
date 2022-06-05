import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const calculateHash = async() => {
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    const src = join(__dirname, './files/fileToCalculateHashFor.txt');
    let oHash = createHash('sha256');

    try {
        let data = await readFile(src);
        oHash.update(data);
        let hex = oHash.digest('hex');
        return hex;
    } catch (err) {
        if (err)
            throw err;
    }
};
calculateHash().then(function(val) {
    console.log(val)
});