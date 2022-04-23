const Notification = ({ message, type, setMessage, setMessageType }) => {
  if (message === null) {
    return null;
  }
  setTimeout(() => {
    setMessage(null);
    setMessageType(null);
  }, 5000);
  return <div className={type}>{message}</div>;
};

export default Notification;
