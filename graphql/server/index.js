const express = require('express');
const Sequelize = require('sequelize');
const { graphqlHTTP } = require('express-graphql');
const { DataTypes } = require('sequelize');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = require('graphql');

const app = express();
const connection = new Sequelize('graphql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
const movies = connection.define(
  'films',
  {
    name: { type: DataTypes.STRING },
    year: { type: DataTypes.NUMBER },
    duration: { type: DataTypes.NUMBER },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  { timestamps: false }
);

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    name: { type: GraphQLString },
    year: { type: GraphQLInt },
    duration: { type: GraphQLInt },
    id: { type: GraphQLInt },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return movies.findOne({ where: { id: args.id } });
      },
    },
  },
});

const GQLSchema = new GraphQLSchema({
  query: Query,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: GQLSchema,
    graphiql: true,
  })
);

async function test() {
  const films = await movies.findAll();
  films.forEach((element) => {
    console.log(element);
  });
}
const PORT = 4000;
app.listen(PORT, () => {
  test();
});
