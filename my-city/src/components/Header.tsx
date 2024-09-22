import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <header
        className="
                  flex
                  flex-col
                  flex-wrap
                  justify-center
                  content-center
                  items-center
                  h-[60px] w-full
                  bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#40E0D0]
                  "
      >
        <h1
          className="
                    h-[40px]
                  text-white
                    text-3xl
                    font-bold                  
                    "
        >
          My city is... ODESSA&#9829;
        </h1>
      </header>

      <Navigation />
    </>
  );
}
