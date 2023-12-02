# Blogging_Website-_Assessment

 Models:-
 
 Author
 
{

 Name: { mandatory },
 
 Email: { mandatory },
 
 Password: { mandatory },
 
}

Blog Model:-
{

 title:{mandatory},
 photo:{mandatory},
 authorname:{mandatory},
 discription:{mandatory},
 tags:{array of string},
 category:{string,mandatory}
 commite:{array of string}
 
}

Author model:-
                  create two api one for create and loging
                  
                 this is end point create : - localhost:3000/user/signup
               
                 this is end point create : - localhost:3000/user/login


Blog Model:
CRUD Operations:
● Implement CRUD (Create, Read, Update, Delete) operations for the blog
post model.


● Create API endpoints for:-

● Creating a new blog post:-localhost:3000/post/createpost
● Retrieving blog posts:-localhost:3000/post/getallpost
● Retrieving a specific blog post by ID:- localhost:3000/post/getpost/postId
● Updating a blog post by ID:-localhost:3000/post/updatepost/postId
● Deleting a blog post by ID:-localhost:3000/deletepost/postId


Security:
● Hash the author's name before storing it in the database.
● Implement a simple authentication mechanism using a secret token.
Documentation

● instructions on how to run the project locally.
 -first clone this repo-git clone <repo-link> enter
 -then type enter file(repo-file) cd Blogging_Website_Assessment
 -then type- npm i 
 - for running you type->node index.js or npx nodemon index.js 
 

 


