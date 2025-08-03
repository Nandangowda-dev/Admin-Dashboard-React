import React from 'react';
import '../App.css' 
import { Card, Badge, Avatar, Progress } from 'antd';
import useInitCharts from '../charts/useInitCharts';


const dashboardStats = [
  { title: 'Total Users', value: '12,847', change: '+12%', color: 'bg-blue-500', icon: 'fas fa-users' },
  { title: 'Active Users', value: '8,924', change: '+8%', color: 'bg-green-500', icon: 'fas fa-user-check' },
  { title: 'New Orders', value: '1,432', change: '+23%', color: 'bg-indigo-500', icon: 'fas fa-shopping-cart' },
  { title: 'Total Sales', value: '$89,247', change: '+18%', color: 'bg-emerald-500', icon: 'fas fa-chart-line' },
  { title: 'Revenue', value: '$284,592', change: '+15%', color: 'bg-purple-500', icon: 'fas fa-dollar-sign' },
  { title: 'Pending Invoices', value: '156', change: '-5%', color: 'bg-orange-500', icon: 'fas fa-file-invoice' }
];

const recentUsers = [
  { id: '1', name: 'John Smith', email: 'john@example.com', status: 'active', joinDate: '2025-01-20', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20young%20man%20with%20short%20brown%20hair%20wearing%20a%20navy%20blue%20suit%20and%20white%20shirt%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user1&orientation=squarish' },
  { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', status: 'active', joinDate: '2025-01-19', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20young%20woman%20with%20shoulder%20length%20blonde%20hair%20wearing%20a%20black%20blazer%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user2&orientation=squarish' },
  { id: '3', name: 'Michael Brown', email: 'michael@example.com', status: 'pending', joinDate: '2025-01-18', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20middle%20aged%20man%20with%20dark%20hair%20wearing%20a%20gray%20suit%20and%20blue%20tie%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user3&orientation=squarish' },
  { id: '4', name: 'Emily Davis', email: 'emily@example.com', status: 'active', joinDate: '2025-01-17', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20young%20woman%20with%20curly%20brown%20hair%20wearing%20a%20white%20blouse%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user4&orientation=squarish' },
  { id: '5', name: 'David Wilson', email: 'david@example.com', status: 'inactive', joinDate: '2025-01-16', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20man%20with%20glasses%20and%20beard%20wearing%20a%20dark%20blue%20shirt%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user5&orientation=squarish' }
];

const Dashboard: React.FC = () => {
  useInitCharts();
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardStats.map((stat, idx) => (
          <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mr-4`}>
                <i className={`${stat.icon} text-white text-lg`}></i>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} from last month
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="User Activity" className="border-0 shadow-sm">
          <div id="user-activity-chart" style={{ width: '100%', height: '300px' }}></div>
        </Card>
        <Card title="Revenue Trends" className="border-0 shadow-sm">
          <div id="revenue-chart" style={{ width: '100%', height: '300px' }}></div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Sales Distribution" className="border-0 shadow-sm">
          <div id="sales-distribution-chart" style={{ width: '100%', height: '300px' }}></div>
        </Card>
        <Card title="Order Trends" className="border-0 shadow-sm">
          <div id="order-trends-chart" style={{ width: '100%', height: '300px' }}></div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent User Registrations" className="border-0 shadow-sm">
          <div className="space-y-4">
            {recentUsers.slice(0, 5).map((user) => (
              <div key={user.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <Avatar src={user.avatar} size={40} />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <Badge 
                  status={user.status === 'active' ? 'success' : user.status === 'pending' ? 'warning' : 'error'} 
                  text={user.status}
                />
              </div>
            ))}
          </div>
        </Card>

     <Card title="System Status" className="border-0 shadow-sm" >
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Server Uptime */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#4B5563", fontWeight: 500 }}>Server Uptime</span>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 220 }}>
            <Progress percent={99.9} size="small" style={{ flex: 1 }} showInfo={false} strokeColor="#22c55e" />
            <span style={{ minWidth: 48, textAlign: "right", fontWeight: 600 }}>99.9%</span>
          </div>
        </div>
        {/* Database Performance */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#4B5563", fontWeight: 500 }}>Database Performance</span>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 220 }}>
            <Progress percent={95} size="small" style={{ flex: 1 }} showInfo={false} strokeColor="#3b82f6" />
            <span style={{ minWidth: 48, textAlign: "right", fontWeight: 600 }}>95%</span>
          </div>
        </div>
        {/* API Response Time */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#4B5563", fontWeight: 500 }}>API Response Time</span>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 220 }}>
            <Progress percent={88} size="small" style={{ flex: 1 }} showInfo={false} strokeColor="#f59e42" />
            <span style={{ minWidth: 48, textAlign: "right", fontWeight: 600 }}>120ms</span>
          </div>
        </div>
        {/* Storage Usage */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#4B5563", fontWeight: 500 }}>Storage Usage</span>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: 220 }}>
            <Progress percent={67} size="small" style={{ flex: 1 }} showInfo={false} strokeColor="#ec4899" />
            <span style={{ minWidth: 48, textAlign: "right", fontWeight: 600 }}>67%</span>
          </div>
        </div>
      </div>
    </Card>


      </div>
    </div>
  );
};
export default Dashboard;
