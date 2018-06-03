function skip_Execution_In_Node(){
  const context = require.context(
    "./src",      //"mocha-loader!./", // Process through mocha-loader
    true,        // Skip recursive processing
    /\.test.js$/  // Pick only files ending with .test.js
  );

  // Execute each test suite
  context.keys().forEach(context);
}

skip_Execution_In_Node();