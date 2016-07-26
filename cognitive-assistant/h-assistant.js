'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator.throw(value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};

var humleyConversationBot = function () {
    function humleyConversationBot(credential) {
        _classCallCheck(this, humleyConversationBot);

        this.baseUri = 'http://api.humley.com/conversation/live/Conversation.svc';
        this.credential = credential;
    }

    _createClass(humleyConversationBot, [{
        key: 'init',
        value: function init(prams) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.baseData = prams;
                                data = this.buildStartData();
                                _context.next = 4;
                                return this.client(data, Method.OpenConv);

                            case 4:
                                return _context.abrupt('return', _context.sent);

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }, {
        key: 'talk',
        value: function talk(cidin, uuidin, _talk) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee2() {
                var data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                data = this.buildChatData(cidin, uuidin, _talk);
                                _context2.next = 3;
                                return this.client(data, Method.Talk);

                            case 3:
                                return _context2.abrupt('return', _context2.sent);

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
        }
    }, {
        key: 'buildStartData',
        value: function buildStartData() {
            return {
                u: this.credential.username,
                p: this.credential.password,
                params: this.baseData.params,
                uuid: this.baseData.uuid,
                hid: this.credential.productId,
                cv: this.baseData.cv,
                mx: this.baseData.mx,
                imei: this.baseData.imei,
                udid: this.baseData.udid,
                ua: navigator.userAgent,
                noid: this.baseData.noid,
                simid: this.baseData.simid,
                imsi: this.baseData.imsi,
                l: navigator.language,
                dt: moment().format('YYYY-MM-DD h:mm:ss')
            };
        }
    }, {
        key: 'buildChatData',
        value: function buildChatData(cidin, uuidin, talk) {
            return {
                u: this.credential.username,
                p: this.credential.password,
                q: talk,
                uuid: uuidin,
                hid: this.credential.productId,
                cv: this.baseData.cv,
                mx: this.baseData.mx,
                imei: this.baseData.imei,
                udid: this.baseData.udid,
                ua: navigator.userAgent,
                noid: this.baseData.noid,
                simid: this.baseData.simid,
                imsi: this.baseData.imsi,
                l: navigator.language,
                dt: moment().format('YYYY-MM-DD h:mm:ss'),
                cid: cidin
            };
        }
    }, {
        key: 'client',
        value: function client(data, clientMethod) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee3() {
                var _this = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                return _context3.abrupt('return', new Promise(function (resolve, reject) {
                                    $.soap({
                                        url: _this.baseUri,
                                        method: Method[clientMethod],
                                        SOAPAction: clientMethod === Method.OpenConv ? 'http://tempuri.org/IConversation/OpenConv' : 'http://tempuri.org/IConversation/Talk',
                                        appendMethodToURL: false,
                                        envAttributes: {
                                            "c": "http://schemas.xmlsoap.org/soap/encoding/",
                                            "d": "http://www.w3.org/2001/XMLSchema",
                                            "i": "http://www.w3.org/2001/XMLSchema-instance"
                                        },
                                        namespaceURL: "http://tempuri.org/",
                                        data: data,
                                        success: function success(soapResponse) {
                                            resolve(soapResponse.toJSON());
                                        },
                                        error: function error(soapResponse) {
                                            reject(soapResponse.toString());
                                        }
                                    });
                                }));

                            case 1:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }]);

    return humleyConversationBot;
}();

var Method;
(function (Method) {
    Method[Method["OpenConv"] = 0] = "OpenConv";
    Method[Method["Talk"] = 1] = "Talk";
})(Method || (Method = {}));