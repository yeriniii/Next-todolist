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
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-4 justify-center">
        <NavbarItem>
          <Link className="text-teal-600 font-bold" href="/">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" href="/about" color="foreground">
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" href="/report">
            REPORT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" href="/todos-CSR">
            TODOS-CSR
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" href="/todos-SSR">
            TODOS-SSR
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            할 일 정보 통계 보러가기
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
