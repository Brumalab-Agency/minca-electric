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


function NavListMenu() {
  

  const navListMenuProductos = [
    {
      title: "Minca Scooters",
      description1: "Minca 350W",
      description2: "Minca 800W",
      description3: "Minca 1600W",
    },
  ];
 /*  const navListMenuEbikes = [
    {
      title: "Minca E-bikes",
      description1: "Minca Trip",
      description2: "Minca City",
    },
  ]; */

  const navListMenuAccesorios = [
    {
      title: "Accesorios",
      description1: "Casco Integral Minca",
      description2: "Poncho Minca",
      description3: "Gafas‎ Minca",
      description4: "On Guard U-look",
      description5: "Baúl Minca",
      description6: "On Guard Guaya",
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
              color="black"
              className="flex items-center text-base font-bold leading-[80px] text-[#111] -mb-5"
            >
              {title}
            </Typography>
            {Object.values(descriptions).map((description, index) => (
              <Typography
                key={index}
                variant="paragraph"
                className="mt-2 text-left text-[16px]  font-medium leading-[50px] text-[#6F6C90] lg:text-base"
              >
                <Link
                  className="leading-[40px] hover:underline"
                  href={`/productos/${description}`}
                >
                  {description}
                </Link>
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
              color="black"
              className="flex items-center text-base font-bold leading-[80px] text-[#111] -mb-5"
            >
              {title}
            </Typography>
            {Object.values(descriptions).map((description, index) => (
              <Typography
                key={index}
                variant="paragraph"
                className="mt-2 text-left text-[16px]  font-medium leading-[50px] text-[#6F6C90] lg:text-base"
              >
                <Link
                  className="leading-[40px] hover:underline"
                  href={`/accesorios/${description}`}
                >
                  {description}
                </Link>
              </Typography>
            ))}
          </div>
        </MenuItem>
      </div>
    ),
  );
  /* const renderEbikes = navListMenuEbikes.map(
    ({ title, ...descriptions }, key) => (
      <div key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div>
            <Typography
              variant="h6"
              color="black"
              className="flex items-center text-base font-bold leading-[80px] text-[#fff]"
            >
              {title}
            </Typography>
            {Object.values(descriptions).map((description, index) => (
              <Typography
                key={index}
                variant="paragraph"
                className="mt-2 text-left text-[16px]  font-medium leading-[50px] text-[#6F6C90] lg:text-base"
              >
                <Link
                  className="leading-[40px]"
                  href={`/ebikes/${description}`}
                >
                  {description}
                </Link>
              </Typography>
            ))}
          </div>
        </MenuItem>
      </div>
    ),
  ); */

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler className="">
          <Typography as="div" variant="small" className="flex font-medium ">
            <ListItem
           
              className="flex w-[130px] items-center justify-center gap-2 rounded-[62px] py-2 text-base 2xl:text-[20px] font-medium text-[#fff] hover:bg-[#fff] hover:text-black"
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
        <MenuList className="z-50 block h-[474px] max-w-[1366px] rounded-xl lg:flex lg:w-[70%]">
          <ul className="grid w-[50%] grid-cols-2 gap-y-2 p-10 outline-none outline-0">
            {renderProductos}
            {/* {renderEbikes} */}
            {renderAccesorios}
          </ul>
          {/* Divider */}
          <BannerMenu clases="hidden lg:flex rounded-r-xl rounded-b-xl" />
        </MenuList>
      </Menu>
      <div className="colapsable-movil lg:hidden">
        <Collapse className="grid grid-cols-2" open={isMobileMenuOpen}>
          {renderProductos}
          {/* {renderEbikes} */}
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
      <Typography variant="small" color="black" className="font-medium">
        <Link
        
          className="inline-block w-auto items-center gap-2 rounded-[62px] px-3 py-2 text-base 2xl:text-[20px] text-[#fff] hover:bg-[#fff] hover:text-[#111] lg:flex"
          href="/servicios"
        >
          Servicio técnico
        </Link>
      </Typography>
      <Typography variant="small" color="black" className="font-medium">
        <Link
         
          href="/showrooms"
          className="inline-block w-auto items-center gap-2 rounded-[62px] px-3 py-2 text-base 2xl:text-[20px] text-[#fff] hover:bg-[#fff] hover:text-[#111] lg:flex"
        >
          Showrooms
        </Link>
      </Typography>
      <Typography variant="small" color="black" className="font-medium">
        <Link
 
          className="inline-block w-auto items-center gap-2 rounded-[62px] px-3 py-2 text-base 2xl:text-[20px] text-[#fff] hover:bg-[#fff] hover:text-[#111] lg:flex"
          href="/recursos"
        >
          Recursos
        </Link>
      </Typography>
      <Typography variant="small" color="black" className="font-medium">
        <Link
        
          className="inline-block w-auto items-center gap-2 rounded-[62px] px-4 py-2 text-base 2xl:text-[20px] text-[#fff] hover:bg-[#fff] hover:text-[#111] lg:flex"
          href="/tendencias"
        >
          Tendencias
        </Link>
      </Typography>
    </List>
  );
}

export function MegaMenuNegro() {
  const [openNav, setOpenNav] = useState(false);
  

  return (
    <Navbar className="mx-auto max-w-screen-xl border-none bg-[#111] px-0 py-0">
      <div className="text-[#fff]-900 items-center justify-between lg:flex">
        <div  className="navegacion lg:flex">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="black"
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
