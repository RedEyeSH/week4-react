import { Link } from "react-router";
import { useAuthentication, useMedia } from "../hooks/apiHooks.js";

const MediaRow = (props) => {
  const { isLoggedIn } = useAuthentication();
  const { item, setSelectedItem } = props;

  const { deleteMedia, modifyMedia } = useMedia();

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await deleteMedia(id, token);
      navigate('/');
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleModify = async () => {
    try {
      const token = localStorage.getItem('token');
      await modifyMedia(id, token);
    } catch (e) {
      console.error(e.message);
    }
  }

  function handeClick() {
    setSelectedItem(item);
  }

  return (
    <tr className="border border-white p-3 text-center" key={item.media_id}>
      <td className="border border-white p-3 text-center">
        <img className="w-full h-full object-cover" src={item.thumbnail} alt={item.title} />
      </td>
      <td className="border border-white p-3 text-center">{item.title}</td>
      <td className="border border-white p-3 text-center">{item.description}</td>
      <td className="border border-white p-3 text-center">{item.user_id}</td>
      <td className="border border-white p-3 text-center">{new Date(item.created_at).toLocaleDateString('fi-FI')}</td>
      <td className="border border-white p-3 text-center">{item.filesize}</td>
      <td className="border border-white p-3 text-center">{item.media_type}</td>
      <td className="border border-white p-3 text-center">
        {/* <button onClick={handeClick}>View</button> */}
        <Link className="underline" to="/single" state={{item}}>Show</Link>
        {isLoggedIn && (
          <>
            <button 
              className="w-full my-1 px-0.5 py-1 rounded-sm bg-[#101345] cursor-pointer border border-white text-white transition duration-250 hover:bg-[#1a1e60] font-bold" 
              onClick={() => {
                console.log("Modify button clicked.")
              }}
            >
              Modify
            </button>
            <button 
              className="w-full my-1 px-0.5 py-1 rounded-sm bg-[#101345] cursor-pointer border border-white text-white transition duration-250 hover:bg-[#1a1e60] font-bold" 
              onClick={() => {
                console.log("Delete button clicked.");
                handleDelete(item.media_id);
              }}
            >
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default MediaRow;
