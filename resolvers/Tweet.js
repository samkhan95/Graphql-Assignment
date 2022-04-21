exports.Tweet = {
    Stats: (parent,args,{db}) => {
        const {id} = parent;
        return db.stats.find((stat) => stat.tweetId === id );
    },
    Author: (parent, args, {db}) => {
        const {id} = parent;
        return db.users.find((user) => user.tweetId === id);
    },
};