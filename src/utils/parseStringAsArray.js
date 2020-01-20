module.exports = function parseStringAsArray(arraAsString){
    return arraAsString.split(',').map( str => str.trim());
}