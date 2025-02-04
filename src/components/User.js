const User = (props) => {
  return (
    <div className="user-card">
      <h2>Name : {props.name}</h2>
      <h3>Component type : functional based</h3>
      <h4>Contact : @nitin</h4>
    </div>
  );
};
export default User;
