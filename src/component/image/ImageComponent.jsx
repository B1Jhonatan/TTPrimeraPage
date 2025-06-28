const ImageComponent = ({ linkImg, nombre, css }) => {
  return (
    <div>
      <img src={linkImg} alt={nombre} className={css} />
    </div>
  );
};

export default ImageComponent;
