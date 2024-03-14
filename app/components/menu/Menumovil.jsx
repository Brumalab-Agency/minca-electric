"use client"

import { useState } from 'react';
import { Drawer } from 'antd';
import { ubuntu } from "../../ui/fonts";
import { MegaMenu } from './MegaMenu';
import { BannerMenu } from './BannerMenu';

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
        <BannerMenu/>
      </Drawer>
    </div>
  );
};

