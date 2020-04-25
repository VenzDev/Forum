import React, { useEffect, useState } from "react";
import ThreadsList from "../components/ThreadsList";
import axios from "axios";
import Loader from "react-loader-spinner";

const UserThreads = () => {
  const [loading, setLoading] = useState(false);
  const [userThreads, setUserThreads] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchUserThreads = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/findUserThreads", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserThreads(res.data);
      setLoading(false);
    };
    fetchUserThreads();
  }, [token]);
  const h1Style = {
    margin: "0",
    paddingTop: "5rem",
    paddingLeft: "40rem",
    color: "blue",
    fontSize: "3rem",
  };

  const centerLoader = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return !loading ? (
    <div>
      <h1 style={h1Style}>Your threads</h1>
      {!loading && <ThreadsList threads={userThreads} />}
    </div>
  ) : (
    <div style={centerLoader}>
      <Loader type="BallTriangle" color="blue" />
    </div>
  );
};

export default UserThreads;
