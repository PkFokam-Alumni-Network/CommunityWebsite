import axiosInstance from "./axiosInstance";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

// Mock login endpoint
mock.onPost("/auth/login").reply((config) => {
  const { username, password } = JSON.parse(config.data);
  if (username === "testuser" && password === "password") {
    return [
      200,
      { token: "fake-jwt-token", user: { username: "testuser", role: "user" } },
    ];
  }
  return [401, { message: "Invalid credentials" }];
});

// Mock signup endpoint
mock.onPost("/auth/signup").reply((config) => {
  const userData = JSON.parse(config.data);
  return [201, { message: "User created successfully", user: userData }];
});

// Mock logout endpoint
mock.onPost("/auth/logout").reply(200, { message: "Logged out successfully" });

export default mock;
