# multi-webpack

This project demonstrates a webpack setup that aims to be both useful and easy to maintain by:
- having just one webpack config,
- providing configurations for testing, production and debug environments,
- splitting up the config into pieces,
- using the env flag to setup the proper config using those pieces.

## Testing
Testig is done using mocha-loader and dynamic module loading in 'tests.js'