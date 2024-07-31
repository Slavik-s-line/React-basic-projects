function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    width: '250px',
    margin: '20px auto',
    padding: '20px',
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
