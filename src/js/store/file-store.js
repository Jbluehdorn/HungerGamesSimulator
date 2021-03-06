const listsFolder = 'storage/lists/';

export default {
    loading: false,
    errors: [],
    getLists() {
        return fs.readdirSync(listsFolder);
    },
    loadFile(fileName) {
        if(fileName === null)
            return JSON.stringify([]);

        return fs.readFileSync(listsFolder + fileName, 'utf8');
    },
    writeFile(fileName, json, callback) {
        fs.writeFile(listsFolder + fileName, JSON.stringify(json), 'utf8', err => {
            if(err) throw err;
            console.log('The file has been saved!');

            if(callback) callback();
        });
    }
}