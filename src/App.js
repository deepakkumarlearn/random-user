import {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import RandomUser from "./RandomUser";

function App() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({})


  const fetchDetail = async ()=>{
    const {data} = await axios.get('https://randomuser.me/api/')
    console.log(data)
    setLoading(false)
    const details1 = data.results[0]
    console.log(details1)
    setDetails(details1)
  }

  useEffect(()=>{
    fetchDetail()
  },[])
  

  return (
    <div className="App">
      <header className="App-header">
            {loading ? 'Loading':<RandomUser details={details} />} 
      </header>
    </div>
  );
}

export default App;
