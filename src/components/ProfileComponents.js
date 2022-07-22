import React from "react";
import useForm from "../hooks/useForm";
import axios from "axios"
import { headers, URL_BASE } from "../constants/links";


const ProfileComponents = () =>{
    
    const [form , handleChange] = useForm({
        name:'',
        email:'',
        cpf:'',
      })


      const updateProfile=()=>{
        axios.put(`${URL_BASE}/profile`, form ,headers ).then((res)=>{
            console.log(res)
        }).catch((err)=>{
          console.log(err.response)
        })
    }
    const onSubmitForm = (ev) => {
        ev.preventDefault();
      };
    return(
        <div>
           <form onSubmit={onSubmitForm} >
      <p>Mudar Dados Cadastrais</p>
      <input
      onChange={handleChange}
      value={form.name}
      name={"name"}
      placeholder="Usuario"
      />
      <input
      onChange={handleChange}
      value={form.email}
      name={"email"}
      placeholder="Email"
      />
      <input
      onChange={handleChange}
      value={form.cpf}
      name={"cpf"}
      placeholder="Cpf"
      />
    <button onClick={() => updateProfile() }>ola</button>
     </form>

        </div>
    )
}

export default ProfileComponents;