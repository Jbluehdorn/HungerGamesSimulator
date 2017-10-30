const listsFolder = 'storage/lists/';

export default {
    loading: false,
    errors: [],
    getLists() {
        return fs.readdirSync(listsFolder);
    }
}