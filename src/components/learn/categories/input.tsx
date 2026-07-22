'use client';

import { Folder } from 'lucide-react';
import { useState } from 'react';

// Input components models configuration
// Using Display category camera settings for consistency
const inputModels = {
  '4x4-keypad': {
    url: '/models/input/4x4Keypad.glb',
    name: '4x4 Keypad',
    position: [30, 45, 65] as [number, number, number],
    target: [0, 8, 0] as [number, number, number],
    scale: 20,
    category: 'input'
  },
  'dip-switch': {
    url: '/models/input/DipSwitch.glb',
    name: 'Dip Switch',
    position: [28, 42, 60] as [number, number, number],
    target: [0, 7, 0] as [number, number, number],
    scale: 16,
    category: 'input'
  },
  'potentiometer': {
    url: '/models/input/Potentiometer.glb',
    name: 'Potentiometer',
    position: [30, 45, 65] as [number, number, number],
    target: [0, 8, 0] as [number, number, number],
    scale: 18,
    category: 'input'
  },
  'push-button': {
    url: '/models/input/PushButton.glb',
    name: 'Push Button',
    position: [28, 42, 60] as [number, number, number],
    target: [0, 7, 0] as [number, number, number],
    scale: 15,
    category: 'input'
  },
  'slide-switch': {
    url: '/models/input/SlideSwitch.glb',
    name: 'Slide Switch',
    position: [28, 42, 60] as [number, number, number],
    target: [0, 7, 0] as [number, number, number],
    scale: 16,
    category: 'input'
  }
};

interface InputCategoryProps {
  onModelSelect: (
    url: string,
    position: [number, number, number],
    target: [number, number, number],
    scale?: number
  ) => void;
}

export function InputCategory({ onModelSelect }: InputCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModelClick = (modelId: string) => {
    const model = inputModels[modelId as keyof typeof inputModels];
    if (model) {
      onModelSelect(model.url, model.position, model.target, model.scale);
    }
  };

  return (
    <li className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-2 w-full rounded-md cursor-pointer transition-colors hover:bg-blue-500/10"
      >
        <Folder className="w-4 h-4 text-blue-400/80" />
        <span className="flex-1 text-left">Input</span>
        <span className="text-xs opacity-60">{isOpen ? '▼' : '►'}</span>
      </button>

      {isOpen && (
        <ul className="ml-6 mt-1 space-y-1 max-h-60 overflow-y-auto">
          <li
            onClick={() => handleModelClick('4x4-keypad')}
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors hover:bg-blue-500/10 text-sm"
          >
            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
            <span>4x4 Keypad</span>
          </li>

          <li
            onClick={() => handleModelClick('dip-switch')}
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors hover:bg-blue-500/10 text-sm"
          >
            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
            <span>Dip Switch</span>
          </li>

          <li
            onClick={() => handleModelClick('potentiometer')}
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors hover:bg-blue-500/10 text-sm"
          >
            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
            <span>Potentiometer</span>
          </li>

          <li
            onClick={() => handleModelClick('push-button')}
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors hover:bg-blue-500/10 text-sm"
          >
            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
            <span>Push Button</span>
          </li>

          <li
            onClick={() => handleModelClick('slide-switch')}
            className="flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors hover:bg-blue-500/10 text-sm"
          >
            <span className="w-1 h-1 rounded-full bg-blue-400"></span>
            <span>Slide Switch</span>
          </li>
        </ul>
      )}
    </li>
  );
}

// Export models for use in other components if needed
export { inputModels };
