import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { movieRef } from "./firebase/firebase";
import swal from "sweetalert";
import { TailSpin } from "react-loader-spinner";
function AddMovie() {
    const [form,setForm]=useState({
        tittle:"",
        year:"",
        description: "",
        link:""  
        
    });
    const [loading, setLoading] = useState(false);
    const addMovie= async ()=>{
        setLoading(true);
        await addDoc(movieRef,form)
        swal({
            title: "Successfully Added",
          icon: "success",
          buttons: false,
          timer: 3000
        })
        setForm({
            title: "",
            year: "",
            description: "",
            image: ""
          })
          setLoading(false);
          
        

    }


    return (
        <div >
            <section class="text-white body-font relative">
                <div class="container px-5 py-8 mx-auto">
                    <div class="flex flex-col text-center w-full mb-4">
                        <h1 class="sm:text-3xl text-xl font-medium title-font mb-4 text-white">Add Movie</h1>
                        
                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="name" class="leading-7 text-sm text-white ">Tittle</label>
                                    <input type="text" id="name" name="name" value={form.tittle} onChange={(e)=> setForm({...form,tittle: e.target.value})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="p-2 w-1/2">
                                <div class="relative">
                                    <label for="email" class="leading-7 text-sm text-white">Year</label>
                                    <input type="email" id="email" name="email" value={form.year} onChange={(e)=> setForm({...form,year: e.target.value})} class="w-full bg-white rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div class="relative w-full">
                                    <label for="name" class="leading-7 text-sm text-white ">Movie Link</label>
                                    <input type="text" id="name" name="name" value={form.link} onChange={(e)=> setForm({...form,link: e.target.value})} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            <div class="p-2 w-full">
                                <div class="relative">
                                    <label for="message" class="leading-7 text-sm text-white">Description</label>
                                    <textarea id="message" name="message" value={form.description} onChange={(e)=> setForm({...form,description: e.target.value})} class="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div class="p-2 w-full">
                                <button class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg" onClick={addMovie}>{loading ? <TailSpin height={25} color="white" /> : 'Submit'}</button>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </section>

        </div>

    )
}

export default AddMovie;