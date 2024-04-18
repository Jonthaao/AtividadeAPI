import axios from "axios";


const ApiBolsaClient = axios.create({
    baseURL: 'https://g183k2nx-7029.brs.devtunnels.ms/',
    headers: {
        "Content-Type":"application/json"
    }
})


export const bolsaUser = (simbolo : string)=>{
    return ApiBolsaClient.get<any>(`https://g183k2nx-7029.brs.devtunnels.ms/Share/${simbolo}`)
}