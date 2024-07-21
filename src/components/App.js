
import React from "react";
import './../styles/App.css';

const App = () => {

  const [data,setData]=useState('')
  //const [foun,setFoun]=useState(false)

  const fetchData=async()=>{

    const res=await axios.get('https://reqres.in/api/users')

    const vals=res.data.data

    console.log(vals)

    setData(vals)
  




  }

  return (
   
  <div className="App">

<div className="head">
  <h2>Blue Whales</h2>

  <button onClick={fetchData} className="btn btn-sucess">Get User List</button>

</div>

<table>
  <tr>
    <th>First Name </th>
    <th>Last Name </th>

    <th>Email </th>

    <th>Avatar </th>
  </tr>

  {
data? data.map((val)=>(
      <tr>
        <td>{val.first_name}</td>
        <td>{val.last_name}</td>
        <td>{val.email}</td>
        <td><img src={val.avatar} /></td>

      </tr>
    )):<p>There is no Data</p>

  }
</table>

    </div>
  )
}

export default App
