import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const d = new Date();
  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [batch, setBatch] = useState("6:00 - 7:00 AM");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    Axios.post("https://yoga-klk9.onrender.com/api/auth/payment", {
      name: name,
      email: email,
      phone: phone,
      age: age,
      batch: batch,
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Payment Successful");
          navigate("/");
        }
      })
      .catch((err) => {
        alert("Transaction Failed, Try again");
        navigate("/");
      });
  };

  return (
    <div className="relative max-w-md mx-auto mt-8 p-8 rounded-md shadow-md bg-white">
      <h2 className="text-3xl font-semibold mb-6 text-center text-teal-500">
        Yoga Class Registration
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-2 border-teal-500 p-2 rounded-md focus:outline-none focus:border-teal-700"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-2 border-teal-500 p-2 rounded-md focus:outline-none focus:border-teal-700"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-600">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border-2 border-teal-500 p-2 rounded-md focus:outline-none focus:border-teal-700"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-gray-600">
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            min="18"
            max="65"
            className="w-full border-2 border-teal-500 p-2 rounded-md focus:outline-none focus:border-teal-700"
            required
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="batch" className="block text-gray-600">
            Preferred Batch:
          </label>
          <select
            id="batch"
            name="batch"
            className="w-full border-2 border-teal-500 p-2 rounded-md focus:outline-none focus:border-teal-700"
            onChange={(e) => setBatch(e.target.value)}
          >
            <option value="6-7AM">6:00 - 7:00 AM</option>
            <option value="7-8AM">7:00 - 8:00 AM</option>
            <option value="8-9AM">8:00 - 9:00 AM</option>
            <option value="5-6PM">5:00 - 6:00 PM</option>
          </select>
        </div>

        <div className="text-gray-600">
          <label>Fee:</label> 500 Rs
        </div>

        <div>
          <label className="block text-gray-600">Payment:</label>
          <p className="text-gray-500">
            You are paying for the month : {monthsArray[d.getMonth()]}
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none"
        >
          Register & Pay
        </button>
      </form>
    </div>
  );
};

export default Register;
