"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ubuntu } from "../../ui/fonts";
import Spline from '@splinetool/react-spline';

export default function Modal3d({url_3d}) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="Btn 3D">
        <button
          type="button"
          onClick={openModal}
          className={`${ubuntu.className} border-1 rounded-[32px] border border-[#111] px-4 py-2 text-base font-normal text-[#111] transition duration-300 ease-in-out hover:bg-[#111] hover:text-[white] w-[30%] lg:h-[48px] lg:w-[117px] lg:text-[24px]`}
        >
          3D
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-h-[600px] w-full max-w-[600px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                    <img className="w-[30%] h-auto" src="/logo.png" alt="logo minca" />
                  <div className="w-full h-full grid place-items-center">
                    <div className="h-[600px] w-[600px]">
                      <Spline scene={url_3d} />
                    </div>
                  </div>
                  <img className="w-[50px] h-auto mt-0 absolute bottom-[25px] right-[25px]" src="/lucide_rotate-3d.svg" alt="icono 3d"/>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
