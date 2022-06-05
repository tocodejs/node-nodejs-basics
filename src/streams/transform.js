import { Transform, pipeline } from 'stream';
export const transform = async() => {
    const readable = process.stdin;
    const writable = process.stdout;
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            let sChunk = chunk
                .toString()
                .trim();
            let reversedChunk = '';
            for (let i = sChunk.length - 1; i >= 0; i--) {
                reversedChunk += sChunk[i];
            }
            callback(null, reversedChunk + '\n')
        }
    });
    pipeline(readable, transform, writable, (err) => {
        if (err)
            throw err;
    })
};
transform();