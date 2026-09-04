// Simulated user database record
const MOCK_USER = {
  id: "usr_101",
  name: "Mayank Chhipa",
  email: "mayank@example.com",
  token: "fake-jwt-token-xyz123",
};

/**
 * Simulates an API call to authenticate a user.
 * @param {Object} credentials - Contains email and password
 * @returns {Promise<Object>} Resolves with user data on success
 */
export const loginApi = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    // Simulate 1-second network latency
    setTimeout(() => {
      // Basic check for dummy credentials
      if (email && password) {
        resolve({
          success: true,
          user: {
            ...MOCK_USER,
            email: email, // Use the submitted email
          },
        });
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000);
  });
};