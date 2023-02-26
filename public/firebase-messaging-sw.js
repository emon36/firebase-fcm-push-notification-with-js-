importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBoSZlKI_LmVxlJ6cEEBQ4SmwWLuAeaFp4",
  authDomain: "node-api-e3f24.firebaseapp.com",
  projectId: "node-api-e3f24",
  storageBucket: "node-api-e3f24.appspot.com",
  messagingSenderId: "628064235934",
  appId: "1:628064235934:web:8e5b44eade62baa885268f",
  measurementId: "G-HXRD30MD20"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
