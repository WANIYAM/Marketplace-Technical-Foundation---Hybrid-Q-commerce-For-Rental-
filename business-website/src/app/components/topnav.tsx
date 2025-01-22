"use client";

import { MdClose } from "react-icons/md"; // Close icon
import { IoMdGift } from "react-icons/io"; // Gift icon
import React, { useState } from 'react'


const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#2A254B] text-white flex justify-center items-center px-4 md:px-8 py-2 text-sm">
      {/* Message Section */}
      <div className="flex items-center gap-2">
        <IoMdGift size={20} />
        <span>
          Free delivery on all orders over £50 with code <strong>EXTRA</strong> at checkout
        </span>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="text-white hover:text-gray-300 transition ml-4" // Added margin-left for spacing
      >
        <MdClose size={20} />
      </button>
    </div>
  );
};

export default NotificationBar;