"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [173],
  {
    6590: function (e, t, r) {
      r.d(t, {
        Lj: function () {
          return n;
        },
        y7: function () {
          return i;
        },
      });
      var n = {
        ease: [0.36, 0.66, 0.4, 1],
        easeIn: [0.4, 0, 1, 1],
        easeOut: [0, 0, 0.2, 1],
        easeInOut: [0.4, 0, 0.2, 1],
        spring: [0.155, 1.105, 0.295, 1.12],
        springOut: [0.57, -0.15, 0.62, 0.07],
        softSpring: [0.16, 1.11, 0.3, 1.02],
      };
      n.easeOut, n.easeIn;
      var i = {
        scaleSpring: {
          enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: { type: "spring", bounce: 0, duration: 0.3 },
          },
          exit: {
            transform: "scale(0.6)",
            opacity: 0,
            transition: { type: "easeOut", duration: 0.2 },
          },
        },
        scaleSpringOpacity: {
          initial: { opacity: 0, transform: "scale(0.6)" },
          enter: {
            opacity: 1,
            transform: "scale(1)",
            transition: { type: "spring", bounce: 0, duration: 0.3 },
          },
          exit: {
            opacity: 0,
            transform: "scale(0.3)",
            transition: { type: "spring", bounce: 0, duration: 0.4 },
          },
        },
        scale: { enter: { scale: 1 }, exit: { scale: 0.95 } },
        scaleFadeIn: {
          enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: { duration: 0.25, ease: n.easeIn },
          },
          exit: {
            transform: "scale(0.95)",
            opacity: 0,
            transition: { duration: 0.2, ease: n.easeOut },
          },
        },
        scaleInOut: {
          enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: { duration: 0.4, ease: n.ease },
          },
          exit: {
            transform: "scale(1.03)",
            opacity: 0,
            transition: { duration: 0.3, ease: n.ease },
          },
        },
        fade: {
          enter: { opacity: 1, transition: { duration: 0.4, ease: n.ease } },
          exit: { opacity: 0, transition: { duration: 0.3, ease: n.ease } },
        },
        collapse: {
          enter: {
            opacity: 1,
            height: "auto",
            transition: {
              height: { type: "spring", bounce: 0, duration: 0.3 },
              opacity: { easings: "ease", duration: 0.4 },
            },
          },
          exit: {
            opacity: 0,
            height: 0,
            transition: { easings: "ease", duration: 0.3 },
          },
        },
      };
    },
    1744: function (e, t, r) {
      r.d(t, {
        fg: function () {
          return i;
        },
        gy: function () {
          return o;
        },
      });
      var n = r(7294);
      function i(e) {
        return { UNSAFE_getDOMNode: () => e.current };
      }
      function o(e) {
        let t = (0, n.useRef)(null);
        return (0, n.useImperativeHandle)(e, () => t.current), t;
      }
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
    },
    9869: function (e, t, r) {
      function n(...e) {
        for (var t, r, n = 0, i = ""; n < e.length; )
          (t = e[n++]) &&
            (r = (function e(t) {
              var r,
                n,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t)
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (i && (i += " "), (i += n));
                else for (r in t) t[r] && (i && (i += " "), (i += r));
              return i;
            })(t)) &&
            (i && (i += " "), (i += r));
        return i;
      }
      r.d(t, {
        W: function () {
          return n;
        },
      });
    },
    262: function (e, t, r) {
      function n(e) {
        return "function" == typeof e;
      }
      r.d(t, {
        PB: function () {
          return i;
        },
        mf: function () {
          return n;
        },
      });
      var i = (e) => (e ? "true" : void 0);
    },
    2134: function (e, t, r) {
      r.d(t, {
        Gp: function () {
          return i;
        },
        oe: function () {
          return o;
        },
      });
      var n = r(7294);
      function i(e) {
        return (0, n.forwardRef)(e);
      }
      var o = (e, t, r = !0) => {
        if (!t) return [e, {}];
        let n = t.reduce((t, r) => (r in e ? { ...t, [r]: e[r] } : t), {});
        if (!r) return [e, n];
        return [
          Object.keys(e)
            .filter((e) => !t.includes(e))
            .reduce((t, r) => ({ ...t, [r]: e[r] }), {}),
          n,
        ];
      };
    },
    3649: function (e, t, r) {
      r.d(t, {
        J: function () {
          return n;
        },
      });
      var n = {
        solid: {
          default: "bg-default text-default-foreground",
          primary: "bg-primary text-primary-foreground",
          secondary: "bg-secondary text-secondary-foreground",
          success: "bg-success text-success-foreground",
          warning: "bg-warning text-warning-foreground",
          danger: "bg-danger text-danger-foreground",
          foreground: "bg-foreground text-background",
        },
        shadow: {
          default:
            "shadow-lg shadow-default/50 bg-default text-default-foreground",
          primary:
            "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
          secondary:
            "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
          success:
            "shadow-lg shadow-success/40 bg-success text-success-foreground",
          warning:
            "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
          danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
          foreground:
            "shadow-lg shadow-foreground/40 bg-foreground text-background",
        },
        bordered: {
          default: "bg-transparent border-default text-foreground",
          primary: "bg-transparent border-primary text-primary",
          secondary: "bg-transparent border-secondary text-secondary",
          success: "bg-transparent border-success text-success",
          warning: "bg-transparent border-warning text-warning",
          danger: "bg-transparent border-danger text-danger",
          foreground: "bg-transparent border-foreground text-foreground",
        },
        flat: {
          default: "bg-default/40 text-default-foreground",
          primary: "bg-primary/20 text-primary",
          secondary: "bg-secondary/20 text-secondary",
          success: "bg-success/20 text-success-600 dark:text-success",
          warning: "bg-warning/20 text-warning-600 dark:text-warning",
          danger: "bg-danger/20 text-danger dark:text-danger-500",
          foreground: "bg-foreground/10 text-foreground",
        },
        faded: {
          default: "border-default bg-default-100 text-default-foreground",
          primary: "border-default bg-default-100 text-primary",
          secondary: "border-default bg-default-100 text-secondary",
          success: "border-default bg-default-100 text-success",
          warning: "border-default bg-default-100 text-warning",
          danger: "border-default bg-default-100 text-danger",
          foreground: "border-default bg-default-100 text-foreground",
        },
        light: {
          default: "bg-transparent text-default-foreground",
          primary: "bg-transparent text-primary",
          secondary: "bg-transparent text-secondary",
          success: "bg-transparent text-success",
          warning: "bg-transparent text-warning",
          danger: "bg-transparent text-danger",
          foreground: "bg-transparent text-foreground",
        },
        ghost: {
          default: "border-default text-default-foreground hover:!bg-default",
          primary:
            "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
          secondary:
            "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
          success:
            "border-success text-success hover:!text-success-foreground hover:!bg-success",
          warning:
            "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
          danger:
            "border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
          foreground: "border-foreground text-foreground hover:!bg-foreground",
        },
      };
    },
    8399: function (e, t, r) {
      r.d(t, {
        tv: function () {
          return ee;
        },
      });
      var n = [
          "0",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "6xl",
          "7xl",
          "8xl",
          "9xl",
          "1",
          "2",
          "3",
          "3.5",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "20",
          "24",
          "28",
          "32",
          "36",
          "40",
          "44",
          "48",
          "52",
          "56",
          "60",
          "64",
          "72",
          "80",
          "96",
        ].map((e) => `unit-${e}`),
        i = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        o = (e) => !e || "object" != typeof e || 0 === Object.keys(e).length;
      function s(e) {
        let t = [];
        return (
          (function e(t, r) {
            t.forEach(function (t) {
              Array.isArray(t) ? e(t, r) : r.push(t);
            });
          })(e, t),
          t
        );
      }
      var a = (e, t) => {
          let r = {},
            n = Object.keys(e),
            i = Object.keys(t);
          for (let o of n)
            if (i.includes(o)) {
              let n = e[o],
                i = t[o];
              r[o] =
                "object" == typeof n && "object" == typeof i
                  ? a(n, i)
                  : i + " " + n;
            } else r[o] = e[o];
          for (let e of i) n.includes(e) || (r[e] = t[e]);
          return r;
        },
        l = (e) =>
          e && "string" == typeof e ? e.replace(/\s+/g, " ").trim() : e,
        u = /^\[(.+)\]$/;
      function c(e, t) {
        var r = e;
        return (
          t.split("-").forEach(function (e) {
            r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      var d = /\s+/;
      function p() {
        for (var e, t, r = 0, n = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              if ("string" == typeof t) return t;
              for (var r, n = "", i = 0; i < t.length; i++)
                t[i] && (r = e(t[i])) && (n && (n += " "), (n += r));
              return n;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      function h() {
        for (var e, t, r, n = arguments.length, i = Array(n), o = 0; o < n; o++)
          i[o] = arguments[o];
        var s = function (n) {
          var o = i[0];
          return (
            (t = (e = (function (e) {
              var t, r, n, i, o, s, a, l, d, p, h;
              return {
                cache: (function (e) {
                  if (e < 1)
                    return { get: function () {}, set: function () {} };
                  var t = 0,
                    r = new Map(),
                    n = new Map();
                  function i(i, o) {
                    r.set(i, o), ++t > e && ((t = 0), (n = r), (r = new Map()));
                  }
                  return {
                    get: function (e) {
                      var t = r.get(e);
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = n.get(e))
                        ? (i(e, t), t)
                        : void 0;
                    },
                    set: function (e, t) {
                      r.has(e) ? r.set(e, t) : i(e, t);
                    },
                  };
                })(e.cacheSize),
                splitModifiers:
                  ((r = 1 === (t = e.separator || ":").length),
                  (n = t[0]),
                  (i = t.length),
                  function (e) {
                    for (
                      var o, s = [], a = 0, l = 0, u = 0;
                      u < e.length;
                      u++
                    ) {
                      var c = e[u];
                      if (0 === a) {
                        if (c === n && (r || e.slice(u, u + i) === t)) {
                          s.push(e.slice(l, u)), (l = u + i);
                          continue;
                        }
                        if ("/" === c) {
                          o = u;
                          continue;
                        }
                      }
                      "[" === c ? a++ : "]" === c && a--;
                    }
                    var d = 0 === s.length ? e : e.substring(l),
                      p = d.startsWith("!");
                    return {
                      modifiers: s,
                      hasImportantModifier: p,
                      baseClassName: p ? d.substring(1) : d,
                      maybePostfixModifierPosition: o && o > l ? o - l : void 0,
                    };
                  }),
                ...((l = e.theme),
                (d = e.prefix),
                (p = { nextPart: new Map(), validators: [] }),
                ((h = Object.entries(e.classGroups)),
                d
                  ? h.map(function (e) {
                      return [
                        e[0],
                        e[1].map(function (e) {
                          return "string" == typeof e
                            ? d + e
                            : "object" == typeof e
                            ? Object.fromEntries(
                                Object.entries(e).map(function (e) {
                                  return [d + e[0], e[1]];
                                })
                              )
                            : e;
                        }),
                      ];
                    })
                  : h).forEach(function (e) {
                  var t = e[0];
                  !(function e(t, r, n, i) {
                    t.forEach(function (t) {
                      if ("string" != typeof t)
                        return "function" == typeof t
                          ? t.isThemeGetter
                            ? void e(t(i), r, n, i)
                            : void r.validators.push({
                                validator: t,
                                classGroupId: n,
                              })
                          : void Object.entries(t).forEach(function (t) {
                              var o = t[0];
                              e(t[1], c(r, o), n, i);
                            });
                      ("" === t ? r : c(r, t)).classGroupId = n;
                    });
                  })(e[1], p, t, l);
                }),
                (o = e.conflictingClassGroups),
                (a =
                  void 0 === (s = e.conflictingClassGroupModifiers) ? {} : s),
                {
                  getClassGroupId: function (e) {
                    var t = e.split("-");
                    return (
                      "" === t[0] && 1 !== t.length && t.shift(),
                      (function e(t, r) {
                        if (0 === t.length) return r.classGroupId;
                        var n = t[0],
                          i = r.nextPart.get(n),
                          o = i ? e(t.slice(1), i) : void 0;
                        if (o) return o;
                        if (0 !== r.validators.length) {
                          var s = t.join("-");
                          return r.validators.find(function (e) {
                            return (0, e.validator)(s);
                          })?.classGroupId;
                        }
                      })(t, p) ||
                        (function (e) {
                          if (u.test(e)) {
                            var t = u.exec(e)[1],
                              r = t?.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    var r = o[e] || [];
                    return t && a[e] ? [].concat(r, a[e]) : r;
                  },
                }),
              };
            })(
              i.slice(1).reduce(function (e, t) {
                return t(e);
              }, o())
            )).cache.get),
            (r = e.cache.set),
            (s = a),
            a(n)
          );
        };
        function a(n) {
          var i,
            o,
            s,
            a,
            l,
            u = t(n);
          if (u) return u;
          var c =
            ((o = (i = e).splitModifiers),
            (s = i.getClassGroupId),
            (a = i.getConflictingClassGroupIds),
            (l = new Set()),
            n
              .trim()
              .split(d)
              .map(function (e) {
                var t = o(e),
                  r = t.modifiers,
                  n = t.hasImportantModifier,
                  i = t.baseClassName,
                  a = t.maybePostfixModifierPosition,
                  l = s(a ? i.substring(0, a) : i),
                  u = !!a;
                if (!l) {
                  if (!a || !(l = s(i)))
                    return { isTailwindClass: !1, originalClassName: e };
                  u = !1;
                }
                var c = (function (e) {
                  if (e.length <= 1) return e;
                  var t = [],
                    r = [];
                  return (
                    e.forEach(function (e) {
                      "[" === e[0]
                        ? (t.push.apply(t, r.sort().concat([e])), (r = []))
                        : r.push(e);
                    }),
                    t.push.apply(t, r.sort()),
                    t
                  );
                })(r).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: n ? c + "!" : c,
                  classGroupId: l,
                  originalClassName: e,
                  hasPostfixModifier: u,
                };
              })
              .reverse()
              .filter(function (e) {
                if (!e.isTailwindClass) return !0;
                var t = e.modifierId,
                  r = e.classGroupId,
                  n = e.hasPostfixModifier,
                  i = t + r;
                return (
                  !l.has(i) &&
                  (l.add(i),
                  a(r, n).forEach(function (e) {
                    return l.add(t + e);
                  }),
                  !0)
                );
              })
              .reverse()
              .map(function (e) {
                return e.originalClassName;
              })
              .join(" "));
          return r(n, c), c;
        }
        return function () {
          return s(p.apply(null, arguments));
        };
      }
      function f(e) {
        var t = function (t) {
          return t[e] || [];
        };
        return (t.isThemeGetter = !0), t;
      }
      var m = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        g = /^\d+\/\d+$/,
        v = new Set(["px", "full", "screen"]),
        y = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        b =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        x = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function w(e) {
        return k(e) || v.has(e) || g.test(e) || E(e);
      }
      function E(e) {
        return F(e, "length", O);
      }
      function P(e) {
        return F(e, "size", j);
      }
      function T(e) {
        return F(e, "position", j);
      }
      function S(e) {
        return F(e, "url", N);
      }
      function C(e) {
        return F(e, "number", k);
      }
      function k(e) {
        return !Number.isNaN(Number(e));
      }
      function M(e) {
        return e.endsWith("%") && k(e.slice(0, -1));
      }
      function A(e) {
        return I(e) || F(e, "number", I);
      }
      function L(e) {
        return m.test(e);
      }
      function R() {
        return !0;
      }
      function D(e) {
        return y.test(e);
      }
      function V(e) {
        return F(e, "", B);
      }
      function F(e, t, r) {
        var n = m.exec(e);
        return !!n && (n[1] ? n[1] === t : r(n[2]));
      }
      function O(e) {
        return b.test(e);
      }
      function j() {
        return !1;
      }
      function N(e) {
        return e.startsWith("url(");
      }
      function I(e) {
        return Number.isInteger(Number(e));
      }
      function B(e) {
        return x.test(e);
      }
      function W() {
        var e = f("colors"),
          t = f("spacing"),
          r = f("blur"),
          n = f("brightness"),
          i = f("borderColor"),
          o = f("borderRadius"),
          s = f("borderSpacing"),
          a = f("borderWidth"),
          l = f("contrast"),
          u = f("grayscale"),
          c = f("hueRotate"),
          d = f("invert"),
          p = f("gap"),
          h = f("gradientColorStops"),
          m = f("gradientColorStopPositions"),
          g = f("inset"),
          v = f("margin"),
          y = f("opacity"),
          b = f("padding"),
          x = f("saturate"),
          F = f("scale"),
          O = f("sepia"),
          j = f("skew"),
          N = f("space"),
          I = f("translate"),
          B = function () {
            return ["auto", L, t];
          },
          W = function () {
            return [L, t];
          },
          z = function () {
            return ["", w];
          },
          U = function () {
            return ["auto", k, L];
          },
          H = function () {
            return ["", "0", L];
          },
          $ = function () {
            return [k, C];
          },
          K = function () {
            return [k, L];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [R],
            spacing: [w],
            blur: ["none", "", D, L],
            brightness: $(),
            borderColor: [e],
            borderRadius: ["none", "", "full", D, L],
            borderSpacing: W(),
            borderWidth: z(),
            contrast: $(),
            grayscale: H(),
            hueRotate: K(),
            invert: H(),
            gap: W(),
            gradientColorStops: [e],
            gradientColorStopPositions: [M, E],
            inset: B(),
            margin: B(),
            opacity: $(),
            padding: W(),
            saturate: $(),
            scale: $(),
            sepia: H(),
            skew: K(),
            space: W(),
            translate: W(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", L] }],
            container: ["container"],
            columns: [{ columns: [D] }],
            "break-after": [
              {
                "break-after": [
                  "auto",
                  "avoid",
                  "all",
                  "avoid-page",
                  "page",
                  "left",
                  "right",
                  "column",
                ],
              },
            ],
            "break-before": [
              {
                "break-before": [
                  "auto",
                  "avoid",
                  "all",
                  "avoid-page",
                  "page",
                  "left",
                  "right",
                  "column",
                ],
              },
            ],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none"] }],
            clear: [{ clear: ["left", "right", "both", "none"] }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [
              {
                object: [].concat(
                  [
                    "bottom",
                    "center",
                    "left",
                    "left-bottom",
                    "left-top",
                    "right",
                    "right-bottom",
                    "right-top",
                    "top",
                  ],
                  [L]
                ),
              },
            ],
            overflow: [
              { overflow: ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            "overflow-x": [
              { "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            "overflow-y": [
              { "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"] },
            ],
            overscroll: [{ overscroll: ["auto", "contain", "none"] }],
            "overscroll-x": [{ "overscroll-x": ["auto", "contain", "none"] }],
            "overscroll-y": [{ "overscroll-y": ["auto", "contain", "none"] }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [g] }],
            "inset-x": [{ "inset-x": [g] }],
            "inset-y": [{ "inset-y": [g] }],
            start: [{ start: [g] }],
            end: [{ end: [g] }],
            top: [{ top: [g] }],
            right: [{ right: [g] }],
            bottom: [{ bottom: [g] }],
            left: [{ left: [g] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", A] }],
            basis: [{ basis: B() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", L] }],
            grow: [{ grow: H() }],
            shrink: [{ shrink: H() }],
            order: [{ order: ["first", "last", "none", A] }],
            "grid-cols": [{ "grid-cols": [R] }],
            "col-start-end": [{ col: ["auto", { span: ["full", A] }, L] }],
            "col-start": [{ "col-start": U() }],
            "col-end": [{ "col-end": U() }],
            "grid-rows": [{ "grid-rows": [R] }],
            "row-start-end": [{ row: ["auto", { span: [A] }, L] }],
            "row-start": [{ "row-start": U() }],
            "row-end": [{ "row-end": U() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", L] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", L] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [
              {
                justify: ["normal"].concat([
                  "start",
                  "end",
                  "center",
                  "between",
                  "around",
                  "evenly",
                  "stretch",
                ]),
              },
            ],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [
              {
                content: ["normal"].concat(
                  [
                    "start",
                    "end",
                    "center",
                    "between",
                    "around",
                    "evenly",
                    "stretch",
                  ],
                  ["baseline"]
                ),
              },
            ],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [
              {
                "place-content": [].concat(
                  [
                    "start",
                    "end",
                    "center",
                    "between",
                    "around",
                    "evenly",
                    "stretch",
                  ],
                  ["baseline"]
                ),
              },
            ],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [b] }],
            px: [{ px: [b] }],
            py: [{ py: [b] }],
            ps: [{ ps: [b] }],
            pe: [{ pe: [b] }],
            pt: [{ pt: [b] }],
            pr: [{ pr: [b] }],
            pb: [{ pb: [b] }],
            pl: [{ pl: [b] }],
            m: [{ m: [v] }],
            mx: [{ mx: [v] }],
            my: [{ my: [v] }],
            ms: [{ ms: [v] }],
            me: [{ me: [v] }],
            mt: [{ mt: [v] }],
            mr: [{ mr: [v] }],
            mb: [{ mb: [v] }],
            ml: [{ ml: [v] }],
            "space-x": [{ "space-x": [N] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [N] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{ w: ["auto", "min", "max", "fit", L, t] }],
            "min-w": [{ "min-w": ["min", "max", "fit", L, w] }],
            "max-w": [
              {
                "max-w": [
                  "0",
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [D] },
                  D,
                  L,
                ],
              },
            ],
            h: [{ h: [L, t, "auto", "min", "max", "fit"] }],
            "min-h": [{ "min-h": ["min", "max", "fit", L, w] }],
            "max-h": [{ "max-h": [L, t, "min", "max", "fit"] }],
            "font-size": [{ text: ["base", D, E] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  C,
                ],
              },
            ],
            "font-family": [{ font: [R] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  L,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", k, C] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  L,
                  w,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", L] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", L] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [y] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [y] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [
              {
                decoration: [].concat(
                  ["solid", "dashed", "dotted", "double", "none"],
                  ["wavy"]
                ),
              },
            ],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", w] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", L, w] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{ indent: W() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  L,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", L] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [y] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [
              {
                bg: [].concat(
                  [
                    "bottom",
                    "center",
                    "left",
                    "left-bottom",
                    "left-top",
                    "right",
                    "right-bottom",
                    "right-top",
                    "top",
                  ],
                  [T]
                ),
              },
            ],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", P] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  S,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [h] }],
            "gradient-via": [{ via: [h] }],
            "gradient-to": [{ to: [h] }],
            rounded: [{ rounded: [o] }],
            "rounded-s": [{ "rounded-s": [o] }],
            "rounded-e": [{ "rounded-e": [o] }],
            "rounded-t": [{ "rounded-t": [o] }],
            "rounded-r": [{ "rounded-r": [o] }],
            "rounded-b": [{ "rounded-b": [o] }],
            "rounded-l": [{ "rounded-l": [o] }],
            "rounded-ss": [{ "rounded-ss": [o] }],
            "rounded-se": [{ "rounded-se": [o] }],
            "rounded-ee": [{ "rounded-ee": [o] }],
            "rounded-es": [{ "rounded-es": [o] }],
            "rounded-tl": [{ "rounded-tl": [o] }],
            "rounded-tr": [{ "rounded-tr": [o] }],
            "rounded-br": [{ "rounded-br": [o] }],
            "rounded-bl": [{ "rounded-bl": [o] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [y] }],
            "border-style": [
              {
                border: [].concat(
                  ["solid", "dashed", "dotted", "double", "none"],
                  ["hidden"]
                ),
              },
            ],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [y] }],
            "divide-style": [
              { divide: ["solid", "dashed", "dotted", "double", "none"] },
            ],
            "border-color": [{ border: [i] }],
            "border-color-x": [{ "border-x": [i] }],
            "border-color-y": [{ "border-y": [i] }],
            "border-color-t": [{ "border-t": [i] }],
            "border-color-r": [{ "border-r": [i] }],
            "border-color-b": [{ "border-b": [i] }],
            "border-color-l": [{ "border-l": [i] }],
            "divide-color": [{ divide: [i] }],
            "outline-style": [
              {
                outline: [""].concat([
                  "solid",
                  "dashed",
                  "dotted",
                  "double",
                  "none",
                ]),
              },
            ],
            "outline-offset": [{ "outline-offset": [L, w] }],
            "outline-w": [{ outline: [w] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: z() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [y] }],
            "ring-offset-w": [{ "ring-offset": [w] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", D, V] }],
            "shadow-color": [{ shadow: [R] }],
            opacity: [{ opacity: [y] }],
            "mix-blend": [
              {
                "mix-blend": [
                  "normal",
                  "multiply",
                  "screen",
                  "overlay",
                  "darken",
                  "lighten",
                  "color-dodge",
                  "color-burn",
                  "hard-light",
                  "soft-light",
                  "difference",
                  "exclusion",
                  "hue",
                  "saturation",
                  "color",
                  "luminosity",
                  "plus-lighter",
                ],
              },
            ],
            "bg-blend": [
              {
                "bg-blend": [
                  "normal",
                  "multiply",
                  "screen",
                  "overlay",
                  "darken",
                  "lighten",
                  "color-dodge",
                  "color-burn",
                  "hard-light",
                  "soft-light",
                  "difference",
                  "exclusion",
                  "hue",
                  "saturation",
                  "color",
                  "luminosity",
                  "plus-lighter",
                ],
              },
            ],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", D, L] }],
            grayscale: [{ grayscale: [u] }],
            "hue-rotate": [{ "hue-rotate": [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [x] }],
            sepia: [{ sepia: [O] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [y] }],
            "backdrop-saturate": [{ "backdrop-saturate": [x] }],
            "backdrop-sepia": [{ "backdrop-sepia": [O] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [s] }],
            "border-spacing-x": [{ "border-spacing-x": [s] }],
            "border-spacing-y": [{ "border-spacing-y": [s] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  L,
                ],
              },
            ],
            duration: [{ duration: K() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", L] }],
            delay: [{ delay: K() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", L] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [F] }],
            "scale-x": [{ "scale-x": [F] }],
            "scale-y": [{ "scale-y": [F] }],
            rotate: [{ rotate: [A, L] }],
            "translate-x": [{ "translate-x": [I] }],
            "translate-y": [{ "translate-y": [I] }],
            "skew-x": [{ "skew-x": [j] }],
            "skew-y": [{ "skew-y": [j] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  L,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: ["appearance-none"],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  L,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": W() }],
            "scroll-mx": [{ "scroll-mx": W() }],
            "scroll-my": [{ "scroll-my": W() }],
            "scroll-ms": [{ "scroll-ms": W() }],
            "scroll-me": [{ "scroll-me": W() }],
            "scroll-mt": [{ "scroll-mt": W() }],
            "scroll-mr": [{ "scroll-mr": W() }],
            "scroll-mb": [{ "scroll-mb": W() }],
            "scroll-ml": [{ "scroll-ml": W() }],
            "scroll-p": [{ "scroll-p": W() }],
            "scroll-px": [{ "scroll-px": W() }],
            "scroll-py": [{ "scroll-py": W() }],
            "scroll-ps": [{ "scroll-ps": W() }],
            "scroll-pe": [{ "scroll-pe": W() }],
            "scroll-pt": [{ "scroll-pt": W() }],
            "scroll-pr": [{ "scroll-pr": W() }],
            "scroll-pb": [{ "scroll-pb": W() }],
            "scroll-pl": [{ "scroll-pl": W() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [
              {
                touch: [
                  "auto",
                  "none",
                  "pinch-zoom",
                  "manipulation",
                  { pan: ["x", "left", "right", "y", "up", "down"] },
                ],
              },
            ],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", L] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [w, C] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      }
      var z = h(W),
        U = Object.prototype.hasOwnProperty,
        H = new Set(["string", "number", "boolean"]),
        $ = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
        K = (e) => e || void 0,
        G = (...e) => K(s(e).filter(Boolean).join(" ")),
        Z = null,
        Y = {},
        _ = !1,
        X =
          (...e) =>
          (t) =>
            t.twMerge
              ? ((!Z || _) &&
                  ((_ = !1),
                  (Z = o(Y)
                    ? z
                    : (function (e) {
                        for (
                          var t = arguments.length,
                            r = Array(t > 1 ? t - 1 : 0),
                            n = 1;
                          n < t;
                          n++
                        )
                          r[n - 1] = arguments[n];
                        return "function" == typeof e
                          ? h.apply(void 0, [W, e].concat(r))
                          : h.apply(
                              void 0,
                              [
                                function () {
                                  return (function (e, t) {
                                    for (var r in t)
                                      !(function e(t, r, n) {
                                        if (
                                          U.call(t, r) &&
                                          !H.has(typeof n) &&
                                          null !== n
                                        ) {
                                          if (
                                            Array.isArray(n) &&
                                            Array.isArray(t[r])
                                          )
                                            t[r] = t[r].concat(n);
                                          else if (
                                            "object" == typeof n &&
                                            "object" == typeof t[r]
                                          ) {
                                            if (null === t[r])
                                              return void (t[r] = n);
                                            for (var i in n) e(t[r], i, n[i]);
                                          }
                                        } else t[r] = n;
                                      })(e, r, t[r]);
                                    return e;
                                  })(W(), e);
                                },
                              ].concat(r)
                            );
                      })(Y))),
                K(Z(G(e))))
              : G(e),
        q = (e, t) => {
          for (let r in t)
            e.hasOwnProperty(r) ? (e[r] = G(e[r], t[r])) : (e[r] = t[r]);
          return e;
        },
        J = (e, t) => {
          let {
              extend: r = null,
              slots: n = {},
              variants: u = {},
              compoundVariants: c = [],
              compoundSlots: d = [],
              defaultVariants: p = {},
            } = e,
            h = { ...$, ...t },
            f =
              null != r && r.base
                ? G(r.base, null == e ? void 0 : e.base)
                : null == e
                ? void 0
                : e.base,
            m =
              null != r && r.variants && !o(r.variants) ? a(u, r.variants) : u,
            g =
              null != r && r.defaultVariants && !o(r.defaultVariants)
                ? { ...r.defaultVariants, ...p }
                : p;
          o(h.twMergeConfig) ||
            ((e, t) => JSON.stringify(e) === JSON.stringify(t))(
              h.twMergeConfig,
              Y
            ) ||
            ((_ = !0), (Y = h.twMergeConfig));
          let v = o(n) ? {} : { base: null == e ? void 0 : e.base, ...n },
            y = o(null == r ? void 0 : r.slots)
              ? v
              : q(
                  null == r ? void 0 : r.slots,
                  o(v) ? { base: null == e ? void 0 : e.base } : v
                ),
            b = (e) => {
              if (o(m) && o(n) && o(null == r ? void 0 : r.slots))
                return X(
                  f,
                  null == e ? void 0 : e.class,
                  null == e ? void 0 : e.className
                )(h);
              if (c && !Array.isArray(c))
                throw TypeError(
                  'The "compoundVariants" prop must be an array. Received: ' +
                    typeof c
                );
              if (d && !Array.isArray(d))
                throw TypeError(
                  'The "compoundSlots" prop must be an array. Received: ' +
                    typeof d
                );
              let t = (e, t, r = [], n) => {
                  let i = r;
                  if ("string" == typeof t)
                    i = i.concat(
                      l(t)
                        .split(" ")
                        .map((t) => `${e}:${t}`)
                    );
                  else if (Array.isArray(t))
                    i = i.concat(t.reduce((t, r) => t.concat(`${e}:${r}`), []));
                  else if ("object" == typeof t && "string" == typeof n)
                    for (let r in t)
                      if (t.hasOwnProperty(r) && r === n) {
                        let o = t[r];
                        if (o && "string" == typeof o) {
                          let t = l(o);
                          i[n]
                            ? (i[n] = i[n].concat(
                                t.split(" ").map((t) => `${e}:${t}`)
                              ))
                            : (i[n] = t.split(" ").map((t) => `${e}:${t}`));
                        } else
                          Array.isArray(o) &&
                            o.length > 0 &&
                            (i[n] = o.reduce(
                              (t, r) => t.concat(`${e}:${r}`),
                              []
                            ));
                      }
                  return i;
                },
                a = (r, n = m, s = null, a = null) => {
                  var l;
                  let u = n[r];
                  if (!u || o(u)) return null;
                  let c =
                    null != (l = null == a ? void 0 : a[r])
                      ? l
                      : null == e
                      ? void 0
                      : e[r];
                  if (null === c) return null;
                  let d = i(c),
                    p =
                      (Array.isArray(h.responsiveVariants) &&
                        h.responsiveVariants.length > 0) ||
                      !0 === h.responsiveVariants,
                    f = null == g ? void 0 : g[r],
                    v = [];
                  if ("object" == typeof d && p)
                    for (let [e, r] of Object.entries(d)) {
                      let n = u[r];
                      "initial" !== e
                        ? (Array.isArray(h.responsiveVariants) &&
                            !h.responsiveVariants.includes(e)) ||
                          (v = t(e, n, v, s))
                        : (f = r);
                    }
                  let y = u[d] || u[i(f)];
                  return "object" == typeof v && "string" == typeof s && v[s]
                    ? q(v, y)
                    : v.length > 0
                    ? (v.push(y), v)
                    : y;
                },
                u = (e, t) => {
                  if (!m || "object" != typeof m) return null;
                  let r = [];
                  for (let n in m) {
                    let i = a(n, m, e, t),
                      o = "base" === e && "string" == typeof i ? i : i && i[e];
                    o && (r[r.length] = o);
                  }
                  return r;
                },
                p = {};
              for (let t in e) void 0 !== e[t] && (p[t] = e[t]);
              let v = (t, r) => {
                  var n;
                  let i =
                    "object" == typeof (null == e ? void 0 : e[t])
                      ? { [t]: null == (n = e[t]) ? void 0 : n.initial }
                      : {};
                  return { ...g, ...p, ...i, ...r };
                },
                b = (e = [], t) => {
                  let r = [];
                  for (let { class: n, className: i, ...o } of e) {
                    let e = !0;
                    for (let [r, n] of Object.entries(o)) {
                      let i = v(r, t);
                      if (Array.isArray(n)) {
                        if (!n.includes(i[r])) {
                          e = !1;
                          break;
                        }
                      } else if (i[r] !== n) {
                        e = !1;
                        break;
                      }
                    }
                    e && (n && r.push(n), i && r.push(i));
                  }
                  return r;
                },
                x = (e) => {
                  let t = b(c, e);
                  return ((...e) => s(e).filter(Boolean))(
                    b(null == r ? void 0 : r.compoundVariants, e),
                    t
                  );
                },
                w = (e) => {
                  let t = x(e);
                  if (!Array.isArray(t)) return t;
                  let r = {};
                  for (let e of t)
                    if (
                      ("string" == typeof e && (r.base = X(r.base, e)(h)),
                      "object" == typeof e)
                    )
                      for (let [t, n] of Object.entries(e))
                        r[t] = X(r[t], n)(h);
                  return r;
                },
                E = (e) => {
                  if (d.length < 1) return null;
                  let t = {};
                  for (let {
                    slots: r = [],
                    class: n,
                    className: i,
                    ...s
                  } of d) {
                    if (!o(s)) {
                      let t = !0;
                      for (let r of Object.keys(s)) {
                        let n = v(r, e)[r];
                        if (void 0 === n || n !== s[r]) {
                          t = !1;
                          break;
                        }
                      }
                      if (!t) continue;
                    }
                    for (let e of r) (t[e] = t[e] || []), t[e].push([n, i]);
                  }
                  return t;
                };
              if (!o(n) || !o(null == r ? void 0 : r.slots)) {
                let e = {};
                if ("object" == typeof y && !o(y))
                  for (let t of Object.keys(y))
                    e[t] = (e) => {
                      var r, n;
                      return X(
                        y[t],
                        u(t, e),
                        (null != (r = w(e)) ? r : [])[t],
                        (null != (n = E(e)) ? n : [])[t],
                        null == e ? void 0 : e.class,
                        null == e ? void 0 : e.className
                      )(h);
                    };
                return e;
              }
              return X(
                f,
                m ? Object.keys(m).map((e) => a(e, m)) : null,
                x(),
                null == e ? void 0 : e.class,
                null == e ? void 0 : e.className
              )(h);
            };
          return (
            (b.variantKeys = (() => {
              if (m && "object" == typeof m) return Object.keys(m);
            })()),
            (b.extend = r),
            (b.base = f),
            (b.slots = y),
            (b.variants = m),
            (b.defaultVariants = g),
            (b.compoundSlots = d),
            (b.compoundVariants = c),
            b
          );
        },
        Q = ["small", "medium", "large"],
        ee = (e, t) => {
          var r, i, o;
          return J(e, {
            ...t,
            twMerge: null == (r = null == t ? void 0 : t.twMerge) || r,
            twMergeConfig: {
              ...(null == t ? void 0 : t.twMergeConfig),
              theme: {
                ...(null == (i = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : i.theme),
                opacity: ["disabled"],
                spacing: ["divider", "unit", ...n],
                borderWidth: Q,
                borderRadius: Q,
              },
              classGroups: {
                ...(null == (o = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : o.classGroups),
                shadow: [{ shadow: Q }],
                "font-size": [{ text: ["tiny", ...Q] }],
                "bg-image": ["bg-stripe-gradient"],
                "min-w": [{ "min-w": ["unit", ...n] }],
                "min-h": [{ "min-h": ["unit", ...n] }],
              },
            },
          });
        };
    },
    7893: function (e, t, r) {
      r.d(t, {
        Dh: function () {
          return n;
        },
      });
      var n = [
        "outline-none",
        "data-[focus-visible=true]:z-10",
        "data-[focus-visible=true]:outline-2",
        "data-[focus-visible=true]:outline-focus",
        "data-[focus-visible=true]:outline-offset-2",
      ];
    },
    8628: function (e, t, r) {
      r.d(t, {
        Fx: function () {
          return T;
        },
        MT: function () {
          return u;
        },
        cW: function () {
          return v;
        },
        ex: function () {
          return s;
        },
        kc: function () {
          return C;
        },
      });
      var n = r(7294),
        i = r(768),
        o = r(6644);
      function s(e) {
        if ("virtual" === (0, o.Jz)()) {
          let t = document.activeElement;
          (0, i.QB)(() => {
            document.activeElement === t &&
              document.contains(e) &&
              (0, i.Ao)(e);
          });
        } else (0, i.Ao)(e);
      }
      let a = n.createContext(null),
        l = null;
      function u(e) {
        let t,
          r,
          { children: o, contain: s, restoreFocus: u, autoFocus: c } = e,
          d = (0, n.useRef)(),
          p = (0, n.useRef)(),
          v = (0, n.useRef)([]),
          { parentNode: T } = (0, n.useContext)(a) || {},
          S = (0, n.useMemo)(() => new E({ scopeRef: v }), [v]);
        (0, i.bt)(() => {
          let e = T || P.root;
          if (P.getTreeNode(e.scopeRef) && l && !y(l, e.scopeRef)) {
            let t = P.getTreeNode(l);
            t && (e = t);
          }
          e.addChild(S), P.addNode(S);
        }, [S, T]),
          (0, i.bt)(() => {
            P.getTreeNode(v).contain = s;
          }, [s]),
          (0, i.bt)(() => {
            let e = d.current.nextSibling,
              t = [];
            for (; e && e !== p.current; ) t.push(e), (e = e.nextSibling);
            v.current = t;
          }, [o]),
          (0, i.bt)(() => {
            if (u || s) return;
            let e = v.current,
              t = (e) => {
                let t = e.target;
                m(t, v.current) ? (l = v) : g(t) || (l = null);
              };
            return (
              document.addEventListener("focusin", t, !1),
              e.forEach((e) => e.addEventListener("focusin", t, !1)),
              () => {
                document.removeEventListener("focusin", t, !1),
                  e.forEach((e) => e.removeEventListener("focusin", t, !1));
              }
            );
          }, [v, u, s]),
          (t = (0, n.useRef)()),
          (r = (0, n.useRef)(null)),
          (0, i.bt)(() => {
            let e = v.current;
            if (!s)
              return void (
                r.current &&
                (cancelAnimationFrame(r.current), (r.current = null))
              );
            let n = (e) => {
                if (
                  "Tab" !== e.key ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  !f(v)
                )
                  return;
                let t = document.activeElement,
                  r = v.current;
                if (!m(t, r)) return;
                let n = w(h(r), { tabbable: !0 }, r);
                n.currentNode = t;
                let i = e.shiftKey ? n.previousNode() : n.nextNode();
                i ||
                  ((n.currentNode = e.shiftKey
                    ? r[r.length - 1].nextElementSibling
                    : r[0].previousElementSibling),
                  (i = e.shiftKey ? n.previousNode() : n.nextNode())),
                  e.preventDefault(),
                  i && b(i, !0);
              },
              i = (e) => {
                (l && !y(l, v)) || !m(e.target, v.current)
                  ? f(v) && !g(e.target, v)
                    ? t.current
                      ? t.current.focus()
                      : l && x(l.current)
                    : f(v) && (t.current = e.target)
                  : ((l = v), (t.current = e.target));
              },
              o = (e) => {
                r.current && cancelAnimationFrame(r.current),
                  (r.current = requestAnimationFrame(() => {
                    f(v) &&
                      !g(document.activeElement, v) &&
                      ((l = v),
                      document.body.contains(e.target)
                        ? ((t.current = e.target), t.current.focus())
                        : l && x(l.current));
                  }));
              };
            return (
              document.addEventListener("keydown", n, !1),
              document.addEventListener("focusin", i, !1),
              e.forEach((e) => e.addEventListener("focusin", i, !1)),
              e.forEach((e) => e.addEventListener("focusout", o, !1)),
              () => {
                document.removeEventListener("keydown", n, !1),
                  document.removeEventListener("focusin", i, !1),
                  e.forEach((e) => e.removeEventListener("focusin", i, !1)),
                  e.forEach((e) => e.removeEventListener("focusout", o, !1));
              }
            );
          }, [v, s]),
          (0, i.bt)(
            () => () => {
              r.current && cancelAnimationFrame(r.current);
            },
            [r]
          ),
          (function (e, t, r) {
            let o = (0, n.useRef)(
              "undefined" != typeof document ? document.activeElement : null
            );
            (0, i.bt)(() => {
              let n = e.current;
              if (!t || r) return;
              let i = () => {
                (!l || y(l, e)) &&
                  m(document.activeElement, e.current) &&
                  (l = e);
              };
              return (
                document.addEventListener("focusin", i, !1),
                n.forEach((e) => e.addEventListener("focusin", i, !1)),
                () => {
                  document.removeEventListener("focusin", i, !1),
                    n.forEach((e) => e.removeEventListener("focusin", i, !1));
                }
              );
            }, [e, r]),
              (0, i.bt)(() => {
                if (!t) return;
                let n = (t) => {
                  if (
                    "Tab" !== t.key ||
                    t.altKey ||
                    t.ctrlKey ||
                    t.metaKey ||
                    !f(e)
                  )
                    return;
                  let r = document.activeElement;
                  if (!m(r, e.current)) return;
                  let n = P.getTreeNode(e).nodeToRestore,
                    i = w(document.body, { tabbable: !0 });
                  i.currentNode = r;
                  let o = t.shiftKey ? i.previousNode() : i.nextNode();
                  if (
                    ((document.body.contains(n) && n !== document.body) ||
                      ((n = null), (P.getTreeNode(e).nodeToRestore = null)),
                    (!o || !m(o, e.current)) && n)
                  ) {
                    i.currentNode = n;
                    do {
                      o = t.shiftKey ? i.previousNode() : i.nextNode();
                    } while (m(o, e.current));
                    t.preventDefault(),
                      t.stopPropagation(),
                      o ? b(o, !0) : g(n) ? b(n, !0) : r.blur();
                  }
                };
                return (
                  r || document.addEventListener("keydown", n, !0),
                  () => {
                    r || document.removeEventListener("keydown", n, !0);
                  }
                );
              }, [e, t, r]),
              (0, i.bt)(() => {
                if (t)
                  return (
                    (P.getTreeNode(e).nodeToRestore = o.current),
                    () => {
                      let r = P.getTreeNode(e).nodeToRestore;
                      if (
                        t &&
                        r &&
                        (m(document.activeElement, e.current) ||
                          (document.activeElement === document.body &&
                            (function (e) {
                              let t = P.getTreeNode(l);
                              for (; t && t.scopeRef !== e; ) {
                                if (t.nodeToRestore) return !1;
                                t = t.parent;
                              }
                              return (null == t ? void 0 : t.scopeRef) === e;
                            })(e)))
                      ) {
                        let t = P.clone();
                        requestAnimationFrame(() => {
                          if (document.activeElement === document.body) {
                            let r = t.getTreeNode(e);
                            for (; r; ) {
                              if (
                                r.nodeToRestore &&
                                document.body.contains(r.nodeToRestore)
                              )
                                return void b(r.nodeToRestore);
                              r = r.parent;
                            }
                            for (r = t.getTreeNode(e); r; ) {
                              if (r.scopeRef && P.getTreeNode(r.scopeRef))
                                return void x(r.scopeRef.current, !0);
                              r = r.parent;
                            }
                          }
                        });
                      }
                    }
                  );
              }, [e, t]);
          })(v, u, s),
          (function (e, t) {
            let r = n.useRef(t);
            (0, n.useEffect)(() => {
              r.current &&
                ((l = e), m(document.activeElement, l.current) || x(e.current)),
                (r.current = !1);
            }, [e]);
          })(v, c),
          (0, n.useEffect)(() => {
            if (v) {
              let e = document.activeElement,
                t = null;
              if (m(e, v.current)) {
                for (let r of P.traverse()) m(e, r.scopeRef.current) && (t = r);
                t === P.getTreeNode(v) && (l = t.scopeRef);
              }
              return () => {
                let e = P.getTreeNode(v).parent.scopeRef;
                (v === l || y(v, l)) && (!e || P.getTreeNode(e)) && (l = e),
                  P.removeTreeNode(v);
              };
            }
          }, [v]);
        let C = (0, n.useMemo)(
            () => ({
              focusNext(e = {}) {
                let t = v.current,
                  { from: r, tabbable: n, wrap: i, accept: o } = e,
                  s = r || document.activeElement,
                  a = t[0].previousElementSibling,
                  l = w(h(t), { tabbable: n, accept: o }, t);
                l.currentNode = m(s, t) ? s : a;
                let u = l.nextNode();
                return (
                  !u && i && ((l.currentNode = a), (u = l.nextNode())),
                  u && b(u, !0),
                  u
                );
              },
              focusPrevious(e = {}) {
                let t = v.current,
                  { from: r, tabbable: n, wrap: i, accept: o } = e,
                  s = r || document.activeElement,
                  a = t[t.length - 1].nextElementSibling,
                  l = w(h(t), { tabbable: n, accept: o }, t);
                l.currentNode = m(s, t) ? s : a;
                let u = l.previousNode();
                return (
                  !u && i && ((l.currentNode = a), (u = l.previousNode())),
                  u && b(u, !0),
                  u
                );
              },
              focusFirst(e = {}) {
                let t = v.current,
                  { tabbable: r, accept: n } = e,
                  i = w(h(t), { tabbable: r, accept: n }, t);
                i.currentNode = t[0].previousElementSibling;
                let o = i.nextNode();
                return o && b(o, !0), o;
              },
              focusLast(e = {}) {
                let t = v.current,
                  { tabbable: r, accept: n } = e,
                  i = w(h(t), { tabbable: r, accept: n }, t);
                i.currentNode = t[t.length - 1].nextElementSibling;
                let o = i.previousNode();
                return o && b(o, !0), o;
              },
            }),
            []
          ),
          k = (0, n.useMemo)(
            () => ({ focusManager: C, parentNode: S }),
            [S, C]
          );
        return n.createElement(
          a.Provider,
          { value: k },
          n.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: d,
          }),
          o,
          n.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: p,
          })
        );
      }
      let c = [
          "input:not([disabled]):not([type=hidden])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          "button:not([disabled])",
          "a[href]",
          "area[href]",
          "summary",
          "iframe",
          "object",
          "embed",
          "audio[controls]",
          "video[controls]",
          "[contenteditable]",
        ],
        d =
          c.join(":not([hidden]),") +
          ",[tabindex]:not([disabled]):not([hidden])";
      c.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      let p = c.join(':not([hidden]):not([tabindex="-1"]),');
      function h(e) {
        return e[0].parentElement;
      }
      function f(e) {
        let t = P.getTreeNode(l);
        for (; t && t.scopeRef !== e; ) {
          if (t.contain) return !1;
          t = t.parent;
        }
        return !0;
      }
      function m(e, t) {
        return t.some((t) => t.contains(e));
      }
      function g(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
          return !0;
        for (let { scopeRef: r } of P.traverse(P.getTreeNode(t)))
          if (m(e, r.current)) return !0;
        return !1;
      }
      function v(e) {
        return g(e, l);
      }
      function y(e, t) {
        var r;
        let n =
          null === (r = P.getTreeNode(t)) || void 0 === r ? void 0 : r.parent;
        for (; n; ) {
          if (n.scopeRef === e) return !0;
          n = n.parent;
        }
        return !1;
      }
      function b(e, t = !1) {
        if (null == e || t) {
          if (null != e)
            try {
              e.focus();
            } catch (e) {}
        } else
          try {
            s(e);
          } catch (e) {}
      }
      function x(e, t = !0) {
        let r = e[0].previousElementSibling,
          n = w(h(e), { tabbable: t }, e);
        n.currentNode = r;
        let i = n.nextNode();
        t &&
          !i &&
          (((n = w(h(e), { tabbable: !1 }, e)).currentNode = r),
          (i = n.nextNode())),
          b(i);
      }
      function w(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? p : d,
          i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var i;
              return (
                null == t || null === (i = t.from) || void 0 === i
                  ? void 0
                  : i.contains(e)
              )
                ? NodeFilter.FILTER_REJECT
                : !e.matches(n) ||
                  !(function e(t, r) {
                    return (
                      "#comment" !== t.nodeName &&
                      (function (e) {
                        if (
                          !(e instanceof HTMLElement || e instanceof SVGElement)
                        )
                          return !1;
                        let { display: t, visibility: r } = e.style,
                          n =
                            "none" !== t && "hidden" !== r && "collapse" !== r;
                        if (n) {
                          let { getComputedStyle: t } =
                              e.ownerDocument.defaultView,
                            { display: r, visibility: i } = t(e);
                          n =
                            "none" !== r && "hidden" !== i && "collapse" !== i;
                        }
                        return n;
                      })(t) &&
                      !t.hasAttribute("hidden") &&
                      ("DETAILS" !== t.nodeName ||
                        !r ||
                        "SUMMARY" === r.nodeName ||
                        t.hasAttribute("open")) &&
                      (!t.parentElement || e(t.parentElement, t))
                    );
                  })(e) ||
                  (r && !m(e, r)) ||
                  ((null == t ? void 0 : t.accept) && !t.accept(e))
                ? NodeFilter.FILTER_SKIP
                : NodeFilter.FILTER_ACCEPT;
            },
          });
        return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i;
      }
      let E = class {
          addChild(e) {
            this.children.add(e), (e.parent = this);
          }
          removeChild(e) {
            this.children.delete(e), (e.parent = void 0);
          }
          constructor(e) {
            (this.children = new Set()),
              (this.contain = !1),
              (this.scopeRef = e.scopeRef);
          }
        },
        P = new (class e {
          get size() {
            return this.fastMap.size;
          }
          getTreeNode(e) {
            return this.fastMap.get(e);
          }
          addTreeNode(e, t, r) {
            let n = this.fastMap.get(null != t ? t : null),
              i = new E({ scopeRef: e });
            n.addChild(i),
              (i.parent = n),
              this.fastMap.set(e, i),
              r && (i.nodeToRestore = r);
          }
          addNode(e) {
            this.fastMap.set(e.scopeRef, e);
          }
          removeTreeNode(e) {
            if (null === e) return;
            let t = this.fastMap.get(e),
              r = t.parent;
            for (let e of this.traverse())
              e !== t &&
                t.nodeToRestore &&
                e.nodeToRestore &&
                t.scopeRef.current &&
                m(e.nodeToRestore, t.scopeRef.current) &&
                (e.nodeToRestore = t.nodeToRestore);
            let n = t.children;
            r.removeChild(t),
              n.size > 0 && n.forEach((e) => r.addChild(e)),
              this.fastMap.delete(t.scopeRef);
          }
          *traverse(e = this.root) {
            if ((null != e.scopeRef && (yield e), e.children.size > 0))
              for (let t of e.children) yield* this.traverse(t);
          }
          clone() {
            let t = new e();
            for (let e of this.traverse())
              t.addTreeNode(e.scopeRef, e.parent.scopeRef, e.nodeToRestore);
            return t;
          }
          constructor() {
            (this.fastMap = new Map()),
              (this.root = new E({ scopeRef: null })),
              this.fastMap.set(null, this.root);
          }
        })();
      function T(e = {}) {
        let { autoFocus: t = !1, isTextInput: r, within: i } = e,
          s = (0, n.useRef)({ isFocused: !1, isFocusVisible: t || (0, o.E)() }),
          [a, l] = (0, n.useState)(!1),
          [u, c] = (0, n.useState)(
            () => s.current.isFocused && s.current.isFocusVisible
          ),
          d = (0, n.useCallback)(
            () => c(s.current.isFocused && s.current.isFocusVisible),
            []
          ),
          p = (0, n.useCallback)(
            (e) => {
              (s.current.isFocused = e), l(e), d();
            },
            [d]
          );
        (0, o.mG)(
          (e) => {
            (s.current.isFocusVisible = e), d();
          },
          [],
          { isTextInput: r }
        );
        let { focusProps: h } = (0, o.KK)({ isDisabled: i, onFocusChange: p }),
          { focusWithinProps: f } = (0, o.L_)({
            isDisabled: !i,
            onFocusWithinChange: p,
          });
        return { isFocused: a, isFocusVisible: u, focusProps: i ? f : h };
      }
      let S = n.createContext(null);
      function C(e, t) {
        let { focusProps: r } = (0, o.KK)(e),
          { keyboardProps: a } = (0, o.v5)(e),
          l = (0, i.dG)(r, a),
          u = (function (e) {
            let t = (0, n.useContext)(S) || {};
            (0, i.lE)(t, e);
            let { ref: r, ...o } = t;
            return o;
          })(t),
          c = e.isDisabled ? {} : u,
          d = (0, n.useRef)(e.autoFocus);
        return (
          (0, n.useEffect)(() => {
            d.current && t.current && s(t.current), (d.current = !1);
          }, [t]),
          {
            focusableProps: (0, i.dG)(
              {
                ...l,
                tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
              },
              c
            ),
          }
        );
      }
    },
    6644: function (e, t, r) {
      r.d(t, {
        Jz: function () {
          return U;
        },
        E: function () {
          return z;
        },
        KK: function () {
          return k;
        },
        mG: function () {
          return H;
        },
        L_: function () {
          return $;
        },
        XI: function () {
          return X;
        },
        Fc: function () {
          return q;
        },
        v5: function () {
          return ee;
        },
        r7: function () {
          return m;
        },
      });
      var n = r(768),
        i = r(7294);
      function o(e, t, r) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + r + " private field on non-instance"
          );
        return t.get(e);
      }
      function s(e, t, r) {
        return (
          (function (e, t, r) {
            if (t.set) t.set.call(e, r);
            else {
              if (!t.writable)
                throw TypeError("attempted to set read only private field");
              t.value = r;
            }
          })(e, o(e, t, "set"), r),
          r
        );
      }
      let a = "default",
        l = "",
        u = new WeakMap();
      function c(e) {
        (0, n.gn)()
          ? ("default" === a &&
              ((l = document.documentElement.style.webkitUserSelect),
              (document.documentElement.style.webkitUserSelect = "none")),
            (a = "disabled"))
          : (e instanceof HTMLElement || e instanceof SVGElement) &&
            (u.set(e, e.style.userSelect), (e.style.userSelect = "none"));
      }
      function d(e) {
        if ((0, n.gn)())
          "disabled" === a &&
            ((a = "restoring"),
            setTimeout(() => {
              (0, n.QB)(() => {
                "restoring" === a &&
                  ("none" === document.documentElement.style.webkitUserSelect &&
                    (document.documentElement.style.webkitUserSelect = l || ""),
                  (l = ""),
                  (a = "default"));
              });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          u.has(e)
        ) {
          let t = u.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            u.delete(e);
        }
      }
      let p = i.createContext(null);
      p.displayName = "PressResponderContext";
      var h = new WeakMap();
      let f = class {
        continuePropagation() {
          s(this, h, !1);
        }
        get shouldStopPropagation() {
          var e;
          return (e = o(this, h, "get")).get ? e.get.call(this) : e.value;
        }
        constructor(e, t, r) {
          !(function (e, t) {
            if (t.has(e))
              throw TypeError(
                "Cannot initialize the same private elements twice on an object"
              );
          })(this, h),
            h.set(this, { writable: !0, value: void 0 }),
            s(this, h, !0),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey);
        }
      };
      function m(e) {
        let {
            onPress: t,
            onPressChange: r,
            onPressStart: o,
            onPressEnd: s,
            onPressUp: a,
            isDisabled: l,
            isPressed: u,
            preventFocusOnPress: h,
            shouldCancelOnPointerExit: m,
            allowTextSelectionOnPress: P,
            ref: T,
            ...S
          } = (function (e) {
            let t = (0, i.useContext)(p);
            if (t) {
              let { register: r, ...i } = t;
              (e = (0, n.dG)(i, e)), r();
            }
            return (0, n.lE)(t, e.ref), e;
          })(e),
          [C, k] = (0, i.useState)(!1),
          M = (0, i.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
          }),
          { addGlobalListener: A, removeAllGlobalListeners: L } = (0, n.xi)(),
          R = (0, n.iW)((e, t) => {
            let n = M.current;
            if (l || n.didFirePressStart) return;
            let i = !0;
            if (o) {
              let r = new f("pressstart", t, e);
              o(r), (i = r.shouldStopPropagation);
            }
            return r && r(!0), (n.didFirePressStart = !0), k(!0), i;
          }),
          D = (0, n.iW)((e, n, i = !0) => {
            let o = M.current;
            if (!o.didFirePressStart) return;
            (o.ignoreClickAfterPress = !0), (o.didFirePressStart = !1);
            let a = !0;
            if (s) {
              let t = new f("pressend", n, e);
              s(t), (a = t.shouldStopPropagation);
            }
            if ((r && r(!1), k(!1), t && i && !l)) {
              let r = new f("press", n, e);
              t(r), a && (a = r.shouldStopPropagation);
            }
            return a;
          }),
          V = (0, n.iW)((e, t) => {
            if (!l) {
              if (a) {
                let r = new f("pressup", t, e);
                return a(r), r.shouldStopPropagation;
              }
              return !0;
            }
          }),
          F = (0, n.iW)((e) => {
            let t = M.current;
            t.isPressed &&
              (t.isOverTarget && D(b(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              L(),
              P || d(t.target));
          }),
          O = (0, n.iW)((e) => {
            m && F(e);
          }),
          j = (0, i.useMemo)(() => {
            let e = M.current,
              t = {
                onKeyDown(t) {
                  if (
                    v(t.nativeEvent, t.currentTarget) &&
                    t.currentTarget.contains(t.target)
                  ) {
                    E(t.target, t.key) && t.preventDefault();
                    let n = !0;
                    e.isPressed ||
                      t.repeat ||
                      ((e.target = t.currentTarget),
                      (e.isPressed = !0),
                      (n = R(t, "keyboard")),
                      A(document, "keyup", r, !1)),
                      n && t.stopPropagation();
                  } else
                    "Enter" === t.key &&
                      g(t.currentTarget) &&
                      t.stopPropagation();
                },
                onKeyUp(t) {
                  v(t.nativeEvent, t.currentTarget) &&
                    !t.repeat &&
                    t.currentTarget.contains(t.target) &&
                    V(b(e.target, t), "keyboard");
                },
                onClick(t) {
                  if (
                    (!t || t.currentTarget.contains(t.target)) &&
                    t &&
                    0 === t.button
                  ) {
                    let r = !0;
                    if (
                      (l && t.preventDefault(),
                      !e.ignoreClickAfterPress &&
                        !e.ignoreEmulatedMouseEvents &&
                        ("virtual" === e.pointerType ||
                          (0, n.Zj)(t.nativeEvent)))
                    ) {
                      l || h || (0, n.Ao)(t.currentTarget);
                      let e = R(t, "virtual"),
                        i = V(t, "virtual"),
                        o = D(t, "virtual");
                      r = e && i && o;
                    }
                    (e.ignoreEmulatedMouseEvents = !1),
                      (e.ignoreClickAfterPress = !1),
                      r && t.stopPropagation();
                  }
                },
              },
              r = (t) => {
                if (e.isPressed && v(t, e.target)) {
                  E(t.target, t.key) && t.preventDefault(), (e.isPressed = !1);
                  let r = t.target,
                    n = D(b(e.target, t), "keyboard", e.target.contains(r));
                  L(),
                    n && t.stopPropagation(),
                    e.target instanceof HTMLElement &&
                      e.target.contains(r) &&
                      (g(e.target) ||
                        "link" === e.target.getAttribute("role")) &&
                      e.target.click();
                }
              };
            if ("undefined" != typeof PointerEvent) {
              (t.onPointerDown = (t) => {
                if (0 !== t.button || !t.currentTarget.contains(t.target))
                  return;
                if ((0, n.cr)(t.nativeEvent))
                  return void (e.pointerType = "virtual");
                w(t.currentTarget) && t.preventDefault(),
                  (e.pointerType = t.pointerType);
                let s = !0;
                e.isPressed ||
                  ((e.isPressed = !0),
                  (e.isOverTarget = !0),
                  (e.activePointerId = t.pointerId),
                  (e.target = t.currentTarget),
                  l || h || (0, n.Ao)(t.currentTarget),
                  P || c(e.target),
                  (s = R(t, e.pointerType)),
                  A(document, "pointermove", r, !1),
                  A(document, "pointerup", i, !1),
                  A(document, "pointercancel", o, !1)),
                  s && t.stopPropagation();
              }),
                (t.onMouseDown = (e) => {
                  e.currentTarget.contains(e.target) &&
                    0 === e.button &&
                    (w(e.currentTarget) && e.preventDefault(),
                    e.stopPropagation());
                }),
                (t.onPointerUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    "virtual" !== e.pointerType &&
                    0 === t.button &&
                    x(t, t.currentTarget) &&
                    V(t, e.pointerType || t.pointerType);
                });
              let r = (t) => {
                  t.pointerId === e.activePointerId &&
                    (x(t, e.target)
                      ? e.isOverTarget ||
                        ((e.isOverTarget = !0),
                        R(b(e.target, t), e.pointerType))
                      : e.isOverTarget &&
                        ((e.isOverTarget = !1),
                        D(b(e.target, t), e.pointerType, !1),
                        O(t)));
                },
                i = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    (x(t, e.target)
                      ? D(b(e.target, t), e.pointerType)
                      : e.isOverTarget && D(b(e.target, t), e.pointerType, !1),
                    (e.isPressed = !1),
                    (e.isOverTarget = !1),
                    (e.activePointerId = null),
                    (e.pointerType = null),
                    L(),
                    P || d(e.target));
                },
                o = (e) => {
                  F(e);
                };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && F(e);
              };
            } else {
              (t.onMouseDown = (t) => {
                if (0 === t.button && t.currentTarget.contains(t.target)) {
                  if (
                    (w(t.currentTarget) && t.preventDefault(),
                    e.ignoreEmulatedMouseEvents)
                  )
                    return void t.stopPropagation();
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.target = t.currentTarget),
                    (e.pointerType = (0, n.Zj)(t.nativeEvent)
                      ? "virtual"
                      : "mouse"),
                    l || h || (0, n.Ao)(t.currentTarget),
                    R(t, e.pointerType) && t.stopPropagation(),
                    A(document, "mouseup", r, !1);
                }
              }),
                (t.onMouseEnter = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    ((e.isOverTarget = !0), (r = R(t, e.pointerType))),
                    r && t.stopPropagation();
                }),
                (t.onMouseLeave = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    ((e.isOverTarget = !1),
                    (r = D(t, e.pointerType, !1)),
                    O(t)),
                    r && t.stopPropagation();
                }),
                (t.onMouseUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    !e.ignoreEmulatedMouseEvents &&
                    0 === t.button &&
                    V(t, e.pointerType);
                });
              let r = (t) => {
                if (0 === t.button) {
                  if (((e.isPressed = !1), L(), e.ignoreEmulatedMouseEvents))
                    return void (e.ignoreEmulatedMouseEvents = !1);
                  x(t, e.target)
                    ? D(b(e.target, t), e.pointerType)
                    : e.isOverTarget && D(b(e.target, t), e.pointerType, !1),
                    (e.isOverTarget = !1);
                }
              };
              (t.onTouchStart = (t) => {
                if (!t.currentTarget.contains(t.target)) return;
                let r = (function (e) {
                  let { targetTouches: t } = e;
                  return t.length > 0 ? t[0] : null;
                })(t.nativeEvent);
                r &&
                  ((e.activePointerId = r.identifier),
                  (e.ignoreEmulatedMouseEvents = !0),
                  (e.isOverTarget = !0),
                  (e.isPressed = !0),
                  (e.target = t.currentTarget),
                  (e.pointerType = "touch"),
                  l || h || (0, n.Ao)(t.currentTarget),
                  P || c(e.target),
                  R(t, e.pointerType) && t.stopPropagation(),
                  A(window, "scroll", i, !0));
              }),
                (t.onTouchMove = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) return void t.stopPropagation();
                  let r = y(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && x(r, t.currentTarget)
                    ? e.isOverTarget ||
                      ((e.isOverTarget = !0), (n = R(t, e.pointerType)))
                    : e.isOverTarget &&
                      ((e.isOverTarget = !1),
                      (n = D(t, e.pointerType, !1)),
                      O(t)),
                    n && t.stopPropagation();
                }),
                (t.onTouchEnd = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) return void t.stopPropagation();
                  let r = y(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && x(r, t.currentTarget)
                    ? (V(t, e.pointerType), (n = D(t, e.pointerType)))
                    : e.isOverTarget && (n = D(t, e.pointerType, !1)),
                    n && t.stopPropagation(),
                    (e.isPressed = !1),
                    (e.activePointerId = null),
                    (e.isOverTarget = !1),
                    (e.ignoreEmulatedMouseEvents = !0),
                    P || d(e.target),
                    L();
                }),
                (t.onTouchCancel = (t) => {
                  t.currentTarget.contains(t.target) &&
                    (t.stopPropagation(), e.isPressed && F(t));
                });
              let i = (t) => {
                e.isPressed &&
                  t.target.contains(e.target) &&
                  F({
                    currentTarget: e.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    altKey: !1,
                  });
              };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && F(e);
              };
            }
            return t;
          }, [A, l, h, L, P, F, O, D, R, V]);
        return (
          (0, i.useEffect)(
            () => () => {
              P || d(M.current.target);
            },
            [P]
          ),
          { isPressed: u || C, pressProps: (0, n.dG)(S, j) }
        );
      }
      function g(e) {
        return "A" === e.tagName && e.hasAttribute("href");
      }
      function v(e, t) {
        let { key: r, code: n } = e,
          i = t.getAttribute("role");
        return !(
          ("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n) ||
          (t instanceof HTMLInputElement && !T(t, r)) ||
          t instanceof HTMLTextAreaElement ||
          t.isContentEditable ||
          (g(t) && ("button" !== i || "Enter" === r)) ||
          ("link" === i && "Enter" !== r)
        );
      }
      function y(e, t) {
        let r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          let n = r[e];
          if (n.identifier === t) return n;
        }
        return null;
      }
      function b(e, t) {
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
        };
      }
      function x(e, t) {
        let r,
          n,
          i = t.getBoundingClientRect(),
          o =
            ((r = e.width / 2 || e.radiusX || 0),
            (n = e.height / 2 || e.radiusY || 0),
            {
              top: e.clientY - n,
              right: e.clientX + r,
              bottom: e.clientY + n,
              left: e.clientX - r,
            });
        return !(
          i.left > o.right ||
          o.left > i.right ||
          i.top > o.bottom ||
          o.top > i.bottom
        );
      }
      function w(e) {
        return !(e instanceof HTMLElement && e.draggable);
      }
      function E(e, t) {
        return e instanceof HTMLInputElement
          ? !T(e, t)
          : !(e instanceof HTMLButtonElement) ||
              ("submit" !== e.type && "reset" !== e.type);
      }
      let P = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function T(e, t) {
        return "checkbox" === e.type || "radio" === e.type
          ? " " === t
          : P.has(e.type);
      }
      let S = class {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      };
      function C(e) {
        let t = (0, i.useRef)({ isFocused: !1, observer: null });
        (0, n.bt)(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let r = (0, n.iW)((t) => {
          null == e || e(t);
        });
        return (0, i.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let n = e.target;
              n.addEventListener(
                "focusout",
                (e) => {
                  (t.current.isFocused = !1),
                    n.disabled && r(new S("blur", e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 }
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && n.disabled) {
                    t.current.observer.disconnect();
                    let e =
                      n === document.activeElement
                        ? null
                        : document.activeElement;
                    n.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: e })
                    ),
                      n.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: e,
                        })
                      );
                  }
                })),
                t.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [r]
        );
      }
      function k(e) {
        let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e,
          s = (0, i.useCallback)(
            (e) => {
              if (e.target === e.currentTarget)
                return n && n(e), o && o(!1), !0;
            },
            [n, o]
          ),
          a = C(s),
          l = (0, i.useCallback)(
            (e) => {
              e.target === e.currentTarget &&
                document.activeElement === e.target &&
                (r && r(e), o && o(!0), a(e));
            },
            [o, r, a]
          );
        return {
          focusProps: {
            onFocus: !t && (r || o || n) ? l : void 0,
            onBlur: t || (!n && !o) ? void 0 : s,
          },
        };
      }
      let M = null,
        A = new Set(),
        L = !1,
        R = !1,
        D = !1,
        V = { Tab: !0, Escape: !0 };
      function F(e, t) {
        for (let r of A) r(e, t);
      }
      function O(e) {
        (R = !0),
          e.metaKey ||
            (!(0, n.V5)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((M = "keyboard"), F("keyboard", e));
      }
      function j(e) {
        (M = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((R = !0), F("pointer", e));
      }
      function N(e) {
        (0, n.Zj)(e) && ((R = !0), (M = "virtual"));
      }
      function I(e) {
        e.target !== window &&
          e.target !== document &&
          (R || D || ((M = "virtual"), F("virtual", e)), (R = !1), (D = !1));
      }
      function B() {
        (R = !1), (D = !0);
      }
      function W() {
        if ("undefined" == typeof window || L) return;
        let e = HTMLElement.prototype.focus;
        (HTMLElement.prototype.focus = function () {
          (R = !0), e.apply(this, arguments);
        }),
          document.addEventListener("keydown", O, !0),
          document.addEventListener("keyup", O, !0),
          document.addEventListener("click", N, !0),
          window.addEventListener("focus", I, !0),
          window.addEventListener("blur", B, !1),
          "undefined" != typeof PointerEvent
            ? (document.addEventListener("pointerdown", j, !0),
              document.addEventListener("pointermove", j, !0),
              document.addEventListener("pointerup", j, !0))
            : (document.addEventListener("mousedown", j, !0),
              document.addEventListener("mousemove", j, !0),
              document.addEventListener("mouseup", j, !0)),
          (L = !0);
      }
      function z() {
        return "pointer" !== M;
      }
      function U() {
        return M;
      }
      function H(e, t, r) {
        W(),
          (0, i.useEffect)(() => {
            let t = (t, n) => {
              (!(
                (null == r ? void 0 : r.isTextInput) &&
                "keyboard" === t &&
                n instanceof KeyboardEvent
              ) ||
                V[n.key]) &&
                e(z());
            };
            return (
              A.add(t),
              () => {
                A.delete(t);
              }
            );
          }, t);
      }
      function $(e) {
        let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o,
          } = e,
          s = (0, i.useRef)({ isFocusWithin: !1 }),
          a = (0, i.useCallback)(
            (e) => {
              s.current.isFocusWithin &&
                !e.currentTarget.contains(e.relatedTarget) &&
                ((s.current.isFocusWithin = !1), r && r(e), o && o(!1));
            },
            [r, o, s]
          ),
          l = C(a),
          u = (0, i.useCallback)(
            (e) => {
              s.current.isFocusWithin ||
                document.activeElement !== e.target ||
                (n && n(e), o && o(!0), (s.current.isFocusWithin = !0), l(e));
            },
            [n, o, l]
          );
        return t
          ? { focusWithinProps: { onFocus: null, onBlur: null } }
          : { focusWithinProps: { onFocus: u, onBlur: a } };
      }
      "undefined" != typeof document &&
        ("loading" !== document.readyState
          ? W()
          : document.addEventListener("DOMContentLoaded", W));
      let K = !1,
        G = 0;
      function Z() {
        (K = !0),
          setTimeout(() => {
            K = !1;
          }, 50);
      }
      function Y(e) {
        "touch" === e.pointerType && Z();
      }
      function _() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", Y)
              : document.addEventListener("touchend", Z),
            G++,
            () => {
              --G > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", Y)
                  : document.removeEventListener("touchend", Z));
            }
          );
      }
      function X(e) {
        let {
            onHoverStart: t,
            onHoverChange: r,
            onHoverEnd: n,
            isDisabled: o,
          } = e,
          [s, a] = (0, i.useState)(!1),
          l = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, i.useEffect)(_, []);
        let { hoverProps: u, triggerHoverEnd: c } = (0, i.useMemo)(() => {
          let e = (e, n) => {
              if (
                ((l.pointerType = n),
                o ||
                  "touch" === n ||
                  l.isHovered ||
                  !e.currentTarget.contains(e.target))
              )
                return;
              l.isHovered = !0;
              let i = e.currentTarget;
              (l.target = i),
                t && t({ type: "hoverstart", target: i, pointerType: n }),
                r && r(!0),
                a(!0);
            },
            i = (e, t) => {
              if (
                ((l.pointerType = ""),
                (l.target = null),
                "touch" === t || !l.isHovered)
              )
                return;
              l.isHovered = !1;
              let i = e.currentTarget;
              n && n({ type: "hoverend", target: i, pointerType: t }),
                r && r(!1),
                a(!1);
            },
            s = {};
          return (
            "undefined" != typeof PointerEvent
              ? ((s.onPointerEnter = (t) => {
                  (K && "mouse" === t.pointerType) || e(t, t.pointerType);
                }),
                (s.onPointerLeave = (e) => {
                  !o &&
                    e.currentTarget.contains(e.target) &&
                    i(e, e.pointerType);
                }))
              : ((s.onTouchStart = () => {
                  l.ignoreEmulatedMouseEvents = !0;
                }),
                (s.onMouseEnter = (t) => {
                  l.ignoreEmulatedMouseEvents || K || e(t, "mouse"),
                    (l.ignoreEmulatedMouseEvents = !1);
                }),
                (s.onMouseLeave = (e) => {
                  !o && e.currentTarget.contains(e.target) && i(e, "mouse");
                })),
            { hoverProps: s, triggerHoverEnd: i }
          );
        }, [t, r, n, o, l]);
        return (
          (0, i.useEffect)(() => {
            o && c({ currentTarget: l.target }, l.pointerType);
          }, [o]),
          { hoverProps: u, isHovered: s }
        );
      }
      function q(e) {
        let {
            ref: t,
            onInteractOutside: r,
            isDisabled: o,
            onInteractOutsideStart: s,
          } = e,
          a = (0, i.useRef)({
            isPointerDown: !1,
            ignoreEmulatedMouseEvents: !1,
          }),
          l = (0, n.iW)((e) => {
            r && J(e, t) && (s && s(e), (a.current.isPointerDown = !0));
          }),
          u = (0, n.iW)((e) => {
            r && r(e);
          });
        (0, i.useEffect)(() => {
          let e = a.current;
          if (!o) {
            if ("undefined" != typeof PointerEvent) {
              let r = (r) => {
                e.isPointerDown && J(r, t) && u(r), (e.isPointerDown = !1);
              };
              return (
                document.addEventListener("pointerdown", l, !0),
                document.addEventListener("pointerup", r, !0),
                () => {
                  document.removeEventListener("pointerdown", l, !0),
                    document.removeEventListener("pointerup", r, !0);
                }
              );
            }
            {
              let r = (r) => {
                  e.ignoreEmulatedMouseEvents
                    ? (e.ignoreEmulatedMouseEvents = !1)
                    : e.isPointerDown && J(r, t) && u(r),
                    (e.isPointerDown = !1);
                },
                n = (r) => {
                  (e.ignoreEmulatedMouseEvents = !0),
                    e.isPointerDown && J(r, t) && u(r),
                    (e.isPointerDown = !1);
                };
              return (
                document.addEventListener("mousedown", l, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("touchstart", l, !0),
                document.addEventListener("touchend", n, !0),
                () => {
                  document.removeEventListener("mousedown", l, !0),
                    document.removeEventListener("mouseup", r, !0),
                    document.removeEventListener("touchstart", l, !0),
                    document.removeEventListener("touchend", n, !0);
                }
              );
            }
          }
        }, [t, o, l, u]);
      }
      function J(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
          let t = e.target.ownerDocument;
          if (
            !t ||
            !t.documentElement.contains(e.target) ||
            e.target.closest("[data-react-aria-top-layer]")
          )
            return !1;
        }
        return t.current && !t.current.contains(e.target);
      }
      function Q(e) {
        if (!e) return;
        let t = !0;
        return (r) => {
          e({
            ...r,
            preventDefault() {
              r.preventDefault();
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              console.error(
                "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
              );
            },
            continuePropagation() {
              t = !1;
            },
          }),
            t && r.stopPropagation();
        };
      }
      function ee(e) {
        return {
          keyboardProps: e.isDisabled
            ? {}
            : { onKeyDown: Q(e.onKeyDown), onKeyUp: Q(e.onKeyUp) },
        };
      }
    },
    324: function (e, t, r) {
      r.d(t, {
        U4: function () {
          return X;
        },
        aV: function () {
          return te;
        },
        Xj: function () {
          return Y;
        },
        RP: function () {
          return Q;
        },
        Ir: function () {
          return H;
        },
        Bq: function () {
          return re;
        },
        tN: function () {
          return z;
        },
      });
      var n = r(7294),
        i = r(5897),
        o = r(768),
        s = r(6769);
      let a = class {
          getStringForLocale(e, t) {
            let r = this.strings[t];
            r ||
              ((r = (function (e, t, r = "en-US") {
                if (t[e]) return t[e];
                let n = Intl.Locale
                  ? new Intl.Locale(e).language
                  : e.split("-")[0];
                if (t[n]) return t[n];
                for (let e in t) if (e.startsWith(n + "-")) return t[e];
                return t[r];
              })(t, this.strings, this.defaultLocale)),
              (this.strings[t] = r));
            let n = r[e];
            if (!n)
              throw Error(`Could not find intl message ${e} in ${t} locale`);
            return n;
          }
          constructor(e, t = "en-US") {
            (this.strings = { ...e }), (this.defaultLocale = t);
          }
        },
        l = new Map(),
        u = new Map(),
        c = class {
          format(e, t) {
            let r = this.strings.getStringForLocale(e, this.locale);
            return "function" == typeof r ? r(t, this) : r;
          }
          plural(e, t, r = "cardinal") {
            let n = t["=" + e];
            if (n) return "function" == typeof n ? n() : n;
            let i = this.locale + ":" + r,
              o = l.get(i);
            return (
              o ||
                ((o = new Intl.PluralRules(this.locale, { type: r })),
                l.set(i, o)),
              "function" == typeof (n = t[o.select(e)] || t.other) ? n() : n
            );
          }
          number(e) {
            let t = u.get(this.locale);
            return (
              t ||
                ((t = new Intl.NumberFormat(this.locale)),
                u.set(this.locale, t)),
              t.format(e)
            );
          }
          select(e, t) {
            let r = e[t] || e.other;
            return "function" == typeof r ? r() : r;
          }
          constructor(e, t) {
            (this.locale = e), (this.strings = t);
          }
        },
        d = new Set([
          "Arab",
          "Syrc",
          "Samr",
          "Mand",
          "Thaa",
          "Mend",
          "Nkoo",
          "Adlm",
          "Rohg",
          "Hebr",
        ]),
        p = new Set([
          "ae",
          "ar",
          "arc",
          "bcc",
          "bqi",
          "ckb",
          "dv",
          "fa",
          "glk",
          "he",
          "ku",
          "mzn",
          "nqo",
          "pnb",
          "ps",
          "sd",
          "ug",
          "ur",
          "yi",
        ]);
      function h() {
        let e =
          ("undefined" != typeof navigator &&
            (navigator.language || navigator.userLanguage)) ||
          "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e]);
        } catch (t) {
          e = "en-US";
        }
        return {
          locale: e,
          direction: (function (e) {
            if (Intl.Locale) {
              let t = new Intl.Locale(e).maximize().script;
              return d.has(t);
            }
            let t = e.split("-")[0];
            return p.has(t);
          })(e)
            ? "rtl"
            : "ltr",
        };
      }
      let f = h(),
        m = new Set();
      function g() {
        for (let e of ((f = h()), m)) e(f);
      }
      let v = n.createContext(null);
      function y() {
        let e = (function () {
          let e = (0, s.Av)(),
            [t, r] = (0, n.useState)(f);
          return (
            (0, n.useEffect)(
              () => (
                0 === m.size && window.addEventListener("languagechange", g),
                m.add(r),
                () => {
                  m.delete(r),
                    0 === m.size &&
                      window.removeEventListener("languagechange", g);
                }
              ),
              []
            ),
            e ? { locale: "en-US", direction: "ltr" } : t
          );
        })();
        return (0, n.useContext)(v) || e;
      }
      let b = new WeakMap();
      var x = r(8628),
        w = r(6644),
        E = r(3935);
      let P = {
        border: 0,
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
      };
      function T(e) {
        let {
            children: t,
            elementType: r = "div",
            isFocusable: i,
            style: s,
            ...a
          } = e,
          { visuallyHiddenProps: l } = (function (e = {}) {
            let { style: t, isFocusable: r } = e,
              [i, o] = (0, n.useState)(!1),
              { focusWithinProps: s } = (0, w.L_)({
                isDisabled: !r,
                onFocusWithinChange: (e) => o(e),
              });
            return {
              visuallyHiddenProps: {
                ...s,
                style: (0, n.useMemo)(
                  () => (i ? t : t ? { ...P, ...t } : P),
                  [i]
                ),
              },
            };
          })(e);
        return n.createElement(r, (0, o.dG)(a, l), t);
      }
      let S = { top: "top", bottom: "top", left: "left", right: "left" },
        C = { top: "bottom", bottom: "top", left: "right", right: "left" },
        k = { top: "left", left: "top" },
        M = { top: "height", left: "width" },
        A = { width: "totalWidth", height: "totalHeight" },
        L = {},
        R = "undefined" != typeof document && window.visualViewport;
      function D(e, t, r, n, i) {
        let o = document.scrollingElement || document.documentElement,
          s =
            "hidden" === window.getComputedStyle(o).overflow ? 0 : n.scroll[e],
          a = n[M[e]],
          l = t - i - s,
          u = t + i - s + r;
        return l < 0 ? -l : u > a ? Math.max(a - u, -l) : 0;
      }
      function V(e) {
        if (L[e]) return L[e];
        let [t, r] = e.split(" "),
          n = S[t] || "right",
          i = k[n];
        S[r] || (r = "center");
        let o = M[n],
          s = M[i];
        return (
          (L[e] = {
            placement: t,
            crossPlacement: r,
            axis: n,
            crossAxis: i,
            size: o,
            crossSize: s,
          }),
          L[e]
        );
      }
      function F(e, t, r, n, o, s, a, l, u, c) {
        let {
            placement: d,
            crossPlacement: p,
            axis: h,
            crossAxis: f,
            size: m,
            crossSize: g,
          } = n,
          v = {};
        (v[f] = e[f]),
          "center" === p
            ? (v[f] += (e[g] - r[g]) / 2)
            : p !== f && (v[f] += e[g] - r[g]),
          (v[f] += s);
        let y = e[f] - r[g] + u + c,
          b = e[f] + e[g] - u - c;
        if (((v[f] = (0, i.uZ)(v[f], y, b)), d === h)) {
          let r = l ? a[m] : t[A[m]];
          v[C[h]] = Math.floor(r - e[h] + o);
        } else v[h] = Math.floor(e[h] + e[m] + o);
        return v;
      }
      function O(e, t, r, n, i, o) {
        let { placement: s, axis: a, size: l } = o;
        return s === a
          ? Math.max(0, r[a] - e[a] - e.scroll[a] + t[a] - n[a] - n[C[a]] - i)
          : Math.max(
              0,
              e[l] +
                e[a] +
                e.scroll[a] -
                t[a] -
                r[a] -
                r[l] -
                n[a] -
                n[C[a]] -
                i
            );
      }
      function j(e) {
        let {
            top: t,
            left: r,
            width: n,
            height: i,
          } = e.getBoundingClientRect(),
          {
            scrollTop: o,
            scrollLeft: s,
            clientTop: a,
            clientLeft: l,
          } = document.documentElement;
        return { top: t + o - a, left: r + s - l, width: n, height: i };
      }
      function N(e, t) {
        let r,
          n = window.getComputedStyle(e);
        if ("fixed" === n.position) {
          let {
            top: t,
            left: n,
            width: i,
            height: o,
          } = e.getBoundingClientRect();
          r = { top: t, left: n, width: i, height: o };
        } else {
          r = j(e);
          let n = j(t),
            i = window.getComputedStyle(t);
          (n.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop),
            (n.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft),
            (r.top -= n.top),
            (r.left -= n.left);
        }
        return (
          (r.top -= parseInt(n.marginTop, 10) || 0),
          (r.left -= parseInt(n.marginLeft, 10) || 0),
          r
        );
      }
      function I(e) {
        let t = window.getComputedStyle(e);
        return (
          "none" !== t.transform ||
          /transform|perspective/.test(t.willChange) ||
          "none" !== t.filter ||
          "paint" === t.contain ||
          ("backdropFilter" in t && "none" !== t.backdropFilter) ||
          ("WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter)
        );
      }
      let B = new WeakMap(),
        W = "undefined" != typeof document && window.visualViewport;
      function z(e) {
        let { direction: t } = y(),
          {
            arrowSize: r = 0,
            targetRef: s,
            overlayRef: a,
            scrollRef: l = a,
            placement: u = "bottom",
            containerPadding: c = 12,
            shouldFlip: d = !0,
            boundaryElement: p = "undefined" != typeof document
              ? document.body
              : null,
            offset: h = 0,
            crossOffset: f = 0,
            shouldUpdatePosition: m = !0,
            isOpen: g = !0,
            onClose: v,
            maxHeight: b,
            arrowBoundaryOffset: x = 0,
          } = e,
          [w, E] = (0, n.useState)({
            position: {},
            arrowOffsetLeft: void 0,
            arrowOffsetTop: void 0,
            maxHeight: void 0,
            placement: void 0,
          }),
          P = [
            m,
            u,
            a.current,
            s.current,
            l.current,
            c,
            d,
            p,
            h,
            f,
            g,
            t,
            b,
            x,
            r,
          ],
          T = (0, n.useCallback)(() => {
            if (!(!1 !== m && g && a.current && s.current && l.current && p))
              return;
            let e = (function (e) {
              let t,
                {
                  placement: r,
                  targetNode: n,
                  overlayNode: o,
                  scrollNode: s,
                  padding: a,
                  shouldFlip: l,
                  boundaryElement: u,
                  offset: c,
                  crossOffset: d,
                  maxHeight: p,
                  arrowSize: h = 0,
                  arrowBoundaryOffset: f = 0,
                } = e,
                m =
                  o instanceof HTMLElement
                    ? (function (e) {
                        let t = e.offsetParent;
                        if (
                          (t &&
                            t === document.body &&
                            "static" === window.getComputedStyle(t).position &&
                            !I(t) &&
                            (t = document.documentElement),
                          null == t)
                        )
                          for (t = e.parentElement; t && !I(t); )
                            t = t.parentElement;
                        return t || document.documentElement;
                      })(o)
                    : document.documentElement,
                g = m === document.documentElement,
                v = window.getComputedStyle(m).position,
                y = g ? j(n) : N(n, m);
              if (!g) {
                let { marginTop: e, marginLeft: t } =
                  window.getComputedStyle(n);
                (y.top += parseInt(e, 10) || 0),
                  (y.left += parseInt(t, 10) || 0);
              }
              let b = j(o),
                x = {
                  top:
                    parseInt((t = window.getComputedStyle(o)).marginTop, 10) ||
                    0,
                  bottom: parseInt(t.marginBottom, 10) || 0,
                  left: parseInt(t.marginLeft, 10) || 0,
                  right: parseInt(t.marginRight, 10) || 0,
                };
              return (
                (b.width += x.left + x.right),
                (b.height += x.top + x.bottom),
                (function (e, t, r, n, o, s, a, l, u, c, d, p, h, f, m) {
                  var g;
                  let v = V(e),
                    {
                      size: y,
                      crossAxis: b,
                      crossSize: x,
                      placement: w,
                      crossPlacement: E,
                    } = v,
                    P = F(t, l, r, v, c, d, u, p, f, m),
                    T = c,
                    S = O(l, u, t, o, s + c, v);
                  if (a && n[y] > S) {
                    let e = V(`${C[w]} ${E}`),
                      n = F(t, l, r, e, c, d, u, p, f, m);
                    O(l, u, t, o, s + c, e) > S && ((v = e), (P = n), (T = c));
                  }
                  let k = D(b, P[b], r[x], l, s);
                  P[b] += k;
                  let M =
                    null != (g = P).top
                      ? Math.max(
                          0,
                          l.height +
                            l.top +
                            l.scroll.top -
                            (u.top + g.top) -
                            (o.top + o.bottom + s)
                        )
                      : Math.max(
                          0,
                          t.top +
                            u.top -
                            (l.top + l.scroll.top) -
                            (o.top + o.bottom + s)
                        );
                  h && h < M && (M = h),
                    (r.height = Math.min(r.height, M)),
                    (k = D(
                      b,
                      (P = F(t, l, r, v, T, d, u, p, f, m))[b],
                      r[x],
                      l,
                      s
                    )),
                    (P[b] += k);
                  let A = {},
                    L = t[b] + 0.5 * t[x] - r[b],
                    R = f / 2 + m,
                    j = r[x] - f / 2 - m,
                    N = t[b] - r[b] + f / 2,
                    I = t[b] + t[x] - r[b] - f / 2,
                    B = (0, i.uZ)(L, N, I);
                  return (
                    (A[b] = (0, i.uZ)(B, R, j)),
                    {
                      position: P,
                      maxHeight: M,
                      arrowOffsetLeft: A.left,
                      arrowOffsetTop: A.top,
                      placement: v.placement,
                    }
                  );
                })(
                  r,
                  y,
                  b,
                  {
                    top: s.scrollTop,
                    left: s.scrollLeft,
                    width: s.scrollWidth,
                    height: s.scrollHeight,
                  },
                  x,
                  a,
                  l,
                  (function (e) {
                    let t = 0,
                      r = 0,
                      n = 0,
                      i = 0,
                      o = 0,
                      s = 0,
                      a = {};
                    if ("BODY" === e.tagName) {
                      var l, u;
                      let o = document.documentElement;
                      (n = o.clientWidth),
                        (i = o.clientHeight),
                        (t =
                          null !== (l = null == R ? void 0 : R.width) &&
                          void 0 !== l
                            ? l
                            : n),
                        (r =
                          null !== (u = null == R ? void 0 : R.height) &&
                          void 0 !== u
                            ? u
                            : i),
                        (a.top = o.scrollTop || e.scrollTop),
                        (a.left = o.scrollLeft || e.scrollLeft);
                    } else
                      ({ width: t, height: r, top: o, left: s } = j(e)),
                        (a.top = e.scrollTop),
                        (a.left = e.scrollLeft),
                        (n = t),
                        (i = r);
                    return {
                      width: t,
                      height: r,
                      totalWidth: n,
                      totalHeight: i,
                      scroll: a,
                      top: o,
                      left: s,
                    };
                  })(u),
                  "BODY" === u.tagName ? j(m) : N(m, u),
                  c,
                  d,
                  !!v && "static" !== v,
                  p,
                  h,
                  f
                )
              );
            })({
              placement:
                "rtl" === t
                  ? u.replace("start", "right").replace("end", "left")
                  : u.replace("start", "left").replace("end", "right"),
              overlayNode: a.current,
              targetNode: s.current,
              scrollNode: l.current,
              padding: c,
              shouldFlip: d,
              boundaryElement: p,
              offset: h,
              crossOffset: f,
              maxHeight: b,
              arrowSize: r,
              arrowBoundaryOffset: x,
            });
            Object.keys(e.position).forEach(
              (t) => (a.current.style[t] = e.position[t] + "px")
            ),
              (a.current.style.maxHeight =
                null != e.maxHeight ? e.maxHeight + "px" : void 0),
              E(e);
          }, P);
        (0, o.bt)(T, P),
          (0, o.bt)(
            () => (
              window.addEventListener("resize", T, !1),
              () => {
                window.removeEventListener("resize", T, !1);
              }
            ),
            [T]
          ),
          (0, o.yU)({ ref: a, onResize: T });
        let S = (0, n.useRef)(!1);
        (0, o.bt)(() => {
          let e,
            t = () => {
              (S.current = !0),
                clearTimeout(e),
                (e = setTimeout(() => {
                  S.current = !1;
                }, 500)),
                T();
            };
          return (
            null == W || W.addEventListener("resize", t),
            null == W || W.addEventListener("scroll", t),
            () => {
              null == W || W.removeEventListener("resize", t),
                null == W || W.removeEventListener("scroll", t);
            }
          );
        }, [T]);
        let k = (0, n.useCallback)(() => {
          S.current || v();
        }, [v, S]);
        return (
          (function (e) {
            let { triggerRef: t, isOpen: r, onClose: i } = e;
            (0, n.useEffect)(() => {
              if (!r || null === i) return;
              let e = (e) => {
                let r = e.target;
                if (!t.current || (r instanceof Node && !r.contains(t.current)))
                  return;
                let n = i || B.get(t.current);
                n && n();
              };
              return (
                window.addEventListener("scroll", e, !0),
                () => {
                  window.removeEventListener("scroll", e, !0);
                }
              );
            }, [r, i, t]);
          })({ triggerRef: s, isOpen: g, onClose: v && k }),
          {
            overlayProps: {
              style: {
                position: "absolute",
                zIndex: 1e5,
                ...w.position,
                maxHeight: w.maxHeight,
              },
            },
            placement: w.placement,
            arrowProps: {
              "aria-hidden": "true",
              role: "presentation",
              style: { left: w.arrowOffsetLeft, top: w.arrowOffsetTop },
            },
            updatePosition: T,
          }
        );
      }
      let U = [];
      function H(e, t) {
        let {
          onClose: r,
          shouldCloseOnBlur: i,
          isOpen: o,
          isDismissable: s = !1,
          isKeyboardDismissDisabled: a = !1,
          shouldCloseOnInteractOutside: l,
        } = e;
        (0, n.useEffect)(
          () => (
            o && U.push(t),
            () => {
              let e = U.indexOf(t);
              e >= 0 && U.splice(e, 1);
            }
          ),
          [o, t]
        );
        let u = () => {
          U[U.length - 1] === t && r && r();
        };
        (0, w.Fc)({
          ref: t,
          onInteractOutside: s
            ? (e) => {
                (!l || l(e.target)) &&
                  (U[U.length - 1] === t &&
                    (e.stopPropagation(), e.preventDefault()),
                  u());
              }
            : null,
          onInteractOutsideStart: (e) => {
            (!l || l(e.target)) &&
              U[U.length - 1] === t &&
              (e.stopPropagation(), e.preventDefault());
          },
        });
        let { focusWithinProps: c } = (0, w.L_)({
          isDisabled: !i,
          onBlurWithin: (e) => {
            e.relatedTarget &&
              !(0, x.cW)(e.relatedTarget) &&
              (!l || l(e.relatedTarget)) &&
              r();
          },
        });
        return {
          overlayProps: {
            onKeyDown: (e) => {
              "Escape" !== e.key ||
                a ||
                (e.stopPropagation(), e.preventDefault(), u());
            },
            ...c,
          },
          underlayProps: {
            onPointerDown: (e) => {
              e.target === e.currentTarget && e.preventDefault();
            },
          },
        };
      }
      "undefined" != typeof document && window.visualViewport;
      let $ = n.createContext(null);
      function K(e) {
        let { children: t } = e,
          r = (0, n.useContext)($),
          [i, o] = (0, n.useState)(0),
          s = (0, n.useMemo)(
            () => ({
              parent: r,
              modalCount: i,
              addModal() {
                o((e) => e + 1), r && r.addModal();
              },
              removeModal() {
                o((e) => e - 1), r && r.removeModal();
              },
            }),
            [r, i]
          );
        return n.createElement($.Provider, { value: s }, t);
      }
      function G(e) {
        let t,
          { modalProviderProps: r } = {
            modalProviderProps: {
              "aria-hidden":
                (!!(t = (0, n.useContext)($)) && t.modalCount > 0) || null,
            },
          };
        return n.createElement("div", {
          "data-overlay-container": !0,
          ...e,
          ...r,
        });
      }
      function Z(e) {
        return n.createElement(K, null, n.createElement(G, e));
      }
      function Y(e) {
        let t = (0, s.Av)(),
          { portalContainer: r = t ? null : document.body, ...i } = e;
        if (
          (n.useEffect(() => {
            if (null == r ? void 0 : r.closest("[data-overlay-container]"))
              throw Error(
                "An OverlayContainer must not be inside another container. Please change the portalContainer prop."
              );
          }, [r]),
          !r)
        )
          return null;
        let o = n.createElement(Z, i);
        return E.createPortal(o, r);
      }
      var _ = {};
      function X(e) {
        var t;
        let { onDismiss: r, ...i } = e,
          s = (function (e) {
            let { locale: t } = y(),
              r = (0, n.useMemo)(() => {
                let t;
                return (t = b.get(e)) || ((t = new a(e)), b.set(e, t)), t;
              }, [e]);
            return (0, n.useMemo)(() => new c(t, r), [t, r]);
          })((t = _) && t.__esModule ? t.default : t),
          l = (0, o.bE)(i, s.format("dismiss"));
        return n.createElement(
          T,
          null,
          n.createElement("button", {
            ...l,
            tabIndex: -1,
            onClick: () => {
              r && r();
            },
          })
        );
      }
      _ = {
        "ar-AE": { dismiss: "تجاهل" },
        "bg-BG": { dismiss: "Отхвърляне" },
        "cs-CZ": { dismiss: "Odstranit" },
        "da-DK": { dismiss: "Luk" },
        "de-DE": { dismiss: "Schließen" },
        "el-GR": { dismiss: "Απόρριψη" },
        "en-US": { dismiss: "Dismiss" },
        "es-ES": { dismiss: "Descartar" },
        "et-EE": { dismiss: "Lõpeta" },
        "fi-FI": { dismiss: "Hylkää" },
        "fr-FR": { dismiss: "Rejeter" },
        "he-IL": { dismiss: "התעלם" },
        "hr-HR": { dismiss: "Odbaci" },
        "hu-HU": { dismiss: "Elutasítás" },
        "it-IT": { dismiss: "Ignora" },
        "ja-JP": { dismiss: "閉じる" },
        "ko-KR": { dismiss: "무시" },
        "lt-LT": { dismiss: "Atmesti" },
        "lv-LV": { dismiss: "Nerādīt" },
        "nb-NO": { dismiss: "Lukk" },
        "nl-NL": { dismiss: "Negeren" },
        "pl-PL": { dismiss: "Zignoruj" },
        "pt-BR": { dismiss: "Descartar" },
        "pt-PT": { dismiss: "Dispensar" },
        "ro-RO": { dismiss: "Revocare" },
        "ru-RU": { dismiss: "Пропустить" },
        "sk-SK": { dismiss: "Zrušiť" },
        "sl-SI": { dismiss: "Opusti" },
        "sr-SP": { dismiss: "Odbaci" },
        "sv-SE": { dismiss: "Avvisa" },
        "tr-TR": { dismiss: "Kapat" },
        "uk-UA": { dismiss: "Скасувати" },
        "zh-CN": { dismiss: "取消" },
        "zh-TW": { dismiss: "關閉" },
      };
      let q = new WeakMap(),
        J = [];
      function Q(e, t = document.body) {
        let r = new Set(e),
          n = new Set(),
          i = (e) => {
            for (let t of e.querySelectorAll(
              "[data-live-announcer], [data-react-aria-top-layer]"
            ))
              r.add(t);
            let t = (e) => {
                if (
                  r.has(e) ||
                  (n.has(e.parentElement) &&
                    "row" !== e.parentElement.getAttribute("role"))
                )
                  return NodeFilter.FILTER_REJECT;
                for (let t of r)
                  if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                return NodeFilter.FILTER_ACCEPT;
              },
              i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: t,
              }),
              s = t(e);
            if (
              (s === NodeFilter.FILTER_ACCEPT && o(e),
              s !== NodeFilter.FILTER_REJECT)
            ) {
              let e = i.nextNode();
              for (; null != e; ) o(e), (e = i.nextNode());
            }
          },
          o = (e) => {
            var t;
            let r = null !== (t = q.get(e)) && void 0 !== t ? t : 0;
            ("true" !== e.getAttribute("aria-hidden") || 0 !== r) &&
              (0 === r && e.setAttribute("aria-hidden", "true"),
              n.add(e),
              q.set(e, r + 1));
          };
        J.length && J[J.length - 1].disconnect(), i(t);
        let s = new MutationObserver((e) => {
          for (let t of e)
            if (
              "childList" === t.type &&
              0 !== t.addedNodes.length &&
              ![...r, ...n].some((e) => e.contains(t.target))
            ) {
              for (let e of t.removedNodes)
                e instanceof Element && (r.delete(e), n.delete(e));
              for (let e of t.addedNodes)
                !(e instanceof HTMLElement || e instanceof SVGElement) ||
                ("true" !== e.dataset.liveAnnouncer &&
                  "true" !== e.dataset.reactAriaTopLayer)
                  ? e instanceof Element && i(e)
                  : r.add(e);
            }
        });
        s.observe(t, { childList: !0, subtree: !0 });
        let a = {
          observe() {
            s.observe(t, { childList: !0, subtree: !0 });
          },
          disconnect() {
            s.disconnect();
          },
        };
        return (
          J.push(a),
          () => {
            for (let e of (s.disconnect(), n)) {
              let t = q.get(e);
              1 === t
                ? (e.removeAttribute("aria-hidden"), q.delete(e))
                : q.set(e, t - 1);
            }
            a === J[J.length - 1]
              ? (J.pop(), J.length && J[J.length - 1].observe())
              : J.splice(J.indexOf(a), 1);
          }
        );
      }
      let ee = n.createContext(null);
      function te(e) {
        let t,
          r = (0, s.Av)(),
          { portalContainer: i = r ? null : document.body, isExiting: o } = e,
          [a, l] = (0, n.useState)(!1),
          u = (0, n.useMemo)(() => ({ contain: a, setContain: l }), [a, l]);
        return i
          ? ((t = e.disableFocusManagement
              ? n.createElement(ee.Provider, { value: u }, e.children)
              : n.createElement(
                  ee.Provider,
                  { value: u },
                  n.createElement(
                    x.MT,
                    { restoreFocus: !0, contain: a && !o },
                    e.children
                  )
                )),
            E.createPortal(t, i))
          : null;
      }
      function re() {
        let e = (0, n.useContext)(ee),
          t = null == e ? void 0 : e.setContain;
        (0, o.bt)(() => {
          null == t || t(!0);
        }, [t]);
      }
    },
    6769: function (e, t, r) {
      r.d(t, {
        Av: function () {
          return h;
        },
        gP: function () {
          return u;
        },
      });
      var n = r(7294);
      let i = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
        o = n.createContext(i),
        s = n.createContext(!1),
        a = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        l = new WeakMap(),
        u =
          "function" == typeof n.useId
            ? function (e) {
                let t = n.useId(),
                  [r] = (0, n.useState)(h());
                return (
                  e || `${r ? "react-aria" : `react-aria${i.prefix}`}-${t}`
                );
              }
            : function (e) {
                let t = (0, n.useContext)(o);
                t !== i ||
                  a ||
                  console.warn(
                    "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
                  );
                let r = (function (e = !1) {
                    let t = (0, n.useContext)(o),
                      r = (0, n.useRef)(null);
                    if (null === r.current && !e) {
                      var i, s;
                      let e =
                        null ===
                          (i =
                            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) ||
                        void 0 === i ||
                        null === (s = i.ReactCurrentOwner) ||
                        void 0 === s
                          ? void 0
                          : s.current;
                      if (e) {
                        let r = l.get(e);
                        null == r
                          ? l.set(e, { id: t.current, state: e.memoizedState })
                          : e.memoizedState !== r.state &&
                            ((t.current = r.id), l.delete(e));
                      }
                      r.current = ++t.current;
                    }
                    return r.current;
                  })(!!e),
                  s = `react-aria${t.prefix}`;
                return e || `${s}-${r}`;
              };
      function c() {
        return !1;
      }
      function d() {
        return !0;
      }
      function p(e) {
        return () => {};
      }
      function h() {
        return "function" == typeof n.useSyncExternalStore
          ? n.useSyncExternalStore(p, c, d)
          : (0, n.useContext)(s);
      }
    },
    768: function (e, t, r) {
      r.d(t, {
        Ao: function () {
          return y;
        },
        Me: function () {
          return u;
        },
        QB: function () {
          return P;
        },
        V5: function () {
          return A;
        },
        Zj: function () {
          return D;
        },
        bE: function () {
          return S;
        },
        bt: function () {
          return s;
        },
        cr: function () {
          return V;
        },
        dG: function () {
          return p;
        },
        gn: function () {
          return L;
        },
        iW: function () {
          return a;
        },
        lE: function () {
          return k;
        },
        lq: function () {
          return h;
        },
        mp: function () {
          return c;
        },
        tS: function () {
          return d;
        },
        xi: function () {
          return T;
        },
        yU: function () {
          return C;
        },
        zL: function () {
          return v;
        },
      });
      var n = r(7294),
        i = r(6769),
        o = r(6010);
      let s = "undefined" != typeof document ? n.useLayoutEffect : () => {};
      function a(e) {
        let t = (0, n.useRef)(null);
        return (
          s(() => {
            t.current = e;
          }, [e]),
          (0, n.useCallback)((...e) => (0, t.current)(...e), [])
        );
      }
      let l = new Map();
      function u(e) {
        let [t, r] = (0, n.useState)(e),
          o = (0, n.useRef)(null),
          a = (0, i.gP)(t),
          u = (0, n.useCallback)((e) => {
            o.current = e;
          }, []);
        return (
          l.set(a, u),
          s(
            () => () => {
              l.delete(a);
            },
            [a]
          ),
          (0, n.useEffect)(() => {
            let e = o.current;
            e && ((o.current = null), r(e));
          }),
          a
        );
      }
      function c(e = []) {
        let t = u(),
          [r, i] = (function (e) {
            let [t, r] = (0, n.useState)(e),
              i = (0, n.useRef)(null),
              o = a(() => {
                let e = i.current.next();
                e.done ? (i.current = null) : t === e.value ? o() : r(e.value);
              });
            s(() => {
              i.current && o();
            });
            let l = a((e) => {
              (i.current = e(t)), o();
            });
            return [t, l];
          })(t),
          o = (0, n.useCallback)(() => {
            i(function* () {
              yield t, yield document.getElementById(t) ? t : void 0;
            });
          }, [t, i]);
        return s(o, [t, o, ...e]), r;
      }
      function d(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t);
        };
      }
      function p(...e) {
        let t = { ...e[0] };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              i = n[e];
            "function" == typeof r &&
            "function" == typeof i &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = d(r, i))
              : ("className" !== e && "UNSAFE_className" !== e) ||
                "string" != typeof r ||
                "string" != typeof i
              ? "id" === e && r && i
                ? (t.id = (function (e, t) {
                    if (e === t) return e;
                    let r = l.get(e);
                    if (r) return r(t), t;
                    let n = l.get(t);
                    return n ? (n(e), e) : t;
                  })(r, i))
                : (t[e] = void 0 !== i ? i : r)
              : (t[e] = (0, o.Z)(r, i));
          }
        }
        return t;
      }
      function h(...e) {
        return 1 === e.length
          ? e[0]
          : (t) => {
              for (let r of e)
                "function" == typeof r ? r(t) : null != r && (r.current = t);
            };
      }
      let f = new Set(["id"]),
        m = new Set([
          "aria-label",
          "aria-labelledby",
          "aria-describedby",
          "aria-details",
        ]),
        g = /^(data-.*)$/;
      function v(e, t = {}) {
        let { labelable: r, propNames: n } = t,
          i = {};
        for (let t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            (f.has(t) ||
              (r && m.has(t)) ||
              (null == n ? void 0 : n.has(t)) ||
              g.test(t)) &&
            (i[t] = e[t]);
        return i;
      }
      function y(e) {
        if (
          (function () {
            if (null == b) {
              b = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return (b = !0), !0;
                  },
                });
              } catch (e) {}
            }
            return b;
          })()
        )
          e.focus({ preventScroll: !0 });
        else {
          let t = (function (e) {
            for (
              var t = e.parentNode,
                r = [],
                n = document.scrollingElement || document.documentElement;
              t instanceof HTMLElement && t !== n;

            )
              (t.offsetHeight < t.scrollHeight ||
                t.offsetWidth < t.scrollWidth) &&
                r.push({
                  element: t,
                  scrollTop: t.scrollTop,
                  scrollLeft: t.scrollLeft,
                }),
                (t = t.parentNode);
            return (
              n instanceof HTMLElement &&
                r.push({
                  element: n,
                  scrollTop: n.scrollTop,
                  scrollLeft: n.scrollLeft,
                }),
              r
            );
          })(e);
          e.focus(),
            (function (e) {
              for (let { element: t, scrollTop: r, scrollLeft: n } of e)
                (t.scrollTop = r), (t.scrollLeft = n);
            })(t);
        }
      }
      let b = null,
        x = new Map(),
        w = new Set();
      function E() {
        if ("undefined" == typeof window) return;
        let e = (t) => {
          let r = x.get(t.target);
          if (
            r &&
            (r.delete(t.propertyName),
            0 === r.size &&
              (t.target.removeEventListener("transitioncancel", e),
              x.delete(t.target)),
            0 === x.size)
          ) {
            for (let e of w) e();
            w.clear();
          }
        };
        document.body.addEventListener("transitionrun", (t) => {
          let r = x.get(t.target);
          r ||
            ((r = new Set()),
            x.set(t.target, r),
            t.target.addEventListener("transitioncancel", e)),
            r.add(t.propertyName);
        }),
          document.body.addEventListener("transitionend", e);
      }
      function P(e) {
        requestAnimationFrame(() => {
          0 === x.size ? e() : w.add(e);
        });
      }
      function T() {
        let e = (0, n.useRef)(new Map()),
          t = (0, n.useCallback)((t, r, n, i) => {
            let o = (null == i ? void 0 : i.once)
              ? (...t) => {
                  e.current.delete(n), n(...t);
                }
              : n;
            e.current.set(n, { type: r, eventTarget: t, fn: o, options: i }),
              t.addEventListener(r, n, i);
          }, []),
          r = (0, n.useCallback)((t, r, n, i) => {
            var o;
            let s =
              (null === (o = e.current.get(n)) || void 0 === o
                ? void 0
                : o.fn) || n;
            t.removeEventListener(r, s, i), e.current.delete(n);
          }, []),
          i = (0, n.useCallback)(() => {
            e.current.forEach((e, t) => {
              r(e.eventTarget, e.type, t, e.options);
            });
          }, [r]);
        return (
          (0, n.useEffect)(() => i, [i]),
          {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: i,
          }
        );
      }
      function S(e, t) {
        let { id: r, "aria-label": n, "aria-labelledby": i } = e;
        return (
          (r = u(r)),
          i && n
            ? (i = [...new Set([r, ...i.trim().split(/\s+/)])].join(" "))
            : i && (i = i.trim().split(/\s+/).join(" ")),
          n || i || !t || (n = t),
          { id: r, "aria-label": n, "aria-labelledby": i }
        );
      }
      function C(e) {
        let { ref: t, onResize: r } = e;
        (0, n.useEffect)(() => {
          let e = null == t ? void 0 : t.current;
          if (e) {
            if (void 0 === window.ResizeObserver)
              return (
                window.addEventListener("resize", r, !1),
                () => {
                  window.removeEventListener("resize", r, !1);
                }
              );
            {
              let t = new window.ResizeObserver((e) => {
                e.length && r();
              });
              return (
                t.observe(e),
                () => {
                  e && t.unobserve(e);
                }
              );
            }
          }
        }, [r, t]);
      }
      function k(e, t) {
        s(() => {
          if (e && e.ref && t)
            return (
              (e.ref.current = t.current),
              () => {
                e.ref.current = null;
              }
            );
        }, [e, t]);
      }
      function M(e) {
        var t;
        return (
          "undefined" != typeof window &&
          null != window.navigator &&
          e.test(
            (null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.platform) || window.navigator.platform
          )
        );
      }
      function A() {
        return M(/^Mac/i);
      }
      function L() {
        return (
          M(/^iPhone/i) || M(/^iPad/i) || (A() && navigator.maxTouchPoints > 1)
        );
      }
      function R() {
        var e, t;
        return (
          (e = /Android/i),
          "undefined" != typeof window &&
            null != window.navigator &&
            ((null === (t = window.navigator.userAgentData) || void 0 === t
              ? void 0
              : t.brands.some((t) => e.test(t.brand))) ||
              e.test(window.navigator.userAgent))
        );
      }
      function D(e) {
        return (
          (0 === e.mozInputSource && !!e.isTrusted) ||
          (R() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      function V(e) {
        return (
          (!R() && 0 === e.width && 0 === e.height) ||
          (1 === e.width &&
            1 === e.height &&
            0 === e.pressure &&
            0 === e.detail &&
            "mouse" === e.pointerType)
        );
      }
      "undefined" != typeof document &&
        ("loading" !== document.readyState
          ? E()
          : document.addEventListener("DOMContentLoaded", E)),
        "undefined" != typeof document && window.visualViewport;
    },
    5698: function (e, t, r) {
      r.d(t, {
        d: function () {
          return o;
        },
      });
      var n = r(7294),
        i = r(5897);
      function o(e) {
        let [t, r] = (0, i.zk)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
          o = (0, n.useCallback)(() => {
            r(!0);
          }, [r]),
          s = (0, n.useCallback)(() => {
            r(!1);
          }, [r]),
          a = (0, n.useCallback)(() => {
            r(!t);
          }, [r, t]);
        return { isOpen: t, setOpen: r, open: o, close: s, toggle: a };
      }
    },
    5897: function (e, t, r) {
      r.d(t, {
        uZ: function () {
          return o;
        },
        zk: function () {
          return i;
        },
      });
      var n = r(7294);
      function i(e, t, r) {
        let [i, o] = (0, n.useState)(e || t),
          s = (0, n.useRef)(void 0 !== e),
          a = void 0 !== e;
        (0, n.useEffect)(() => {
          let e = s.current;
          e !== a &&
            console.warn(
              `WARN: A component changed from ${
                e ? "controlled" : "uncontrolled"
              } to ${a ? "controlled" : "uncontrolled"}.`
            ),
            (s.current = a);
        }, [a]);
        let l = a ? e : i,
          u = (0, n.useCallback)(
            (e, ...t) => {
              let n = (e, ...t) => {
                r && !Object.is(l, e) && r(e, ...t), a || (l = e);
              };
              "function" == typeof e
                ? (console.warn(
                    "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"
                  ),
                  o((r, ...i) => {
                    let o = e(a ? l : r, ...i);
                    return n(o, ...t), a ? r : o;
                  }))
                : (a || o(e), n(e, ...t));
            },
            [a, l, r]
          );
        return [l, u];
      }
      function o(e, t = -1 / 0, r = 1 / 0) {
        return Math.min(Math.max(e, t), r);
      }
    },
    1526: function (e, t, r) {
      r.d(t, {
        M: function () {
          return g;
        },
      });
      var n = r(7294),
        i = r(8868);
      function o() {
        let e = (0, n.useRef)(!1);
        return (
          (0, i.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var s = r(2074),
        a = r(240),
        l = r(6681);
      let u = class extends n.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      };
      function c({ children: e, isPresent: t }) {
        let r = (0, n.useId)(),
          i = (0, n.useRef)(null),
          o = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: e, height: n, top: s, left: a } = o.current;
            if (t || !i.current || !e || !n) return;
            i.current.dataset.motionPopId = r;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(
                  `\n          [data-motion-pop-id="${r}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${n}px !important;\n            top: ${s}px !important;\n            left: ${a}px !important;\n          }\n        `
                ),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [t]),
          n.createElement(
            u,
            { isPresent: t, childRef: i, sizeRef: o },
            n.cloneElement(e, { ref: i })
          )
        );
      }
      let d = ({
        children: e,
        initial: t,
        isPresent: r,
        onExitComplete: i,
        custom: o,
        presenceAffectsLayout: s,
        mode: u,
      }) => {
        let d = (0, l.h)(p),
          h = (0, n.useId)(),
          f = (0, n.useMemo)(
            () => ({
              id: h,
              initial: t,
              isPresent: r,
              custom: o,
              onExitComplete: (e) => {
                for (let t of (d.set(e, !0), d.values())) if (!t) return;
                i && i();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            s ? void 0 : [r]
          );
        return (
          (0, n.useMemo)(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [r]),
          n.useEffect(() => {
            r || d.size || !i || i();
          }, [r]),
          "popLayout" === u && (e = n.createElement(c, { isPresent: r }, e)),
          n.createElement(a.O.Provider, { value: f }, e)
        );
      };
      function p() {
        return new Map();
      }
      var h = r(5364),
        f = r(5487);
      let m = (e) => e.key || "",
        g = ({
          children: e,
          custom: t,
          initial: r = !0,
          onExitComplete: a,
          exitBeforeEnter: l,
          presenceAffectsLayout: u = !0,
          mode: c = "sync",
        }) => {
          var p;
          (0, f.k)(!l, "Replace exitBeforeEnter with mode='wait'");
          let g =
              (0, n.useContext)(h.p).forceRender ||
              (function () {
                let e = o(),
                  [t, r] = (0, n.useState)(0),
                  i = (0, n.useCallback)(() => {
                    e.current && r(t + 1);
                  }, [t]);
                return [(0, n.useCallback)(() => s.Wi.postRender(i), [i]), t];
              })()[0],
            v = o(),
            y = (function (e) {
              let t = [];
              return (
                n.Children.forEach(e, (e) => {
                  (0, n.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            b = y,
            x = (0, n.useRef)(new Map()).current,
            w = (0, n.useRef)(b),
            E = (0, n.useRef)(new Map()).current,
            P = (0, n.useRef)(!0);
          if (
            ((0, i.L)(() => {
              (P.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let r = m(e);
                    t.set(r, e);
                  });
                })(y, E),
                (w.current = b);
            }),
            (p = () => {
              (P.current = !0), E.clear(), x.clear();
            }),
            (0, n.useEffect)(() => () => p(), []),
            P.current)
          )
            return n.createElement(
              n.Fragment,
              null,
              b.map((e) =>
                n.createElement(
                  d,
                  {
                    key: m(e),
                    isPresent: !0,
                    initial: !!r && void 0,
                    presenceAffectsLayout: u,
                    mode: c,
                  },
                  e
                )
              )
            );
          b = [...b];
          let T = w.current.map(m),
            S = y.map(m),
            C = T.length;
          for (let e = 0; e < C; e++) {
            let t = T[e];
            -1 !== S.indexOf(t) || x.has(t) || x.set(t, void 0);
          }
          return (
            "wait" === c && x.size && (b = []),
            x.forEach((e, r) => {
              if (-1 !== S.indexOf(r)) return;
              let i = E.get(r);
              if (!i) return;
              let o = T.indexOf(r),
                s = e;
              s ||
                ((s = n.createElement(
                  d,
                  {
                    key: m(i),
                    isPresent: !1,
                    onExitComplete: () => {
                      E.delete(r), x.delete(r);
                      let e = w.current.findIndex((e) => e.key === r);
                      if ((w.current.splice(e, 1), !x.size)) {
                        if (((w.current = y), !1 === v.current)) return;
                        g(), a && a();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: u,
                    mode: c,
                  },
                  i
                )),
                x.set(r, s)),
                b.splice(o, 0, s);
            }),
            (b = b.map((e) => {
              let t = e.key;
              return x.has(t)
                ? e
                : n.createElement(
                    d,
                    {
                      key: m(e),
                      isPresent: !0,
                      presenceAffectsLayout: u,
                      mode: c,
                    },
                    e
                  );
            })),
            n.createElement(
              n.Fragment,
              null,
              x.size ? b : b.map((e) => (0, n.cloneElement)(e))
            )
          );
        };
    },
    5364: function (e, t, r) {
      r.d(t, {
        p: function () {
          return n;
        },
      });
      let n = (0, r(7294).createContext)({});
    },
    240: function (e, t, r) {
      r.d(t, {
        O: function () {
          return n;
        },
      });
      let n = (0, r(7294).createContext)(null);
    },
    2074: function (e, t, r) {
      r.d(t, {
        Pn: function () {
          return a;
        },
        Wi: function () {
          return s;
        },
        frameData: function () {
          return l;
        },
        S6: function () {
          return u;
        },
      });
      var n = r(1662);
      let i = class {
          constructor() {
            (this.order = []), (this.scheduled = new Set());
          }
          add(e) {
            if (!this.scheduled.has(e))
              return this.scheduled.add(e), this.order.push(e), !0;
          }
          remove(e) {
            let t = this.order.indexOf(e);
            -1 !== t && (this.order.splice(t, 1), this.scheduled.delete(e));
          }
          clear() {
            (this.order.length = 0), this.scheduled.clear();
          }
        },
        o = ["prepare", "read", "update", "preRender", "render", "postRender"],
        {
          schedule: s,
          cancel: a,
          state: l,
          steps: u,
        } = (function (e, t) {
          let r = !1,
            n = !0,
            s = { delta: 0, timestamp: 0, isProcessing: !1 },
            a = o.reduce(
              (e, t) => (
                (e[t] = (function (e) {
                  let t = new i(),
                    r = new i(),
                    n = 0,
                    o = !1,
                    s = !1,
                    a = new WeakSet(),
                    l = {
                      schedule: (e, i = !1, s = !1) => {
                        let l = s && o,
                          u = l ? t : r;
                        return (
                          i && a.add(e),
                          u.add(e) && l && o && (n = t.order.length),
                          e
                        );
                      },
                      cancel: (e) => {
                        r.remove(e), a.delete(e);
                      },
                      process: (i) => {
                        if (o) s = !0;
                        else {
                          if (
                            ((o = !0),
                            ([t, r] = [r, t]),
                            r.clear(),
                            (n = t.order.length))
                          )
                            for (let r = 0; r < n; r++) {
                              let n = t.order[r];
                              n(i), a.has(n) && (l.schedule(n), e());
                            }
                          (o = !1), s && ((s = !1), l.process(i));
                        }
                      },
                    };
                  return l;
                })(() => (r = !0))),
                e
              ),
              {}
            ),
            l = (e) => a[e].process(s),
            u = () => {
              let t = performance.now();
              (r = !1),
                (s.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(t - s.timestamp, 40), 1)),
                (s.timestamp = t),
                (s.isProcessing = !0),
                o.forEach(l),
                (s.isProcessing = !1),
                r && ((n = !1), e(u));
            },
            c = () => {
              (r = !0), (n = !0), s.isProcessing || e(u);
            },
            d = o.reduce((e, t) => {
              let n = a[t];
              return (
                (e[t] = (e, t = !1, i = !1) => (r || c(), n.schedule(e, t, i))),
                e
              );
            }, {});
          return {
            schedule: d,
            cancel: (e) => o.forEach((t) => a[t].cancel(e)),
            state: s,
            steps: a,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : n.Z
        );
    },
    2023: function (e, t, r) {
      let n;
      r.d(t, {
        E: function () {
          return ho;
        },
      });
      var i,
        o,
        s = r(7294);
      let a = (0, s.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: "never",
        }),
        l = (0, s.createContext)({});
      var u = r(240),
        c = r(8868);
      let d = (0, s.createContext)({ strict: !1 });
      function p(e) {
        return (
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function h(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      function f(e) {
        return "object" == typeof e && "function" == typeof e.start;
      }
      let m = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        g = ["initial", ...m];
      function v(e) {
        return f(e.animate) || g.some((t) => h(e[t]));
      }
      function y(e) {
        return !(!v(e) && !e.variants);
      }
      function b(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let x = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        w = {};
      for (let e in x) w[e] = { isEnabled: (t) => x[e].some((e) => !!t[e]) };
      var E = r(1741),
        P = r(5364);
      let T = (0, s.createContext)({}),
        S = Symbol.for("motionComponentSymbol"),
        C = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function k(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (C.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
        return !1;
      }
      let M = {},
        A = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        L = new Set(A);
      function R(e, { layout: t, layoutId: r }) {
        return (
          L.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!M[e] || "opacity" === e))
        );
      }
      let D = (e) => !(!e || !e.getVelocity),
        V = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        F = A.length,
        O = (e) => (t) => "string" == typeof t && t.startsWith(e),
        j = O("--"),
        N = O("var(--"),
        I = (e, t) => (t && "number" == typeof e ? t.transform(e) : e),
        B = (e, t, r) => Math.min(Math.max(r, e), t),
        W = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        z = { ...W, transform: (e) => B(0, 1, e) },
        U = { ...W, default: 1 },
        H = (e) => Math.round(1e5 * e) / 1e5,
        $ = /(-)?([\d]*\.?[\d])+/g,
        K =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        G =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function Z(e) {
        return "string" == typeof e;
      }
      let Y = (e) => ({
          test: (t) => Z(t) && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        _ = Y("deg"),
        X = Y("%"),
        q = Y("px"),
        J = Y("vh"),
        Q = Y("vw"),
        ee = {
          ...X,
          parse: (e) => X.parse(e) / 100,
          transform: (e) => X.transform(100 * e),
        },
        te = { ...W, transform: Math.round },
        re = {
          borderWidth: q,
          borderTopWidth: q,
          borderRightWidth: q,
          borderBottomWidth: q,
          borderLeftWidth: q,
          borderRadius: q,
          radius: q,
          borderTopLeftRadius: q,
          borderTopRightRadius: q,
          borderBottomRightRadius: q,
          borderBottomLeftRadius: q,
          width: q,
          maxWidth: q,
          height: q,
          maxHeight: q,
          size: q,
          top: q,
          right: q,
          bottom: q,
          left: q,
          padding: q,
          paddingTop: q,
          paddingRight: q,
          paddingBottom: q,
          paddingLeft: q,
          margin: q,
          marginTop: q,
          marginRight: q,
          marginBottom: q,
          marginLeft: q,
          rotate: _,
          rotateX: _,
          rotateY: _,
          rotateZ: _,
          scale: U,
          scaleX: U,
          scaleY: U,
          scaleZ: U,
          skew: _,
          skewX: _,
          skewY: _,
          distance: q,
          translateX: q,
          translateY: q,
          translateZ: q,
          x: q,
          y: q,
          z: q,
          perspective: q,
          transformPerspective: q,
          opacity: z,
          originX: ee,
          originY: ee,
          originZ: q,
          zIndex: te,
          fillOpacity: z,
          strokeOpacity: z,
          numOctaves: te,
        };
      function ne(e, t, r, n) {
        let { style: i, vars: o, transform: s, transformOrigin: a } = e,
          l = !1,
          u = !1,
          c = !0;
        for (let e in t) {
          let r = t[e];
          if (j(e)) {
            o[e] = r;
            continue;
          }
          let n = re[e],
            d = I(r, n);
          if (L.has(e)) {
            if (((l = !0), (s[e] = d), !c)) continue;
            r !== (n.default || 0) && (c = !1);
          } else e.startsWith("origin") ? ((u = !0), (a[e] = d)) : (i[e] = d);
        }
        if (
          (!t.transform &&
            (l || n
              ? (i.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: t = !0,
                    allowTransformNone: r = !0,
                  },
                  n,
                  i
                ) {
                  let o = "";
                  for (let t = 0; t < F; t++) {
                    let r = A[t];
                    if (void 0 !== e[r]) {
                      o += `${V[r] || r}(${e[r]}) `;
                    }
                  }
                  return (
                    t && !e.z && (o += "translateZ(0)"),
                    (o = o.trim()),
                    i ? (o = i(e, n ? "" : o)) : r && n && (o = "none"),
                    o
                  );
                })(e.transform, r, c, n))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = a;
          i.transformOrigin = `${e} ${t} ${r}`;
        }
      }
      let ie = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function oe(e, t, r) {
        for (let n in t) D(t[n]) || R(n, r) || (e[n] = t[n]);
      }
      function se(e, t, r) {
        let n = {},
          i = (function (e, t, r) {
            let n = {};
            return (
              oe(n, e.style || {}, e),
              Object.assign(
                n,
                (function ({ transformTemplate: e }, t, r) {
                  return (0, s.useMemo)(() => {
                    let n = {
                      style: {},
                      transform: {},
                      transformOrigin: {},
                      vars: {},
                    };
                    return (
                      ne(n, t, { enableHardwareAcceleration: !r }, e),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [t]);
                })(e, t, r)
              ),
              e.transformValues ? e.transformValues(n) : n
            );
          })(e, t, r);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((n.draggable = !1),
            (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
            (i.touchAction =
              !0 === e.drag ? "none" : "pan-" + ("x" === e.drag ? "y" : "x"))),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (n.tabIndex = 0),
          (n.style = i),
          n
        );
      }
      let ae = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function le(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          ae.has(e)
        );
      }
      let ue = (e) => !le(e);
      try {
        (i = require("@emotion/is-prop-valid").default) &&
          (ue = (e) => (e.startsWith("on") ? !le(e) : i(e)));
      } catch (e) {}
      function ce(e, t, r) {
        return "string" == typeof e ? e : q.transform(t + r * e);
      }
      let de = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        pe = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function he(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: n,
          originX: i,
          originY: o,
          pathLength: s,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        c,
        d,
        p
      ) {
        if ((ne(e, u, c, p), d))
          return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
        (e.attrs = e.style), (e.style = {});
        let { attrs: h, style: f, dimensions: m } = e;
        h.transform && (m && (f.transform = h.transform), delete h.transform),
          m &&
            (void 0 !== i || void 0 !== o || f.transform) &&
            (f.transformOrigin = (function (e, t, r) {
              return `${ce(t, e.x, e.width)} ${ce(r, e.y, e.height)}`;
            })(m, void 0 !== i ? i : 0.5, void 0 !== o ? o : 0.5)),
          void 0 !== t && (h.x = t),
          void 0 !== r && (h.y = r),
          void 0 !== n && (h.scale = n),
          void 0 !== s &&
            (function (e, t, r = 1, n = 0, i = !0) {
              e.pathLength = 1;
              let o = i ? de : pe;
              e[o.offset] = q.transform(-n);
              let s = q.transform(t),
                a = q.transform(r);
              e[o.array] = `${s} ${a}`;
            })(h, s, a, l, !1);
      }
      let fe = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
          attrs: {},
        }),
        me = (e) => "string" == typeof e && "svg" === e.toLowerCase();
      function ge(e, t, r, n) {
        let i = (0, s.useMemo)(() => {
          let r = {
            style: {},
            transform: {},
            transformOrigin: {},
            vars: {},
            attrs: {},
          };
          return (
            he(
              r,
              t,
              { enableHardwareAcceleration: !1 },
              me(n),
              e.transformTemplate
            ),
            { ...r.attrs, style: { ...r.style } }
          );
        }, [t]);
        if (e.style) {
          let t = {};
          oe(t, e.style, e), (i.style = { ...t, ...i.style });
        }
        return i;
      }
      let ve = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function ye(e, { style: t, vars: r }, n, i) {
        for (let o in (Object.assign(e.style, t, i && i.getProjectionStyles(n)),
        r))
          e.style.setProperty(o, r[o]);
      }
      let be = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function xe(e, t, r, n) {
        for (let r in (ye(e, t, void 0, n), t.attrs))
          e.setAttribute(be.has(r) ? r : ve(r), t.attrs[r]);
      }
      function we(e, t) {
        let { style: r } = e,
          n = {};
        for (let i in r)
          (D(r[i]) || (t.style && D(t.style[i])) || R(i, e)) && (n[i] = r[i]);
        return n;
      }
      function Ee(e, t) {
        let r = we(e, t);
        for (let n in e)
          if (D(e[n]) || D(t[n])) {
            r[
              -1 !== A.indexOf(n)
                ? "attr" + n.charAt(0).toUpperCase() + n.substring(1)
                : n
            ] = e[n];
          }
        return r;
      }
      function Pe(e, t, r, n = {}, i = {}) {
        return (
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          "string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t && (t = t(void 0 !== r ? r : e.custom, n, i)),
          t
        );
      }
      var Te = r(6681);
      let Se = (e) => Array.isArray(e),
        Ce = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        ke = (e) => (Se(e) ? e[e.length - 1] || 0 : e);
      function Me(e) {
        let t = D(e) ? e.get() : e;
        return Ce(t) ? t.toValue() : t;
      }
      let Ae = (e) => (t, r) => {
        let n = (0, s.useContext)(l),
          i = (0, s.useContext)(u.O),
          o = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: t,
                onMount: r,
              },
              n,
              i,
              o
            ) {
              let s = {
                latestValues: (function (e, t, r, n) {
                  let i = {},
                    o = n(e, {});
                  for (let e in o) i[e] = Me(o[e]);
                  let { initial: s, animate: a } = e,
                    l = v(e),
                    u = y(e);
                  t &&
                    u &&
                    !l &&
                    !1 !== e.inherit &&
                    (void 0 === s && (s = t.initial),
                    void 0 === a && (a = t.animate));
                  let c = !!r && !1 === r.initial;
                  c = c || !1 === s;
                  let d = c ? a : s;
                  if (d && "boolean" != typeof d && !f(d)) {
                    (Array.isArray(d) ? d : [d]).forEach((t) => {
                      let r = Pe(e, t);
                      if (!r) return;
                      let { transitionEnd: n, transition: o, ...s } = r;
                      for (let e in s) {
                        let t = s[e];
                        if (Array.isArray(t)) {
                          t = t[c ? t.length - 1 : 0];
                        }
                        null !== t && (i[e] = t);
                      }
                      for (let e in n) i[e] = n[e];
                    });
                  }
                  return i;
                })(n, i, o, e),
                renderState: t(),
              };
              return r && (s.mount = (e) => r(n, e, s)), s;
            })(e, t, n, i);
        return r ? o() : (0, Te.h)(o);
      };
      var Le = r(2074);
      let Re = {
          useVisualState: Ae({
            scrapeMotionValuesFromProps: Ee,
            createRenderState: fe,
            onMount: (e, t, { renderState: r, latestValues: n }) => {
              Le.Wi.read(() => {
                try {
                  r.dimensions =
                    "function" == typeof t.getBBox
                      ? t.getBBox()
                      : t.getBoundingClientRect();
                } catch (e) {
                  r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                Le.Wi.render(() => {
                  he(
                    r,
                    n,
                    { enableHardwareAcceleration: !1 },
                    me(t.tagName),
                    e.transformTemplate
                  ),
                    xe(t, r);
                });
            },
          }),
        },
        De = {
          useVisualState: Ae({
            scrapeMotionValuesFromProps: we,
            createRenderState: ie,
          }),
        };
      function Ve(e, t, r, n = { passive: !0 }) {
        return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
      }
      let Fe = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      function Oe(e, t = "page") {
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      let je = (e) => (t) => Fe(t) && e(t, Oe(t));
      function Ne(e, t, r, n) {
        return Ve(e, t, je(r), n);
      }
      let Ie = (e, t) => (r) => t(e(r)),
        Be = (...e) => e.reduce(Ie);
      function We(e) {
        let t = null;
        return () =>
          null === t &&
          ((t = e),
          () => {
            t = null;
          });
      }
      let ze = We("dragHorizontal"),
        Ue = We("dragVertical");
      function He(e) {
        let t = !1;
        if ("y" === e) t = Ue();
        else if ("x" === e) t = ze();
        else {
          let e = ze(),
            r = Ue();
          e && r
            ? (t = () => {
                e(), r();
              })
            : (e && e(), r && r());
        }
        return t;
      }
      function $e() {
        let e = He(!0);
        return !e || (e(), !1);
      }
      let Ke = class {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      };
      function Ge(e, t) {
        let r = "pointer" + (t ? "enter" : "leave"),
          n = "onHover" + (t ? "Start" : "End");
        return Ne(
          e.current,
          r,
          (r, i) => {
            if ("touch" === r.type || $e()) return;
            let o = e.getProps();
            e.animationState &&
              o.whileHover &&
              e.animationState.setActive("whileHover", t),
              o[n] && Le.Wi.update(() => o[n](r, i));
          },
          { passive: !e.getProps()[n] }
        );
      }
      let Ze = (e, t) => !!t && (e === t || Ze(e, t.parentElement));
      var Ye = r(1662);
      function _e(e, t) {
        if (!t) return;
        let r = new PointerEvent("pointer" + e);
        t(r, Oe(r));
      }
      let Xe = new WeakMap(),
        qe = new WeakMap(),
        Je = (e) => {
          let t = Xe.get(e.target);
          t && t(e);
        },
        Qe = (e) => {
          e.forEach(Je);
        },
        et = { some: 0, all: 1 };
      function tt(e, t) {
        if (!Array.isArray(t)) return !1;
        let r = t.length;
        if (r !== e.length) return !1;
        for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
        return !0;
      }
      function rt(e, t, r) {
        let n = e.getProps();
        return Pe(
          n,
          t,
          void 0 !== r ? r : n.custom,
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.get())), t;
          })(e),
          (function (e) {
            let t = {};
            return e.values.forEach((e, r) => (t[r] = e.getVelocity())), t;
          })(e)
        );
      }
      let nt = "data-" + ve("framerAppearId");
      var it = r(5487);
      let ot = (e) => 1e3 * e,
        st = (e) => e / 1e3,
        at = !1,
        lt = (e) => Array.isArray(e) && "number" == typeof e[0],
        ut = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`,
        ct = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ut([0, 0.65, 0.55, 1]),
          circOut: ut([0.55, 0, 1, 0.45]),
          backIn: ut([0.31, 0.01, 0.66, -0.59]),
          backOut: ut([0.33, 1.53, 0.69, 0.99]),
        },
        dt = (e, t, r) =>
          (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e;
      function pt(e, t, r, n) {
        if (e === t && r === n) return Ye.Z;
        let i = (t) =>
          (function (e, t, r, n, i) {
            let o,
              s,
              a = 0;
            do {
              (o = dt((s = t + (r - t) / 2), n, i) - e) > 0 ? (r = s) : (t = s);
            } while (Math.abs(o) > 1e-7 && ++a < 12);
            return s;
          })(t, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : dt(i(e), t, n));
      }
      let ht = pt(0.42, 0, 1, 1),
        ft = pt(0, 0, 0.58, 1),
        mt = pt(0.42, 0, 0.58, 1),
        gt = (e) => Array.isArray(e) && "number" != typeof e[0],
        vt = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        yt = (e) => (t) => 1 - e(1 - t),
        bt = (e) => 1 - Math.sin(Math.acos(e)),
        xt = yt(bt),
        wt = vt(xt),
        Et = pt(0.33, 1.53, 0.69, 0.99),
        Pt = yt(Et),
        Tt = vt(Pt),
        St = {
          linear: Ye.Z,
          easeIn: ht,
          easeInOut: mt,
          easeOut: ft,
          circIn: bt,
          circInOut: wt,
          circOut: xt,
          backIn: Pt,
          backInOut: Tt,
          backOut: Et,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * Pt(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        Ct = (e) => {
          if (Array.isArray(e)) {
            (0, it.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [t, r, n, i] = e;
            return pt(t, r, n, i);
          }
          return "string" == typeof e
            ? ((0, it.k)(void 0 !== St[e], `Invalid easing type '${e}'`), St[e])
            : e;
        },
        kt = (e, t) => (r) =>
          !!(
            (Z(r) && G.test(r) && r.startsWith(e)) ||
            (t && Object.prototype.hasOwnProperty.call(r, t))
          ),
        Mt = (e, t, r) => (n) => {
          if (!Z(n)) return n;
          let [i, o, s, a] = n.match($);
          return {
            [e]: parseFloat(i),
            [t]: parseFloat(o),
            [r]: parseFloat(s),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        At = { ...W, transform: (e) => Math.round(((e) => B(0, 255, e))(e)) },
        Lt = {
          test: kt("rgb", "red"),
          parse: Mt("red", "green", "blue"),
          transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            At.transform(e) +
            ", " +
            At.transform(t) +
            ", " +
            At.transform(r) +
            ", " +
            H(z.transform(n)) +
            ")",
        },
        Rt = {
          test: kt("#"),
          parse: function (e) {
            let t = "",
              r = "",
              n = "",
              i = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (n = e.substring(5, 7)),
                  (i = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (n = e.substring(3, 4)),
                  (i = e.substring(4, 5)),
                  (t += t),
                  (r += r),
                  (n += n),
                  (i += i)),
              {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1,
              }
            );
          },
          transform: Lt.transform,
        },
        Dt = {
          test: kt("hsl", "hue"),
          parse: Mt("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            X.transform(H(t)) +
            ", " +
            X.transform(H(r)) +
            ", " +
            H(z.transform(n)) +
            ")",
        },
        Vt = {
          test: (e) => Lt.test(e) || Rt.test(e) || Dt.test(e),
          parse: (e) =>
            Lt.test(e) ? Lt.parse(e) : Dt.test(e) ? Dt.parse(e) : Rt.parse(e),
          transform: (e) =>
            Z(e)
              ? e
              : e.hasOwnProperty("red")
              ? Lt.transform(e)
              : Dt.transform(e),
        },
        Ft = (e, t, r) => -r * e + r * t + e;
      function Ot(e, t, r) {
        return (
          r < 0 && (r += 1),
          r > 1 && (r -= 1),
          r < 1 / 6
            ? e + 6 * (t - e) * r
            : r < 0.5
            ? t
            : r < 2 / 3
            ? e + (t - e) * (2 / 3 - r) * 6
            : e
        );
      }
      let jt = (e, t, r) => {
          let n = e * e;
          return Math.sqrt(Math.max(0, r * (t * t - n) + n));
        },
        Nt = [Rt, Lt, Dt];
      function It(e) {
        let t = ((e) => Nt.find((t) => t.test(e)))(e);
        (0, it.k)(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = t.parse(e);
        return (
          t === Dt &&
            (r = (function ({ hue: e, saturation: t, lightness: r, alpha: n }) {
              (e /= 360), (r /= 100);
              let i = 0,
                o = 0,
                s = 0;
              if ((t /= 100)) {
                let n = r < 0.5 ? r * (1 + t) : r + t - r * t,
                  a = 2 * r - n;
                (i = Ot(a, n, e + 1 / 3)),
                  (o = Ot(a, n, e)),
                  (s = Ot(a, n, e - 1 / 3));
              } else i = o = s = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let Bt = (e, t) => {
          let r = It(e),
            n = It(t),
            i = { ...r };
          return (e) => (
            (i.red = jt(r.red, n.red, e)),
            (i.green = jt(r.green, n.green, e)),
            (i.blue = jt(r.blue, n.blue, e)),
            (i.alpha = Ft(r.alpha, n.alpha, e)),
            Lt.transform(i)
          );
        },
        Wt = {
          regex:
            /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
          countKey: "Vars",
          token: "${v}",
          parse: Ye.Z,
        },
        zt = { regex: K, countKey: "Colors", token: "${c}", parse: Vt.parse },
        Ut = { regex: $, countKey: "Numbers", token: "${n}", parse: W.parse };
      function Ht(e, { regex: t, countKey: r, token: n, parse: i }) {
        let o = e.tokenised.match(t);
        o &&
          ((e["num" + r] = o.length),
          (e.tokenised = e.tokenised.replace(t, n)),
          e.values.push(...o.map(i)));
      }
      function $t(e) {
        let t = e.toString(),
          r = {
            value: t,
            tokenised: t,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return r.value.includes("var(--") && Ht(r, Wt), Ht(r, zt), Ht(r, Ut), r;
      }
      function Kt(e) {
        return $t(e).values;
      }
      function Gt(e) {
        let { values: t, numColors: r, numVars: n, tokenised: i } = $t(e),
          o = t.length;
        return (e) => {
          let t = i;
          for (let i = 0; i < o; i++)
            t =
              i < n
                ? t.replace(Wt.token, e[i])
                : i < n + r
                ? t.replace(zt.token, Vt.transform(e[i]))
                : t.replace(Ut.token, H(e[i]));
          return t;
        };
      }
      let Zt = (e) => ("number" == typeof e ? 0 : e),
        Yt = {
          test: function (e) {
            var t, r;
            return (
              isNaN(e) &&
              Z(e) &&
              ((null === (t = e.match($)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (r = e.match(K)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: Kt,
          createTransformer: Gt,
          getAnimatableNone: function (e) {
            let t = Kt(e);
            return Gt(e)(t.map(Zt));
          },
        },
        _t = (e, t) => (r) => `${r > 0 ? t : e}`;
      function Xt(e, t) {
        return "number" == typeof e
          ? (r) => Ft(e, t, r)
          : Vt.test(e)
          ? Bt(e, t)
          : e.startsWith("var(")
          ? _t(e, t)
          : Qt(e, t);
      }
      let qt = (e, t) => {
          let r = [...e],
            n = r.length,
            i = e.map((e, r) => Xt(e, t[r]));
          return (e) => {
            for (let t = 0; t < n; t++) r[t] = i[t](e);
            return r;
          };
        },
        Jt = (e, t) => {
          let r = { ...e, ...t },
            n = {};
          for (let i in r)
            void 0 !== e[i] && void 0 !== t[i] && (n[i] = Xt(e[i], t[i]));
          return (e) => {
            for (let t in n) r[t] = n[t](e);
            return r;
          };
        },
        Qt = (e, t) => {
          let r = Yt.createTransformer(t),
            n = $t(e),
            i = $t(t);
          return n.numVars === i.numVars &&
            n.numColors === i.numColors &&
            n.numNumbers >= i.numNumbers
            ? Be(qt(n.values, i.values), r)
            : ((0, it.K)(
                !0,
                `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              _t(e, t));
        },
        er = (e, t, r) => {
          let n = t - e;
          return 0 === n ? 1 : (r - e) / n;
        },
        tr = (e, t) => (r) => Ft(e, t, r);
      function rr(e, t, { clamp: r = !0, ease: n, mixer: i } = {}) {
        let o = e.length;
        if (
          ((0, it.k)(
            o === t.length,
            "Both input and output ranges must be the same length"
          ),
          1 === o)
        )
          return () => t[0];
        e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
        let s = (function (e, t, r) {
            let n = [],
              i =
                r ||
                (function (e) {
                  if ("number" == typeof e);
                  else {
                    if ("string" == typeof e) return Vt.test(e) ? Bt : Qt;
                    if (Array.isArray(e)) return qt;
                    if ("object" == typeof e) return Jt;
                  }
                  return tr;
                })(e[0]),
              o = e.length - 1;
            for (let r = 0; r < o; r++) {
              let o = i(e[r], e[r + 1]);
              if (t) {
                let e = Array.isArray(t) ? t[r] || Ye.Z : t;
                o = Be(e, o);
              }
              n.push(o);
            }
            return n;
          })(t, n, i),
          a = s.length,
          l = (t) => {
            let r = 0;
            if (a > 1) for (; r < e.length - 2 && !(t < e[r + 1]); r++);
            let n = er(e[r], e[r + 1], t);
            return s[r](n);
          };
        return r ? (t) => l(B(e[0], e[o - 1], t)) : l;
      }
      function nr({
        duration: e = 300,
        keyframes: t,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = gt(n) ? n.map(Ct) : Ct(n),
          o = { done: !1, value: t[0] },
          s = (
            r && r.length === t.length
              ? r
              : (function (e) {
                  let t = [0];
                  return (
                    (function (e, t) {
                      let r = e[e.length - 1];
                      for (let n = 1; n <= t; n++) {
                        let i = er(0, t, n);
                        e.push(Ft(r, 1, i));
                      }
                    })(t, e.length - 1),
                    t
                  );
                })(t)
          ).map((t) => t * e),
          a = rr(s, t, {
            ease: Array.isArray(i)
              ? i
              : t.map(() => i || mt).splice(0, t.length - 1),
          });
        return {
          calculatedDuration: e,
          next: (t) => ((o.value = a(t)), (o.done = t >= e), o),
        };
      }
      function ir(e, t, r) {
        var n, i;
        let o = Math.max(t - 5, 0);
        return (n = r - e(o)), (i = t - o) ? n * (1e3 / i) : 0;
      }
      function or(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      let sr = ["duration", "bounce"],
        ar = ["stiffness", "damping", "mass"];
      function lr(e, t) {
        return t.some((t) => void 0 !== e[t]);
      }
      function ur({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
        let i,
          o = e[0],
          s = e[e.length - 1],
          a = { done: !1, value: o },
          {
            stiffness: l,
            damping: u,
            mass: c,
            velocity: d,
            duration: p,
            isResolvedFromDuration: h,
          } = (function (e) {
            let t = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!lr(e, ar) && lr(e, sr)) {
              let r = (function ({
                duration: e = 800,
                bounce: t = 0.25,
                velocity: r = 0,
                mass: n = 1,
              }) {
                let i, o;
                (0, it.K)(
                  e <= ot(10),
                  "Spring duration must be 10 seconds or less"
                );
                let s = 1 - t;
                (s = B(0.05, 1, s)),
                  (e = B(0.01, 10, st(e))),
                  s < 1
                    ? ((i = (t) => {
                        let n = t * s,
                          i = n * e,
                          o = or(t, s);
                        return 0.001 - ((n - r) / o) * Math.exp(-i);
                      }),
                      (o = (t) => {
                        let n = t * s * e,
                          o = Math.pow(s, 2) * Math.pow(t, 2) * e,
                          a = or(Math.pow(t, 2), s);
                        return (
                          ((0.001 - i(t) > 0 ? -1 : 1) *
                            ((n * r + r - o) * Math.exp(-n))) /
                          a
                        );
                      }))
                    : ((i = (t) =>
                        Math.exp(-t * e) * ((t - r) * e + 1) - 0.001),
                      (o = (t) => Math.exp(-t * e) * (e * e * (r - t))));
                let a = (function (e, t, r) {
                  let n = r;
                  for (let r = 1; r < 12; r++) n -= e(n) / t(n);
                  return n;
                })(i, o, 5 / e);
                if (((e = ot(e)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let t = Math.pow(a, 2) * n;
                  return {
                    stiffness: t,
                    damping: 2 * s * Math.sqrt(n * t),
                    duration: e,
                  };
                }
              })(e);
              (t = {
                ...t,
                ...r,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return t;
          })(n),
          f = d ? -st(d) : 0,
          m = u / (2 * Math.sqrt(l * c)),
          g = s - o,
          v = st(Math.sqrt(l / c)),
          y = 5 > Math.abs(g);
        if ((r || (r = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5), m < 1)) {
          let e = or(v, m);
          i = (t) => {
            let r = Math.exp(-m * v * t);
            return (
              s -
              r *
                (((f + m * v * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
            );
          };
        } else if (1 === m)
          i = (e) => s - Math.exp(-v * e) * (g + (f + v * g) * e);
        else {
          let e = v * Math.sqrt(m * m - 1);
          i = (t) => {
            let r = Math.exp(-m * v * t),
              n = Math.min(e * t, 300);
            return (
              s -
              (r * ((f + m * v * g) * Math.sinh(n) + e * g * Math.cosh(n))) / e
            );
          };
        }
        return {
          calculatedDuration: (h && p) || null,
          next: (e) => {
            let n = i(e);
            if (h) a.done = e >= p;
            else {
              let o = f;
              0 !== e && (o = m < 1 ? ir(i, e, n) : 0);
              let l = Math.abs(o) <= r,
                u = Math.abs(s - n) <= t;
              a.done = l && u;
            }
            return (a.value = a.done ? s : n), a;
          },
        };
      }
      function cr({
        keyframes: e,
        velocity: t = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: o = 500,
        modifyTarget: s,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d,
          p,
          h = e[0],
          f = { done: !1, value: h },
          m = (e) =>
            void 0 === a
              ? l
              : void 0 === l || Math.abs(a - e) < Math.abs(l - e)
              ? a
              : l,
          g = r * t,
          v = h + g,
          y = void 0 === s ? v : s(v);
        y !== v && (g = y - h);
        let b = (e) => -g * Math.exp(-e / n),
          x = (e) => y + b(e),
          w = (e) => {
            let t = b(e),
              r = x(e);
            (f.done = Math.abs(t) <= u), (f.value = f.done ? y : r);
          },
          E = (e) => {
            ((e) => (void 0 !== a && e < a) || (void 0 !== l && e > l))(
              f.value
            ) &&
              ((d = e),
              (p = ur({
                keyframes: [f.value, m(f.value)],
                velocity: ir(x, e, f.value),
                damping: i,
                stiffness: o,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          E(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let t = !1;
              return (
                p || void 0 !== d || ((t = !0), w(e), E(e)),
                void 0 !== d && e > d ? p.next(e - d) : (t || w(e), f)
              );
            },
          }
        );
      }
      let dr = (e) => {
        let t = ({ timestamp: t }) => e(t);
        return {
          start: () => Le.Wi.update(t, !0),
          stop: () => (0, Le.Pn)(t),
          now: () =>
            Le.frameData.isProcessing
              ? Le.frameData.timestamp
              : performance.now(),
        };
      };
      function pr(e) {
        let t = 0,
          r = e.next(t);
        for (; !r.done && t < 2e4; ) (t += 50), (r = e.next(t));
        return t >= 2e4 ? 1 / 0 : t;
      }
      let hr = { decay: cr, inertia: cr, tween: nr, keyframes: nr, spring: ur };
      function fr({
        autoplay: e = !0,
        delay: t = 0,
        driver: r = dr,
        keyframes: n,
        type: i = "keyframes",
        repeat: o = 0,
        repeatDelay: s = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: d,
        ...p
      }) {
        let h,
          f,
          m,
          g,
          v,
          y = 1,
          b = !1,
          x = () => {
            f = new Promise((e) => {
              h = e;
            });
          };
        x();
        let w = hr[i] || nr;
        w !== nr &&
          "number" != typeof n[0] &&
          ((g = rr([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let E = w({ ...p, keyframes: n });
        "mirror" === a &&
          (v = w({
            ...p,
            keyframes: [...n].reverse(),
            velocity: -(p.velocity || 0),
          }));
        let P = "idle",
          T = null,
          S = null,
          C = null;
        null === E.calculatedDuration && o && (E.calculatedDuration = pr(E));
        let { calculatedDuration: k } = E,
          M = 1 / 0,
          A = 1 / 0;
        null !== k && (A = (M = k + s) * (o + 1) - s);
        let L = 0,
          R = (e) => {
            if (null === S) return;
            y > 0 && (S = Math.min(S, e)),
              y < 0 && (S = Math.min(e - A / y, S)),
              (L = null !== T ? T : Math.round(e - S) * y);
            let r = L - t * (y >= 0 ? 1 : -1),
              i = y >= 0 ? r < 0 : r > A;
            (L = Math.max(r, 0)), "finished" === P && null === T && (L = A);
            let l = L,
              u = E;
            if (o) {
              let e = L / M,
                t = Math.floor(e),
                r = e % 1;
              !r && e >= 1 && (r = 1), 1 === r && t--, (t = Math.min(t, o + 1));
              let n = !!(t % 2);
              n &&
                ("reverse" === a
                  ? ((r = 1 - r), s && (r -= s / M))
                  : "mirror" === a && (u = v));
              let i = B(0, 1, r);
              L > A && (i = "reverse" === a && n ? 1 : 0), (l = i * M);
            }
            let c = i ? { done: !1, value: n[0] } : u.next(l);
            g && (c.value = g(c.value));
            let { done: p } = c;
            i || null === k || (p = y >= 0 ? L >= A : L <= 0);
            let h = null === T && ("finished" === P || ("running" === P && p));
            return d && d(c.value), h && F(), c;
          },
          D = () => {
            m && m.stop(), (m = void 0);
          },
          V = () => {
            (P = "idle"), D(), h(), x(), (S = C = null);
          },
          F = () => {
            (P = "finished"), c && c(), D(), h();
          },
          O = () => {
            if (b) return;
            m || (m = r(R));
            let e = m.now();
            l && l(),
              null !== T ? (S = e - T) : (S && "finished" !== P) || (S = e),
              "finished" === P && x(),
              (C = S),
              (T = null),
              (P = "running"),
              m.start();
          };
        e && O();
        let j = {
          then: (e, t) => f.then(e, t),
          get time() {
            return st(L);
          },
          set time(e) {
            (L = e = ot(e)),
              null === T && m && 0 !== y ? (S = m.now() - e / y) : (T = e);
          },
          get duration() {
            let e =
              null === E.calculatedDuration ? pr(E) : E.calculatedDuration;
            return st(e);
          },
          get speed() {
            return y;
          },
          set speed(e) {
            e !== y && m && ((y = e), (j.time = st(L)));
          },
          get state() {
            return P;
          },
          play: O,
          pause: () => {
            (P = "paused"), (T = L);
          },
          stop: () => {
            (b = !0), "idle" !== P && ((P = "idle"), u && u(), V());
          },
          cancel: () => {
            null !== C && R(C), V();
          },
          complete: () => {
            P = "finished";
          },
          sample: (e) => ((S = 0), R(e)),
        };
        return j;
      }
      let mr =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = o()), n)),
        gr = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        vr = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        yr = { type: "keyframes", duration: 0.8 },
        br = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        xr = (e, { keyframes: t }) =>
          t.length > 2
            ? yr
            : L.has(e)
            ? e.startsWith("scale")
              ? ((e) => ({
                  type: "spring",
                  stiffness: 550,
                  damping: 0 === e ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10,
                }))(t[1])
              : vr
            : br,
        wr = (e, t) =>
          "zIndex" !== e &&
          !(
            "number" != typeof t &&
            !Array.isArray(t) &&
            ("string" != typeof t ||
              (!Yt.test(t) && "0" !== t) ||
              t.startsWith("url("))
          ),
        Er = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Pr(e) {
        let [t, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = r.match($) || [];
        if (!n) return e;
        let i = r.replace(n, ""),
          o = Er.has(t) ? 1 : 0;
        return n !== r && (o *= 100), t + "(" + o + i + ")";
      }
      let Tr = /([a-z-]*)\(.*?\)/g,
        Sr = {
          ...Yt,
          getAnimatableNone: (e) => {
            let t = e.match(Tr);
            return t ? t.map(Pr).join(" ") : e;
          },
        },
        Cr = {
          ...re,
          color: Vt,
          backgroundColor: Vt,
          outlineColor: Vt,
          fill: Vt,
          stroke: Vt,
          borderColor: Vt,
          borderTopColor: Vt,
          borderRightColor: Vt,
          borderBottomColor: Vt,
          borderLeftColor: Vt,
          filter: Sr,
          WebkitFilter: Sr,
        },
        kr = (e) => Cr[e];
      function Mr(e, t) {
        let r = kr(e);
        return (
          r !== Sr && (r = Yt),
          r.getAnimatableNone ? r.getAnimatableNone(t) : void 0
        );
      }
      let Ar = (e) => /^0[^.\s]+$/.test(e);
      function Lr(e, t) {
        return e[t] || e.default || e;
      }
      let Rr =
        (e, t, r, n = {}) =>
        (i) => {
          let o = Lr(n, e) || {},
            s = o.delay || n.delay || 0,
            { elapsed: a = 0 } = n;
          a -= ot(s);
          let l = (function (e, t, r, n) {
              let i,
                o,
                s = wr(t, r);
              i = Array.isArray(r) ? [...r] : [null, r];
              let a = void 0 !== n.from ? n.from : e.get(),
                l = [];
              for (let e = 0; e < i.length; e++) {
                var u;
                null === i[e] && (i[e] = 0 === e ? a : i[e - 1]),
                  ("number" == typeof (u = i[e])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || Ar(u)
                    : void 0) && l.push(e),
                  "string" == typeof i[e] &&
                    "none" !== i[e] &&
                    "0" !== i[e] &&
                    (o = i[e]);
              }
              if (s && l.length && o)
                for (let e = 0; e < l.length; e++) {
                  i[l[e]] = Mr(t, o);
                }
              return i;
            })(t, e, r, o),
            u = l[0],
            c = l[l.length - 1],
            d = wr(e, u),
            p = wr(e, c);
          (0, it.K)(
            d === p,
            `You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`
          );
          let h = {
            keyframes: l,
            velocity: t.getVelocity(),
            ease: "easeOut",
            ...o,
            delay: -a,
            onUpdate: (e) => {
              t.set(e), o.onUpdate && o.onUpdate(e);
            },
            onComplete: () => {
              i(), o.onComplete && o.onComplete();
            },
          };
          if (
            (!(function ({
              when: e,
              delay: t,
              delayChildren: r,
              staggerChildren: n,
              staggerDirection: i,
              repeat: o,
              repeatType: s,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(o) && (h = { ...h, ...xr(e, h) }),
            h.duration && (h.duration = ot(h.duration)),
            h.repeatDelay && (h.repeatDelay = ot(h.repeatDelay)),
            !d || !p || at || !1 === o.type)
          )
            return (function ({
              keyframes: e,
              delay: t,
              onUpdate: r,
              onComplete: n,
            }) {
              let i = () => (
                r && r(e[e.length - 1]),
                n && n(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: Ye.Z,
                  pause: Ye.Z,
                  stop: Ye.Z,
                  then: (e) => (e(), Promise.resolve()),
                  cancel: Ye.Z,
                  complete: Ye.Z,
                }
              );
              return t
                ? fr({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: t,
                    onComplete: i,
                  })
                : i();
            })(at ? { ...h, delay: 0 } : h);
          if (
            t.owner &&
            t.owner.current instanceof HTMLElement &&
            !t.owner.getProps().onUpdate
          ) {
            let r = (function (e, t, { onUpdate: r, onComplete: n, ...i }) {
              let o, s;
              if (
                !(
                  mr() &&
                  gr.has(t) &&
                  !i.repeatDelay &&
                  "mirror" !== i.repeatType &&
                  0 !== i.damping &&
                  "inertia" !== i.type
                )
              )
                return !1;
              let a = !1,
                l = () => {
                  s = new Promise((e) => {
                    o = e;
                  });
                };
              l();
              let { keyframes: u, duration: c = 300, ease: d, times: p } = i;
              if (
                ((e, t) =>
                  "spring" === t.type ||
                  "backgroundColor" === e ||
                  !(function e(t) {
                    return !!(
                      !t ||
                      ("string" == typeof t && ct[t]) ||
                      lt(t) ||
                      (Array.isArray(t) && t.every(e))
                    );
                  })(t.ease))(t, i)
              ) {
                let e = fr({ ...i, repeat: 0, delay: 0 }),
                  t = { done: !1, value: u[0] },
                  r = [],
                  n = 0;
                for (; !t.done && n < 2e4; )
                  (t = e.sample(n)), r.push(t.value), (n += 10);
                (p = void 0), (u = r), (c = n - 10), (d = "linear");
              }
              let h = (function (
                e,
                t,
                r,
                {
                  delay: n = 0,
                  duration: i,
                  repeat: o = 0,
                  repeatType: s = "loop",
                  ease: a,
                  times: l,
                } = {}
              ) {
                let u = { [t]: r };
                l && (u.offset = l);
                let c = (function e(t) {
                  if (t)
                    return lt(t) ? ut(t) : Array.isArray(t) ? t.map(e) : ct[t];
                })(a);
                return (
                  Array.isArray(c) && (u.easing = c),
                  e.animate(u, {
                    delay: n,
                    duration: i,
                    easing: Array.isArray(c) ? "linear" : c,
                    fill: "both",
                    iterations: o + 1,
                    direction: "reverse" === s ? "alternate" : "normal",
                  })
                );
              })(e.owner.current, t, u, {
                ...i,
                duration: c,
                ease: d,
                times: p,
              });
              i.syncStart &&
                (h.startTime = Le.frameData.isProcessing
                  ? Le.frameData.timestamp
                  : document.timeline
                  ? document.timeline.currentTime
                  : performance.now());
              let f = () => h.cancel(),
                m = () => {
                  Le.Wi.update(f), o(), l();
                };
              return (
                (h.onfinish = () => {
                  e.set(
                    (function (e, { repeat: t, repeatType: r = "loop" }) {
                      return e[
                        t && "loop" !== r && t % 2 == 1 ? 0 : e.length - 1
                      ];
                    })(u, i)
                  ),
                    n && n(),
                    m();
                }),
                {
                  then: (e, t) => s.then(e, t),
                  attachTimeline: (e) => (
                    (h.timeline = e), (h.onfinish = null), Ye.Z
                  ),
                  get time() {
                    return st(h.currentTime || 0);
                  },
                  set time(e) {
                    h.currentTime = ot(e);
                  },
                  get speed() {
                    return h.playbackRate;
                  },
                  set speed(e) {
                    h.playbackRate = e;
                  },
                  get duration() {
                    return st(c);
                  },
                  play: () => {
                    a || (h.play(), (0, Le.Pn)(f));
                  },
                  pause: () => h.pause(),
                  stop: () => {
                    if (((a = !0), "idle" === h.playState)) return;
                    let { currentTime: t } = h;
                    if (t) {
                      let r = fr({ ...i, autoplay: !1 });
                      e.setWithVelocity(
                        r.sample(t - 10).value,
                        r.sample(t).value,
                        10
                      );
                    }
                    m();
                  },
                  complete: () => h.finish(),
                  cancel: m,
                }
              );
            })(t, e, h);
            if (r) return r;
          }
          return fr(h);
        };
      function Dr(e) {
        return !(!D(e) || !e.add);
      }
      let Vr = (e) => /^\-?\d*\.?\d+$/.test(e);
      function Fr(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Or(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1);
      }
      let jr = class {
          constructor() {
            this.subscriptions = [];
          }
          add(e) {
            return Fr(this.subscriptions, e), () => Or(this.subscriptions, e);
          }
          notify(e, t, r) {
            let n = this.subscriptions.length;
            if (n)
              if (1 === n) this.subscriptions[0](e, t, r);
              else
                for (let i = 0; i < n; i++) {
                  let n = this.subscriptions[i];
                  n && n(e, t, r);
                }
          }
          getSize() {
            return this.subscriptions.length;
          }
          clear() {
            this.subscriptions.length = 0;
          }
        },
        Nr = { current: void 0 },
        Ir = class {
          constructor(e, t = {}) {
            (this.version = "10.16.4"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.events = {}),
              (this.updateAndNotify = (e, t = !0) => {
                (this.prev = this.current), (this.current = e);
                let { delta: r, timestamp: n } = Le.frameData;
                this.lastUpdated !== n &&
                  ((this.timeDelta = r),
                  (this.lastUpdated = n),
                  Le.Wi.postRender(this.scheduleVelocityCheck)),
                  this.prev !== this.current &&
                    this.events.change &&
                    this.events.change.notify(this.current),
                  this.events.velocityChange &&
                    this.events.velocityChange.notify(this.getVelocity()),
                  t &&
                    this.events.renderRequest &&
                    this.events.renderRequest.notify(this.current);
              }),
              (this.scheduleVelocityCheck = () =>
                Le.Wi.postRender(this.velocityCheck)),
              (this.velocityCheck = ({ timestamp: e }) => {
                e !== this.lastUpdated &&
                  ((this.prev = this.current),
                  this.events.velocityChange &&
                    this.events.velocityChange.notify(this.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = e),
              (this.canTrackVelocity = ((e) => !isNaN(parseFloat(e)))(
                this.current
              )),
              (this.owner = t.owner);
          }
          onChange(e) {
            return this.on("change", e);
          }
          on(e, t) {
            this.events[e] || (this.events[e] = new jr());
            let r = this.events[e].add(t);
            return "change" === e
              ? () => {
                  r(),
                    Le.Wi.read(() => {
                      this.events.change.getSize() || this.stop();
                    });
                }
              : r;
          }
          clearListeners() {
            for (let e in this.events) this.events[e].clear();
          }
          attach(e, t) {
            (this.passiveEffect = e), (this.stopPassiveEffect = t);
          }
          set(e, t = !0) {
            t && this.passiveEffect
              ? this.passiveEffect(e, this.updateAndNotify)
              : this.updateAndNotify(e, t);
          }
          setWithVelocity(e, t, r) {
            this.set(t), (this.prev = e), (this.timeDelta = r);
          }
          jump(e) {
            this.updateAndNotify(e),
              (this.prev = e),
              this.stop(),
              this.stopPassiveEffect && this.stopPassiveEffect();
          }
          get() {
            return Nr.current && Nr.current.push(this), this.current;
          }
          getPrevious() {
            return this.prev;
          }
          getVelocity() {
            var e, t;
            return this.canTrackVelocity
              ? ((e = parseFloat(this.current) - parseFloat(this.prev)),
                (t = this.timeDelta) ? e * (1e3 / t) : 0)
              : 0;
          }
          start(e) {
            return (
              this.stop(),
              new Promise((t) => {
                (this.hasAnimated = !0),
                  (this.animation = e(t)),
                  this.events.animationStart &&
                    this.events.animationStart.notify();
              }).then(() => {
                this.events.animationComplete &&
                  this.events.animationComplete.notify(),
                  this.clearAnimation();
              })
            );
          }
          stop() {
            this.animation &&
              (this.animation.stop(),
              this.events.animationCancel &&
                this.events.animationCancel.notify()),
              this.clearAnimation();
          }
          isAnimating() {
            return !!this.animation;
          }
          clearAnimation() {
            delete this.animation;
          }
          destroy() {
            this.clearListeners(),
              this.stop(),
              this.stopPassiveEffect && this.stopPassiveEffect();
          }
        };
      function Br(e, t) {
        return new Ir(e, t);
      }
      let Wr = (e) => (t) => t.test(e),
        zr = [W, q, X, _, Q, J, { test: (e) => "auto" === e, parse: (e) => e }],
        Ur = (e) => zr.find(Wr(e)),
        Hr = [...zr, Vt, Yt],
        $r = (e) => Hr.find(Wr(e));
      function Kr(e, t, { delay: r = 0, transitionOverride: n, type: i } = {}) {
        let {
            transition: o = e.getDefaultTransition(),
            transitionEnd: s,
            ...a
          } = e.makeTargetAnimatable(t),
          l = e.getValue("willChange");
        n && (o = n);
        let u = [],
          c = i && e.animationState && e.animationState.getState()[i];
        for (let t in a) {
          let n = e.getValue(t),
            i = a[t];
          if (
            !n ||
            void 0 === i ||
            (c &&
              (function ({ protectedKeys: e, needsAnimating: t }, r) {
                let n = e.hasOwnProperty(r) && !0 !== t[r];
                return (t[r] = !1), n;
              })(c, t))
          )
            continue;
          let s = { delay: r, elapsed: 0, ...o };
          if (window.HandoffAppearAnimations && !n.hasAnimated) {
            let r = e.getProps()[nt];
            r &&
              ((s.elapsed = window.HandoffAppearAnimations(r, t, n, Le.Wi)),
              (s.syncStart = !0));
          }
          n.start(
            Rr(t, n, i, e.shouldReduceMotion && L.has(t) ? { type: !1 } : s)
          );
          let d = n.animation;
          Dr(l) && (l.add(t), d.then(() => l.remove(t))), u.push(d);
        }
        return (
          s &&
            Promise.all(u).then(() => {
              s &&
                (function (e, t) {
                  let r = rt(e, t),
                    {
                      transitionEnd: n = {},
                      transition: i = {},
                      ...o
                    } = r ? e.makeTargetAnimatable(r, !1) : {};
                  for (let t in (o = { ...o, ...n })) {
                    let r = ke(o[t]);
                    e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Br(r));
                  }
                })(e, s);
            }),
          u
        );
      }
      function Gr(e, t, r = {}) {
        let n = rt(e, t, r.custom),
          { transition: i = e.getDefaultTransition() || {} } = n || {};
        r.transitionOverride && (i = r.transitionOverride);
        let o = n ? () => Promise.all(Kr(e, n, r)) : () => Promise.resolve(),
          s =
            e.variantChildren && e.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: o = 0,
                    staggerChildren: s,
                    staggerDirection: a,
                  } = i;
                  return (function (e, t, r = 0, n = 0, i = 1, o) {
                    let s = [],
                      a = (e.variantChildren.size - 1) * n,
                      l = 1 === i ? (e = 0) => e * n : (e = 0) => a - e * n;
                    return (
                      Array.from(e.variantChildren)
                        .sort(Zr)
                        .forEach((e, n) => {
                          e.notify("AnimationStart", t),
                            s.push(
                              Gr(e, t, { ...o, delay: r + l(n) }).then(() =>
                                e.notify("AnimationComplete", t)
                              )
                            );
                        }),
                      Promise.all(s)
                    );
                  })(e, t, o + n, s, a, r);
                }
              : () => Promise.resolve(),
          { when: a } = i;
        if (!a) return Promise.all([o(), s(r.delay)]);
        {
          let [e, t] = "beforeChildren" === a ? [o, s] : [s, o];
          return e().then(() => t());
        }
      }
      function Zr(e, t) {
        return e.sortNodePosition(t);
      }
      let Yr = [...m].reverse(),
        _r = m.length;
      function Xr(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let qr = 0,
        Jr = (e, t) => Math.abs(e - t),
        Qr = class {
          constructor(e, t, { transformPagePoint: r } = {}) {
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = () => {
                if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                let e = rn(this.lastMoveEventInfo, this.history),
                  t = null !== this.startEvent,
                  r =
                    (function (e, t) {
                      let r = Jr(e.x, t.x),
                        n = Jr(e.y, t.y);
                      return Math.sqrt(r ** 2 + n ** 2);
                    })(e.offset, { x: 0, y: 0 }) >= 3;
                if (!t && !r) return;
                let { point: n } = e,
                  { timestamp: i } = Le.frameData;
                this.history.push({ ...n, timestamp: i });
                let { onStart: o, onMove: s } = this.handlers;
                t ||
                  (o && o(this.lastMoveEvent, e),
                  (this.startEvent = this.lastMoveEvent)),
                  s && s(this.lastMoveEvent, e);
              }),
              (this.handlePointerMove = (e, t) => {
                (this.lastMoveEvent = e),
                  (this.lastMoveEventInfo = en(t, this.transformPagePoint)),
                  Le.Wi.update(this.updatePoint, !0);
              }),
              (this.handlePointerUp = (e, t) => {
                if (
                  (this.end(), !this.lastMoveEvent || !this.lastMoveEventInfo)
                )
                  return;
                let { onEnd: r, onSessionEnd: n } = this.handlers,
                  i = rn(
                    "pointercancel" === e.type
                      ? this.lastMoveEventInfo
                      : en(t, this.transformPagePoint),
                    this.history
                  );
                this.startEvent && r && r(e, i), n && n(e, i);
              }),
              !Fe(e))
            )
              return;
            (this.handlers = t), (this.transformPagePoint = r);
            let n = en(Oe(e), this.transformPagePoint),
              { point: i } = n,
              { timestamp: o } = Le.frameData;
            this.history = [{ ...i, timestamp: o }];
            let { onSessionStart: s } = t;
            s && s(e, rn(n, this.history)),
              (this.removeListeners = Be(
                Ne(window, "pointermove", this.handlePointerMove),
                Ne(window, "pointerup", this.handlePointerUp),
                Ne(window, "pointercancel", this.handlePointerUp)
              ));
          }
          updateHandlers(e) {
            this.handlers = e;
          }
          end() {
            this.removeListeners && this.removeListeners(),
              (0, Le.Pn)(this.updatePoint);
          }
        };
      function en(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function tn(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function rn({ point: e }, t) {
        return {
          point: e,
          delta: tn(e, nn(t)),
          offset: tn(e, t[0]),
          velocity: (function (e, t) {
            if (e.length < 2) return { x: 0, y: 0 };
            let r = e.length - 1,
              n = null,
              i = nn(e);
            for (
              ;
              r >= 0 && ((n = e[r]), !(i.timestamp - n.timestamp > ot(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let o = st(i.timestamp - n.timestamp);
            if (0 === o) return { x: 0, y: 0 };
            let s = { x: (i.x - n.x) / o, y: (i.y - n.y) / o };
            return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
          })(t),
        };
      }
      function nn(e) {
        return e[e.length - 1];
      }
      function on(e) {
        return e.max - e.min;
      }
      function sn(e, t = 0, r = 0.01) {
        return Math.abs(e - t) <= r;
      }
      function an(e, t, r, n = 0.5) {
        (e.origin = n),
          (e.originPoint = Ft(t.min, t.max, e.origin)),
          (e.scale = on(r) / on(t)),
          (sn(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = Ft(r.min, r.max, e.origin) - e.originPoint),
          (sn(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function ln(e, t, r, n) {
        an(e.x, t.x, r.x, n ? n.originX : void 0),
          an(e.y, t.y, r.y, n ? n.originY : void 0);
      }
      function un(e, t, r) {
        (e.min = r.min + t.min), (e.max = e.min + on(t));
      }
      function cn(e, t, r) {
        (e.min = t.min - r.min), (e.max = e.min + on(t));
      }
      function dn(e, t, r) {
        cn(e.x, t.x, r.x), cn(e.y, t.y, r.y);
      }
      function pn(e, t, r) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== r ? e.max + r - (e.max - e.min) : void 0,
        };
      }
      function hn(e, t) {
        let r = t.min - e.min,
          n = t.max - e.max;
        return (
          t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n }
        );
      }
      function fn(e, t, r) {
        return { min: mn(e, t), max: mn(e, r) };
      }
      function mn(e, t) {
        return "number" == typeof e ? e : e[t] || 0;
      }
      let gn = () => ({
          x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
        }),
        vn = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
      function yn(e) {
        return [e("x"), e("y")];
      }
      function bn({ top: e, left: t, right: r, bottom: n }) {
        return { x: { min: t, max: r }, y: { min: e, max: n } };
      }
      function xn(e) {
        return void 0 === e || 1 === e;
      }
      function wn({ scale: e, scaleX: t, scaleY: r }) {
        return !xn(e) || !xn(t) || !xn(r);
      }
      function En(e) {
        return wn(e) || Pn(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function Pn(e) {
        var t, r;
        return ((t = e.x) && "0%" !== t) || ((r = e.y) && "0%" !== r);
      }
      function Tn(e, t, r, n, i) {
        return void 0 !== i && (e = n + i * (e - n)), n + r * (e - n) + t;
      }
      function Sn(e, t = 0, r = 1, n, i) {
        (e.min = Tn(e.min, t, r, n, i)), (e.max = Tn(e.max, t, r, n, i));
      }
      function Cn(e, { x: t, y: r }) {
        Sn(e.x, t.translate, t.scale, t.originPoint),
          Sn(e.y, r.translate, r.scale, r.originPoint);
      }
      function kn(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function Mn(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function An(e, t, [r, n, i]) {
        let o = void 0 !== t[i] ? t[i] : 0.5,
          s = Ft(e.min, e.max, o);
        Sn(e, t[r], t[n], s, t.scale);
      }
      let Ln = ["x", "scaleX", "originX"],
        Rn = ["y", "scaleY", "originY"];
      function Dn(e, t) {
        An(e.x, t, Ln), An(e.y, t, Rn);
      }
      function Vn(e, t) {
        return bn(
          (function (e, t) {
            if (!t) return e;
            let r = t({ x: e.left, y: e.top }),
              n = t({ x: e.right, y: e.bottom });
            return { top: r.y, left: r.x, bottom: n.y, right: n.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      let Fn = new WeakMap(),
        On = class {
          constructor(e) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = vn()),
              (this.visualElement = e);
          }
          start(e, { snapToCursor: t = !1 } = {}) {
            let { presenceContext: r } = this.visualElement;
            (r && !1 === r.isPresent) ||
              (this.panSession = new Qr(
                e,
                {
                  onSessionStart: (e) => {
                    this.stopAnimation(),
                      t && this.snapToCursor(Oe(e, "page").point);
                  },
                  onStart: (e, t) => {
                    let {
                      drag: r,
                      dragPropagation: n,
                      onDragStart: i,
                    } = this.getProps();
                    if (
                      r &&
                      !n &&
                      (this.openGlobalLock && this.openGlobalLock(),
                      (this.openGlobalLock = He(r)),
                      !this.openGlobalLock)
                    )
                      return;
                    (this.isDragging = !0),
                      (this.currentDirection = null),
                      this.resolveConstraints(),
                      this.visualElement.projection &&
                        ((this.visualElement.projection.isAnimationBlocked =
                          !0),
                        (this.visualElement.projection.target = void 0)),
                      yn((e) => {
                        let t = this.getAxisMotionValue(e).get() || 0;
                        if (X.test(t)) {
                          let { projection: r } = this.visualElement;
                          if (r && r.layout) {
                            let n = r.layout.layoutBox[e];
                            if (n) {
                              t = on(n) * (parseFloat(t) / 100);
                            }
                          }
                        }
                        this.originPoint[e] = t;
                      }),
                      i && Le.Wi.update(() => i(e, t), !1, !0);
                    let { animationState: o } = this.visualElement;
                    o && o.setActive("whileDrag", !0);
                  },
                  onMove: (e, t) => {
                    let {
                      dragPropagation: r,
                      dragDirectionLock: n,
                      onDirectionLock: i,
                      onDrag: o,
                    } = this.getProps();
                    if (!r && !this.openGlobalLock) return;
                    let { offset: s } = t;
                    if (n && null === this.currentDirection)
                      return (
                        (this.currentDirection = (function (e, t = 10) {
                          let r = null;
                          return (
                            Math.abs(e.y) > t
                              ? (r = "y")
                              : Math.abs(e.x) > t && (r = "x"),
                            r
                          );
                        })(s)),
                        void (
                          null !== this.currentDirection &&
                          i &&
                          i(this.currentDirection)
                        )
                      );
                    this.updateAxis("x", t.point, s),
                      this.updateAxis("y", t.point, s),
                      this.visualElement.render(),
                      o && o(e, t);
                  },
                  onSessionEnd: (e, t) => this.stop(e, t),
                },
                {
                  transformPagePoint:
                    this.visualElement.getTransformPagePoint(),
                }
              ));
          }
          stop(e, t) {
            let r = this.isDragging;
            if ((this.cancel(), !r)) return;
            let { velocity: n } = t;
            this.startAnimation(n);
            let { onDragEnd: i } = this.getProps();
            i && Le.Wi.update(() => i(e, t));
          }
          cancel() {
            this.isDragging = !1;
            let { projection: e, animationState: t } = this.visualElement;
            e && (e.isAnimationBlocked = !1),
              this.panSession && this.panSession.end(),
              (this.panSession = void 0);
            let { dragPropagation: r } = this.getProps();
            !r &&
              this.openGlobalLock &&
              (this.openGlobalLock(), (this.openGlobalLock = null)),
              t && t.setActive("whileDrag", !1);
          }
          updateAxis(e, t, r) {
            let { drag: n } = this.getProps();
            if (!r || !jn(e, n, this.currentDirection)) return;
            let i = this.getAxisMotionValue(e),
              o = this.originPoint[e] + r[e];
            this.constraints &&
              this.constraints[e] &&
              (o = (function (e, { min: t, max: r }, n) {
                return (
                  void 0 !== t && e < t
                    ? (e = n ? Ft(t, e, n.min) : Math.max(e, t))
                    : void 0 !== r &&
                      e > r &&
                      (e = n ? Ft(r, e, n.max) : Math.min(e, r)),
                  e
                );
              })(o, this.constraints[e], this.elastic[e])),
              i.set(o);
          }
          resolveConstraints() {
            let { dragConstraints: e, dragElastic: t } = this.getProps(),
              { layout: r } = this.visualElement.projection || {},
              n = this.constraints;
            e && p(e)
              ? this.constraints ||
                (this.constraints = this.resolveRefConstraints())
              : (this.constraints =
                  !(!e || !r) &&
                  (function (e, { top: t, left: r, bottom: n, right: i }) {
                    return { x: pn(e.x, r, i), y: pn(e.y, t, n) };
                  })(r.layoutBox, e)),
              (this.elastic = (function (e = 0.35) {
                return (
                  !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                  { x: fn(e, "left", "right"), y: fn(e, "top", "bottom") }
                );
              })(t)),
              n !== this.constraints &&
                r &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                yn((e) => {
                  this.getAxisMotionValue(e) &&
                    (this.constraints[e] = (function (e, t) {
                      let r = {};
                      return (
                        void 0 !== t.min && (r.min = t.min - e.min),
                        void 0 !== t.max && (r.max = t.max - e.min),
                        r
                      );
                    })(r.layoutBox[e], this.constraints[e]));
                });
          }
          resolveRefConstraints() {
            var e;
            let { dragConstraints: t, onMeasureDragConstraints: r } =
              this.getProps();
            if (!t || !p(t)) return !1;
            let n = t.current;
            (0, it.k)(
              null !== n,
              "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
            );
            let { projection: i } = this.visualElement;
            if (!i || !i.layout) return !1;
            let o = (function (e, t, r) {
                let n = Vn(e, r),
                  { scroll: i } = t;
                return i && (Mn(n.x, i.offset.x), Mn(n.y, i.offset.y)), n;
              })(n, i.root, this.visualElement.getTransformPagePoint()),
              s = { x: hn((e = i.layout.layoutBox).x, o.x), y: hn(e.y, o.y) };
            if (r) {
              let e = r(
                (function ({ x: e, y: t }) {
                  return {
                    top: t.min,
                    right: e.max,
                    bottom: t.max,
                    left: e.min,
                  };
                })(s)
              );
              (this.hasMutatedConstraints = !!e), e && (s = bn(e));
            }
            return s;
          }
          startAnimation(e) {
            let {
                drag: t,
                dragMomentum: r,
                dragElastic: n,
                dragTransition: i,
                dragSnapToOrigin: o,
                onDragTransitionEnd: s,
              } = this.getProps(),
              a = this.constraints || {},
              l = yn((s) => {
                if (!jn(s, t, this.currentDirection)) return;
                let l = (a && a[s]) || {};
                o && (l = { min: 0, max: 0 });
                let u = {
                  type: "inertia",
                  velocity: r ? e[s] : 0,
                  bounceStiffness: n ? 200 : 1e6,
                  bounceDamping: n ? 40 : 1e7,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...i,
                  ...l,
                };
                return this.startAxisValueAnimation(s, u);
              });
            return Promise.all(l).then(s);
          }
          startAxisValueAnimation(e, t) {
            let r = this.getAxisMotionValue(e);
            return r.start(Rr(e, r, 0, t));
          }
          stopAnimation() {
            yn((e) => this.getAxisMotionValue(e).stop());
          }
          getAxisMotionValue(e) {
            let t = "_drag" + e.toUpperCase(),
              r = this.visualElement.getProps();
            return (
              r[t] ||
              this.visualElement.getValue(
                e,
                (r.initial ? r.initial[e] : void 0) || 0
              )
            );
          }
          snapToCursor(e) {
            yn((t) => {
              let { drag: r } = this.getProps();
              if (!jn(t, r, this.currentDirection)) return;
              let { projection: n } = this.visualElement,
                i = this.getAxisMotionValue(t);
              if (n && n.layout) {
                let { min: r, max: o } = n.layout.layoutBox[t];
                i.set(e[t] - Ft(r, o, 0.5));
              }
            });
          }
          scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let { drag: e, dragConstraints: t } = this.getProps(),
              { projection: r } = this.visualElement;
            if (!p(t) || !r || !this.constraints) return;
            this.stopAnimation();
            let n = { x: 0, y: 0 };
            yn((e) => {
              let t = this.getAxisMotionValue(e);
              if (t) {
                let r = t.get();
                n[e] = (function (e, t) {
                  let r = 0.5,
                    n = on(e),
                    i = on(t);
                  return (
                    i > n
                      ? (r = er(t.min, t.max - n, e.min))
                      : n > i && (r = er(e.min, e.max - i, t.min)),
                    B(0, 1, r)
                  );
                })({ min: r, max: r }, this.constraints[e]);
              }
            });
            let { transformTemplate: i } = this.visualElement.getProps();
            (this.visualElement.current.style.transform = i
              ? i({}, "")
              : "none"),
              r.root && r.root.updateScroll(),
              r.updateLayout(),
              this.resolveConstraints(),
              yn((t) => {
                if (!jn(t, e, null)) return;
                let r = this.getAxisMotionValue(t),
                  { min: i, max: o } = this.constraints[t];
                r.set(Ft(i, o, n[t]));
              });
          }
          addListeners() {
            if (!this.visualElement.current) return;
            Fn.set(this.visualElement, this);
            let e = Ne(this.visualElement.current, "pointerdown", (e) => {
                let { drag: t, dragListener: r = !0 } = this.getProps();
                t && r && this.start(e);
              }),
              t = () => {
                let { dragConstraints: e } = this.getProps();
                p(e) && (this.constraints = this.resolveRefConstraints());
              },
              { projection: r } = this.visualElement,
              n = r.addEventListener("measure", t);
            r &&
              !r.layout &&
              (r.root && r.root.updateScroll(), r.updateLayout()),
              t();
            let i = Ve(window, "resize", () =>
                this.scalePositionWithinConstraints()
              ),
              o = r.addEventListener(
                "didUpdate",
                ({ delta: e, hasLayoutChanged: t }) => {
                  this.isDragging &&
                    t &&
                    (yn((t) => {
                      let r = this.getAxisMotionValue(t);
                      r &&
                        ((this.originPoint[t] += e[t].translate),
                        r.set(r.get() + e[t].translate));
                    }),
                    this.visualElement.render());
                }
              );
            return () => {
              i(), e(), n(), o && o();
            };
          }
          getProps() {
            let e = this.visualElement.getProps(),
              {
                drag: t = !1,
                dragDirectionLock: r = !1,
                dragPropagation: n = !1,
                dragConstraints: i = !1,
                dragElastic: o = 0.35,
                dragMomentum: s = !0,
              } = e;
            return {
              ...e,
              drag: t,
              dragDirectionLock: r,
              dragPropagation: n,
              dragConstraints: i,
              dragElastic: o,
              dragMomentum: s,
            };
          }
        };
      function jn(e, t, r) {
        return !((!0 !== t && t !== e) || (null !== r && r !== e));
      }
      let Nn = (e) => (t, r) => {
          e && Le.Wi.update(() => e(t, r));
        },
        In = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function Bn(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      let Wn = {
          correct: (e, t) => {
            if (!t.target) return e;
            if ("string" == typeof e) {
              if (!q.test(e)) return e;
              e = parseFloat(e);
            }
            return `${Bn(e, t.target.x)}% ${Bn(e, t.target.y)}%`;
          },
        },
        zn = class extends s.Component {
          componentDidMount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: r,
                layoutId: n,
              } = this.props,
              { projection: i } = e;
            Object.assign(M, Hn),
              i &&
                (t.group && t.group.add(i),
                r && r.register && n && r.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", () => {
                  this.safeToRemove();
                }),
                i.setOptions({
                  ...i.options,
                  onExitComplete: () => this.safeToRemove(),
                })),
              (In.hasEverUpdated = !0);
          }
          getSnapshotBeforeUpdate(e) {
            let {
                layoutDependency: t,
                visualElement: r,
                drag: n,
                isPresent: i,
              } = this.props,
              o = r.projection;
            return (
              o &&
                ((o.isPresent = i),
                n || e.layoutDependency !== t || void 0 === t
                  ? o.willUpdate()
                  : this.safeToRemove(),
                e.isPresent === i ||
                  (i
                    ? o.promote()
                    : o.relegate() ||
                      Le.Wi.postRender(() => {
                        let e = o.getStack();
                        (e && e.members.length) || this.safeToRemove();
                      }))),
              null
            );
          }
          componentDidUpdate() {
            let { projection: e } = this.props.visualElement;
            e &&
              (e.root.didUpdate(),
              queueMicrotask(() => {
                !e.currentAnimation && e.isLead() && this.safeToRemove();
              }));
          }
          componentWillUnmount() {
            let {
                visualElement: e,
                layoutGroup: t,
                switchLayoutGroup: r,
              } = this.props,
              { projection: n } = e;
            n &&
              (n.scheduleCheckAfterUnmount(),
              t && t.group && t.group.remove(n),
              r && r.deregister && r.deregister(n));
          }
          safeToRemove() {
            let { safeToRemove: e } = this.props;
            e && e();
          }
          render() {
            return null;
          }
        };
      function Un(e) {
        let [t, r] = (function () {
            let e = (0, s.useContext)(u.O);
            if (null === e) return [!0, null];
            let { isPresent: t, onExitComplete: r, register: n } = e,
              i = (0, s.useId)();
            return (
              (0, s.useEffect)(() => n(i), []),
              !t && r ? [!1, () => r && r(i)] : [!0]
            );
          })(),
          n = (0, s.useContext)(P.p);
        return s.createElement(zn, {
          ...e,
          layoutGroup: n,
          switchLayoutGroup: (0, s.useContext)(T),
          isPresent: t,
          safeToRemove: r,
        });
      }
      let Hn = {
          borderRadius: {
            ...Wn,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: Wn,
          borderTopRightRadius: Wn,
          borderBottomLeftRadius: Wn,
          borderBottomRightRadius: Wn,
          boxShadow: {
            correct: (e, { treeScale: t, projectionDelta: r }) => {
              let n = Yt.parse(e);
              if (n.length > 5) return e;
              let i = Yt.createTransformer(e),
                o = "number" != typeof n[0] ? 1 : 0,
                s = r.x.scale * t.x,
                a = r.y.scale * t.y;
              (n[0 + o] /= s), (n[1 + o] /= a);
              let l = Ft(s, a, 0.5);
              return (
                "number" == typeof n[2 + o] && (n[2 + o] /= l),
                "number" == typeof n[3 + o] && (n[3 + o] /= l),
                i(n)
              );
            },
          },
        },
        $n = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Kn = $n.length,
        Gn = (e) => ("string" == typeof e ? parseFloat(e) : e),
        Zn = (e) => "number" == typeof e || q.test(e);
      function Yn(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      let _n = qn(0, 0.5, xt),
        Xn = qn(0.5, 0.95, Ye.Z);
      function qn(e, t, r) {
        return (n) => (n < e ? 0 : n > t ? 1 : r(er(e, t, n)));
      }
      function Jn(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function Qn(e, t) {
        Jn(e.x, t.x), Jn(e.y, t.y);
      }
      function ei(e, t, r, n, i) {
        return (
          (e = n + (1 / r) * ((e -= t) - n)),
          void 0 !== i && (e = n + (1 / i) * (e - n)),
          e
        );
      }
      function ti(e, t, [r, n, i], o, s) {
        !(function (e, t = 0, r = 1, n = 0.5, i, o = e, s = e) {
          if (X.test(t)) {
            (t = parseFloat(t)), (t = Ft(s.min, s.max, t / 100) - s.min);
          }
          if ("number" != typeof t) return;
          let a = Ft(o.min, o.max, n);
          e === o && (a -= t),
            (e.min = ei(e.min, t, r, a, i)),
            (e.max = ei(e.max, t, r, a, i));
        })(e, t[r], t[n], t[i], t.scale, o, s);
      }
      let ri = ["x", "scaleX", "originX"],
        ni = ["y", "scaleY", "originY"];
      function ii(e, t, r, n) {
        ti(e.x, t, ri, r ? r.x : void 0, n ? n.x : void 0),
          ti(e.y, t, ni, r ? r.y : void 0, n ? n.y : void 0);
      }
      function oi(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function si(e) {
        return oi(e.x) && oi(e.y);
      }
      function ai(e, t) {
        return (
          Math.round(e.x.min) === Math.round(t.x.min) &&
          Math.round(e.x.max) === Math.round(t.x.max) &&
          Math.round(e.y.min) === Math.round(t.y.min) &&
          Math.round(e.y.max) === Math.round(t.y.max)
        );
      }
      function li(e) {
        return on(e.x) / on(e.y);
      }
      let ui = class {
        constructor() {
          this.members = [];
        }
        add(e) {
          Fr(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            (Or(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let t,
            r = this.members.findIndex((t) => e === t);
          if (0 === r) return !1;
          for (let e = r; e >= 0; e--) {
            let r = this.members[e];
            if (!1 !== r.isPresent) {
              t = r;
              break;
            }
          }
          return !!t && (this.promote(t), !0);
        }
        promote(e, t) {
          let r = this.lead;
          if (e !== r && ((this.prevLead = r), (this.lead = e), e.show(), r)) {
            r.instance && r.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = r),
              t && (e.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((e.snapshot = r.snapshot),
                (e.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: n } = e.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: t, resumingFrom: r } = e;
            t.onExitComplete && t.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      };
      function ci(e, t, r) {
        let n = "",
          i = e.x.translate / t.x,
          o = e.y.translate / t.y;
        if (
          ((i || o) && (n = `translate3d(${i}px, ${o}px, 0) `),
          (1 !== t.x || 1 !== t.y) && (n += `scale(${1 / t.x}, ${1 / t.y}) `),
          r)
        ) {
          let { rotate: e, rotateX: t, rotateY: i } = r;
          e && (n += `rotate(${e}deg) `),
            t && (n += `rotateX(${t}deg) `),
            i && (n += `rotateY(${i}deg) `);
        }
        let s = e.x.scale * t.x,
          a = e.y.scale * t.y;
        return (1 !== s || 1 !== a) && (n += `scale(${s}, ${a})`), n || "none";
      }
      let di = (e, t) => e.depth - t.depth,
        pi = class {
          constructor() {
            (this.children = []), (this.isDirty = !1);
          }
          add(e) {
            Fr(this.children, e), (this.isDirty = !0);
          }
          remove(e) {
            Or(this.children, e), (this.isDirty = !0);
          }
          forEach(e) {
            this.isDirty && this.children.sort(di),
              (this.isDirty = !1),
              this.children.forEach(e);
          }
        },
        hi = ["", "X", "Y", "Z"],
        fi = 0,
        mi = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function gi({
        attachResizeListener: e,
        defaultParent: t,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(e = {}, r = null == t ? void 0 : t()) {
            (this.id = fi++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (mi.totalNodes =
                  mi.resolvedTargetDeltas =
                  mi.recalculatedProjection =
                    0),
                  this.nodes.forEach(bi),
                  this.nodes.forEach(Ci),
                  this.nodes.forEach(ki),
                  this.nodes.forEach(xi),
                  window.MotionDebug && window.MotionDebug.record(mi);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new pi());
          }
          addEventListener(e, t) {
            return (
              this.eventHandlers.has(e) || this.eventHandlers.set(e, new jr()),
              this.eventHandlers.get(e).add(t)
            );
          }
          notifyListeners(e, ...t) {
            let r = this.eventHandlers.get(e);
            r && r.notify(...t);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(t, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = t instanceof SVGElement && "svg" !== t.tagName),
              (this.instance = t);
            let { layoutId: n, layout: i, visualElement: o } = this.options;
            if (
              (o && !o.current && o.mount(t),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              e)
            ) {
              let r,
                n = () => (this.root.updateBlockedByResize = !1);
              e(t, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (e, t) {
                    let r = performance.now(),
                      n = ({ timestamp: t }) => {
                        let i = t - r;
                        i >= 250 && ((0, Le.Pn)(n), e(i - 250));
                      };
                    return Le.Wi.read(n, !0), () => (0, Le.Pn)(n);
                  })(n)),
                  In.hasAnimatedSinceResize &&
                    ((In.hasAnimatedSinceResize = !1), this.nodes.forEach(Si));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                o &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: t,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked())
                      return (
                        (this.target = void 0),
                        void (this.relativeTarget = void 0)
                      );
                    let i =
                        this.options.transition ||
                        o.getDefaultTransition() ||
                        Vi,
                      {
                        onLayoutAnimationStart: s,
                        onLayoutAnimationComplete: a,
                      } = o.getProps(),
                      l = !this.targetLayout || !ai(this.targetLayout, n) || r,
                      u = !t && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (t && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, u);
                      let t = { ...Lr(i, "layout"), onPlay: s, onComplete: a };
                      (o.shouldReduceMotion || this.options.layoutRoot) &&
                        ((t.delay = 0), (t.type = !1)),
                        this.startAnimation(t);
                    } else
                      t || Si(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, Le.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(Mi),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
              return void (
                this.options.onExitComplete && this.options.onExitComplete()
              );
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let t = this.path[e];
              (t.shouldResetTransform = !0),
                t.updateScroll("snapshot"),
                t.options.layoutRoot && t.willUpdate(!1);
            }
            let { layoutId: t, layout: r } = this.options;
            if (void 0 === t && !r) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked()))
              return (
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                void this.nodes.forEach(Ei)
              );
            this.isUpdating || this.nodes.forEach(Pi),
              (this.isUpdating = !1),
              this.nodes.forEach(Ti),
              this.nodes.forEach(vi),
              this.nodes.forEach(yi),
              this.clearAllSnapshots();
            let e = performance.now();
            (Le.frameData.delta = B(0, 1e3 / 60, e - Le.frameData.timestamp)),
              (Le.frameData.timestamp = e),
              (Le.frameData.isProcessing = !0),
              Le.S6.update.process(Le.frameData),
              Le.S6.preRender.process(Le.frameData),
              Le.S6.render.process(Le.frameData),
              (Le.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(wi), this.sharedNodes.forEach(Ai);
          }
          scheduleUpdateProjection() {
            Le.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            Le.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !(
                this.instance &&
                (this.updateScroll(),
                (this.options.alwaysMeasureLayout && this.isLead()) ||
                  this.isLayoutDirty)
              )
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                this.path[e].updateScroll();
              }
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = vn()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: t } = this.options;
            t &&
              t.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let t = !(!this.options.layoutScroll || !this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (t = !1),
              t &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: n(this.instance),
                  offset: r(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              t = this.projectionDelta && !si(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              o = n !== this.prevTransformTemplateValue;
            e &&
              (t || En(this.latestValues) || o) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var t;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              e && (n = this.removeTransform(n)),
              ji((t = n).x),
              ji(t.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return vn();
            let t = e.measureViewportBox(),
              { scroll: r } = this.root;
            return r && (Mn(t.x, r.offset.x), Mn(t.y, r.offset.y)), t;
          }
          removeElementScroll(e) {
            let t = vn();
            Qn(t, e);
            for (let r = 0; r < this.path.length; r++) {
              let n = this.path[r],
                { scroll: i, options: o } = n;
              if (n !== this.root && i && o.layoutScroll) {
                if (i.isRoot) {
                  Qn(t, e);
                  let { scroll: r } = this.root;
                  r && (Mn(t.x, -r.offset.x), Mn(t.y, -r.offset.y));
                }
                Mn(t.x, i.offset.x), Mn(t.y, i.offset.y);
              }
            }
            return t;
          }
          applyTransform(e, t = !1) {
            let r = vn();
            Qn(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              !t &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                Dn(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                En(n.latestValues) && Dn(r, n.latestValues);
            }
            return En(this.latestValues) && Dn(r, this.latestValues), r;
          }
          removeTransform(e) {
            let t = vn();
            Qn(t, e);
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              if (!r.instance || !En(r.latestValues)) continue;
              wn(r.latestValues) && r.updateSnapshot();
              let n = vn();
              Qn(n, r.measurePageBox()),
                ii(
                  t,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n
                );
            }
            return En(this.latestValues) && ii(t, this.latestValues), t;
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                Le.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var t, r, n, i;
            let o = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = o.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = o.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = o.isSharedProjectionDirty);
            let s = !!this.resumingFrom || this !== o;
            if (
              !(
                e ||
                (s && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = Le.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = vn()),
                    (this.relativeTargetOrigin = vn()),
                    dn(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    Qn(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = vn()), (this.targetWithTransforms = vn())),
                  this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      un(r.x, n.x, i.x),
                      un(r.y, n.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : Qn(this.target, this.layout.layoutBox),
                      Cn(this.target, this.targetDelta))
                    : Qn(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = vn()),
                      (this.relativeTargetOrigin = vn()),
                      dn(this.relativeTargetOrigin, this.target, e.target),
                      Qn(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                mi.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              wn(this.parent.latestValues) ||
              Pn(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !(
              !(
                this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot
              ) || !this.layout
            );
          }
          calcProjection() {
            var e;
            let t = this.getLead(),
              r = !!this.resumingFrom || this !== t,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === Le.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: o } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || (!i && !o))
            )
              return;
            Qn(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            !(function (e, t, r, n = !1) {
              let i,
                o,
                s = r.length;
              if (s) {
                t.x = t.y = 1;
                for (let a = 0; a < s; a++) {
                  o = (i = r[a]).projectionDelta;
                  let s = i.instance;
                  (!s || !s.style || "contents" !== s.style.display) &&
                    (n &&
                      i.options.layoutScroll &&
                      i.scroll &&
                      i !== i.root &&
                      Dn(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                    o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Cn(e, o)),
                    n && En(i.latestValues) && Dn(e, i.latestValues));
                }
                (t.x = kn(t.x)), (t.y = kn(t.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, r),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (t.target = t.layout.layoutBox);
            let { target: l } = t;
            if (!l)
              return void (
                this.projectionTransform &&
                ((this.projectionDelta = gn()),
                (this.projectionTransform = "none"),
                this.scheduleRender())
              );
            this.projectionDelta ||
              ((this.projectionDelta = gn()),
              (this.projectionDeltaWithTransform = gn()));
            let u = this.projectionTransform;
            ln(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = ci(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== s ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              mi.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, t = !1) {
            let r,
              n = this.snapshot,
              i = n ? n.latestValues : {},
              o = { ...this.latestValues },
              s = gn();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !t);
            let a = vn(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !(
                !l ||
                c ||
                !0 !== this.options.crossfade ||
                this.path.some(Di)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (t) => {
                let n = t / 1e3;
                var u, p, h, f;
                (Li(s.x, e.x, n),
                Li(s.y, e.y, n),
                this.setTargetDelta(s),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout) &&
                  (dn(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                  (h = this.relativeTarget),
                  (f = this.relativeTargetOrigin),
                  Ri(h.x, f.x, a.x, n),
                  Ri(h.y, f.y, a.y, n),
                  r &&
                    ((u = this.relativeTarget),
                    (p = r),
                    u.x.min === p.x.min &&
                      u.x.max === p.x.max &&
                      u.y.min === p.y.min &&
                      u.y.max === p.y.max) &&
                    (this.isProjectionDirty = !1),
                  r || (r = vn()),
                  Qn(r, this.relativeTarget));
                l &&
                  ((this.animationValues = o),
                  (function (e, t, r, n, i, o) {
                    i
                      ? ((e.opacity = Ft(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          _n(n)
                        )),
                        (e.opacityExit = Ft(
                          void 0 !== t.opacity ? t.opacity : 1,
                          0,
                          Xn(n)
                        )))
                      : o &&
                        (e.opacity = Ft(
                          void 0 !== t.opacity ? t.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          n
                        ));
                    for (let i = 0; i < Kn; i++) {
                      let o = `border${$n[i]}Radius`,
                        s = Yn(t, o),
                        a = Yn(r, o);
                      (void 0 === s && void 0 === a) ||
                        (s || (s = 0),
                        a || (a = 0),
                        0 === s || 0 === a || Zn(s) === Zn(a)
                          ? ((e[o] = Math.max(Ft(Gn(s), Gn(a), n), 0)),
                            (X.test(a) || X.test(s)) && (e[o] += "%"))
                          : (e[o] = a));
                    }
                    (t.rotate || r.rotate) &&
                      (e.rotate = Ft(t.rotate || 0, r.rotate || 0, n));
                  })(o, i, this.latestValues, n, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, Le.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = Le.Wi.update(() => {
                (In.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (e, t, r) {
                    let n = D(0) ? 0 : Br(0);
                    return n.start(Rr("", n, 1e3, r)), n.animation;
                  })(0, 0, {
                    ...e,
                    onUpdate: (t) => {
                      this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: t,
                target: r,
                layout: n,
                latestValues: i,
              } = e;
            if (t && r && n) {
              if (
                this !== e &&
                this.layout &&
                n &&
                Ni(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                r = this.target || vn();
                let t = on(this.layout.layoutBox.x);
                (r.x.min = e.target.x.min), (r.x.max = r.x.min + t);
                let n = on(this.layout.layoutBox.y);
                (r.y.min = e.target.y.min), (r.y.max = r.y.min + n);
              }
              Qn(t, r),
                Dn(t, i),
                ln(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  t,
                  i
                );
            }
          }
          registerSharedNode(e, t) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new ui()),
              this.sharedNodes.get(e).add(t);
            let r = t.options.initialPromotionConfig;
            t.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(t)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: t } = this.options;
            return (
              (t &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: t } = this.options;
            return t
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: t,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, r),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              t && this.setOptions({ transition: t });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let t = !1,
              { latestValues: r } = e;
            if (
              ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (t = !0),
              !t)
            )
              return;
            let n = {};
            for (let t = 0; t < hi.length; t++) {
              let i = "rotate" + hi[t];
              r[i] && ((n[i] = r[i]), e.setStaticValue(i, 0));
            }
            for (let t in (e.render(), n)) e.setStaticValue(t, n[t]);
            e.scheduleRender();
          }
          getProjectionStyles(e = {}) {
            var t, r;
            let n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return { visibility: "hidden" };
            n.visibility = "";
            let i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents = Me(e.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let o = this.getLead();
            if (!this.projectionDelta || !this.layout || !o.target) {
              let t = {};
              return (
                this.options.layoutId &&
                  ((t.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (t.pointerEvents = Me(e.pointerEvents) || "")),
                this.hasProjected &&
                  !En(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                t
              );
            }
            let s = o.animationValues || o.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = ci(
                this.projectionDeltaWithTransform,
                this.treeScale,
                s
              )),
              i && (n.transform = i(s, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let e in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            o.animationValues
              ? (n.opacity =
                  o === this
                    ? null !==
                        (r =
                          null !== (t = s.opacity) && void 0 !== t
                            ? t
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (n.opacity =
                  o === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            M)) {
              if (void 0 === s[e]) continue;
              let { correct: t, applyTo: r } = M[e],
                i = "none" === n.transform ? s[e] : t(s[e], o);
              if (r) {
                let e = r.length;
                for (let t = 0; t < e; t++) n[r[t]] = i;
              } else n[e] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  o === this ? Me(e.pointerEvents) || "" : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var t;
              return null === (t = e.currentAnimation) || void 0 === t
                ? void 0
                : t.stop();
            }),
              this.root.nodes.forEach(Ei),
              this.root.sharedNodes.clear();
          }
        };
      }
      function vi(e) {
        e.updateLayout();
      }
      function yi(e) {
        var t;
        let r =
          (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
          let { layoutBox: t, measuredBox: n } = e.layout,
            { animationType: i } = e.options,
            o = r.source !== e.layout.source;
          "size" === i
            ? yn((e) => {
                let n = o ? r.measuredBox[e] : r.layoutBox[e],
                  i = on(n);
                (n.min = t[e].min), (n.max = n.min + i);
              })
            : Ni(i, r.layoutBox, t) &&
              yn((n) => {
                let i = o ? r.measuredBox[n] : r.layoutBox[n],
                  s = on(t[n]);
                (i.max = i.min + s),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[n].max = e.relativeTarget[n].min + s));
              });
          let s = gn();
          ln(s, t, r.layoutBox);
          let a = gn();
          o
            ? ln(a, e.applyTransform(n, !0), r.measuredBox)
            : ln(a, t, r.layoutBox);
          let l = !si(s),
            u = !1;
          if (!e.resumeFrom) {
            let n = e.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: o } = n;
              if (i && o) {
                let s = vn();
                dn(s, r.layoutBox, i.layoutBox);
                let a = vn();
                dn(a, t, o.layoutBox),
                  ai(s, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((e.relativeTarget = a),
                    (e.relativeTargetOrigin = s),
                    (e.relativeParent = n));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: t,
            snapshot: r,
            delta: a,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (e.isLead()) {
          let { onExitComplete: t } = e.options;
          t && t();
        }
        e.options.transition = void 0;
      }
      function bi(e) {
        mi.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function xi(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function wi(e) {
        e.clearSnapshot();
      }
      function Ei(e) {
        e.clearMeasurements();
      }
      function Pi(e) {
        e.isLayoutDirty = !1;
      }
      function Ti(e) {
        let { visualElement: t } = e.options;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function Si(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function Ci(e) {
        e.resolveTargetDelta();
      }
      function ki(e) {
        e.calcProjection();
      }
      function Mi(e) {
        e.resetRotation();
      }
      function Ai(e) {
        e.removeLeadSnapshot();
      }
      function Li(e, t, r) {
        (e.translate = Ft(t.translate, 0, r)),
          (e.scale = Ft(t.scale, 1, r)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function Ri(e, t, r, n) {
        (e.min = Ft(t.min, r.min, n)), (e.max = Ft(t.max, r.max, n));
      }
      function Di(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let Vi = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        Fi = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(e),
        Oi = Fi("applewebkit/") && !Fi("chrome/") ? Math.round : Ye.Z;
      function ji(e) {
        (e.min = Oi(e.min)), (e.max = Oi(e.max));
      }
      function Ni(e, t, r) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !sn(li(t), li(r), 0.2))
        );
      }
      let Ii = gi({
          attachResizeListener: (e, t) => Ve(e, "resize", t),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        Bi = { current: void 0 },
        Wi = gi({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!Bi.current) {
              let e = new Ii({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (Bi.current = e);
            }
            return Bi.current;
          },
          resetTransform: (e, t) => {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        }),
        zi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Ui(e, t, r = 1) {
        (0, it.k)(
          r <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        );
        let [n, i] = (function (e) {
          let t = zi.exec(e);
          if (!t) return [,];
          let [, r, n] = t;
          return [r, n];
        })(e);
        if (!n) return;
        let o = window.getComputedStyle(t).getPropertyValue(n);
        if (o) {
          let e = o.trim();
          return Vr(e) ? parseFloat(e) : e;
        }
        return N(i) ? Ui(i, t, r + 1) : i;
      }
      let Hi = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        $i = (e) => Hi.has(e),
        Ki = (e) => e === W || e === q,
        Gi = (e, t) => parseFloat(e.split(", ")[t]),
        Zi =
          (e, t) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/);
            if (i) return Gi(i[1], t);
            {
              let t = n.match(/^matrix\((.+)\)$/);
              return t ? Gi(t[1], e) : 0;
            }
          },
        Yi = new Set(["x", "y", "z"]),
        _i = A.filter((e) => !Yi.has(e)),
        Xi = {
          width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) =>
            e.max - e.min - parseFloat(t) - parseFloat(r),
          top: (e, { top: t }) => parseFloat(t),
          left: (e, { left: t }) => parseFloat(t),
          bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
          right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
          x: Zi(4, 13),
          y: Zi(5, 14),
        };
      (Xi.translateX = Xi.x), (Xi.translateY = Xi.y);
      let qi = (e, t, r = {}, n = {}) => {
          (t = { ...t }), (n = { ...n });
          let i = Object.keys(t).filter($i),
            o = [],
            s = !1,
            a = [];
          if (
            (i.forEach((i) => {
              let l,
                u = e.getValue(i);
              if (!e.hasValue(i)) return;
              let c = r[i],
                d = Ur(c),
                p = t[i];
              if (Se(p)) {
                let e = p.length,
                  t = null === p[0] ? 1 : 0;
                d = Ur((c = p[t]));
                for (let r = t; r < e && null !== p[r]; r++)
                  l
                    ? (0, it.k)(
                        Ur(p[r]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = Ur(p[r])),
                      (0, it.k)(
                        l === d || (Ki(d) && Ki(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = Ur(p);
              if (d !== l)
                if (Ki(d) && Ki(l)) {
                  let e = u.get();
                  "string" == typeof e && u.set(parseFloat(e)),
                    "string" == typeof p
                      ? (t[i] = parseFloat(p))
                      : Array.isArray(p) &&
                        l === q &&
                        (t[i] = p.map(parseFloat));
                } else
                  (null == d ? void 0 : d.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === c || 0 === p)
                    ? 0 === c
                      ? u.set(l.transform(c))
                      : (t[i] = d.transform(p))
                    : (s ||
                        ((o = (function (e) {
                          let t = [];
                          return (
                            _i.forEach((r) => {
                              let n = e.getValue(r);
                              void 0 !== n &&
                                (t.push([r, n.get()]),
                                n.set(r.startsWith("scale") ? 1 : 0));
                            }),
                            t.length && e.render(),
                            t
                          );
                        })(e)),
                        (s = !0)),
                      a.push(i),
                      (n[i] = void 0 !== n[i] ? n[i] : t[i]),
                      u.jump(p));
            }),
            !a.length)
          )
            return { target: t, transitionEnd: n };
          {
            let r = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((e, t, r) => {
                let n = t.measureViewportBox(),
                  i = t.current,
                  o = getComputedStyle(i),
                  { display: s } = o,
                  a = {};
                "none" === s &&
                  t.setStaticValue("display", e.display || "block"),
                  r.forEach((e) => {
                    a[e] = Xi[e](n, o);
                  }),
                  t.render();
                let l = t.measureViewportBox();
                return (
                  r.forEach((r) => {
                    let n = t.getValue(r);
                    n && n.jump(a[r]), (e[r] = Xi[r](l, o));
                  }),
                  e
                );
              })(t, e, a);
            return (
              o.length &&
                o.forEach(([t, r]) => {
                  e.getValue(t).set(r);
                }),
              e.render(),
              E.j && null !== r && window.scrollTo({ top: r }),
              { target: i, transitionEnd: n }
            );
          }
        },
        Ji = (e, t, r, n) => {
          var i, o;
          let s = (function (e, { ...t }, r) {
            let n = e.current;
            if (!(n instanceof Element)) return { target: t, transitionEnd: r };
            for (let i in (r && (r = { ...r }),
            e.values.forEach((e) => {
              let t = e.get();
              if (!N(t)) return;
              let r = Ui(t, n);
              r && e.set(r);
            }),
            t)) {
              let e = t[i];
              if (!N(e)) continue;
              let o = Ui(e, n);
              o && ((t[i] = o), r || (r = {}), void 0 === r[i] && (r[i] = e));
            }
            return { target: t, transitionEnd: r };
          })(e, t, n);
          return (
            (t = s.target),
            (o = n = s.transitionEnd),
            ((e) => Object.keys(e).some($i))((i = t))
              ? qi(e, i, r, o)
              : { target: i, transitionEnd: o }
          );
        },
        Qi = { current: null },
        eo = { current: !1 },
        to = new WeakMap(),
        ro = Object.keys(w),
        no = ro.length,
        io = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        oo = g.length,
        so = class {
          constructor(
            {
              parent: e,
              props: t,
              presenceContext: r,
              reducedMotionConfig: n,
              visualState: i,
            },
            o = {}
          ) {
            (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.features = {}),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = () =>
                this.notify("Update", this.latestValues)),
              (this.render = () => {
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection
                  ));
              }),
              (this.scheduleRender = () => Le.Wi.render(this.render, !1, !0));
            let { latestValues: s, renderState: a } = i;
            (this.latestValues = s),
              (this.baseTarget = { ...s }),
              (this.initialValues = t.initial ? { ...s } : {}),
              (this.renderState = a),
              (this.parent = e),
              (this.props = t),
              (this.presenceContext = r),
              (this.depth = e ? e.depth + 1 : 0),
              (this.reducedMotionConfig = n),
              (this.options = o),
              (this.isControllingVariants = v(t)),
              (this.isVariantNode = y(t)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = !(!e || !e.current));
            let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(
              t,
              {}
            );
            for (let e in u) {
              let t = u[e];
              void 0 !== s[e] && D(t) && (t.set(s[e], !1), Dr(l) && l.add(e));
            }
          }
          scrapeMotionValuesFromProps(e, t) {
            return {};
          }
          mount(e) {
            (this.current = e),
              to.set(e, this),
              this.projection &&
                !this.projection.instance &&
                this.projection.mount(e),
              this.parent &&
                this.isVariantNode &&
                !this.isControllingVariants &&
                (this.removeFromVariantTree =
                  this.parent.addVariantChild(this)),
              this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
              eo.current ||
                (function () {
                  if (((eo.current = !0), E.j))
                    if (window.matchMedia) {
                      let e = window.matchMedia("(prefers-reduced-motion)"),
                        t = () => (Qi.current = e.matches);
                      e.addListener(t), t();
                    } else Qi.current = !1;
                })(),
              (this.shouldReduceMotion =
                "never" !== this.reducedMotionConfig &&
                ("always" === this.reducedMotionConfig || Qi.current)),
              this.parent && this.parent.children.add(this),
              this.update(this.props, this.presenceContext);
          }
          unmount() {
            for (let e in (to.delete(this.current),
            this.projection && this.projection.unmount(),
            (0, Le.Pn)(this.notifyUpdate),
            (0, Le.Pn)(this.render),
            this.valueSubscriptions.forEach((e) => e()),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this),
            this.events))
              this.events[e].clear();
            for (let e in this.features) this.features[e].unmount();
            this.current = null;
          }
          bindToMotionValue(e, t) {
            let r = L.has(e),
              n = t.on("change", (t) => {
                (this.latestValues[e] = t),
                  this.props.onUpdate &&
                    Le.Wi.update(this.notifyUpdate, !1, !0),
                  r &&
                    this.projection &&
                    (this.projection.isTransformDirty = !0);
              }),
              i = t.on("renderRequest", this.scheduleRender);
            this.valueSubscriptions.set(e, () => {
              n(), i();
            });
          }
          sortNodePosition(e) {
            return this.current &&
              this.sortInstanceNodePosition &&
              this.type === e.type
              ? this.sortInstanceNodePosition(this.current, e.current)
              : 0;
          }
          loadFeatures({ children: e, ...t }, r, n, i) {
            let o, s;
            for (let e = 0; e < no; e++) {
              let r = ro[e],
                {
                  isEnabled: n,
                  Feature: i,
                  ProjectionNode: a,
                  MeasureLayout: l,
                } = w[r];
              a && (o = a),
                n(t) &&
                  (!this.features[r] && i && (this.features[r] = new i(this)),
                  l && (s = l));
            }
            if (!this.projection && o) {
              this.projection = new o(
                this.latestValues,
                this.parent && this.parent.projection
              );
              let {
                layoutId: e,
                layout: r,
                drag: n,
                dragConstraints: s,
                layoutScroll: a,
                layoutRoot: l,
              } = t;
              this.projection.setOptions({
                layoutId: e,
                layout: r,
                alwaysMeasureLayout: !!n || (s && p(s)),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: "string" == typeof r ? r : "both",
                initialPromotionConfig: i,
                layoutScroll: a,
                layoutRoot: l,
              });
            }
            return s;
          }
          updateFeatures() {
            for (let e in this.features) {
              let t = this.features[e];
              t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
            }
          }
          triggerBuild() {
            this.build(
              this.renderState,
              this.latestValues,
              this.options,
              this.props
            );
          }
          measureViewportBox() {
            return this.current
              ? this.measureInstanceViewportBox(this.current, this.props)
              : vn();
          }
          getStaticValue(e) {
            return this.latestValues[e];
          }
          setStaticValue(e, t) {
            this.latestValues[e] = t;
          }
          makeTargetAnimatable(e, t = !0) {
            return this.makeTargetAnimatableFromInstance(e, this.props, t);
          }
          update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) &&
              this.scheduleRender(),
              (this.prevProps = this.props),
              (this.props = e),
              (this.prevPresenceContext = this.presenceContext),
              (this.presenceContext = t);
            for (let t = 0; t < io.length; t++) {
              let r = io[t];
              this.propEventSubscriptions[r] &&
                (this.propEventSubscriptions[r](),
                delete this.propEventSubscriptions[r]);
              let n = e["on" + r];
              n && (this.propEventSubscriptions[r] = this.on(r, n));
            }
            (this.prevMotionValues = (function (e, t, r) {
              let { willChange: n } = t;
              for (let i in t) {
                let o = t[i],
                  s = r[i];
                if (D(o)) e.addValue(i, o), Dr(n) && n.add(i);
                else if (D(s))
                  e.addValue(i, Br(o, { owner: e })), Dr(n) && n.remove(i);
                else if (s !== o)
                  if (e.hasValue(i)) {
                    let t = e.getValue(i);
                    t.hasAnimated || t.set(o);
                  } else {
                    let t = e.getStaticValue(i);
                    e.addValue(i, Br(void 0 !== t ? t : o, { owner: e }));
                  }
              }
              for (let n in r) void 0 === t[n] && e.removeValue(n);
              return t;
            })(
              this,
              this.scrapeMotionValuesFromProps(e, this.prevProps),
              this.prevMotionValues
            )),
              this.handleChildMotionValue && this.handleChildMotionValue();
          }
          getProps() {
            return this.props;
          }
          getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0;
          }
          getDefaultTransition() {
            return this.props.transition;
          }
          getTransformPagePoint() {
            return this.props.transformPagePoint;
          }
          getClosestVariantNode() {
            return this.isVariantNode
              ? this
              : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
          }
          getVariantContext(e = !1) {
            if (e)
              return this.parent ? this.parent.getVariantContext() : void 0;
            if (!this.isControllingVariants) {
              let e = (this.parent && this.parent.getVariantContext()) || {};
              return (
                void 0 !== this.props.initial &&
                  (e.initial = this.props.initial),
                e
              );
            }
            let t = {};
            for (let e = 0; e < oo; e++) {
              let r = g[e],
                n = this.props[r];
              (h(n) || !1 === n) && (t[r] = n);
            }
            return t;
          }
          addVariantChild(e) {
            let t = this.getClosestVariantNode();
            if (t)
              return (
                t.variantChildren && t.variantChildren.add(e),
                () => t.variantChildren.delete(e)
              );
          }
          addValue(e, t) {
            t !== this.values.get(e) &&
              (this.removeValue(e), this.bindToMotionValue(e, t)),
              this.values.set(e, t),
              (this.latestValues[e] = t.get());
          }
          removeValue(e) {
            this.values.delete(e);
            let t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)),
              delete this.latestValues[e],
              this.removeValueFromRenderState(e, this.renderState);
          }
          hasValue(e) {
            return this.values.has(e);
          }
          getValue(e, t) {
            if (this.props.values && this.props.values[e])
              return this.props.values[e];
            let r = this.values.get(e);
            return (
              void 0 === r &&
                void 0 !== t &&
                ((r = Br(t, { owner: this })), this.addValue(e, r)),
              r
            );
          }
          readValue(e) {
            var t;
            return void 0 === this.latestValues[e] && this.current
              ? null !== (t = this.getBaseTargetFromProps(this.props, e)) &&
                void 0 !== t
                ? t
                : this.readValueFromInstance(this.current, e, this.options)
              : this.latestValues[e];
          }
          setBaseTarget(e, t) {
            this.baseTarget[e] = t;
          }
          getBaseTarget(e) {
            var t;
            let { initial: r } = this.props,
              n =
                "string" == typeof r || "object" == typeof r
                  ? null === (t = Pe(this.props, r)) || void 0 === t
                    ? void 0
                    : t[e]
                  : void 0;
            if (r && void 0 !== n) return n;
            let i = this.getBaseTargetFromProps(this.props, e);
            return void 0 === i || D(i)
              ? void 0 !== this.initialValues[e] && void 0 === n
                ? void 0
                : this.baseTarget[e]
              : i;
          }
          on(e, t) {
            return (
              this.events[e] || (this.events[e] = new jr()),
              this.events[e].add(t)
            );
          }
          notify(e, ...t) {
            this.events[e] && this.events[e].notify(...t);
          }
        },
        ao = class extends so {
          sortInstanceNodePosition(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1;
          }
          getBaseTargetFromProps(e, t) {
            return e.style ? e.style[t] : void 0;
          }
          removeValueFromRenderState(e, { vars: t, style: r }) {
            delete t[e], delete r[e];
          }
          makeTargetAnimatableFromInstance(
            { transition: e, transitionEnd: t, ...r },
            { transformValues: n },
            i
          ) {
            let o = (function (e, t, r) {
              let n = {};
              for (let i in e) {
                let e = (function (e, t) {
                  if (!t) return;
                  return (t[e] || t.default || t).from;
                })(i, t);
                if (void 0 !== e) n[i] = e;
                else {
                  let e = r.getValue(i);
                  e && (n[i] = e.get());
                }
              }
              return n;
            })(r, e || {}, this);
            if ((n && (t && (t = n(t)), r && (r = n(r)), o && (o = n(o))), i)) {
              !(function (e, t, r) {
                var n, i;
                let o = Object.keys(t).filter((t) => !e.hasValue(t)),
                  s = o.length;
                if (s)
                  for (let a = 0; a < s; a++) {
                    let s = o[a],
                      l = t[s],
                      u = null;
                    Array.isArray(l) && (u = l[0]),
                      null === u &&
                        (u =
                          null !==
                            (i =
                              null !== (n = r[s]) && void 0 !== n
                                ? n
                                : e.readValue(s)) && void 0 !== i
                            ? i
                            : t[s]),
                      null != u &&
                        ("string" == typeof u && (Vr(u) || Ar(u))
                          ? (u = parseFloat(u))
                          : !$r(u) && Yt.test(l) && (u = Mr(s, l)),
                        e.addValue(s, Br(u, { owner: e })),
                        void 0 === r[s] && (r[s] = u),
                        null !== u && e.setBaseTarget(s, u));
                  }
              })(this, r, o);
              let e = Ji(this, r, o, t);
              (t = e.transitionEnd), (r = e.target);
            }
            return { transition: e, transitionEnd: t, ...r };
          }
        },
        lo = class extends ao {
          readValueFromInstance(e, t) {
            if (L.has(t)) {
              let e = kr(t);
              return (e && e.default) || 0;
            }
            {
              let r = window.getComputedStyle(e),
                n = (j(t) ? r.getPropertyValue(t) : r[t]) || 0;
              return "string" == typeof n ? n.trim() : n;
            }
          }
          measureInstanceViewportBox(e, { transformPagePoint: t }) {
            return Vn(e, t);
          }
          build(e, t, r, n) {
            ne(e, t, r, n.transformTemplate);
          }
          scrapeMotionValuesFromProps(e, t) {
            return we(e, t);
          }
          handleChildMotionValue() {
            this.childSubscription &&
              (this.childSubscription(), delete this.childSubscription);
            let { children: e } = this.props;
            D(e) &&
              (this.childSubscription = e.on("change", (e) => {
                this.current && (this.current.textContent = `${e}`);
              }));
          }
          renderInstance(e, t, r, n) {
            ye(e, t, r, n);
          }
        },
        uo = class extends ao {
          constructor() {
            super(...arguments), (this.isSVGTag = !1);
          }
          getBaseTargetFromProps(e, t) {
            return e[t];
          }
          readValueFromInstance(e, t) {
            if (L.has(t)) {
              let e = kr(t);
              return (e && e.default) || 0;
            }
            return (t = be.has(t) ? t : ve(t)), e.getAttribute(t);
          }
          measureInstanceViewportBox() {
            return vn();
          }
          scrapeMotionValuesFromProps(e, t) {
            return Ee(e, t);
          }
          build(e, t, r, n) {
            he(e, t, r, this.isSVGTag, n.transformTemplate);
          }
          renderInstance(e, t, r, n) {
            xe(e, t, 0, n);
          }
          mount(e) {
            (this.isSVGTag = me(e.tagName)), super.mount(e);
          }
        },
        co = (e, t) =>
          k(e)
            ? new uo(t, { enableHardwareAcceleration: !1 })
            : new lo(t, { enableHardwareAcceleration: !0 }),
        po = {
          animation: {
            Feature: class extends Ke {
              constructor(e) {
                super(e),
                  e.animationState ||
                    (e.animationState = (function (e) {
                      let t = (t) =>
                          Promise.all(
                            t.map(({ animation: t, options: r }) =>
                              (function (e, t, r = {}) {
                                let n;
                                if (
                                  (e.notify("AnimationStart", t),
                                  Array.isArray(t))
                                ) {
                                  let i = t.map((t) => Gr(e, t, r));
                                  n = Promise.all(i);
                                } else if ("string" == typeof t)
                                  n = Gr(e, t, r);
                                else {
                                  let i =
                                    "function" == typeof t
                                      ? rt(e, t, r.custom)
                                      : t;
                                  n = Promise.all(Kr(e, i, r));
                                }
                                return n.then(() =>
                                  e.notify("AnimationComplete", t)
                                );
                              })(e, t, r)
                            )
                          ),
                        r = {
                          animate: Xr(!0),
                          whileInView: Xr(),
                          whileHover: Xr(),
                          whileTap: Xr(),
                          whileDrag: Xr(),
                          whileFocus: Xr(),
                          exit: Xr(),
                        },
                        n = !0,
                        i = (t, r) => {
                          let n = rt(e, r);
                          if (n) {
                            let { transition: e, transitionEnd: r, ...i } = n;
                            t = { ...t, ...i, ...r };
                          }
                          return t;
                        };
                      function o(o, s) {
                        let a = e.getProps(),
                          l = e.getVariantContext(!0) || {},
                          u = [],
                          c = new Set(),
                          d = {},
                          p = 1 / 0;
                        for (let t = 0; t < _r; t++) {
                          var m;
                          let g = Yr[t],
                            v = r[g],
                            y = void 0 !== a[g] ? a[g] : l[g],
                            b = h(y),
                            x = g === s ? v.isActive : null;
                          !1 === x && (p = t);
                          let w = y === l[g] && y !== a[g] && b;
                          if (
                            (w && n && e.manuallyAnimateOnMount && (w = !1),
                            (v.protectedKeys = { ...d }),
                            (!v.isActive && null === x) ||
                              (!y && !v.prevProp) ||
                              f(y) ||
                              "boolean" == typeof y)
                          )
                            continue;
                          let E =
                              ((m = v.prevProp),
                              "string" == typeof y
                                ? y !== m
                                : !!Array.isArray(y) && !tt(y, m)),
                            P =
                              E ||
                              (g === s && v.isActive && !w && b) ||
                              (t > p && b),
                            T = Array.isArray(y) ? y : [y],
                            S = T.reduce(i, {});
                          !1 === x && (S = {});
                          let { prevResolvedValues: C = {} } = v,
                            k = { ...C, ...S },
                            M = (e) => {
                              (P = !0), c.delete(e), (v.needsAnimating[e] = !0);
                            };
                          for (let e in k) {
                            let t = S[e],
                              r = C[e];
                            d.hasOwnProperty(e) ||
                              (t !== r
                                ? Se(t) && Se(r)
                                  ? !tt(t, r) || E
                                    ? M(e)
                                    : (v.protectedKeys[e] = !0)
                                  : void 0 !== t
                                  ? M(e)
                                  : c.add(e)
                                : void 0 !== t && c.has(e)
                                ? M(e)
                                : (v.protectedKeys[e] = !0));
                          }
                          (v.prevProp = y),
                            (v.prevResolvedValues = S),
                            v.isActive && (d = { ...d, ...S }),
                            n && e.blockInitialAnimation && (P = !1),
                            P &&
                              !w &&
                              u.push(
                                ...T.map((e) => ({
                                  animation: e,
                                  options: { type: g, ...o },
                                }))
                              );
                        }
                        if (c.size) {
                          let t = {};
                          c.forEach((r) => {
                            let n = e.getBaseTarget(r);
                            void 0 !== n && (t[r] = n);
                          }),
                            u.push({ animation: t });
                        }
                        let g = !!u.length;
                        return (
                          n &&
                            !1 === a.initial &&
                            !e.manuallyAnimateOnMount &&
                            (g = !1),
                          (n = !1),
                          g ? t(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: o,
                        setActive: function (t, n, i) {
                          var s;
                          if (r[t].isActive === n) return Promise.resolve();
                          null === (s = e.variantChildren) ||
                            void 0 === s ||
                            s.forEach((e) => {
                              var r;
                              return null === (r = e.animationState) ||
                                void 0 === r
                                ? void 0
                                : r.setActive(t, n);
                            }),
                            (r[t].isActive = n);
                          let a = o(i, t);
                          for (let e in r) r[e].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (r) {
                          t = r(e);
                        },
                        getState: () => r,
                      };
                    })(e));
              }
              updateAnimationControlsSubscription() {
                let { animate: e } = this.node.getProps();
                this.unmount(), f(e) && (this.unmount = e.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: e } = this.node.getProps(),
                  { animate: t } = this.node.prevProps || {};
                e !== t && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends Ke {
              constructor() {
                super(...arguments), (this.id = qr++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: e,
                    onExitComplete: t,
                    custom: r,
                  } = this.node.presenceContext,
                  { isPresent: n } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || e === n) return;
                let i = this.node.animationState.setActive("exit", !e, {
                  custom: null != r ? r : this.node.getProps().custom,
                });
                t && !e && i.then(() => t(this.id));
              }
              mount() {
                let { register: e } = this.node.presenceContext || {};
                e && (this.unmount = e(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends Ke {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: e = {} } = this.node.getProps(),
                  { root: t, margin: r, amount: n = "some", once: i } = e,
                  o = {
                    root: t ? t.current : void 0,
                    rootMargin: r,
                    threshold: "number" == typeof n ? n : et[n],
                  };
                return (function (e, t, r) {
                  let n = (function ({ root: e, ...t }) {
                    let r = e || document;
                    qe.has(r) || qe.set(r, {});
                    let n = qe.get(r),
                      i = JSON.stringify(t);
                    return (
                      n[i] ||
                        (n[i] = new IntersectionObserver(Qe, {
                          root: e,
                          ...t,
                        })),
                      n[i]
                    );
                  })(t);
                  return (
                    Xe.set(e, r),
                    n.observe(e),
                    () => {
                      Xe.delete(e), n.unobserve(e);
                    }
                  );
                })(this.node.current, o, (e) => {
                  let { isIntersecting: t } = e;
                  if (
                    this.isInView === t ||
                    ((this.isInView = t), i && !t && this.hasEnteredView)
                  )
                    return;
                  t && (this.hasEnteredView = !0),
                    this.node.animationState &&
                      this.node.animationState.setActive("whileInView", t);
                  let { onViewportEnter: r, onViewportLeave: n } =
                      this.node.getProps(),
                    o = t ? r : n;
                  o && o(e);
                });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: e, prevProps: t } = this.node,
                  r = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: e = {} },
                      { viewport: t = {} } = {}
                    ) {
                      return (r) => e[r] !== t[r];
                    })(e, t)
                  );
                r && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends Ke {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = Ye.Z),
                  (this.removeEndListeners = Ye.Z),
                  (this.removeAccessibleListeners = Ye.Z),
                  (this.startPointerPress = (e, t) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let r = this.node.getProps(),
                      n = Ne(
                        window,
                        "pointerup",
                        (e, t) => {
                          if (!this.checkPressEnd()) return;
                          let { onTap: r, onTapCancel: n } =
                            this.node.getProps();
                          Le.Wi.update(() => {
                            Ze(this.node.current, e.target)
                              ? r && r(e, t)
                              : n && n(e, t);
                          });
                        },
                        { passive: !(r.onTap || r.onPointerUp) }
                      ),
                      i = Ne(
                        window,
                        "pointercancel",
                        (e, t) => this.cancelPress(e, t),
                        { passive: !(r.onTapCancel || r.onPointerCancel) }
                      );
                    (this.removeEndListeners = Be(n, i)), this.startPress(e, t);
                  }),
                  (this.startAccessiblePress = () => {
                    let e = Ve(this.node.current, "keydown", (e) => {
                        "Enter" !== e.key ||
                          this.isPressing ||
                          (this.removeEndListeners(),
                          (this.removeEndListeners = Ve(
                            this.node.current,
                            "keyup",
                            (e) => {
                              "Enter" === e.key &&
                                this.checkPressEnd() &&
                                _e("up", (e, t) => {
                                  let { onTap: r } = this.node.getProps();
                                  r && Le.Wi.update(() => r(e, t));
                                });
                            }
                          )),
                          _e("down", (e, t) => {
                            this.startPress(e, t);
                          }));
                      }),
                      t = Ve(this.node.current, "blur", () => {
                        this.isPressing &&
                          _e("cancel", (e, t) => this.cancelPress(e, t));
                      });
                    this.removeAccessibleListeners = Be(e, t);
                  });
              }
              startPress(e, t) {
                this.isPressing = !0;
                let { onTapStart: r, whileTap: n } = this.node.getProps();
                n &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  r && Le.Wi.update(() => r(e, t));
              }
              checkPressEnd() {
                return (
                  this.removeEndListeners(),
                  (this.isPressing = !1),
                  this.node.getProps().whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !$e()
                );
              }
              cancelPress(e, t) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: r } = this.node.getProps();
                r && Le.Wi.update(() => r(e, t));
              }
              mount() {
                let e = this.node.getProps(),
                  t = Ne(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(e.onTapStart || e.onPointerStart) }
                  ),
                  r = Ve(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = Be(t, r);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends Ke {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let e = !1;
                try {
                  e = this.node.current.matches(":focus-visible");
                } catch (t) {
                  e = !0;
                }
                e &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = Be(
                  Ve(this.node.current, "focus", () => this.onFocus()),
                  Ve(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends Ke {
              mount() {
                this.unmount = Be(Ge(this.node, !0), Ge(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends Ke {
              constructor() {
                super(...arguments), (this.removePointerDownListener = Ye.Z);
              }
              onPointerDown(e) {
                this.session = new Qr(e, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: e,
                  onPanStart: t,
                  onPan: r,
                  onPanEnd: n,
                } = this.node.getProps();
                return {
                  onSessionStart: Nn(e),
                  onStart: Nn(t),
                  onMove: r,
                  onEnd: (e, t) => {
                    delete this.session, n && Le.Wi.update(() => n(e, t));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = Ne(
                  this.node.current,
                  "pointerdown",
                  (e) => this.onPointerDown(e)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends Ke {
              constructor(e) {
                super(e),
                  (this.removeGroupControls = Ye.Z),
                  (this.removeListeners = Ye.Z),
                  (this.controls = new On(e));
              }
              mount() {
                let { dragControls: e } = this.node.getProps();
                e && (this.removeGroupControls = e.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || Ye.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: Wi,
            MeasureLayout: Un,
          },
          layout: { ProjectionNode: Wi, MeasureLayout: Un },
        },
        ho = (function (e) {
          function t(e, t = {}) {
            return (function ({
              preloadedFeatures: e,
              createVisualElement: t,
              useRender: r,
              useVisualState: n,
              Component: i,
            }) {
              e &&
                (function (e) {
                  for (let t in e) w[t] = { ...w[t], ...e[t] };
                })(e);
              let o = (0, s.forwardRef)(function (o, f) {
                var m;
                let g,
                  y = {
                    ...(0, s.useContext)(a),
                    ...o,
                    layoutId: (function ({ layoutId: e }) {
                      let t = (0, s.useContext)(P.p).id;
                      return t && void 0 !== e ? t + "-" + e : e;
                    })(o),
                  },
                  { isStatic: x } = y,
                  w = (function (e) {
                    let { initial: t, animate: r } = (function (e, t) {
                      if (v(e)) {
                        let { initial: t, animate: r } = e;
                        return {
                          initial: !1 === t || h(t) ? t : void 0,
                          animate: h(r) ? r : void 0,
                        };
                      }
                      return !1 !== e.inherit ? t : {};
                    })(e, (0, s.useContext)(l));
                    return (0, s.useMemo)(
                      () => ({ initial: t, animate: r }),
                      [b(t), b(r)]
                    );
                  })(o),
                  S = n(o, x);
                if (!x && E.j) {
                  w.visualElement = (function (e, t, r, n) {
                    let { visualElement: i } = (0, s.useContext)(l),
                      o = (0, s.useContext)(d),
                      p = (0, s.useContext)(u.O),
                      h = (0, s.useContext)(a).reducedMotion,
                      f = (0, s.useRef)();
                    (n = n || o.renderer),
                      !f.current &&
                        n &&
                        (f.current = n(e, {
                          visualState: t,
                          parent: i,
                          props: r,
                          presenceContext: p,
                          blockInitialAnimation: !!p && !1 === p.initial,
                          reducedMotionConfig: h,
                        }));
                    let m = f.current;
                    (0, s.useInsertionEffect)(() => {
                      m && m.update(r, p);
                    });
                    let g = (0, s.useRef)(!!window.HandoffAppearAnimations);
                    return (
                      (0, c.L)(() => {
                        m &&
                          (m.render(),
                          g.current &&
                            m.animationState &&
                            m.animationState.animateChanges());
                      }),
                      (0, s.useEffect)(() => {
                        m &&
                          (m.updateFeatures(),
                          !g.current &&
                            m.animationState &&
                            m.animationState.animateChanges(),
                          (window.HandoffAppearAnimations = void 0),
                          (g.current = !1));
                      }),
                      m
                    );
                  })(i, S, y, t);
                  let r = (0, s.useContext)(T),
                    n = (0, s.useContext)(d).strict;
                  w.visualElement &&
                    (g = w.visualElement.loadFeatures(y, n, e, r));
                }
                return s.createElement(
                  l.Provider,
                  { value: w },
                  g && w.visualElement
                    ? s.createElement(g, {
                        visualElement: w.visualElement,
                        ...y,
                      })
                    : null,
                  r(
                    i,
                    o,
                    ((m = w.visualElement),
                    (0, s.useCallback)(
                      (e) => {
                        e && S.mount && S.mount(e),
                          m && (e ? m.mount(e) : m.unmount()),
                          f &&
                            ("function" == typeof f
                              ? f(e)
                              : p(f) && (f.current = e));
                      },
                      [m]
                    )),
                    S,
                    x,
                    w.visualElement
                  )
                );
              });
              return (o[S] = i), o;
            })(
              ((e, t) =>
                (function (e, { forwardMotionProps: t = !1 }, r, n) {
                  return {
                    ...(k(e) ? Re : De),
                    preloadedFeatures: r,
                    useRender: (function (e = !1) {
                      return (t, r, n, { latestValues: i }, o) => {
                        let a = (k(t) ? ge : se)(r, i, o, t),
                          l = (function (e, t, r) {
                            let n = {};
                            for (let i in e)
                              ("values" !== i || "object" != typeof e.values) &&
                                (ue(i) ||
                                  (!0 === r && le(i)) ||
                                  (!t && !le(i)) ||
                                  (e.draggable && i.startsWith("onDrag"))) &&
                                (n[i] = e[i]);
                            return n;
                          })(r, "string" == typeof t, e),
                          u = { ...l, ...a, ref: n },
                          { children: c } = r,
                          d = (0, s.useMemo)(() => (D(c) ? c.get() : c), [c]);
                        return (0, s.createElement)(t, { ...u, children: d });
                      };
                    })(t),
                    createVisualElement: n,
                    Component: e,
                  };
                })(e, t, po, co))(e, t)
            );
          }
          if ("undefined" == typeof Proxy) return t;
          let r = new Map();
          return new Proxy(t, {
            get: (e, n) => (r.has(n) || r.set(n, t(n)), r.get(n)),
          });
        })();
    },
    5487: function (e, t, r) {
      r.d(t, {
        K: function () {
          return i;
        },
        k: function () {
          return o;
        },
      });
      var n = r(1662);
      let i = n.Z,
        o = n.Z;
    },
    1741: function (e, t, r) {
      r.d(t, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    1662: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      let n = (e) => e;
    },
    6681: function (e, t, r) {
      r.d(t, {
        h: function () {
          return i;
        },
      });
      var n = r(7294);
      function i(e) {
        let t = (0, n.useRef)(null);
        return null === t.current && (t.current = e()), t.current;
      }
    },
    8868: function (e, t, r) {
      r.d(t, {
        L: function () {
          return i;
        },
      });
      var n = r(7294);
      let i = r(1741).j ? n.useLayoutEffect : n.useEffect;
    },
  },
]);
