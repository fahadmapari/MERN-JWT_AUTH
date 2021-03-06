import { useState, useEffect } from "react";
import axios from "axios";

const PrivateScreen = ({ history }) => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        header: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("authToken"),
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized, Please login.");
      }
    };

    fetchPrivateData();
  }, [history]);

  return error ? (
    <span className="error-message">Hi..{error}</span>
  ) : (
    <>
      <h1>Hi</h1>
      <div style={{ background: "green", color: "white" }}>{privateData}</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default PrivateScreen;
