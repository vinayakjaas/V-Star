import { useState } from "react"
import ReactStars from "react-stars"
import { movieRef, reviewsRef } from "./firebase/firebase"
import { addDoc , doc,query,where,getDocs} from "firebase/firestore"
import { TailSpin, ThreeDots } from "react-loader-spinner"
import swal from "sweetalert"
import { useEffect } from "react"



function Reviews(id){
    const [loading,setLoading]=useState(false)
    const [reviewloading,setReviewloading]=useState(false)
    const [rating,setRating]=useState("")
    const [data,setData]=useState()
    

    const [form,setForm]=useState("")
    const SendReview=async()=>{
        setLoading(true)
        try {
            await addDoc(reviewsRef,{
                movieid:id,
                name:"Vinayak Raj",
                // rating:rating,
                thought:form,
                timestamp:new Date().getTime()
            })
            swal({
                tittle:"Review Sent",
                icon:"Success",
                buttons:false,
                timer:3000
            })
        } catch (error) {
            swal({
                tittle:error.message,
                icon:"error",
                buttons:false,
                timer:3000
        })
        
            
            
        }
        setLoading(false);
        useEffect(()=>{
            async function getData(){
                let quer=query(movieRef,where('movieid','==',id))
                const querysnapshot = await getDocs(quer);
                querysnapshot.forEach((doc)=>{
                    setData((prev)=>[...prev,doc.data()])
                })
                setReviewloading(false);


            }
            getData();
        },[])
    }
    return(
        <div className="mt-2 border-t-2 border-gray-700 w-full">
            <ReactStars size={24}  half={true} value={3.5}/>
            <input  value={form} onChange={(e)=> setForm(e.target.value)} type="text" placeholder="Share Your Thoughts..." className="w-full p-2 text-white bg-gray-500 outline-none" />
            <button onClick={SendReview} className="bg-green-500 w-full p-1 mt-2 hover:bg-green-800 flex justify-center" >
                {loading ?<TailSpin height={20} color="white"/> :"Share"}
                </button>
                {/* {reviewloading? <div className="mt-6 flex justify-center">
                <ThreeDots height={10} color="white" />
                </div>
                :
                <div>
                    {data.map((e,i)=>{
                        return(
                            <div >{e.thought}</div>
                        )
                    })}
                     
                     </div>
                } */}
        </div>
    )

 }

export default Reviews 