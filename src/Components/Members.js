import React from "react";
import MemberCard from "./MemberCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/members.css";

function members() {
  return (
    <div className="member-section" id="members">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Team Members</span>
        </h3>

        <p className="dt-description">
          Meet our dedicated team of sewing enthusiasts, united by a passion for
          creativity and excellence. With diverse expertise ranging from
          seasoned instructors to innovative designers, we collaborate to foster
          a supportive environment where every individual can thrive. Committed
          to providing unparalleled guidance and encouragement, we're here to
          empower you on your sewing journey, ensuring you unlock your full
          potential and find inspiration at every stitch.
        </p>
      </div>

      <div className="dt-cards-content">
        <MemberCard
          img={profile1}
          name="Priya Gadhiya"
          title="Founder"
          reviews="####"
        />
        <MemberCard
          img={profile2}
          name="Mohit Gadhiya"
          title="Co-founder | CEO"
          reviews="####"
        />
        <MemberCard
          img={profile3}
          name="Deep Talaviya"
          title="General Manager"
          reviews="####"
        />
        <MemberCard
          img={profile4}
          name="Disha Mangukiya"
          title="Cheif Operating Officer"
          reviews="####"
        />
      </div>
    </div>
  );
}

export default members;
