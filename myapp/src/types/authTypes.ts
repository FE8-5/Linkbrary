export interface AuthRes {
  accessToken: string;
}

export interface UserRes {
  id: number;
  name: string;
  email: string;
  imageSource: string;
  createdAt: string;
}

export interface checkDuplicateEmailRes {
  isUsableEmail: boolean;
}
