import axiosInstance from "./axiosInstance";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

const loginPayload = {
  payload: {
    access_token: "test_access_token",
    token_type: "bearer",
  },
};

// Mock login endpoint
mock.onPost("/auth/login").reply((config) => {
  const { email, password } = JSON.parse(config.data);
  if (email === "testuser" && password === "password") {
    return [200, loginPayload];
  }
  return [401, { detail: "Invalid credentials" }];
});

// Mock signup endpoint
mock.onPost("/auth/signup").reply((config) => {
  const userData = JSON.parse(config.data);
  return [201, { message: "User created successfully", user: userData }];
});

// Mock logout endpoint
mock.onPost("/auth/logout").reply(200, { message: "Logged out successfully" });

export default mock;
