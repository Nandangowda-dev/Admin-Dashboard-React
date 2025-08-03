import React from "react";
import {
  DashboardOutlined,
  TeamOutlined,
  FileTextOutlined,
  SettingOutlined,
  LogoutOutlined
} from "@ant-design/icons";

const menuItems = [
  { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
  { key: "users", icon: <TeamOutlined />, label: "User Management" },
  { key: "invoices", icon: <FileTextOutlined />, label: "Invoices" },
  { key: "settings", icon: <SettingOutlined />, label: "Settings" },
];

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<Props> = ({ activeTab, setActiveTab }) => (
  <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10">
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <i className="fas fa-chart-pie text-white text-lg"></i>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Electro Zenix</h3>
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveTab(item.key)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors cursor-pointer ${
              activeTab === item.key
                ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
    <div className="absolute bottom-6 left-6 right-6">
      <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
        <LogoutOutlined />
        <span>Logout</span>
      </button>
    </div>
  </div>
);

export default Sidebar;
