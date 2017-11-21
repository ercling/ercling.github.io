const push_endpoint = 'https://push.systems';

const constants = {
  yen: {
    title: 'Ghana news on YEN.com.gh',
    domain: 'https://yen.com.gh/',
    id: 4,
    ga_offline_counter: 'UA-64750677-9'
  }
};

const NOTIFICATION_BAD_URL = [
  'notification-error',
  '404.html',
  'user_visible_auto_notification'
];


self.addEventListener('push', event => {
  event.waitUntil(
    self.registration.pushManager.getSubscription()
      .then(() => fetch(`${push_endpoint}/v1/pushes/last?project=${constants['yen'].id}`))
      .then(response => response.json())
      .then(({message, image, url, id}) => {

        if (url && id) {
          fetch(`${push_endpoint}/v2/push-statistics/delivered?deviceType=3&pushId=${id}`);

          // sendDataToGA('view', 'User received push notification');

          return self.registration.showNotification(
            constants['yen'].title,
            {
              body: message,
              icon: image,
              tag: url,
              data: {id},
              vibrate: [300]
            }
          );
        }

        return false;
      }).catch(error => console.warn('Response DATA error', error))
  );
});

self.addEventListener('notificationclick', event => {
  // Android doesn't close the notification when you click on it
  // See: http://crbug.com/463146
  event.notification.close();

  // This looks to see if the current is already open and
  // focuses if it is
  event.waitUntil(
    clients
      .matchAll({type: 'window'})
      .then(() => {
        if (!event.notification || !event.notification.tag || ~NOTIFICATION_BAD_URL.indexOf(event.notification.tag)) {
          return clients.openWindow(`${constants['yen'].domain}?source=notification`);
        }

        fetch(`${push_endpoint}/v2/push-statistics/opened?deviceType=3&pushId=${event.notification.data.id}`);

        sendDataToGA('open', 'User opened push notification');

        return clients.openWindow(`${event.notification.tag}?source=notification`);
      })
  );
});


// !function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}({0:function(t,e,i){"use strict";i(33)},33:function(t,e,i){"use strict";function n(t,e){var i="https://ssl.google-analytics.com/collect",n=Math.round(1e3*Math.random(100)+1);Promise.all([localforage.getItem("ga_tracker"),localforage.getItem("client_id")]).then(function(r){var a=o(r,2),s=a[0],c=a[1];if(s){var l={v:1,tid:s,t:"event",cid:c||n,ec:"Push notification",ea:t,el:e,ni:1},f=new URLSearchParams,d=!0,u=!1,h=void 0;try{for(var p,m=Object.keys(l)[Symbol.iterator]();!(d=(p=m.next()).done);d=!0){var g=p.value;f.set(g,l[g])}}catch(t){u=!0,h=t}finally{try{!d&&m.return&&m.return()}finally{if(u)throw h}}fetch(i,{method:"post",body:f})}})}var o=function(){function t(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw r}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();self.importScripts("local-forage.min.js"),self.importScripts("workbox-google-analytics.min.js");var r="https://push.systems",a={naij:{title:"Nigeria News on NAIJ.com",domain:"https://www.naij.com",id:2,ga_offline_counter:"UA-30373428-45"},naija:{title:"Nigeria News on NAIJ.com",domain:"https://www.naija.ng",id:2,ga_offline_counter:"UA-30373428-45"},tuko:{title:"Kenya News on TUKO.co.ke | Breaking news portal.",domain:"https://tuko.co.ke/",id:3,ga_offline_counter:"UA-61484401-12"},yen:{title:"Ghana news on YEN.com.gh",domain:"https://yen.com.gh/",id:4,ga_offline_counter:"UA-64750677-9"},kami:{title:"KAMI.com.ph TOP news portal in Phillipines",domain:"https://kami.com.ph",id:5,ga_offline_counter:"UA-75824723-9"},briefly:{title:"Get fresh news",domain:"https://briefly.co.za/",id:16},betterme:{title:"Get fresh news",domain:"https://betterme.tips/",id:33,ga_offline_counter:"UA-98622918-3"},bettermeia:{title:"Get fresh news",domain:"https://betterme.live/",id:33,ga_offline_counter:"UA-98622918-3"}},s=["notification-error","404.html","user_visible_auto_notification"];a.yen&&(a.yen.ga_offline_counter?workbox.googleAnalytics.initialize({parameterOverrides:{tid:a.yen.ga_offline_counter}}):workbox.googleAnalytics.initialize(),self.addEventListener("message",function(t){var e=t.data;localforage.setItem("ga_tracker",e.ga_tracker)}),self.addEventListener("install",function(t){console.info("Service worker installed"),t.waitUntil(self.skipWaiting())}),self.addEventListener("activate",function(){console.info("Service worker activated")}),self.addEventListener("push",function(t){t.waitUntil(self.registration.pushManager.getSubscription().then(function(){return fetch(r+"/v1/pushes/last?project="+a.yen.id)}).then(function(t){return t.json()}).then(function(t){var e=t.message,i=t.image,o=t.url,s=t.id;return!(!o||!s)&&(fetch(r+"/v2/push-statistics/delivered?deviceType=3&pushId="+s),n("view","User received push notification"),self.registration.showNotification(a.yen.title,{body:e,icon:i,tag:o,data:{id:s},vibrate:[300]}))}).catch(function(t){return console.warn("Response DATA error",t)}))}),self.addEventListener("notificationclose",function(){n("close","User closed push notification")}),self.addEventListener("notificationclick",function(t){t.notification.close(),t.waitUntil(clients.matchAll({type:"window"}).then(function(){return t.notification&&t.notification.tag&&!~s.indexOf(t.notification.tag)?(fetch(r+"/v2/push-statistics/opened?deviceType=3&pushId="+t.notification.data.id),n("open","User opened push notification"),clients.openWindow(t.notification.tag+"?source=notification")):clients.openWindow(a.yen.domain+"?source=notification")}))}))}});