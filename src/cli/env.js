export const parseEnv = () => {
    let envVars = process.env;
    let result = [];
    for (let key in envVars) {
        if (key.indexOf('RSS_') === 0) {
            result.push(key + '=' + envVars[key]);
        }
    }
    console.log(result.join('; '));
};
parseEnv();