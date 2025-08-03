import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard.jsx';
import UserManagement from './components/UserManagement.jsx';
import Invoices from './components/Invoices.jsx';
import Settings from './components/Settings.jsx';
import Sidebar from './components/Sidebar.jsx';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .!rounded-button { border-radius: 8px !important; }
        body { width: 1440px; min-height: 1024px; }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none; margin: 0;
        }
        input[type="number"] { -moz-appearance: textfield; }
      `}</style>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="ml-64">
        <main className="p-6">
          {{
            'dashboard': <Dashboard />,
            'users': <UserManagement />,
            'invoices': <Invoices />,
            'settings': <Settings />
          }[activeTab] || <Dashboard />}
        </main>
      </div>
    </div>
  );
};
export default App
