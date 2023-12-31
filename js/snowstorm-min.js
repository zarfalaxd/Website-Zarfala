/** @license

 DHTML Snowstorm! JavaScript-based snow for web pages
 Making it snow on the internets since 2003. You're welcome.
 -----------------------------------------------------------
 Version 1.44.20131215 (Previous rev: 1.44.20131208)
 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License
 http://schillmania.com/projects/snowstorm/license.txt
*/
var snowStorm = (function (e, t) {
  function i(e, t) {
    return isNaN(t) && (t = 0), Math.random() * e + t;
  }
  function s() {
    e.setTimeout(function () {
      o.start(!0);
    }, 20),
      o.events.remove(a ? t : e, "mousemove", s);
  }
  (this.excludeMobile = this.autoStart = !0),
    (this.flakesMax = 128),
    (this.flakesMaxActive = 64),
    (this.animationInterval = 33),
    (this.useGPU = !0),
    (this.className = null),
    (this.excludeMobile = !0),
    (this.flakeBottom = null),
    (this.followMouse = !0),
    (this.snowColor = "#fff"),
    (this.snowCharacter = "&bull;"),
    (this.snowStick = !0),
    (this.targetElement = null),
    (this.useMeltEffect = !0),
    (this.usePixelPosition =
      this.usePositionFixed =
      this.useTwinkleEffect =
        !1),
    (this.freezeOnBlur = !0),
    (this.flakeRightOffset = this.flakeLeftOffset = 0),
    (this.flakeHeight = this.flakeWidth = 8),
    (this.vMaxX = 5),
    (this.vMaxY = 4),
    (this.zIndex = 0);
  var n,
    l,
    o = this,
    a = navigator.userAgent.match(/msie/i),
    r = navigator.userAgent.match(/msie 6/i),
    f = navigator.userAgent.match(/mobile|opera m(ob|in)/i),
    m = (a && "BackCompat" === t.compatMode) || r,
    h = null,
    u = null,
    c = null,
    d = null,
    v = null,
    p = null,
    y = null,
    k = 1,
    g = !1,
    x = !1;
  e: {
    try {
      t.createElement("div").style.opacity = "0.5";
    } catch (e) {
      l = !1;
      break e;
    }
    l = !0;
  }
  var w = !1,
    F = t.createDocumentFragment();
  return (
    (n = (function () {
      function i(e) {
        return void 0 !== n.style[e] ? e : null;
      }
      var s,
        n,
        l =
          e.requestAnimationFrame ||
          e.webkitRequestAnimationFrame ||
          e.mozRequestAnimationFrame ||
          e.oRequestAnimationFrame ||
          e.msRequestAnimationFrame ||
          function (t) {
            e.setTimeout(t, 1e3 / (o.animationInterval || 20));
          };
      return (
        (s = l
          ? function () {
              return l.apply(e, arguments);
            }
          : null),
        (n = t.createElement("div")),
        ((s = {
          transform: {
            ie: i("-ms-transform"),
            moz: i("MozTransform"),
            opera: i("OTransform"),
            webkit: i("webkitTransform"),
            w3: i("transform"),
            prop: null,
          },
          getAnimationFrame: s,
        }).transform.prop =
          s.transform.w3 ||
          s.transform.moz ||
          s.transform.webkit ||
          s.transform.ie ||
          s.transform.opera),
        (n = null),
        s
      );
    })()),
    (this.timer = null),
    (this.flakes = []),
    (this.active = this.disabled = !1),
    (this.meltFrameCount = 20),
    (this.meltFrames = []),
    (this.setXY = function (e, t, i) {
      if (!e) return !1;
      o.usePixelPosition || x
        ? ((e.style.left = t - o.flakeWidth + "px"),
          (e.style.top = i - o.flakeHeight + "px"))
        : m || o.flakeBottom
        ? ((e.style.right = 100 - (t / h) * 100 + "%"),
          (e.style.top = Math.min(i, v - o.flakeHeight) + "px"))
        : ((e.style.right = 100 - (t / h) * 100 + "%"),
          (e.style.bottom = 100 - (i / c) * 100 + "%"));
    }),
    (this.events = (function () {
      function t(e) {
        var t = (e = n.call(e)).length;
        return (
          s ? ((e[1] = "on" + e[1]), 3 < t && e.pop()) : 3 === t && e.push(!1),
          e
        );
      }
      function i(e, t) {
        var i = e.shift(),
          n = [l[t]];
        s ? i[n](e[0], e[1]) : i[n].apply(i, e);
      }
      var s = !e.addEventListener && e.attachEvent,
        n = Array.prototype.slice,
        l = {
          add: s ? "attachEvent" : "addEventListener",
          remove: s ? "detachEvent" : "removeEventListener",
        };
      return {
        add: function () {
          i(t(arguments), "add");
        },
        remove: function () {
          i(t(arguments), "remove");
        },
      };
    })()),
    (this.randomizeWind = function () {
      var e;
      if (
        ((e = i(o.vMaxX, 0.2)),
        (p = 1 === parseInt(i(2), 10) ? -1 * e : e),
        (y = i(o.vMaxY, 0.2)),
        this.flakes)
      )
        for (e = 0; e < this.flakes.length; e++)
          this.flakes[e].active && this.flakes[e].setVelocities();
    }),
    (this.scrollHandler = function () {
      var i;
      if (
        ((d = o.flakeBottom
          ? 0
          : parseInt(
              e.scrollY ||
                t.documentElement.scrollTop ||
                (m ? t.body.scrollTop : 0),
              10
            )),
        isNaN(d) && (d = 0),
        !g && !o.flakeBottom && o.flakes)
      )
        for (i = 0; i < o.flakes.length; i++)
          0 === o.flakes[i].active && o.flakes[i].stick();
    }),
    (this.resizeHandler = function () {
      e.innerWidth || e.innerHeight
        ? ((h = e.innerWidth - 16 - o.flakeRightOffset),
          (c = o.flakeBottom || e.innerHeight))
        : ((h =
            (t.documentElement.clientWidth ||
              t.body.clientWidth ||
              t.body.scrollWidth) -
            (a ? 0 : 8) -
            o.flakeRightOffset),
          (c =
            o.flakeBottom ||
            t.documentElement.clientHeight ||
            t.body.clientHeight ||
            t.body.scrollHeight)),
        (v = t.body.offsetHeight),
        (u = parseInt(h / 2, 10));
    }),
    (this.resizeHandlerAlt = function () {
      (h = o.targetElement.offsetWidth - o.flakeRightOffset),
        (c = o.flakeBottom || o.targetElement.offsetHeight),
        (u = parseInt(h / 2, 10)),
        (v = t.body.offsetHeight);
    }),
    (this.freeze = function () {
      if (o.disabled) return !1;
      (o.disabled = 1), (o.timer = null);
    }),
    (this.resume = function () {
      if (!o.disabled) return !1;
      (o.disabled = 0), o.timerInit();
    }),
    (this.toggleSnow = function () {
      o.flakes.length
        ? ((o.active = !o.active),
          o.active ? (o.show(), o.resume()) : (o.stop(), o.freeze()))
        : o.start();
    }),
    (this.stop = function () {
      var i;
      for (this.freeze(), i = 0; i < this.flakes.length; i++)
        this.flakes[i].o.style.display = "none";
      o.events.remove(e, "scroll", o.scrollHandler),
        o.events.remove(e, "resize", o.resizeHandler),
        o.freezeOnBlur &&
          (a
            ? (o.events.remove(t, "focusout", o.freeze),
              o.events.remove(t, "focusin", o.resume))
            : (o.events.remove(e, "blur", o.freeze),
              o.events.remove(e, "focus", o.resume)));
    }),
    (this.show = function () {
      var e;
      for (e = 0; e < this.flakes.length; e++)
        this.flakes[e].o.style.display = "block";
    }),
    (this.SnowFlake = function (e, s, a) {
      var r = this;
      (this.type = e),
        (this.x = s || parseInt(i(h - 20), 10)),
        (this.y = isNaN(a) ? -i(c) - 12 : a),
        (this.vY = this.vX = null),
        (this.vAmpTypes = [1, 1.2, 1.4, 1.6, 1.8]),
        (this.vAmp = this.vAmpTypes[this.type] || 1),
        (this.melting = !1),
        (this.meltFrameCount = o.meltFrameCount),
        (this.meltFrames = o.meltFrames),
        (this.twinkleFrame = this.meltFrame = 0),
        (this.active = 1),
        (this.fontSize = 10 + (this.type / 5) * 10),
        (this.o = t.createElement("div")),
        (this.o.innerHTML = o.snowCharacter),
        o.className && this.o.setAttribute("class", o.className),
        (this.o.style.color = o.snowColor),
        (this.o.style.position = g ? "fixed" : "absolute"),
        o.useGPU &&
          n.transform.prop &&
          (this.o.style[n.transform.prop] = "translate3d(0px, 0px, 0px)"),
        (this.o.style.width = o.flakeWidth + "px"),
        (this.o.style.height = o.flakeHeight + "px"),
        (this.o.style.fontFamily = "arial,verdana"),
        (this.o.style.cursor = "default"),
        (this.o.style.overflow = "hidden"),
        (this.o.style.fontWeight = "normal"),
        (this.o.style.zIndex = o.zIndex),
        F.appendChild(this.o),
        (this.refresh = function () {
          if (isNaN(r.x) || isNaN(r.y)) return !1;
          o.setXY(r.o, r.x, r.y);
        }),
        (this.stick = function () {
          m ||
          (o.targetElement !== t.documentElement && o.targetElement !== t.body)
            ? (r.o.style.top = c + d - o.flakeHeight + "px")
            : o.flakeBottom
            ? (r.o.style.top = o.flakeBottom + "px")
            : ((r.o.style.display = "none"),
              (r.o.style.top = "auto"),
              (r.o.style.bottom = "0%"),
              (r.o.style.position = "fixed"),
              (r.o.style.display = "block"));
        }),
        (this.vCheck = function () {
          0 <= r.vX && 0.2 > r.vX
            ? (r.vX = 0.2)
            : 0 > r.vX && -0.2 < r.vX && (r.vX = -0.2),
            0 <= r.vY && 0.2 > r.vY && (r.vY = 0.2);
        }),
        (this.move = function () {
          var e = r.vX * k;
          (r.x += e),
            (r.y += r.vY * r.vAmp),
            r.x >= h || h - r.x < o.flakeWidth
              ? (r.x = 0)
              : 0 > e &&
                r.x - o.flakeLeftOffset < -o.flakeWidth &&
                (r.x = h - o.flakeWidth - 1),
            r.refresh(),
            c + d - r.y + o.flakeHeight < o.flakeHeight
              ? ((r.active = 0), o.snowStick ? r.stick() : r.recycle())
              : (o.useMeltEffect &&
                  r.active &&
                  3 > r.type &&
                  !r.melting &&
                  0.998 < Math.random() &&
                  ((r.melting = !0), r.melt()),
                o.useTwinkleEffect &&
                  (0 > r.twinkleFrame
                    ? 0.97 < Math.random() &&
                      (r.twinkleFrame = parseInt(8 * Math.random(), 10))
                    : (r.twinkleFrame--,
                      l
                        ? (r.o.style.opacity =
                            r.twinkleFrame && 0 == r.twinkleFrame % 2 ? 0 : 1)
                        : (r.o.style.visibility =
                            r.twinkleFrame && 0 == r.twinkleFrame % 2
                              ? "hidden"
                              : "visible"))));
        }),
        (this.animate = function () {
          r.move();
        }),
        (this.setVelocities = function () {
          (r.vX = p + i(0.12 * o.vMaxX, 0.1)),
            (r.vY = y + i(0.12 * o.vMaxY, 0.1));
        }),
        (this.setOpacity = function (e, t) {
          if (!l) return !1;
          e.style.opacity = t;
        }),
        (this.melt = function () {
          o.useMeltEffect && r.melting && r.meltFrame < r.meltFrameCount
            ? (r.setOpacity(r.o, r.meltFrames[r.meltFrame]),
              (r.o.style.fontSize =
                r.fontSize -
                r.fontSize * (r.meltFrame / r.meltFrameCount) +
                "px"),
              (r.o.style.lineHeight =
                o.flakeHeight +
                2 +
                0.75 * o.flakeHeight * (r.meltFrame / r.meltFrameCount) +
                "px"),
              r.meltFrame++)
            : r.recycle();
        }),
        (this.recycle = function () {
          (r.o.style.display = "none"),
            (r.o.style.position = g ? "fixed" : "absolute"),
            (r.o.style.bottom = "auto"),
            r.setVelocities(),
            r.vCheck(),
            (r.meltFrame = 0),
            (r.melting = !1),
            r.setOpacity(r.o, 1),
            (r.o.style.padding = "0px"),
            (r.o.style.margin = "0px"),
            (r.o.style.fontSize = r.fontSize + "px"),
            (r.o.style.lineHeight = o.flakeHeight + 2 + "px"),
            (r.o.style.textAlign = "center"),
            (r.o.style.verticalAlign = "baseline"),
            (r.x = parseInt(i(h - o.flakeWidth - 20), 10)),
            (r.y = parseInt(-1 * i(c), 10) - o.flakeHeight),
            r.refresh(),
            (r.o.style.display = "block"),
            (r.active = 1);
        }),
        this.recycle(),
        this.refresh();
    }),
    (this.snow = function () {
      var e,
        t = 0,
        s = null;
      s = 0;
      for (e = o.flakes.length; s < e; s++)
        1 === o.flakes[s].active && (o.flakes[s].move(), t++),
          o.flakes[s].melting && o.flakes[s].melt();
      t < o.flakesMaxActive &&
        0 === (s = o.flakes[parseInt(i(o.flakes.length), 10)]).active &&
        (s.melting = !0),
        o.timer && n.getAnimationFrame(o.snow);
    }),
    (this.mouseMove = function (e) {
      if (!o.followMouse) return !0;
      (e = parseInt(e.clientX, 10)) < u
        ? (k = (e / u) * 2 - 2)
        : (k = ((e -= u) / u) * 2);
    }),
    (this.createSnow = function (e, t) {
      var s;
      for (s = 0; s < e; s++)
        (o.flakes[o.flakes.length] = new o.SnowFlake(parseInt(i(6), 10))),
          (t || s > o.flakesMaxActive) &&
            (o.flakes[o.flakes.length - 1].active = -1);
      o.targetElement.appendChild(F);
    }),
    (this.timerInit = function () {
      (o.timer = !0), o.snow();
    }),
    (this.init = function () {
      var i;
      for (i = 0; i < o.meltFrameCount; i++)
        o.meltFrames.push(1 - i / o.meltFrameCount);
      o.randomizeWind(),
        o.createSnow(o.flakesMax),
        o.events.add(e, "resize", o.resizeHandler),
        o.events.add(e, "scroll", o.scrollHandler),
        o.freezeOnBlur &&
          (a
            ? (o.events.add(t, "focusout", o.freeze),
              o.events.add(t, "focusin", o.resume))
            : (o.events.add(e, "blur", o.freeze),
              o.events.add(e, "focus", o.resume))),
        o.resizeHandler(),
        o.scrollHandler(),
        o.followMouse && o.events.add(a ? t : e, "mousemove", o.mouseMove),
        (o.animationInterval = Math.max(20, o.animationInterval)),
        o.timerInit();
    }),
    (this.start = function (i) {
      if (w) {
        if (i) return !0;
      } else w = !0;
      if (
        "string" == typeof o.targetElement &&
        ((i = o.targetElement),
        (o.targetElement = t.getElementById(i)),
        !o.targetElement)
      )
        throw Error('Snowstorm: Unable to get targetElement "' + i + '"');
      if (
        (o.targetElement || (o.targetElement = t.body || t.documentElement),
        o.targetElement !== t.documentElement &&
          o.targetElement !== t.body &&
          ((o.resizeHandler = o.resizeHandlerAlt), (o.usePixelPosition = !0)),
        o.resizeHandler(),
        (o.usePositionFixed = o.usePositionFixed && !m && !o.flakeBottom),
        e.getComputedStyle)
      )
        try {
          x =
            "relative" ===
            e
              .getComputedStyle(o.targetElement, null)
              .getPropertyValue("position");
        } catch (e) {
          x = !1;
        }
      (g = o.usePositionFixed),
        h && c && !o.disabled && (o.init(), (o.active = !0));
    }),
    o.autoStart &&
      o.events.add(
        e,
        "load",
        function t() {
          (!o.excludeMobile || !f) && s(), o.events.remove(e, "load", t);
        },
        !1
      ),
    this
  );
})(window, document);
