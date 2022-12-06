/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    testMatch: ['**/problems/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  };
};
