function findDistance(graph, vertexA, vertexB) {
  let temp;
  function recursive(vertex, arr) {
    if (graph[vertex].length === 0)
    arr.push(vertex);
    if(graph[vertex].includes(vertexB)) {
      temp = arr;
      return;
    }
    for (const elem of graph[vertex]) {
      recursive(elem, arr);
    }
  }
  recursive(vertexA, []);
  if (temp) {
    for (let i=temp.length-2; i>=0; i--) {
      if(!graph[temp[i]].includes(temp[i+1])){
        temp.splice(i,1)
      }
    }
    return temp.length;
  }
  else
    return -1;
  
  
}

if (require.main === module) {
  // add your own tests in here
  const graph = {
    jan: ["john", "jambaby"],
    john: ["carl"],
    jambaby: [],
    carl: ["jambaby"],
    dave: []
  };

  console.log("Expecting: 2");
  console.log(findDistance(graph, "jan", "carl"));

  console.log("");

  console.log("Expecting: -1");
  console.log(findDistance(graph, "dave", "carl"));
  // const graphMed = {
  //   jan: ["cranberry", "jamboree"],
  //   john: ["jambaby"],
  //   jambaby: ["jan", "cranberry"],
  //   carl: [],
  //   dave: ["john", "carl"],
  //   cranberry: [],
  //   hamtaro: ["jambaby", "dave"],
  //   jamboree: ["carl", "john"]
  // };
  // console.log(findDistance(graphMed, "jan", "jan"));
}

module.exports = findDistance;

// Please add your pseudocode to this file
// And a written explanation of your solution
