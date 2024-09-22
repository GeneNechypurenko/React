import React from "react";

export default class Recipe extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white flex flex-col justify-center content-center gap-4 items-center h-full w-4/5 border-[1px] border-black rounded-2xl">
          <div className="flex justify-center content-center w-full h-60 bg-black rounded-t-2xl">
            <div className="w-2/3 h-60 text-white flex flex-col justify-center content-center gap-4 p-4">
              <h1 className="w-full h-10 font-bold text-4xl text-center items-center">
                The Best Ever Cheeseburger
              </h1>

              <div className="w-full h-5 flex justify-evenly content-evenly items-center">
                <i className="fa-solid fa-burger fa-2xs flex gap-1">
                  Yield: 6 servings
                </i>
                <i className="fa-solid fa-clock fa-2xs flex gap-1">
                  Prep: 15 minutes
                </i>
                <i className="fa-solid fa-clock fa-2xs flex gap-1">
                  Cook: 15 minutes
                </i>
                <i className="fa-solid fa-clock fa-2xs flex gap-1">
                  Total: 30 minutes
                </i>
              </div>

              <p className="text-lg w-full h-10 flex text-center">
                How to make THE BEST cheeseburger! Perfect burger patties every.
                single. time. Includes an epic burger sauce too!
              </p>

              <div className="h-20 w-full flex justify-center content-center items-center">
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
              </div>
            </div>

            <div className="flex justify-center content-center gap-4">
              <img
                src="src/assets/jucy-burger.jpg"
                className="m-auto flex flex-col items-center object-contain object-center rounded-full"
              ></img>
            </div>
          </div>

          <div className="flex h-auto w-full justify-center content-center">
            <div className="flex flex-col h-full w-1/2 justify-center content-center gap-4 ml-4">
              <p className="font-bold text-xl">Ingredients</p>
              <ul className="list-disc pl-5 text-start">
                <li>½ cup mayonnaise</li>
                <li>¼ cup ketchup</li>
                <li>3 tablespoons dill pickle relish</li>
                <li>1 tablespoon Dijon mustard</li>
                <li>2 pounds ground beef, 80/20</li>
                <li>Kosher salt and freshly ground black pepper, to taste</li>
                <li>1 tablespoon canola oil</li>
                <li>6 slices American cheese</li>
              </ul>
            </div>

            <div className="flex flex-col h-full w-1/2 justify-center content-center gap-4 ml-4">
              <p className="text-xl">For serving</p>
              <ul className="list-disc pl-5 text-start">
                <li>Brioche hamburger buns, homemade or store-bought</li>
                <li>Romaine or shredded lettuce</li>
                <li>Sliced tomato</li>
                <li>Sliced red onion</li>
                <li>Dill pickle chips</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col h-full w-full justify-center content-center gap-4 ml-4">
            <p className="font-bold text-xl">INSTRUCTIONS</p>
            <ul className="list-decimal pl-5 text-start font-bold columns-[400px]">
              <li>
                BURGER SAUCE: In a small bowl, whisk together mayonnaise,
                ketchup, dill pickle relish and Dijon; set aside.
              </li>
              <li>
                In a large bowl, combine beef, 1 1/2 teaspoons salt and 1 1/2
                teaspoons pepper. Using a wooden spoon or clean hands, stir
                until well combined. Gently form into 6 1-inch-thick patties,
                about the size of the hamburger buns.
              </li>
              <li>
                Heat canola oil in a large cast iron skillet over medium high
                heat. Add patties and cook until lightly charred or until
                desired doneness, about 3-5 minutes per side; top with cheese.
              </li>
              <li>
                Serve immediately in hamburger buns with BURGER SAUCE and
                desired toppings.
              </li>
            </ul>
          </div>

          <div className="w-full h-20 bg-black rounded-b-2xl text-white text-3xl font-bold flex items-center justify-center">ENJOY! THE BEST CHEESBURGER EVER!!!</div>
        </div>
      </>
    );
  }
}
