const unreadCountSpan = document.getElementById('unread-count');
const markAllAsReadButton = document.getElementById('mark-all-as-read');
const notifications = document.querySelectorAll('.img1, .img2, .img3, .img11, .img14');

function markAsRead(notification) {
  const redDot = notification.querySelector('.red-dot');
  if (redDot) {
    redDot.style.display = 'none';
  }
}

function markAllNotificationsAsRead() {
  notifications.forEach((notification) => {
    markAsRead(notification);
  });

  unreadCountSpan.textContent = '0';
}

let unreadCount = 0;
notifications.forEach((notification) => {
  const redDot = notification.querySelector('.red-dot');
  if (redDot) {
    unreadCount++;
  }
});
unreadCountSpan.textContent = unreadCount;

markAllAsReadButton.addEventListener('click', markAllNotificationsAsRead);