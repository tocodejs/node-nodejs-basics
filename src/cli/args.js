export const parseArgs = () => {
    let aArgs = process.argv.slice(2);
    let result = '';
    for (let i = 0; i < aArgs.length; i += 2) {
        result += aArgs[i].slice(2) + ' is ' + aArgs[i + 1] + ', ';
    }
    result = result.slice(0, result.length - 2)
    console.log(result)
};
parseArgs()