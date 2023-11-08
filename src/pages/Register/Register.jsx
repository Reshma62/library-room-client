import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import useAuthContext from "../../Hooks/useAuthContext";
import { Cropper } from "react-cropper";
import UploadImg from "../../components/Register/UplaodImag";
import "cropperjs/dist/cropper.css";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
// import axios from "axios";
import useAxios from "../../Hooks/useAxios";

const Register = () => {
  const axios = useAxios();
  /*   const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [cropData, setCropData] = useState("");
  const [openModal, setOpenModal] = useState(false); */
  const [showPass, setshowPass] = useState(false);
  const { createUser, updateUser } = useAuthContext();
  const navigate = useNavigate();
  // const cropperRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*   function toggleModal() {
    setOpenModal(!openModal);
  }
  const handleFileChange = (e) => {
    setOpenModal(true);
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
    const storage = getStorage();
    const storageRef = ref(storage, "profilePic/" + Date.now());
    // Data URL string
    const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
    uploadString(storageRef, message4, "data_url").then((snapshot) => {
      getDownloadURL(storageRef).then(async (downloadURL) => {
        setImageURL(downloadURL);
        await updateUser("hello", downloadURL)
          .then(() => {
            setCropData("");
            setImage(null);
            setOpenModal(false);
          })
          .catch((error) => {
            alert(error);
          });
      });
    });
  }; */
  const submitData = (data) => {
    // console.log(Object.keys(data).join(", "));
    const { userName, email, password, role, imgUrl } = data;
    const userInfo = {
      userName,
      email,
      password,
      role,
      imgUrl,
    };

    createUser(email, password)
      .then((result) => {
        updateUser(userName, imgUrl)
          .then((result) => {
            toast.success(
              "Registation successfull. Please wait for redirects.."
            );
            setTimeout(() => {
              navigate("/login");
            }, 1500);

            axios
              .post(`/auth/register-user`, userInfo)
              .then((result) => {})
              .catch((err) => {
                console.log("error is: ", err);
              });
          })
          .catch((err) => {
            console.log(err, 47);
          });
      })
      .catch((err) => {
        const errorMessage = err.message;

        if (errorMessage.includes("auth/email-already-in-use")) {
          toast.error("Email already in use");
        }
      });
  };
  return (
    <section className="font-poppins ">
      <Toaster position="top-center" reverseOrder={false} />
      <div
        className="hidden  text-center bg-blue-100 sdfbg-gray-700 lg:block bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2332.jpg')",
        }}
      >
        <div className="bg-slate-900/50 py-20">
          <div className="max-w-6xl mx-auto pb-24">
            <span className="inline-block text-base font-medium text-white sdftext-blue-300">
              Welcome To
            </span>
            <h2 className="mb-6 font-semibold text-white text-7xl sdftext-gray-300">
              Library Room
            </h2>
            <p className="mb-6 text-xl text-white">
              Unlocking Potential Through Learning
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto pb-20 ">
        <div className="w-full shadow-lg bg-white sdfbg-gray-800 mt-11 lg:-mt-36 lg:full p-7 rounded-3xl">
          <span className="flex justify-end mb-8">
            <Link
              to="/login"
              className="px-4 py-3 text-sm font-medium text-gray-100 bg-primaryColor hover:text-blue-200 rounded-lg"
            >
              Login Account
            </Link>
          </span>
          <div className="">
            <form className="p-0 m-0" onSubmit={handleSubmit(submitData)}>
              {/*  <div className="mb-6 overflow-hidden">
                {openModal && (
                  <UploadImg
                    onClick={toggleModal}
                    titel="Upload your Photo"
                    show={true}
                    sendImg={getCropData}
                  >
                    <div className="flex flex-col justify-center items-center relative">
                      {image && (
                        <div className="border border-solid border-red-800  w-full">
                          <Cropper
                            style={{ height: 300, width: "100%" }}
                            initialAspectRatio={1}
                            preview=".img-preview"
                            src={image}
                            ref={cropperRef}
                            viewMode={1}
                            guides={true}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            checkOrientation={false}
                          />
                        </div>
                      )}
                      {image ? (
                        <div className="w-[100px] h-[100px] mx-auto rounded-full overflow-hidden mb-5 border-2 border-solid border-primaryColor">
                          <div className="img-preview w-full h-full"></div>
                        </div>
                      ) : (
                        <div className="w-[100px] h-[100px]">
                          <img src="" alt="HELLO" />
                        </div>
                      )}
                      <input
                        {...register("profilepic", { required: true })}
                        type="file"
                        className="w-full px-4 py-4 bg-gray-200 rounded-lg lg:py-5 sdftext-gray-300 sdfbg-gray-700 "
                        name="profilepic"
                        id="profilepic"
                        onChange={handleFileChange}
                      />
                    </div>
                  </UploadImg>
                )}

                <p className="text-lg text-primaryColor font-bold">
                  Profile Pic
                </p>
                <div className="relative flex items-center">
                  <label onClick={toggleModal}>
                    <img
                      src={
                        imageURL
                          ? imageURL
                          : "https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?size=626&ext=jpg&ga=GA1.1.890845763.1697116913&semt=sph"
                      }
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </label>
                </div>
                {errors.userName && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div> */}
              <div className="mb-6">
                <p className="text-lg text-primaryColor font-bold">
                  Profile Picture
                </p>
                <div className="relative flex items-center">
                  <input
                    {...register("imgUrl", { required: true })}
                    type="text"
                    className="w-full px-4 py-4 bg-gray-200 rounded-lg lg:py-5 sdftext-gray-300 sdfbg-gray-700 "
                    name="imgUrl"
                    placeholder="Enter profile image url"
                  />
                </div>
                {errors.imgUrl && (
                  <p className="text-red-500">Image is required</p>
                )}
              </div>

              <div className="mb-7">
                <p className="text-lg text-primaryColor font-bold">Name</p>
                <input
                  {...register("userName", { required: true })}
                  type="text"
                  className="w-full px-4 py-4 bg-gray-200 rounded-lg sdfbg-gray-700 lg:py-5 sdftext-gray-300 "
                  name="userName"
                  placeholder="Enter your Name"
                />
                {errors.userName && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>
              <div className="mb-6">
                <p className="text-lg text-primaryColor font-bold">Email</p>
                <div className="relative flex items-center">
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="w-full px-4 py-4 bg-gray-200 rounded-lg lg:py-5 sdftext-gray-300 sdfbg-gray-700 "
                    name="email"
                    placeholder="Enter email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              <div className="mb-6">
                <p className="text-lg text-primaryColor font-bold">Password</p>
                <div className="relative flex items-center">
                  <input
                    {...register("password", { required: true })}
                    type={showPass ? "text" : "password"}
                    className="w-full px-4 py-4 bg-gray-200 rounded-lg lg:py-5 sdftext-gray-300 sdfbg-gray-700 "
                    name="password"
                    placeholder="Enter password"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 right-5">
                    {showPass ? (
                      <AiFillEye onClick={() => setshowPass(!showPass)} />
                    ) : (
                      <AiFillEyeInvisible
                        onClick={() => setshowPass(!showPass)}
                      />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>
              <div className="mb-6">
                <div className="relative ">
                  <p className="text-lg text-primaryColor font-bold">Role</p>
                  <select
                    name="role"
                    {...register("role", { required: true })}
                    className="w-full px-4 py-4 bg-gray-200 rounded-lg lg:py-5 sdftext-gray-300 sdfbg-gray-700 "
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                {errors.role && (
                  <p className="text-red-500">Role is required</p>
                )}
              </div>
              <button
                className="w-full px-4 py-4 mt-6 font-medium text-gray-200 bg-primaryColor rounded-lg sdfbg-blue-500 hover:text-blue-200 "
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
