import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createWriteStream, createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const compress = async() => {
    const gzip = createGzip();
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    const src = createReadStream(join(__dirname, './files/fileToCompress.txt'));
    const dest = createWriteStream(join(__dirname, './files/archive.gz'));
    pipeline(src,
        gzip,
        dest,
        (err) => {
            if (err) {
                throw err;
            }
        });
};
compress();