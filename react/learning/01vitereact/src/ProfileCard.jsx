import React from "react";

const ProfileCard = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    <div>
      <h1>{props.assistant.name}</h1>
    </div>
  );
};

export default ProfileCard;
