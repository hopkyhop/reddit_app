import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export interface IPostData {
    title: string,
    url: string,
    ups: number,
    author: string,
    created: number,
    avatarSrc: string,
    id: string,
    subreddit: string,
}

export function usePostData(postId: string) {
    const [postData, setPostData] = useState<IPostData>();
    useEffect(() => {
        async function getPostInfo() {
            try {
                const { data: [item1 , item2] } = await axios.get(`http://api.reddit.com/${postId}`, {
                    params: {
                        id: postId,
                    }
                });
                setPostData(item1.data.children[0].data)
            } catch (error) {
                console.log(String(error))
            }
        }
        getPostInfo()
    }, [])
    return [postData]
}
