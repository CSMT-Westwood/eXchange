import React, { useState } from "react";
import "./notification.css";

function Notification(props) {
    const [notificationClass, setNotificationClass] = 
        useState(props.read ? "notification-read" : "notification-not-read");

    const timeFormatter = (date) => {
        return `${date.toTimeString().slice(0, 5)}, ${date.toDateString()}`;
    }
    const read = () => {
        fetch("http://localhost:8000/user/readNotification", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": sessionStorage["token"]
            },
            body: JSON.stringify({notificationID: props.notificationId})
        });
        setNotificationClass("notification-read");
    }

    return (
        <div className={`notification ${notificationClass} ${props.className}`} onClick={read}>
            <p>{props.message}</p>
            <p>{timeFormatter(new Date(props.date))}</p>
        </div>
    )
}

export default Notification;

