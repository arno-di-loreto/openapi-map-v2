const treeData = {
  name: "OpenAPI Document",
  color: "pink",
  level: "orange",
  children: [
    {
      name: "openapi",
      description: "The OpenAPI specification used in the document",
      color: "pink",
      level: "green",
    },
    {
      name: "info",
      description: "General information about the API",
      color: "pink",
      level: "green",
      children: [
        {
          name: "title",
          description: "The name of the API",
          color: "blue",
          level: "green",
        },
        {
          name: "version",
          description: "The version of the API",
          color: "blue",
          level: "green",
        },
        {
          name: "summary",
          description: "A short description of the API",
          markdown: true,
          color: "grey",
          level: "red",
        }
      ]
    }
  ]
}

const treeMapHeight= 800;
const treeMapWidth= 600;
const treeMap = d3.tree().size([treeMapHeight, treeMapWidth]);
let nodes = d3.hierarchy(treeData, d => d.children);
nodes = treeMap(nodes);