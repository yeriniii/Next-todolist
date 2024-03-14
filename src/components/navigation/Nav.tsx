import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";

const Nav = () => {
  return (
    <Navbar isBordered className="bg-transparent">
      <NavbarContent className="hidden sm:flex gap-4 justify-center">
        <NavbarItem>
          <Link
            className="font-bold p-2 rounded-xl hover:bg-teal-600 hover:bg-opacity-70"
            href="/todos-CSR"
          >
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold p-2 rounded-xl hover:bg-teal-600 hover:bg-opacity-70"
            href="/about"
            color="foreground"
          >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold p-2 rounded-xl hover:bg-teal-600 hover:bg-opacity-70"
            href="/report"
          >
            REPORT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold p-2 rounded-xl hover:bg-teal-600 hover:bg-opacity-70"
            href="/todos-CSR"
          >
            TODOS-CSR
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="font-bold p-2 rounded-xl hover:bg-teal-600 hover:bg-opacity-70"
            href="/todos-SSR"
          >
            TODOS-SSR
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
