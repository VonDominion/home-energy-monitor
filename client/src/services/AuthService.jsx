// // Simulated user database record
// const MOCK_USER = {
//   id: "usr_101",
//   name: "Mayank Chhipa",
//   email: "mayank@example.com",
//   token: "fake-jwt-token-xyz123",
// };

// /**
//  * Simulates an API call to authenticate a user.
//  * @param {Object} credentials - Contains email and password
//  * @returns {Promise<Object>} Resolves with user data on success
//  */
// export const loginApi = async ({ email, password }) => {
//   return new Promise((resolve, reject) => {
//     // Simulate 1-second network latency
//     setTimeout(() => {
//       // Basic check for dummy credentials
//       if (email && password) {
//         resolve({
//           success: true,
//           user: {
//             ...MOCK_USER,
//             email: email, // Use the submitted email
//           },
//         });
//       } else {
//         reject(new Error("Invalid email or password"));
//       }
//     }, 1000);
//   });
// };

// Retrieve the base URL from Vite environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Sends registration payload to the backend
 * @param {Object} userData - { name, email, password }
 * @returns {Promise<Object>} Decoded JSON response containing user and JWT token
 */
export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  // Manual check for 4xx and 5xx HTTP response codes
  if (!response.ok) {
    throw new Error(data.message || "Registration failed. Please try again.");
  }

  return data; // Expected shape: { user: { ... }, token: "jwt_string..." }
};

/**
 * Sends login credentials to the backend
 * @param {Object} credentials - { email, password }
 * @returns {Promise<Object>} Decoded JSON response containing user and JWT token
 */
export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Invalid email or password.");
  }

  return data; // Expected shape: { user: { ... }, token: "jwt_string..." }
};