module.exports = {
    randomEmail: function (userContext, events, done) {
      // Create a unique email using a random number and current timestamp to ensure uniqueness
      const randomNumber = Math.floor(Math.random() * 100000);
      const email = `user${randomNumber}-${Date.now()}@example.com`;
      
      // Save it to userContext variable
      userContext.vars.randomEmail = email;
      
      // Log the generated email for debugging
      console.log("Generated email: ", email);
      
      // Return done to proceed
      return done();
    }
  };