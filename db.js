const Tweets = [
    {
        id: "1234asdd",
        body: "Yesterday's match was really great",
        date: "14-12-2010",
    },
    {
     id: "1234as23dd",
     body: "Yesterday's match was the worst",
     date: "15-11-2013",
     },
 ];
 
 const users = [
 
     {
         id: "12wssddf",
         username: "chand",
         first_name: "shoail",
         last_name: "khan",
         full_name: "sohail khan",
         avatar_url: "https://www.youtube.com/watch?v=qux4-yWeZvo",
         tweetId: "1234asdd"
     },
     {
         id: "982wscxdf",
         username: "pasha",
         first_name: "shammu",
         last_name: "khan",
         full_name: "shammu khan",
         avatar_url: "https://www.youtube.com",
         tweetId: "1234as23dd"
     }
 ];
 
 const stats =[
     {
         views: 23,
         likes: 12,
         responses: 122,
         retweets: 1209,
         tweetId: "1234asdd"
     },
     {
         views: 43,
         likes: 52,
         responses: 134,
         retweets: 6296,
         tweetId: "1234as23dd"
     }
 
 ];
 
 
 const notifications = [
     {
         id: "0928u",
         date: "23-12-1903",
         type: "news"
     },
     {
         id: "3428u",
         date: "4-12-2113",
         type: "anime"
     }
 
 ];
 
 const metas = 
     {
         count: 13
     }
     
 ;

 exports.db = {
    Tweets,
    users,
    stats,
    notifications,
    metas,

 };
 