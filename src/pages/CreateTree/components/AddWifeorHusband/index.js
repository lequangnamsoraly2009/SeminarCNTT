import { Modal, Form, Input, Select, InputNumber } from "antd";
import React from "react";
import nextId from "react-id-generator";

const { Option } = Select;



function AddWifeOrHusband({ isModalVisible, onClose, onSubmit }) {
  const [form] = Form.useForm();

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };

  const handleSubmit = (values) => {
    onClose();
    const id = nextId("test-id-");
    const dataAddMember = {
      id,
      name: values.name,
      age: values.age,
      sex: values.sex,
    //   children: null,
    };
    onSubmit(id, dataAddMember);
  };

  return (
    <Modal
      title="Add Wife or Husband"
      visible={isModalVisible}
      onOk={form.submit}
      onCancel={onClose}
      okText="Add"
      cancelText="Cancel"
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Your Wife/Husband Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input Your Wife/Husband Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Your Wife/Husband Age"
          name="age"
          rules={[
            {
              required: true,
              message: "Please input Your Wife/Husband Age!",
            },
          ]}
        >
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item
          label="Your Wife/Husband Sex"
          name="sex"
          rules={[
            {
              required: true,
              message: "Please input Your Wife/Husband Sex!",
            },
          ]}
        >
          <Select placeholder="Select a gender" allowClear>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddWifeOrHusband;
