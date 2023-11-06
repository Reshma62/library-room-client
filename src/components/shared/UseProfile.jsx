import useAuthContext from "../../Hooks/useAuthContext";

const UseProfile = () => {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div>
      <div>
        <p>Hello</p>
        <p>{user?.displayName}</p>
      </div>
      <img
        src={
          user?.photoUrl
            ? user.photoUrl
            : "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?size=626&ext=jpg&ga=GA1.1.890845763.1697116913&semt=sph"
        }
        alt=""
        className="w-10 h-10 rounded-full"
      />
    </div>
  );
};

export default UseProfile;
