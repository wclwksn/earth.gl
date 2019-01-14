const GLMatrix = require("kiwi.matrix").GLMatrix;
/**
 * represent position in geographic coordinate system
 * @class
 */
class Geographic{
    /**
     * 
     * @param {Number} lng 
     * @param {Number} lat 
     * @param {Number} h 
     * @param {Boolean} parseRadian , defale true, parse lat ,lng value to degree
     */
    constructor(lng,lat,h, parseRadian = true){
        this._lng = parseRadian?GLMatrix.toDegree(lng):lng;
        this._lat = parseRadian?GLMatrix.toDegree(lat):lat;
        this._h = h;
    }
    /**
     * @type {Number} the latitide value in degree
     */
    get latitude(){
        return this._lat;
    }
    /**
     * @type {Number} the longitude value in degree
     */
    get longitude(){
        return this._lng;
    }
    /**
     * @type {Number} the height value 
     */
    get height(){
        return this._h;
    }
}

module.exports = Geographic;