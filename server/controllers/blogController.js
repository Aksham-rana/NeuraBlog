import fs from 'fs'
import imageKit from '../configs/imageKit.js';
import Blog from '../models/blogs.js';
import Comment from '../models/Comment.js';

export const addBlog = async (req, res)=>{
    try{

        const blogData = req.body.blog ? JSON.parse(req.body.blog) : req.body;

        const { title, subTitle, description, category, isPublished } = blogData;

        const imageFile = req.file;

        if(!title || !description || !category || !imageFile){
            return res.json({
                success:false,
                message:'Missing required fields'
            })
        }

        const fileBuffer = fs.readFileSync(imageFile.path)

        const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/blogs'
        })

        const optimizedImageUrl = imageKit.url({
            path: response.filePath,
            transformation: [
                {quality: 'auto'},
                {format: 'webp'},
                {width: '1280'}
            ]
        })

        const image  = optimizedImageUrl;

        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image,
            isPublished
        })

        res.json({
            success: true,
            message: 'Blog added successfully'
        })

    }catch(error){

       console.log("BLOG CONTROLLER ERROR:");
    console.log(error);

    res.json({
        success: false,
        message: error.message
    })
    }
}


export const getAllBlogs = async (req, res) =>{
    try{
        const blogs = await Blog.find({isPublished: true})
        res.json({success:true, blogs})
    }catch(error){
        res.json({success: false, message: error.message})
    }
}

export const getBlogById = async (req, res)=>{
    try{
        const{blogId} = req.params;
        const blog = await Blog.findById(blogId)
        if(!blog){
            return res.json({success: false, message: "Blog not found"})
        }
        res.json({success:true, blog})
    }catch(error){
        res.json({success: false, message: error.message})
    }
}

export const deleteBlogById = async (req, res)=>{
    try{
        const{id} = req.body;
        await Blog.findByIdAndDelete(id);
        res.json({success:true, message: 'Blog deleted successfully'})
    }catch(error){
        res.json({success: false, message: error.message})
    }
}

export const togglePublish = async (req, res)=>{
    try{
        const {id} = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success:true, message:'Blog status updated'})
    }catch(error){
        res.json({success:false, message: error.message})
    }
}


export const addComment = async(req, res)=>{
    try{
        const{ blogId, name, content} = req.body;
        
        // Validate required fields
        if(!blogId || !name || !content) {
            return res.json({
                success: false,
                message: 'Missing required fields: blogId, name, and content'
            });
        }
        
        await Comment.create({blog: blogId, name, content});
        res.json({success: true, message:'Comment added for review'})
    }catch(error){
        res.json({success:false, message: error.message})
    }
}

export const getBlogComments = async (req, res)=>{
    try{
        const {blogId} = req.body;
        const comments = await Comment.find({blog:blogId, isApproved: true}).sort({createdAt: -1})
        res.json({success:true, comments})
    }catch(error){
        res.json({success:false, message:error.message})
    }
}