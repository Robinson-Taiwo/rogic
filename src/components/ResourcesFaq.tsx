import React from 'react';

const FigmaUIKits: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h2 className="text-2xl font-semibold mb-8">Figma UI Kits</h2>
      <div className="space-y-4">
        <UIItem title="Untitled UI & Design System" />
        <UIItem title="Ant Design System for Figma" />
      </div>
    </div>
  );
};

interface UIItemProps {
  title: string;
}

const UIItem: React.FC<UIItemProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center w-[300px] md:w-[400px] p-4 bg-white shadow rounded-lg">
      <span className="text-gray-800">{title}</span>
      <button className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-700">
        Learn more
      </button>
    </div>
  );
};

export default FigmaUIKits;
