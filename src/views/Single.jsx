import { useLocation, useNavigate } from "react-router";

const Single = () => {
   const { state } = useLocation();
   const { item } = state;
   const navigate = useNavigate();

   return (
      <>
         <button onClick={() => navigate(-1)}>Go back</button>
         <h1>{item.title}</h1>
         <p>{item.description}</p>
         {item.media_type.includes("image") 
            ? (<img src={item.filename} alt={item.title} />) 
            : (<video src={item.filename} controls />)
         }
      </>
   );    
}

export default Single;