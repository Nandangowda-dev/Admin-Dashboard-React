import React, { useState } from 'react';
import { Card, Table, Button, Input, Select, DatePicker, Avatar } from 'antd';
import { SearchOutlined, FilterOutlined, PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;

const recentUsers = [
  { id: '1', name: 'John Smith', email: 'john@example.com', status: 'active', joinDate: '2025-01-20', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20young%20man%20with%20short%20brown%20hair%20wearing%20a%20navy%20blue%20suit%20and%20white%20shirt%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user1&orientation=squarish' },
  { id: '2', name: 'Sarah Johnson', email: 'sarah@example.com', status: 'active', joinDate: '2025-01-19', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20young%20woman%20with%20shoulder%20length%20blonde%20hair%20wearing%20a%20black%20blazer%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user2&orientation=squarish' },
  { id: '3', name: 'Michael Brown', email: 'michael@example.com', status: 'pending', joinDate: '2025-01-18', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20middle%20aged%20man%20with%20dark%20hair%20wearing%20a%20gray%20suit%20and%20blue%20tie%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user3&orientation=squarish' },
  { id: '4', name: 'Emily Davis', email: 'emily@example.com', status: 'active', joinDate: '2025-01-17', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20young%20woman%20with%20curly%20brown%20hair%20wearing%20a%20white%20blouse%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user4&orientation=squarish' },
  { id: '5', name: 'David Wilson', email: 'david@example.com', status: 'inactive', joinDate: '2025-01-16', avatar: 'https://readdy.ai/api/search-image?query=professional%20business%20headshot%20of%20a%20man%20with%20glasses%20and%20beard%20wearing%20a%20dark%20blue%20shirt%20against%20a%20clean%20white%20background%20studio%20lighting&width=40&height=40&seq=user5&orientation=squarish' }
];

const userColumns = [
  {
    title: 'User',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: any) => (
      <div className="flex items-center space-x-3">
        <Avatar src={record.avatar} size={40} />
        <div>
          <div className="font-medium text-gray-900">{text}</div>
          <div className="text-sm text-gray-500">{record.email}</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const colors = {
        active: 'bg-green-100 text-green-800',
        pending: 'bg-yellow-100 text-yellow-800',
        inactive: 'bg-red-100 text-red-800'
      };
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    },
  },
  { title: 'Join Date', dataIndex: 'joinDate', key: 'joinDate' },
  {
    title: 'Actions',
    key: 'actions',
    render: (text: any, record: any) => (
      <div className="flex space-x-2">
        <Button size="small" icon={<EyeOutlined />} className="!rounded-button whitespace-nowrap cursor-pointer" />
        <Button size="small" icon={<EditOutlined />} className="!rounded-button whitespace-nowrap cursor-pointer" />
        <Button size="small" icon={<DeleteOutlined />} danger className="!rounded-button whitespace-nowrap cursor-pointer" />
      </div>
    ),
  },
];

const UserManagement: React.FC = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
        <Button type="primary" icon={<PlusOutlined />} className="!rounded-button whitespace-nowrap cursor-pointer">
          Add New User
        </Button>
      </div>
      <Card className="border-0 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input placeholder="Search users..." prefix={<SearchOutlined />} className="border border-gray-300 !rounded-button"/>
          <Select placeholder="Filter by status" className="w-full">
            <Option value="all">All Status</Option>
            <Option value="active">Active</Option>
            <Option value="pending">Pending</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
          <RangePicker className="w-full !rounded-button" />
          <Button icon={<FilterOutlined />} className="!rounded-button whitespace-nowrap cursor-pointer">
            Apply Filters
          </Button>
        </div>
      </Card>
      <Card className="border-0 shadow-sm">
        <Table
          columns={userColumns}
          dataSource={recentUsers}
          rowKey="id"
          pagination={{
            total: 500,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} users`
          }}
          rowSelection={{
            selectedRowKeys: selectedUsers,
            onChange: (selectedRowKeys) => setSelectedUsers(selectedRowKeys as string[]),
          }}
        />
      </Card>
    </div>
  );
};
export default UserManagement;
