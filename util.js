(function (window, lib) {

    'use strict';

    var utils = {};

    utils.isObject = function(value) {
        return (null !== value && typeof value === typeof {} && !utils.isArray(value));
    };

    utils.isNumber = function(value) {
        return !utils.isArray(value) && (value - parseFloat(value) + 1) >= 0;
    };

    utils.isArray = function(value) {
        return (value instanceof Array);
    };

    utils.isString = function(value) {
        return (typeof value === typeof '');
    };

    utils.isNull = function(value) {
        return (null === value);
    };

    utils.isBoolean = function(value) {
        return (value === true || value === false);
    };

    utils.toObject = function(arr) {
        var rv = {};
        for (var i = 0; i < arr.length; ++i)
            rv[i] = arr[i];
        return rv;
    };

    utils.oneIsNull = function(v1, v2) {
        return ((v1 === null && v2 !== null) || (v1 !== null && v2 === null));
    };

    utils.isUndefined = function(val) {
        return (null === val || typeof val === 'undefined');
    };

    utils.isFunction = function(fn) {
        return (typeof fn === 'function');
    };

    utils.isEqual = function(v1, v2) {
        if (typeof v1 !== typeof v2 || utils.oneIsNull(v1, v2)) {
            return false;
        }

        if (typeof v1 === typeof "" || typeof v1 === typeof 0) {
            return v1 === v2;
        }

        var _isEqual = true;

        if (typeof v1 === typeof {}) {
            var compare = function(value1, value2) {
                for (var i in value1) {
                    if (!value2.hasOwnProperty(i)) {
                        _isEqual = false;
                        break;
                    }

                    if (utils.isObject(value1[i])) {
                        compare(value1[i], value2[i]);
                    } else if (typeof value1[i] === typeof '') {
                        if (value1[i] !== value2[i]) {
                            _isEqual = false;
                            break;
                        }
                    }
                }
            }

            compare(v1, v2);
        }

        return _isEqual;
    };

    utils.getType = function(data) {
        if (utils.isObject(data)) {
            return 'object';
        } else if (utils.isArray(data)) {
            return 'array';
        } else if (utils.isNull(data)) {
            return null;
        } else if (utils.isBoolean(data)) {
            return 'boolean';
        } else if (utils.isString(data)) {
            return 'string';
        } else if (utils.isNumber(data)) {
            return 'number';
        }
    };

    lib.utils = utils;
    
})(window, window.lib || (window.lib = {}));