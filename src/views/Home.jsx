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
      <h2 className="my-4 font-bold text-2xl">My Media</h2>
      <table className="w-full border border-white rounded-sm">
        <thead>
          <tr className="border border-white">
            <th className="border border-white p-3 text-center">Thumbnail</th>
            <th className="border border-white p-3 text-center">Title</th>
            <th className="border border-white p-3 text-center">Description</th>
            <th className="border border-white p-3 text-center">Owner</th>
            <th className="border border-white p-3 text-center">Created</th>
            <th className="border border-white p-3 text-center">Size</th>
            <th className="border border-white p-3 text-center">Type</th>
            <th className="border border-white p-3 text-center">Operations</th>
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
