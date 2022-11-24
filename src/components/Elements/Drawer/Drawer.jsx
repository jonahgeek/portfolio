import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import PropTypes from "prop-types";
import * as React from "react";
import "intersection-observer";

const sizes = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-3xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export const Drawer = ({
  title,
  children,
  isOpen,
  onClose,
  renderFooter,
  size = "md",
}) => {
  return (
    <Transition.Root show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden z-40"
        open={isOpen}
        onClose={onClose}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={React.Fragment}
              enter="transform transition ease-in-out duration-300 sm:duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300 sm:duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className={clsx("w-screen", sizes[size])}>
                <div className="h-full divide-y divide-gray-200 flex flex-col bg-white dark:bg-gray-900 shadow-xl">
                  <div className="min-h-0 flex-1 flex flex-col overflow-y-scroll">
                    <div className="px-4 sm:px-6 bg-green-500 py-4 shadow-sm">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-white">
                          {title}
                        </Dialog.Title>
                        <div className="ml-3 h-7 flex items-center">
                          <button
                            className="bg-green-400 dark:bg-gray-700  rounded-full text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                            onClick={onClose}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 relative flex-1 px-4 sm:px-6">
                      {children}
                    </div>
                  </div>
                  <div className="flex-shrink-0 px-4 py-4 flex justify-end space-x-2">
                    {renderFooter()}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

Drawer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  renderFooter: PropTypes.func.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "full"]),
};
