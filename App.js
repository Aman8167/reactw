
import "./App.css";

function App() {
  return (
   <div className="App">
        <div className="sidebar_container">
          <div className="sidebar_ab">
           <div className="as">
            Admin Page
           </div>
            
          <div 
            className="profile">
              <button>Home</button>
              <button>Logout</button>
            </div>
            
              <br></br>
              
            <div className=" service_group">
              <select id="service">
                <option value="Service">Service</option>
                <option value="Service">Service</option>
                <option value="Service">Service</option>
                <option value="Service">Service</option>
                <option value="Service">Service</option>
              </select>
            
              
            </div>
           <br></br>
            <div className=" Client_group">
              <select id="Client">
                <option value="Client">Client</option>
                <option value="Client">Client</option>
                <option value="Client">Client</option>
                <option value="Client">Client</option>
                <option value="Client">Client</option>
              </select>
            
              
            </div>
             <br></br>
            <div className="btn_1">
               <button>Add Location</button>
            </div><br></br>
            <div className="btn_2">
               <button>Push Notification to User</button>
            </div><br></br>
            <div className="btn_3">
               <button>Update Status of Booking</button>
            </div>
            <br></br>
          <div className="promotion_group">
            
          <select id="Promotion">
                <option value="Promotion">Promotion</option>
                <option value="Promotion">Promotion</option>
                <option value="Promotion">Promotion</option>
                <option value="Promotion">Promotion</option>
                <option value="Promotion">Promotion</option>
              </select>
          </div>

          <br></br>

          <div className="Topservice_group">
          <select id="Topservice">
                <option value="Topservice">Topservice</option>
                <option value="Topservice">Topservice</option>
                <option value="Topservice">Topservice</option>
                <option value="Topservice">Topservice</option>
                <option value="Topservice">Topservice</option>
              </select>
          </div>
                <br></br>
                 <div className="btn_4">
               <button>View Report</button>
               </div>
          </div>
        </div>
        <div className="body_container">
        {""}
        
        

         </div>
   </div>
  );
}

export default App;
