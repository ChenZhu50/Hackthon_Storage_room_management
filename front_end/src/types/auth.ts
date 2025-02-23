interface LoginForm {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    username: string;
  };
}

export type { LoginForm, LoginResponse }; 