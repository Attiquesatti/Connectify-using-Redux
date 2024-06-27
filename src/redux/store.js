import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slice/posts"
import photosReducer from "./slice/photos"
import commentReducer from "./slice/comments"
import dataReducer from "./slice/dataslice"
import imagesReducer from "./slice/unsplash"
import addcommentsReducer from "./slice/addcomments";

const Store = configureStore({
    reducer : {
        posts : postsReducer,
        photos : photosReducer,
        comments : commentReducer,
        data : dataReducer,
        images : imagesReducer,
        addcomments : addcommentsReducer,
    }
})

export default Store