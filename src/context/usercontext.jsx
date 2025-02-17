import { createContext, useState } from "react";
import supabase from "../utils/supabase";
const UserContext = createContext();

function UserProviderWrapper(props) {
  const [user, setUser] = useState(null);
  const [isUserloggedIn, setIsUserLoggedIn] = useState(false);
  const [authError, setAuthError] = useState(null);

  // TODO 1: Que no se pueda registrar un usuario con un email que ya existe
  // TODO 2: Que no se pueda iniciar sesión con un email que no existe
  // TODO 3: Guardar usuario despues de log in, sign up
  // TODO 4: Guardar nombre de usuario
  /**
   * Signs up a new user using Supabase authentication.
   *
   * @param {Object} u - The user object containing email and password.
   * @param {string} u.email - The email address of the user.
   * @param {string} u.password - The password for the user.
   * @returns {Promise<void>} - A promise that resolves when the sign-up process is complete.
   * @throws {Error} - Throws an error if the sign-up process fails.
   */
  const signUp = async (user) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
      });

      if (error) {
        setAuthError(getErrors(error));
        return;
      }

      setAuthError(null);

      const { user: createdUser } = data;
      if (createdUser) {
        const { error: profileError } = await supabase.from("profiles").insert([
          {
            id: createdUser.id,
            name: user.name,
          },
        ]);
        if (profileError) {
          setAuthError(getErrors(profileError));
          return;
        }
      }

      console.log("User signed up successfully:", data);
      await getUser();
    } catch (e) {
      setAuthError("An error occurred" + e.message);
    }
  };

  const logIn = async (user) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      });
      if (error) {
        setAuthError(getErrors(error));
        return;
      }

      setAuthError(null);

      console.log("User signed up successfully:", data);
      await getUser();
    } catch (e) {
      setAuthError("An error occurred" + e.message);
    }
  };

  const getUser = async () => {
    try {
      const { data: userData, error: userError } =
        await supabase.auth.getUser();

      if (userError) throw userError;
      const user = userData.user;

      if (user) {
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("name")
          .eq("id", user.id)
          .single();

        if (profileError) throw profileError;

        setUser({ ...user, name: profileData.name });
        setIsUserLoggedIn(true);
      }
    } catch (e) {
      setAuthError("An error occurred: " + (e.message || "Unknown error"));
    }
  };

  const getErrors = (error) => {
    switch (error.code) {
      case "user_already_exists":
        return "User already exists";
      case "invalid_credentials":
        return "Invalid credentials";
      case "weak_password":
        return "Weak password";
      default:
        return "An error occurred";
    }
  };

  // ERRORS:
  // user_already_exists;
  // invalid_credentials;
  //weak_password

  return (
    <UserContext.Provider
      value={{
        signUp,
        logIn,
        getUser,
        user,
        authError,
        setAuthError,
        isUserloggedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
