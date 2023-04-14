import { getDocs } from "firebase/firestore";
import { movieRef } from "./firebase/firebase";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from 'react-stars'
import { Link } from "react-router-dom";
function Cards_1() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getData() {
          setLoading(true);
          const _data = await getDocs(movieRef);
          _data.forEach((doc) => {
            setData((prv) => [...prv, {...(doc.data()), id: doc.id}])
            
          })
          setLoading(false);
        }
        getData();
      },[])

    return (

        <div  className="flex flex-wrap justify-between items-center p-3 mt-2">
            
            {loading ? <div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="white" /></div> : 
                data.map((e, i) => {
                return (
                    <Link to={`/details/${e.id}`}><div key={i} className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500">
                        <img className="h-60 md:72 p-2" src={e.link} alt="" />
                        <h1>{e.tittle}</h1>
                        <h1>Rating: {5}</h1>
                        <ReactStars size={24}  value={5} edit={false}/>
                        <h1>Year: {e.year}</h1>
                        

                    </div></Link>
                    
                )
            })}
        </div>
    )
}

export default Cards_1;