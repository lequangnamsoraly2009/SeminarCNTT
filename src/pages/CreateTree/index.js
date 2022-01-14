import React, { useState } from "react";
import Tree from "react-d3-tree";
import AddMember from "./components/AddMember";
import { Button } from "antd";
import "./createTree.css";

const orgChart = {
  name: "CEO",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
};

function CreateTree() {
  const [tree, setTree] = useState(orgChart);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmitMember = () => {};

  return (
    <div className="container-fluid">
      <div id="treeWrapper" className="tree">
        <Tree data={tree} />
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <AddMember
          isModalVisible={isModalVisible}
          onClose={closeModal}
          onSubmit={handleSubmitMember}
        />
      </div>
    </div>
  );
}

export default CreateTree;
