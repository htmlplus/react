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

// Regexps involved with splitting words in various case formats.
const SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
const SPLIT_NUMBER_LOWER_RE = /(\d)(\p{Ll})/gu;
const SPLIT_LETTER_NUMBER_RE = /(\p{L})(\d)/gu;
// Regexp involved with stripping non-word characters from the result.
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
// The replacement value for splits.
const SPLIT_REPLACE_VALUE = "$1\0$2";
// The default characters to keep after transforming case.
const DEFAULT_PREFIX_CHARACTERS = "";
/**
 * Split any cased input strings into an array of words.
 */
function split(input, options = {}) {
    const { separateNumbers } = options;
    let result = input.trim();
    result = result
        .replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE)
        .replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
    if (separateNumbers) {
        result = result
            .replace(SPLIT_NUMBER_LOWER_RE, SPLIT_REPLACE_VALUE)
            .replace(SPLIT_LETTER_NUMBER_RE, SPLIT_REPLACE_VALUE);
    }
    result = result.replace(DEFAULT_STRIP_REGEXP, "\0");
    let start = 0;
    let end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    if (start === end)
        return [];
    while (result.charAt(end - 1) === "\0")
        end--;
    return result.slice(start, end).split(/\0/g);
}
/**
 * Convert a string to camel case (`fooBar`).
 */
function camelCase(input, options) {
    const prefix = getPrefix(input, options?.prefixCharacters);
    const lower = lowerFactory(options?.locale);
    const upper = upperFactory(options?.locale);
    const transform = pascalCaseTransformFactory(lower, upper);
    return (prefix +
        split(input, options)
            .map((word, index) => {
            if (index === 0)
                return lower(word);
            return transform(word, index);
        })
            .join(""));
}
/**
 * Convert a string to pascal case (`FooBar`).
 */
function pascalCase(input, options) {
    const prefix = getPrefix(input, options?.prefixCharacters);
    const lower = lowerFactory(options?.locale);
    const upper = upperFactory(options?.locale);
    return (prefix +
        split(input, options).map(pascalCaseTransformFactory(lower, upper)).join(""));
}
/**
 * Convert a string to kebab case (`foo-bar`).
 */
function kebabCase(input, options) {
    const prefix = getPrefix(input, options?.prefixCharacters);
    const lower = lowerFactory(options?.locale);
    return prefix + split(input, options).map(lower).join("-");
}
function lowerFactory(locale) {
    return locale === false
        ? (input) => input.toLowerCase()
        : (input) => input.toLocaleLowerCase(locale);
}
function upperFactory(locale) {
    return locale === false
        ? (input) => input.toUpperCase()
        : (input) => input.toLocaleUpperCase(locale);
}
function pascalCaseTransformFactory(lower, upper) {
    return (word, index) => {
        const char0 = word[0];
        const initial = index > 0 && char0 >= "0" && char0 <= "9" ? "_" + char0 : upper(char0);
        return initial + lower(word.slice(1));
    };
}
function getPrefix(input, prefixCharacters = DEFAULT_PREFIX_CHARACTERS) {
    let prefix = "";
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        if (prefixCharacters.includes(char)) {
            prefix += char;
        }
        else {
            break;
        }
    }
    return prefix;
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
            result[kebabCase(name)] = value;
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
    previous && element.removeEventListener(pascalCase(name), previous);
    element.addEventListener(pascalCase(name), (events[name] = function callback(event) {
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
                element.setAttribute(kebabCase(name), value);
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
                _this.element.removeEventListener(pascalCase(name), handler);
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
