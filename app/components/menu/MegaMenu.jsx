"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BannerMenu } from "./BannerMenu";

import { Scooters } from "@/lib/graphQLRequest";

function NavListMenu() {
    const navListMenuProductos = [
    {
      title: "Minca Scooters",
      description1: "Minca 350W",
      description2: "Minca 500W",
      description3: "Minca 800W",
      description4: "Minca 1600W",
    },
    {
      title: "Minca E-bikes",
      description1: "Minca Trip",
      description2: "Minca City",
    },
  ];

  const navListMenuAccesorios = [
    {
      title: "Accesorios",
      description1: "Casco",
      description2: "Guantes",
      description3: "Gafas",
      description4: "Candado U",
      description5: "Maleta",
      description6: "Guaya",
      description7: "Poncho",
    },
  ];



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderProductos = navListMenuProductos.map(
    ({ title, ...descriptions }, key) => (
      <div key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <Typography
              variant="h6"
              color="[#111]"
              className="flex items-center text-[16px] font-bold leading-[80px] lg:text-[18px]"
            >
              {title}
            </Typography>
            {Object.values(descriptions).map((description, index) => (
              <Typography
                key={index}
                variant="paragraph"
                className="text-left text-[16px] font-medium  leading-[40px] text-[#6F6C90] lg:text-[18px]"
              >
                <Link href={`/productos/${description}`}>{description}</Link>
              </Typography>
            ))}
          </div>
        </MenuItem>
      </div>
    ),
  );
  const renderAccesorios = navListMenuAccesorios.map(
    ({ title, ...descriptions }, key) => (
      <div key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <Typography
              variant="h6"
              color="[#111]"
              className="flex items-center text-[16px] font-bold leading-[80px] lg:text-[18px]"
            >
              {title}
            </Typography>
            {Object.values(descriptions).map((description, index) => (
              <Typography
                key={index}
                variant="paragraph"
                className="text-left text-[16px] font-medium  leading-[40px] text-[#6F6C90] lg:text-[18px]"
              >
                <Link href={`/accesorios/${description}`}>{description}</Link>
              </Typography>
            ))}
          </div>
        </MenuItem>
      </div>
    ),
  );

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 text-base font-medium text-[#111]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Productos
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="block h-[474px] max-w-[1366px] rounded-xl lg:flex lg:w-[85%]">
          <ul className="grid w-[60%] grid-cols-3 gap-y-2 p-10 outline-none outline-0">
            {renderProductos}
            {renderAccesorios}
          </ul>
          {/* Divider */}
          <BannerMenu clases="hidden lg:flex" />
        </MenuList>
      </Menu>
      <div className="colapsable-movil lg:hidden">
        <Collapse className="grid grid-cols-2" open={isMobileMenuOpen}>
          {renderProductos}
          {renderAccesorios}
        </Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <NavListMenu />
      <Typography variant="small" color="[#111]" className="font-medium">
        <Link
          className="flex items-center gap-2 py-2 pr-4 text-base text-[#111]"
          href="/servicios"
        >
          Servicio técnico
        </Link>
      </Typography>
      <Typography variant="small" color="[#111]" className="font-medium">
        <Link
          href="/sedes"
          className="flex items-center gap-2 py-2 pr-4 text-base text-[#111]"
        >
          Sedes
        </Link>
      </Typography>
      <Typography variant="small" color="[#111]" className="font-medium">
        <Link
          className="flex items-center gap-2 py-2 pr-4 text-base text-[#111]"
          href="/recursos"
        >
          Recursos
        </Link>
      </Typography>
      <Typography variant="small" color="[#111]" className="font-medium">
        <Link
          className="flex items-center gap-2 py-2 pr-4 text-base text-[#111]"
          href="/blog"
        >
          Blog
        </Link>
      </Typography>
    </List>
  );
}

export function MegaMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="text-[#111]-900 items-center justify-between lg:flex">
        <div className="lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="[#111]"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
