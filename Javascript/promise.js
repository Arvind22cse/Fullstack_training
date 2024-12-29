
function iscomment(getcomment) {
    const expectedcomment = false;
    return getcomment === expectedcomment;
}
async function comment() {
    const c = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (iscomment(c)) {
                resolve("Comment posted successfully");
            } else {
                reject("Failed to post comment");
            }
        }, 1000);
    });
}

function isshare(getshare) {
    const expectedShare = false;
    return getshare === expectedShare;
}

async function share() {
    const sharePost = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isshare(sharePost)) {
                resolve("The post is shared successfully");
            } else {
                reject("The post is not shared");
            }
        }, 1000);
    });
}

function islike(liked) {
    const expectedLike = true;
    return liked === expectedLike;
}

async function LikePost() {
    const like = false; // Simulate failure
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (islike(like)) {
                resolve("The post is liked successfully");
            } else {
                reject("The post is not liked");
            }
        }, 1000);
    });
}
function iscreatepost(getpost){
    const expectedpost=false;
    return expectedpost==getpost;
}

async function createpost() {
    const p=true;
    const post = new Promise((resolve, reject) => {
        setTimeout(() => {
        if (iscreatepost(p)) {
            resolve("Post created successfully");
        } else {
            reject("Failed to create post");
        }
    }, 1000);
    });

    const results = await Promise.allSettled([
        post,
        comment(),
        LikePost(),
        share()
    ]);

    results.forEach((result) => {
        if (result.status === "fulfilled") {
            console.log(result.value);
        } else {
            console.log(result.reason);
        }
    });
}

createpost();
