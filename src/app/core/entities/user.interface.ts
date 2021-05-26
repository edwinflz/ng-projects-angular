export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

export interface AuthServer {
  status: number;
  user?: User;
  token?: string;
  error?: string;
  msg?: string;
}

export interface ResponseServer {
  status: number;
  error?: string;
  msg?: string;
}
