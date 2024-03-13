export interface User {
  createdAt: string;
  updatedAt: string;
  _id: string;
  username: string;
  phoneNumber: string;
  password: string;
}

export interface UserData {
  username: string;
  phoneNumber: string;
  password: string;
  confirm?: string;
}
