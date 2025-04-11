import { useEffect, useState } from 'react';
import SingleView from '../components/SingleView.jsx';
import MediaRow from '../components/MediaRow.jsx';
import { fetchData } from '../utils/fetchData.js';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} setSelectedItem={setSelectedItem} />
          ))}
        </tbody>
      </table>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
    </>
  );
};

export default Home;
