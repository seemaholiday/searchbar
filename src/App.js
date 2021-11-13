import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
   
   const [arrData, setArrData] = useState([
    {
      "id":1,
      "name":"Ram",
      "rollNo":2,
      "phoneNo":"765656565"
    },
    {
      "id":2,
      "name":"Sham",
      "rollNo":3,
      "phoneNo":"78676767676",

    },
    {
      "id":3,
      "name":"Pari",
      "rollNo":4,
      "phoneNo":"65656656565"
    },
    {
    "id":5,
    "name":"Nikita",
    "rollNo":5,
    "phoneNo":"6565445454"
    },
    {
      "id":1,
      "name":"Ram",
      "rollNo":2,
      "phoneNo":"765656565"
    },
    {
      "id":2,
      "name":"Sham",
      "rollNo":3,
      "phoneNo":"78676767676",

    },
    {
      "id":3,
      "name":"Pari",
      "rollNo":4,
      "phoneNo":"65656656565"
    },
    {
    "id":5,
    "name":"Nikita",
    "rollNo":5,
    "phoneNo":"6565445454"
    },
    {
      "id":1,
      "name":"Ram",
      "rollNo":2,
      "phoneNo":"765656565"
    },
    {
      "id":2,
      "name":"Sham",
      "rollNo":3,
      "phoneNo":"78676767676",

    },
    {
      "id":3,
      "name":"Pari",
      "rollNo":4,
      "phoneNo":"65656656565"
    },
    {
    "id":5,
    "name":"Nikita",
    "rollNo":5,
    "phoneNo":"6565445454"
    }
   ])

  function onChangeHandle(e){ 
    console.log("e.target.value", e.target.value);
    if(e.target.value == '') {
      window.location.reload(true)
      const tempArr = arrData;
      setArrData(tempArr)
      return
    }
    const searchResult =  arrData.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.phoneNo.toLowerCase().startsWith(e.target.value.toLowerCase()))
    setArrData(searchResult);
  }

  return (
    <div className="App">
      {
        console.log("arrData", arrData)
      }
        <input type="text" onChange={onChangeHandle} style={{marginTop:"50px"}}/>
        <div>
          <table style={{border:"1px solid #000", marginLeft:"20px"}}>
           <tr style={{border:"1px solid #000"}}>
             <th>Name</th>
             <th>Phone No</th>
             <th>Roll No</th>
           </tr>

              {
                arrData.map(item => {
                  return(
                    <tr>
                      <td style={{border:"1px solid #000"}}>{item.name}</td>
                      <td style={{border:"1px solid #000"}}>{item.phoneNo}</td>
                      <td style={{border:"1px solid #000"}}>{item.rollNo}</td>
                    </tr>
                  )
                })
              }
           
          </table>
        </div>
    </div>
  );
}

export default App;
