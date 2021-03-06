/**
 * @typedef {import("./GProgram")} GProgram
 */
const GBuffer = require('./GBuffer');
/**
 * get arrayBuffer ctor type
 */
const getArrayCtor = function (componentType) {
    switch (componentType) {
        case 0x1400:
            return Int8Array;
        case 0x1401:
            return Uint8Array;
        case 0x1402:
            return Int16Array;
        case 0x1403:
            return Uint16Array;
        case 0x1404:
            return Int32Array;
        case 0x1405:
            return Uint32Array;
        case 0x1406:
            return Float32Array;
    }
};
/**
 * @module
 * @export
 * @class
 * @example
 * 记录的不是 typedBuffer，而是原始的arrayBuffer
 * var buffer = new GBufferView();
 */
class GBufferView {
    /**
     * Creates an instance of Buffer.
     * 与GAccessor搭配使用
     * @param {WebGLRenderingContext} gl 
     * @param {ArrayBuffer} data ,the raw arrayBuffer
     * @param {Number} byteLength
     * @param {Object} [options] the options of bufferview
     * @param {String} [options.bufferType] gl.ARRAY_BUFFER or gl.ELEMENT_BUFFER
     * @param {Number} [options.drawType] gl.STATIC_DRAW or gl.DYNAMIC_DRAW
     * @param {Number} [options.byteOffset] default 0
     * @param {Number} [options.byteStride] default 0
     */
    constructor(gl, data, byteLength, options) {
        /**
         * @type {WebGLRenderingContext}
         */
        this._gl = gl;
        /**
         * @type {Number}
         * traget, gl.ARRAY_BUFFER, gl.ELEMENT_BUFFER
         */
        this._bufferType = options.bufferType || gl.ARRAY_BUFFER;
        /**
         * @type {Number}
         * drawtype, gl.STATIC_DRAW or gl.DYNAMIC_DRAW
         */
        this._drawType = options.drawType || gl.STATIC_DRAW;
        /**
         * @type {Number}
         */
        this._byteLength = byteLength !== undefined ? byteLength : 0;
        /**
         * @type {Number}
         */
        this._byteStride = options.byteStride !== undefined ? options.byteStride : 0;
        /**
         * @type {Number}
         */
        this._byteOffset = options.byteOffset !== undefined ? options.byteOffset : 0;
        /**
         * @type {ArrayBuffer}
         */
        this._data = data.slice(this._byteOffset, this._byteOffset + this._byteLength);
    }
    /**
     * @param {WebGLRenderingContext} gl
     * @param {Number} componentType, as gl.Float
     * @param {Number} typeSize, as VEC3 = 3, MAT4 = 16
     * @param {Number} count, the length of typed array buffer
     * @param {Number} byteOffset, offset of the typed array buffer
     */
    toTypedArray(gl, componentType, typeSize, count, byteOffset) {
        const data = this._data,
            bufferType = this._bufferType,
            drawType = this._drawType,
            ArrayCtor = getArrayCtor(componentType),
            typedArrayBuffer = new ArrayCtor(data, byteOffset, count * typeSize);
        return new GBuffer(gl, typedArrayBuffer, bufferType, drawType);
    }
}

module.exports = GBufferView;