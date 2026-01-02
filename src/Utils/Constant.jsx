export const GoogleAPIkey="AIzaSyDqyDBjcWV2Gty_Kce8Vaw_XGb3zhUrMjU"

export const YOUTUBE_SEARCH_API=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`

export const YOUTUBE_SUGGESTION_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

const YoutubeVideoAPI =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${GoogleAPIkey}`;

export default YoutubeVideoAPI