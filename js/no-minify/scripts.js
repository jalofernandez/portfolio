// TODO: check why i use the following code asap!

var $jscomp$this = this;
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.anime = t()
}(this, function() {
    function e(e) {
        if (!A.col(e)) try {
            return document.querySelectorAll(e)
        } catch (e) {}
    }

    function t(e) {
        return e.reduce(function(e, n) {
            return e.concat(A.arr(n) ? t(n) : n)
        }, [])
    }

    function n(t) {
        return A.arr(t) ? t : (A.str(t) && (t = e(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }

    function r(e, t) {
        return e.some(function(e) {
            return e === t
        })
    }

    function i(e) {
        var t, n = {};
        for (t in e) n[t] = e[t];
        return n
    }

    function o(e, t) {
        var n, r = i(e);
        for (n in e) r[n] = t.hasOwnProperty(n) ? t[n] : e[n];
        return r
    }

    function a(e, t) {
        var n, r = i(e);
        for (n in t) r[n] = A.und(e[n]) ? t[n] : e[n];
        return r
    }

    function s(e) {
        if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(e)) return e[2]
    }

    function u(e, t) {
        return A.fnc(e) ? e(t.target, t.id, t.total) : e
    }

    function c(e, t) {
        if (t in e.style) return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }

    function f(e, t) {
        return A.dom(e) && r(L, t) ? "transform" : A.dom(e) && (e.getAttribute(t) || A.svg(e) && e[t]) ? "attribute" : A.dom(e) && "transform" !== t && c(e, t) ? "css" : null != e[t] ? "object" : void 0
    }

    function d(e, t) {
        switch (f(e, t)) {
            case "transform":
                return function(e, t) {
                    var n, r = -1 < (n = t).indexOf("translate") ? "px" : -1 < n.indexOf("rotate") || -1 < n.indexOf("skew") ? "deg" : void 0;
                    if (r = -1 < t.indexOf("scale") ? 1 : 0 + r, !(e = e.style.transform)) return r;
                    for (var i = [], o = [], a = [], s = /(\w+)\((.+?)\)/g; i = s.exec(e);) o.push(i[1]), a.push(i[2]);
                    return (e = a.filter(function(e, n) {
                        return o[n] === t
                    })).length ? e[0] : r
                }(e, t);
            case "css":
                return c(e, t);
            case "attribute":
                return e.getAttribute(t)
        }
        return e[t] || 0
    }

    function h(e, t) {
        var n = /^(\*=|\+=|-=)/.exec(e);
        if (!n) return e;
        switch (t = parseFloat(t), e = parseFloat(e.replace(n[0], "")), n[0][0]) {
            case "+":
                return t + e;
            case "-":
                return t - e;
            case "*":
                return t * e
        }
    }

    function l(e) {
        return A.obj(e) && e.hasOwnProperty("totalLength")
    }

    function p(e, t) {
        function n(n) {
            return n = void 0 === n ? 0 : n, e.el.getPointAtLength(1 <= t + n ? t + n : 0)
        }
        var r = n(),
            i = n(-1),
            o = n(1);
        switch (e.property) {
            case "x":
                return r.x;
            case "y":
                return r.y;
            case "angle":
                return 180 * Math.atan2(o.y - i.y, o.x - i.x) / Math.PI
        }
    }

    function m(e, t) {
        var n = /-?\d*\.?\d+/g;
        if (e = l(e) ? e.totalLength : e, A.col(e)) t = A.rgb(e) ? e : A.hex(e) ? function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
                return t + t + n + n + r + r
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return "rgb(" + (e = parseInt(t[1], 16)) + "," + parseInt(t[2], 16) + "," + (t = parseInt(t[3], 16)) + ")"
        }(e) : A.hsl(e) ? function(e) {
            function t(e, t, n) {
                return 0 > n && (n += 1), 1 < n && --n, n < 1 / 6 ? e + 6 * (t - e) * n : .5 > n ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
            var n = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e);
            e = parseInt(n[1]) / 360;
            var r = parseInt(n[2]) / 100;
            if (n = parseInt(n[3]) / 100, 0 == r) r = n = e = n;
            else {
                var i = .5 > n ? n * (1 + r) : n + r - n * r,
                    o = 2 * n - i;
                r = t(o, i, e + 1 / 3), n = t(o, i, e), e = t(o, i, e - 1 / 3)
            }
            return "rgb(" + 255 * r + "," + 255 * n + "," + 255 * e + ")"
        }(e) : void 0;
        else {
            var r = s(e);
            e = r ? e.substr(0, e.length - r.length) : e, t = t ? e + t : e
        }
        return {
            original: t += "",
            numbers: t.match(n) ? t.match(n).map(Number) : [0],
            strings: t.split(n)
        }
    }

    function g(e, t) {
        return t.reduce(function(t, n, r) {
            return t + e[r - 1] + n
        })
    }

    function v(e) {
        return (e ? t(A.arr(e) ? e.map(n) : n(e)) : []).filter(function(e, t, n) {
            return n.indexOf(e) === t
        })
    }

    function y(e, t) {
        var r = i(t);
        if (A.arr(e)) {
            var o = e.length;
            2 !== o || A.obj(e[0]) ? A.fnc(t.duration) || (r.duration = t.duration / o) : e = {
                value: e
            }
        }
        return n(e).map(function(e, n) {
            return n = n ? 0 : t.delay, e = A.obj(e) && !l(e) ? e : {
                value: e
            }, A.und(e.delay) && (e.delay = n), e
        }).map(function(e) {
            return a(e, r)
        })
    }

    function b(e, t) {
        var n;
        return e.tweens.map(function(r) {
            var i = (r = function(e, t) {
                    var n, r = {};
                    for (n in e) {
                        var i = u(e[n], t);
                        A.arr(i) && 1 === (i = i.map(function(e) {
                            return u(e, t)
                        })).length && (i = i[0]), r[n] = i
                    }
                    return r.duration = parseFloat(r.duration), r.delay = parseFloat(r.delay), r
                }(r, t)).value,
                o = d(t.target, e.name),
                a = n ? n.to.original : o,
                c = (a = A.arr(i) ? i[0] : a, h(A.arr(i) ? i[1] : i, a));
            o = s(c) || s(a) || s(o);
            return r.isPath = l(i), r.from = m(a, o), r.to = m(c, o), r.start = n ? n.end : e.offset, r.end = r.start + r.delay + r.duration, r.easing = function(e) {
                return A.arr(e) ? M.apply(this, e) : O[e]
            }(r.easing), r.elasticity = (1e3 - Math.min(Math.max(r.elasticity, 1), 999)) / 1e3, A.col(r.from.original) && (r.round = 1), n = r
        })
    }

    function w(e, t, n) {
        var r = "delay" === e ? Math.min : Math.max;
        return t.length ? r.apply(Math, t.map(function(t) {
            return t[e]
        })) : n[e]
    }

    function E(e) {
        var n, r, i, s, u = o(k, e),
            c = o(j, e),
            d = (r = e.targets, (i = v(r)).map(function(e, t) {
                return {
                    target: e,
                    id: t,
                    total: i.length
                }
            })),
            h = [],
            l = a(u, c);
        for (n in e) l.hasOwnProperty(n) || "targets" === n || h.push({
            name: n,
            offset: l.offset,
            tweens: y(e[n], c)
        });
        return s = h, a(u, {
            animatables: d,
            animations: e = t(d.map(function(e) {
                return s.map(function(t) {
                    var n = f(e.target, t.name);
                    if (n) {
                        var r = b(t, e);
                        t = {
                            type: n,
                            property: t.name,
                            animatable: e,
                            tweens: r,
                            duration: r[r.length - 1].end,
                            delay: r[0].delay
                        }
                    } else t = void 0;
                    return t
                })
            })).filter(function(e) {
                return !A.und(e)
            }),
            duration: w("duration", e, c),
            delay: w("delay", e, c)
        })
    }

    function x(e) {
        function t() {
            return window.Promise && new Promise(function(e) {
                return d = e
            })
        }

        function n(e) {
            return l.reversed ? l.duration - e : e
        }

        function r(e) {
            for (var t = 0, n = {}, r = l.animations, i = {}; t < r.length;) {
                var o = r[t],
                    a = o.animatable,
                    s = o.tweens;
                i.tween = s.filter(function(t) {
                    return e < t.end
                })[0] || s[s.length - 1], i.isPath$0 = i.tween.isPath, i.round = i.tween.round, i.eased = i.tween.easing(Math.min(Math.max(e - i.tween.start - i.tween.delay, 0), i.tween.duration) / i.tween.duration, i.tween.elasticity), s = g(i.tween.to.numbers.map(function(e) {
                    return function(t, n) {
                        return t = (n = e.isPath$0 ? 0 : e.tween.from.numbers[n]) + e.eased * (t - n), e.isPath$0 && (t = p(e.tween.value, t)), e.round && (t = Math.round(t * e.round) / e.round), t
                    }
                }(i)), i.tween.to.strings), P[o.type](a.target, o.property, s, n, a.id), o.currentValue = s, t++, i = {
                    isPath$0: i.isPath$0,
                    tween: i.tween,
                    eased: i.eased,
                    round: i.round
                }
            }
            if (n)
                for (var u in n) I || (I = c(document.body, "transform") ? "transform" : "-webkit-transform"), l.animatables[u].target.style[I] = n[u].join(" ");
            l.currentTime = e, l.progress = e / l.duration * 100
        }

        function i(e) {
            l[e] && l[e](l)
        }

        function o() {
            l.remaining && !0 !== l.remaining && l.remaining--
        }

        function a(e) {
            var a = l.duration,
                c = l.offset,
                p = l.delay,
                m = l.currentTime,
                g = l.reversed,
                v = n(e);
            if ((v = Math.min(Math.max(v, 0), a)) > c && v < a ? (r(v), !l.began && v >= p && (l.began = !0, i("begin")), i("run")) : (v <= c && 0 !== m && (r(0), g && o()), v >= a && m !== a && (r(a), g || o())), e >= a && (l.remaining ? (u = s, "alternate" === l.direction && (l.reversed = !l.reversed)) : (l.pause(), d(), h = t(), l.completed || (l.completed = !0, i("complete"))), f = 0), l.children)
                for (e = l.children, a = 0; a < e.length; a++) e[a].seek(v);
            i("update")
        }
        e = void 0 === e ? {} : e;
        var s, u, f = 0,
            d = null,
            h = t(),
            l = E(e);
        return l.reset = function() {
            var e = l.direction,
                t = l.loop;
            l.currentTime = 0, l.progress = 0, l.paused = !0, l.began = !1, l.completed = !1, l.reversed = "reverse" === e, l.remaining = "alternate" === e && 1 === t ? 2 : t
        }, l.tick = function(e) {
            s = e, u || (u = s), a((f + s - u) * x.speed)
        }, l.seek = function(e) {
            a(n(e))
        }, l.pause = function() {
            var e = T.indexOf(l); - 1 < e && T.splice(e, 1), l.paused = !0
        }, l.play = function() {
            l.paused && (l.paused = !1, u = 0, f = l.completed ? 0 : n(l.currentTime), T.push(l), C || $())
        }, l.reverse = function() {
            l.reversed = !l.reversed, u = 0, f = n(l.currentTime)
        }, l.restart = function() {
            l.pause(), l.reset(), l.play()
        }, l.finished = h, l.reset(), l.autoplay && l.play(), l
    }
    var I, k = {
            update: void 0,
            begin: void 0,
            run: void 0,
            complete: void 0,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            offset: 0
        },
        j = {
            duration: 1e3,
            delay: 0,
            easing: "easeOutElastic",
            elasticity: 500,
            round: 0
        },
        L = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
        A = {
            arr: function(e) {
                return Array.isArray(e)
            },
            obj: function(e) {
                return -1 < Object.prototype.toString.call(e).indexOf("Object")
            },
            svg: function(e) {
                return e instanceof SVGElement
            },
            dom: function(e) {
                return e.nodeType || A.svg(e)
            },
            str: function(e) {
                return "string" == typeof e
            },
            fnc: function(e) {
                return "function" == typeof e
            },
            und: function(e) {
                return void 0 === e
            },
            hex: function(e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
            },
            rgb: function(e) {
                return /^rgb/.test(e)
            },
            hsl: function(e) {
                return /^hsl/.test(e)
            },
            col: function(e) {
                return A.hex(e) || A.rgb(e) || A.hsl(e)
            }
        },
        M = function() {
            function e(e, t, n) {
                return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
            }
            return function(t, n, r, i) {
                if (0 <= t && 1 >= t && 0 <= r && 1 >= r) {
                    var o = new Float32Array(11);
                    if (t !== n || r !== i)
                        for (var a = 0; 11 > a; ++a) o[a] = e(.1 * a, t, r);
                    return function(a) {
                        if (t === n && r === i) return a;
                        if (0 === a) return 0;
                        if (1 === a) return 1;
                        for (var s = 0, u = 1; 10 !== u && o[u] <= a; ++u) s += .1;
                        u = s + (a - o[--u]) / (o[u + 1] - o[u]) * .1;
                        var c = 3 * (1 - 3 * r + 3 * t) * u * u + 2 * (3 * r - 6 * t) * u + 3 * t;
                        if (.001 <= c) {
                            for (s = 0; 4 > s && 0 !== (c = 3 * (1 - 3 * r + 3 * t) * u * u + 2 * (3 * r - 6 * t) * u + 3 * t); ++s) {
                                var f = e(u, t, r) - a;
                                u = u - f / c
                            }
                            a = u
                        } else if (0 === c) a = u;
                        else {
                            u = s, s = s + .1;
                            for (var d = 0; 0 < (c = e(f = u + (s - u) / 2, t, r) - a) ? s = f : u = f, 1e-7 < Math.abs(c) && 10 > ++d;);
                            a = f
                        }
                        return e(a, n, i)
                    }
                }
            }
        }(),
        O = function() {
            function e(e, t) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t)
            }
            var t, n = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                r = {
                    In: [
                        [.55, .085, .68, .53],
                        [.55, .055, .675, .19],
                        [.895, .03, .685, .22],
                        [.755, .05, .855, .06],
                        [.47, 0, .745, .715],
                        [.95, .05, .795, .035],
                        [.6, .04, .98, .335],
                        [.6, -.28, .735, .045], e
                    ],
                    Out: [
                        [.25, .46, .45, .94],
                        [.215, .61, .355, 1],
                        [.165, .84, .44, 1],
                        [.23, 1, .32, 1],
                        [.39, .575, .565, 1],
                        [.19, 1, .22, 1],
                        [.075, .82, .165, 1],
                        [.175, .885, .32, 1.275],
                        function(t, n) {
                            return 1 - e(1 - t, n)
                        }
                    ],
                    InOut: [
                        [.455, .03, .515, .955],
                        [.645, .045, .355, 1],
                        [.77, 0, .175, 1],
                        [.86, 0, .07, 1],
                        [.445, .05, .55, .95],
                        [1, 0, 0, 1],
                        [.785, .135, .15, .86],
                        [.68, -.55, .265, 1.55],
                        function(t, n) {
                            return .5 > t ? e(2 * t, n) / 2 : 1 - e(-2 * t + 2, n) / 2
                        }
                    ]
                },
                i = {
                    linear: M(.25, .25, .75, .75)
                },
                o = {};
            for (t in r) o.type = t, r[o.type].forEach(function(e) {
                return function(t, r) {
                    i["ease" + e.type + n[r]] = A.fnc(t) ? t : M.apply($jscomp$this, t)
                }
            }(o)), o = {
                type: o.type
            };
            return i
        }(),
        P = {
            css: function(e, t, n) {
                return e.style[t] = n
            },
            attribute: function(e, t, n) {
                return e.setAttribute(t, n)
            },
            object: function(e, t, n) {
                return e[t] = n
            },
            transform: function(e, t, n, r, i) {
                r[i] || (r[i] = []), r[i].push(t + "(" + n + ")")
            }
        },
        T = [],
        C = 0,
        $ = function() {
            function e() {
                C = requestAnimationFrame(t)
            }

            function t(t) {
                var n = T.length;
                if (n) {
                    for (var r = 0; r < n;) T[r] && T[r].tick(t), r++;
                    e()
                } else cancelAnimationFrame(C), C = 0
            }
            return e
        }();
    return x.version = "2.0.1", x.speed = 1, x.running = T, x.remove = function(e) {
        e = v(e);
        for (var t = T.length - 1; 0 <= t; t--)
            for (var n = T[t], i = n.animations, o = i.length - 1; 0 <= o; o--) r(e, i[o].animatable.target) && (i.splice(o, 1), i.length || n.pause())
    }, x.getValue = d, x.path = function(t, n) {
        var r = A.str(t) ? e(t)[0] : t,
            i = n || 100;
        return function(e) {
            return {
                el: r,
                property: e,
                totalLength: r.getTotalLength() * (i / 100)
            }
        }
    }, x.setDashoffset = function(e) {
        var t = e.getTotalLength();
        return e.setAttribute("stroke-dasharray", t), t
    }, x.bezier = M, x.easings = O, x.timeline = function(e) {
        var t = x(e);
        return t.duration = 0, t.children = [], t.add = function(e) {
            return n(e).forEach(function(e) {
                var n = e.offset,
                    r = t.duration;
                e.autoplay = !1, e.offset = A.und(n) ? r : h(n, r), (e = x(e)).duration > r && (t.duration = e.duration), t.children.push(e)
            }), t
        }, t
    }, x.random = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, x
}),
function(e) {
    "undefined" == typeof module ? this.charming = e : module.exports = e
}(function(e, t) {
    "use strict";
    var n = (t = t || {}).tagName || "span",
        r = null != t.classPrefix ? t.classPrefix : "char",
        i = 1;
    return function e(t) {
        for (var o = [].slice.call(t.childNodes), a = o.length, s = -1; ++s < a;) e(o[s]);
        t.nodeType === Node.TEXT_NODE && function(e) {
            for (var t = e.parentNode, o = e.nodeValue, a = o.length, s = -1; ++s < a;) {
                var u = document.createElement(n);
                r && (u.className = r + i, i++), u.appendChild(document.createTextNode(o[s])), t.insertBefore(u, e)
            }
            t.removeChild(e)
        }(t)
    }(e), e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                r = n[e] = n[e] || [];
            return -1 == r.indexOf(t) && r.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var r = n.indexOf(t);
            return -1 != r && n.splice(r, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var r = 0,
                i = n[r];
            t = t || [];
            for (var o = this._onceEvents && this._onceEvents[e]; i;) {
                var a = o && o[i];
                a && (this.off(e, i), delete o[i]), i.apply(this, t), i = n[r += a ? 0 : 1]
            }
            return this
        }
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}(window, function(e, t) {
    function n(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function r(e, t, i) {
        return this instanceof r ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = function(e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0; n < e.length; n++) t.push(e[n]);
            else t.push(e);
            return t
        }(e), this.options = n({}, this.options), "function" == typeof t ? i = t : n(this.options, t), i && this.on("always", i), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new r(e, t, i)
    }

    function i(e) {
        this.img = e
    }

    function o(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var a = e.jQuery,
        s = e.console;
    (r.prototype = Object.create(t.prototype)).options = {}, r.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, r.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
            for (var n = e.querySelectorAll("img"), r = 0; r < n.length; r++) {
                var i = n[r];
                this.addImage(i)
            }
            if ("string" == typeof this.options.background) {
                var o = e.querySelectorAll(this.options.background);
                for (r = 0; r < o.length; r++) {
                    var a = o[r];
                    this.addElementBackgroundImages(a)
                }
            }
        }
    };
    var u = {
        1: !0,
        9: !0,
        11: !0
    };
    return r.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var n = /url\((['"])?(.*?)\1\)/gi, r = n.exec(t.backgroundImage); null !== r;) {
                var i = r && r[2];
                i && this.addBackground(i, e), r = n.exec(t.backgroundImage)
            }
    }, r.prototype.addImage = function(e) {
        var t = new i(e);
        this.images.push(t)
    }, r.prototype.addBackground = function(e, t) {
        var n = new o(e, t);
        this.images.push(n)
    }, r.prototype.check = function() {
        function e(e, n, r) {
            setTimeout(function() {
                t.progress(e, n, r)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, r.prototype.progress = function(e, t, n) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && s && s.log("progress: " + n, e, t)
    }, r.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, (i.prototype = Object.create(t.prototype)).check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, i.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, i.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, i.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (o.prototype = Object.create(i.prototype)).check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, o.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, o.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, r.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((a = t).fn.imagesLoaded = function(e, t) {
            return new r(this, e, t).jqDeferred.promise(a(this))
        })
    }, r.makeJQueryPlugin(), r
});