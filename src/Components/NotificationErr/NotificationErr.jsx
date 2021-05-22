import React from 'react';
import './NotificationErr.scss';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
function NotificationErr() {
  return (
    <div className="notificationErr">
      <div className="notificationErr__content">
        <SentimentVeryDissatisfiedIcon />

        <h1>ERROR!</h1>
        <h2>You need to choose the size before adding to cart!</h2>
        <div className="notification__content__point">
          <span className="gray"></span>
          <span className="white"></span>
        </div>
      </div>
    </div>
  );
}

export default NotificationErr;
