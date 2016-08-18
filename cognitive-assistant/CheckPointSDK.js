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

var CheckPoint = function () {
    function CheckPoint(appId) {
        _classCallCheck(this, CheckPoint);

        this.baseUri = 'http://api.humley.com/iviewsessions/sessionswebcalls.asmx';
        this.appId = appId;
    }

    _createClass(CheckPoint, [{
        key: 'createSession',
        value: function createSession(session) {
            var vm = this;
            $.soap({
                url: this.baseUri,
                method: 'createSession',
                SOAPAction: 'http://localhost/SessionsWebCalls/SessionsWebCalls/createSession',
                appendMethodToURL: false,
                envAttributes: {
                    "c": "http://schemas.xmlsoap.org/soap/encoding/",
                    "d": "http://www.w3.org/2001/XMLSchema",
                    "i": "http://www.w3.org/2001/XMLSchema-instance"
                },
                namespaceURL: 'http://localhost/SessionsWebCalls/SessionsWebCalls',
                data: {
                    AppID: this.appId,
                    MSISDN: session.MSISDN || '',
                    IPAddress: session.IPAddress || '',
                    User_Agent: navigator.userAgent,
                    IMEI: session.IMEI || '',
                    UUID: session.UUID || ''
                },
                success: function success(soapResponse) {
                    var result = soapResponse.toJSON();
                    if (result.Body.createSessionResponse.createSessionResult.result.HasError === "true") {
                        console.error(result.Body.createSessionResponse.createSessionResult.result.StatusCode, result.Body.createSessionResponse.createSessionResult.result.StatusMessage);
                    }
                    vm.sessionId = result.Body.createSessionResponse.createSessionResult.resultString;
                    if (session.sendCheckPoint) {
                        vm.CheckPointReachedWithVariable({ checkpointID: '8018', variableName: 'LF', variableValue: '4' }).then(function (data) {
                            console.log(data);
                        }, function (error) {
                            console.error(error);
                        });
                    }
                },
                error: function error(soapResponse) {
                    console.error(soapResponse.toString());
                }
            });
        }
    }, {
        key: 'xmlToJson',
        value: function xmlToJson(xml) {
            var obj = {};
            if (xml.nodeType == 1) {
                if (xml.attributes.length > 0) {
                    obj["@attributes"] = {};
                    for (var j = 0; j < xml.attributes.length; j++) {
                        var attribute = xml.attributes.item(j);
                        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                    }
                }
            } else if (xml.nodeType == 3) {
                obj = xml.nodeValue;
            }
            if (xml.hasChildNodes()) {
                for (var i = 0; i < xml.childNodes.length; i++) {
                    var item = xml.childNodes.item(i);
                    var nodeName = item.nodeName.substring(item.nodeName.indexOf(":") + 1).replace('#', '');
                    if (typeof obj[nodeName] == "undefined") {
                        obj[nodeName] = this.xmlToJson(item);
                    } else {
                        if (typeof obj[nodeName].push == "undefined") {
                            var old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(this.xmlToJson(item));
                    }
                }
            }
            return obj;
        }
    }, {
        key: 'CheckPointReachedWithVariable',
        value: function CheckPointReachedWithVariable(checkpoint) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
                var _this = this;

                var vm;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                vm = this;
                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                    $.post("http://api.humley.com/iviewsessions/sessionswebcalls.asmx/CheckPointReachedWithVariable", {
                                        sessionId: _this.sessionId,
                                        checkpointID: checkpoint.checkpointID,
                                        variableName: checkpoint.variableName,
                                        variableValue: checkpoint.variableValue
                                    }).done(function (data) {
                                        resolve(vm.xmlToJson(data).CheckPointLogged.result);
                                    }).fail(function (error) {
                                        reject(vm.xmlToJson(error));
                                    });
                                }));

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return CheckPoint;
}();