/*! 漢字標準格式 v3.3.0 | MIT License | css.hanzi.co */
/*! Han.css: the CSS typography framework optimised for Hanzi */

void

function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = b(a, !0) : "function" == typeof define && define.amd ? define(function() { return b(a, !0) }) : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";

    function c(a) { return "function" == typeof a || a instanceof Element ? a : void 0 }

    function d(a) {
        var b = 0 === a.index && a.isEnd ? "biaodian cjk" : "biaodian cjk portion " + (0 === a.index ? "is-first" : a.isEnd ? "is-end" : "is-inner"),
            c = S.create("h-char-group", b);
        return c.innerHTML = a.text, c
    }

    function e(a) {
        var b = S.create("div"),
            c = a.charCodeAt(0).toString(16);
        return b.innerHTML = '<h-char unicode="' + c + '" class="biaodian cjk ' + f(a) + '">' + a + "</h-char>", b.firstChild
    }

    function f(a) { return a.match(R["char"].biaodian.open) ? "bd-open" : a.match(R["char"].biaodian.close) ? "bd-close bd-end" : a.match(R["char"].biaodian.end) ? /(?:\u3001|\u3002|\uff0c|\uff1f|\uff01|\uff1a|\uff1b)/i.test(a) ? "bd-end bd-cop" : "bd-end" : a.match(new RegExp(Q.biaodian.liga)) ? "bd-liga" : a.match(new RegExp(Q.biaodian.middle)) ? "bd-middle" : "" }
    // 这一句好像是写逗号、顿号、句号、问号、叹号、冒号、分号与左标点的挤压

    function g(a, b) { var c, d = S.create("canvas"); return d.width = "50", d.height = "20", d.style.display = "none", L.appendChild(d), c = d.getContext("2d"), c.textBaseline = "top", c.font = "15px " + b + ", sans-serif", c.fillStyle = "black", c.strokeStyle = "black", c.fillText(a, 0, 0), { node: d, context: c, remove: function() { S.remove(d, L) } } }

    function h(a, b) {
        var c, d = a.context,
            e = b.context;
        try {
            for (var f = 1; 20 >= f; f++)
                for (var g = 1; 50 >= g; g++) {
                    if ("undefined" == typeof c && d.getImageData(g, f, 1, 1).data[3] !== e.getImageData(g, f, 1, 1).data[3]) { c = !1; break }
                    if ("boolean" == typeof c) break;
                    50 === g && 20 === f && "undefined" == typeof c && (c = !0)
                }
            return a.remove(), b.remove(), a = null, b = null, c
        } catch (h) {}
        return !1
    }

    function i(a, b, c) {
        var a = a,
            b = b || "sans-serif",
            c = c || "\u8fadQ";
        return b = g(c, b), a = g(c, a), !h(a, b)
    }

    function j(a) {
        var b, c = S.create("!"),
            d = a.classList;
        return c.appendChild(S.clone(a)), S.tag("rt", c.firstChild).forEach(function(a) {
            var c, e = S.create("!"),
                f = [];
            do {
                if (c = (c || a).previousSibling, !c || c.nodeName.match(/((?:h\-)?r[ubt])/i)) break;
                e.insertBefore(S.clone(c), e.firstChild), f.push(c)
            } while (!c.nodeName.match(/((?:h\-)?r[ubt])/i));
            b = d.contains("zhuyin") ? p(e, a) : o(e, a);
            try { a.parentNode.replaceChild(b, a), f.map(S.remove) } catch (g) {}
        }), m(c)
    }

    function k(a) {
        var b = S.create("!");
        return b.appendChild(S.clone(a)), S.tag("rt", b.firstChild).forEach(function(a) {
            var b, c, d = S.create("!"),
                e = [];
            do {
                if (b = (b || a).previousSibling, !b || b.nodeName.match(/((?:h\-)?r[ubt])/i)) break;
                d.insertBefore(S.clone(b), d.firstChild), e.push(b)
            } while (!b.nodeName.match(/((?:h\-)?r[ubt])/i));
            c = S.create("rt"), c.innerHTML = q(a), a.parentNode.replaceChild(c, a)
        }), b.firstChild
    }

    function l(a) {
        var b, c, d, e, f = S.create("!"),
            g = a.classList;
        return f.appendChild(S.clone(a)), b = f.firstChild, c = d = S.tag("rb", b), e = c.length, void

        function(a) { a && (d = S.tag("rt", a).map(function(a, b) { if (c[b]) { var d = p(c[b], a); try { c[b].parentNode.replaceChild(d, c[b]) } catch (e) {} return d } }), S.remove(a), b.setAttribute("rightangle", "true")) }(b.querySelector("rtc.zhuyin")), S.qsa("rtc:not(.zhuyin)", b).forEach(function(a, c) {
            var f;
            f = S.tag("rt", a).map(function(a, b) {
                var f, h, i = Number(a.getAttribute("rbspan") || 1),
                    j = 0,
                    k = [];
                i > e && (i = e);
                do {
                    try { f = d.shift(), k.push(f) } catch (l) {}
                    if ("undefined" == typeof f) break;
                    j += Number(f.getAttribute("span") || 1)
                } while (i > j);
                if (j > i) {
                    if (k.length > 1) return void console.error("An impossible `rbspan` value detected.", ruby);
                    k = S.tag("rb", k[0]), d = k.slice(i).concat(d), k = k.slice(0, i), j = i
                }
                h = o(k, a, { "class": g, span: j, order: c });
                try { k[0].parentNode.replaceChild(h, k.shift()), k.map(S.remove) } catch (l) {}
                return h
            }), d = f, 1 === c && b.setAttribute("doubleline", "true"), S.remove(a)
        }), m(f)
    }

    function m(a) {
        var b = a.firstChild,
            c = S.create("h-ruby");
        return c.innerHTML = b.innerHTML, S.setAttr(c, b.attributes), c.normalize(), c
    }

    function n(a) { if (!a instanceof Element) return a; var b = a.classList; return b.contains("pinyin") ? b.add("romanization") : b.contains("romanization") ? b.add("annotation") : b.contains("mps") ? b.add("zhuyin") : b.contains("rightangle") && b.add("complex"), a }

    function o(a, b, c) {
        var d = S.create("h-ru"),
            b = S.clone(b),
            c = c || {};
        return c.annotation = "true", Array.isArray(a) ? d.innerHTML = a.map(function(a) { return "undefined" == typeof a ? "" : a.outerHTML }).join("") + b.outerHTML : (d.appendChild(S.clone(a)), d.appendChild(b)), S.setAttr(d, c), d
    }

    function p(a, b) {
        var a = S.clone(a),
            c = S.create("h-ru");
        return c.setAttribute("zhuyin", !0), c.appendChild(a), c.innerHTML += q(b), c
    }

    function q(a) { var b, c, d, e = "string" == typeof a ? a : a.textContent; return b = e.replace(R.zhuyin.diao, ""), d = b ? b.length : 0, c = e.replace(b, "").replace(/[\u02C5]/g, "\u02c7").replace(/[\u030D]/g, "\u0358"), 0 === d ? "" : '<h-zhuyin length="' + d + '" diao="' + c + '"><h-yin>' + b + "</h-yin><h-diao>" + c + "</h-diao></h-zhuyin>" }

    function r(a, b) { return a && b && a.parentNode === b.parentNode }

    function s(a, b) {
        var c = a,
            b = b || "";
        if (S.isElmt(a.nextSibling) || r(a, a.nextSibling)) return b + X;
        for (; !c.nextSibling;) c = c.parentNode;
        return a !== c && c.insertAdjacentHTML("afterEnd", "<h-hws hidden> </h-hws>"), b
    }

    function t(a, b) { return a.isEnd && 0 === a.index ? b[1] + X + b[2] : 0 === a.index ? s(a.node, a.text) : a.text }

    function u(a) { return 0 === a.index ? S.clone(Y) : "" }

    function v(a) { var b = a.node.parentNode; return 0 === a.index && (Z = a.endIndexInNode - 2), "h-hws" !== b.nodeName.toLowerCase() || 1 !== a.index && a.indexInMatch !== Z || b.classList.add("quote-inner"), a.text }

    function w(a) { var b = a.node.parentNode; return "h-hws" === b.nodeName.toLowerCase() && b.classList.add("quote-outer"), a.text }

    function x() { var a, b = S.create("div"); return b.innerHTML = "<span>a b</span><span style=\"font-family: 'Han Space'\">a b</span>", L.appendChild(b), a = b.firstChild.offsetWidth !== b.lastChild.offsetWidth, S.remove(b), a }

    function y(a) {
        var b = a.nextSibling;
        b && ba(b, "h-cs.jinze-outer") ? b.classList.add("hangable-outer") : a.insertAdjacentHTML("afterend", aa)
    }

    function z(a) { return a.replace(/(biaodian|cjk|bd-jiya|bd-consecutive|bd-hangable)/gi, "").trim() }

    function A(a) {
        var b, c = a.text,
            d = a.node.parentNode,
            e = S.parent(d, "h-char.biaodian"),
            f = O.createBDChar(c);
        return f.innerHTML = "<h-inner>" + c + "</h-inner>", f.classList.add(ea), (b = S.parent(d, "h-jinze")) && C(b), e ? function() { return e.classList.add(ea), ba(d, "h-inner, h-inner *") ? c : f.firstChild }() : f
    }

    function B(a) {
        var b, c = ca,
            d = a.node.parentNode,
            e = S.parent(d, "h-char.biaodian"),
            f = S.parent(e, "h-jinze");
        return b = e.classList, c && e.setAttribute("prev", c), da && b.contains("bd-open") && da.pop().setAttribute("next", "bd-open"), da = void 0, a.isEnd ? (ca = void 0, b.add(ga, "end-portion")) : (ca = z(e.getAttribute("class")), b.add(ga)), f && (da = D(f, { prev: c, "class": z(e.getAttribute("class")) })), a.text
    }

    function C(a) { ba(a, ".tou, .touwei") && !ba(a.previousSibling, "h-cs.jiya-outer") && a.insertAdjacentHTML("beforebegin", ha), ba(a, ".wei, .touwei") && !ba(a.nextSibling, "h-cs.jiya-outer") && a.insertAdjacentHTML("afterend", ha) }

    function D(a, b) { var c, d; return ba(a, ".tou, .touwei") && (c = a.previousSibling, ba(c, "h-cs") && (c.className = "jinze-outer jiya-outer", c.setAttribute("prev", b.prev))), ba(a, ".wei, .touwei") && (d = a.nextSibling, ba(d, "h-cs") && (d.className = "jinze-outer jiya-outer " + b["class"], d.removeAttribute("prev"))), [c, d] }

    function E(a, b, c) {
        return function() {
            var d = O.localize.writeOnCanvas(b, a),
                e = O.localize.writeOnCanvas(c, a);
            return O.localize.compareCanvases(d, e)
        }
    }

    function F() { return E('"Romanization Sans"', "a\u030d", "\udb80\udc61") }

    function G() { return E('"Romanization Sans"', "i\u030d", "\udb80\udc69") }

    function H() { return E('"Zhuyin Kaiti"', "\u31b4\u0358", "\udb8c\uddb4") }

    function I(a) {
        return function(b) {
            var b = b || J,
                c = O.find(b).avoid(ia);
            return a.forEach(function(a) { c.replace(new RegExp(a[0], "ig"), function(b, c) { var d = S.clone(ja); return d.innerHTML = "<h-inner>" + c[0] + "</h-inner>", d.setAttribute("display-as", a[1]), 0 === b.index ? d : "" }) }), c
        }
    }
    var J = a.document,
        K = J.documentElement,
        L = J.body,
        M = "3.3.0",
        N = ["initCond", "renderElem", "renderJiya", "renderHanging", "correctBiaodian", "renderHWS", "substCombLigaWithPUA"],
        O = function(a, b) { return new O.fn.init(a, b) },
        P = function() { return arguments[0] && (this.context = arguments[0]), arguments[1] && (this.condition = arguments[1]), this };
    O.version = M, O.fn = O.prototype = {
        version: M,
        constructor: O,
        context: L,
        condition: K,
        routine: N,
        init: P,
        setRoutine: function(a) { return Array.isArray(a) && (this.routine = a), this },
        render: function(a) {
            var b = this,
                a = Array.isArray(a) ? a : this.routine;
            return a.forEach(function(a) { "string" == typeof a && "function" == typeof b[a] ? b[a]() : Array.isArray(a) && "function" == typeof b[a[0]] && b[a.shift()].apply(b, a) }), this
        }
    }, O.fn.init.prototype = O.fn, O.init = function() { return O.init = O().render() };
    var Q = { punct: { base: "[\u2026,.;:!?\u203d_]", sing: "[\u2010-\u2014\u2026]", middle: "[\\/~\\-&\u2010-\u2014_]", open: "['\"\u2018\u201c\\(\\[\xa1\xbf\u2e18\xab\u2039\u201a\u201c\u201e]", close: "['\"\u201d\u2019\\)\\]\xbb\u203a\u201b\u201d\u201f]", end: "['\"\u201d\u2019\\)\\]\xbb\u203a\u201b\u201d\u201f\u203c\u203d\u2047-\u2049,.;:!?]" }, biaodian: { base: "[\ufe30\uff0e\u3001\uff0c\u3002\uff1a\uff1b\uff1f\uff01\u30fc]", liga: "[\u2014\u2026\u22ef]", middle: "[\xb7\uff3c\uff0f\uff0d\u30a0\uff06\u30fb\uff3f]", open: "[\u300c\u300e\u300a\u3008\uff08\u3014\uff3b\uff5b\u3010\u3016\u201C]", close: "[\u300d\u300f\u300b\u3009\uff09\u3015\uff3d\uff5d\u3011\u3017\u201D]", end: "[\u300d\u300f\u300b\u3009\uff09\u3015\uff3d\uff5d\u3011\u3017\ufe30\uff0e\u3001\uff0c\u3002\uff1a\uff1b\uff1f\uff01\u30fc\u201D]" }, hanzi: { base: "[\u4e00-\u9fff\u3400-\u4db5\u31c0-\u31e3\u3007\ufa0e\ufa0f\ufa11\ufa13\ufa14\ufa1f\ufa21\ufa23\ufa24\ufa27-\ufa29]|[\ud800-\udbff][\udc00-\udfff]", desc: "[\u2ff0-\u2ffa]", radical: "[\u2f00-\u2fd5\u2e80-\u2ef3]" }, latin: { base: "[A-Za-z0-9\xc0-\xff\u0100-\u017f\u0180-\u024f\u2c60-\u2c7f\ua720-\ua7ff\u1e00-\u1eff]", combine: "[\u0300-\u0341\u1dc0-\u1dff]" }, ellinika: { base: "[0-9\u0370-\u03ff\u1f00-\u1fff]", combine: "[\u0300-\u0345\u1dc0-\u1dff]" }, kirillica: { base: "[0-9\u0400-\u0482\u048a-\u04ff\u0500-\u052f\ua640-\ua66e\ua67e-\ua697]", combine: "[\u0483-\u0489\u2de0-\u2dff\ua66f-\ua67d\ua69f]" }, kana: { base: "[\u30a2\u30a4\u30a6\u30a8\u30aa-\u30fa\u3042\u3044\u3046\u3048\u304a-\u3094\u309f\u30ff]|\ud82c[\udc00-\udc01]", small: "[\u3041\u3043\u3045\u3047\u3049\u30a1\u30a3\u30a5\u30a7\u30a9\u3063\u3083\u3085\u3087\u308e\u3095\u3096\u30c3\u30e3\u30e5\u30e7\u30ee\u30f5\u30f6\u31f0-\u31ff]", combine: "[\u3099-\u309c]", half: "[\uff66-\uff9f]", mark: "[\u30a0\u309d\u309e\u30fb-\u30fe]" }, eonmun: { base: "[\uac00-\ud7a3]", letter: "[\u1100-\u11ff\u314f-\u3163\u3131-\u318e\ua960-\ua97c\ud7b0-\ud7fb]", half: "[\uffa1-\uffdc]" }, zhuyin: { base: "[\u3105-\u312d\u31a0-\u31ba]", initial: "[\u3105-\u3119\u312a-\u312c\u31a0-\u31a3]", medial: "[\u3127-\u3129]", "final": "[\u311a-\u3129\u312d\u31a4-\u31b3\u31b8-\u31ba]", tone: "[\u02d9\u02ca\u02c5\u02c7\u02cb\u02ea\u02eb]", checked: "[\u31b4-\u31b7][\u0358\u030d]?" } },
        R = function() {
            var a = "[\\x20\\t\\r\\n\\f]",
                b = Q.punct.open,
                c = (Q.punct.close, Q.punct.end),
                d = Q.punct.middle,
                e = Q.punct.sing,
                f = b + "|" + c + "|" + d,
                g = Q.biaodian.open,
                h = Q.biaodian.close,
                i = Q.biaodian.end,
                j = Q.biaodian.middle,
                k = Q.biaodian.liga + "{2}",
                l = g + "|" + i + "|" + j,
                m = Q.kana.base + Q.kana.combine + "?",
                n = Q.kana.small + Q.kana.combine + "?",
                o = Q.kana.half,
                p = Q.eonmun.base + "|" + Q.eonmun.letter,
                q = Q.eonmun.half,
                r = Q.hanzi.base + "|" + Q.hanzi.desc + "|" + Q.hanzi.radical + "|" + m,
                s = Q.ellinika.combine,
                t = Q.latin.base + s + "*",
                u = Q.ellinika.base + s + "*",
                v = Q.kirillica.combine,
                w = Q.kirillica.base + v + "*",
                x = t + "|" + u + "|" + w,
                y = "['\u2019]",
                z = r + "|(?:" + x + "|" + y + ")+",
                A = Q.zhuyin.initial,
                B = Q.zhuyin.medial,
                C = Q.zhuyin["final"],
                D = Q.zhuyin.tone + "|" + Q.zhuyin.checked;
            return {
                "char": { punct: { all: new RegExp("(" + f + ")", "g"), open: new RegExp("(" + b + ")", "g"), end: new RegExp("(" + c + ")", "g"), sing: new RegExp("(" + e + ")", "g") }, biaodian: { all: new RegExp("(" + l + ")", "g"), open: new RegExp("(" + g + ")", "g"), close: new RegExp("(" + h + ")", "g"), end: new RegExp("(" + i + ")", "g"), liga: new RegExp("(" + k + ")", "g") }, hanzi: new RegExp("(" + r + ")", "g"), latin: new RegExp("(" + t + ")", "ig"), ellinika: new RegExp("(" + u + ")", "ig"), kirillica: new RegExp("(" + w + ")", "ig"), kana: new RegExp("(" + m + "|" + n + "|" + o + ")", "g"), eonmun: new RegExp("(" + p + "|" + q + ")", "g") },
                group: { biaodian: [new RegExp("((" + l + "){2,})", "g"), new RegExp("(" + k + g + ")", "g")], punct: null, hanzi: new RegExp("(" + r + ")+", "g"), western: new RegExp("(" + t + "|" + u + "|" + w + "|" + f + ")+", "ig"), kana: new RegExp("(" + m + "|" + n + "|" + o + ")+", "g"), eonmun: new RegExp("(" + p + "|" + q + "|" + f + ")+", "g") },
                jinze: { hanging: new RegExp(a + "*([\u3001\uff0c\u3002\uff0e])(?!" + i + ")", "ig"), touwei: new RegExp("(" + g + "+)(" + z + ")(" + i + "+)", "ig"), tou: new RegExp("(" + g + "+)(" + z + ")", "ig"), wei: new RegExp("(" + z + ")(" + i + "+)", "ig"), middle: new RegExp("(" + z + ")(" + j + ")(" + z + ")", "ig") },
                zhuyin: { form: new RegExp("^\u02d9?(" + A + ")?(" + B + ")?(" + C + ")?(" + D + ")?$"), diao: new RegExp("(" + D + ")", "g") },
                hws: { base: [new RegExp("(" + r + ")(" + x + "|" + b + ")", "ig"), new RegExp("(" + x + "|" + c + ")(" + r + ")", "ig")], strict: [new RegExp("(" + r + ")" + a + "?(" + x + "|" + b + ")", "ig"), new RegExp("(" + x + "|" + c + ")" + a + "?(" + r + ")", "ig")] },
                "display-as": {
                    "ja-font-for-hant": ["\u67e5 \u67fb", "\u555f \u5553", "\u9109 \u9115", "\u503c \u5024", "\u6c61 \u6c5a"],
                    "comb-liga-pua": [
                        ["a[\u030d\u0358]", "\udb80\udc61"],
                        ["e[\u030d\u0358]", "\udb80\udc65"],
                        ["i[\u030d\u0358]", "\udb80\udc69"],
                        ["o[\u030d\u0358]", "\udb80\udc6f"],
                        ["u[\u030d\u0358]", "\udb80\udc75"],
                        ["\u31b4[\u030d\u0358]", "\udb8c\uddb4"],
                        ["\u31b5[\u030d\u0358]", "\udb8c\uddb5"],
                        ["\u31b6[\u030d\u0358]", "\udb8c\uddb6"],
                        ["\u31b7[\u030d\u0358]", "\udb8c\uddb7"]
                    ],
                    "comb-liga-vowel": [
                        ["a[\u030d\u0358]", "\udb80\udc61"],
                        ["e[\u030d\u0358]", "\udb80\udc65"],
                        ["i[\u030d\u0358]", "\udb80\udc69"],
                        ["o[\u030d\u0358]", "\udb80\udc6f"],
                        ["u[\u030d\u0358]", "\udb80\udc75"]
                    ],
                    "comb-liga-zhuyin": [
                        ["\u31b4[\u030d\u0358]", "\udb8c\uddb4"],
                        ["\u31b5[\u030d\u0358]", "\udb8c\uddb5"],
                        ["\u31b6[\u030d\u0358]", "\udb8c\uddb6"],
                        ["\u31b7[\u030d\u0358]", "\udb8c\uddb7"]
                    ]
                },
                // "inaccurate-char": [
                //     ["[\u2022\u2027]", "\xb7"],
                //     ["\u22ef\u22ef", "\u2026\u2026"],
                //     ["\u2500\u2500", "\u2014\u2014"],
                //     ["\u2035", "\u2018"],
                //     ["\u2032", "\u2019"],
                //     ["\u2036", "\u201c"],
                //     ["\u2033", "\u201d"]
                // ]
            }
        }();
    O.UNICODE = Q, O.TYPESET = R, O.UNICODE.cjk = O.UNICODE.hanzi, O.UNICODE.greek = O.UNICODE.ellinika, O.UNICODE.cyrillic = O.UNICODE.kirillica, O.UNICODE.hangul = O.UNICODE.eonmun, O.UNICODE.zhuyin.ruyun = O.UNICODE.zhuyin.checked, O.TYPESET["char"].cjk = O.TYPESET["char"].hanzi, O.TYPESET["char"].greek = O.TYPESET["char"].ellinika, O.TYPESET["char"].cyrillic = O.TYPESET["char"].kirillica, O.TYPESET["char"].hangul = O.TYPESET["char"].eonmun, O.TYPESET.group.hangul = O.TYPESET.group.eonmun, O.TYPESET.group.cjk = O.TYPESET.group.hanzi;
    var S = {
            id: function(a, b) { return (b || J).getElementById(a) },
            tag: function(a, b) { return this.makeArray((b || J).getElementsByTagName(a)) },
            qs: function(a, b) { return (b || J).querySelector(a) },
            qsa: function(a, b) { return this.makeArray((b || J).querySelectorAll(a)) },
            parent: function(a, b) {
                return b ? function() {
                    if ("function" == typeof S.matches) {
                        for (; !S.matches(a, b);) {
                            if (!a || a === J.documentElement) { a = void 0; break }
                            a = a.parentNode
                        }
                        return a
                    }
                }() : a ? a.parentNode : void 0
            },
            create: function(a, b) { var c = "!" === a ? J.createDocumentFragment() : "" === a ? J.createTextNode(b || "") : J.createElement(a); try { b && (c.className = b) } catch (d) {} return c },
            clone: function(a, b) { return a.cloneNode("boolean" == typeof b ? b : !0) },
            remove: function(a) { return a.parentNode.removeChild(a) },
            setAttr: function(a, b) {
                if ("object" == typeof b) {
                    var c = b.length;
                    if ("object" == typeof b[0] && "name" in b[0])
                        for (var d = 0; c > d; d++) void 0 !== b[d].value && a.setAttribute(b[d].name, b[d].value);
                    else
                        for (var e in b) b.hasOwnProperty(e) && void 0 !== b[e] && a.setAttribute(e, b[e]);
                    return a
                }
            },
            isElmt: function(a) { return a && a.nodeType === Node.ELEMENT_NODE },
            isIgnorable: function(a) { return a ? "WBR" === a.nodeName || a.nodeType === Node.COMMENT_NODE : !1 },
            makeArray: function(a) { return Array.prototype.slice.call(a) },
            extend: function(a, b) {
                if (("object" == typeof a || "function" == typeof a) && "object" == typeof b)
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
                return a
            }
        },
        T = function(b) {
            function c(a, b, c) {
                var d = Element.prototype,
                    e = d.matches || d.mozMatchesSelector || d.msMatchesSelector || d.webkitMatchesSelector;
                return a instanceof Element ? e.call(a, b) : c && /^[39]$/.test(a.nodeType) ? !0 : !1
            }
            var d = "0.2.1",
                e = b.NON_INLINE_PROSE,
                f = b.PRESETS.prose.filterElements,
                g = a || {},
                h = g.document || void 0;
            if ("undefined" == typeof h) throw new Error("Fibre requires a DOM-supported environment.");
            var i = function(a, b) { return new i.fn.init(a, b) };
            return i.version = d, i.matches = c, i.fn = i.prototype = {
                constructor: i,
                version: d,
                finder: [],
                context: void 0,
                portionMode: "retain",
                selector: {},
                preset: "prose",
                init: function(a, b) { if (b && (this.preset = null), this.selector = { context: null, filter: [], avoid: [], boundary: [] }, !a) throw new Error("A context is required for Fibre to initialise."); return a instanceof Node ? a instanceof Document ? this.context = a.body || a : this.context = a : "string" == typeof a && (this.context = h.querySelector(a), this.selector.context = a), this },
                filterFn: function(a) {
                    var b = this.selector.filter.join(", ") || "*",
                        d = this.selector.avoid.join(", ") || null,
                        e = c(a, b, !0) && !c(a, d);
                    return "prose" === this.preset ? f(a) && e : e
                },
                boundaryFn: function(a) {
                    var b = this.selector.boundary.join(", ") || null,
                        d = c(a, b);
                    return "prose" === this.preset ? e(a) || d : d
                },
                filter: function(a) { return "string" == typeof a && this.selector.filter.push(a), this },
                endFilter: function(a) { return a ? this.selector.filter = [] : this.selector.filter.pop(), this },
                avoid: function(a) { return "string" == typeof a && this.selector.avoid.push(a), this },
                endAvoid: function(a) { return a ? this.selector.avoid = [] : this.selector.avoid.pop(), this },
                addBoundary: function(a) { return "string" == typeof a && this.selector.boundary.push(a), this },
                removeBoundary: function() { return this.selector.boundary = [], this },
                setMode: function(a) { return this.portionMode = "first" === a ? "first" : "retain", this },
                replace: function(a, c) { var d = this; return d.finder.push(b(d.context, { find: a, replace: c, filterElements: function(a) { return d.filterFn(a) }, forceContext: function(a) { return d.boundaryFn(a) }, portionMode: d.portionMode })), d },
                wrap: function(a, c) { var d = this; return d.finder.push(b(d.context, { find: a, wrap: c, filterElements: function(a) { return d.filterFn(a) }, forceContext: function(a) { return d.boundaryFn(a) }, portionMode: d.portionMode })), d },
                revert: function(a) {
                    var b = this.finder.length,
                        a = Number(a) || (0 === a ? Number(0) : "all" === a ? b : 1);
                    if ("undefined" == typeof b || 0 === b) return this;
                    a > b && (a = b);
                    for (var c = a; c > 0; c--) this.finder.pop().revert();
                    return this
                }
            }, i.fn.filterOut = i.fn.avoid, i.fn.init.prototype = i.fn, i
        }(function() {
            function a(a) { return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") }

            function b() { return c.apply(null, arguments) || d.apply(null, arguments) }

            function c(a, c, e, f, g) {
                if (c && !c.nodeType && arguments.length <= 2) return !1;
                var h = "function" == typeof e;
                h && (e = function(a) { return function(b, c) { return a(b.text, c.startIndex) } }(e));
                var i = d(c, {
                    find: a,
                    wrap: h ? null : e,
                    replace: h ? e : "$" + (f || "&"),
                    prepMatch: function(a, b) {
                        if (!a[0]) throw "findAndReplaceDOMText cannot handle zero-length matches";
                        if (f > 0) {
                            var c = a[f];
                            a.index += a[0].indexOf(c), a[0] = c
                        }
                        return a.endIndex = a.index + a[0].length, a.startIndex = a.index, a.index = b, a
                    },
                    filterElements: g
                });
                return b.revert = function() { return i.revert() }, !0
            }

            function d(a, b) { return new e(a, b) }

            function e(a, c) {
                var d = c.preset && b.PRESETS[c.preset];
                if (c.portionMode = c.portionMode || f, d)
                    for (var e in d) i.call(d, e) && !i.call(c, e) && (c[e] = d[e]);
                this.node = a, this.options = c, this.prepMatch = c.prepMatch || this.prepMatch, this.reverts = [], this.matches = this.search(), this.matches.length && this.processMatches()
            }
            var f = "retain",
                g = "first",
                h = J,
                i = ({}.toString, {}.hasOwnProperty);
            return b.NON_PROSE_ELEMENTS = { br: 1, hr: 1, script: 1, style: 1, img: 1, video: 1, audio: 1, canvas: 1, svg: 1, map: 1, object: 1, input: 1, textarea: 1, select: 1, option: 1, optgroup: 1, button: 1 }, b.NON_CONTIGUOUS_PROSE_ELEMENTS = { address: 1, article: 1, aside: 1, blockquote: 1, dd: 1, div: 1, dl: 1, fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, h1: 1, h2: 1, h3: 1, h4: 1, h5: 1, h6: 1, header: 1, hgroup: 1, hr: 1, main: 1, nav: 1, noscript: 1, ol: 1, output: 1, p: 1, pre: 1, section: 1, ul: 1, br: 1, li: 1, summary: 1, dt: 1, details: 1, rp: 1, rt: 1, rtc: 1, script: 1, style: 1, img: 1, video: 1, audio: 1, canvas: 1, svg: 1, map: 1, object: 1, input: 1, textarea: 1, select: 1, option: 1, optgroup: 1, button: 1, table: 1, tbody: 1, thead: 1, th: 1, tr: 1, td: 1, caption: 1, col: 1, tfoot: 1, colgroup: 1 }, b.NON_INLINE_PROSE = function(a) { return i.call(b.NON_CONTIGUOUS_PROSE_ELEMENTS, a.nodeName.toLowerCase()) }, b.PRESETS = { prose: { forceContext: b.NON_INLINE_PROSE, filterElements: function(a) { return !i.call(b.NON_PROSE_ELEMENTS, a.nodeName.toLowerCase()) } } }, b.Finder = e, e.prototype = {
                search: function() {
                    function b(a) {
                        for (var g = 0, j = a.length; j > g; ++g) {
                            var k = a[g];
                            if ("string" == typeof k) {
                                if (f.global)
                                    for (; c = f.exec(k);) h.push(i.prepMatch(c, d++, e));
                                else(c = k.match(f)) && h.push(i.prepMatch(c, 0, e));
                                e += k.length
                            } else b(k)
                        }
                    }
                    var c, d = 0,
                        e = 0,
                        f = this.options.find,
                        g = this.getAggregateText(),
                        h = [],
                        i = this;
                    return f = "string" == typeof f ? RegExp(a(f), "g") : f, b(g), h
                },
                prepMatch: function(a, b, c) { if (!a[0]) throw new Error("findAndReplaceDOMText cannot handle zero-length matches"); return a.endIndex = c + a.index + a[0].length, a.startIndex = c + a.index, a.index = b, a },
                getAggregateText: function() {
                    function a(d, e) {
                        if (3 === d.nodeType) return [d.data];
                        if (b && !b(d)) return [];
                        var e = [""],
                            f = 0;
                        if (d = d.firstChild)
                            do
                                if (3 !== d.nodeType) {
                                    var g = a(d);
                                    c && 1 === d.nodeType && (c === !0 || c(d)) ? (e[++f] = g, e[++f] = "") : ("string" == typeof g[0] && (e[f] += g.shift()), g.length && (e[++f] = g, e[++f] = ""))
                                } else e[f] += d.data;
                        while (d = d.nextSibling);
                        return e
                    }
                    var b = this.options.filterElements,
                        c = this.options.forceContext;
                    return a(this.node)
                },
                processMatches: function() {
                    var a, b, c, d = this.matches,
                        e = this.node,
                        f = this.options.filterElements,
                        g = [],
                        h = e,
                        i = d.shift(),
                        j = 0,
                        k = 0,
                        l = 0,
                        m = [e];
                    a: for (;;) { if (3 === h.nodeType && (!b && h.length + j >= i.endIndex ? b = { node: h, index: l++, text: h.data.substring(i.startIndex - j, i.endIndex - j), indexInMatch: j - i.startIndex, indexInNode: i.startIndex - j, endIndexInNode: i.endIndex - j, isEnd: !0 } : a && g.push({ node: h, index: l++, text: h.data, indexInMatch: j - i.startIndex, indexInNode: 0 }), !a && h.length + j > i.startIndex && (a = { node: h, index: l++, indexInMatch: 0, indexInNode: i.startIndex - j, endIndexInNode: i.endIndex - j, text: h.data.substring(i.startIndex - j, i.endIndex - j) }), j += h.data.length), c = 1 === h.nodeType && f && !f(h), a && b) { if (h = this.replaceMatch(i, a, g, b), j -= b.node.data.length - b.endIndexInNode, a = null, b = null, g = [], i = d.shift(), l = 0, k++, !i) break } else if (!c && (h.firstChild || h.nextSibling)) { h.firstChild ? (m.push(h), h = h.firstChild) : h = h.nextSibling; continue } for (;;) { if (h.nextSibling) { h = h.nextSibling; break } if (h = m.pop(), h === e) break a } }
                },
                revert: function() {
                    for (var a = this.reverts.length; a--;) this.reverts[a]();
                    this.reverts = []
                },
                prepareReplacementString: function(a, b, c, d) {
                    var e = this.options.portionMode;
                    return e === g && b.indexInMatch > 0 ? "" : (a = a.replace(/\$(\d+|&|`|')/g, function(a, b) {
                        var d;
                        switch (b) {
                            case "&":
                                d = c[0];
                                break;
                            case "`":
                                d = c.input.substring(0, c.startIndex);
                                break;
                            case "'":
                                d = c.input.substring(c.endIndex);
                                break;
                            default:
                                d = c[+b]
                        }
                        return d
                    }), e === g ? a : b.isEnd ? a.substring(b.indexInMatch) : a.substring(b.indexInMatch, b.indexInMatch + b.text.length))
                },
                getPortionReplacementNode: function(a, b, c) {
                    var d = this.options.replace || "$&",
                        e = this.options.wrap;
                    if (e && e.nodeType) {
                        var f = h.createElement("div");
                        f.innerHTML = e.outerHTML || (new XMLSerializer).serializeToString(e), e = f.firstChild
                    }
                    if ("function" == typeof d) return d = d(a, b, c), d && d.nodeType ? d : h.createTextNode(String(d));
                    var g = "string" == typeof e ? h.createElement(e) : e;
                    return d = h.createTextNode(this.prepareReplacementString(d, a, b, c)), d.data && g ? (g.appendChild(d), g) : d
                },
                replaceMatch: function(a, b, c, d) {
                    var e, f, g = b.node,
                        i = d.node;
                    if (g === i) {
                        var j = g;
                        b.indexInNode > 0 && (e = h.createTextNode(j.data.substring(0, b.indexInNode)), j.parentNode.insertBefore(e, j));
                        var k = this.getPortionReplacementNode(d, a);
                        return j.parentNode.insertBefore(k, j), d.endIndexInNode < j.length && (f = h.createTextNode(j.data.substring(d.endIndexInNode)), j.parentNode.insertBefore(f, j)), j.parentNode.removeChild(j), this.reverts.push(function() { e === k.previousSibling && e.parentNode.removeChild(e), f === k.nextSibling && f.parentNode.removeChild(f), k.parentNode.replaceChild(j, k) }), k
                    }
                    e = h.createTextNode(g.data.substring(0, b.indexInNode)), f = h.createTextNode(i.data.substring(d.endIndexInNode));
                    for (var l = this.getPortionReplacementNode(b, a), m = [], n = 0, o = c.length; o > n; ++n) {
                        var p = c[n],
                            q = this.getPortionReplacementNode(p, a);
                        p.node.parentNode.replaceChild(q, p.node), this.reverts.push(function(a, b) { return function() { b.parentNode.replaceChild(a.node, b) } }(p, q)), m.push(q)
                    }
                    var r = this.getPortionReplacementNode(d, a);
                    return g.parentNode.insertBefore(e, g), g.parentNode.insertBefore(l, g), g.parentNode.removeChild(g), i.parentNode.insertBefore(r, i), i.parentNode.insertBefore(f, i), i.parentNode.removeChild(i), this.reverts.push(function() { e.parentNode.removeChild(e), l.parentNode.replaceChild(g, l), f.parentNode.removeChild(f), r.parentNode.replaceChild(i, r) }), r
                }
            }, b
        }()),
        U = function() { var a = S.create("div"); return a.appendChild(S.create("", "0-")), a.appendChild(S.create("", "2")), a.normalize(), 2 !== a.firstChild.length }();
    S.extend(T.fn, { normalize: function() { return U && this.context.normalize(), this }, jinzify: function(a) { return this.filter(a || null).avoid("h-jinze").replace(R.jinze.touwei, function(a, b) { var c = S.create("h-jinze", "touwei"); return c.innerHTML = b[0], 0 === a.index && a.isEnd || 1 === a.index ? c : "" }).replace(R.jinze.wei, function(a, b) { var c = S.create("h-jinze", "wei"); return c.innerHTML = b[0], 0 === a.index ? c : "" }).replace(R.jinze.tou, function(a, b) { var c = S.create("h-jinze", "tou"); return c.innerHTML = b[0], 0 === a.index && a.isEnd || 1 === a.index ? c : "" }).replace(R.jinze.middle, function(a, b) { var c = S.create("h-jinze", "middle"); return c.innerHTML = b[0], 0 === a.index && a.isEnd || 1 === a.index ? c : "" }).endAvoid().endFilter() }, groupify: function(a) { var a = S.extend({ biaodian: !1, hanzi: !1, kana: !1, eonmun: !1, western: !1 }, a || {}); return this.avoid("h-word, h-char-group"), a.biaodian && this.replace(R.group.biaodian[0], d).replace(R.group.biaodian[1], d), (a.hanzi || a.cjk) && this.wrap(R.group.hanzi, S.clone(S.create("h-char-group", "hanzi cjk"))), a.western && this.wrap(R.group.western, S.clone(S.create("h-word", "western"))), a.kana && this.wrap(R.group.kana, S.clone(S.create("h-char-group", "kana"))), (a.eonmun || a.hangul) && this.wrap(R.group.eonmun, S.clone(S.create("h-word", "eonmun hangul"))), this.endAvoid(), this }, charify: function(a) { var a = S.extend({ avoid: !0, biaodian: !1, punct: !1, hanzi: !1, latin: !1, ellinika: !1, kirillica: !1, kana: !1, eonmun: !1 }, a || {}); return a.avoid && this.avoid("h-char"), a.biaodian && this.replace(R["char"].biaodian.all, c(a.biaodian) || function(a) { return e(a.text) }).replace(R["char"].biaodian.liga, c(a.biaodian) || function(a) { return e(a.text) }), (a.hanzi || a.cjk) && this.wrap(R["char"].hanzi, c(a.hanzi || a.cjk) || S.clone(S.create("h-char", "hanzi cjk"))), a.punct && this.wrap(R["char"].punct.all, c(a.punct) || S.clone(S.create("h-char", "punct"))), a.latin && this.wrap(R["char"].latin, c(a.latin) || S.clone(S.create("h-char", "alphabet latin"))), (a.ellinika || a.greek) && this.wrap(R["char"].ellinika, c(a.ellinika || a.greek) || S.clone(S.create("h-char", "alphabet ellinika greek"))), (a.kirillica || a.cyrillic) && this.wrap(R["char"].kirillica, c(a.kirillica || a.cyrillic) || S.clone(S.create("h-char", "alphabet kirillica cyrillic"))), a.kana && this.wrap(R["char"].kana, c(a.kana) || S.clone(S.create("h-char", "kana"))), (a.eonmun || a.hangul) && this.wrap(R["char"].eonmun, c(a.eonmun || a.hangul) || S.clone(S.create("h-char", "eonmun hangul"))), this.endAvoid(), this } }), S.extend(O, { isNodeNormalizeNormal: U, find: T, createBDGroup: d, createBDChar: e }), S.matches = O.find.matches, void["setMode", "wrap", "replace", "revert", "addBoundary", "removeBoundary", "avoid", "endAvoid", "filter", "endFilter", "jinzify", "groupify", "charify"].forEach(function(a) { O.fn[a] = function() { return this.finder || (this.finder = O.find(this.context)), this.finder[a](arguments[0], arguments[1]), this } });
    var V = {};
    V.writeOnCanvas = g, V.compareCanvases = h, V.detectFont = i, V.support = function() {
        function b(a) {
            var b, c = a.charAt(0).toUpperCase() + a.slice(1),
                d = (a + " " + e.join(c + " ") + c).split(" ");
            return d.forEach(function(a) { "string" == typeof f.style[a] && (b = !0) }), b || !1
        }

        function c(a, b) {
            var c, d, e, f = L || S.create("body"),
                g = S.create("div"),
                h = L ? g : f,
                b = "function" == typeof b ? b : function() {};
            return c = ["<style>", a, "</style>"].join(""), h.innerHTML += c, f.appendChild(g), L || (f.style.background = "", f.style.overflow = "hidden", e = K.style.overflow, K.style.overflow = "hidden", K.appendChild(f)), d = b(h, a), S.remove(h), L || (K.style.overflow = e), !!d
        }

        function d(b, c) { var d; return a.getComputedStyle ? d = J.defaultView.getComputedStyle(b, null).getPropertyValue(c) : b.currentStyle && (d = b.currentStyle[c]), d }
        var e = "Webkit Moz ms".split(" "),
            f = S.create("h-test");
        return {
            columnwidth: b("columnWidth"),
            fontface: function() {
                var a;
                return c('@font-face { font-family: font; src: url("//"); }', function(b, c) {
                    var d = S.qsa("style", b)[0],
                        e = d.sheet || d.styleSheet,
                        f = e ? e.cssRules && e.cssRules[0] ? e.cssRules[0].cssText : e.cssText || "" : "";
                    a = /src/i.test(f) && 0 === f.indexOf(c.split(" ")[0])
                }), a
            }(),
            ruby: function() {
                var a, b = S.create("ruby"),
                    c = S.create("rt"),
                    e = S.create("rp");
                return b.appendChild(e), b.appendChild(c), K.appendChild(b), a = "none" === d(e, "display") || "ruby" === d(b, "display") && "ruby-text" === d(c, "display") ? !0 : !1, K.removeChild(b), b = null, c = null, e = null, a
            }(),
            "ruby-display": function() { var a = S.create("div"); return a.innerHTML = '<h-test-a style="display: ruby;"></h-test-a><h-test-b style="display: ruby-text-container;"></h-test-b>', "ruby" === a.querySelector("h-test-a").style.display && "ruby-text-container" === a.querySelector("h-test-b").style.display }(),
            "ruby-interchar": function() {
                var a, b = "inter-character",
                    c = S.create("div");
                return c.innerHTML = '<h-test style="-moz-ruby-position:' + b + ";-ms-ruby-position:" + b + ";-webkit-ruby-position:" + b + ";ruby-position:" + b + ';"></h-test>', a = c.querySelector("h-test").style, a.rubyPosition === b || a.WebkitRubyPosition === b || a.MozRubyPosition === b || a.msRubyPosition === b
            }(),
            textemphasis: b("textEmphasis"),
            unicoderange: function() { var a; return c('@font-face{font-family:test-for-unicode-range;src:local(Arial),local("Droid Sans")}@font-face{font-family:test-for-unicode-range;src:local("Times New Roman"),local(Times),local("Droid Serif");unicode-range:U+270C}', function() { a = !V.detectFont("test-for-unicode-range", 'Arial, "Droid Sans"', "Q") }), a }(),
            writingmode: b("writingMode")
        }
    }(), V.initCond = function(a) {
        var b, a = a || K,
            c = "";
        for (var d in V.support) b = (V.support[d] ? "" : "no-") + d, a.classList.add(b), c += b + " ";
        return c
    };
    var W = V.support["ruby-interchar"];
    S.extend(V, {
        renderRuby: function(a, b) {
            var b = b || "ruby",
                c = S.qsa(b, a);
            S.qsa("rtc", a).concat(c).map(n), c.forEach(function(a) {
                var b, c = a.classList;
                c.contains("complex") ? b = l(a) : c.contains("zhuyin") && (b = W ? k(a) : j(a)), b && a.parentNode.replaceChild(b, a)
            })
        },
        simplifyRubyClass: n,
        getZhuyinHTML: q,
        renderComplexRuby: l,
        renderSimpleRuby: j,
        renderInterCharRuby: k
    }), S.extend(V, {
        renderElem: function(a) { this.renderRuby(a), this.renderDecoLine(a), this.renderDecoLine(a, "s, del"), this.renderEm(a) },
        renderDecoLine: function(a, b) {
            var c = S.qsa(b || "u, ins", a),
                d = c.length;
            a: for (; d--;) {
                var e = c[d],
                    f = null;
                do {
                    if (f = (f || e).previousSibling, !f) continue a;
                    c[d - 1] === f && e.classList.add("adjacent")
                } while (S.isIgnorable(f))
            }
        },
        renderEm: function(a, b) {
            var c = b ? "qsa" : "tag",
                b = b || "em",
                d = S[c](b, a);
            d.forEach(function(a) {
                var b = O(a);
                V.support.textemphasis ? b.avoid("rt, h-char").charify({ biaodian: !0, punct: !0 }) : b.avoid("rt, h-char, h-char-group").jinzify().groupify({ western: !0 }).charify({ hanzi: !0, biaodian: !0, punct: !0, latin: !0, ellinika: !0, kirillica: !0 })
            })
        }
    }), O.normalize = V, O.localize = V, O.support = V.support, O.detectFont = V.detectFont, O.fn.initCond = function() { return this.condition.classList.add("han-js-rendered"), O.normalize.initCond(this.condition), this }, void["Elem", "DecoLine", "Em", "Ruby"].forEach(function(a) {
        var b = "render" + a;
        O.fn[b] = function(a) { return O.normalize[b](this.context, a), this }
    }), S.extend(O.support, { heiti: !0, songti: O.detectFont('"Han Songti"'), "songti-gb": O.detectFont('"Han Songti GB"'), kaiti: O.detectFont('"Han Kaiti"'), fangsong: O.detectFont('"Han Fangsong"') }), O.correctBiaodian = function(a) {
        var a = a || J,
            b = O.find(a);
        return b.avoid("h-char").replace(/([\u2018\u201c])/g, function(a) { var b = O.createBDChar(a.text); return b.classList.add("bd-open", "punct"), b }).replace(/([\u2019\u201d])/g, function(a) { var b = O.createBDChar(a.text); return b.classList.add("bd-close", "bd-end", "punct"), b }), O.support.unicoderange ? b : b.charify({ biaodian: !0 })
    }, O.correctBasicBD = O.correctBiaodian, O.correctBD = O.correctBiaodian, S.extend(O.fn, { biaodian: null, correctBiaodian: function() { return this.biaodian = O.correctBiaodian(this.context), this }, revertCorrectedBiaodian: function() { try { this.biaodian.revert("all") } catch (a) {} return this } }), O.fn.correctBasicBD = O.fn.correctBiaodian, O.fn.revertBasicBD = O.fn.revertCorrectedBiaodian;
    var X = "<<hws>>",
        Y = S.create("h-hws");
    Y.setAttribute("hidden", ""), Y.innerHTML = " "; //这里在中文和西文之间插入间距，Y.innerHTML = " "的引号里面放的是四分空
    var Z;
    S.extend(O, {
        renderHWS: function(a, b) {
            var c = b ? "textarea, code, kbd, samp, pre" : "textarea",
                d = b ? "strict" : "base",
                a = a || J,
                e = O.find(a);
            return e.avoid(c).replace(O.TYPESET.hws[d][0], t).replace(O.TYPESET.hws[d][1], t).replace(new RegExp("(" + X + ")+", "g"), u).replace(/([\'"])\s(.+?)\s\1/g, v).replace(/\s[\u2018\u201c]/g, w).replace(/[\u2019\u201d]\s/g, w).normalize(), e
        }
    }), S.extend(O.fn, { renderHWS: function(a) { return O.renderHWS(this.context, a), this }, revertHWS: function() { return S.tag("h-hws", this.context).forEach(function(a) { S.remove(a) }), this.HWS = [], this } });
    var $ = "bd-hangable",
        _ = "h-char.bd-hangable",
        aa = '<h-cs hidden class="jinze-outer hangable-outer"> </h-cs>',
        ba = O.find.matches;
    O.support["han-space"] = x(), S.extend(O, {
        detectSpaceFont: x,
        isSpaceFontLoaded: x(),
        renderHanging: function(a) {
            var a = a || J,
                b = O.find(a);
            return b.avoid("textarea, code, kbd, samp, pre").avoid(_).replace(R.jinze.hanging, function(a) { if (/^[\x20\t\r\n\f]+$/.test(a.text)) return ""; var b, c, d, e, f = a.node.parentNode; return (b = S.parent(f, "h-jinze")) && y(b), e = a.text.trim(), c = O.createBDChar(e), c.innerHTML = "<h-inner>" + e + "</h-inner>", c.classList.add($), d = S.parent(f, "h-char.biaodian"), d ? function() { return d.classList.add($), ba(f, "h-inner, h-inner *") ? e : c.firstChild }() : c }), b
        }
    }), S.extend(O.fn, {
        renderHanging: function() { var a = this.condition.classList; return O.isSpaceFontLoaded = x(), O.isSpaceFontLoaded && a.contains("no-han-space") && (a.remove("no-han-space"), a.add("han-space")), O.renderHanging(this.context), this },
        revertHanging: function() {
            return S.qsa("h-char.bd-hangable, h-cs.hangable-outer", this.context).forEach(function(a) {
                var b = a.classList;
                b.remove("bd-hangable"), b.remove("hangable-outer")
            }), this
        }
    });
    var ca, da, ea = "bd-jiya",
        fa = "h-char.bd-jiya",
        ga = "bd-consecutive",
        ha = '<h-cs hidden class="jinze-outer jiya-outer"> </h-cs>',
        ba = O.find.matches;
    O.renderJiya = function(a) {
        var a = a || J,
            b = O.find(a);
        return b.avoid("textarea, code, kbd, samp, pre, h-cs").avoid(fa).charify({ avoid: !1, biaodian: A }).endAvoid().avoid("textarea, code, kbd, samp, pre, h-cs").replace(R.group.biaodian[0], B).replace(R.group.biaodian[1], B), b
    }, S.extend(O.fn, {
        renderJiya: function() { return O.renderJiya(this.context), this },
        revertJiya: function() {
            return S.qsa("h-char.bd-jiya, h-cs.jiya-outer", this.context).forEach(function(a) {
                var b = a.classList;
                b.remove("bd-jiya"), b.remove("jiya-outer")
            }), this
        }
    });
    var ia = "textarea, code, kbd, samp, pre",
        ja = S.create("h-char", "comb-liga");
    return S.extend(O, {
        isVowelCombLigaNormal: F(),
        isVowelICombLigaNormal: G(),
        isZhuyinCombLigaNormal: H(),
        isCombLigaNormal: G()(),
        substVowelCombLiga: I(O.TYPESET["display-as"]["comb-liga-vowel"]),
        substZhuyinCombLiga: I(O.TYPESET["display-as"]["comb-liga-zhuyin"]),
        substCombLigaWithPUA: I(O.TYPESET["display-as"]["comb-liga-pua"]),
        substInaccurateChar: function(a) {
            var a = a || J,
                b = O.find(a);
            b.avoid(ia), O.TYPESET["inaccurate-char"].forEach(function(a) { b.replace(new RegExp(a[0], "ig"), a[1]) })
        }
    }), S.extend(O.fn, { "comb-liga-vowel": null, "comb-liga-vowel-i": null, "comb-liga-zhuyin": null, "inaccurate-char": null, substVowelCombLiga: function() { return this["comb-liga-vowel"] = O.substVowelCombLiga(this.context), this }, substVowelICombLiga: function() { return this["comb-liga-vowel-i"] = O.substVowelICombLiga(this.context), this }, substZhuyinCombLiga: function() { return this["comb-liga-zhuyin"] = O.substZhuyinCombLiga(this.context), this }, substCombLigaWithPUA: function() { return O.isVowelCombLigaNormal() ? O.isVowelICombLigaNormal() || (this["comb-liga-vowel-i"] = O.substVowelICombLiga(this.context)) : this["comb-liga-vowel"] = O.substVowelCombLiga(this.context), O.isZhuyinCombLigaNormal() || (this["comb-liga-zhuyin"] = O.substZhuyinCombLiga(this.context)), this }, revertVowelCombLiga: function() { try { this["comb-liga-vowel"].revert("all") } catch (a) {} return this }, revertVowelICombLiga: function() { try { this["comb-liga-vowel-i"].revert("all") } catch (a) {} return this }, revertZhuyinCombLiga: function() { try { this["comb-liga-zhuyin"].revert("all") } catch (a) {} return this }, revertCombLigaWithPUA: function() { try { this["comb-liga-vowel"].revert("all"), this["comb-liga-vowel-i"].revert("all"), this["comb-liga-zhuyin"].revert("all") } catch (a) {} return this }, substInaccurateChar: function() { return this["inaccurate-char"] = O.substInaccurateChar(this.context), this }, revertInaccurateChar: function() { try { this["inaccurate-char"].revert("all") } catch (a) {} return this } }), a.addEventListener("DOMContentLoaded", function() {
        var a;
        K.classList.contains("han-init") ? O.init() : (a = J.querySelector(".han-init-context")) && (O.init = O(a).render())
    }), ("undefined" == typeof b || b === !1) && (a.Han = O), O
});