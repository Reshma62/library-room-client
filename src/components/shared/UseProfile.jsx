import toast from "react-hot-toast";
import useAuthContext from "../../Hooks/useAuthContext";

const UseProfile = () => {
  const { user, logOUtUser } = useAuthContext();
  console.log(user, 5);
  const handleLogout = () => {
    logOUtUser()
      .then((result) => {
        toast.success("Logout Success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex gap-3 items-center">
      <div>
        <p className="text-white">Hello</p>
        <p className="text-white">{user?.displayName}</p>
      </div>
      <img
        src={
          user?.photoURL
            ? user.photoURL
            : "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?size=626&ext=jpg&ga=GA1.1.890845763.1697116913&semt=sph"
        }
        alt=""
        className="w-10 h-10 rounded-full"
      />
      <button
        onClick={handleLogout}
        className="bg-primaryColor text-white btn hover:text-primaryColor"
      >
        logout
      </button>
    </div>
  );
};

export default UseProfile;
