
import { graph } from './graph.js'


const dfsPrint = (graph, node, visited, path) => { 
    visited[node] = true;
    path.push(node)

    let isSheet = true

    for (let index = 0; index < graph.length; index++) {
        if(graph[node][index] === 1 && !visited[index]) {
            isSheet = false
            dfsPrint(graph, index, visited, path)
        }
    }

    if(isSheet) {
        console.log(path.map(i => String.fromCharCode(i + 65)).join(''))
    }

    path.pop()
    visited[node] = false
 }

 console.log(graph.length)
 dfsPrint(graph, 0, new Array(graph.length).fill(false), [])