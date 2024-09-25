import React, { useState } from "react";
import { clubs } from "../clubsData";
import ClubCard from "./clubcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons/faCircleArrowLeft";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons/faCircleArrowRight";

const ClubsList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const clubsPerPage = 4;

  const totalPages = Math.ceil(clubs.length / clubsPerPage);

  const startIndex = (currentPage - 1) * clubsPerPage;
  const selectedClubs = clubs.slice(startIndex, startIndex + clubsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center flex-wrap gap-4">
      <FontAwesomeIcon
        icon={faCircleArrowLeft}
        size="2xl"
        style={{ 
          color: currentPage === 1 ? "transparent" : "#ffffff", 
          cursor: currentPage === 1 ? "default" : "pointer"
        }}
        onClick={currentPage === 1 ? undefined : goToPreviousPage} 
      />
      {selectedClubs.map((club) => (
        <div key={club.id} >
          <ClubCard club={club} />
        </div>
      ))}
      <FontAwesomeIcon
        icon={faCircleArrowRight}
        size="2xl"
        style={{ 
          color: currentPage === totalPages ? "transparent" : "#ffffff", 
          cursor: currentPage === totalPages ? "default" : "pointer" 
        }}
        onClick={currentPage === totalPages ? undefined : goToNextPage}
      />
    </div>
  );
};

export default ClubsList;
