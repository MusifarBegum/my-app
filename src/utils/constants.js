const GOOGLE_API_KEY =process.env.REACT_APP_GOOGLE_API_KEY
export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;
export const SEARCH_SUGGESTIONS_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const COMMENTSTHREAD = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId="
export const COMMENTSKEY ="&key="+GOOGLE_API_KEY
export const YOUTUBE_LIKEDVIDEOS_API =" https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key="+GOOGLE_API_KEY;
export const LIST_OF_BUTTONS=["All","Live","Comic Books","Resorts","Gaming","Travel","kids","Music","Dance","Sports","Watched","For you"]
export const VIDEO_ID_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="
export const VIDEO_ID_KEY ="&key="+GOOGLE_API_KEY;