import ReactStars from "react-stars";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { movieRef } from "./firebase/firebase";
import { db } from "./firebase/firebase";
import { Bars, ThreeCircles } from "react-loader-spinner";
import Reviews from "./reviews"
function Details(){
    const {id}=useParams();
    const [data,setData]=useState({
        tittle:"",
        year:"",
        image:"",
        description:""
    });
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        async function getData(){
            setLoading(true);
            const _doc=doc(db,"Movies",id);
            const _data= await getDoc(_doc)
      
            setData(_data.data());
            setLoading(false)

        }
        getData();

    },[])
    
    return(
        <div className="p-4 flex flex-col md:flex-row justify-centre">
            { loading ?< ThreeCircles height={30}   color="white" /> :
            <>
            <img className="h-96 mt-4 md:sticky top-24" src={data.link} alt="" />
            <div className="md:ml-4 w-full md:w-1/2">
                <h1 className="text-3xl font-bold">{data.tittle}<span className="text-xl">{data.year}</span></h1>
                <ReactStars size={24}  value={3.5} edit={false}/>
                <p className="mt-5 text-xl">{data.description}</p>
                <Reviews id={id}   />
                
            </div>
            </>
            }
           
        </div>
        
    )
}
export default Details;