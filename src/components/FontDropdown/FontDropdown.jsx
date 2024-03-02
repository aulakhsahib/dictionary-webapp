/* eslint-disable react/prop-types */
import "./FontDropdown.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useState, useEffect, useRef, useMemo } from "react";
export default function FontDropdown({ defaultLabel }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const dropdownContainer = useRef();

  const options = useMemo(
    () => [
      { label: "Sans Serif", value: `"Inter", "sans-serif"` },
      { label: "Serif", value: `"Lora", "serif"` },
      { label: "Mono", value: `"Inconsolata", "monospace"` },
    ],
    []
  );

  const headerClickHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const labelClickHandler = (clickedOption) => {
    setSelectedOption({ ...clickedOption });
    setIsOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    if (!defaultLabel) {
      setSelectedOption(options[0]);
    }

    const handleBodyClick = (e) => {
      if (!dropdownContainer.current) return;

      if (!dropdownContainer.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick, true);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [defaultLabel, options]);

  useEffect(() => {
    if (!selectedOption.value) return;
    else {
      document.documentElement.style.setProperty(
        "--font-family",
        selectedOption.value
      );
    }
  }, [selectedOption]);

  return (
    <>
      <div className="dd-parent-container" ref={dropdownContainer}>
        <div className="dd-header" onClick={headerClickHandler}>
          <p>{selectedOption.label || defaultLabel}</p>
          <IoIosArrowDropdownCircle className="dd-icon" />
        </div>
        <div className="dd-label-list-wrapper">
          {isOpen && (
            <ul className="dd-label-list">
              {options.map((option, index) => (
                <li
                  className="dd-label"
                  key={index}
                  onClick={() =>
                    labelClickHandler({
                      label: option.label,
                      value: option.value,
                    })
                  }
                  style={{fontFamily: option.value}}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <p>Selected Value : {selectedOption.value}</p>
    </>
  );
}

/* Steps To Implement Dropdown Component on your own.
1. 
*/
