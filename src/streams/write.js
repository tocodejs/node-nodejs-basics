import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const write = async() => {
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    const dest = join(__dirname, './files/fileToWrite.txt');
    const writeStream = createWriteStream(dest);
    process
        .stdin
        .on('data', (data) => {
            writeStream.write(data.toString())
        })
};
write();