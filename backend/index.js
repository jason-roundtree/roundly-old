const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();

app.use(helmet());
app.use(bodyParser());
app.use(cors());
app.use(morgan('common'));

app.get('/', (req, res) => {
    res.send('Hello world')
})

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://dev-4o-78p3e.auth0.com/.well-known/jwks.json`
    }),
    audience: 'cWopJ04bVRgF08j3KpH2e8cCRJYkDJcc',
    issuer: `https://dev-4o-78p3e.auth0.com/`,
    algorithms: ['RS256']
});

app.listen(8081, () => {
    console.log('listening on port 8081');
});