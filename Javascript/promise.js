//locationfinder
async function LikePost(){
    return new Promise((like)=>{
        like("like the post successfully")
    })
}
async function comment(){
    return new Promise((commentpost)=>{
        commentpost("Comment posted successfully")
    })
}
async function createpost() {
    var post=new Promise((cpost)=>{
        cpost("Post Created successfully")
    })
    var[posts,comments,like]=await Promise.all([post,comment,LikePost()])
    console.log(posts);
    console.log(comments);
    console.log(like);
    
    
    
}
createpost()