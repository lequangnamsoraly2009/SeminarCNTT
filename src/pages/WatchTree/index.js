import React from "react";
import Tree from "react-d3-tree";
import { Collapse } from "antd";
import "../CreateTree/createTree.css";

const { Panel } = Collapse;

const dataTest = {
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
              name: "Workers",
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
              name: "Workers",
            },
          ],
        },
      ],
    },
    {
      name: "Manager",
      attributes: {
        department: "Marketing",
      },
      children: [
        {
          name: "Sales Officer",
          attributes: {
            department: "A",
          },
          children: [
            {
              name: "Salespeople",
            },
          ],
        },
        {
          name: "Sales Officer",
          attributes: {
            department: "B",
          },
          children: [
            {
              name: "Salespeople",
            },
          ],
        },
      ],
    },
  ],
};

function WatchTree() {
  return (
    <div className="container-fluid">
      <div className="tree-header">
        <p>Gia Phả Nhà: Họ Phùng </p>
      </div>
      <div id="treeWrapper" className="tree">
        <Tree
          data={dataTest}
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
      </div>
      <div className="tree-guide">
        <h1>Family Tree Guide</h1>
        <Collapse>
          <Panel header="Zoom Tree Family" key="1">
            <p>Zoom bằng cách cuộn chuột</p>
          </Panel>
          <Panel header="Cách Đọc Trên Cây Gia Phả" key="2">
            <p>1. Đối với node đỏ: Gốc Của Cây</p>
            <p>2. Đối với node xanh dương: Là con của Node Cha</p>
            <p>
              3. Đối với node xanh lá cây: Là vợ/chồng của Node Cha, hay còn gọi
              là node Lá - Node này không có node con
            </p>
          </Panel>
          <Panel header="Cách ẩn/hiện Node Con" key="3">
            <p>
                Click vào node màu xanh dương(node cha) để ẩn hoặc hiện node con
            </p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default WatchTree;
