import { existsSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const list = async() => {
    const __dirname = dirname(fileURLToPath(
        import.meta.url));
    const src = join(__dirname, './files');

    if (!existsSync(src)) {
        throw new Error('FS operation failed')
    }
    let files = readdirSync(src);
    console.log(files);
};

list();