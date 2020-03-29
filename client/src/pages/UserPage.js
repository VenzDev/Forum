import React, { useEffect } from "react";
import s from "./userpage.module.scss";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { user } from "../redux/user";
import Loader from "react-loader-spinner";

const UserPage = props => {
  const dispatch = useDispatch();
  const profilState = useSelector(state => state.profilReducer);

  useEffect(() => {
    dispatch(user.fetchProfil(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const centerLoader = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

  const { name, surname, createdAt } = profilState.user;
  const data = new Date(createdAt);

  return profilState.loading ? (
    <div style={centerLoader}>
      <Loader type="BallTriangle" color="blue" />
    </div>
  ) : (
    <div className={s.container}>
      <div className={s.circle}>
        <FaUser className={s.userLogo} />
      </div>
      <div className={s.userInfo}>
        <p>{`Name: ${name}`}</p>
        <p>{`Surname: ${surname}`}</p>
        <p>{`Member from: ${data.toLocaleString()}`}</p>
      </div>
    </div>
  );
};

export default UserPage;
