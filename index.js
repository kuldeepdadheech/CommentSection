let likeCounter=0;
const commentDisplay = document.getElementById("displayComments");


//Adding event listener to add button for calling addComment function:
document.getElementById("Add").addEventListener("click",(e)=>{
    addComment(e);
})


//Add Comment function for adding comments:
function addComment(){
    let comment = document.getElementById("comment");
    let newcontainer=document.createElement("div");
    newcontainer.id = "new-container";
    let newcomment = comment;
    newcomment.id = "new-comment";
    let container = document.getElementById("container");
    let replyButton = document.createElement("button");
    replyButton.innerHTML="Reply";
    replyButton.addEventListener("click",()=>{
        addReply(newcontainer);
    });
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML="Delete";
    deleteButton.addEventListener("click",()=>{
        newcontainer.remove();
    });
    let likeButton = document.createElement("button");
    likeButton.innerHTML="Like";
    likeButton.addEventListener("click",()=>{
        likeCounter=addLike();
        likeButton.innerHTML="Likes. "+likeCounter ;
    });
    let buttonContainer = document.createElement("div");
    buttonContainer.id = "button-container"
    buttonContainer.appendChild(replyButton);
    buttonContainer.appendChild(deleteButton);
    buttonContainer.appendChild(likeButton);
    newcontainer.appendChild(newcomment);
    newcontainer.appendChild(buttonContainer);
    container.appendChild(newcontainer);
}
function addLike(){
        likeCounter++;
        return likeCounter;
}
function addReply(newcontainer){
    let newreplycontainer = document.createElement("div");
    let newreply = document.createElement("input");
    newreply.type="text";
    newreply.placeholder="enter your reply";
    let addReplyButton=document.createElement("button");
    addReplyButton.innerHTML="Add Reply"
    addReplyButton.addEventListener("click",()=>{
        addComment();
    });
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML="Delete";
    deleteButton.addEventListener("click",()=>{
        newreplycontainer.remove();
    });
    let likeButton = document.createElement("button");
    likeButton.innerHTML="Like";
    likeButton.addEventListener("click",()=>{
        likeCounter=addLike();
        likeButton.innerHTML="Likes. "+likeCounter ;
    });
    newreplycontainer.appendChild(newreply);
    newreplycontainer.appendChild(addReplyButton);
    newreplycontainer.appendChild(likeButton);
    newreplycontainer.appendChild(deleteButton);
    newcontainer.appendChild(newreplycontainer);
    
}