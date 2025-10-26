import React from 'react';
import Overlay from '../Overlay';
import { DropdownItem } from './DropdownItem';
import { useDropdown } from './useDropdown';
import { dropdownVariants, dropdownButtonVariants } from './dropdown.variants';
import { DropdownProps, DEFAULT_CONFIG, TriggerProps } from '@/types/dropdownTypes';

function Dropdown({
  isOpen,
  name,
  onClick,
  onClickOverlay,
  onClose,
  onMouseEnter = () => { },
  items,
  config = DEFAULT_CONFIG,
  trigger,
  className,
}: DropdownProps) {

  const {
    handleButtonClick,
    handleMouseEnter,
    handleItemClick,
    handleOverlayClick
  } = useDropdown({ onClick, onClose, onMouseEnter, onClickOverlay });

  const triggerProps: TriggerProps = {
    onClick: handleButtonClick,
    onMouseEnter: handleMouseEnter,
    className: className ? className : dropdownButtonVariants({ isOpen }),
    'aria-expanded': isOpen,
    'aria-haspopup': 'menu'
  };

  const renderTriggerElement = () => {
    if (trigger) {
      return React.cloneElement(
        trigger as React.ReactElement,
        triggerProps
      );
    }


    return (
      <button {...triggerProps}>
        {name}
      </button>
    );
  };

  return (
    <div className="flex  items-center text-[13px] relative z-20 ">
      <div className="relative  w-full">
        {renderTriggerElement()}

        {isOpen && onClickOverlay && (
          <Overlay onClick={handleOverlayClick} />
        )}

        {isOpen && (
          <div
            className={dropdownVariants({
              orientation: config.orientation,
              position: config.position
            })}
            role="menu"
            aria-orientation="vertical"
          >
            {items.map((item, index) => (
              <DropdownItem
                key={index}
                item={item}
                index={index}
                onClose={handleItemClick}
                onClick={onClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;