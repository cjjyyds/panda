"use strict";
Object.defineProperties(Number.prototype, {
    toRadian: {
        value: function () {
            return Math.toRadian(this);
        }
    },
    toAngle: {
        value: function () {
            return Math.toAngle(this);
        }
    },
});
Object.defineProperties(String.prototype, {
    capitalized: {
        value: function () {
            return this[0].toUpperCase() + this.removeFirst();
        }
    },
    first: {
        value: function (n) {
            return this.slice(0, n || 1);
        }
    },
    last: {
        value: function (n) {
            return this.slice(-n || -1);
        }
    },
    removeFirst: {
        value: function (n) {
            if (n === 0)
                return this;
            return this.slice(n || 1);
        }
    },
    removeLast: {
        value: function (n) {
            if (n === 0)
                return this;
            return this.slice(0, -n || -1);
        }
    }
});
Object.defineProperties(Array.prototype, {
    randomChild: {
        get: function () {
            let n = Math.floor(Math.random() * this.length);
            return this[n];
        }
    },
    removeChild: {
        value: function (child) {
            let index = this.indexOf(child);
            if (index > -1)
                this.splice(index, 1);
            return this;
        }
    },
    firstChild: {
        get: function () {
            return this[0];
        }
    },
    lastChild: {
        get: function () {
            return this[this.length - 1];
        }
    },
    first: {
        value: function (n) {
            switch (n) {
                case void 0:
                case 0:
                case 1:
                    return [this.firstChild];
                default:
                    return this.slice(0, n || 1);
            }
        }
    },
    last: {
        value: function (n) {
            switch (n) {
                case void 0:
                case 0:
                case 1:
                    return [this.lastChild];
                default:
                    return this.slice(-n || -1);
            }
        }
    },
    removeFirst: {
        value: function (n) {
            if (n === 0)
                return this;
            return this.slice(n || 1);
        }
    },
    removeLast: {
        value: function (n) {
            if (n === 0)
                return this;
            return this.slice(0, -n || -1);
        }
    },
    trim: {
        value: function () {
            let that = this;
            that = that.map((e) => {
                if (typeof e == 'string')
                    e = e.trim();
                return e;
            });
            that = that.filter((e) => {
                if (e === void 0)
                    return false;
                if (e === null)
                    return false;
                if (e === '')
                    return false;
                return true;
            });
            return that;
        }
    }
});
Math.between = function (min, max, round = false) {
    let n = min + Math.random() * (max - min);
    if (round)
        n = Math.round(n);
    return n;
};
Math.toRadian = function (angle) {
    return angle / 180 * Math.PI;
};
Math.toAngle = function (radian) {
    return radian * 180 / Math.PI;
};
{
    let animateid = 0;
    Object.defineProperties(Element.prototype, {
        show: {
            get: function () {
                return this._show;
            },
            set: function (show) {
                var _a, _b, _c;
                if (typeof show == 'number') {
                    show = {
                        start: show
                    };
                }
                if (typeof show == 'string') {
                    let splited = show.match(/([a-zA-Z]+)([\d.]*)/);
                    show = {
                        direction: splited[1],
                        start: Number(splited[2])
                    };
                }
                if (Array.isArray(show)) {
                    show = {
                        direction: show[0],
                        start: show[1],
                        duration: show[2],
                    };
                }
                if (show === true)
                    show = {};
                (_a = show.direction) !== null && _a !== void 0 ? _a : (show.direction = '');
                (_b = show.start) !== null && _b !== void 0 ? _b : (show.start = 0);
                (_c = show.duration) !== null && _c !== void 0 ? _c : (show.duration = 0.5);
                this._show = show;
                let rulename = `animate${animateid++}`;
                let x = this.style.left.replace(/[^.\d]/g, '') || 0;
                let y = this.style.top.replace(/[^.\d]/g, '') || 0;
                let xi = x + 0;
                let yi = y + 0;
                let xf = x + 0;
                let yf = y + 0;
                let l = 50;
                let l2 = 35;
                switch (show.direction) {
                    case 'left':
                        xi -= l;
                        break;
                    case 'right':
                        xi += l;
                        break;
                    case 'up':
                        yi -= l;
                        break;
                    case 'down':
                        yi += l;
                        break;
                    case 'leftup':
                    case 'upleft':
                        xi -= l2;
                        yi -= l2;
                        break;
                    case 'rightup':
                    case 'upright':
                        xi += l2;
                        yi -= l2;
                        break;
                    case 'downleft':
                    case 'leftdown':
                        xi -= l2;
                        yi += l2;
                        break;
                    case 'rightdown':
                    case 'downright':
                        xi += l2;
                        yi += l2;
                        break;
                }
                document.styleSheets[0].insertRule(`@keyframes ${rulename} {
                        from { opacity: 0; left: ${xi}px; top: ${yi}px}
                        to { opacity: 1; left: ${xf}px; top: ${yf}px}
                    }`);
                this.style.position = 'relative';
                this.style.right = `${xi}px`;
                this.style.top = `${yi}px`;
                this.style.opacity = 0;
                this.style.animationName = rulename;
                this.style.animationDuration = show.duration + 's';
                this.style.animationDelay = show.start + 's';
                this.style.animationFillMode = 'forwards';
                this.addEventListener('animationend', () => {
                    if (this.onshow) {
                        if (typeof this.onshow == 'function')
                            this.onshow = [this.onshow];
                        this.onshow.forEach((onshow) => {
                            if (typeof onshow == 'function')
                                onshow();
                        });
                    }
                }, { once: true });
            }
        },
        hide: {
            get: function () {
                return this._hide;
            },
            set: function (hide) {
                var _a, _b, _c;
                if (typeof hide == 'number') {
                    hide = {
                        start: hide
                    };
                }
                if (typeof hide == 'string') {
                    let splited = hide.match(/([a-zA-Z]+)([\d.]*)/);
                    hide = {
                        direction: splited[1],
                        start: Number(splited[2])
                    };
                }
                if (Array.isArray(hide)) {
                    hide = {
                        direction: hide[0],
                        start: hide[1],
                        duration: hide[2],
                    };
                }
                if (hide === true)
                    hide = {};
                (_a = hide.direction) !== null && _a !== void 0 ? _a : (hide.direction = '');
                (_b = hide.start) !== null && _b !== void 0 ? _b : (hide.start = 0);
                (_c = hide.duration) !== null && _c !== void 0 ? _c : (hide.duration = 0.5);
                this._hide = hide;
                let rulename = `animate${animateid++}`;
                let x = this.style.left.replace(/[^.\d]/g, '') || 0;
                let y = this.style.top.replace(/[^.\d]/g, '') || 0;
                let xi = x + 0;
                let yi = y + 0;
                let xf = x + 0;
                let yf = y + 0;
                let l = 50;
                let l2 = 35;
                switch (hide.direction) {
                    case 'left':
                        xf -= l;
                        break;
                    case 'right':
                        xf += l;
                        break;
                    case 'up':
                        yf -= l;
                        break;
                    case 'down':
                        yf += l;
                        break;
                    case 'leftup':
                    case 'upleft':
                        xf -= l2;
                        yf -= l2;
                        break;
                    case 'rightup':
                    case 'upright':
                        xf += l2;
                        yf -= l2;
                        break;
                    case 'downleft':
                    case 'leftdown':
                        xf -= l2;
                        yf += l2;
                        break;
                    case 'rightdown':
                    case 'downright':
                        xf += l2;
                        yf += l2;
                        break;
                }
                document.styleSheets[0].insertRule(`@keyframes ${rulename} {
                        from { opacity: 1; left: ${xi}px; top: ${yi}px}
                        to { opacity: 0; left: ${xf}px; top: ${yf}px}
                    }`);
                this.style.position = 'relative';
                this.style.right = `${xi}px`;
                this.style.top = `${yi}px`;
                this.style.opacity = 1;
                this.style.animationName = rulename;
                this.style.animationDuration = hide.duration + 's';
                this.style.animationDelay = hide.start + 's';
                this.style.animationFillMode = 'forwards';
                this.addEventListener('animationend', () => {
                    if (this.onhide) {
                        if (typeof this.onhide == 'function')
                            this.onhide = [this.onhide];
                        this.onhide.forEach((onhide) => {
                            if (typeof onhide == 'function')
                                onhide();
                        });
                    }
                }, { once: true });
            }
        },
        exit: {
            get: function () {
                return this._exit;
            },
            set: function (exit) {
                var _a, _b, _c;
                if (typeof exit == 'number') {
                    exit = {
                        start: exit
                    };
                }
                if (typeof exit == 'string') {
                    let splited = exit.match(/([a-zA-Z]+)([\d.]*)/);
                    exit = {
                        direction: splited[1],
                        start: Number(splited[2])
                    };
                }
                if (Array.isArray(exit)) {
                    exit = {
                        direction: exit[0],
                        start: exit[1],
                        duration: exit[2],
                    };
                }
                if (exit === true)
                    exit = {};
                (_a = exit.direction) !== null && _a !== void 0 ? _a : (exit.direction = '');
                (_b = exit.start) !== null && _b !== void 0 ? _b : (exit.start = 0);
                (_c = exit.duration) !== null && _c !== void 0 ? _c : (exit.duration = 0.5);
                this._exit = exit;
                let rulename = `animate${animateid++}`;
                let x = this.style.left.replace(/[^.\d]/g, '') || 0;
                let y = this.style.top.replace(/[^.\d]/g, '') || 0;
                let xi = x + 0;
                let yi = y + 0;
                let xf = x + 0;
                let yf = y + 0;
                let l = 50;
                let l2 = 35;
                switch (exit.direction) {
                    case 'left':
                        xf -= l;
                        break;
                    case 'right':
                        xf += l;
                        break;
                    case 'up':
                        yf -= l;
                        break;
                    case 'down':
                        yf += l;
                        break;
                    case 'leftup':
                    case 'upleft':
                        xf -= l2;
                        yf -= l2;
                        break;
                    case 'rightup':
                    case 'upright':
                        xf += l2;
                        yf -= l2;
                        break;
                    case 'downleft':
                    case 'leftdown':
                        xf -= l2;
                        yf += l2;
                        break;
                    case 'rightdown':
                    case 'downright':
                        xf += l2;
                        yf += l2;
                        break;
                }
                document.styleSheets[0].insertRule(`@keyframes ${rulename} {
                        from { opacity: 1; left: ${xi}px; top: ${yi}px}
                        to { opacity: 0; left: ${xf}px; top: ${yf}px}
                    }`);
                this.style.position = 'relative';
                this.style.right = `${xi}px`;
                this.style.top = `${yi}px`;
                this.style.opacity = 1;
                this.style.animationName = rulename;
                this.style.animationDuration = exit.duration + 's';
                this.style.animationDelay = exit.start + 's';
                this.style.animationFillMode = 'forwards';
                this.addEventListener('animationend', () => {
                    let box = this.parentNode;
                    box.waitingExitCount = (box.waitingExitCount || 0) + 1;
                    if (box.waitingExitCount == box.childElementCount)
                        box.remove();
                    if (this.onexit) {
                        if (typeof this.onexit == 'function')
                            this.onexit = [this.onexit];
                        this.onexit.forEach((onexit) => {
                            if (typeof onexit == 'function')
                                onexit();
                        });
                    }
                }, { once: true });
            }
        },
    });
}
//# sourceMappingURL=/dist/script/js.js.map