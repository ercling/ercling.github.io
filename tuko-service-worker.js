!function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var o = e[i] = {i: i, l: !1, exports: {}};
    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }

  n.m = t, n.c = e, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {configurable: !1, enumerable: !0, get: i})
  }, n.r = function (t) {
    Object.defineProperty(t, "__esModule", {value: !0})
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "/", n(n.s = 74)
}({
  73: function (t, e, n) {
    "use strict";
    var i = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
      }
      return t
    }, o = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var n = [], i = !0, o = !1, r = void 0;
          try {
            for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0) ;
          } catch (t) {
            o = !0, r = t
          } finally {
            try {
              !i && s.return && s.return()
            } finally {
              if (o) throw r
            }
          }
          return n
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }();
    self.importScripts("local-forage.min.js");
    var r = {
      naij: {title: "Nigeria News on NAIJ.com", domain: "https://www.naij.com", id: 2},
      naija: {title: "Nigeria News on NAIJ.com", domain: "https://www.naija.ng", id: 2},
      tuko: {title: "Juicy Rumours News on www.juicyrumours.com", domain: "https://www.juicyrumours.com/", id: 38},
      yen: {title: "Ghana news on YEN.com.gh", domain: "https://yen.com.gh/", id: 4},
      kami: {title: "KAMI.com.ph TOP news portal in Phillipines", domain: "https://kami.com.ph", id: 5},
      briefly: {title: "Get fresh news", domain: "https://briefly.co.za/", id: 35}
    }, a = ["notification-error", "404.html", "user_visible_auto_notification"];

    function s(t, e) {
      var n = Math.round(1e3 * Math.random(100) + 1);
      Promise.all([localforage.getItem("ga_tracker"), localforage.getItem("client_id")]).then(function (i) {
        var r = o(i, 2), a = r[0], s = r[1];
        if (a) {
          var c = {v: 1, tid: a, t: "event", cid: s || n, ec: "Push notification", ea: t, el: e, ni: 1},
            l = new URLSearchParams, u = !0, f = !1, d = void 0;
          try {
            for (var p, h = Object.keys(c)[Symbol.iterator](); !(u = (p = h.next()).done); u = !0) {
              var v = p.value;
              l.set(v, c[v])
            }
          } catch (t) {
            f = !0, d = t
          } finally {
            try {
              !u && h.return && h.return()
            } finally {
              if (f) throw d
            }
          }
          fetch("https://ssl.google-analytics.com/collect", {method: "post", body: l})
        }
      })
    }

    function c(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e.url, i = e.msg, o = e.id,
        a = e.image;
      n && i && t.waitUntil(self.registration.showNotification(r.tuko.title, {
        body: i,
        icon: a,
        tag: n,
        data: {id: o},
        vibrate: [300]
      }).then(function () {
        fetch("https://push.systems/v2/push-statistics/delivered?deviceType=3&pushId=" + o), s("view", "User received push notification")
      }))
    }

    r.tuko && (self.addEventListener("message", function (t) {
      var e = t.data;
      localforage.setItem("ga_tracker", e.ga_tracker)
    }), self.addEventListener("install", function (t) {
      console.info("Service worker installed"), t.waitUntil(self.skipWaiting())
    }), self.addEventListener("activate", function () {
      console.info("Service worker activated")
    }), self.addEventListener("push", function (t) {
      if (t.data) try {
        var e = JSON.parse(t.data.json());
        c(t, e)
      } catch (t) {
        console.warn("Unable to retrieve data json", t)
      } else t.waitUntil(fetch("https://push.systems/v1/pushes/last?project=" + r.tuko.id).then(function (t) {
        return t.json()
      }).then(function (e) {
        var n = e.message, o = function (t, e) {
          var n = {};
          for (var i in t) e.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
          return n
        }(e, ["message"]);
        return c(t, i({msg: n}, o))
      }).catch(function (t) {
        return console.warn("Response DATA error", t)
      }))
    }), self.addEventListener("notificationclose", function () {
      s("close", "User closed push notification")
    }), self.addEventListener("notificationclick", function (t) {
      t.notification.close(), t.waitUntil(clients.matchAll({type: "window"}).then(function () {
        return t.notification && t.notification.tag && !~a.indexOf(t.notification.tag) ? (fetch("https://push.systems/v2/push-statistics/opened?deviceType=3&pushId=" + t.notification.data.id), s("open", "User opened push notification"), clients.openWindow(t.notification.tag + "?source=notification")) : clients.openWindow(r.tuko.domain + "?source=notification")
      }))
    }))
  }, 74: function (t, e, n) {
    "use strict";
    n(73)
  }
});