module.exports = (obj, {
    enums = true,
    protos = false,
    symbols = false,
} = {}) => {
    const isEnum = Object.prototype.propertyIsEnumerable.bind(obj);
    const props = [];
    do {
        const keys = [];
        keys.push(...Object.getOwnPropertyNames(obj));
        if(symbols){
            keys.push(...Object.getOwnPropertySymbols(obj));
        }
        props.push(...enums ? keys : keys.filter(key => isEnum(key)));
        obj = protos ? Object.getPrototypeOf(obj) : false;
    } while(obj);

    return [...new Set(props)];
};
