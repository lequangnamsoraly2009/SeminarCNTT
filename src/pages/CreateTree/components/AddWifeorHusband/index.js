import { Modal, Form, Input, Select, InputNumber, DatePicker } from "antd";
import React from "react";
import nextId from "react-id-generator";
import moment from "moment";

const { Option } = Select;

const dateFormat = "YYYY/MM/DD";

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
      relationship: values.relationship,
      birthday: values.birthday,
      dataHealth: {
        blood: values.blood,
        diseaseTreatment: values.diseaseTreatment,
        diseaseCured: values.diseaseCured,
      },
    };

    console.log(values);
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
          label="Tên Vợ/Chồng"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên Vợ/Chồng!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ngày tháng năm sinh Vợ/Chồng"
          name="birthday"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập ngày sinh Vợ/Chồng!",
            },
          ]}
        >
          <DatePicker
            defaultValue={moment("2015/01/01", dateFormat)}
            format={dateFormat}
          />
        </Form.Item>
        <Form.Item
          label="Tuổi Vợ/Chồng"
          name="age"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tuổi Vợ/Chồng!",
            },
          ]}
        >
          <InputNumber min={0} max={100} />
        </Form.Item>
        <Form.Item
          label="Vợ hay Chồng"
          name="relationship"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn vợ hoặc chồng!",
            },
          ]}
        >
          <Select placeholder="Chọn một trong hai" allowClear>
            <Option value="Vợ">Vợ</Option>
            <Option value="Chồng">Chồng</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Giới tính vợ/chồng"
          name="sex"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn giới tính!",
            },
          ]}
        >
          <Select placeholder="Chọn một giới tính" allowClear>
            <Option value="Male">Trai</Option>
            <Option value="Female">Gái</Option>
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
          name="disease-treatment"
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
          name="disease-cured"
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

export default AddWifeOrHusband;
