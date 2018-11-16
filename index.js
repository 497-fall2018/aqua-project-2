const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const url = require('url');
const graphqlHTTP = require('express-graphql');
const crypto = require('crypto');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const expressValidator = require('express-validator');
const session = require('express-session');

const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const db = require('./db/db');

// const schema = buildSchema(`
//     type Query {
//         users: [User!]!
//         user(id: ID!): User
//         matches: [User!]!
//     }

//     type Mutation {
//         addUser(email: String!, name: String): User
//     }

//     type User {
//         id: ID!
//         email: String!
//         name: String
//         avatarUrl: String
//         phone: String
//     }

// `)

// const rootValue = {
//     users: () => {database.users},
//     user: args => database.users.find(user => user.id === args.id),
//     matches: () => {return database.matches},
//     addUser: ({email, name}) => {
//         const user = {
//             id: crypto.randomBytes(10).toString('hex'),
//             email,
//             name
//         }

//         database.users.push(user)
//         return user;
//     }
// }

// graphql(
//     schema,
//     `{
//         users {
//             id
//             name
//             email
//         }
//     }`,
//     rootValue
// ).then(res => console.dir(res, { depth: null }))
// .catch(console.error)

// so the server can handle POST requests
app.use(cors());

const schema = require('./graphql/Schema/Schema');

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const PORT = process.env.PORT || 8080;
const router = express.Router();
// app.get('/', function(req, res){
//     console.log('reached /')
// })

/* ------- registration/login/authentication -------- */

app.use(expressValidator());
app.use(passport.initialize());
app.use(passport.session());

app.post('/register', (req, res) => {
  console.log(req.body);

  res.sendStatus(200);
});

function authenticationMiddleware() {
  return (req, res, next) => {
    console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);

    if (req.isAuthenticated()) return next();

    res.status(404);
    console.log('not authenticated!');

    // need to redirect to login
  };
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fareshare218@gmail.com',
    pass: 'EECS497/',
  },
});

router.get('/', (req, res) => {
  console.log('API has launched.');
  res.json({ message: 'API Base Endpoint.' });
});

app.get('/notify/:userId/:matchId', (req, res) => {
  const recipient = req.params.userId;
  const match = req.params.matchId;
  const recipEmail = `${recipient}@u.northwestern.edu`;
  const mailOptions = {
    from: 'fareshare218@gmail.com',
    to: recipEmail,
    subject: 'FareShare: New Match!',
    html: `<p> Congrats, you just matched with ${match}</p><p>Check the app for more details</p>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
  res.send(`notified ${recipient}`);
});
app.use('/api', router);
app.listen(PORT);

console.log(` 🚀 : Application listening on ${PORT}`);
