import React, { useState } from 'react';
import { Card, Form, Button, Input, Select, Switch, message } from 'antd';

const { Option } = Select;

const Settings: React.FC = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    email: true, sms: false, push: true
  });

  const handleNotificationToggle = (type: string) => {
    setNotificationSettings(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
    message.success(`${type.charAt(0).toUpperCase() + type.slice(1)} notifications ${notificationSettings[type as keyof typeof notificationSettings] ? 'disabled' : 'enabled'}`);
  };
  const handleFormSubmit = (formType: string) => {
    message.success(`${formType} updated successfully!`);
  };
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Profile Settings" className="border-0 shadow-sm">
          <Form layout="vertical" onFinish={() => handleFormSubmit('Profile')}>
            <Form.Item label="Full Name" name="fullName" initialValue="Admin User">
              <Input placeholder="Enter your full name" className="!rounded-button" />
            </Form.Item>
            <Form.Item label="Email" name="email" initialValue="admin@adminhub.com">
              <Input placeholder="Enter your email" className="!rounded-button" />
            </Form.Item>
            <Form.Item label="Phone" name="phone" initialValue="+1 (555) 123-4567">
              <Input placeholder="Enter your phone number" className="!rounded-button" />
            </Form.Item>
            <Form.Item label="Department" name="department" initialValue="Administration">
              <Select className="w-full">
                <Option value="administration">Administration</Option>
                <Option value="sales">Sales</Option>
                <Option value="marketing">Marketing</Option>
                <Option value="it">IT</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="!rounded-button whitespace-nowrap cursor-pointer">Update Profile</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="Security Settings" className="border-0 shadow-sm">
          <Form layout="vertical" onFinish={() => handleFormSubmit('Password')}>
            <Form.Item label="Current Password" name="currentPassword">
              <Input.Password placeholder="Enter current password" className="!rounded-button" />
            </Form.Item>
            <Form.Item label="New Password" name="newPassword">
              <Input.Password placeholder="Enter new password" className="!rounded-button" />
            </Form.Item>
            <Form.Item label="Confirm Password" name="confirmPassword">
              <Input.Password placeholder="Confirm new password" className="!rounded-button" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="!rounded-button whitespace-nowrap cursor-pointer">Change Password</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="Notification Settings" className="border-0 shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">Email Notifications</span>
                <p className="text-sm text-gray-500">Receive notifications via email</p>
              </div>
              <Switch checked={notificationSettings.email} onChange={() => handleNotificationToggle('email')} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">SMS Notifications</span>
                <p className="text-sm text-gray-500">Receive notifications via SMS</p>
              </div>
              <Switch checked={notificationSettings.sms} onChange={() => handleNotificationToggle('sms')} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">Push Notifications</span>
                <p className="text-sm text-gray-500">Receive browser notifications</p>
              </div>
              <Switch checked={notificationSettings.push} onChange={() => handleNotificationToggle('push')} />
            </div>
          </div>
        </Card>
        <Card title="System Preferences" className="border-0 shadow-sm">
          <Form layout="vertical" onFinish={() => handleFormSubmit('Preferences')}>
            <Form.Item label="Language" name="language" initialValue="en">
              <Select placeholder="Select language" className="w-full">
                <Option value="en">English</Option>
                <Option value="es">Spanish</Option>
                <Option value="fr">French</Option>
                <Option value="de">German</Option>
                <Option value="zh">Chinese</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Timezone" name="timezone" initialValue="utc">
              <Select placeholder="Select timezone" className="w-full">
                <Option value="utc">UTC</Option>
                <Option value="est">EST</Option>
                <Option value="pst">PST</Option>
                <Option value="cst">CST</Option>
                <Option value="mst">MST</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Date Format" name="dateFormat" initialValue="mm/dd/yyyy">
              <Select placeholder="Select date format" className="w-full">
                <Option value="mm/dd/yyyy">MM/DD/YYYY</Option>
                <Option value="dd/mm/yyyy">DD/MM/YYYY</Option>
                <Option value="yyyy-mm-dd">YYYY-MM-DD</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="!rounded-button whitespace-nowrap cursor-pointer">Save Preferences</Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="Account Settings" className="border-0 shadow-sm">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">Two-Factor Authentication</span>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
              <Button size="small" className="!rounded-button whitespace-nowrap cursor-pointer">Enable</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium">Session Timeout</span>
                <p className="text-sm text-gray-500">Automatically log out after inactivity</p>
              </div>
              <Select defaultValue="30" size="small" className="w-20">
                <Option value="15">15m</Option>
                <Option value="30">30m</Option>
                <Option value="60">1h</Option>
                <Option value="120">2h</Option>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-red-600">Delete Account</span>
                <p className="text-sm text-gray-500">Permanently delete your account</p>
              </div>
              <Button size="small" danger className="!rounded-button whitespace-nowrap cursor-pointer">Delete</Button>
            </div>
          </div>
        </Card>
        <Card title="API Settings" className="border-0 shadow-sm">
          <div className="space-y-4">
            <Form.Item label="API Key">
              <Input.Password
                value="sk_test_************************"
                disabled
                className="!rounded-button"
              />
            </Form.Item>
            <div className="flex space-x-2">
              <Button className="!rounded-button whitespace-nowrap cursor-pointer">Generate New Key</Button>
              <Button className="!rounded-button whitespace-nowrap cursor-pointer">View Documentation</Button>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Rate Limits</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Requests per minute:</span>
                  <span>1000</span>
                </div>
                <div className="flex justify-between">
                  <span>Daily quota:</span>
                  <span>100,000</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Settings;
