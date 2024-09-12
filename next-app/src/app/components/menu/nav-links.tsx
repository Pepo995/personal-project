"use client";

import { LuGithub, LuFile } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    href: "/menu",
    name: "Github Account",
    icon: LuGithub
  },
  {
    href: "/",
    name: "Portfolio",
    icon: LuFile
  }
];

const NavLinks = () => {
  const pathname = usePathname();

  console.log("pathname", pathname);

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-blue-500 hover:bg-sky-300": pathname === link.href
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
