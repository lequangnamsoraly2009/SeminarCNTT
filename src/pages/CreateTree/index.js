import React, { useState } from "react";
import Tree from "react-d3-tree";
import AddMember from "./components/AddMember";
// import { Button } from "antd";
import nextId from "react-id-generator";
import "./createTree.css";

function CreateTree() {
  const [tree, setTree] = useState({
    id: nextId("test-id-"),
    name: "Cội Nguồn",
    age: "Invalid",
    sex: "Unknown",
    children: [],
  });

  const [node, setNode] = useState(undefined);

  const closeModal = () => {
    setNode(undefined);
  };

  //   const showModal = () => {
  //     setNode(node);
  //   };

  const handleSubmitMember = (id, dataMemberAdd) => {
    const newTree = bfs(node.data.id, tree, {
      id: id,
      name: dataMemberAdd.name,
      age: dataMemberAdd.age,
      sex: dataMemberAdd.sex,
      children: [] || dataMemberAdd.children,
    });

    console.log(node, dataMemberAdd, newTree);

    if (newTree) {
      setTree(newTree);
    }
  };

  return (
    <div className="container-fluid">
      <div id="treeWrapper" className="tree">
        <Tree
          data={tree}
          onNodeClick={(datum) => setNode(datum)}
          orientation = {"vertical"}
          translate={{
            x: 600,
            y: 50,
          }}
          pathFunc={"step"}
        />
      
          {/* translate={{
            x: 100,
            y: 250,
          }}
        /> */}
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

const bfs = (id, tree, node) => {
  const queue = [];
  queue.unshift(tree);
  while (queue.length > 0) {
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
        age: node.age,
        sex: node.sex,
        children: node.children,
      });
      return { ...tree };
    }

    const length = currentNode.children.length;

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
