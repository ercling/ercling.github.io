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
}