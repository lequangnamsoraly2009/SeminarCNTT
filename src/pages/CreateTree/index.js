import React from "react";
import Tree from "react-d3-tree";

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
  return (
    <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
      <Tree data={orgChart} />
    </div>
  );
}

export default CreateTree;
