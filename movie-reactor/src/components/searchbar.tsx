import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
  onSearch: (query: string) => void;
}

export default function Searchbar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="h-12 w-96 absolute bottom-8 left-8">
      <input
        className="h-full w-full rounded-full bg-[#00000040] backdrop-blur-sm outline-none text-white pl-10"
        placeholder="Search Movie..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
}
