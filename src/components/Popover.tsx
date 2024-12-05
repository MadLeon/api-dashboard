import Button from "./Button";

import { useEffect, useRef } from "react";

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPanels: {
    weather: boolean;
    news: boolean;
    stock: boolean;
    crypto: boolean;
  };
  onPanelChange: (panel: string, value: boolean) => void;
  onSave: () => void;
}

// Custom component for the popover
export default function Popover({
  isOpen,
  onClose,
  selectedPanels,
  onPanelChange,
  onSave,
}: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  // Run whenever the isOpen state changes
  useEffect(() => {
    // Handle when click outside of the popover
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Add the event listener if the popover is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={popoverRef} className="popover-container border p-4">
      <div className="flex flex-col gap-4 text-center px-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedPanels.weather}
              onChange={(e) => onPanelChange("weather", e.target.checked)}
            />
            Weather
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedPanels.news}
              onChange={(e) => onPanelChange("news", e.target.checked)}
            />
            News
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedPanels.stock}
              onChange={(e) => onPanelChange("stock", e.target.checked)}
            />
            Stock
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedPanels.crypto}
              onChange={(e) => onPanelChange("crypto", e.target.checked)}
            />
            Crypto
          </label>
        </div>
        <div>
          <Button onClick={onSave}>Save</Button>
        </div>
      </div>
    </div>
  );
}
