const Notification = ({ notiInfo }) => {
  const notiStyle = {
    color: "green",
    backgroundColor: "lightGrey",
    border: "5px solid green",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  };

  const errorStyle = {
    ...notiStyle,
    color: "red",
    border: "5px solid red",
  };

  if (notiInfo.msg === null) return null;

  return (
    <div style={notiInfo.type ? errorStyle : notiStyle}>{notiInfo.msg}</div>
  );
};

export default Notification;
