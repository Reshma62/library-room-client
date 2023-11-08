import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { AiOutlineUser } from "react-icons/ai";
import useAuthContext from "../../Hooks/useAuthContext";
import UseProfile from "./UseProfile";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import toast from "react-hot-toast";
const menuItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About Us",
    href: "/about",
  },
  {
    id: 3,
    name: "All Book",
    href: "/all-books",
  },

  {
    id: 4,
    name: "Borrowed Books",
    href: "/borrowed-books",
  },
  {
    id: 5,
    name: "Dashboard",
    href: "/dashboard",
  },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { user, logOUtUser } = useAuthContext();
  const handleLogOut = () => {
    logOUtUser()
      .then((result) => {
        toast.success("Logout Success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    // Check the theme in localStorage when the component mounts
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      // Apply the saved theme
      if (savedTheme === "dark") {
        setIsDark(true);
        document.body.classList.add("dark");
      } else {
        setIsDark(false);
        document.body.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    // Toggle the theme and save it in localStorage
    setIsDark(!isDark);
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);

    // Apply the theme to the body element
    if (newTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <>
      <section className={`bg-primaryColor dark:bg-gray-900 font-Cabin`}>
        <Container>
          <nav className="flex items-center justify-between py-4 relative">
            <Link
              to="/"
              className="text-2xl font-black leading-none font-Montserrat text-white dark:text-gray-300"
            >
              Library<span className="italic">Room</span>
            </Link>

            <ul className="hidden lg:w-auto lg:space-x-4 lg:items-center lg:flex ">
              {menuItems.map((menuItem) => (
                <li key={menuItem.id}>
                  <NavLink
                    to={menuItem.href}
                    className={({ isActive }) =>
                      `text-sm ${
                        isActive
                          ? "bg-white text-primaryColor"
                          : "bg-transparent text-white"
                      }  dark:text-gray-300 text-xl leading-8 inline-block py-2.5 px-4 hover:text-blue-200 dark:hover:text-blue-300 rounded-md capitalize font-medium`
                    }
                  >
                    {menuItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex">
              {user ? (
                <UseProfile />
              ) : (
                <Link to={"/login"}>
                  <button className="btn bg-white text-primaryColor font-bold ">
                    Login
                  </button>
                </Link>
              )}
            </div>
            {/* Dark mode button */}
            <div className="hidden lg:flex text-3xl cursor-pointer">
              {isDark ? (
                <BsFillSunFill
                  className="text-white text-lg"
                  onClick={toggleTheme}
                />
              ) : (
                <BsFillMoonFill
                  className="text-white text-lg"
                  onClick={toggleTheme}
                />
              )}
            </div>

            {/* Mobile menu */}
            <div className="flex gap-4 md:hidden text-white">
              <button onClick={() => setOpen(!open)}>
                <FaBarsStaggered className="text-xl text" />
              </button>

              <div
                className={`absolute ${
                  !open ? "-top-[500px]" : "top-full"
                } duration-500 bg-primaryColor dark:bg-slate-600 right-0 top-full w-full z-50 py-5 px-10`}
              >
                <ul className="flex flex-col  gap-2 ">
                  {menuItems.map((menuItem) => (
                    <li key={menuItem.id}>
                      <NavLink
                        to={menuItem.href}
                        className={({ isActive }) =>
                          `text-sm ${
                            isActive
                              ? "bg-white text-primaryColor"
                              : "bg-transparent text-white"
                          }  dark:text-gray-300 text-base leading-8 inline-block py-1 px-2 hover:text-blue-200 dark:hover:text-blue-300 rounded-md capitalize font-medium`
                        }
                      >
                        {menuItem.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className=" gap-4 items-center text-white">
                  {user ? (
                    <div className="">
                      <div className="flex gap-5 my-5">
                        <label className="btn btn-ghost btn-circle avatar">
                          <div className="w-20 rounded-full border-2  border-solid border-slate-900">
                            <img src={user?.photoURL} />
                          </div>
                        </label>
                        <div>
                          <p>Hello</p>
                          <p className="font-bold text-white">
                            {user.displayName}
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <ul className="mt-3 z-[1] p-2  rounded-box w-52">
                          <li>
                            <a>
                              Email:{" "}
                              <span className="font-bold text-white">
                                {user.email}
                              </span>
                            </a>
                          </li>
                          <li
                            className="bg-primary cursor-pointer px-5 inline-block py-2.5 font-black text-white text-lg mt-5 rounded-2xl"
                            onClick={handleLogOut}
                          >
                            <a>Logout</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <>
                      <AiOutlineUser className="text-4xl" />
                      <p className="text-xl">
                        <Link onClick={() => setOpen(!open)} to={"/login"}>
                          Login
                        </Link>{" "}
                        /{" "}
                        <Link onClick={() => setOpen(!open)} to={"/register"}>
                          Register
                        </Link>
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Dark mode button */}
              <div className="flex text-xl cursor-pointer">
                {isDark ? (
                  <BsFillSunFill onClick={toggleTheme} />
                ) : (
                  <BsFillMoonFill onClick={toggleTheme} />
                )}
              </div>
            </div>
          </nav>
        </Container>
      </section>
    </>
  );
};

export default Header;
