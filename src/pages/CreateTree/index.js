import React, { useState } from "react";
import Tree from "react-d3-tree";
import AddMember from "./components/AddMember";
import nextId from "react-id-generator";
import "./createTree.css";
import { Drawer, Button, Modal, Form, Input, Popconfirm } from "antd";
import AddWifeOrHusband from "./components/AddWifeorHusband";
import { useDispatch } from "react-redux";
import { addTree } from "../../app/treeFamilySlice";

function CreateTree() {
  const [tree, setTree] = useState({
    id: nextId("root-"),
    name: "ROOT",
    children: [],
  });

  const dispatch = useDispatch();


  const [form] = Form.useForm();

  // Open/Close Drawer
  const [node, setNode] = useState(undefined);
  // Open/Close Modal Con
  const [addCon, setAddCon] = useState(false);
  const [addParent, setAddParent] = useState(false);

  //  Open/Close Modal Save Tree
  const [isOpenModalSave, setIsOpenModalSave] = useState(false);
  const closeModal = () => {
    setNode(undefined);
    setAddCon(false);
    setAddParent(false);
  };

  // console.log(tree)
  // const testJson = JSON.stringify(tree);
  // console.log(testJson)

  const handleSubmitMember = (id, dataMemberAdd) => {
    const newTree = bfs(node.data.id, tree, {
      id: id,
      attributes: {
        Age: dataMemberAdd.age,
        Sex: dataMemberAdd.sex,
        Relationship: dataMemberAdd.relationship,
      },
      name: dataMemberAdd.name,
      birthday: dataMemberAdd.birthday,
      dataHealth: dataMemberAdd.dataHealth,
      children: [] || dataMemberAdd.children,
    });

    if (newTree) {
      setTree(newTree);
    }
  };

  const handleSubmitParent = (id, dataMemberAdd) => {
    const newTree = bfs(node.data.id, tree, {
      id: id,
      attributes: {
        Age: dataMemberAdd.age,
        Sex: dataMemberAdd.sex,
        Relationship: dataMemberAdd.relationship,
      },
      name: dataMemberAdd.name,
      birthday: dataMemberAdd.birthday,
      dataHealth: dataMemberAdd.dataHealth,
    });

    if (newTree) {
      setTree(newTree);
    }
  };

  const handleCancelModalSave = () => {
    setIsOpenModalSave(false);
  };

  const handleSubmitSaveTree = (values) => {
    const dataTree = {...values, data: tree };
    // console.log(dataTree);
    dispatch(addTree(dataTree));
    setIsOpenModalSave(false);
  };

  const confirmTask = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <div id="treeWrapper" className="tree">
        <Tree
          data={tree}
          onNodeClick={(datum) => setNode(datum)}
          orientation={"vertical"}
          translate={{
            x: 600,
            y: 50,
          }}
          pathFunc={"step"}
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
        />
        {/* <AddMember
          isModalVisible={node}
          onClose={closeModal}
          onSubmit={handleSubmitMember}
        /> */}
        <Drawer
          title="CÁC TÍNH NĂNG CHÍNH?"
          width={520}
          closable={false}
          onClose={closeModal}
          visible={node}
        >
          <Button
            type="primary"
            onClick={() => setAddCon(!addCon)}
            className="tree-button-add"
          >
            Thêm Con
          </Button>
          <AddMember
            isModalVisible={addCon}
            onClose={closeModal}
            onSubmit={handleSubmitMember}
          />
          <Button type="primary" onClick={() => setAddParent(!addParent)}>
            Thêm Vợ Hoặc Chồng
          </Button>
          <AddWifeOrHusband
            isModalVisible={addParent}
            onClose={closeModal}
            onSubmit={handleSubmitParent}
          />
        </Drawer>
      </div>
      <div className="tree-feature">
        <div className="tree-feature-header">
          <h1>Một số chức năng: </h1>
        </div>
        <div className="tree-feature-content">
          <Button
            className="tree-feature-content-btn"
            type="primary"
            onClick={() => setIsOpenModalSave(!isOpenModalSave)}
          >
            Save Tree
          </Button>
          <Modal
            title="Save Tree Family"
            visible={isOpenModalSave}
            onOk={form.submit}
            onCancel={handleCancelModalSave}
          >
            <Form form={form} onFinish={handleSubmitSaveTree}>
              <Form.Item
                label="Tên Cây Gia Phả"
                name="nameTreeFamily"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
          <Popconfirm
            title="Chức năng này chưa được hoàn thành - vui lòng đợi trong thời gian tới!"
            onConfirm={confirmTask}
            okText="Tôi Đã Hiểu"
          >
            <Button className="tree-feature-content-btn" type="primary">
              Edit Tree
            </Button>
          </Popconfirm>
          <Button className="tree-feature-content-btn" type="primary">
            <a href="/">Load New Tree</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

const bfs = (id, tree, node) => {
  const queue = [];
  queue.unshift(tree);
  while (queue?.length > 0) {
    const currentNode = queue.pop();
    // if (currentNode.dataAddMember === dataAddMember) {
    //   return currentNode;
    // }
    // if (currentNode.children) {
    //   currentNode.children.forEach((child) => {
    //     queue.unshift(child);
    //   });
    // }
    if (currentNode.id === id) {
      currentNode.children.push({
        id: node.id,
        name: node.name,
        birthday: node.birthday,
        dataHealth: node.dataHealth,
        attributes: {
          Age: node.attributes.Age,
          Sex: node.attributes.Sex,
          Relationship: node.attributes.Relationship,
        },
        children: node.children,
      });
      return { ...tree };
    }

    const length = currentNode.children?.length;

    for (let i = 0; i < length; i++) {
      queue.unshift(currentNode.children[i]);
    }
    // if (currentNode.children) {
    //   currentNode.children.forEach((child) => {
    //     queue.unshift(child);
    //   });
    // }
  }
};

export default CreateTree;
