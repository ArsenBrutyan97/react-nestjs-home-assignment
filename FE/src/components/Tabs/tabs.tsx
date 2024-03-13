import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch } from "react-redux";
import UserForm from "../UserForm/userForm";
import UserData from "../UserData/UserData";
import { getAllUsers } from "../../store/actions";
import axiosInstance from "../../services/services";

import styles from "./tabs.module.scss";

const UserTabs: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axiosInstance
      .get<Array<string>>("/users")
      .then((response) => {
        dispatch(getAllUsers(response.data));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [dispatch]);

  return (
    <div className={styles.mainPage}>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="FORM" key="1">
          <UserForm />
        </Tabs.TabPane>
        <Tabs.TabPane tab="USER" key="2">
          <UserData />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default UserTabs;
