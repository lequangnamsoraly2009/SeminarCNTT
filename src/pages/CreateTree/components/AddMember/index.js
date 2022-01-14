import { Modal, Form, Input, Select, InputNumber } from "antd";
import React from "react";

const { Option } = Select;

function AddMember({ isModalVisible, onClose, onSubmit }) {
  const [form] = Form.useForm();

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };

  const handleSubmit = (values) => {
    onClose();
    console.log(values);
  };

  return (
    <Modal
      title="Add Member"
      visible={isModalVisible}
      onOk={form.submit}
      onCancel={onClose}
      okText="Add"
      cancelText="Cancel"
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Family Member Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input Family Member Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Family Member Age"
          name="age"
          rules={[
            {
              required: true,
              message: "Please input Family Member age!",
            },
          ]}
        >
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item
          label="Family Member Sex"
          name="sex"
          rules={[
            {
              required: true,
              message: "Please input Family Member sex!",
            },
          ]}
        >
          <Select placeholder="Select a gender member" allowClear>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddMember;
