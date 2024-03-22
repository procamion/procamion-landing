'use client';
import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  onText?: string;
  offText?: string;
}

const Switch: React.FC<SwitchProps> = ({
  checked,
  onChange,
  onIcon,
  offIcon,
  onText,
  offText,
}) => {
  const toggleSwitch = () => {
    onChange(!checked);
  };

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={toggleSwitch}
      />
      <div className="flex items-center">
        <div
          className={`mr-2 h-5 w-5 ${
            checked ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {checked ? onIcon : offIcon}
        </div>
        <div className="slider relative h-5 w-10 rounded-full bg-gray-400">
          <div
            className={`knob absolute left-0 top-0 h-5 w-5 rounded-full bg-white transition-transform ${
              checked ? 'transform-translate-x-full' : ''
            }`}
          ></div>
        </div>
        <div className="ml-2">
          {checked ? onText || 'On' : offText || 'Off'}
        </div>
      </div>
    </label>
  );
};

export default Switch;
