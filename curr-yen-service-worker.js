!function (t) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var o = e[i] = {i: i, l: !1, exports: {}};
    return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }

  n.m = t, n.c = e, n.d = function (t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) n.d(i, o, function (e) {
      return t[e]
    }.bind(null, o));
    return i
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "/", n(n.s = 33)
}({
  33: function (t, e, n) {
    "use strict";
    var i = function () {
      return function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var n = [], i = !0, o = !1, r = void 0;
          try {
            for (var a, c = t[Symbol.iterator](); !(i = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); i = !0) ;
          } catch (t) {
            o = !0, r = t
          } finally {
            try {
              !i && c.return && c.return()
            } finally {
              if (o) throw r
            }
          }
          return n
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }();

    function o(t, e) {
      var n = Math.round(1e3 * Math.random(100) + 1);
      Promise.all([localforage.getItem("ga_tracker"), localforage.getItem("client_id")]).then(function (o) {
        var r = i(o, 2), a = r[0], c = r[1];
        if (a) {
          var l = {v: 1, tid: a, t: "event", cid: c || n, ec: "Push notification", ea: t, el: e, ni: 1},
            f = new URLSearchParams, s = !0, u = !1, d = void 0;
          try {
            for (var p, v = Object.keys(l)[Symbol.iterator](); !(s = (p = v.next()).done); s = !0) {
              var h = p.value;
              f.set(h, l[h])
            }
          } catch (t) {
            u = !0, d = t
          } finally {
            try {
              !s && v.return && v.return()
            } finally {
              if (u) throw d
            }
          }
          fetch("https://ssl.google-analytics.com/collect", {method: "post", body: f})
        }
      })
    }

    self.importScripts("local-forage.min.js"), self.addEventListener("message", function (t) {
      var e = t.data;
      localforage.setItem("ga_tracker", e.ga_tracker)
    }), self.addEventListener("install", function (t) {
      console.info("Service worker installed"), t.waitUntil(self.skipWaiting())
    }), self.addEventListener("activate", function () {
      console.info("Service worker activated")
    }), self.addEventListener("push", function (t) {
      try {
        var e = t.data.json();
        e.notification.data = e.data, e.notification.data.url = e.notification.click_action, t.waitUntil(self.registration.showNotification(e.notification.title, e.notification)), fetch("https://api.mailfire.io/v1/webpush/show/" + e.data.id, {method: "post"}), o("view", "User received push notification")
      } catch (t) {
        console.error(t)
      }
    }), self.addEventListener("notificationclose", function () {
      o("close", "User closed push notification")
    }), self.addEventListener("notificationclick", function (t) {
      t.notification.close(), t.waitUntil(clients.matchAll({type: "window"}).then(function () {
        return clients.openWindow(t.notification.data.url)
      })), fetch("https://api.mailfire.io/v1/webpush/click/" + t.notification.data.id, {method: "post"}), o("open", "User opened push notification")
    })
  }
});