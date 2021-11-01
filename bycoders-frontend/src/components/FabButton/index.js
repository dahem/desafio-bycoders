import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FabButton(props) {
  return (
    <button className="fab-button" {...props}>
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
}

export default FabButton;