import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Myprofile = () => {
  const [userData, setUserData] = useState({
    name: "Thirukumaran",
    email: "thirukumaran@gmail.com",
    bio: "",
    image: assets.profile_pic,
    phone: "0776181951",
    address: {
      line1: "Karanavai Center",
      line2: "Karaveddy,Jaffna",
    },
    gender: "Male",
    dob: "1996-08-06",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-200 text-3xl font-medium max-w-60 mt-4 border border-gray-800 rounded-md p-1"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none"/>
      <div>
        <p className="text-neutral-500 underline mt-3">Contact Info</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-300 max-w-52 border-gray-500 rounded-md p-1"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? <p>
            <input className="bg-gray-300 rounded-md p-1"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, address:{...prev.address,line1: e.target.value}}))
              } value={userData.address.line1} type="text" />
            <br />
            <input className="bg-gray-300 rounded-md mt-2 p-1"
            onChange={(e) =>
                setUserData((prev) => ({ ...prev, address:{...prev.address,line2: e.target.value}}))
              } value={userData.address.line2} type="text" />
          </p>
          :<p className="text-gray-500 ">
            {userData.address.line1}
            <br />
        
            {userData.address.line2}
          </p>}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">Basic Info</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender</p>
            {isEdit? (
              <select className="max-w-20 bg-gray-300" onChange={(e)=>setUserData(prev=>({...prev,gender:e.target.value}))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p className="text-gray-400">{userData.gender}</p>
            )}
            <p className="font-medium">
              Birthday:
            </p>
            {isEdit? <input className="max-w-32 bg-gray-400 p-1" onChange={(e)=>setUserData(prev=>({...prev,dob:e.target.value}))} value={userData.dob} type="date"/>:
            <p className="text-gray-400">{userData.dob}</p>
            }
          
        </div>
      </div>
      <div className="mt-5">
        {
          isEdit? (
            <button className="border border-primary w-40 p-2 rounded-xl hover:bg-primary hover:text-white transition-all duration-300" onClick={() => setIsEdit(false)}>Save Information</button>
          ) : (
            <button className="border border-green-600 w-32 p-2 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300" onClick={() => setIsEdit(true)}>Edit</button>
          )
        }
      </div>
    </div>
  );
};

export default Myprofile;
