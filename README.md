# Blogging_Website-_Assessment

       This Blog site where authors came sign hisself and login ,
       
      after that he can publish  his post(photo) with tags discription and orther author show his post 
      
      and read discription and pass comment on his post ,

      and author only can manipulate his post what ever he do change to post can do his authroze to do delete.


  In this project i used same depedency
  
              express:-this one of them most usefull it is node js web application framework that provides a robust set of features for web and mobile applications. 
      It offers APIs with HTTP utility meth.
      
        multer:-multer is depencey use for image uploading,

        bcrypt:-this is depency most use full with the help of you hash any thing easly

               just type:- npm i bcrypt

       

 Models:-
 
       Author
 
          {

             Name: { mandatory },
 
             Email: { mandatory },
 
            Password: { mandatory },
 
          }
          
 Author model:-
                  create two api one for create and loging
                  
                 this is end point create : - localhost:3000/user/signup
               
                 this is end point create : - localhost:3000/user/login
                 
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
     


● instructions on how to run the project locally.

           -first clone this repo-git clone <repo-link> enter
           
           -then type enter file(repo-file) cd Blogging_Website_Assessment
           
           -then type- npm i 
           
            - for running you type->node index.js or npx nodemon index.js 
 

 


