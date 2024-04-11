import type { ForumPost } from "$lib/bindings/ForumPost";
export async function fetchPosts() {
    try {
        const response = await fetch("http://127.0.0.1:5000/posts", {
            method : 'GET'
        });
        const data = await response.json();
        return data.map(item => {
            return {
                title: item.title,
                content: item.body,
                id: item.id,
                author: item.author,
                created: new Date().toISOString(), // replace with actual creation date if available
            } as ForumPost;
        });
        
    }
    catch (error) {
        console.error(error);
    }
}

export async function fetchComments() {
    try {
        let postID = "ID1"
        const response = await fetch(`http://127.0.0.1:5000/comments/${postID}`, {
            method : 'GET'
        });
        const data = await response.json();
        console.log(data);

    }
    catch (error) {
        console.error(error);
    }
}