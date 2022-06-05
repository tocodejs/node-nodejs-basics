import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { createWriteStream, createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const decompress = async() => {
    const unzip = createGunzip();
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    const src = createReadStream(join(__dirname, './files/archive.gz'));
    const dest = createWriteStream(join(__dirname, './files/fileToCompress.txt'));
    pipeline(src,
        unzip,
        dest,
        (err) => {
            if (err) {
                process.exitCode = 1;
                throw err;
            }
        });
};
decompress();