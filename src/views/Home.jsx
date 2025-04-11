import { useEffect, useState } from 'react';
import SingleView from '../components/SingleView.jsx';
import MediaRow from '../components/MediaRow.jsx';
import { fetchData } from '../utils/fetchData.js';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  // console.log(selectedItem);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData("test.json");
        setMediaArray(json);
        console.log(json);
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
