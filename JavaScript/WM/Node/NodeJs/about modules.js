// Exporting as literal Object;
module.exports = {
    name: 'Module Exported!',
    exportFunction(){
        console.log(this.name);
    }
}

// Exporting and creating Object element short version;
module.exports.shortExport = 'Short version of export!';

// Other syntax;
exports.elementToExport = 'Element to export...';
