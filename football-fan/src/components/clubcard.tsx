import React from "react";
import { Club } from "../clubsData";

interface ClubCardProps {
  club: Club;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  return (
    <div
      className="
      h-[600px] w-[300px] p-4
      text-white text-center
      bg-[#00000050] rounded-2xl backdrop-blur-sm shadow-md
      flex flex-col justify-center content-center items-center gap-4
    "
    >
      <h2>{club.name}</h2>
      <img
        src={club.logo}
        alt={club.name}
        className="
                  h-[200px] w-[200px] 
                  mx-auto object-contain
                  border-2 border-white rounded-full p-4
                  "
      />
      <p>
        <strong>City:</strong> {club.city}
      </p>
      <p>
        <strong>Founded:</strong> {club.founded}
      </p>
      <h4>Achievements:</h4>
      <ul>
        {club.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      <h4>Squad:</h4>
      <ul>
        {club.squad.map((player, index) => (
          <li key={index}>
            {player.name} - {player.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClubCard;
