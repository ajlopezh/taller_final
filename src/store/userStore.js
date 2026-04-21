import { create } from "zustand";
import { mockUsers } from "../mockdata/users";

const getStoredUsers = () => {
  const storedUsers = localStorage.getItem("users");
  return storedUsers ? JSON.parse(storedUsers) : mockUsers;
};

const getStoredCurrentUser = () => {
  const storedCurrentUser = localStorage.getItem("currentUser");
  return storedCurrentUser ? JSON.parse(storedCurrentUser) : null;
};

export const useUserStore = create((set, get) => ({
  users: getStoredUsers(),
  currentUser: getStoredCurrentUser(),

  registerUser: (newUser) => {
    const { users } = get();

    const existingUser = users.find(
      (user) => user.email.toLowerCase() === newUser.email.toLowerCase()
    );

    if (existingUser) {
      return {
        success: false,
        message: "Ya existe un usuario registrado con ese correo.",
      };
    }

    const createdUser = {
      id: Date.now(),
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
      phone: newUser.phone,
      city: newUser.city,
      address: newUser.address,
      role: "customer",
      isActive: true,
    };

    const updatedUsers = [...users, createdUser];

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(createdUser));

    set({
      users: updatedUsers,
      currentUser: createdUser,
    });

    return {
      success: true,
      message: "Usuario registrado correctamente.",
    };
  },

  loginUser: (email, password) => {
    const { users } = get();

    const foundUser = users.find(
      (user) =>
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: "Correo o contraseña incorrectos.",
      };
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    set({
      currentUser: foundUser,
    });

    return {
      success: true,
      message: "Inicio de sesión exitoso.",
    };
  },

  logoutUser: () => {
    localStorage.removeItem("currentUser");

    set({
      currentUser: null,
    });
  },
}));