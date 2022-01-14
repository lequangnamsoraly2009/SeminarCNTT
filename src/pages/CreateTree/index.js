import React, { useState } from "react";
import Tree from "react-d3-tree";
import AddMember from "./components/AddMember";
// import { Button } from "antd";
import "./createTree.css";

function CreateTree() {
  const [tree, setTree] = useState({
    name: "Root",
    children: [],
  });

  const [node, setNode] = useState(undefined);

  const closeModal = () => {
    setNode(undefined);
  };

//   const showModal = () => {
//     setNode(node);
//   };

  const handleSubmitMember = () => {};

  return (
    <div className="container-fluid">
      <div id="treeWrapper" className="tree">
        <Tree
          data={tree}
          onNodeClick={(datum) => setNode(datum)}
          translate={{
            x: 100,
            y: 250,
          }}
        />
        {/* <Button type="primary" onClick={showModal}>
          Open Modal
        </Button> */}
        <AddMember
          isModalVisible={node}
          onClose={closeModal}
          onSubmit={handleSubmitMember}
        />
      </div>
    </div>
  );
}

export default CreateTree;
