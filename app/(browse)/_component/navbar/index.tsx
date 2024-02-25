import React from "react";
import {Logo} from "./logo";
import {Search} from "./search";
import Actions from "./actions";
interface NavbarProps {
  logoText?: string;
  searchBar?: boolean;
  dashboard?: boolean;
}
export const Navbar = ({
  logoText,
  searchBar = false,
  dashboard,
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo logoText={logoText} />
      {searchBar && <Search />}
      <Actions dashboard={dashboard} />
    </nav>
  );
};
