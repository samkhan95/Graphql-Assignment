const {ApolloServer} = require("apollo-server");
const {typeDefs} = require("./schema");
const {Query} = require("./resolvers/Query");
const {Mutation} = require("./resolvers/Mutation");
const {Tweet} = require("./resolvers/Tweet");
const {db} = require("./db");


const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Tweet,
        Mutation,
    },
    context: {
        db
    },

});

server.listen().then(({url}) => {
    console.log("server is ready at"+url);
})