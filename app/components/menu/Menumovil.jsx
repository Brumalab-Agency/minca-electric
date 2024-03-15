"use client"

import { useState } from 'react';
import { Drawer } from 'antd';
import { ubuntu } from "../../ui/fonts";
import { MegaMenu } from './MegaMenu';
import { BannerMenu } from './BannerMenu';
import Link from 'next/link';

export const Menumovil = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="block lg:hidden">
      <button type="primary" onClick={showDrawer}>
        <img src="/icono_menu.png"/>
      </button>
      <Drawer className={`${ubuntu.className} antialiased text-8`} title="Menú" onClose={onClose} open={open}>
        <MegaMenu/>
        <div className='flex justify-between items-center mb-8'>
          <Link
            href="/testdrive"
            className="text-base font-semibold flex"
          >
            Prueba una MINCA
          </Link>
          <button className="mr-4 h-[52px] w-[135px] rounded-[62px] bg-[#111] text-base text-white block">
            <Link href="/contacto">Contacto</Link>
          </button>
        </div>
        <BannerMenu/>
      </Drawer>
    </div>
  );
};

