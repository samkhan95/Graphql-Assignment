exports.Query = {
        Tweet: (parent, args, {db}) =>{
            const {id} = args;
            return db.Tweets.find((Tweet)=> Tweet.id === id);
        },
        Tweets: (parent, args, {db}) => {
            return db.Tweets;
        },
        TweetsMeta: (parent, args, {db}) => db.metas,
        User: (parent, args, {db}) => {
            const {id} = args;
            return db.users.find((user) => user.id === id);
        },
        Notifications:(parent, args, {db}) => {
            const {limit} = args;
            return db.notifications.slice(0,limit);
        },
        NotificationsMeta: (parent, args, {db}) => {
            return db.metas;
            
        },
};