import "../App.css";
import Single_member from "./Single_member";

const Team_members = () => {
  return (
    <div>
      <div className="team_heading">
        <h1>Our Team</h1>
        <p>
          Expert members of the team. Expert members of the team. Expert members
          of the team.
        </p>
      </div>
      <div className="team_wrapper">
        <Single_member/>
        <Single_member/>
        <Single_member/>
        <Single_member/>
      </div>
    </div>
  );
}

export default Team_members