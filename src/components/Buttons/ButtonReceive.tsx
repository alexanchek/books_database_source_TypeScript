import React from "react";

interface IButtonReceive {
  onClick: any
}

export const ButtonReceive: React.FC<IButtonReceive> = (props) => {
  return (
    <button className="btn indigo darken-1 mb-5" type="submit" name="action" onClick={() => props.onClick()}>
      Submit
      <i className="material-icons right">send</i>
    </button>
  );
};
