"use client";
import { FaHome } from "react-icons/fa";

export const GoHome = () => {
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-center">
        <FaHome
          className="w-10 h-10"
          onClick={() => {
            const element = document.getElementById("hero");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>
    </footer>
  );
};
