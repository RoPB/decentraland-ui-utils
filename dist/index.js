(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('@dcl/ui-scene-utils', ['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ui-utils'] = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
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

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    /**
     * Execute once after X milliseconds
     */
    var UIDelay = /** @class */ (function () {
        /**
         * @param seconds amount of time in seconds
         * @param onTimeReachedCallback callback for when time is reached
         */
        function UIDelay(seconds, onTimeReachedCallback) {
            var _this = this;
            TimerSystem.createAndAddToEngine();
            this.elapsedTime = 0;
            this.targetTime = seconds;
            this.onTimeReachedCallback = onTimeReachedCallback;
            this.onTargetTimeReached = function (entity) {
                _this.onTimeReachedCallback();
                entity.removeComponent(UIDelay_1);
            };
        }
        UIDelay_1 = UIDelay;
        UIDelay.prototype.setCallback = function (onTimeReachedCallback) {
            this.onTimeReachedCallback = onTimeReachedCallback;
        };
        var UIDelay_1;
        UIDelay = UIDelay_1 = __decorate([
            Component('UItimerDelay')
        ], UIDelay);
        return UIDelay;
    }());
    var entitiesWithDelay = engine.getComponentGroup(UIDelay);
    var TimerSystem = /** @class */ (function () {
        function TimerSystem() {
            TimerSystem._instance = this;
        }
        TimerSystem.createAndAddToEngine = function () {
            if (this._instance == null) {
                this._instance = new TimerSystem();
                engine.addSystem(this._instance);
            }
            return this._instance;
        };
        TimerSystem.prototype.update = function (dt) {
            var e_1, _a;
            try {
                for (var _b = __values(entitiesWithDelay.entities), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var ent = _c.value;
                    var timerComponent = ent.getComponent(UIDelay);
                    timerComponent.elapsedTime += dt;
                    if (timerComponent.elapsedTime >= timerComponent.targetTime) {
                        timerComponent.onTargetTimeReached(ent);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        TimerSystem._instance = null;
        return TimerSystem;
    }());

    var canvas = new UICanvas();
    canvas.visible = true;
    var SFFont = new Font(Fonts.SanFrancisco);
    var SFHeavyFont = new Font(Fonts.SanFrancisco_Heavy);
    var lightTheme = new Texture('https://decentraland.org/images/ui/light-atlas-v3.png');
    var darkTheme = new Texture('https://decentraland.org/images/ui/dark-atlas-v3.png');
    var message = new UIText(canvas); //messageBackground
    message.vAlign = 'center';
    message.hAlign = 'center';
    message.hTextAlign = 'center';
    message.vTextAlign = 'center';
    message.font = SFFont;
    message.fontSize = 60;
    message.color = new Color4(0, 0, 0, 1);
    message.visible = false;
    message.positionY = 80;
    var promptBackground = new UIImage(canvas, lightTheme);
    promptBackground.hAlign = 'center';
    promptBackground.vAlign = 'center';
    promptBackground.width = 400;
    promptBackground.height = 250;
    promptBackground.visible = false;

    /**
     * Displays text in the center of the UI for a specific time
     *
     * @param {string} value string to display
     * @param {duration} duration time to keep the text visible (in seconds). Default: 3 seconds.
     * @param {Color4} [color=Color.Yellow()] text color, as a Color4. Default: black
     * @param {number} [size=60] font size, default 60
     * @param {boolean} bordersOff if true, text won't have a black margin around it
     *
     */
    function displayAnnouncement(value, duration, color, size, bordersOff) {
        message.visible = true;
        message.value = value;
        message.color = color ? color : Color4.Yellow();
        message.fontSize = size ? size : 50;
        message.font = SFHeavyFont;
        message.outlineColor = Color4.Black();
        message.outlineWidth = bordersOff ? 0 : 0.1;
        //message.width = value.length * message.fontSize
        message.adaptWidth = false;
        message.textWrapping = true;
        message.width = 900;
        var dummyEnty = new Entity();
        engine.addEntity(dummyEnty);
        if (duration != -1) {
            dummyEnty.addComponentOrReplace(new UIDelay(duration ? duration : 3, function () {
                message.visible = false;
            }));
        }
    }
    /**
     * Hides any announcement text that might be visible
     */
    function hideAnnouncements() {
        message.visible = false;
    }

    /**
     * Displays a number on the center of the UI
     *
     * @param {number} value starting value
     * @param {number} [xOffset=0] position on X, to enable fitting several counters
     * @param {number} [yOffset=0] position on Y, to enable fitting several counters
     * @param {Color4} [color=Color4.White()] text color
     * @param {number} [size=25] text size
     * @param {boolean} bordersOff remove black border around text
     * @param {boolean} fixedDigits display a specific amount of digits, regardless of the value, adding preceding 0s
     *
     */
    var UICounter = /** @class */ (function (_super) {
        __extends(UICounter, _super);
        function UICounter(value, xOffset, yOffset, color, size, bordersOff, fixedDigits) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            _this.valueAsNum = value;
            _this.uiText = new UIText(canvas);
            _this.fixedDigits = fixedDigits ? fixedDigits : null;
            _this.uiText.value = _this.toFixedLengthString(value);
            _this.uiText.hAlign = 'right';
            _this.uiText.vAlign = 'bottom';
            _this.uiText.positionX = xOffset ? xOffset : 0;
            _this.uiText.positionY = yOffset ? yOffset : 0;
            _this.uiText.fontSize = size ? size : 25;
            _this.uiText.font = SFFont;
            _this.uiText.vTextAlign = 'center';
            _this.uiText.hTextAlign = 'center';
            _this.uiText.color = color ? color : Color4.White();
            _this.uiText.outlineColor = Color4.Black();
            _this.uiText.outlineWidth = bordersOff ? 0 : 0.1;
            return _this;
        }
        /**
         * Get the current value of the counter
         *  * @return {number} The current value of the counter
         *
         */
        UICounter.prototype.read = function () {
            return this.valueAsNum;
        };
        /**
         * Increase the value on the counter.
         *
         * @param {number} [amount=1] How much to increase the counter. By default it increases by 1
         *
         */
        UICounter.prototype.increase = function (amount) {
            this.valueAsNum += amount ? amount : 1;
            this.uiText.value = this.toFixedLengthString(this.valueAsNum);
        };
        /**
         * Decrease the value on the counter.
         *
         * @param {number} [amount=1] How much to decrease the counter. By default it decreases by 1
         *
         */
        UICounter.prototype.decrease = function (amount) {
            this.valueAsNum -= amount ? amount : 1;
            this.uiText.value = this.toFixedLengthString(this.valueAsNum);
        };
        /**
         * Sets the counter's value to a specific amount, regardless of what it was before.
         *
         * @param {number} amount New value for the counter
         *
         */
        UICounter.prototype.set = function (amount) {
            this.valueAsNum = amount;
            this.uiText.value = this.toFixedLengthString(this.valueAsNum);
        };
        /**
         * Hides the counter from view in the screen. Its values can still be changed and read while hidden.
         */
        UICounter.prototype.hide = function () {
            this.uiText.visible = false;
        };
        /**
         * Makes an invisible counter visible again.
         */
        UICounter.prototype.show = function () {
            this.uiText.visible = true;
        };
        // Adds 0s on the left, or rounds decimals to adjust length
        UICounter.prototype.toFixedLengthString = function (value) {
            var stringValue = value.toString();
            if (!this.fixedDigits)
                return stringValue;
            var lenDiff = stringValue.length - this.fixedDigits;
            while (lenDiff < 0) {
                stringValue = '0'.concat(stringValue);
                lenDiff += 1;
            }
            if (lenDiff > 0) {
                stringValue = value.toPrecision(this.fixedDigits);
            }
            return stringValue;
        };
        return UICounter;
    }(Entity));

    (function (PromptStyles) {
        PromptStyles["LIGHT"] = "light";
        PromptStyles["DARK"] = "dark";
        PromptStyles["LIGHTLARGE"] = "lightlarge";
        PromptStyles["DARKLARGE"] = "darklarge";
        PromptStyles["LIGHTSLANTED"] = "lightslanted";
        PromptStyles["DARKSLANTED"] = "darkslanted";
    })(exports.PromptStyles || (exports.PromptStyles = {}));
    (function (BarStyles) {
        BarStyles["ROUNDBLACK"] = "roundblack";
        BarStyles["ROUNDWHITE"] = "roundwhite";
        BarStyles["ROUNDSILVER"] = "roundsilver";
        BarStyles["ROUNDGOLD"] = "roundgold";
        BarStyles["SQUAREBLACK"] = "squareblack";
        BarStyles["SQUAREWHITE"] = "squarewhite";
        BarStyles["SQUARESILVER"] = "squaresilver";
        BarStyles["SQUAREGOLD"] = "squaregold";
    })(exports.BarStyles || (exports.BarStyles = {}));
    (function (ButtonStyles) {
        ButtonStyles["E"] = "e";
        ButtonStyles["F"] = "f";
        ButtonStyles["DARK"] = "dark";
        ButtonStyles["RED"] = "red";
        ButtonStyles["ROUNDBLACK"] = "roundblack";
        ButtonStyles["ROUNDWHITE"] = "roundwhite";
        ButtonStyles["ROUNDSILVER"] = "roundsilver";
        ButtonStyles["ROUNDGOLD"] = "roundgold";
        ButtonStyles["SQUAREBLACK"] = "squareblack";
        ButtonStyles["SQUAREWHITE"] = "squarewhite";
        ButtonStyles["SQUARESILVER"] = "squaresilver";
        ButtonStyles["SQUAREGOLD"] = "squaregold";
    })(exports.ButtonStyles || (exports.ButtonStyles = {}));
    (function (SwitchStyles) {
        SwitchStyles["ROUNDGREEN"] = "roundgreen";
        SwitchStyles["ROUNDRED"] = "roundred";
        SwitchStyles["SQUAREGREEN"] = "squaregreen";
        SwitchStyles["SQUARERED"] = "squarered";
    })(exports.SwitchStyles || (exports.SwitchStyles = {}));

    var resources = {
        buttons: {
            buttonE: {
                sourceWidth: 174,
                sourceHeight: 46,
                sourceLeft: 512,
                sourceTop: 662
            },
            buttonF: {
                sourceWidth: 174,
                sourceHeight: 46,
                sourceLeft: 512,
                sourceTop: 612
            },
            white: {
                sourceWidth: 174,
                sourceHeight: 46,
                sourceLeft: 698,
                sourceTop: 662
            },
            buttonRed: {
                sourceWidth: 174,
                sourceHeight: 46,
                sourceLeft: 512,
                sourceTop: 662
            },
            buttonDark: {
                sourceWidth: 174,
                sourceHeight: 46,
                sourceLeft: 512,
                sourceTop: 612
            },
            roundBlack: {
                sourceWidth: 128,
                sourceHeight: 32,
                sourceLeft: 512,
                sourceTop: 458
            },
            squareBlack: {
                sourceWidth: 128,
                sourceHeight: 32,
                sourceLeft: 646,
                sourceTop: 457
            },
            roundWhite: {
                sourceWidth: 128,
                sourceHeight: 32,
                sourceLeft: 512,
                sourceTop: 494
            },
            squareWhite: {
                sourceWidth: 128,
                sourceHeight: 32,
                sourceLeft: 646,
                sourceTop: 493
            },
            roundSilver: {
                sourceWidth: 128,
                sourceHeight: 32,
                sourceLeft: 512,
                sourceTop: 531
            },
            squareSilver: {
                sourceWidth: 128,
                sourceHeight: 32,
                sourceLeft: 646,
                sourceTop: 531
            },
            roundGold: {
                sourceWidth: 128,
                sourceHeight: 32,
                sourceLeft: 512,
                sourceTop: 567
            },
            squareGold: {
                sourceWidth: 128,
                sourceHeight: 32,
                sourceLeft: 646,
                sourceTop: 567
            }
        },
        buttonLabels: {
            E: {
                sourceWidth: 26,
                sourceHeight: 26,
                sourceLeft: 697,
                sourceTop: 611
            },
            F: {
                sourceWidth: 26,
                sourceHeight: 26,
                sourceLeft: 733,
                sourceTop: 611
            },
            EBlack: {
                sourceWidth: 26,
                sourceHeight: 26,
                sourceLeft: 766,
                sourceTop: 611
            },
            FBlack: {
                sourceWidth: 26,
                sourceHeight: 26,
                sourceLeft: 802,
                sourceTop: 611
            }
        },
        backgrounds: {
            promptBackground: {
                sourceWidth: 416,
                sourceHeight: 352,
                sourceLeft: 501,
                sourceTop: 12
            },
            promptLargeBackground: {
                sourceWidth: 480,
                sourceHeight: 384,
                sourceLeft: 7,
                sourceTop: 12
            },
            promptSlantedBackground: {
                sourceWidth: 486,
                sourceHeight: 326,
                sourceLeft: 7,
                sourceTop: 413
            },
            NPCDialog: {
                sourceWidth: 766,
                sourceHeight: 248,
                sourceLeft: 22,
                sourceTop: 756
            }
        },
        icons: {
            closeW: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 942,
                sourceTop: 306
            },
            closeD: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 986,
                sourceTop: 306
            },
            closeWLarge: {
                sourceWidth: 64,
                sourceHeight: 64,
                sourceLeft: 512,
                sourceTop: 381
            },
            closeDLarge: {
                sourceWidth: 64,
                sourceHeight: 64,
                sourceLeft: 583,
                sourceTop: 381
            },
            closeWNoBack: {
                sourceWidth: 24,
                sourceHeight: 24,
                sourceLeft: 946,
                sourceTop: 252
            },
            closeDNoBack: {
                sourceWidth: 24,
                sourceHeight: 24,
                sourceLeft: 946,
                sourceTop: 214
            },
            closeWNoBackLarge: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 987,
                sourceTop: 214
            },
            closeDNoBackLarge: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 987,
                sourceTop: 260
            },
            FDark: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 950,
                sourceTop: 4
            },
            FWhite: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 987,
                sourceTop: 4
            },
            EDark: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 950,
                sourceTop: 40
            },
            EWhite: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 987,
                sourceTop: 40
            },
            Timer: {
                sourceWidth: 24,
                sourceHeight: 32.2,
                sourceLeft: 718,
                sourceTop: 388
            },
            TimerLarge: {
                sourceWidth: 48,
                sourceHeight: 68,
                sourceLeft: 662,
                sourceTop: 386
            },
            ClickWhite: {
                sourceWidth: 32,
                sourceHeight: 48,
                sourceLeft: 799,
                sourceTop: 389
            },
            ClickDark: {
                sourceWidth: 32,
                sourceHeight: 48,
                sourceLeft: 757,
                sourceTop: 389
            }
        },
        checkboxes: {
            wOff: {
                sourceWidth: 24,
                sourceHeight: 24,
                sourceLeft: 987,
                sourceTop: 76
            },
            wOn: {
                sourceWidth: 24,
                sourceHeight: 24,
                sourceLeft: 987,
                sourceTop: 104
            },
            dOff: {
                sourceWidth: 24,
                sourceHeight: 24,
                sourceLeft: 958,
                sourceTop: 76
            },
            dOn: {
                sourceWidth: 24,
                sourceHeight: 24,
                sourceLeft: 958,
                sourceTop: 104
            },
            wLargeOff: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 987,
                sourceTop: 132
            },
            wLargeOn: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 987,
                sourceTop: 168
            },
            dLargeOff: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 950,
                sourceTop: 132
            },
            dLargeOn: {
                sourceWidth: 32,
                sourceHeight: 32,
                sourceLeft: 950,
                sourceTop: 168
            }
        },
        switches: {
            roundOff: {
                sourceWidth: 64,
                sourceHeight: 32,
                sourceLeft: 783,
                sourceTop: 454
            },
            roundRed: {
                sourceWidth: 64,
                sourceHeight: 32,
                sourceLeft: 853,
                sourceTop: 454
            },
            roundGreen: {
                sourceWidth: 64,
                sourceHeight: 32,
                sourceLeft: 923,
                sourceTop: 454
            },
            squareOff: {
                sourceWidth: 64,
                sourceHeight: 32,
                sourceLeft: 783,
                sourceTop: 501
            },
            squareRed: {
                sourceWidth: 64,
                sourceHeight: 32,
                sourceLeft: 852,
                sourceTop: 501
            },
            squareGreen: {
                sourceWidth: 64,
                sourceHeight: 32,
                sourceLeft: 921,
                sourceTop: 501
            }
        }
    };
    function setSection(image, section) {
        image.sourceWidth = section.sourceWidth;
        image.sourceHeight = section.sourceHeight;
        image.sourceLeft = section.sourceLeft ? section.sourceLeft : 0;
        image.sourceTop = section.sourceTop ? section.sourceTop : 0;
    }
    function buttonIconPos(textLen) {
        var pos = -10 - textLen * 4;
        return pos > -65 ? pos : -65;
    }

    /**
     * Displays a colored bar that can be filled up and updated to different values.
     *
     * @param {number} value starting value
     * @param {number} [xOffset=0] position on X, to enable fitting several counters
     * @param {number} yOffset position on Y, to enable fitting several counters
     * @param {Color4} fillColor color of the bar
     * @param {BarStyles} style margin style of the bar, from the BarStyles enum
     * @param {number} [scale=1] multiplier for the size of the bar. 1 = 128 x 32
     * @param {boolean} startHidden if true, image starts invisible to load in the background till it runs its show() function.
     *
     */
    var UIBar = /** @class */ (function (_super) {
        __extends(UIBar, _super);
        function UIBar(value, xOffset, yOffset, fillColor, style, scale, startHidden) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            _this.valueAsNum = value > 1 ? 1 : value;
            _this.fullWidth = scale ? 128 * scale : 128;
            _this.background = new UIImage(canvas, lightTheme);
            _this.background.width = scale ? scale * 128 : 128;
            _this.background.height = scale ? scale * 32 : 32;
            _this.background.hAlign = 'right';
            _this.background.vAlign = 'bottom';
            _this.background.positionX = xOffset ? xOffset : 0;
            _this.background.positionY = yOffset ? yOffset : 0;
            if (!style) {
                setSection(_this.background, resources.buttons.roundSilver);
            }
            else {
                switch (style) {
                    case exports.BarStyles.ROUNDBLACK:
                        setSection(_this.background, resources.buttons.roundBlack);
                        break;
                    case exports.BarStyles.ROUNDWHITE:
                        setSection(_this.background, resources.buttons.roundWhite);
                        break;
                    case exports.BarStyles.ROUNDSILVER:
                        setSection(_this.background, resources.buttons.roundSilver);
                        break;
                    case exports.BarStyles.ROUNDGOLD:
                        setSection(_this.background, resources.buttons.roundGold);
                        break;
                    case exports.BarStyles.SQUAREBLACK:
                        setSection(_this.background, resources.buttons.squareBlack);
                        break;
                    case exports.BarStyles.SQUAREWHITE:
                        setSection(_this.background, resources.buttons.squareWhite);
                        break;
                    case exports.BarStyles.SQUARESILVER:
                        setSection(_this.background, resources.buttons.squareSilver);
                        break;
                    case exports.BarStyles.SQUAREGOLD:
                        setSection(_this.background, resources.buttons.squareGold);
                        break;
                }
            }
            _this.background.sourceWidth = 128;
            _this.background.sourceHeight = 32;
            _this.background.visible = true;
            _this.bar = new UIContainerRect(_this.background);
            _this.bar.color = fillColor ? fillColor : Color4.Red();
            _this.bar.thickness = 0;
            _this.bar.hAlign = 'left';
            _this.bar.vAlign = 'center';
            _this.bar.positionX = scale ? 2.55 * scale : 2.55;
            _this.bar.positionY = 0;
            _this.bar.height = scale ? scale * 32 - scale * 7.5 : 32 - 7.5;
            _this.bar.width = scale
                ? _this.fullWidth * _this.valueAsNum - 5.1 * scale
                : _this.fullWidth * _this.valueAsNum - 5.1;
            if (startHidden) {
                _this.hide();
            }
            return _this;
        }
        /**
         * Get the current value of the bar
         *  * @return {number} The current value of the bar, as a value from 0 to 1
         *
         */
        UIBar.prototype.read = function () {
            return this.valueAsNum;
        };
        /**
         * Increase the value on the bar.
         *
         * @param {number} [amount=0.1] How much to increase the bar, up to a maximum of 1. By default it increases by 0.1
         *
         */
        UIBar.prototype.increase = function (amount) {
            this.valueAsNum += amount ? amount : 0.1;
            this.bar.width = this.fullWidth * this.valueAsNum - 6;
        };
        /**
         * Decrease the value on the bar.
         *
         * @param {number} [amount=0.1] How much to decrease the bar, down to a minimum of 0. By default it decreases by 0.1
         *
         */
        UIBar.prototype.decrease = function (amount) {
            this.valueAsNum -= amount ? amount : 0.1;
            this.bar.width = this.fullWidth * this.valueAsNum - 6;
        };
        /**
         * Sets the bar's value to a specific amount, regardless of what it was before.
         *
         * @param {number} amount New value for the bar, between 0 and 1
         *
         */
        UIBar.prototype.set = function (amount) {
            this.valueAsNum = amount;
            this.bar.width = this.fullWidth * this.valueAsNum - 6;
        };
        /**
         * Hides the bar from view in the screen. Its values can still be changed and read while hidden.
         */
        UIBar.prototype.hide = function () {
            this.background.visible = false;
            this.bar.visible = false;
        };
        /**
         * Makes an invisible bar visible again.
         */
        UIBar.prototype.show = function () {
            this.background.visible = true;
            this.bar.visible = true;
        };
        return UIBar;
    }(Entity));

    /**
     * Displays an icon of 64x64 on the bottom-left corner
     *
     * @param {string} image path to image file
     * @param {number} xOffset position on X, to enable fitting several counters
     * @param {number} yOffset position on Y, to enable fitting several counters
     * @param {number} width image width
     * @param {number} height image height
     * @param {ImageSection} section cut out a section of the imge, as an object specifying sourceLeft, sourceTop, sourceWidth and sourceHeight
     *
     */
    var MediumIcon = /** @class */ (function (_super) {
        __extends(MediumIcon, _super);
        function MediumIcon(image, xOffset, yOffset, width, height, section) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            var texture = new Texture(image);
            _this.image = new UIImage(canvas, texture);
            _this.image.hAlign = 'right';
            _this.image.vAlign = 'bottom';
            _this.image.positionX = xOffset ? xOffset : 0;
            _this.image.positionY = yOffset ? yOffset : 0;
            _this.image.width = width ? width : 64;
            _this.image.height = height ? height : 64;
            _this.image.sourceLeft = section && section.sourceLeft ? section.sourceLeft : 0;
            _this.image.sourceTop = section && section.sourceTop ? section.sourceTop : 0;
            _this.image.sourceWidth =
                section && section.sourceWidth ? section.sourceWidth : width ? width : 64;
            _this.image.sourceHeight =
                section && section.sourceHeight ? section.sourceHeight : height ? height : 64;
            return _this;
        }
        /**
         * Hides the image from view in the screen.
         */
        MediumIcon.prototype.hide = function () {
            this.image.visible = false;
        };
        /**
         * Makes an invisible image visible again.
         * @param {number} duration Seconds to display the image onscreen. If no value is provided, it stays visible.
         */
        MediumIcon.prototype.show = function (duration) {
            var _this = this;
            this.image.visible = true;
            if (duration) {
                var dummyEnty = new Entity();
                engine.addEntity(dummyEnty);
                dummyEnty.addComponentOrReplace(new UIDelay(duration, function () {
                    _this.hide();
                }));
            }
        };
        return MediumIcon;
    }(Entity));
    /**
     * Displays an icon of 32x32 on the bottom-left corner
     *
     * @param {string} image path to image file
     * @param {number} xOffset position on X, to enable fitting several counters
     * @param {number} yOffset position on Y, to enable fitting several counters
     * @param {number} width image width
     * @param {number} height image height
     * @param {ImageSection} section cut out a section of the imge, as an object specifying sourceLeft, sourceTop, sourceWidth and sourceHeight
     *
     */
    var SmallIcon = /** @class */ (function (_super) {
        __extends(SmallIcon, _super);
        function SmallIcon(image, xOffset, yOffset, width, height, section) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            var texture = new Texture(image);
            _this.image = new UIImage(canvas, texture);
            _this.image.hAlign = 'right';
            _this.image.vAlign = 'bottom';
            _this.image.positionX = xOffset ? xOffset : 0;
            _this.image.positionY = yOffset ? yOffset : 0;
            _this.image.width = width ? width : 32;
            _this.image.height = height ? height : 32;
            _this.image.sourceLeft = section && section.sourceLeft ? section.sourceLeft : 0;
            _this.image.sourceTop = section && section.sourceTop ? section.sourceTop : 0;
            _this.image.sourceWidth = section ? section.sourceWidth : width ? width : 32;
            _this.image.sourceHeight = section ? section.sourceHeight : height ? height : 32;
            return _this;
        }
        /**
         * Hides the image from view in the screen.
         */
        SmallIcon.prototype.hide = function () {
            this.image.visible = false;
        };
        /**
         * Makes an invisible image visible again.
         * @param {number} duration Seconds to display the image onscreen. If no value is provided, it stays visible.
         */
        SmallIcon.prototype.show = function (duration) {
            var _this = this;
            this.image.visible = true;
            if (duration) {
                var dummyEnty = new Entity();
                engine.addEntity(dummyEnty);
                dummyEnty.addComponentOrReplace(new UIDelay(duration, function () {
                    _this.hide();
                }));
            }
        };
        return SmallIcon;
    }(Entity));
    /**
     * Displays an icon of 128x128 on the bottom-left corner
     *
     * @param {string} image path to image file
     * @param {number} xOffset position on X, to enable fitting several counters
     * @param {number} yOffset position on Y, to enable fitting several counters
     * @param {number} width image width (128 by default)
     * @param {number} height image height (128 by default)
     * @param {ImageSection} section cut out a section of the imge, as an object specifying sourceLeft, sourceTop, sourceWidth and sourceHeight
     *
     */
    var LargeIcon = /** @class */ (function (_super) {
        __extends(LargeIcon, _super);
        function LargeIcon(image, xOffset, yOffset, width, height, section) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            var texture = new Texture(image);
            _this.image = new UIImage(canvas, texture);
            _this.image.hAlign = 'right';
            _this.image.vAlign = 'bottom';
            _this.image.positionX = xOffset ? xOffset : 0;
            _this.image.positionY = yOffset ? yOffset : 0;
            _this.image.width = width ? width : 128;
            _this.image.height = height ? height : 128;
            _this.image.sourceLeft = section && section.sourceLeft ? section.sourceLeft : 0;
            _this.image.sourceTop = section && section.sourceTop ? section.sourceTop : 0;
            _this.image.sourceWidth = section ? section.sourceWidth : width ? width : 128;
            _this.image.sourceHeight = section ? section.sourceHeight : height ? height : 128;
            return _this;
        }
        /**
         * Hides the image from view in the screen.
         */
        LargeIcon.prototype.hide = function () {
            this.image.visible = false;
        };
        /**
         * Makes an invisible image visible again.
         * @param {number} duration Seconds to display the image onscreen. If no value is provided, it stays visible.
         */
        LargeIcon.prototype.show = function (duration) {
            var _this = this;
            this.image.visible = true;
            if (duration) {
                var dummyEnty = new Entity();
                engine.addEntity(dummyEnty);
                dummyEnty.addComponentOrReplace(new UIDelay(duration, function () {
                    _this.hide();
                }));
            }
        };
        return LargeIcon;
    }(Entity));
    /**
     * Displays an image of 512x512 on the center of the screen for limited time
     *
     * @param {string} image path to image file
     * @param {number} duration seconds to display the image onscreen. 0 keeps it on till you hide it
     * @param {number} xOffset position on X, to enable fitting several counters
     * @param {number} yOffset position on Y, to enable fitting several counters
     * @param {number} width image width
     * @param {number} height image height
     * @param {ImageSection} section cut out a section of the imge, as an object specifying sourceLeft, sourceTop, sourceWidth and sourceHeight
     * @param {boolean} startHidden if true, image starts invisible to load in the background till it runs its show() function.
     *
     */
    var CenterImage = /** @class */ (function (_super) {
        __extends(CenterImage, _super);
        function CenterImage(image, duration, startHidden, xOffset, yOffset, width, height, section) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            var texture = new Texture(image);
            _this.image = new UIImage(canvas, texture);
            _this.image.hAlign = 'center';
            _this.image.vAlign = 'center';
            _this.image.positionX = xOffset ? xOffset : 0;
            _this.image.positionY = yOffset ? yOffset : 0;
            _this.image.width = width ? width : 512;
            _this.image.height = height ? height : 512;
            _this.image.sourceLeft = section && section.sourceLeft ? section.sourceLeft : 0;
            _this.image.sourceTop = section && section.sourceTop ? section.sourceTop : 0;
            _this.image.sourceWidth = section ? section.sourceWidth : width ? width : 512;
            _this.image.sourceHeight = section ? section.sourceHeight : height ? height : 512;
            _this.image.visible = startHidden ? false : true;
            if (duration != -1) {
                var dummyEnty = new Entity();
                engine.addEntity(dummyEnty);
                dummyEnty.addComponentOrReplace(new UIDelay(duration ? duration : 3, function () {
                    _this.hide();
                }));
            }
            return _this;
        }
        /**
         * Hides the image from view in the screen.
         */
        CenterImage.prototype.hide = function () {
            this.image.visible = false;
        };
        /**
         * Makes an invisible image visible again.
         * @param {number} duration Seconds to display the image onscreen. If no value is provided, it stays visible.
         */
        CenterImage.prototype.show = function (duration) {
            var _this = this;
            this.image.visible = true;
            if (duration) {
                var dummyEnty = new Entity();
                engine.addEntity(dummyEnty);
                dummyEnty.addComponentOrReplace(new UIDelay(duration, function () {
                    _this.hide();
                }));
            }
        };
        return CenterImage;
    }(Entity));

    /**
     * Displays a prompt window with a custom string and an OK button
     *
     * @param  {string} instructions: Notification string
     * @param {() => void} onAccept: Function that gets executed if player clicks button
     * @param  {string} acceptLabel: String to go in the accept button
     * @param {boolean} useDarkTheme: Switch to the dark theme
     *
     */
    var OkPrompt = /** @class */ (function (_super) {
        __extends(OkPrompt, _super);
        function OkPrompt(instructions, onAccept, acceptLabel, useDarkTheme) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            _this.UIOpenTime = +Date.now();
            _this.background = new UIImage(canvas, lightTheme);
            _this.background.hAlign = 'center';
            _this.background.vAlign = 'center';
            _this.onAccept = onAccept ? onAccept : null;
            var uiTheme = useDarkTheme ? darkTheme : lightTheme;
            _this.background.source = uiTheme;
            _this.background.width = 400;
            _this.background.height = 250;
            _this.background.positionY = 0;
            setSection(_this.background, resources.backgrounds.promptBackground);
            _this.background.visible = true;
            _this.closeIcon = new UIImage(_this.background, uiTheme);
            _this.closeIcon.positionX = 175;
            _this.closeIcon.positionY = 100;
            _this.closeIcon.width = 32;
            _this.closeIcon.height = 32;
            if (useDarkTheme) {
                setSection(_this.closeIcon, resources.icons.closeW);
            }
            else {
                setSection(_this.closeIcon, resources.icons.closeD);
            }
            _this.closeIcon.onClick = new OnClick(function () {
                _this.close();
            });
            _this.text = new UIText(_this.background);
            _this.text.value = instructions; //splitTextIntoLines(instructions,30,3)
            _this.text.adaptWidth = false;
            _this.text.textWrapping = true;
            _this.text.width = 380;
            _this.text.hAlign = 'center';
            _this.text.vAlign = 'top';
            _this.text.positionX = 0;
            _this.text.positionY = -65;
            _this.text.fontSize = 24;
            _this.text.font = SFFont;
            _this.text.vTextAlign = 'center';
            _this.text.hTextAlign = 'center';
            _this.text.color = useDarkTheme ? Color4.White() : Color4.Black();
            _this.button = new UIImage(_this.background, uiTheme);
            _this.button.positionX = 0;
            _this.button.positionY = -60;
            _this.button.width = 174;
            _this.button.height = 46;
            setSection(_this.button, resources.buttons.buttonE);
            _this.icon = new UIImage(_this.button, useDarkTheme == true ? darkTheme : lightTheme);
            _this.icon.width = 26;
            _this.icon.height = 26;
            _this.icon.hAlign = 'center';
            _this.icon.vAlign = 'center';
            _this.icon.isPointerBlocker = false;
            setSection(_this.icon, resources.buttonLabels.E);
            _this.icon.positionX = buttonIconPos(acceptLabel ? acceptLabel.length : 2);
            _this.buttonLabel = new UIText(_this.button);
            _this.buttonLabel.value = acceptLabel ? acceptLabel : 'Ok';
            _this.buttonLabel.hTextAlign = 'center';
            _this.buttonLabel.vTextAlign = 'center';
            _this.buttonLabel.positionX = 30;
            _this.buttonLabel.fontSize = 18;
            _this.buttonLabel.font = SFFont;
            _this.buttonLabel.color = Color4.White();
            _this.buttonLabel.isPointerBlocker = false;
            _this.button.onClick = new OnClick(function () {
                _this.accept();
            });
            _this.EButtonAction = Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, function (e) {
                if (_this.button.visible && +Date.now() - _this.UIOpenTime > 100) {
                    _this.accept();
                }
            });
            return _this;
        }
        /**
         * Hides the prompt from view in the screen.
         */
        OkPrompt.prototype.close = function () {
            this.background.visible = false;
            this.closeIcon.visible = false;
            this.button.visible = false;
            this.text.visible = false;
            this.buttonLabel.visible = false;
        };
        /**
         * Runs the onAccept function, then hides the prompt from view in the screen.
         */
        OkPrompt.prototype.accept = function () {
            if (this.onAccept) {
                this.onAccept();
            }
            this.hide();
        };
        /**
         * Hides the prompt from view in the screen.
         */
        OkPrompt.prototype.hide = function () {
            this.background.visible = false;
            this.closeIcon.visible = false;
            this.button.visible = false;
            this.text.visible = false;
            this.buttonLabel.visible = false;
            Input.instance.unsubscribe('BUTTON_DOWN', ActionButton.PRIMARY, this.EButtonAction);
        };
        /**
         * Makes an invisible prompt visible again.
         */
        OkPrompt.prototype.show = function () {
            this.background.visible = true;
            this.closeIcon.visible = true;
            this.button.visible = true;
            this.text.visible = true;
            this.buttonLabel.visible = true;
            Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, this.EButtonAction);
        };
        return OkPrompt;
    }(Entity));

    /**
     * Displays a prompt window with two buttons that perform separate actions
     *
     * @param {string} title: Header on dialog
     * @param {string} instructions: Smaller print instructions
     * @param {() => void} onAccept: Function that gets executed if player clicks accept
     * @param {() => void} onReject: Function that gets executed if player clicks reject
     * @param {string} acceptLabel: String to go in the accept button
     * @param {string} rejectLabel: String to go in the reject button
     * @param {boolean} useDarkTheme: Switch to the dark theme
     *
     */
    var OptionPrompt = /** @class */ (function (_super) {
        __extends(OptionPrompt, _super);
        function OptionPrompt(title, instructions, onAccept, onReject, acceptLabel, rejectLabel, useDarkTheme) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            _this.UIOpenTime = +Date.now();
            _this.background = new UIImage(canvas, lightTheme);
            _this.background.hAlign = 'center';
            _this.background.vAlign = 'center';
            _this.onAccept = onAccept;
            _this.onReject = onReject ? onReject : null;
            var uiTheme = useDarkTheme ? darkTheme : lightTheme;
            _this.background.source = uiTheme;
            _this.background.width = 480;
            _this.background.height = 384;
            setSection(_this.background, resources.backgrounds.promptLargeBackground);
            _this.background.visible = true;
            _this.closeIcon = new UIImage(_this.background, uiTheme);
            _this.closeIcon.positionX = 175 + 40;
            _this.closeIcon.positionY = 100 + 64;
            _this.closeIcon.width = 32;
            _this.closeIcon.height = 32;
            if (useDarkTheme) {
                setSection(_this.closeIcon, resources.icons.closeW);
            }
            else {
                setSection(_this.closeIcon, resources.icons.closeD);
            }
            _this.closeIcon.onClick = new OnClick(function () {
                _this.close();
            });
            _this.title = new UIText(_this.background);
            _this.title.value = title;
            _this.title.adaptWidth = false;
            _this.title.textWrapping = true;
            _this.title.width = 380;
            _this.title.hAlign = 'center';
            _this.title.vAlign = 'top';
            _this.title.positionX = 0;
            _this.title.positionY = -20;
            _this.title.font = SFHeavyFont;
            _this.title.fontSize = 24;
            _this.title.vTextAlign = 'center';
            _this.title.hTextAlign = 'center';
            _this.title.color = useDarkTheme ? Color4.White() : Color4.Black();
            _this.text = new UIText(_this.background);
            _this.text.value = instructions;
            _this.text.adaptWidth = false;
            _this.text.textWrapping = true;
            _this.text.width = 380;
            _this.text.hAlign = 'center';
            _this.text.vAlign = 'top';
            _this.text.positionX = 0;
            _this.text.positionY = -145;
            _this.text.fontSize = 24;
            _this.text.font = SFFont;
            _this.text.vTextAlign = 'center';
            _this.text.hTextAlign = 'center';
            _this.text.color = useDarkTheme ? Color4.White() : Color4.Black();
            _this.buttonE = new UIImage(_this.background, uiTheme);
            _this.buttonE.positionX = -100;
            _this.buttonE.positionY = -120;
            _this.buttonE.width = 174;
            _this.buttonE.height = 46;
            setSection(_this.buttonE, resources.buttons.buttonE);
            _this.buttonEIcon = new UIImage(_this.buttonE, useDarkTheme == true ? darkTheme : lightTheme);
            _this.buttonEIcon.width = 26;
            _this.buttonEIcon.height = 26;
            _this.buttonEIcon.hAlign = 'center';
            _this.buttonEIcon.vAlign = 'center';
            _this.buttonEIcon.isPointerBlocker = false;
            setSection(_this.buttonEIcon, resources.buttonLabels.E);
            _this.buttonEIcon.positionX = buttonIconPos(acceptLabel ? acceptLabel.length : 2);
            _this.buttonELabel = new UIText(_this.buttonE);
            _this.buttonELabel.value = acceptLabel ? acceptLabel : 'Ok';
            _this.buttonELabel.hTextAlign = 'center';
            _this.buttonELabel.vTextAlign = 'center';
            _this.buttonELabel.positionX = 30;
            _this.buttonELabel.fontSize = 18;
            _this.buttonELabel.font = SFFont;
            _this.buttonELabel.color = Color4.White();
            _this.buttonELabel.isPointerBlocker = false;
            _this.buttonE.onClick = new OnClick(function () {
                _this.accept();
            });
            _this.EButtonAction = Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, function (e) {
                if (_this.buttonE.visible && +Date.now() - _this.UIOpenTime > 100) {
                    _this.accept();
                }
            });
            _this.buttonF = new UIImage(_this.background, uiTheme);
            _this.buttonF.positionX = 100;
            _this.buttonF.positionY = -120;
            _this.buttonF.width = 174;
            _this.buttonF.height = 46;
            setSection(_this.buttonF, resources.buttons.buttonF);
            _this.buttonFIcon = new UIImage(_this.buttonF, useDarkTheme == true ? darkTheme : lightTheme);
            _this.buttonFIcon.width = 26;
            _this.buttonFIcon.height = 26;
            _this.buttonFIcon.hAlign = 'center';
            _this.buttonFIcon.vAlign = 'center';
            _this.buttonFIcon.isPointerBlocker = false;
            setSection(_this.buttonFIcon, resources.buttonLabels.F);
            _this.buttonFIcon.positionX = buttonIconPos(rejectLabel ? rejectLabel.length : 6);
            _this.buttonFLabel = new UIText(_this.buttonF);
            _this.buttonFLabel.value = rejectLabel ? rejectLabel : 'Cancel';
            _this.buttonFLabel.hTextAlign = 'center';
            _this.buttonFLabel.vTextAlign = 'center';
            _this.buttonFLabel.positionX = 30;
            _this.buttonFLabel.fontSize = 18;
            _this.buttonFLabel.font = SFFont;
            _this.buttonFLabel.color = Color4.White();
            _this.buttonFLabel.isPointerBlocker = false;
            _this.buttonF.onClick = new OnClick(function () {
                _this.reject();
            });
            _this.FButtonAction = Input.instance.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, false, function (e) {
                if (_this.buttonF.visible && +Date.now() - _this.UIOpenTime > 100) {
                    _this.reject();
                }
            });
            return _this;
        }
        /**
         * Hides the prompt from view in the screen.
         */
        OptionPrompt.prototype.close = function () {
            this.background.visible = false;
            this.closeIcon.visible = false;
            this.buttonE.visible = false;
            this.buttonF.visible = false;
            this.text.visible = false;
            this.buttonELabel.visible = false;
            this.buttonFLabel.visible = false;
            this.title.visible = false;
            //Input.instance.unsubscribe('BUTTON_DOWN', ActionButton.PRIMARY, this.EButtonAction)
        };
        /**
         * Runs the onAccept function, then hides the prompt from view in the screen.
         */
        OptionPrompt.prototype.accept = function () {
            if (this.onAccept) {
                this.onAccept();
            }
            this.hide();
        };
        /**
         * Runs the onReject function, then hides the prompt from view in the screen.
         */
        OptionPrompt.prototype.reject = function () {
            if (this.onReject) {
                this.onReject();
            }
            this.hide();
        };
        /**
         * Hides the prompt from view in the screen.
         */
        OptionPrompt.prototype.hide = function () {
            this.background.visible = false;
            this.closeIcon.visible = false;
            this.buttonE.visible = false;
            this.buttonF.visible = false;
            this.text.visible = false;
            this.buttonELabel.visible = false;
            this.buttonFLabel.visible = false;
            this.buttonEIcon.visible = false;
            this.buttonFIcon.visible = false;
            Input.instance.unsubscribe('BUTTON_DOWN', ActionButton.PRIMARY, this.EButtonAction);
            Input.instance.unsubscribe('BUTTON_DOWN', ActionButton.SECONDARY, this.FButtonAction);
        };
        /**
         * Makes an invisible prompt visible again.
         */
        OptionPrompt.prototype.show = function () {
            this.background.visible = true;
            this.closeIcon.visible = true;
            this.buttonE.visible = true;
            this.buttonF.visible = true;
            this.text.visible = true;
            this.buttonELabel.visible = true;
            this.buttonFLabel.visible = true;
            this.buttonEIcon.visible = true;
            this.buttonFIcon.visible = true;
            Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, this.EButtonAction);
            Input.instance.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, false, this.FButtonAction);
        };
        return OptionPrompt;
    }(Entity));

    /**
     * Displays a prompt window with a field that can be filled in
     *
     * @param  {string} title: Notification string
    * @param {(e:string) => Promise<boolean>} onAccept: Function that gets executed if player clicks button
     * @param  {string} acceptLabel: String to go in the accept button
     * @param  {string} placeholder: Text to display as placeholder in the fill in box
     * @param {boolean} useDarkTheme: Switch to the dark theme
     *
     */
    var FillInPrompt = /** @class */ (function (_super) {
        __extends(FillInPrompt, _super);
        function FillInPrompt(title, onAccept, acceptLabel, placeholder, useDarkTheme) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            _this.UIOpenTime = +Date.now();
            _this.background = new UIImage(canvas, lightTheme);
            _this.background.hAlign = 'center';
            _this.background.vAlign = 'center';
            _this.onAccept = onAccept;
            var uiTheme = useDarkTheme ? darkTheme : lightTheme;
            _this.background.source = uiTheme;
            _this.background.width = 400;
            _this.background.height = 250;
            setSection(_this.background, resources.backgrounds.promptBackground);
            _this.background.visible = true;
            _this.text = new UIText(_this.background);
            _this.text.value = title; //splitTextIntoLines(instructions,30,3)
            _this.text.adaptWidth = false;
            _this.text.textWrapping = true;
            _this.text.width = 320;
            _this.text.hAlign = 'center';
            _this.text.vAlign = 'top';
            _this.text.positionX = 0;
            _this.text.positionY = -20;
            _this.text.fontSize = 24;
            _this.text.font = SFHeavyFont;
            _this.text.vTextAlign = 'center';
            _this.text.hTextAlign = 'center';
            _this.text.color = useDarkTheme ? Color4.White() : Color4.Black();
            _this.closeIcon = new UIImage(_this.background, uiTheme);
            _this.closeIcon.positionX = 175;
            _this.closeIcon.positionY = 100;
            _this.closeIcon.width = 32;
            _this.closeIcon.height = 32;
            if (useDarkTheme) {
                setSection(_this.closeIcon, resources.icons.closeW);
            }
            else {
                setSection(_this.closeIcon, resources.icons.closeD);
            }
            _this.closeIcon.onClick = new OnClick(function () {
                _this.hide();
            });
            _this.button = new UIImage(_this.background, uiTheme);
            _this.button.positionX = 0;
            _this.button.positionY = -60;
            _this.button.width = 174;
            _this.button.height = 46;
            setSection(_this.button, resources.buttons.buttonE);
            _this.icon = new UIImage(_this.button, useDarkTheme == true ? darkTheme : lightTheme);
            _this.icon.width = 26;
            _this.icon.height = 26;
            _this.icon.hAlign = 'center';
            _this.icon.vAlign = 'center';
            _this.icon.isPointerBlocker = false;
            setSection(_this.icon, resources.buttonLabels.E);
            _this.icon.positionX = buttonIconPos(acceptLabel ? acceptLabel.length : 6);
            _this.buttonLabel = new UIText(_this.button);
            _this.buttonLabel.value = acceptLabel ? acceptLabel : 'Submit';
            _this.buttonLabel.hTextAlign = 'center';
            _this.buttonLabel.vTextAlign = 'center';
            _this.buttonLabel.positionX = 30;
            _this.buttonLabel.fontSize = 18;
            _this.buttonLabel.font = SFFont;
            _this.buttonLabel.color = Color4.White();
            _this.buttonLabel.isPointerBlocker = false;
            _this.fillInBox = new UIInputText(_this.background);
            _this.fillInBox.color = Color4.Black();
            _this.fillInBox.font = SFFont;
            _this.fillInBox.width = 312;
            _this.fillInBox.height = 46;
            _this.fillInBox.positionX = 0;
            _this.fillInBox.positionY = 15;
            _this.fillInBox.placeholder = placeholder ? placeholder : 'Fill in';
            _this.fillInBox.hTextAlign = 'center';
            _this.fillInBox.vTextAlign = 'center';
            _this.fillInBox.fontSize = 22;
            var submittedText = '';
            _this.fillInBox.onChanged = new OnChanged(function (x) {
                submittedText = x.value;
            });
            _this.fillInBox.onTextSubmit = new OnTextSubmit(function (x) {
                //submittedText = x.text
                _this.accept(submittedText);
            });
            _this.button.onClick = new OnClick(function () {
                _this.accept(submittedText);
            });
            _this.EButtonAction = Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, function (e) {
                if (_this.button.visible && +Date.now() - _this.UIOpenTime > 100) {
                    _this.accept(submittedText);
                }
            });
            return _this;
        }
        /**
         * Hides the prompt from view in the screen.
         */
        FillInPrompt.prototype.close = function () {
            this.background.visible = false;
            this.closeIcon.visible = false;
            this.button.visible = false;
            this.text.visible = false;
            this.buttonLabel.visible = false;
            this.fillInBox.visible = false;
        };
        /**
         * Hides the prompt, but first reads the provided value and runs the onAccept function with it
         */
        FillInPrompt.prototype.accept = function (submittedText) {
            return __awaiter(this, void 0, void 0, function () {
                var executeSuccessfuly;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.onAccept(submittedText)];
                        case 1:
                            executeSuccessfuly = _a.sent();
                            if (executeSuccessfuly)
                                this.hide();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Hides the prompt from view in the screen.
         */
        FillInPrompt.prototype.hide = function () {
            this.background.visible = false;
            this.closeIcon.visible = false;
            this.button.visible = false;
            this.text.visible = false;
            this.buttonLabel.visible = false;
            this.fillInBox.visible = false;
            Input.instance.unsubscribe('BUTTON_DOWN', ActionButton.PRIMARY, this.EButtonAction);
        };
        /**
         * Makes an invisible prompt visible again.
         */
        FillInPrompt.prototype.show = function () {
            this.background.visible = true;
            this.closeIcon.visible = true;
            this.button.visible = true;
            this.text.visible = true;
            this.buttonLabel.visible = true;
            this.fillInBox.visible = true;
            Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, this.EButtonAction);
        };
        return FillInPrompt;
    }(Entity));

    /**
     * Creates a prompt object that includes a background and a close icon, and supports adding as many custom UI elements as desired
     *
     * @param {PromptStyles| string} style: Pick from a few predefined options of color, shape and size, or provide the string path to a custom image
     * @param {number} width Background width
     * @param {number} height Background height
     * @param {boolean} startHidden If true, prompt starts invisible to load in the background till calling the `show()` function of the prompt object.
     */
    var CustomPrompt = /** @class */ (function (_super) {
        __extends(CustomPrompt, _super);
        function CustomPrompt(style, width, height, startHidden) {
            var _this = _super.call(this) || this;
            _this.elements = [];
            _this.texture = lightTheme;
            _this.darkTheme = false;
            _this.UIOpenTime = 0;
            _this.canvas = canvas;
            _this.UIOpenTime = +Date.now();
            _this.background = new UIImage(canvas, lightTheme);
            _this.background.hAlign = 'center';
            _this.background.vAlign = 'center';
            _this.closeIcon = new UIImage(_this.background, _this.texture);
            if (!style) {
                style = exports.PromptStyles.LIGHT;
            }
            switch (style) {
                case exports.PromptStyles.LIGHT:
                    _this.texture = lightTheme;
                    setSection(_this.background, resources.backgrounds.promptBackground);
                    setSection(_this.closeIcon, resources.icons.closeD);
                    _this.closeIcon.positionX = width ? width / 2 - 25 : 175;
                    _this.closeIcon.positionY = height ? height / 2 - 25 : 145;
                    break;
                case exports.PromptStyles.DARK:
                    _this.texture = darkTheme;
                    _this.darkTheme = true;
                    setSection(_this.background, resources.backgrounds.promptBackground);
                    setSection(_this.closeIcon, resources.icons.closeW);
                    _this.closeIcon.positionX = width ? width / 2 - 25 : 175;
                    _this.closeIcon.positionY = height ? height / 2 - 25 : 145;
                    break;
                case exports.PromptStyles.LIGHTLARGE:
                    _this.texture = lightTheme;
                    setSection(_this.background, resources.backgrounds.promptLargeBackground);
                    setSection(_this.closeIcon, resources.icons.closeD);
                    _this.closeIcon.positionX = width ? width / 2 - 25 : 175 + 40;
                    _this.closeIcon.positionY = height ? height / 2 - 25 : 145 + 20;
                    break;
                case exports.PromptStyles.DARKLARGE:
                    _this.texture = darkTheme;
                    _this.darkTheme = true;
                    setSection(_this.background, resources.backgrounds.promptLargeBackground);
                    setSection(_this.closeIcon, resources.icons.closeW);
                    _this.closeIcon.positionX = width ? width / 2 - 25 : 175 + 40;
                    _this.closeIcon.positionY = height ? height / 2 - 25 : 145 + 20;
                    break;
                case exports.PromptStyles.LIGHTSLANTED:
                    _this.texture = lightTheme;
                    setSection(_this.background, resources.backgrounds.promptSlantedBackground);
                    setSection(_this.closeIcon, resources.icons.closeD);
                    _this.closeIcon.positionX = width ? width / 2 - 25 : 175 + 40;
                    _this.closeIcon.positionY = height ? height / 2 - 25 : 100 + 38;
                    break;
                case exports.PromptStyles.DARKSLANTED:
                    _this.texture = darkTheme;
                    _this.darkTheme = true;
                    setSection(_this.background, resources.backgrounds.promptSlantedBackground);
                    setSection(_this.closeIcon, resources.icons.closeW);
                    _this.closeIcon.positionX = width ? width / 2 - 25 : 175 + 40;
                    _this.closeIcon.positionY = height ? height / 2 - 25 : 100 + 38;
                    break;
                default:
                    _this.texture = new Texture(style);
                    _this.closeIcon.visible = false;
            }
            _this.background.source = _this.texture;
            _this.background.width = width ? width : _this.background.sourceWidth;
            _this.background.height = height ? height : _this.background.sourceHeight;
            _this.background.visible = true;
            _this.closeIcon.width = 32;
            _this.closeIcon.height = 32;
            _this.closeIcon.source = _this.texture;
            _this.closeIcon.onClick = new OnClick(function () {
                _this.hide();
            });
            if (startHidden) {
                _this.hide();
            }
            return _this;
        }
        /**
         * Hides the prompt from view in the screen.
         */
        CustomPrompt.prototype.hide = function () {
            var e_1, _a;
            this.background.visible = false;
            this.closeIcon.visible = false;
            try {
                for (var _b = __values(this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var element = _c.value;
                    element.hide();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        /**
         * Makes an invisible prompt visible again.
         */
        CustomPrompt.prototype.show = function () {
            var e_2, _a;
            this.background.visible = true;
            this.closeIcon.visible = true;
            try {
                for (var _b = __values(this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var element = _c.value;
                    element.show();
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        };
        /**
         * Adds a text UI element to the custom prompt
         * @param {string} value Text to display
         * @param {number} [posX=0] Position on X on the prompt, counting from the center of the prompt
         * @param {number} [posY=0] Position on Y on the prompt, counting from the center of the prompt
         * @param {Color4} color Color of the text. By default black over light themes and white over dark themes
         * @param {number} size Font size
         */
        CustomPrompt.prototype.addText = function (value, posX, posY, color, size) {
            var text = new CustomPromptText(this, value, posX, posY, this.darkTheme, color ? color : undefined, size ? size : undefined);
            this.elements.push(text);
            return text;
        };
        /**
         * Adds a button UI element to the custom prompt
         * @param {string} label Text to display as a label
         * @param {number} [posX=0] Position on X on the prompt, counting from the center of the prompt
         * @param {number} [posY=0] Position on Y on the prompt, counting from the center of the prompt
         * @param {() => void} onClick Function to call every time the button is clicked
         * @param {ButtonStyles} style Appearance of the button, selecting from several predefined options for different colors and shapes
         */
        CustomPrompt.prototype.addButton = function (label, posX, posY, onClick, style) {
            var button = new CustomPromptButton(this, this.texture, this.UIOpenTime, label, posX, posY, onClick, style ? style : undefined);
            this.elements.push(button);
            return button;
        };
        /**
         * Adds a checkbox UI element to the custom prompt
         * @param {string} label Text to display on the right of the box
         * @param {number} [posX=0] Position on X on the prompt, counting from the center of the prompt
         * @param {number} [posY=0] Position on Y on the prompt, counting from the center of the prompt
         * @param {() => void} onCheck Function to call every time the box is checked
         * @param {() => void} onUncheck Function to call every time the box is unchecked
         * @param {ButtonStyles} style Appearance of the button, selecting from several predefined options for different colors and shapes
         * @param {boolean} large Makes the checkbox significantly larger
         * @param {boolean} startChecked Starts the checkbox in a default state of already checked
         */
        CustomPrompt.prototype.addCheckbox = function (label, posX, posY, onCheck, onUncheck, large, startChecked) {
            var checkBox = new CustomPromptCheckBox(this, this.texture, this.darkTheme, label, posX, posY, onCheck ? onCheck : undefined, onUncheck ? onUncheck : undefined, large ? large : undefined, startChecked ? startChecked : undefined);
            this.elements.push(checkBox);
            return checkBox;
        };
        /**
         * Adds a switch UI element to the custom prompt
         * @param {string} label Text to display on the right of the switch
         * @param {number} [posX=0] Position on X on the prompt, counting from the center of the prompt
         * @param {number} [posY=0] Position on Y on the prompt, counting from the center of the prompt
         * @param {() => void} onCheck Function to call every time the switch is activated
         * @param {() => void} onUncheck Function to call every time the switch is deactivated
         * @param {SwitchStyles} style Appearance of the switch, selecting from several predefined options for different colors and shapes
         * @param {boolean} startChecked Starts the switch in a default state of already activated
         */
        CustomPrompt.prototype.addSwitch = function (label, posX, posY, onCheck, onUncheck, style, startChecked) {
            var uiswitch = new CustomPromptSwitch(this, this.texture, this.darkTheme, label, posX, posY, onCheck ? onCheck : undefined, onUncheck ? onUncheck : undefined, style ? style : undefined, startChecked ? startChecked : undefined);
            this.elements.push(uiswitch);
            return uiswitch;
        };
        /**
         * Adds a switch UI element to the custom prompt
         * @param {string} image Path to the image file
         * @param {number} [xOffset=0] Position on X on the prompt, counting from the center of the prompt
         * @param {number} [yOffset=0] Position on Y on the prompt, counting from the center of the prompt
         * @param {number} [width=0] Width of the image
         * @param {number} [height=0] Height of the image
         * @param {ImageSection} section ImageSection object to specify a specific region of the image file
         */
        CustomPrompt.prototype.addIcon = function (image, xOffset, yOffset, width, height, section) {
            var iconTexture = new Texture(image);
            var icon = new CustomPromptIcon(this, iconTexture, xOffset, yOffset, width ? width : undefined, height ? height : undefined, section ? section : undefined);
            this.elements.push(icon);
            return icon;
        };
        /**
         * Adds a textbox UI element to the custom prompt, for the player to fill in an input value
         * @param {number} [posX=0] Position on X on the prompt, counting from the center of the prompt
         * @param {number} [posY=0] Position on Y on the prompt, counting from the center of the prompt
         * @param {string} placeholder Default string to display in the box
         * @param {e: string => void} onChange Function to call every time the value in the text box is modified by the player
         */
        CustomPrompt.prototype.addTextBox = function (posX, posY, placeholder, onChange) {
            var texBox = new CustomPromptTextBox(this, posX, posY, placeholder ? placeholder : undefined, onChange ? onChange : undefined);
            this.elements.push(texBox);
            return texBox;
        };
        return CustomPrompt;
    }(Entity));
    /**
     * A button UI element to use in a custom prompt
     */
    var CustomPromptButton = /** @class */ (function (_super) {
        __extends(CustomPromptButton, _super);
        function CustomPromptButton(parent, texture, UIOpenTime, label, posX, posY, onClick, style) {
            var _this = _super.call(this) || this;
            _this.icon = null;
            _this.image = new UIImage(parent.background, texture);
            _this.image.positionX = posX;
            _this.image.positionY = posY;
            _this.image.width = 174;
            _this.image.height = 46;
            _this.label = new UIText(_this.image);
            if (style) {
                switch (style) {
                    case exports.ButtonStyles.E:
                        setSection(_this.image, resources.buttons.buttonE);
                        _this.label.positionX = 25;
                        _this.icon = new UIImage(_this.image, texture);
                        _this.icon.width = 26;
                        _this.icon.height = 26;
                        _this.icon.hAlign = 'center';
                        _this.icon.vAlign = 'center';
                        _this.icon.isPointerBlocker = false;
                        setSection(_this.icon, resources.buttonLabels.E);
                        _this.icon.positionX = buttonIconPos(label.length);
                        break;
                    case exports.ButtonStyles.F:
                        setSection(_this.image, resources.buttons.buttonF);
                        _this.label.positionX = 25;
                        _this.icon = new UIImage(_this.image, texture);
                        _this.icon.width = 26;
                        _this.icon.height = 26;
                        _this.icon.hAlign = 'center';
                        _this.icon.vAlign = 'center';
                        _this.icon.isPointerBlocker = false;
                        setSection(_this.icon, resources.buttonLabels.F);
                        _this.icon.positionX = buttonIconPos(label.length);
                        break;
                    case exports.ButtonStyles.RED:
                        setSection(_this.image, resources.buttons.buttonRed);
                        break;
                    case exports.ButtonStyles.DARK:
                        setSection(_this.image, resources.buttons.buttonDark);
                        break;
                    case exports.ButtonStyles.ROUNDBLACK:
                        setSection(_this.image, resources.buttons.roundBlack);
                        break;
                    case exports.ButtonStyles.ROUNDWHITE:
                        setSection(_this.image, resources.buttons.roundWhite);
                        break;
                    case exports.ButtonStyles.ROUNDSILVER:
                        setSection(_this.image, resources.buttons.roundSilver);
                        break;
                    case exports.ButtonStyles.ROUNDGOLD:
                        setSection(_this.image, resources.buttons.roundGold);
                        break;
                    case exports.ButtonStyles.SQUAREBLACK:
                        setSection(_this.image, resources.buttons.squareBlack);
                        break;
                    case exports.ButtonStyles.SQUAREWHITE:
                        setSection(_this.image, resources.buttons.squareWhite);
                        break;
                    case exports.ButtonStyles.SQUARESILVER:
                        setSection(_this.image, resources.buttons.squareSilver);
                        break;
                    case exports.ButtonStyles.SQUAREGOLD:
                        setSection(_this.image, resources.buttons.squareGold);
                        break;
                    default:
                        setSection(_this.image, resources.buttons.roundSilver);
                }
            }
            else {
                setSection(_this.image, resources.buttons.roundSilver);
            }
            _this.label.value = label;
            _this.label.hTextAlign = 'center';
            _this.label.vTextAlign = 'center';
            _this.label.fontSize = 20;
            _this.label.font = SFFont;
            _this.label.color =
                style == exports.ButtonStyles.ROUNDWHITE || style == exports.ButtonStyles.SQUAREWHITE
                    ? Color4.Black()
                    : Color4.White();
            _this.label.isPointerBlocker = false;
            _this.image.onClick = new OnClick(function () {
                onClick();
            });
            if (style == exports.ButtonStyles.E) {
                Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, false, function (e) {
                    if (_this.image.visible && +Date.now() - UIOpenTime > 100) {
                        onClick();
                    }
                });
            }
            else if (style == exports.ButtonStyles.F) {
                Input.instance.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, false, function (e) {
                    if (_this.image.visible && +Date.now() - UIOpenTime > 100) {
                        onClick();
                    }
                });
            }
            return _this;
        }
        /**
         * Hides the item from view in the screen. It can't be clicked while invisible.
         */
        CustomPromptButton.prototype.hide = function () {
            this.image.visible = false;
        };
        /**
         * Makes an invisible item visible again.
         */
        CustomPromptButton.prototype.show = function () {
            this.image.visible = true;
        };
        /**
         * Grays out the item so it can't be clicked.
         */
        CustomPromptButton.prototype.grayOut = function () {
            this.label.color = Color4.Gray();
            this.image.isPointerBlocker = false;
            if (this.icon) {
                this.icon.visible = false;
            }
        };
        /**
         * The opposite action of graying out, so it can't be clicked again.
         */
        CustomPromptButton.prototype.enable = function () {
            this.label.color = Color4.White();
            this.image.isPointerBlocker = true;
            if (this.icon) {
                this.icon.visible = true;
            }
        };
        return CustomPromptButton;
    }(Entity));
    /**
     * A checkbox UI element to use in a custom prompt
     */
    var CustomPromptCheckBox = /** @class */ (function (_super) {
        __extends(CustomPromptCheckBox, _super);
        function CustomPromptCheckBox(parent, texture, darkTheme, label, posX, posY, onCheck, onUncheck, large, startChecked) {
            var _this = _super.call(this) || this;
            _this.checked = startChecked ? true : false;
            _this.darkTheme = darkTheme;
            _this.large = large ? large : false;
            _this.image = new UIImage(parent.background, texture);
            _this.image.positionX = posX;
            _this.image.positionY = posY;
            _this.image.width = large ? 32 : 24;
            _this.image.height = large ? 32 : 24;
            if (_this.checked == false) {
                _this.uncheck();
            }
            else {
                _this.check();
            }
            _this.label = new UIText(_this.image);
            _this.label.positionX = large ? 40 : 30;
            _this.label.color = darkTheme ? Color4.White() : Color4.Black();
            _this.label.value = label;
            _this.label.hTextAlign = 'left';
            _this.label.vTextAlign = 'center';
            _this.label.fontSize = 20;
            _this.label.font = SFFont;
            _this.label.isPointerBlocker = false;
            _this.image.onClick = new OnClick(function () {
                //this.checked = !this.checked
                if (_this.checked == false) {
                    _this.check();
                }
                else {
                    _this.uncheck();
                }
                _this.checked ? (onCheck ? onCheck() : null) : onUncheck ? onUncheck() : null;
            });
            return _this;
        }
        /**
         * Hides the item from view in the screen. It can't be clicked while invisible.
         */
        CustomPromptCheckBox.prototype.hide = function () {
            this.image.visible = false;
            this.label.visible = false;
        };
        /**
         * Makes an invisible item visible again.
         */
        CustomPromptCheckBox.prototype.show = function () {
            this.image.visible = true;
            this.label.visible = true;
        };
        /**
         * Sets the box state to checked.
         */
        CustomPromptCheckBox.prototype.uncheck = function () {
            this.checked = false;
            if (this.darkTheme) {
                if (this.large) {
                    setSection(this.image, resources.checkboxes.wLargeOff);
                }
                else {
                    setSection(this.image, resources.checkboxes.wOff);
                }
            }
            else {
                if (this.large) {
                    setSection(this.image, resources.checkboxes.dLargeOff);
                }
                else {
                    setSection(this.image, resources.checkboxes.dOff);
                }
            }
        };
        /**
         * Sets the box state to unchecked.
         */
        CustomPromptCheckBox.prototype.check = function () {
            this.checked = true;
            if (this.darkTheme) {
                if (this.large) {
                    setSection(this.image, resources.checkboxes.wLargeOn);
                }
                else {
                    setSection(this.image, resources.checkboxes.wOn);
                }
            }
            else {
                if (this.large) {
                    setSection(this.image, resources.checkboxes.dLargeOn);
                }
                else {
                    setSection(this.image, resources.checkboxes.dOn);
                }
            }
        };
        return CustomPromptCheckBox;
    }(Entity));
    /**
     * A switch UI element to use in a custom prompt
     */
    var CustomPromptSwitch = /** @class */ (function (_super) {
        __extends(CustomPromptSwitch, _super);
        function CustomPromptSwitch(parent, texture, darkTheme, label, posX, posY, onCheck, onUncheck, style, startChecked) {
            var _this = _super.call(this) || this;
            _this.checked = startChecked ? true : false;
            _this.darkTheme = darkTheme;
            _this.style = style ? style : exports.SwitchStyles.ROUNDGREEN;
            _this.image = new UIImage(parent.background, texture);
            _this.image.positionX = posX;
            _this.image.positionY = posY;
            _this.image.width = 64;
            _this.image.height = 32;
            if (_this.checked == false) {
                _this.check();
            }
            else {
                _this.uncheck();
            }
            _this.label = new UIText(_this.image);
            _this.label.positionX = 80;
            _this.label.color = darkTheme ? Color4.White() : Color4.Black();
            _this.label.value = label;
            _this.label.hTextAlign = 'left';
            _this.label.vTextAlign = 'center';
            _this.label.fontSize = 20;
            _this.label.font = SFFont;
            _this.label.isPointerBlocker = false;
            _this.image.onClick = new OnClick(function () {
                //this.checked = !this.checked
                if (_this.checked == false) {
                    _this.check();
                }
                else {
                    _this.uncheck();
                }
                _this.checked ? (onCheck ? onCheck() : null) : onUncheck ? onUncheck() : null;
            });
            return _this;
        }
        /**
         * Hides the item from view in the screen. It can't be clicked while invisible.
         */
        CustomPromptSwitch.prototype.hide = function () {
            this.image.visible = false;
            this.label.visible = false;
        };
        /**
         * Makes an invisible item visible again.
         */
        CustomPromptSwitch.prototype.show = function () {
            this.image.visible = true;
            this.label.visible = true;
        };
        /**
         * Sets the switch state to activated.
         */
        CustomPromptSwitch.prototype.check = function () {
            this.checked = true;
            switch (this.style) {
                case exports.SwitchStyles.ROUNDGREEN:
                    setSection(this.image, resources.switches.roundGreen);
                    break;
                case exports.SwitchStyles.ROUNDRED:
                    setSection(this.image, resources.switches.roundRed);
                    break;
                case exports.SwitchStyles.SQUAREGREEN:
                    setSection(this.image, resources.switches.squareGreen);
                    break;
                case exports.SwitchStyles.SQUARERED:
                    setSection(this.image, resources.switches.squareRed);
                    break;
            }
        };
        /**
         * Sets the switch state to deactivated.
         */
        CustomPromptSwitch.prototype.uncheck = function () {
            this.checked = false;
            if (this.style == exports.SwitchStyles.ROUNDGREEN || this.style == exports.SwitchStyles.ROUNDRED) {
                setSection(this.image, resources.switches.roundOff);
            }
            else {
                setSection(this.image, resources.switches.squareOff);
            }
        };
        return CustomPromptSwitch;
    }(Entity));
    /**
     * An icon UI element to use in a custom prompt, by default 128x128 pixels.
     */
    var CustomPromptIcon = /** @class */ (function (_super) {
        __extends(CustomPromptIcon, _super);
        function CustomPromptIcon(parent, texture, xOffset, yOffset, width, height, section) {
            var _this = _super.call(this) || this;
            _this.image = new UIImage(parent.background, texture);
            _this.image.positionX = xOffset;
            _this.image.positionY = yOffset;
            _this.image.width = width ? width : 128;
            _this.image.height = height ? height : 128;
            _this.image.sourceLeft = section && section.sourceLeft ? section.sourceLeft : 0;
            _this.image.sourceTop = section && section.sourceTop ? section.sourceTop : 0;
            _this.image.sourceWidth =
                section && section.sourceWidth ? section.sourceWidth : width ? width : 128;
            _this.image.sourceHeight =
                section && section.sourceHeight ? section.sourceHeight : height ? height : 128;
            return _this;
        }
        /**
         * Hides the item from view in the screen.
         */
        CustomPromptIcon.prototype.hide = function () {
            this.image.visible = false;
        };
        /**
         * Makes an invisible item visible again.
         */
        CustomPromptIcon.prototype.show = function () {
            this.image.visible = true;
        };
        return CustomPromptIcon;
    }(Entity));
    /**
     * A text UI element to use in a custom prompt
     */
    var CustomPromptText = /** @class */ (function (_super) {
        __extends(CustomPromptText, _super);
        function CustomPromptText(parent, value, posX, posY, darkTheme, color, size) {
            var _this = _super.call(this) || this;
            _this.text = new UIText(parent.background);
            _this.text.value = value;
            _this.text.positionX = posX ? posX : 0;
            _this.text.positionY = posY ? posY : 0;
            _this.text.hTextAlign = 'center';
            _this.text.color = color ? color : darkTheme ? Color4.White() : Color4.Black();
            _this.text.fontSize = size ? size : 15;
            return _this;
        }
        /**
         * Hides the item from view in the screen.
         */
        CustomPromptText.prototype.hide = function () {
            this.text.visible = false;
        };
        /**
         * Makes an invisible item visible again.
         */
        CustomPromptText.prototype.show = function () {
            this.text.visible = true;
        };
        return CustomPromptText;
    }(Entity));
    /**
     * A textbox UI element to use in a custom prompt
     */
    var CustomPromptTextBox = /** @class */ (function (_super) {
        __extends(CustomPromptTextBox, _super);
        function CustomPromptTextBox(parent, posX, posY, placeholder, onChange) {
            var _this = _super.call(this) || this;
            _this.currentText = '';
            _this.fillInBox = new UIInputText(parent.background);
            _this.fillInBox.color = Color4.Black();
            _this.fillInBox.font = SFFont;
            _this.fillInBox.width = 312;
            _this.fillInBox.height = 46;
            _this.fillInBox.positionX = posX;
            _this.fillInBox.positionY = posY;
            _this.fillInBox.placeholder = placeholder ? placeholder : 'Fill in';
            _this.fillInBox.hTextAlign = 'center';
            _this.fillInBox.vTextAlign = 'center';
            _this.fillInBox.fontSize = 22;
            _this.fillInBox.onChanged = new OnChanged(function (x) {
                if (_this.fillInBox && !_this.fillInBox.visible)
                    return;
                _this.currentText = x.value;
                if (onChange) {
                    onChange(_this.currentText);
                }
            });
            _this.fillInBox.onTextSubmit = new OnTextSubmit(function (x) {
                if (_this.fillInBox && !_this.fillInBox.visible)
                    return;
                _this.currentText = x.text;
                if (onChange) {
                    onChange(_this.currentText);
                }
            });
            return _this;
        }
        /**
         * Hides the item from view in the screen. It can't be clicked while invisible.
         */
        CustomPromptTextBox.prototype.hide = function () {
            this.fillInBox.visible = false;
        };
        /**
         * Makes an invisible item visible again.
         */
        CustomPromptTextBox.prototype.show = function () {
            this.fillInBox.visible = true;
        };
        return CustomPromptTextBox;
    }(Entity));

    /**
     * Displays a number on the center of the UI
     *
     * @param {string} value string value
     * @param {number} [xOffset=0] position on X, to enable fitting several UI elements
     * @param {number} [yOffset=0] position on Y, to enable fitting several UI elements
     * @param {Color4} [color Color4.White()] text color
     * @param {number} [size=25] text size
     * @param {boolean} bordersOff if true, text won't have a black margin around it
     *
     */
    var CornerLabel = /** @class */ (function (_super) {
        __extends(CornerLabel, _super);
        function CornerLabel(value, xOffset, yOffset, color, size, bordersOff) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            _this.uiText = new UIText(canvas);
            _this.uiText.value = value;
            _this.uiText.hAlign = 'right';
            _this.uiText.vAlign = 'bottom';
            _this.uiText.positionX = xOffset ? xOffset : 0;
            _this.uiText.positionY = yOffset ? yOffset : 0;
            _this.uiText.fontSize = size ? size : 25;
            _this.uiText.font = SFFont;
            _this.uiText.vTextAlign = 'center';
            _this.uiText.hTextAlign = 'center';
            _this.uiText.color = color ? color : Color4.White();
            _this.uiText.outlineColor = Color4.Black();
            _this.uiText.outlineWidth = bordersOff ? 0 : 0.1;
            return _this;
        }
        /**
         * Hides the label from view in the screen. Its values can still be changed and read while hidden.
         */
        CornerLabel.prototype.hide = function () {
            this.uiText.visible = false;
        };
        /**
         * Makes an label counter visible again.
         */
        CornerLabel.prototype.show = function () {
            this.uiText.visible = true;
        };
        /**
         * Sets the label's value to a new string.
         *
         * @param {string} newString New value for the label
         *
         */
        CornerLabel.prototype.set = function (newString) {
            this.uiText.value = newString;
            this.uiText.visible = true;
        };
        return CornerLabel;
    }(Entity));

    /**
     * Displays a loading icon on the center of the screen
     * @param {number} [duration=3] Seconds to display the image onscreen. 0 keeps it on till you hide it manually
     * @param {number} [xOffset=0] Position on X, to enable fitting several counters
     * @param {number} [yOffset=0] Position on Y, to enable fitting several counters
     * @param {number} [scale=1] Multiplier for the size of the bar. 1 = 48 x 64
     *
     */
    var LoadingIcon = /** @class */ (function (_super) {
        __extends(LoadingIcon, _super);
        function LoadingIcon(duration, xOffset, yOffset, scale) {
            var _this = _super.call(this) || this;
            _this.canvas = canvas;
            _this.image = new UIImage(canvas, lightTheme);
            _this.image.hAlign = 'center';
            _this.image.vAlign = 'center';
            _this.image.positionX = xOffset ? xOffset : 0;
            _this.image.positionY = yOffset ? yOffset + 80 : 80;
            _this.image.width = scale ? scale * 48 : 48;
            _this.image.height = scale ? scale * 64 : 64;
            setSection(_this.image, resources.icons.TimerLarge);
            // TODO: IMAGE NOT GOING AWAY
            if (duration && duration != 0) {
                var dummyEnty = new Entity();
                engine.addEntity(dummyEnty);
                dummyEnty.addComponentOrReplace(new UIDelay(duration ? duration : 3, function () {
                    _this.hide();
                }));
            }
            return _this;
        }
        /**
         * Hides the image from view in the screen.
         *
         */
        LoadingIcon.prototype.hide = function () {
            this.image.visible = false;
        };
        /**
         * Makes an invisible image visible again.
         *
         */
        LoadingIcon.prototype.show = function () {
            this.image.visible = true;
        };
        return LoadingIcon;
    }(Entity));

    function isObject(item) {
        return (item && typeof item === 'object' && !Array.isArray(item));
    }
    function deepMerge(target, source) {
        var output = __assign({}, target);
        if (isObject(target) && isObject(source)) {
            Object.keys(source).forEach(function (key) {
                var _a, _b;
                if (isObject(source[key])) {
                    if (!(key in target)) {
                        output = __assign(__assign({}, output), (_a = {}, _a[key] = source[key], _a));
                    }
                    else {
                        // @ts-ignore
                        output[key] = deepMerge(target[key], source[key]);
                    }
                }
                else {
                    output = __assign(__assign({}, output), (_b = {}, _b[key] = source[key], _b));
                }
            });
        }
        return output;
    }

    var UIBase = /** @class */ (function () {
        function UIBase(shape, initialProperties) {
            this.shape = shape;
            if (initialProperties) {
                this.setProperties(initialProperties);
            }
        }
        UIBase.prototype.setProperties = function (prop) {
            var e_1, _a;
            try {
                for (var _b = __values(Object.keys(prop)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var propName = _c.value;
                    // @ts-ignore
                    this.shape[propName] = prop[propName];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        };
        UIBase.prototype.getProperty = function (propName) {
            return this.shape[propName];
        };
        return UIBase;
    }());

    /**
     * This is a UIInputText, but wrapped on a simpler interface
     */
    var UIPoweredInputText = /** @class */ (function (_super) {
        __extends(UIPoweredInputText, _super);
        function UIPoweredInputText(parent, initialProperties) {
            var _a, _b, _c;
            var _this = _super.call(this, new UIInputText(parent), __assign(__assign({}, initialProperties), { placeholder: (_a = initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.placeholder) !== null && _a !== void 0 ? _a : initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.value, onFocus: new OnFocus(function () {
                    var _a;
                    _this.isInputFocused = true;
                    (_a = initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.onFocus) === null || _a === void 0 ? void 0 : _a.call(initialProperties);
                }), onBlur: new OnBlur(function () {
                    var _a, _b;
                    _this.isInputFocused = false;
                    if (_this.inputValue === '' && _this.placeholder !== undefined) {
                        _this.setInputValue(_this.placeholder);
                        (_a = initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.onBlur) === null || _a === void 0 ? void 0 : _a.call(initialProperties, true);
                    }
                    else {
                        (_b = initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.onBlur) === null || _b === void 0 ? void 0 : _b.call(initialProperties, false);
                    }
                }), onChanged: new OnChanged(function (_a) {
                    var _b;
                    var value = _a.value;
                    if (_this.shape.visible) {
                        _this.inputValue = value;
                        if (value !== _this.placeholder) {
                            if (value === '') {
                                _this.shape.placeholder = '';
                            }
                            if (_this.isInputFocused || value === '') {
                                var waitTime = (_b = initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.waitTime) !== null && _b !== void 0 ? _b : UIPoweredInputText.DEFAULT_WAIT_TIME;
                                //@ts-ignore
                                setTimeout(function () {
                                    var _a;
                                    // We are adding a waiting time, so if someone is writing a long text, we don't report the event on each key press
                                    if (_this.inputValue === value) {
                                        (_a = initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.onChanged) === null || _a === void 0 ? void 0 : _a.call(initialProperties, value);
                                    }
                                }, waitTime);
                            }
                        }
                    }
                }), onTextSubmit: new OnTextSubmit(function (_a) {
                    var text = _a.text;
                    var value = text.substr(0, text.length - 1); // We need to remove the last char, that is a return line
                    var callBack = initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.onTextSubmit;
                    if (callBack) {
                        callBack(value);
                    }
                    else {
                        // If there is no callback set, just re-set the current value. We need to add a timeout, so that the event finished before starting the following one
                        //@ts-ignore
                        setTimeout(function () { return (_this.shape.placeholder = value); }, 0);
                    }
                }) })) || this;
            _this.inputValue = '';
            _this.isInputFocused = false;
            _this.placeholder = _this.shape.placeholder;
            _this.inputValue = (_c = (_b = initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.value) !== null && _b !== void 0 ? _b : initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.placeholder) !== null && _c !== void 0 ? _c : '';
            _this.isInputFocused = false;
            return _this;
        }
        UIPoweredInputText.prototype.getValue = function () {
            return this.inputValue;
        };
        UIPoweredInputText.prototype.isFocused = function () {
            return this.isInputFocused;
        };
        /**
         * Set an input value, without rasing an event
         */
        UIPoweredInputText.prototype.setInputValue = function (text) {
            var wasFocused = this.isInputFocused;
            this.isInputFocused = false;
            this.shape.placeholder = '';
            this.inputValue = this.shape.placeholder = text;
            this.isInputFocused = wasFocused;
        };
        UIPoweredInputText.prototype.reset = function () {
            this.setInputValue(this.placeholder);
        };
        UIPoweredInputText.prototype.hide = function () {
            this.setProperties({ visible: false });
        };
        UIPoweredInputText.prototype.show = function () {
            this.setProperties({ visible: true });
            this.setInputValue(this.inputValue); // Necessary hack, because if focused when hidden, the text goes away
        };
        UIPoweredInputText.DEFAULT_WAIT_TIME = 650;
        return UIPoweredInputText;
    }(UIBase));

    /**
     * This is a UIContainerRect, with a configurable click event
     */
    var UIClickableContainerRect = /** @class */ (function (_super) {
        __extends(UIClickableContainerRect, _super);
        function UIClickableContainerRect(parent, initialProperties) {
            var _this = _super.call(this, new UIContainerRect(parent), __assign({ isPointerBlocker: true }, initialProperties)) || this;
            var image = new UIImage(_this.shape, new Texture('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='));
            image.width = '100%';
            image.height = '100%';
            image.sourceWidth = 1;
            image.sourceHeight = 1;
            image.isPointerBlocker = true;
            _this.image = image;
            if (initialProperties === null || initialProperties === void 0 ? void 0 : initialProperties.onClick) {
                _this.setOnClick(initialProperties.onClick);
            }
            return _this;
        }
        UIClickableContainerRect.prototype.performClick = function () {
            var _a;
            (_a = this.image.onClick) === null || _a === void 0 ? void 0 : _a.callback({});
        };
        UIClickableContainerRect.prototype.setOnClick = function (onClick) {
            this.image.onClick = new OnClick(onClick);
        };
        UIClickableContainerRect.prototype.clearOnClick = function () {
            this.image.onClick = null;
        };
        return UIClickableContainerRect;
    }(UIBase));

    var UISearchPromptOption = /** @class */ (function (_super) {
        __extends(UISearchPromptOption, _super);
        function UISearchPromptOption(parent, initialProperties) {
            var _this = _super.call(this, new UIContainerRect(parent), __assign({ width: '100%', vAlign: 'top', visible: false }, initialProperties)) || this;
            _this.config = __assign(__assign({}, UISearchPromptOption.DEFAULTS), initialProperties);
            var clickableContainer = new UIClickableContainerRect(_this.shape, {
                width: '100%',
                height: '100%',
                color: Color4.Clear()
            });
            _this.clickableContainer = clickableContainer;
            var image = new UIImage(clickableContainer.shape, new Texture('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='));
            image.width = image.height = _this.config.imageSize;
            image.hAlign = 'left';
            image.positionX = 10;
            image.vAlign = 'center';
            _this.image = image;
            var topLeftText = new UIText(clickableContainer.shape);
            topLeftText.vAlign = 'top';
            topLeftText.hAlign = 'left';
            topLeftText.vTextAlign = 'top';
            topLeftText.fontSize = _this.config.topFontSize;
            topLeftText.color = _this.config.topTextColor;
            topLeftText.positionX = 55;
            topLeftText.positionY = -10;
            topLeftText.isPointerBlocker = false;
            _this.topLeftText = topLeftText;
            var topRightText = new UIText(clickableContainer.shape);
            topRightText.vAlign = 'top';
            topRightText.hAlign = 'right';
            topRightText.vTextAlign = 'top';
            topRightText.hTextAlign = 'right';
            topRightText.fontSize = topLeftText.fontSize;
            topRightText.color = topLeftText.color;
            topRightText.isPointerBlocker = false;
            topRightText.positionX = -10;
            topRightText.positionY = topLeftText.positionY;
            _this.topRightText = topRightText;
            var bottomLeftText = new UIText(clickableContainer.shape);
            bottomLeftText.vAlign = 'bottom';
            bottomLeftText.hAlign = 'left';
            bottomLeftText.vTextAlign = 'bottom';
            bottomLeftText.fontSize = _this.config.bottomFontSize;
            bottomLeftText.color = _this.config.bottomTextColor;
            bottomLeftText.positionX = topLeftText.positionX;
            bottomLeftText.positionY = 10;
            bottomLeftText.isPointerBlocker = false;
            _this.bottomLeftText = bottomLeftText;
            var bottomRightText = new UIText(clickableContainer.shape);
            bottomRightText.vAlign = 'bottom';
            bottomRightText.hAlign = 'right';
            bottomRightText.vTextAlign = 'bottom';
            bottomRightText.hTextAlign = 'right';
            bottomRightText.fontSize = bottomLeftText.fontSize;
            bottomRightText.color = bottomLeftText.color;
            bottomRightText.isPointerBlocker = false;
            bottomRightText.positionX = topRightText.positionX;
            bottomRightText.positionY = bottomLeftText.positionY;
            _this.bottomRightText = bottomRightText;
            return _this;
        }
        UISearchPromptOption.prototype.setOption = function (option, onClick) {
            this.image.visible = false;
            this.topRightText.visible = false;
            this.bottomLeftText.visible = false;
            this.bottomRightText.visible = false;
            if (option.image) {
                this.image.source = new Texture(option.image.src);
                this.image.sourceWidth = option.image.sourceWidth;
                this.image.sourceHeight = option.image.sourceHeight;
                this.image.visible = true;
                this.topLeftText.positionX = this.config.imageSize + 10 * 2;
            }
            else {
                this.topLeftText.positionX = 10;
            }
            if (typeof option.visualText === 'string') {
                this.topLeftText.value = option.visualText;
                this.topLeftText.vAlign = this.topLeftText.vTextAlign = 'center';
                this.topLeftText.positionY = 0;
            }
            else if ('text' in option.visualText) {
                this.topLeftText.vAlign = this.topLeftText.vTextAlign = 'top';
                this.topLeftText.positionY = -10;
                this.topLeftText.value = option.visualText.text;
                this.bottomLeftText.value = option.visualText.subText;
                this.bottomLeftText.visible = true;
                this.bottomLeftText.positionX = this.topLeftText.positionX;
            }
            else if ('bottomLeft' in option.visualText) {
                this.topLeftText.vAlign = this.topLeftText.vTextAlign = 'top';
                this.topLeftText.positionY = -10;
                this.topLeftText.value = option.visualText.topLeft;
                this.topRightText.value = option.visualText.topRight;
                this.bottomLeftText.value = option.visualText.bottomLeft;
                this.bottomRightText.value = option.visualText.bottomRight;
                this.topRightText.visible = true;
                this.bottomLeftText.visible = true;
                this.bottomRightText.visible = true;
                this.bottomLeftText.positionX = this.topLeftText.positionX;
            }
            if (onClick) {
                this.clickableContainer.setOnClick(onClick);
            }
            else {
                this.clickableContainer.clearOnClick();
            }
        };
        UISearchPromptOption.prototype.setProperties = function (prop) {
            _super.prototype.setProperties.call(this, prop);
        };
        UISearchPromptOption.prototype.getProperty = function (propName) {
            return _super.prototype.getProperty.call(this, propName);
        };
        /**
         * Simulate as if the user had clicked on the option, and perform the corresponding action
         */
        UISearchPromptOption.prototype.performClick = function () {
            this.clickableContainer.performClick();
        };
        UISearchPromptOption.DEFAULTS = {
            topFontSize: 14,
            bottomFontSize: 14,
            imageSize: 36,
            topTextColor: Color4.FromInts(14, 16, 60, 255),
            bottomTextColor: Color4.FromInts(117, 120, 181, 255)
        };
        return UISearchPromptOption;
    }(UIBase));

    var UISearchPrompt = /** @class */ (function (_super) {
        __extends(UISearchPrompt, _super);
        function UISearchPrompt(parent, searchItems, initialConfig, onSuccessfulSelection) {
            var _this = _super.call(this, new UIContainerRect(parent), __assign({}, initialConfig)) || this;
            _this.onSuccessfulSelection = onSuccessfulSelection;
            _this.uiOptions = [];
            _this.options = {};
            initialConfig.visible; initialConfig.opacity; initialConfig.hAlign; initialConfig.vAlign; initialConfig.positionX; initialConfig.positionY; var otherConfig = __rest(initialConfig, ["visible", "opacity", "hAlign", "vAlign", "positionX", "positionY"]);
            _this.config = deepMerge(UISearchPrompt.DEFAULTS, otherConfig);
            _this.setProperties({
                width: _this.config.width,
                height: _this.config.initialHeight,
                color: _this.config.borderColor,
            });
            _this.setItems(searchItems.items, searchItems.dropdownDefaultItemIds);
            var insideContainer = new UIContainerRect(_this.shape);
            insideContainer.color = _this.config.backgroundColor;
            insideContainer.width = _this.config.width - _this.config.borderSize * 2;
            insideContainer.height = _this.config.initialHeight - _this.config.borderSize * 2;
            _this.insideContainer = insideContainer;
            var inputText = new UIPoweredInputText(insideContainer, {
                vAlign: 'top',
                hTextAlign: 'left',
                vTextAlign: 'center',
                width: '92%',
                fontSize: _this.config.search.fontSize,
                placeholder: _this.config.search.placeholder.defaultText,
                color: _this.config.search.textColor,
                focusedBackground: Color4.Clear(),
                height: _this.config.initialHeight * 0.95,
                onBlur: function () { return _this.close(); },
                onTextSubmit: function () {
                    var isThereAnOption = _this.uiOptions[0].getProperty('visible');
                    if (isThereAnOption) {
                        _this.uiOptions[0].performClick();
                    }
                    else {
                        _this.close();
                    }
                },
                onChanged: function (value) {
                    _this.hideAllOptions();
                    if (value === _this.config.search.placeholder.defaultText || value === '') {
                        _this.showDefaultOptions();
                    }
                    else {
                        var textToSearch = value.toLowerCase();
                        var result = [];
                        for (var optionId in _this.options) {
                            var option = _this.options[optionId];
                            if (option.searchBy.toLowerCase().indexOf(textToSearch) >= 0) {
                                result.push(option);
                                if (result.length === _this.config.options.maxVisibleOptions) {
                                    break;
                                }
                            }
                        }
                        if (result.length > 0) {
                            _this.showOptions(result);
                        }
                        else {
                            _this.showErrorMessage("Sorry, we can't find \"" + value + "\"");
                        }
                    }
                }
            });
            _this.inputText = inputText;
            for (var i = 0; i < _this.config.options.maxVisibleOptions; i++) {
                var newOption = new UISearchPromptOption(insideContainer, __assign(__assign({}, _this.config.options), { height: _this.config.initialHeight, positionY: -_this.config.initialHeight - _this.config.initialHeight * i, color: i % 2 === 0 ? _this.config.options.oddBackgroundColor : insideContainer.color }));
                _this.uiOptions.push(newOption);
            }
            var closeButton = new UIImage(insideContainer, lightTheme);
            closeButton.onClick = new OnClick(function () { return _this.close(); });
            closeButton.sourceTop = 305;
            closeButton.sourceLeft = 985;
            closeButton.sourceWidth = closeButton.sourceHeight = 35;
            closeButton.width = closeButton.height = 18;
            closeButton.hAlign = 'right';
            closeButton.vAlign = 'top';
            closeButton.positionX = -12;
            closeButton.positionY = -12;
            closeButton.visible = closeButton.isPointerBlocker = true;
            var cantFindMessage = new UIText(insideContainer);
            cantFindMessage.height = 20;
            cantFindMessage.visible = false;
            cantFindMessage.width = '92%';
            cantFindMessage.hTextAlign = 'center';
            cantFindMessage.vAlign = 'bottom';
            cantFindMessage.positionY = 20;
            cantFindMessage.fontSize = _this.config.errorMessage.fontSize;
            cantFindMessage.color = _this.config.errorMessage.textColor;
            _this.errorMessage = cantFindMessage;
            return _this;
        }
        /**
         * Opens the search box
         */
        UISearchPrompt.prototype.open = function () {
            this.setProperties({ visible: true });
            this.showDefaultOptions();
        };
        /**
         * Close the search box
         */
        UISearchPrompt.prototype.close = function () {
            this.setProperties({ visible: false });
            this.inputText.reset();
        };
        /**
         * Sets all options available on the search box
         */
        UISearchPrompt.prototype.setItems = function (options, dropdownDefaults) {
            this.options = options.reduce(function (acc, curr) {
                var _a;
                curr.searchBy = (_a = curr.searchBy) !== null && _a !== void 0 ? _a : (typeof curr.visualText === 'string' ? curr.visualText : ('text' in curr.visualText ? curr.visualText.text : curr.visualText.topLeft));
                acc[curr.id] = curr;
                return acc;
            }, {});
            if (dropdownDefaults) {
                this.setDropdownDefaults(dropdownDefaults);
            }
            else {
                this.defaultOptions = dropdownDefaults;
            }
            this.hideAllOptions();
        };
        /**
         * Sets the options with the given ids as the ones that will be shown when there is no text on the search box
         */
        UISearchPrompt.prototype.setDropdownDefaults = function (defaults) {
            var e_1, _a;
            try {
                for (var defaults_1 = __values(defaults), defaults_1_1 = defaults_1.next(); !defaults_1_1.done; defaults_1_1 = defaults_1.next()) {
                    var optionId = defaults_1_1.value;
                    if (!(optionId in this.options)) {
                        error("Couldn't find an option with id '" + optionId + "'. Will not set new defaults");
                        return;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (defaults_1_1 && !defaults_1_1.done && (_a = defaults_1.return)) _a.call(defaults_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.defaultOptions = defaults;
        };
        UISearchPrompt.prototype.showDefaultOptions = function () {
            var _this = this;
            var options;
            if (this.defaultOptions) {
                options = this.defaultOptions.map(function (id) { return _this.options[id]; }).slice(0, this.config.options.maxVisibleOptions);
            }
            else {
                options = [];
                for (var optionId in this.options) {
                    options.push(this.options[optionId]);
                    if (options.length === this.config.options.maxVisibleOptions) {
                        break;
                    }
                }
            }
            this.showOptions(options);
        };
        UISearchPrompt.prototype.showOptions = function (options) {
            var _this = this;
            this.resizeHeight(this.config.initialHeight * options.length + this.config.borderSize * 2);
            options.forEach(function (option, index) {
                var uiOption = _this.uiOptions[index];
                uiOption.setOption(option, function () {
                    _this.onSuccessfulSelection(option);
                    _this.setProperties({ visible: false });
                });
                uiOption.setProperties({ visible: true });
            });
            this.errorMessage.visible = false;
        };
        UISearchPrompt.prototype.hideAllOptions = function () {
            this.uiOptions.forEach(function (option) { return option.setProperties({ visible: false }); });
        };
        UISearchPrompt.prototype.showErrorMessage = function (errorMessage) {
            this.errorMessage.visible = true;
            this.errorMessage.value = errorMessage;
            this.resizeHeight(+60);
        };
        UISearchPrompt.prototype.resizeHeight = function (relativeHeight) {
            this.setProperties({ height: this.config.initialHeight + relativeHeight });
            this.insideContainer.height = this.config.initialHeight + relativeHeight - this.config.borderSize * 2;
        };
        UISearchPrompt.DEFAULTS = {
            borderColor: Color4.FromInts(232, 236, 253, 255),
            backgroundColor: Color4.White(),
            borderSize: 2,
            width: 300,
            initialHeight: 60,
            search: {
                fontSize: 16,
                textColor: Color4.FromInts(24, 26, 70, 255),
                placeholder: {
                    defaultText: 'Click to search',
                    textColor: Color4.FromInts(118, 120, 181, 200)
                }
            },
            options: {
                maxVisibleOptions: 5,
                oddBackgroundColor: Color4.FromInts(246, 246, 255, 255),
                topFontSize: 14,
                bottomFontSize: 14,
                imageSize: 36,
                topTextColor: Color4.FromInts(14, 16, 60, 255),
                bottomTextColor: Color4.FromInts(117, 120, 181, 255),
            },
            errorMessage: {
                fontSize: 13,
                textColor: Color4.FromInts(125, 127, 157, 255)
            }
        };
        return UISearchPrompt;
    }(UIBase));

    var UISelectBox = /** @class */ (function (_super) {
        __extends(UISelectBox, _super);
        function UISelectBox(parent, searchItems, initialConfig, onSuccessfulSelection) {
            var _this = _super.call(this, new UIContainerRect(parent), __assign({}, initialConfig)) || this;
            _this.onSuccessfulSelection = onSuccessfulSelection;
            initialConfig.visible; initialConfig.opacity; initialConfig.hAlign; initialConfig.vAlign; initialConfig.positionX; initialConfig.positionY; var otherConfig = __rest(initialConfig, ["visible", "opacity", "hAlign", "vAlign", "positionX", "positionY"]);
            _this.config = deepMerge(UISearchPrompt.DEFAULTS, otherConfig);
            _this.setProperties({
                width: _this.config.width,
                height: _this.config.initialHeight,
                color: _this.config.borderColor,
            });
            var insideContainer = new UIClickableContainerRect(_this.shape, {
                color: _this.config.backgroundColor,
                width: _this.config.width - _this.config.borderSize * 2,
                height: _this.config.initialHeight - _this.config.borderSize * 2,
                onClick: function () { return _this.uiSearchPrompt.open(); }
            });
            var option = new UISearchPromptOption(insideContainer.shape, __assign(__assign({}, _this.config.options), { height: _this.config.initialHeight, color: Color4.Clear(), width: _this.config.width - _this.config.borderSize * 2 - 20, visible: true, hAlign: 'left', isPointerBlocker: false }));
            var initialText = new UIText(insideContainer.shape);
            initialText.value = 'Click to select an option';
            initialText.fontSize = _this.config.search.fontSize;
            initialText.color = _this.config.search.placeholder.textColor;
            initialText.vTextAlign = initialText.hTextAlign = 'center';
            initialText.positionX = -_this.config.borderSize - 10;
            initialText.isPointerBlocker = false;
            initialText.opacity = initialText.color.a;
            _this.initialText = initialText;
            if (searchItems === null || searchItems === void 0 ? void 0 : searchItems.initialItemId) {
                var initialOption = searchItems.items.filter(function (_a) {
                    var id = _a.id;
                    return id === searchItems.initialItemId;
                })[0];
                if (initialOption) {
                    option.setOption(initialOption);
                    _this.initialText.visible = false;
                }
            }
            var openSearchTexture = new Texture('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAN5AAADeQELGyzWAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlQTFRF////AAAAAAAAflGpXQAAAAJ0Uk5TAICbK04YAAAAeklEQVQ4je3PsRXEMAgE0VFCEapG9agaiiDRVXkJxlpq8IYT/AfwTbZ/ssPUEJgGZ2hYDTmgSIAiDoqsdskBRQIUcVBktXdO/jeVuBDPMBpRyEMUEhVMiUKKSOQlEokrmBKJXARsJWAqAaYEjEbAVgJmtGDewmjEt9wfISOqAUzY2sAAAAAASUVORK5CYII=');
            var openSearchButton = new UIImage(insideContainer.shape, openSearchTexture);
            openSearchButton.sourceWidth = openSearchButton.sourceHeight = 64;
            openSearchButton.height = 15;
            openSearchButton.width = 12;
            openSearchButton.hAlign = 'right';
            openSearchButton.vAlign = 'center';
            openSearchButton.positionX = -10;
            openSearchButton.visible = true;
            openSearchButton.isPointerBlocker = false;
            _this.uiSearchPrompt = new UISearchPrompt(_this.shape, searchItems, __assign(__assign({}, initialConfig), { visible: false, vAlign: 'top', initialHeight: _this.config.initialHeight - _this.config.borderSize * 2 }), function (selectedOption) {
                option.setOption(selectedOption);
                _this.initialText.visible = false;
                _this.onSuccessfulSelection(selectedOption);
            });
            return _this;
        }
        /**
         * Opens the select box
         */
        UISelectBox.prototype.open = function () {
            this.setProperties({ visible: true });
        };
        /**
         * Close the select box
         */
        UISelectBox.prototype.close = function () {
            this.setProperties({ visible: false });
        };
        /**
         * Sets all options available on the select box
         */
        UISelectBox.prototype.setSearchItems = function (options, dropdownDefaults) {
            this.uiSearchPrompt.setItems(options, dropdownDefaults);
        };
        /**
         * Sets the options with the given ids as the ones that will be shown when there is no text on the select box
         */
        UISelectBox.prototype.setSearchDropdownDefaults = function (defaults) {
            this.uiSearchPrompt.setDropdownDefaults(defaults);
        };
        return UISelectBox;
    }(UIBase));

    exports.CenterImage = CenterImage;
    exports.CornerLabel = CornerLabel;
    exports.CustomPrompt = CustomPrompt;
    exports.CustomPromptButton = CustomPromptButton;
    exports.CustomPromptCheckBox = CustomPromptCheckBox;
    exports.CustomPromptIcon = CustomPromptIcon;
    exports.CustomPromptSwitch = CustomPromptSwitch;
    exports.CustomPromptText = CustomPromptText;
    exports.CustomPromptTextBox = CustomPromptTextBox;
    exports.FillInPrompt = FillInPrompt;
    exports.LargeIcon = LargeIcon;
    exports.LoadingIcon = LoadingIcon;
    exports.MediumIcon = MediumIcon;
    exports.OkPrompt = OkPrompt;
    exports.OptionPrompt = OptionPrompt;
    exports.SFFont = SFFont;
    exports.SFHeavyFont = SFHeavyFont;
    exports.SmallIcon = SmallIcon;
    exports.UIBar = UIBar;
    exports.UICounter = UICounter;
    exports.UISearchPrompt = UISearchPrompt;
    exports.UISelectBox = UISelectBox;
    exports.canvas = canvas;
    exports.darkTheme = darkTheme;
    exports.displayAnnouncement = displayAnnouncement;
    exports.hideAnnouncements = hideAnnouncements;
    exports.lightTheme = lightTheme;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
