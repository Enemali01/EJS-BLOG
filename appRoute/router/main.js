import {PostModel} from '../../models/Posts.js';
import { Router } from "express";

const router = Router();


router.get('', async(req, res) => {
   const locals = {
    title: "NodeJs Blog",
    description: "Simple blog created with NodeJs, Express and MongoDb"
   }
   try{
    const data = await PostModel.find();
    res.render('index', {locals, data});
   }catch(error){
    console.log(error);
   }

});

router.get('', async(req, res) => {
  try{
    const locals = {
      title: "NodeJs Blog",
      description: "Simple blog created with NodeJs, Express and MongoDb"
     }
   let perPage = 5;
   let page = req.query.page || 1;
   
   const data = await Post.aggregate([{$sort: {createdAt: -1}}])
   .skip(perPage * page - perPage)
   .limit(perPage)
   .exec();
   
   const count = await Post.count();
   const nextPage = parseInt(page) + 1;
   const hasNextPage = nextPage <= Math.ceil(count/perPage);

  res.render('index', {
    locals, 
    data,
    current: page,
    nextPage: hasNextPage ? nextPage : null
  });

  }catch(error){
   console.log(error);
  }

});



router.get('/post/:id', async(req, res) => {  
  
  const locals = {
    title: "NodeJs Blog",
    description: "Simple blog created with NodeJs, Express and MongoDb"
   }
  
  try{
    let  slug = req.params.id;
    const data = await Post.findById({_id: slug});
   res.render('/post', {locals, data});
  }catch(error){
   console.log(error);
  }

 
});




router.get('/about', (req, res) => {
  res.render('about');
});
router.get('/contact', (req, res) => {
  res.render('contact');
});



// function insertPostData(){
//   PostModel.insertMany([
//     {
//       title: 'Building a Blog',
//       body: 'This is a demo blog text'
//     },
//     {
//       title: 'Building a Blog',
//       body: 'This is a demo blog test'
//     },
//     {
//       title: 'Building a Blog with express Js and NodeJs',
//       body: 'This is a demo blog tessst'
//     },
//   ])
// }

// insertPostData();

export default router;
