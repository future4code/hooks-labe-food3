
 export const headers = {
    headers : {
        auth :  localStorage.getItem("token")        
    }
 }

 console.log(headers)

 export const URL_BASE = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodA"