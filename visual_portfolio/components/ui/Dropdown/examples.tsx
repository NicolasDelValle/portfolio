import React from 'react';
import Dropdown from './Dropdown';

// Ejemplos de uso del Dropdown con diferentes triggers personalizados

export const DropdownExamples = () => {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const [isOpen4, setIsOpen4] = React.useState(false);

  const sampleItems = [
    'Opción 1',
    'Opción 2',
    { name: 'Acción', action: () => console.log('Acción ejecutada') }
  ];

  return (
    <div className="p-8 space-y-6">
      <h2 className="text-xl font-bold">Ejemplos de Dropdown Personalizado</h2>

      {/* 1. Uso básico con name (fallback) */}
      <div>
        <h3 className="font-semibold mb-2">1. Uso básico con name</h3>
        <Dropdown
          isOpen={isOpen1}
          name="Menú Básico"
          onClick={() => setIsOpen1(!isOpen1)}
          onClose={() => setIsOpen1(false)}
          onMouseEnter={() => { }}
          items={sampleItems}
        />
      </div>

      {/* 2. Con children (Slot Pattern) */}
      <div>
        <h3 className="font-semibold mb-2">2. Con children personalizado</h3>
        <Dropdown
          isOpen={isOpen2}
          onClick={() => setIsOpen2(!isOpen2)}
          onClose={() => setIsOpen2(false)}
          onMouseEnter={() => { }}
          items={sampleItems}
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            🎨 Trigger Personalizado
          </button>
        </Dropdown>
      </div>

      {/* 3. Con renderTrigger (Render Props) */}
      <div>
        <h3 className="font-semibold mb-2">3. Con renderTrigger</h3>
        <Dropdown
          isOpen={isOpen3}
          onClick={() => setIsOpen3(!isOpen3)}
          onClose={() => setIsOpen3(false)}
          onMouseEnter={() => { }}
          items={sampleItems}
          renderTrigger={(props) => (
            <div
              {...props}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded cursor-pointer"
            >
              <span>⚙️</span>
              <span>Configuración</span>
              <span className={`transform transition-transform ${props.isOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </div>
          )}
        />
      </div>

      {/* 4. Trigger complejo con estado interno */}
      <div>
        <h3 className="font-semibold mb-2">4. Trigger con estado interno</h3>
        <Dropdown
          isOpen={isOpen4}
          onClick={() => setIsOpen4(!isOpen4)}
          onClose={() => setIsOpen4(false)}
          onMouseEnter={() => { }}
          items={sampleItems}
          renderTrigger={(props) => (
            <button
              {...props}
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="mr-2">📊</span>
              <span>Dashboard</span>
              <span className="ml-2">
                {props.isOpen ? '🔼' : '🔽'}
              </span>
              {/* Badge de notificación */}
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default DropdownExamples;