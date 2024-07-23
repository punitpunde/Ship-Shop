import React from "react";
import { useNavigate } from "react-router-dom";
function NoContent(props) {
  const { text, btnText } = props;
  const nav = useNavigate();
  const handleHomeNavigation = () => {
    nav("/");
  };
  return (
    <div className="text-center text-white my-5 mx-auto p-0 p-md-5 rounded">
      <h2>{text}</h2>
      <button
        onClick={handleHomeNavigation}
        className="btn btn-success btn-lg mt-3"
      >
        {btnText}
      </button>
    </div>
  );
}

export default NoContent;
