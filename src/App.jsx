import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard.jsx';
import UserManagement from './components/UserManagement.jsx';
import Invoices from './components/Invoices.jsx';
import Settings from './components/Settings.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Input, Button, Dropdown, Menu, Avatar, Badge } from 'antd';
import { SearchOutlined, BellOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    return {
      'dashboard': <Dashboard />,
      'users': <UserManagement />,
      'invoices': <Invoices />,
      'settings': <Settings />
    }[activeTab] || <Dashboard />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .!rounded-button { border-radius: 8px !important; }
        
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none; margin: 0;
        }
        input[type="number"] { -moz-appearance: textfield; }
      `}</style>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="ml-64">
        {/* Sticky Header */}
        <header className="sticky top-0 z-10 bg-white shadow-sm  px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-lg">
              <Input
                placeholder="Search anything..."
                prefix={<SearchOutlined />}
                className="border border-gray-300 !rounded-button text-sm"
                size="large"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Button
                icon={<BellOutlined />}
                size="large"
                className="!rounded-button cursor-pointer relative"
              >
                <Badge count={5} size="small" className="absolute -top-1 -right-1" />
              </Button>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="profile" icon={<UserOutlined />} onClick={() => setActiveTab('settings')}>Profile</Menu.Item>
                    <Menu.Item key="settings" icon={<SettingOutlined />} onClick={() => setActiveTab('settings')}>Settings</Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="logout" icon={<LogoutOutlined />}>Logout</Menu.Item>
                  </Menu>
                }
                trigger={['click']}
              >
                <div className="flex items-center space-x-3 cursor-pointer">
                  <Avatar
                    src="https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20confident%20administrator%20wearing%20a%20dark%20suit%20with%20a%20friendly%20smile%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=admin&orientation=squarish"
                    size={40}
                  />
                  <div>
                    <p className="font-medium text-gray-900">Admin User</p>
                    <p className="text-sm text-gray-500">Administrator</p>
                  </div>
                </div>
              </Dropdown>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;
