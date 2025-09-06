const VersionskontrolleLightweight = require('./index');

const [,, command, ...args] = process.argv;
const vkl = new VersionskontrolleLightweight();

switch (command) {
    case 'init':
        vkl.init(args[0]);
        break;
    case 'branch':
        vkl.branch(args[0]);
        break;
    case 'merge':
        vkl.merge(args[0]);
        break;
    default:
        console.log('Unbekannter Befehl.');
}
