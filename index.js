import {blogPosts} from './data.js';



function renderBlogPosts() {

let blogPost =''

    blogPosts.forEach(function(post){

        blogPost += `<div class="blog-post">

                        <img class="post-img" src="${post.img}">

                       <div class="post-text">

                                ${post.credit}
                            
                                <h4 class="post-date">${post.date}</h4>
                                <h1 class="post-title">${post.title}</h1>
                                <p class="post-intro">${post.subtext}</p>
                        </div>
                     </div>`

    })

   document.getElementById("post-area").innerHTML += blogPost

}

renderBlogPosts()


