import { useEffect, useState } from 'react';
import { fetchData } from '../utils/fetchData.js';

const useMedia = () => {
   const [mediaArray, setMediaArray] = useState([]);

   useEffect(() => {
      const getMedia = async () => {
         try {
            const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');

            const userData = await Promise.all(json.map(async (item) => {
               try {
                  const result = await fetchData(import.meta.env.VITE_AUTH_API + '/users/' + item.user_id);
                  return result;
               } catch (error) {
                  console.log("Error fetching data:", error);
                  }
               })
            );
         
            const newData = json.map((item) => {
            const result = userData.find(({user_id}) => user_id === item.user_id);
            return {...item, username: result.username};
         });

         setMediaArray(newData);
         } catch (error) {
            console.error("Failed to fetch:", error);
         }
      };
      getMedia();
   }, []);

   return mediaArray;
};
    
export default useMedia;