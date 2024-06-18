import Button from "./components/common/Button";
// import { ToastBuilder } from "./components/common/Toast";
import Flow from "./reactFlow";


function App() {
  return (
    <div className="App">
       {/* <ToastBuilder show={true}/> */}
      <div className="" style={{ background: 'green'}}>
        System Design Judge io
      </div>
     <div className="">
     <div className="d-flex">
     <div className="p-2">Avaliable components
      <div>
        
        <div style={{ background: 'purple'}}>
        Button components
         <Button
          name={'Icon'}
         />
        </div>
      </div>
     </div>
      <div className="">
        Design Arena
        <div><Flow/></div>
      </div>
     </div>
      <div style={{ background: 'orange'}}>
        Results section
        <div> 

        </div>
      </div>
      {/* <div>
       <Flow/>
      </div> */}
     </div>
    </div>
  );
}

export default App;
