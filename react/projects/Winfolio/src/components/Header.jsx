import { createClient } from "@supabase/supabase-js";
import { Avatar, Navbar } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { ANON_KEY, SUPABASE_URL } from "../Auth/keys";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();

  const supabase = createClient(SUPABASE_URL, ANON_KEY);
  const [name, userName] = useState("");

  useEffect(() => {
    let firstName = localStorage.getItem("firstName");
    firstName == "undefined" ? userName("User") : userName(firstName);
  }, []);

  const signout = () => {
    supabase.auth.signOut();
    navigate("/login");
    localStorage.setItem("authenticated", false);
  };

  const gotoShowAchievements = () => {
    navigate("/show-achievements");
  };
  const gotoHome = () => {
    navigate("/home");
  };
  return (
    <>
      <Navbar fluid className="bg-black text-white">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-2">
            Winfolio
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown label={name} inline className="signoutBtn">
            <Dropdown.Item onClick={() => signout()}>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="navbar">
          <Navbar.Link className="text-white" onClick={() => gotoHome("/home")}>
            Home
          </Navbar.Link>
          <Navbar.Link
            className="text-white"
            onClick={() => gotoShowAchievements("/register")}
          >
            Show Achievements
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar className="bg-black text-white ">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-2">
            Winfolio
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <div className="px-8 navbar">
          <Navbar.Collapse>
            <Navbar.Link
              className="text-white"
              onClick={() => gotoHome("/home")}
            >
              Home
            </Navbar.Link>
            <Navbar.Link
              className="text-white"
              onClick={() => gotoShowAchievements("/register")}
            >
              Show Achievements
            </Navbar.Link>
            <Dropdown label={name} inline className="signoutBtn">
              <Dropdown.Item onClick={() => signout()}>Sign out</Dropdown.Item>
            </Dropdown>
          </Navbar.Collapse>
        </div>
      </Navbar> */}
    </>
  );
};

export default Header;
