import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../redux/user";
import Loader from "react-loader-spinner";
import UserProfile from "../components/UserProfile";

const UserPage = (props) => {
  const dispatch = useDispatch();
  const profilState = useSelector((state) => state.profilReducer);
  const adminState = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(user.fetchProfil(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const centerLoader = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return profilState.loading ? (
    <div style={centerLoader}>
      <Loader type="BallTriangle" color="blue" />
    </div>
  ) : (
    <UserProfile user={profilState.user} isAdmin={adminState.user.isAdmin} />
  );
};

export default UserPage;
