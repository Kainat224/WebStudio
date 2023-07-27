import React from "react";
import TeamCard from "../reuseableComp/TeamCard";
import Team1 from "../images/team1.svg";
import Team2 from "../images/team2.svg";
import Team3 from "../images/team3.svg";
import Team4 from "../images/team4.svg";

const Team = () => {
  return (
    <div className="container-fluid teamSecStyle text-center ">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12 my-2">
            <TeamCard
              image={Team1}
              title={"Игорь Демьяненко"}
              text={"Product Designer"}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-2">
            <TeamCard
              image={Team2}
              title={"Игорь Демьяненко"}
              text={"Product Designer"}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-2">
            <TeamCard
              image={Team3}
              title={"Игорь Демьяненко"}
              text={"Product Designer"}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-12 my-2">
            <TeamCard
              image={Team4}
              title={"Игорь Демьяненко"}
              text={"Product Designer"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
