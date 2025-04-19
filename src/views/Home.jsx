import { useEffect, useState } from 'react';
import SingleView from '../components/SingleView.jsx';
import MediaRow from '../components/MediaRow.jsx';
import { fetchData } from '../utils/fetchData.js';
import { useMedia } from '../hooks/apiHooks.js';

const Home = () => {
  const { mediaArray } = useMedia();
  const [selectedItem, setSelectedItem] = useState(null);

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
