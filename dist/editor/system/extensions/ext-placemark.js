System.register([], function (exports) {
  'use strict';
  return {
    execute: function () {

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function (obj) {
            return typeof obj;
          };
        } else {
          _typeof = function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          };
        }

        return _typeof(obj);
      }

      var REACT_ELEMENT_TYPE;

      function _jsx(type, props, key, children) {
        if (!REACT_ELEMENT_TYPE) {
          REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7;
        }

        var defaultProps = type && type.defaultProps;
        var childrenLength = arguments.length - 3;

        if (!props && childrenLength !== 0) {
          props = {
            children: void 0
          };
        }

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = new Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 3];
          }

          props.children = childArray;
        }

        if (props && defaultProps) {
          for (var propName in defaultProps) {
            if (props[propName] === void 0) {
              props[propName] = defaultProps[propName];
            }
          }
        } else if (!props) {
          props = defaultProps || {};
        }

        return {
          $$typeof: REACT_ELEMENT_TYPE,
          type: type,
          key: key === undefined ? null : '' + key,
          ref: null,
          props: props,
          _owner: null
        };
      }

      function _asyncIterator(iterable) {
        var method;

        if (typeof Symbol !== "undefined") {
          if (Symbol.asyncIterator) {
            method = iterable[Symbol.asyncIterator];
            if (method != null) return method.call(iterable);
          }

          if (Symbol.iterator) {
            method = iterable[Symbol.iterator];
            if (method != null) return method.call(iterable);
          }
        }

        throw new TypeError("Object is not async iterable");
      }

      function _AwaitValue(value) {
        this.wrapped = value;
      }

      function _AsyncGenerator(gen) {
        var front, back;

        function send(key, arg) {
          return new Promise(function (resolve, reject) {
            var request = {
              key: key,
              arg: arg,
              resolve: resolve,
              reject: reject,
              next: null
            };

            if (back) {
              back = back.next = request;
            } else {
              front = back = request;
              resume(key, arg);
            }
          });
        }

        function resume(key, arg) {
          try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _AwaitValue;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) {
              if (wrappedAwait) {
                resume(key === "return" ? "return" : "next", arg);
                return;
              }

              settle(result.done ? "return" : "normal", arg);
            }, function (err) {
              resume("throw", err);
            });
          } catch (err) {
            settle("throw", err);
          }
        }

        function settle(type, value) {
          switch (type) {
            case "return":
              front.resolve({
                value: value,
                done: true
              });
              break;

            case "throw":
              front.reject(value);
              break;

            default:
              front.resolve({
                value: value,
                done: false
              });
              break;
          }

          front = front.next;

          if (front) {
            resume(front.key, front.arg);
          } else {
            back = null;
          }
        }

        this._invoke = send;

        if (typeof gen.return !== "function") {
          this.return = undefined;
        }
      }

      if (typeof Symbol === "function" && Symbol.asyncIterator) {
        _AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
          return this;
        };
      }

      _AsyncGenerator.prototype.next = function (arg) {
        return this._invoke("next", arg);
      };

      _AsyncGenerator.prototype.throw = function (arg) {
        return this._invoke("throw", arg);
      };

      _AsyncGenerator.prototype.return = function (arg) {
        return this._invoke("return", arg);
      };

      function _wrapAsyncGenerator(fn) {
        return function () {
          return new _AsyncGenerator(fn.apply(this, arguments));
        };
      }

      function _awaitAsyncGenerator(value) {
        return new _AwaitValue(value);
      }

      function _asyncGeneratorDelegate(inner, awaitWrap) {
        var iter = {},
            waiting = false;

        function pump(key, value) {
          waiting = true;
          value = new Promise(function (resolve) {
            resolve(inner[key](value));
          });
          return {
            done: false,
            value: awaitWrap(value)
          };
        }

        ;

        if (typeof Symbol === "function" && Symbol.iterator) {
          iter[Symbol.iterator] = function () {
            return this;
          };
        }

        iter.next = function (value) {
          if (waiting) {
            waiting = false;
            return value;
          }

          return pump("next", value);
        };

        if (typeof inner.throw === "function") {
          iter.throw = function (value) {
            if (waiting) {
              waiting = false;
              throw value;
            }

            return pump("throw", value);
          };
        }

        if (typeof inner.return === "function") {
          iter.return = function (value) {
            if (waiting) {
              waiting = false;
              return value;
            }

            return pump("return", value);
          };
        }

        return iter;
      }

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _defineEnumerableProperties(obj, descs) {
        for (var key in descs) {
          var desc = descs[key];
          desc.configurable = desc.enumerable = true;
          if ("value" in desc) desc.writable = true;
          Object.defineProperty(obj, key, desc);
        }

        if (Object.getOwnPropertySymbols) {
          var objectSymbols = Object.getOwnPropertySymbols(descs);

          for (var i = 0; i < objectSymbols.length; i++) {
            var sym = objectSymbols[i];
            var desc = descs[sym];
            desc.configurable = desc.enumerable = true;
            if ("value" in desc) desc.writable = true;
            Object.defineProperty(obj, sym, desc);
          }
        }

        return obj;
      }

      function _defaults(obj, defaults) {
        var keys = Object.getOwnPropertyNames(defaults);

        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = Object.getOwnPropertyDescriptor(defaults, key);

          if (value && value.configurable && obj[key] === undefined) {
            Object.defineProperty(obj, key, value);
          }
        }

        return obj;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _extends() {
        _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

        return _extends.apply(this, arguments);
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? Object(arguments[i]) : {};
          var ownKeys = Object.keys(source);

          if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
              return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
          }

          ownKeys.forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        }

        return target;
      }

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
          };
        }

        return _construct.apply(null, arguments);
      }

      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }

      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;

        _wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (Class === null || !_isNativeFunction(Class)) return Class;

          if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }

          if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);

            _cache.set(Class, Wrapper);
          }

          function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
          }

          Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
      }

      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return !!right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      function _getRequireWildcardCache() {
        if (typeof WeakMap !== "function") return null;
        var cache = new WeakMap();

        _getRequireWildcardCache = function () {
          return cache;
        };

        return cache;
      }

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        }

        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
          return {
            default: obj
          };
        }

        var cache = _getRequireWildcardCache();

        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }

        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }

        newObj.default = obj;

        if (cache) {
          cache.set(obj, newObj);
        }

        return newObj;
      }

      function _newArrowCheck(innerThis, boundThis) {
        if (innerThis !== boundThis) {
          throw new TypeError("Cannot instantiate an arrow function");
        }
      }

      function _objectDestructuringEmpty(obj) {
        if (obj == null) throw new TypeError("Cannot destructure undefined");
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;

        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }

        return target;
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};

        var target = _objectWithoutPropertiesLoose(source, excluded);

        var key, i;

        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
          }
        }

        return target;
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
              result;

          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;

            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }

          return _possibleConstructorReturn(this, result);
        };
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(receiver);
            }

            return desc.value;
          };
        }

        return _get(target, property, receiver || target);
      }

      function set(target, property, value, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.set) {
          set = Reflect.set;
        } else {
          set = function set(target, property, value, receiver) {
            var base = _superPropBase(target, property);

            var desc;

            if (base) {
              desc = Object.getOwnPropertyDescriptor(base, property);

              if (desc.set) {
                desc.set.call(receiver, value);
                return true;
              } else if (!desc.writable) {
                return false;
              }
            }

            desc = Object.getOwnPropertyDescriptor(receiver, property);

            if (desc) {
              if (!desc.writable) {
                return false;
              }

              desc.value = value;
              Object.defineProperty(receiver, property, desc);
            } else {
              _defineProperty(receiver, property, value);
            }

            return true;
          };
        }

        return set(target, property, value, receiver);
      }

      function _set(target, property, value, receiver, isStrict) {
        var s = set(target, property, value, receiver || target);

        if (!s && isStrict) {
          throw new Error('failed to set property');
        }

        return value;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }

        return Object.freeze(Object.defineProperties(strings, {
          raw: {
            value: Object.freeze(raw)
          }
        }));
      }

      function _taggedTemplateLiteralLoose(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }

        strings.raw = raw;
        return strings;
      }

      function _readOnlyError(name) {
        throw new Error("\"" + name + "\" is read-only");
      }

      function _classNameTDZError(name) {
        throw new Error("Class \"" + name + "\" cannot be referenced in computed property keys.");
      }

      function _temporalUndefined() {}

      function _tdz(name) {
        throw new ReferenceError(name + " is not defined - temporal dead zone");
      }

      function _temporalRef(val, name) {
        return val === _temporalUndefined ? _tdz(name) : val;
      }

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }

      function _slicedToArrayLoose(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimitLoose(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }

      function _toArray(arr) {
        return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function _maybeArrayLike(next, arr, i) {
        if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
          var len = arr.length;
          return _arrayLikeToArray(arr, i !== void 0 && i < len ? i : len);
        }

        return next(arr, i);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
      }

      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      function _iterableToArrayLimitLoose(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];

        for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
          _arr.push(_step.value);

          if (i && _arr.length === i) break;
        }

        return _arr;
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it;

        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;

            var F = function () {};

            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var normalCompletion = true,
            didErr = false,
            err;
        return {
          s: function () {
            it = o[Symbol.iterator]();
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
      }

      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it;

        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            return function () {
              if (i >= o.length) return {
                done: true
              };
              return {
                done: false,
                value: o[i++]
              };
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        it = o[Symbol.iterator]();
        return it.next.bind(it);
      }

      function _skipFirstGeneratorNext(fn) {
        return function () {
          var it = fn.apply(this, arguments);
          it.next();
          return it;
        };
      }

      function _toPrimitive(input, hint) {
        if (typeof input !== "object" || input === null) return input;
        var prim = input[Symbol.toPrimitive];

        if (prim !== undefined) {
          var res = prim.call(input, hint || "default");
          if (typeof res !== "object") return res;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }

        return (hint === "string" ? String : Number)(input);
      }

      function _toPropertyKey(arg) {
        var key = _toPrimitive(arg, "string");

        return typeof key === "symbol" ? key : String(key);
      }

      function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');
      }

      function _initializerDefineProperty(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
          enumerable: descriptor.enumerable,
          configurable: descriptor.configurable,
          writable: descriptor.writable,
          value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
      }

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object.keys(descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object.defineProperty(target, property, desc);
          desc = null;
        }

        return desc;
      }

      var id = 0;

      function _classPrivateFieldLooseKey(name) {
        return "__private_" + id++ + "_" + name;
      }

      function _classPrivateFieldLooseBase(receiver, privateKey) {
        if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) {
          throw new TypeError("attempted to use private field on non-instance");
        }

        return receiver;
      }

      function _classPrivateFieldGet(receiver, privateMap) {
        var descriptor = privateMap.get(receiver);

        if (!descriptor) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        if (descriptor.get) {
          return descriptor.get.call(receiver);
        }

        return descriptor.value;
      }

      function _classPrivateFieldSet(receiver, privateMap, value) {
        var descriptor = privateMap.get(receiver);

        if (!descriptor) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        if (descriptor.set) {
          descriptor.set.call(receiver, value);
        } else {
          if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
          }

          descriptor.value = value;
        }

        return value;
      }

      function _classPrivateFieldDestructureSet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        var descriptor = privateMap.get(receiver);

        if (descriptor.set) {
          if (!("__destrObj" in descriptor)) {
            descriptor.__destrObj = {
              set value(v) {
                descriptor.set.call(receiver, v);
              }

            };
          }

          return descriptor.__destrObj;
        } else {
          if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
          }

          return descriptor;
        }
      }

      function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
        if (receiver !== classConstructor) {
          throw new TypeError("Private static access of wrong provenance");
        }

        if (descriptor.get) {
          return descriptor.get.call(receiver);
        }

        return descriptor.value;
      }

      function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) {
        if (receiver !== classConstructor) {
          throw new TypeError("Private static access of wrong provenance");
        }

        if (descriptor.set) {
          descriptor.set.call(receiver, value);
        } else {
          if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
          }

          descriptor.value = value;
        }

        return value;
      }

      function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
        if (receiver !== classConstructor) {
          throw new TypeError("Private static access of wrong provenance");
        }

        return method;
      }

      function _classStaticPrivateMethodSet() {
        throw new TypeError("attempted to set read only static private field");
      }

      function _decorate(decorators, factory, superClass, mixins) {
        var api = _getDecoratorsApi();

        if (mixins) {
          for (var i = 0; i < mixins.length; i++) {
            api = mixins[i](api);
          }
        }

        var r = factory(function initialize(O) {
          api.initializeInstanceElements(O, decorated.elements);
        }, superClass);
        var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
        api.initializeClassElements(r.F, decorated.elements);
        return api.runClassFinishers(r.F, decorated.finishers);
      }

      function _getDecoratorsApi() {
        _getDecoratorsApi = function () {
          return api;
        };

        var api = {
          elementsDefinitionOrder: [["method"], ["field"]],
          initializeInstanceElements: function (O, elements) {
            ["method", "field"].forEach(function (kind) {
              elements.forEach(function (element) {
                if (element.kind === kind && element.placement === "own") {
                  this.defineClassElement(O, element);
                }
              }, this);
            }, this);
          },
          initializeClassElements: function (F, elements) {
            var proto = F.prototype;
            ["method", "field"].forEach(function (kind) {
              elements.forEach(function (element) {
                var placement = element.placement;

                if (element.kind === kind && (placement === "static" || placement === "prototype")) {
                  var receiver = placement === "static" ? F : proto;
                  this.defineClassElement(receiver, element);
                }
              }, this);
            }, this);
          },
          defineClassElement: function (receiver, element) {
            var descriptor = element.descriptor;

            if (element.kind === "field") {
              var initializer = element.initializer;
              descriptor = {
                enumerable: descriptor.enumerable,
                writable: descriptor.writable,
                configurable: descriptor.configurable,
                value: initializer === void 0 ? void 0 : initializer.call(receiver)
              };
            }

            Object.defineProperty(receiver, element.key, descriptor);
          },
          decorateClass: function (elements, decorators) {
            var newElements = [];
            var finishers = [];
            var placements = {
              static: [],
              prototype: [],
              own: []
            };
            elements.forEach(function (element) {
              this.addElementPlacement(element, placements);
            }, this);
            elements.forEach(function (element) {
              if (!_hasDecorators(element)) return newElements.push(element);
              var elementFinishersExtras = this.decorateElement(element, placements);
              newElements.push(elementFinishersExtras.element);
              newElements.push.apply(newElements, elementFinishersExtras.extras);
              finishers.push.apply(finishers, elementFinishersExtras.finishers);
            }, this);

            if (!decorators) {
              return {
                elements: newElements,
                finishers: finishers
              };
            }

            var result = this.decorateConstructor(newElements, decorators);
            finishers.push.apply(finishers, result.finishers);
            result.finishers = finishers;
            return result;
          },
          addElementPlacement: function (element, placements, silent) {
            var keys = placements[element.placement];

            if (!silent && keys.indexOf(element.key) !== -1) {
              throw new TypeError("Duplicated element (" + element.key + ")");
            }

            keys.push(element.key);
          },
          decorateElement: function (element, placements) {
            var extras = [];
            var finishers = [];

            for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
              var keys = placements[element.placement];
              keys.splice(keys.indexOf(element.key), 1);
              var elementObject = this.fromElementDescriptor(element);
              var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
              element = elementFinisherExtras.element;
              this.addElementPlacement(element, placements);

              if (elementFinisherExtras.finisher) {
                finishers.push(elementFinisherExtras.finisher);
              }

              var newExtras = elementFinisherExtras.extras;

              if (newExtras) {
                for (var j = 0; j < newExtras.length; j++) {
                  this.addElementPlacement(newExtras[j], placements);
                }

                extras.push.apply(extras, newExtras);
              }
            }

            return {
              element: element,
              finishers: finishers,
              extras: extras
            };
          },
          decorateConstructor: function (elements, decorators) {
            var finishers = [];

            for (var i = decorators.length - 1; i >= 0; i--) {
              var obj = this.fromClassDescriptor(elements);
              var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);

              if (elementsAndFinisher.finisher !== undefined) {
                finishers.push(elementsAndFinisher.finisher);
              }

              if (elementsAndFinisher.elements !== undefined) {
                elements = elementsAndFinisher.elements;

                for (var j = 0; j < elements.length - 1; j++) {
                  for (var k = j + 1; k < elements.length; k++) {
                    if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                      throw new TypeError("Duplicated element (" + elements[j].key + ")");
                    }
                  }
                }
              }
            }

            return {
              elements: elements,
              finishers: finishers
            };
          },
          fromElementDescriptor: function (element) {
            var obj = {
              kind: element.kind,
              key: element.key,
              placement: element.placement,
              descriptor: element.descriptor
            };
            var desc = {
              value: "Descriptor",
              configurable: true
            };
            Object.defineProperty(obj, Symbol.toStringTag, desc);
            if (element.kind === "field") obj.initializer = element.initializer;
            return obj;
          },
          toElementDescriptors: function (elementObjects) {
            if (elementObjects === undefined) return;
            return _toArray(elementObjects).map(function (elementObject) {
              var element = this.toElementDescriptor(elementObject);
              this.disallowProperty(elementObject, "finisher", "An element descriptor");
              this.disallowProperty(elementObject, "extras", "An element descriptor");
              return element;
            }, this);
          },
          toElementDescriptor: function (elementObject) {
            var kind = String(elementObject.kind);

            if (kind !== "method" && kind !== "field") {
              throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
            }

            var key = _toPropertyKey(elementObject.key);

            var placement = String(elementObject.placement);

            if (placement !== "static" && placement !== "prototype" && placement !== "own") {
              throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
            }

            var descriptor = elementObject.descriptor;
            this.disallowProperty(elementObject, "elements", "An element descriptor");
            var element = {
              kind: kind,
              key: key,
              placement: placement,
              descriptor: Object.assign({}, descriptor)
            };

            if (kind !== "field") {
              this.disallowProperty(elementObject, "initializer", "A method descriptor");
            } else {
              this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
              this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
              this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
              element.initializer = elementObject.initializer;
            }

            return element;
          },
          toElementFinisherExtras: function (elementObject) {
            var element = this.toElementDescriptor(elementObject);

            var finisher = _optionalCallableProperty(elementObject, "finisher");

            var extras = this.toElementDescriptors(elementObject.extras);
            return {
              element: element,
              finisher: finisher,
              extras: extras
            };
          },
          fromClassDescriptor: function (elements) {
            var obj = {
              kind: "class",
              elements: elements.map(this.fromElementDescriptor, this)
            };
            var desc = {
              value: "Descriptor",
              configurable: true
            };
            Object.defineProperty(obj, Symbol.toStringTag, desc);
            return obj;
          },
          toClassDescriptor: function (obj) {
            var kind = String(obj.kind);

            if (kind !== "class") {
              throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
            }

            this.disallowProperty(obj, "key", "A class descriptor");
            this.disallowProperty(obj, "placement", "A class descriptor");
            this.disallowProperty(obj, "descriptor", "A class descriptor");
            this.disallowProperty(obj, "initializer", "A class descriptor");
            this.disallowProperty(obj, "extras", "A class descriptor");

            var finisher = _optionalCallableProperty(obj, "finisher");

            var elements = this.toElementDescriptors(obj.elements);
            return {
              elements: elements,
              finisher: finisher
            };
          },
          runClassFinishers: function (constructor, finishers) {
            for (var i = 0; i < finishers.length; i++) {
              var newConstructor = (0, finishers[i])(constructor);

              if (newConstructor !== undefined) {
                if (typeof newConstructor !== "function") {
                  throw new TypeError("Finishers must return a constructor.");
                }

                constructor = newConstructor;
              }
            }

            return constructor;
          },
          disallowProperty: function (obj, name, objectType) {
            if (obj[name] !== undefined) {
              throw new TypeError(objectType + " can't have a ." + name + " property.");
            }
          }
        };
        return api;
      }

      function _createElementDescriptor(def) {
        var key = _toPropertyKey(def.key);

        var descriptor;

        if (def.kind === "method") {
          descriptor = {
            value: def.value,
            writable: true,
            configurable: true,
            enumerable: false
          };
        } else if (def.kind === "get") {
          descriptor = {
            get: def.value,
            configurable: true,
            enumerable: false
          };
        } else if (def.kind === "set") {
          descriptor = {
            set: def.value,
            configurable: true,
            enumerable: false
          };
        } else if (def.kind === "field") {
          descriptor = {
            configurable: true,
            writable: true,
            enumerable: true
          };
        }

        var element = {
          kind: def.kind === "field" ? "field" : "method",
          key: key,
          placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype",
          descriptor: descriptor
        };
        if (def.decorators) element.decorators = def.decorators;
        if (def.kind === "field") element.initializer = def.value;
        return element;
      }

      function _coalesceGetterSetter(element, other) {
        if (element.descriptor.get !== undefined) {
          other.descriptor.get = element.descriptor.get;
        } else {
          other.descriptor.set = element.descriptor.set;
        }
      }

      function _coalesceClassElements(elements) {
        var newElements = [];

        var isSameElement = function (other) {
          return other.kind === "method" && other.key === element.key && other.placement === element.placement;
        };

        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];
          var other;

          if (element.kind === "method" && (other = newElements.find(isSameElement))) {
            if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
              if (_hasDecorators(element) || _hasDecorators(other)) {
                throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
              }

              other.descriptor = element.descriptor;
            } else {
              if (_hasDecorators(element)) {
                if (_hasDecorators(other)) {
                  throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
                }

                other.decorators = element.decorators;
              }

              _coalesceGetterSetter(element, other);
            }
          } else {
            newElements.push(element);
          }
        }

        return newElements;
      }

      function _hasDecorators(element) {
        return element.decorators && element.decorators.length;
      }

      function _isDataDescriptor(desc) {
        return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
      }

      function _optionalCallableProperty(obj, name) {
        var value = obj[name];

        if (value !== undefined && typeof value !== "function") {
          throw new TypeError("Expected '" + name + "' to be a function");
        }

        return value;
      }

      function _classPrivateMethodGet(receiver, privateSet, fn) {
        if (!privateSet.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return fn;
      }

      function _classPrivateMethodSet() {
        throw new TypeError("attempted to reassign private method");
      }

      function _wrapRegExp(re, groups) {
        _wrapRegExp = function (re, groups) {
          return new BabelRegExp(re, undefined, groups);
        };

        var _RegExp = _wrapNativeSuper(RegExp);

        var _super = RegExp.prototype;

        var _groups = new WeakMap();

        function BabelRegExp(re, flags, groups) {
          var _this = _RegExp.call(this, re, flags);

          _groups.set(_this, groups || _groups.get(re));

          return _this;
        }

        _inherits(BabelRegExp, _RegExp);

        BabelRegExp.prototype.exec = function (str) {
          var result = _super.exec.call(this, str);

          if (result) result.groups = buildGroups(result, this);
          return result;
        };

        BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
          if (typeof substitution === "string") {
            var groups = _groups.get(this);

            return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
              return "$" + groups[name];
            }));
          } else if (typeof substitution === "function") {
            var _this = this;

            return _super[Symbol.replace].call(this, str, function () {
              var args = [];
              args.push.apply(args, arguments);

              if (typeof args[args.length - 1] !== "object") {
                args.push(buildGroups(args, _this));
              }

              return substitution.apply(this, args);
            });
          } else {
            return _super[Symbol.replace].call(this, str, substitution);
          }
        };

        function buildGroups(result, re) {
          var g = _groups.get(re);

          return Object.keys(g).reduce(function (groups, name) {
            groups[name] = result[g[name]];
            return groups;
          }, Object.create(null));
        }

        return _wrapRegExp.apply(this, arguments);
      }

      /**
       * @file ext-placemark.js
       *
       *
       * @copyright 2010 CloudCanvas, Inc. All rights reserved
       *
       */
      var extPlacemark = exports('default', {
        name: 'placemark',
        init: function init(S) {
          var _this = this;

          return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var svgEditor, svgCanvas, addElem, $, importLocale, selElems, started, newPM, strings, markerTypes, showPanel, getLinked, updateText, updateFont, addMarker, setMarker, colorChanged, updateReferences, setArrowFromButton, getTitle, addMarkerButtons, buttons, contextTools;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    addMarkerButtons = function _addMarkerButtons(buttons) {
                      Object.keys(markerTypes).forEach(function (id) {
                        var title = getTitle(String(id));
                        buttons.push({
                          id: 'placemark_marker_' + id,
                          svgicon: id,
                          icon: svgEditor.curConfig.extIconsPath + 'markers-' + id + '.png',
                          title: title,
                          type: 'context',
                          events: {
                            click: setArrowFromButton
                          },
                          panel: 'placemark_panel',
                          list: 'placemark_marker',
                          isDefault: id === 'leftarrow'
                        });
                      });
                      return buttons;
                    };

                    getTitle = function _getTitle(id) {
                      var langList = strings.langList;
                      var item = langList.find(function (itm) {
                        return itm.id === id;
                      });
                      return item ? item.title : id;
                    };

                    setArrowFromButton = function _setArrowFromButton(ev) {
                      var parts = this.id.split('_');
                      var val = parts[2];

                      if (parts[3]) {
                        val += '_' + parts[3];
                      }

                      $('#placemark_marker').attr('value', val);
                    };

                    updateReferences = function _updateReferences(el) {
                      var id = 'placemark_marker_' + el.id;
                      var markerName = 'marker-start';
                      var marker = getLinked(el, markerName);

                      if (!marker || !marker.attributes["class"]) {
                        return;
                      } // not created by this extension


                      var url = el.getAttribute(markerName);

                      if (url) {
                        var len = el.id.length;
                        var linkid = url.substr(-len - 1, len);

                        if (el.id !== linkid) {
                          var val = $('#placemark_marker').attr('value') || 'leftarrow';
                          addMarker(id, val);
                          svgCanvas.changeSelectedAttribute(markerName, 'url(#' + id + ')');
                          svgCanvas.call('changed', selElems);
                        }
                      }
                    };

                    colorChanged = function _colorChanged(el) {
                      var color = el.getAttribute('stroke');
                      var marker = getLinked(el, 'marker-start'); // console.log(marker);

                      if (!marker) {
                        return;
                      }

                      if (!marker.attributes["class"]) {
                        return;
                      } // not created by this extension


                      var ch = marker.lastElementChild;

                      if (!ch) {
                        return;
                      }

                      var curfill = ch.getAttribute('fill');
                      var curstroke = ch.getAttribute('stroke');

                      if (curfill && curfill !== 'none') {
                        ch.setAttribute('fill', color);
                      }

                      if (curstroke && curstroke !== 'none') {
                        ch.setAttribute('stroke', color);
                      }
                    };

                    setMarker = function _setMarker(el, val) {
                      var markerName = 'marker-start';
                      var marker = getLinked(el, markerName);

                      if (marker) {
                        $(marker).remove();
                      }

                      el.removeAttribute(markerName);

                      if (val === 'nomarker') {
                        svgCanvas.call('changed', [el]);
                        return;
                      } // Set marker on element


                      var id = 'placemark_marker_' + el.id;
                      addMarker(id, val);
                      el.setAttribute(markerName, 'url(#' + id + ')');
                      svgCanvas.call('changed', [el]);
                    };

                    addMarker = function _addMarker(id, val) {
                      var marker = svgCanvas.getElem(id);

                      if (marker) {
                        return undefined;
                      } // console.log(id);


                      if (val === '' || val === 'nomarker') {
                        return undefined;
                      }

                      var color = svgCanvas.getColor('stroke'); // NOTE: Safari didn't like a negative value in viewBox
                      // so we use a standardized 0 0 100 100
                      // with 50 50 being mapped to the marker position

                      var scale = 2; // parseFloat($('#marker_size').val());

                      var strokeWidth = 10;
                      var refX = 50;
                      var refY = 50;
                      var viewBox = '0 0 100 100';
                      var markerWidth = 5 * scale;
                      var markerHeight = 5 * scale;
                      var seType = val;

                      if (!markerTypes[seType]) {
                        return undefined;
                      } // an unknown type!
                      // positional markers(arrows) at end of line


                      if (seType.includes('left')) refX = 0;
                      if (seType.includes('right')) refX = 100; // create a generic marker

                      marker = addElem({
                        element: 'marker',
                        attr: {
                          id: id,
                          markerUnits: 'strokeWidth',
                          orient: 'auto',
                          style: 'pointer-events:none',
                          "class": seType
                        }
                      });
                      var mel = addElem(markerTypes[seType]);
                      var fillcolor = seType.substr(-2) === '_o' ? 'none' : color;
                      mel.setAttribute('fill', fillcolor);
                      mel.setAttribute('stroke', color);
                      mel.setAttribute('stroke-width', strokeWidth);
                      marker.append(mel);
                      marker.setAttribute('viewBox', viewBox);
                      marker.setAttribute('markerWidth', markerWidth);
                      marker.setAttribute('markerHeight', markerHeight);
                      marker.setAttribute('refX', refX);
                      marker.setAttribute('refY', refY);
                      svgCanvas.findDefs().append(marker);
                      return marker;
                    };

                    updateFont = function _updateFont(font) {
                      font = font.split(' ');
                      var fontSize = Number.parseInt(font.pop());
                      font = font.join(' ');
                      selElems.forEach(function (elem) {
                        if (elem && elem.getAttribute('class').includes('placemark')) {
                          $(elem).children().each(function (_, i) {
                            var _i$id$split3 = i.id.split('_'),
                                _i$id$split4 = _slicedToArray(_i$id$split3, 3),
                                type = _i$id$split4[2];

                            if (type === 'txt') {
                              $(i).attr({
                                'font-family': font,
                                'font-size': fontSize
                              });
                            }
                          });
                        }
                      });
                    };

                    updateText = function _updateText(txt) {
                      var items = txt.split(';');
                      selElems.forEach(function (elem) {
                        if (elem && elem.getAttribute('class').includes('placemark')) {
                          $(elem).children().each(function (_, i) {
                            var _i$id$split = i.id.split('_'),
                                _i$id$split2 = _slicedToArray(_i$id$split, 4),
                                type = _i$id$split2[2],
                                n = _i$id$split2[3];

                            if (type === 'txt') {
                              $(i).text(items[n]);
                            }
                          });
                        }
                      });
                    };

                    getLinked = function _getLinked(elem, attr) {
                      if (!elem) {
                        return null;
                      }

                      var str = elem.getAttribute(attr);

                      if (!str) {
                        return null;
                      } // const m = str.match(/\(#(?<id>.+)\)/);
                      // if (!m || !m.groups.id) {


                      var m = str.match(/\(#(.*)\)/);

                      if (!m || m.length !== 2) {
                        return null;
                      }

                      return svgCanvas.getElem(m[1]); // return svgCanvas.getElem(m.groups.id);
                    };

                    showPanel = function _showPanel(on) {
                      $('#placemark_panel').toggle(on);
                    };

                    svgEditor = _this;
                    svgCanvas = svgEditor.canvas;
                    addElem = svgCanvas.addSVGElementFromJson;
                    $ = S.$, importLocale = S.importLocale; // {svgcontent},

                    _context.next = 17;
                    return importLocale();

                  case 17:
                    strings = _context.sent;
                    markerTypes = {
                      nomarker: {},
                      forwardslash: {
                        element: 'path',
                        attr: {
                          d: 'M30,100 L70,0'
                        }
                      },
                      reverseslash: {
                        element: 'path',
                        attr: {
                          d: 'M30,0 L70,100'
                        }
                      },
                      verticalslash: {
                        element: 'path',
                        attr: {
                          d: 'M50,0 L50,100'
                        }
                      },
                      xmark: {
                        element: 'path',
                        attr: {
                          d: 'M20,80 L80,20 M80,80 L20,20'
                        }
                      },
                      leftarrow: {
                        element: 'path',
                        attr: {
                          d: 'M0,50 L100,90 L70,50 L100,10 Z'
                        }
                      },
                      rightarrow: {
                        element: 'path',
                        attr: {
                          d: 'M100,50 L0,90 L30,50 L0,10 Z'
                        }
                      },
                      box: {
                        element: 'path',
                        attr: {
                          d: 'M20,20 L20,80 L80,80 L80,20 Z'
                        }
                      },
                      star: {
                        element: 'path',
                        attr: {
                          d: 'M10,30 L90,30 L20,90 L50,10 L80,90 Z'
                        }
                      },
                      mcircle: {
                        element: 'circle',
                        attr: {
                          r: 30,
                          cx: 50,
                          cy: 50
                        }
                      },
                      triangle: {
                        element: 'path',
                        attr: {
                          d: 'M10,80 L50,20 L80,80 Z'
                        }
                      }
                    }; // duplicate shapes to support unfilled (open) marker types with an _o suffix

                    ['leftarrow', 'rightarrow', 'box', 'star', 'mcircle', 'triangle'].forEach(function (v) {
                      markerTypes[v + '_o'] = markerTypes[v];
                    });
                    /**
                     *
                     * @param {boolean} on
                     * @returns {void}
                     */

                    buttons = [{
                      id: 'tool_placemark',
                      icon: svgEditor.curConfig.extIconsPath + 'placemark.png',
                      type: 'mode',
                      position: 12,
                      events: {
                        click: function click() {
                          showPanel(true);
                          svgCanvas.setMode('placemark');
                        }
                      }
                    }];
                    contextTools = [{
                      type: 'button-select',
                      panel: 'placemark_panel',
                      id: 'placemark_marker',
                      colnum: 3,
                      events: {
                        change: setArrowFromButton
                      }
                    }, {
                      type: 'input',
                      panel: 'placemark_panel',
                      id: 'placemarkText',
                      size: 20,
                      defval: '',
                      events: {
                        change: function change() {
                          updateText(this.value);
                        }
                      }
                    }, {
                      type: 'input',
                      panel: 'placemark_panel',
                      id: 'placemarkFont',
                      size: 7,
                      defval: 'Arial 10',
                      events: {
                        change: function change() {
                          updateFont(this.value);
                        }
                      }
                    }];
                    return _context.abrupt("return", {
                      name: strings.name,
                      svgicons: svgEditor.curConfig.extIconsPath + 'placemark-icons.xml',
                      buttons: addMarkerButtons(strings.buttons.map(function (button, i) {
                        return Object.assign(buttons[i], button);
                      })),
                      context_tools: strings.contextTools.map(function (contextTool, i) {
                        return Object.assign(contextTools[i], contextTool);
                      }),
                      callback: function callback() {
                        $('#placemark_panel').hide(); // const endChanges = function(){};
                      },
                      mouseDown: function mouseDown(opts) {
                        // const rgb = svgCanvas.getColor('fill');
                        var sRgb = svgCanvas.getColor('stroke');
                        var sWidth = svgCanvas.getStrokeWidth();

                        if (svgCanvas.getMode() === 'placemark') {
                          started = true;
                          var id = svgCanvas.getNextId();
                          var items = $('#placemarkText').val().split(';');
                          var font = $('#placemarkFont').val().split(' ');
                          var fontSize = Number.parseInt(font.pop());
                          font = font.join(' ');
                          var x0 = opts.start_x + 10,
                              y0 = opts.start_y + 10;
                          var maxlen = 0;
                          var children = [{
                            element: 'line',
                            attr: {
                              id: id + '_pline_0',
                              fill: 'none',
                              stroke: sRgb,
                              'stroke-width': sWidth,
                              'stroke-linecap': 'round',
                              x1: opts.start_x,
                              y1: opts.start_y,
                              x2: x0,
                              y2: y0
                            }
                          }];
                          items.forEach(function (i, n) {
                            maxlen = Math.max(maxlen, i.length);
                            children.push({
                              element: 'line',
                              attr: {
                                id: id + '_tline_' + n,
                                fill: 'none',
                                stroke: sRgb,
                                'stroke-width': sWidth,
                                'stroke-linecap': 'round',
                                x1: x0,
                                y1: y0 + (fontSize + 6) * n,
                                x2: x0 + i.length * fontSize * 0.5 + fontSize,
                                y2: y0 + (fontSize + 6) * n
                              }
                            });
                            children.push({
                              element: 'text',
                              attr: {
                                id: id + '_txt_' + n,
                                fill: sRgb,
                                stroke: 'none',
                                'stroke-width': 0,
                                x: x0 + 3,
                                y: y0 - 3 + (fontSize + 6) * n,
                                'font-family': font,
                                'font-size': fontSize,
                                'text-anchor': 'start'
                              },
                              children: [i]
                            });
                          });

                          if (items.length > 0) {
                            children.push({
                              element: 'line',
                              attr: {
                                id: id + '_vline_0',
                                fill: 'none',
                                stroke: sRgb,
                                'stroke-width': sWidth,
                                'stroke-linecap': 'round',
                                x1: x0,
                                y1: y0,
                                x2: x0,
                                y2: y0 + (fontSize + 6) * (items.length - 1)
                              }
                            });
                          }

                          newPM = svgCanvas.addSVGElementFromJson({
                            element: 'g',
                            attr: {
                              id: id,
                              "class": 'placemark',
                              fontSize: fontSize,
                              maxlen: maxlen,
                              lines: items.length,
                              x: opts.start_x,
                              y: opts.start_y,
                              px: opts.start_x,
                              py: opts.start_y
                            },
                            children: children
                          });
                          setMarker(newPM.firstElementChild, $('#placemark_marker').attr('value') || 'leftarrow');
                          return {
                            started: true
                          };
                        }

                        return undefined;
                      },
                      mouseMove: function mouseMove(opts) {
                        if (!started) {
                          return undefined;
                        }

                        if (svgCanvas.getMode() === 'placemark') {
                          var x = opts.mouse_x / svgCanvas.getZoom();
                          var y = opts.mouse_y / svgCanvas.getZoom();

                          var _$$attr = $(newPM).attr(['fontSize', 'maxlen', 'lines', 'px', 'py']),
                              fontSize = _$$attr.fontSize,
                              maxlen = _$$attr.maxlen,
                              lines = _$$attr.lines,
                              px = _$$attr.px,
                              py = _$$attr.py;

                          $(newPM).attr({
                            x: x,
                            y: y
                          });
                          $(newPM).children().each(function (_, i) {
                            var _i$id$split5 = i.id.split('_'),
                                _i$id$split6 = _slicedToArray(_i$id$split5, 4),
                                type = _i$id$split6[2],
                                n = _i$id$split6[3];

                            var y0 = y + (fontSize + 6) * n,
                                x0 = x + maxlen * fontSize * 0.5 + fontSize;
                            var nx = x + (x0 - x) / 2 < px ? x0 : x;
                            var ny = y + (fontSize + 6) * (lines - 1) / 2 < py ? y + (fontSize + 6) * (lines - 1) : y;

                            if (type === 'pline') {
                              i.setAttribute('x2', nx);
                              i.setAttribute('y2', ny);
                            }

                            if (type === 'tline') {
                              i.setAttribute('x1', x);
                              i.setAttribute('y1', y0);
                              i.setAttribute('x2', x0);
                              i.setAttribute('y2', y0);
                            }

                            if (type === 'vline') {
                              i.setAttribute('x1', nx);
                              i.setAttribute('y1', y);
                              i.setAttribute('x2', nx);
                              i.setAttribute('y2', y + (fontSize + 6) * (lines - 1));
                            }

                            if (type === 'txt') {
                              i.setAttribute('x', x + fontSize / 2);
                              i.setAttribute('y', y0 - 3);
                            }
                          });
                          return {
                            started: true
                          };
                        }

                        return undefined;
                      },
                      mouseUp: function mouseUp() {
                        if (svgCanvas.getMode() === 'placemark') {
                          var _$$attr2 = $(newPM).attr(['x', 'y', 'px', 'py']),
                              x = _$$attr2.x,
                              y = _$$attr2.y,
                              px = _$$attr2.px,
                              py = _$$attr2.py;

                          return {
                            keep: x != px && y != py,
                            // eslint-disable-line eqeqeq
                            element: newPM
                          };
                        }

                        return undefined;
                      },
                      selectedChanged: function selectedChanged(opts) {
                        // Use this to update the current selected elements
                        selElems = opts.elems;
                        selElems.forEach(function (elem) {
                          if (elem && elem.getAttribute('class').includes('placemark')) {
                            var txt = [];
                            $(elem).children().each(function (n, i) {
                              var _i$id$split7 = i.id.split('_'),
                                  _i$id$split8 = _slicedToArray(_i$id$split7, 3),
                                  type = _i$id$split8[2];

                              if (type === 'txt') {
                                $('#placemarkFont').val(i.getAttribute('font-family') + ' ' + i.getAttribute('font-size'));
                                txt.push($(i).text());
                              }
                            });
                            $('#placemarkText').val(txt.join(';'));
                            showPanel(true);
                          } else {
                            showPanel(false);
                          }
                        });
                      },
                      elementChanged: function elementChanged(opts) {
                        opts.elems.forEach(function (elem) {
                          if (elem.id.includes('pline_0')) {
                            // need update marker of pline_0
                            colorChanged(elem);
                            updateReferences(elem);
                          }
                        });
                      }
                    });

                  case 23:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        }
      });

    }
  };
});