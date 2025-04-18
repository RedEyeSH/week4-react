import { useEffect, useState, useCallback } from 'react';
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

const useAuthentication = () => {
   const postLogin = async (inputs) => {
     const fetchOptions = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(inputs),
     };
     const loginResult = await fetchData(
       import.meta.env.VITE_AUTH_API + '/auth/login',
       fetchOptions,
     );
 
     console.log('loginResult', loginResult.token);
 
     window.localStorage.setItem('token', loginResult.token);
 
     return loginResult;
   };
 
   return { postLogin };
 };
 
 const useUser = () => {
   const postUser = async (inputs) => {
      const fetchOptions = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(inputs),
     };
     return await fetchData(
       import.meta.env.VITE_AUTH_API + '/users',
       fetchOptions,
     );
   };
 
   const getUserByToken = useCallback(async (token) => {
     const fetchOptions = {
      headers: {
         Authorization: 'Bearer: ' + token,
      },
     };
 
     const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users/token',
      fetchOptions,
     );
 
     console.log('userResult', userResult);
 
     return userResult;
   }, []);
 
   return { getUserByToken, postUser };
};

export { useMedia, useAuthentication, useUser };