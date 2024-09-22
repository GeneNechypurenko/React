import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav
      className="
                  h-[30px]
                  w-1/4
                  px-20
                  m-2
                  bg-black
                  text-white
                  flex
                  justify-center
                  items-center
                  gap-2
                  rounded-full
                  fixed
                  left-1/2
                  transform -translate-x-1/2
                  "
    >
      <Link to="/">Home</Link>
      <Link to="/name">Name</Link>
      <Link to="/geography">Geography</Link>
      <Link to="/history">History</Link>
    </nav>
  );
}
