import React, { useState } from 'react';
import { Card, Table, Button, Input, Select, DatePicker, Modal, Form, Dropdown, Menu } from 'antd';
import { SearchOutlined, DownloadOutlined, PlusOutlined, EyeOutlined, EditOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;

const invoices = [
  { id: 'INV-001', client: 'Acme Corp', amount: '$2,500', status: 'paid', date: '2025-01-20' },
  { id: 'INV-002', client: 'Tech Solutions', amount: '$1,800', status: 'pending', date: '2025-01-19' },
  { id: 'INV-003', client: 'Digital Agency', amount: '$3,200', status: 'overdue', date: '2025-01-15' },
  { id: 'INV-004', client: 'StartupXYZ', amount: '$950', status: 'draft', date: '2025-01-18' }
];

const invoiceColumns = [
  {
    title: 'Invoice ID',
    dataIndex: 'id',
    key: 'id',
    render: (text: string) => <span className="font-mono text-sm">{text}</span>
  },
  { title: 'Client', dataIndex: 'client', key: 'client' },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (amount: string) => <span className="font-semibold">{amount}</span>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => {
      const colors = {
        paid: 'bg-green-100 text-green-800',
        pending: 'bg-yellow-100 text-yellow-800',
        overdue: 'bg-red-100 text-red-800',
        draft: 'bg-gray-100 text-gray-800'
      };
      return (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    },
  },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  {
    title: 'Actions',
    key: 'actions',
    render: (text: any, record: any) => (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="view" icon={<EyeOutlined />}>View</Menu.Item>
            <Menu.Item key="edit" icon={<EditOutlined />}>Edit</Menu.Item>
            <Menu.Item key="download" icon={<DownloadOutlined />}>Download</Menu.Item>
            <Menu.Item key="delete" icon={<DeleteOutlined />} danger>Delete</Menu.Item>
          </Menu>
        }
        trigger={['click']}
      >
        <Button size="small" icon={<MoreOutlined />} className="!rounded-button whitespace-nowrap cursor-pointer" />
      </Dropdown>
    ),
  },
];

const Invoices: React.FC = () => {
  const [isInvoiceModalVisible, setIsInvoiceModalVisible] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Invoice Management</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setIsInvoiceModalVisible(true)}
          className="!rounded-button whitespace-nowrap cursor-pointer"
        >
          Create Invoice
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-600">$45,280</p>
            <p className="text-sm text-gray-600">Total Revenue</p>
          </div>
        </Card>
        <Card className="border-0 shadow-sm">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-600">24</p>
            <p className="text-sm text-gray-600">Paid Invoices</p>
          </div>
        </Card>
        <Card className="border-0 shadow-sm">
          <div className="text-center">
            <p className="text-3xl font-bold text-yellow-600">8</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </Card>
        <Card className="border-0 shadow-sm">
          <div className="text-center">
            <p className="text-3xl font-bold text-red-600">3</p>
            <p className="text-sm text-gray-600">Overdue</p>
          </div>
        </Card>
      </div>
      <Card className="border-0 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Input
            placeholder="Search invoices..."
            prefix={<SearchOutlined />}
            className="border border-gray-300 !rounded-button"
          />
          <Select placeholder="Filter by status" className="w-full">
            <Option value="all">All Status</Option>
            <Option value="paid">Paid</Option>
            <Option value="pending">Pending</Option>
            <Option value="overdue">Overdue</Option>
            <Option value="draft">Draft</Option>
          </Select>
          <RangePicker className="w-full !rounded-button" />
          <Button icon={<DownloadOutlined />} className="!rounded-button whitespace-nowrap cursor-pointer">
            Export
          </Button>
        </div>
      </Card>
      <Card className="border-0 shadow-sm">
        <Table
          columns={invoiceColumns}
          dataSource={invoices}
          rowKey="id"
          pagination={{
            total: 156,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} invoices`
          }}
        />
      </Card>
      <Modal
        title="Create New Invoice"
        visible={isInvoiceModalVisible}
        onCancel={() => setIsInvoiceModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsInvoiceModalVisible(false)} className="!rounded-button whitespace-nowrap cursor-pointer">
            Cancel
          </Button>,
          <Button key="save" className="!rounded-button whitespace-nowrap cursor-pointer">
            Save Draft
          </Button>,
          <Button key="send" type="primary" className="!rounded-button whitespace-nowrap cursor-pointer">
            Create & Send
          </Button>,
        ]}
        width={800}
      >
        <Form layout="vertical" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Client Name" name="clientName">
              <Input placeholder="Enter client name" className="!rounded-button" />
            </Form.Item>
            <Form.Item label="Invoice Date" name="invoiceDate">
              <DatePicker className="w-full !rounded-button" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Due Date" name="dueDate">
              <DatePicker className="w-full !rounded-button" />
            </Form.Item>
            <Form.Item label="Amount" name="amount">
              <Input placeholder="Enter amount" prefix="$" className="!rounded-button" />
            </Form.Item>
          </div>
          <Form.Item label="Description" name="description">
            <Input.TextArea rows={4} placeholder="Enter invoice description" className="!rounded-button" />
          </Form.Item>
          <Form.Item label="Payment Terms" name="paymentTerms">
            <Select placeholder="Select payment terms" className="w-full">
              <Option value="net30">Net 30</Option>
              <Option value="net15">Net 15</Option>
              <Option value="due_on_receipt">Due on Receipt</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default Invoices;
