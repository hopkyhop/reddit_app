import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

export function usePostComments(subreddit: string, postId: string) {
    const [commentsData, setCommentsData] = useState<any[]>([])

    useEffect(() => {
        axios.get(`http://api.reddit.com/r/${subreddit}/comments/${postId}`, {
            //headers: { Authorization: `Bearer ${token}` }
            params: {
                limit: 10,
                depth: 1,
                sr_detail: true,
                showmore: false,
            }
        })
            .then ((resp) => {
                const commentsData = resp.data[1].data.children
                setCommentsData(commentsData)
            })
            .catch(console.log)
    }, [])
    return [commentsData]
}