'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
    function humleyConversationBot(credential, allowfeedback) {
        _classCallCheck(this, humleyConversationBot);

        this.baseUri = 'http://api.humley.com/conversation/live/Conversation.svc';
        this.allowfeedback = true;
        this.credential = credential;
        if (allowfeedback !== undefined) {
            this.allowfeedback = allowfeedback;
        }
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
                                return this.startClient(data);

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
        value: function talk(_talk) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee2() {
                var data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                data = this.buildChatData(this.cid, this.uuid, _talk);
                                _context2.next = 3;
                                return this.talkClient(data);

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
        key: 'sendCheckPoint',
        value: function sendCheckPoint(checkpointID, variableName, value) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
                var checkpointApi;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                checkpointApi = new CheckPoint(this.credential.productId + 5000);

                                checkpointApi.CheckPointReachedWithVariable({ checkpointID: checkpointID, variableName: variableName, variableValue: value }).then(function (data) {}, function (error) {
                                    console.log(error);
                                });

                            case 2:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
        }
    }, {
        key: 'sendFeedback',
        value: function sendFeedback(typeId) {
            return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
                var feedback;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                feedback = new QuestionFeedback({ username: this.credential.username, password: this.credential.password });

                                feedback.sendFeedback({ aid: this.feedbackAnswerID, fl: typeId, lid: this.QALogID });

                            case 2:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
        }
    }, {
        key: 'entries',
        value: regeneratorRuntime.mark(function entries(obj) {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key;

            return regeneratorRuntime.wrap(function entries$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context5.prev = 3;
                            _iterator = Object.keys(obj)[Symbol.iterator]();

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context5.next = 12;
                                break;
                            }

                            key = _step.value;
                            _context5.next = 9;
                            return [key, obj[key]];

                        case 9:
                            _iteratorNormalCompletion = true;
                            _context5.next = 5;
                            break;

                        case 12:
                            _context5.next = 18;
                            break;

                        case 14:
                            _context5.prev = 14;
                            _context5.t0 = _context5['catch'](3);
                            _didIteratorError = true;
                            _iteratorError = _context5.t0;

                        case 18:
                            _context5.prev = 18;
                            _context5.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 21:
                            _context5.prev = 21;

                            if (!_didIteratorError) {
                                _context5.next = 24;
                                break;
                            }

                            throw _iteratorError;

                        case 24:
                            return _context5.finish(21);

                        case 25:
                            return _context5.finish(18);

                        case 26:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, entries, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
    }, {
        key: 'buildStartData',
        value: function buildStartData() {
            var prams = void 0;
            prams = '';
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.entries(this.baseData.params)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2);

                    var key = _step2$value[0];
                    var value = _step2$value[1];

                    if (prams === '') {
                        prams += key + '^' + value;
                    } else {
                        prams += ',' + key + '^' + value;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return {
                u: this.credential.username,
                p: this.credential.password,
                params: prams,
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
        key: 'startClient',
        value: function startClient(data) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee5() {
                var _this = this;

                var vm;
                return regeneratorRuntime.wrap(function _callee5$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                vm = this;
                                return _context6.abrupt('return', new Promise(function (resolve, reject) {
                                    $.soap({
                                        url: _this.baseUri,
                                        method: 'OpenConv',
                                        SOAPAction: 'http://tempuri.org/IConversation/OpenConv',
                                        appendMethodToURL: false,
                                        envAttributes: {
                                            "c": "http://schemas.xmlsoap.org/soap/encoding/",
                                            "d": "http://www.w3.org/2001/XMLSchema",
                                            "i": "http://www.w3.org/2001/XMLSchema-instance"
                                        },
                                        namespaceURL: "http://tempuri.org/",
                                        data: data,
                                        success: function success(soapResponse) {
                                            var result = soapResponse.toJSON();
                                            vm.cid = result.Body.OpenConvResponse.OpenConvResult.cid;
                                            vm.uuid = result.Body.OpenConvResponse.OpenConvResult.uuid;
                                            var checkpointApi = new CheckPoint(vm.credential.productId + 5000);
                                            checkpointApi.createSession({ IMEI: vm.baseData.imei, UUID: vm.uuid, sendCheckPoint: true });
                                            resolve(true);
                                        },
                                        error: function error(soapResponse) {
                                            var result = soapResponse.toJSON();
                                            var checkpointApi = new CheckPoint(vm.credential.productId + 5000);
                                            checkpointApi.CheckPointReachedWithVariable({ checkpointID: '8064', variableName: 'Client Error', variableValue: Array.prototype.slice.call(arguments).toString() }).then(function (data) {}, function (error) {
                                                console.log(error);
                                            });
                                            resolve(false);
                                        }
                                    });
                                }));

                            case 2:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee5, this);
            }));
        }
    }, {
        key: 'talkClient',
        value: function talkClient(data) {
            return __awaiter(this, void 0, Promise, regeneratorRuntime.mark(function _callee6() {
                var _this2 = this;

                var vm;
                return regeneratorRuntime.wrap(function _callee6$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                vm = this;
                                return _context7.abrupt('return', new Promise(function (resolve, reject) {
                                    $.soap({
                                        url: _this2.baseUri,
                                        method: 'Talk',
                                        SOAPAction: 'http://tempuri.org/IConversation/Talk',
                                        appendMethodToURL: false,
                                        envAttributes: {
                                            "c": "http://schemas.xmlsoap.org/soap/encoding/",
                                            "d": "http://www.w3.org/2001/XMLSchema",
                                            "i": "http://www.w3.org/2001/XMLSchema-instance"
                                        },
                                        namespaceURL: "http://tempuri.org/",
                                        data: data,
                                        success: function success(soapResponse) {
                                            var result = soapResponse.toJSON();
                                            var hasError = false;
                                            vm.cid = result.Body.TalkResponse.TalkResult.cid;
                                            vm.uuid = result.Body.TalkResponse.TalkResult.uuid;
                                            var replies = void 0;
                                            replies = [];
                                            if (result.Body.TalkResponse.TalkResult.ef === "true") {
                                                hasError = true;
                                            } else {
                                                var banners = result.Body.TalkResponse.TalkResult.al.Banner;
                                                if (banners !== null && Object.prototype.toString.call(banners) !== '[object Array]') {
                                                    banners = [banners];
                                                }
                                                for (var i = 0; i < banners.length; i++) {
                                                    var reply = [];
                                                    if (banners[i].QAMD.QAType === "1" || banners[i].QAMD.QAType === "2") {
                                                        vm.feedbackAnswerID = banners[i].QAMD.QAAnsID;
                                                        vm.QALogID = banners[i].QAMD.QALogID;
                                                    }
                                                    var hasVideo = banners[i].VI.VU.toString() !== "[object Object]";
                                                    reply = {
                                                        replyId: banners[i].BannerID,
                                                        actionType: banners[i].ActionType,
                                                        actionURL: banners[i].ActionURL,
                                                        category: banners[i].CAT,
                                                        buttonId: banners[i].QAMD.QAButtonID.toString() !== "[object Object]" ? parseInt(banners[i].QAMD.QAButtonID) : banners[i].VI.VB.toString() !== "[object Object]" ? parseInt(banners[i].VI.VB) : undefined,
                                                        confidence: banners[i].QAMD.QAConf.toString() !== "[object Object]" ? parseInt(banners[i].QAMD.QAConf) : -1,
                                                        reply: banners[i].QAMD.QAHTML,
                                                        hasVideo: hasVideo,
                                                        video: {
                                                            header: hasVideo ? banners[i].VI.VH : undefined,
                                                            url: hasVideo ? banners[i].VI.VT === "2" ? 'https://www.youtube-nocookie.com/embed/' + banners[i].VI.VU : banners[i].VI.VU : undefined
                                                        }
                                                    };
                                                    if (reply.buttonId !== -1 || reply.buttonId === -1 && vm.allowfeedback) {
                                                        replies.push(reply);
                                                    }
                                                }
                                            }
                                            resolve({
                                                question: result.Body.TalkResponse.TalkResult.q,
                                                error: hasError,
                                                replies: replies,
                                                errorInfo: hasError ? result.Body.TalkResponse.TalkResult.ec : -1
                                            });
                                        },
                                        error: function error(soapResponse) {
                                            var result = soapResponse.toJSON();
                                            var checkpointApi = new CheckPoint(vm.credential.productId + 5000);
                                            checkpointApi.CheckPointReachedWithVariable({ checkpointID: '8064', variableName: 'Client Error', variableValue: Array.prototype.slice.call(arguments).toString() }).then(function (data) {}, function (error) {
                                                console.log(error);
                                            });
                                            resolve({
                                                question: "",
                                                error: true,
                                                replies: [],
                                                errorInfo: soapResponse.toJSON()
                                            });
                                        }
                                    });
                                }));

                            case 2:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee6, this);
            }));
        }
    }]);

    return humleyConversationBot;
}();