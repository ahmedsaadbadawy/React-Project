import { cn } from "@/lib/utils";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const menuData = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "About",
      path: "about",
    },
  ];
  return (
    <header className="py-4 bg-secondary">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <h1>React Router</h1>
        <ul className="flex items-center gap-2">
          {menuData.map((item, index) => (
            <li key={index}>
              <NavLink
                end
                className={({ isActive }) =>
                  cn("px-4 py-2 rounded-lg text-foreground duration-300", {
                    "bg-foreground text-background": isActive,
                  })
                }
                to={item.path}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
