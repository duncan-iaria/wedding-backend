this is required for configuring dotenv BEFORE it's used (in the package.json scripts):

`node --require dotenv/config build/server.js`
