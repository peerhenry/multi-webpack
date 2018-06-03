function skip_Execution_In_Node(){
  if (module.hot) {
    const context = require.context(
      ".",         //"mocha-loader!./", // Process through mocha-loader
      false,        // Skip recursive processing
      /\.test.js$/  // Pick only files ending with .test.js
    );
  
    // Execute each test suite
    context.keys().forEach(context);
  }
}

skip_Execution_In_Node();