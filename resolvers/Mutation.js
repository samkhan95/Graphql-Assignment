const {v4: uuid} = require("uuid");

exports.Mutation = {
    createTweet: (parent, args, {db}) => {
        const {body} = args;
        const newTweet = {
            id: uuid(),
            body
        }
        db.Tweets.push(newTweet);
        return newTweet;
    },
    deleteTweet: (parent, {id}, {db}) => {
        const deletedTweet = db.Tweets.find(tweet => tweet.id === id);
        db.Tweets = db.Tweets.filter((tweet) => tweet.id === id );
        return deletedTweet;
    }

};