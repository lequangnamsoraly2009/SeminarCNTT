import React, { useState } from "react";
import Tree from "react-d3-tree";
import AddMember from "./components/AddMember";
import nextId from "react-id-generator";
import "./createTree.css";
import { Drawer, Button } from "antd";
import AddWifeOrHusband from "./components/AddWifeorHusband";

// const dataTest = {
//   name: "CEO",
//   children: [
//     {
//       name: "Manager",
//       attributes: {
//         department: "Production",
//       },
//       children: [
//         {
//           name: "Foreman",
//           attributes: {
//             department: "Fabrication",
//           },
//           children: [
//             {
//               name: "Workers",
//             },
//           ],
//         },
//         {
//           name: "Foreman",
//           attributes: {
//             department: "Assembly",
//           },
//           children: [
//             {
//               name: "Workers",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "Manager",
//       attributes: {
//         department: "Marketing",
//       },
//       children: [
//         {
//           name: "Sales Officer",
//           attributes: {
//             department: "A",
//           },
//           children: [
//             {
//               name: "Salespeople",
//             },
//           ],
//         },
//         {
//           name: "Sales Officer",
//           attributes: {
//             department: "B",
//           },
//           children: [
//             {
//               name: "Salespeople",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };

function CreateTree() {
  const [tree, setTree] = useState({
    id: nextId("root-"),
    name: "ROOT",
    children: [],
  });

  // const [tree, setTree] = useState(dataTest);

  const [node, setNode] = useState(undefined);
  const [addCon, setAddCon] = useState(false);
  const [addParent, setAddParent] = useState(false);

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

  console.log(tree);

  const handleSubmitParent = (id, dataMemberAdd) => {
    const newTree = bfs(node.data.id, tree, {
      id: id,
      attributes: {
        Age: dataMemberAdd.age,
        Sex: dataMemberAdd.sex,
      },
      name: dataMemberAdd.name,
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
          title="CÁC TÍNH NĂNG CHÍNH?"
          width={520}
          closable={false}
          onClose={closeModal}
          visible={node}
        >
          <Button
            type="primary"
            onClick={() => setAddCon(true)}
            className="tree-button-add"
          >
            Thêm Con
            <AddMember
              isModalVisible={addCon}
              onClose={closeModal}
              onSubmit={handleSubmitMember}
            />
          </Button>
          <Button type="primary" onClick={() => setAddParent(true)}>
            Thêm Vợ Hoặc Chồng
            <AddWifeOrHusband
              isModalVisible={addParent}
              onClose={closeModal}
              onSubmit={handleSubmitParent}
            />
          </Button>
        </Drawer>
      </div>
      <div className="tree-feature">
        <div className="tree-feature-header">
          <h1>Một số chức năng: </h1>
        </div>
        <div className="tree-feature-content">
          <Button className="tree-feature-content-btn" type="primary">Save Tree</Button>
          <Button className="tree-feature-content-btn" type="primary">Edit Tree</Button>
          <Button className="tree-feature-content-btn" type="primary">Load New Tree</Button>
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
