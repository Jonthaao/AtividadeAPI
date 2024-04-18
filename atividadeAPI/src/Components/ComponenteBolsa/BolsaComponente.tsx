import { useEffect, useState } from "react";
import { BolsaRequestProps } from "../../Interfaces/API-props/BolsaRequestProps";
import { bolsaUser } from "../../Services/ClientBolsa";

const BolsaUser: React.FC<BolsaRequestProps> = ({simbolo}) =>{

    const[bolsa, setBolsaData] = useState<any | null>(null);
    const[loading, setLoading] = useState<boolean | null>(true);
    const[error, setError] = useState<string | null>(null);

    useEffect(() =>{

       bolsaUser(simbolo)
       .then((response)=>{
        setBolsaData(response.data);
        setLoading(false);
       })
       .catch((err) =>{
        setError(err.message);
        setLoading(false);
       });
    }, [simbolo]);
    if(loading) return <div> Loading . . .</div>;
    if(error) return <div>Error: {error}</div>



    return (
        <>
       
        <div>
            <img src={bolsa?.logourl} alt={`${simbolo}'s avatar`} width={100} />
            <h1>{bolsa?.shortName}</h1>
            <h3>{bolsa?.currency}</h3>
            <h3>{bolsa?.twoHundredDayAverage}</h3>
        </div>
        </>
    );

};

export default BolsaUser;