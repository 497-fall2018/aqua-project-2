const graphql = require('graphql');
const db = require('../../db/db');
// react, express, graphQL, postgreSQL
const {
  buildSchema,
  GraphQLList,
  GraphQLInt,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = graphql;
const _ = require('lodash');
// const User = require('../../models/user');
// const Request = require('../../models/request');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    profile_pic: { type: GraphQLString },
  }),
});

const RequestType = new GraphQLObjectType({
  name: 'Request',
  fields: () => ({
    request_id: { type: GraphQLID },
    location_start: { type: GraphQLString },
    location_end: { type: GraphQLString },
    time_departure: { type: GraphQLString },
    id: { type: GraphQLID },
    // destination: { type: GraphQLString },
    time_buffer: { type: GraphQLInt },
    date: { type: GraphQLString },
  }),
});

const MatchType = new GraphQLObjectType({
  name: 'Match',
  fields: () => ({
    match_id: { type: GraphQLID },
    user_id: { type: GraphQLID },
    request_id: { type: GraphQLID },
    // match_user returns a UserType with parent value of id which is = to the match_user_id return from the query
    match_user: {
      type: UserType,
      async resolve(parent) {
        console.log(parent);
        const { match_user_id } = parent;
        const res = await db.query(`SELECT * from users WHERE id = ${match_user_id}`);
        return res.rows[0];
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        console.log(`userId: ${args.id}`);
        const res = await db.query(`SELECT * FROM users WHERE id = ${args.id}`);
        return res.rows[0];
      },
    },
    requests: {
      type: new GraphQLList(RequestType),
      // type: RequestType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const res = await db.query(`SELECT * FROM requests WHERE id = ${args.id}`);
        return res.rows;
      },
    },
    matches: {
      type: new GraphQLList(MatchType),
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const { id } = args;
        const res = await db.query(
          `SELECT * FROM matches INNER JOIN users ON matches.user_id = users.id WHERE user_id = ${id}`
        );
        return res.rows;
      },
    },
    getMatches: {
      type: new GraphQLList(RequestType),
      args: {
        date: { type: GraphQLString },
        time_buffer: { type: GraphQLInt },
        location_start: { type: GraphQLString },
        location_end: { type: GraphQLString },
        time_departure: { type: GraphQLString },
      },
      async resolve(parent, args) {
        console.log(args);
        const { date, location_start, location_end, time_departure } = args;
        const res = await db.query(
          `SELECT * from requests WHERE date='${date}' AND time_departure='${time_departure}' AND location_start='${location_start}' AND location_end='${location_end}'`
        );
        console.log(res.rows);
        return res.rows.length > 0 ? res.rows : [];
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // add user to the database with first/last name and email
    // addUser: {
    //   type: UserType,
    //   args: {
    //     firstName: { type: GraphQLString },
    //     lastName: { type: GraphQLString },
    //     email: { type: GraphQLString },
    //   },
    //   resolve(parent, args) {
    //     const user = new User({
    //       firstName: args.firstName,
    //       lastName: args.lastName,
    //       email: args.email,
    //     });

    //     return user.save();
    //   },
    // },
    addRequest: {
      type: RequestType,
      args: {
        date: { type: GraphQLString },
        time_buffer: { type: GraphQLInt },
        location_start: { type: GraphQLString },
        location_end: { type: GraphQLString },
        time_departure: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const id = await db.query('SELECT max(request_id) FROM requests');
        const res = await db.query(
          `INSERT INTO requests VALUES (${id.rows[0].max + 1}, '${args.location_start}', '${
            args.location_end
          }', '${args.time_departure}', '${args.time_buffer}', 1, '${args.date}')`,
          err => {
            if (err) console.log(err);
          }
        );
        return res.rows[0];
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
