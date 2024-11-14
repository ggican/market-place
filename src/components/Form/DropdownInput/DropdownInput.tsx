import { FC, useEffect, useRef, useState } from "react";

import { DropDownOption, SelectDropdownProps } from "./DropdownInput.types";

const DropdownInput: FC<SelectDropdownProps> = ({ options, label, size = "md" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropDownOption>(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: DropDownOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sizeClasses = {
    sm: "px-2 py-2 w-full",
    md: "px-4 py-4 w-full",
    lg: "px-6 py-6 w-full",
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      {label && <label className="block mb-2 text-[#58595f] font-medium">{label}</label>}
      <div
        onClick={toggleDropdown}
        className={`relative w-full flex justify-between items-center ${sizeClasses[size]} bg-white border border-[#CCE0EE] rounded-md shadow-sm cursor-pointer`}
      >
        {selected.label && (
          <span className="font-poppins text-[14.06px] font-normal leading-[21.1px] decoration-skip-ink-none">
            {selected.label}
          </span>
        )}
        <svg
          className={`w-5 h-5 transform ${isOpen ? "rotate-180" : "rotate-0"} text-[#58595F] transition-all duration-300 ease-in-out`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      <div
        className={`absolute mt-1 w-full bg-white border border-[#CCE0EE] rounded-md shadow-lg z-10 left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => handleOptionClick(option)}
            className={`${sizeClasses[size]} cursor-pointer text-[#58595f] hover:bg-gray-100 font-poppins text-[14.06px] font-normal leading-[21.1px] decoration-skip-ink-none`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownInput;
