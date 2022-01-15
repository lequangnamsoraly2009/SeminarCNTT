import React, { useState } from "react";
import Tree from "react-d3-tree";
import AddMember from "./components/AddMember";
import nextId from "react-id-generator";
import "./createTree.css";
import { Drawer, Button } from "antd";

function CreateTree() {
  const [tree, setTree] = useState({
    id: nextId("root-"),
    name: "ROOT",
    age: "Invalid",
    sex: "Unknown",
    children: [],
  });

  const [node, setNode] = useState(undefined);
  const [addCon, setAddCon] = useState(false);

  const closeModal = () => {
    setNode(undefined);
    setAddCon(false)
  };

  const handleSubmitMember = (id, dataMemberAdd) => {
    const newTree = bfs(node.data.id, tree, {
      id: id,
      name: dataMemberAdd.name,
      age: dataMemberAdd.age,
      sex: dataMemberAdd.sex,
      children: [] || dataMemberAdd.children,
    });

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
          title="MUỐN THÊM CÁI GÌ ?"
          width={520}
          closable={false}
          onClose={closeModal}
          visible={node}
        >
          <Button type="primary" onClick={() => setAddCon(true)}>
            Thêm Con
            <AddMember
            isModalVisible={addCon}
            onClose={closeModal}
            onSubmit={handleSubmitMember}
          />
          </Button>
          <Button type="primary">Thêm Vợ/Chồng</Button>
        </Drawer>
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
