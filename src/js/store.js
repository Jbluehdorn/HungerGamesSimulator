const listsFolder = 'storage/lists/';

export default {
    loading: false,
    errors: [],
    getLists() {
        return fs.readdirSync(listsFolder);
    },
    loadFile(fileName) {
        return fs.readFileSync(listsFolder + fileName, 'utf8');
    }
}