import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, { Controls, MiniMap, addEdge, useNodesState, useEdgesState } from 'reactflow';
import { get } from 'lodash' 

import 'reactflow/dist/style.css';
import { ModalBuilder } from './components/common/Modal';
 
const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
// allow user to add a node and connect them 
// make nodes added be of diffrent types and have certain property
// set params for certain things 
// let user enter params


export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [val, setVal] = useState({
    modalView: false
  })
  const onNodeClick = (event, node) => {
    // we show the modal form based on the node clicked and get the input data and store it wrt nodes
      console.log(node);
      setVal({modalView: true, nodeId: node.id})
  };

  
  return (
    <div style={{ width: '50vw', height: '70vh', background: '#70FFE7' }}>
       <ModalBuilder  
          show={get(val, ['modalView'], false)} 
          onHide={() => {setVal({ modalView: false})}}
          title={get(val, ['nodeId'], false)}
        />
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
      >
        <Controls/>
        <MiniMap/>
      </ReactFlow>
    </div>
  );
}