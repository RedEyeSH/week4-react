import { useEffect, useRef } from "react";

const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  const dialogRef = useRef();

  useEffect(() => {
    if (item && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [item]);

  function handleClick() {
    dialogRef.current.close();
    setSelectedItem(null);
  }

  return (
      <>
        {item && (
          <dialog ref={dialogRef}>
            <button onClick={handleClick}>&#10005;</button>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
              {item.media_type.includes("image") 
                ? (<img src={item.filename} alt={item.title} />) 
                : (<video src={item.filename} controls />)
              }
          </dialog>
        )}
      </>
  );
};

export default SingleView;
