import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}

function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: "", transform: pascalCaseTransform }, options));
}

function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascalCaseTransform(input, index);
}
function camelCase(input, options) {
    if (options === void 0) { options = {}; }
    return pascalCase(input, __assign({ transform: camelCaseTransform }, options));
}

function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: "." }, options));
}

function paramCase(input, options) {
    if (options === void 0) { options = {}; }
    return dotCase(input, __assign({ delimiter: "-" }, options));
}

var arrayToMap = function (array) {
    var map = new Map();
    array.forEach(function (s) { return map.set(s, s); });
    return map;
};
var getCustomEvent = function (name, events) {
    // TODO
    name = camelCase(name.slice(3));
    var event = events.find(function (event) { return event.endsWith(name); });
    if (!event)
        return;
    return event;
};
var forwardRef = function (ReactComponent) {
    var forwardRef = function (props, ref) {
        var children = props.children, remainedProps = __rest(props, ["children"]);
        var newProps = __assign(__assign({}, remainedProps), { forwardedRef: ref });
        return React.createElement(ReactComponent, newProps, children);
    };
    forwardRef.displayName = ReactComponent.displayName;
    return React.forwardRef(forwardRef);
};
var isEvent = function (name) {
    return name.indexOf('on') === 0 && name[2] === name[2].toUpperCase();
};
var isPrimitive = function (value) {
    var type = typeof value;
    var match = type.match(/boolean|string|number/);
    return match;
};
var getProps = function (ref, props, extra) {
    var forwardedRef = props.forwardedRef;
    var result = {
        ref: mergeRefs(forwardedRef, ref)
    };
    Object.keys(props).forEach(function (name) {
        var _a;
        if (name === 'children' || name === 'className' || name === 'forwardedRef' || name === 'ref')
            return;
        var value = props[name];
        if (isEvent(name)) {
            if (typeof document === 'undefined')
                return;
            var event_1 = getCustomEvent(name, extra.events || []);
            if (event_1)
                return;
            result[name] = value;
        }
        else if ((_a = extra.props) === null || _a === void 0 ? void 0 : _a.includes(name)) {
            if (!isPrimitive(value))
                return;
            result[paramCase(name)] = value;
        }
        else {
            result[name] = value;
        }
    });
    return result;
};
var mergeRefs = function () {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return function (value) {
        return refs.forEach(function (ref) {
            if (typeof ref === 'function')
                return ref(value);
            if (ref == null)
                return;
            ref.current = value;
        });
    };
};
var setClass = function (element, props) {
    var classes = [];
    var current = arrayToMap(element.classList);
    var prev = element['$class'];
    var next = props.className || props.class;
    var prevClass = arrayToMap(prev ? prev.split(' ') : []);
    var nextClass = arrayToMap(next ? next.split(' ') : []);
    current.forEach(function (key) {
        if (nextClass.has(key)) {
            classes.push(key);
            nextClass.delete(key);
        }
        else if (!prevClass.has(key)) {
            classes.push(key);
        }
    });
    nextClass.forEach(function (key) { return classes.push(key); });
    var className = classes.join(' ');
    element.className = className;
    element['$class'] = className;
};
var setEvent = function (element, name, handler) {
    var events = element['$events'] || (element['$events'] = {});
    var previous = events[name];
    previous && element.removeEventListener(paramCase(name), previous);
    element.addEventListener(paramCase(name), (events[name] = function callback(event) {
        handler && handler.call(this, event);
    }));
};
var setProps = function (element, props, extra) {
    if (!(element instanceof Element))
        return;
    setClass(element, props);
    Object.keys(props).forEach(function (name) {
        var _a;
        if (name === 'children' ||
            name === 'class' ||
            name === 'className' ||
            name === 'forwardedRef' ||
            name === 'ref' ||
            name === 'style')
            return;
        var value = props[name];
        if (isEvent(name)) {
            if (typeof document === 'undefined')
                return;
            var event_2 = getCustomEvent(name, extra.events || []);
            if (!event_2)
                return;
            setEvent(element, event_2, value);
        }
        else if ((_a = extra.props) === null || _a === void 0 ? void 0 : _a.includes(name)) {
            if (isPrimitive(value)) {
                element.setAttribute(paramCase(name), value);
            }
            else {
                element[name] = value;
            }
        }
        else {
            element[name] = value;
        }
    });
};
var proxy = function (tagName, props, events) {
    if (props === void 0) { props = []; }
    if (events === void 0) { events = []; }
    var extra = {
        props: props,
        events: events
    };
    var ReactComponent = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            _this.setElement = function (element) {
                _this.element = element;
            };
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            this.componentDidUpdate( /*this.props*/);
        };
        class_1.prototype.componentDidUpdate = function ( /*prevProps: InternalProps<ElementType>*/) {
            setProps(this.element, this.props, extra);
        };
        class_1.prototype.componentWillUnmount = function () {
            var _this = this;
            if (!this.element)
                return;
            var events = this.element['$events'] || {};
            Object.keys(events).forEach(function (name) {
                var handler = events[name];
                _this.element.removeEventListener(paramCase(name), handler);
            });
            delete this.element['$events'];
        };
        class_1.prototype.render = function () {
            var children = this.props.children;
            var props = getProps(this.setElement, this.props, extra);
            return React.createElement(tagName, props, children);
        };
        return class_1;
    }(React.Component));
    ReactComponent['displayName'] = pascalCase(tagName);
    return forwardRef(ReactComponent);
};

export { proxy };
