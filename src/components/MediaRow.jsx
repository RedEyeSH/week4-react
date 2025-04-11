import { Link } from "react-router";

const MediaRow = (props) => {
  const {item, setSelectedItem} = props;

  function handeClick() {
    setSelectedItem(item);
  }

  return (
    <tr key={item.media_id}>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.user_id}</td>
      <td>{new Date(item.created_at).toLocaleDateString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        {/* <button onClick={handeClick}>View</button> */}
        <Link to="/single" state={{item}}>Show</Link>
      </td>
    </tr>
  );
};

export default MediaRow;
