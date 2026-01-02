Day-1

-- Installing npm react-router-dom

-- Installing npm moment => this is used for JS data & time library  that makes it easy for YOUTUBE like comments time , upload time , etc

-- installling react-redux toolkit for managing sidebar 

Day-2 

-- very important is to clear the cache
rm -rf node_modules/.vite
rm -rf node_modules package-lock.json


Day-3 

-- Using searchParam, when you click on a YT video you see something like this "/watch?v=KbMrf3nSj00"
this is searchParam , where v -> key and KbMrf3nSj00 -> value.

Day-4

-- building search feature in YT application, where we first got the YT_search_API and then now putting it in constant.
-- for every key press we are making an API call but if the key press < 200ms then reject that particualr api call.

-- Using redux as cache while searching on search, if I delete the letter then It should make the API 

-- Using a spread operator which is {...a, ...b}, so "..." this is called spread operator. In this example ...b would overwrite the value of a.
so for e.g. {...action.payload, ...state} here state will overwrite the value of ...action.payload which is nothing but the new results and "state" is previously saved results.

Little theory about Slice (redux) =>  
1. createSlice creates two Things
            ├── actions   (what happened?)
            └── reducer   (how state changes?)

cacheResults: (state, action) => redux converts this into searchSlice.action {cacheResults: function(actionPayload)}

Things to know about { () => } and normal { } we use arrow function when we are passing an argument inside it and we use normal { } when we want 