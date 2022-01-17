import { Modal, Form, Input, Select, InputNumber, DatePicker } from "antd";
import React from "react";
import nextId from "react-id-generator";
import moment from "moment";

const { Option } = Select;

const dateFormat = "YYYY/MM/DD";

function AddMember({ isModalVisible, onClose, onSubmit }) {
  const [form] = Form.useForm();


  const handleSubmit = (values) => {
    const id = nextId("test-id-");
    const dataAddMember = {
      id,
      name: values.name,
      age: values.age,
      sex: values.sex,
      birthday: values.birthday,
      relationship: values.relationship,
      dataHealth: {
        blood: values.blood,
        diseaseTreatment: values.diseaseTreatment,
        diseaseCured: values.diseaseCured,
      },
      children: [],
    };
    onSubmit(id, dataAddMember);
    onClose();
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <Modal
      title="Add Member"
      visible={isModalVisible}
      onOk={form.submit}
      onCancel={closeModal}
      okText="Add"
      cancelText="Cancel"
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Họ và tên"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Quan Hệ"
          name="relationship"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn quan hệ!",
            },
          ]}
        >
          <Select placeholder="Chọn" allowClear>
            <Option value="Chủ Hộ">Chủ Hộ</Option>
            <Option value="Con">Con</Option>
            <Option value="Con Nuôi">Con Nuôi</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Ngày tháng năm sinh"
          name="birthday"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập ngày sinh con!",
            },
          ]}
        >
          <DatePicker
            defaultValue={moment("2015/01/01", dateFormat)}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item
          label="Tuổi"
          name="age"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tuổi của con!",
            },
          ]}
        >
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item
          label="Giới tính"
          name="sex"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập giới tính của con!",
            },
          ]}
        >
          <Select placeholder="Select a gender member" allowClear>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Nhóm Máu"
          name="blood"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập nhóm máu!",
            },
          ]}
        >
          <Select placeholder="Chọn nhóm máu" allowClear>
            <Option value="A">A</Option>
            <Option value="B">B</Option>
            <Option value="O">O</Option>
            <Option value="AB">AB</Option>
            <Option value="bloodrare">Máu Hiếm Khác</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Các Bệnh Đang Điều Trị"
          name="diseaseTreatment"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập các bệnh đang điều trị!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Các Bệnh Đã Khỏi"
          name="diseaseCured"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập các bệnh đã điều trị khỏi!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddMember;
