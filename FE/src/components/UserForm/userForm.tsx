import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, notification } from "antd";
import { UserData } from "../../generalTypes/user";
import axiosInstance from "../../services/services";

import styles from "./UserForm.module.scss";

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = async (userData: UserData) => {
    try {
      const response = await axiosInstance.post("/users", userData);

      if (response.data) {
        delete userData.confirm;
        await dispatch({ type: "ADD_USER", payload: userData });

        form.resetFields();

        notification.success({
          message: "User added successfully!",
          duration: 2,
        });
      }
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error.message,
      });
    }
  };

  return (
    <Form className={styles.form} onFinish={handleSubmit} form={form}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please enter your username!",
          },
          {
            pattern: /^[A-Za-z]{1}[A-Za-z0-9]*$/,
            message: "Invalid username!",
          },
          {
            pattern: /^.{0,32}$/,
            message: "Username cannot exceed 32 characters!",
          },
        ]}
      >
        <label className={styles.input}>
          <Input
            className={styles.inputField}
            type="text"
            placeholder=" "
            maxLength={32}
          />
          <span className={styles.inputLabel}>User Name</span>
        </label>
      </Form.Item>
      <Form.Item
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: "Please enter your phone number!",
          },
          {
            pattern: /^[0-9]*$/,
            message: "Phone number should contain only digits!",
          },
          {
            pattern: /^.{10}$/,
            message: "Phone number must be 10 digits!",
          },
        ]}
      >
        <label className={styles.input}>
          <Input
            className={styles.inputField}
            placeholder=" "
            type="tel"
            maxLength={10}
          />
          <span className={styles.inputLabel}>Phone Number</span>
        </label>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please enter your password!",
          },
          {
            pattern: /^(?=.*[A-Z])(?=.*?[()#^*!&$@%_\-+=\\[\]{};':"|,.<>/?])[A-Za-z\d@$!%*#?&]{6,12}$/,
            message:
              "Password must be 6-12 characters, including at least one uppercase letter and one special character!",
          },
        ]}
      >
        <label className={styles.input}>
          <Input
            name="password"
            className={styles.inputField}
            type="text"
            placeholder=" "
            minLength={6}
            maxLength={12}
          />
          <span className={styles.inputLabel}>Password</span>
        </label>
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Passwords do not match!")
              );
            },
          }),
        ]}
      >
        <label className={styles.input}>
          <Input
            className={styles.inputField}
            type="text"
            placeholder=" "
            minLength={6}
            maxLength={12}
          />
          <span className={styles.inputLabel}>Confirm Password</span>
        </label>
      </Form.Item>

      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            SUBMIT
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default UserForm;
