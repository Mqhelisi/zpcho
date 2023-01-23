import React, {useState, useEffect} from 'react';
import BodySection from '../BodySection' 
import Footer from '../Footer' 


function DashB() {
  const [movers2, setMovers2] = useState([]);
 
  
  useEffect(()=>{
    fetch("http://localhost:5000/moverr/available").then(
        res => res.json()
    ).then(
        data=> {
            setMovers2(data)
            console.log(data)
        }
    )
},[])


  return <div>
      <BodySection movers={movers2}/>
  </div>;
}

export default DashB;
