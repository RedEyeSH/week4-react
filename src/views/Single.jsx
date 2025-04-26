import { useLocation, useNavigate } from "react-router";

const Single = () => {
   const { state } = useLocation();
   const { item } = state;
   const navigate = useNavigate();

   return (
      <>
         <button className="px-2.5 py-1.5 rounded-sm bg-[#101345] cursor-pointer border border-white text-white transition duration-250 hover:bg-[#1a1e60] font-bold" onClick={() => navigate(-1)}>Go back</button>
         <h1 className="my-4 text-3xl font-bold">{item.title}</h1>
         <p className="my-3">{item.description}</p>
         {item.media_type.includes("image") 
            ? (<img src={item.filename} alt={item.title} />) 
            : (<video src={item.filename} controls />)
         }
      </>
   );    
}

export default Single;