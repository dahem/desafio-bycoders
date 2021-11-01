import React from "react";

function Avatar(props) {
  const getInitials = (name) => {
    const nameArray = name.split(" ");
    const initials = (nameArray[0].charAt(0) || '') + (nameArray[1].charAt(0) || '');
    return initials;
  };
  return (
    <div className="avatar">
      {props.src ? <img src={props.src} alt={props.alt} /> : <span>{getInitials(props.name)}</span>}
    </div>
  );
}

export default Avatar;