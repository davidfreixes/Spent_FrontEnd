import SpentApi from "./SpentApi";

export const apiRegister = async (
  email: string,
  password: string,
  name: string,
  username: string
) => {
  let token = "";
  try {
    await SpentApi.post("/register", {
      email: email,
      password: password,
      name: name,
      username: username,
    }).then((response) => {
      token = response.data.accessToken;
      localStorage.setItem("username", response.data.username);
    });

    return token;
  } catch (error) {
    console.error("Error during register ocurred: ", error);
    return "";
  }
};

export const apiLogin = async (
  email: string,
  password: string
): Promise<string | void> => {
  let token = "";
  await SpentApi.post("/login", { email: email, password: password }).then(
    (response) => {
      token = response.data.accessToken;
      localStorage.setItem("username", response.data.username);
    },
    (error) => {
      console.error("Error during login occurred: ", error);
      if (error.response && error.response.data == "User account is not verified")
        token = error.response.data;
        return token;
    }
  );
  return token;
};
