import React from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import { User } from "../../generalTypes/user";

import styles from "./UserData.module.scss";

const UserData: React.FC = () => {
  const users: User[] = useSelector((state: any) => state?.users?.users);

  return (
    <div className={styles.users}>
      {users?.length > 0 ? (
        <List
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(item: User) => (
            <List.Item>
              <List.Item.Meta
                className={styles.user}
                title={'User name: ' + item.username}
                description={'Phone number: ' + item.phoneNumber}
              />
            </List.Item>
          )}
        />
      ) : (
        <p>No user data yet.</p>
      )}
    </div>
  );
};

export default UserData;
