const MediaRow = (props) => {
  const {item, setSelectedItem} = props;

  // console.log(item);
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
      <td>{new Date(item.created_at).toLocaleDateString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <button onClick={handeClick}>View</button>
      </td>
    </tr>
  );
};

export default MediaRow;
