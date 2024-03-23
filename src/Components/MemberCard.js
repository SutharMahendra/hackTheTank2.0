import React from "react";
function MemberCard(props) {
  return (
    <div className="dt-card">
      <img src={props.img} alt={props.name} className="dt-card-img" />
      <p className="dt-card-name">{props.name}</p>
      <p className="dt-card-title">{props.title}</p>
      <p>
        <span className="dt-card-reviews"> ({props.reviews}+ Reviews)</span>
      </p>
    </div>
  );
}

export default MemberCard;
