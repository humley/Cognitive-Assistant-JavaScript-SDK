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

var QuestionFeedback = function () {
    function QuestionFeedback(credential) {
        _classCallCheck(this, QuestionFeedback);

        this.baseUri = 'http://api.humley.com/watson/feedback/live/WatsonFeedbackService.svc';
        this.credential = credential;
    }

    _createClass(QuestionFeedback, [{
        key: 'sendFeedback',
        value: function sendFeedback(prams) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee() {
                var _this = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', new Promise(function (resolve, reject) {
                                    $.soap({
                                        url: _this.baseUri,
                                        method: 'QuestionFeedback',
                                        SOAPAction: 'http://tempuri.org/IWatsonFeedbackService/QuestionFeedback',
                                        appendMethodToURL: false,
                                        envAttributes: {
                                            "c": "http://schemas.xmlsoap.org/soap/encoding/",
                                            "d": "http://www.w3.org/2001/XMLSchema",
                                            "i": "http://www.w3.org/2001/XMLSchema-instance"
                                        },
                                        namespaceURL: "http://tempuri.org/",
                                        data: {
                                            u: _this.credential.username,
                                            p: _this.credential.password,
                                            aid: prams.aid,
                                            lid: prams.lid,
                                            fl: prams.fl
                                        },
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
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
        }
    }]);

    return QuestionFeedback;
}();