import { createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const read = async() => {
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    const src = join(__dirname, './files/fileToRead.txt');
    let readable = createReadStream(src);
    readable.on('data', (chunk) => {
        process
            .stdout
            .write(chunk.toString())
    });
};
read();