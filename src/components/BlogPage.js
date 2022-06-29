import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "./Api";
import { FaRegEdit } from "react-icons/fa";

const BlogPage = () => {
  const [displayBlogs, setDisplayBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async() => {
      const {data} = await axios.get(API_URL);
      setDisplayBlogs(data.getBlogPost.docs);;
    }
    getBlogs();
  }, [])
  
  console.log(displayBlogs);

  const handleDelete = async (id) => {
    try {
      await axios.delete(API_URL + "/" + id);
    } catch {
      console.log("Delete Error");
    }
  };

  return (
    <div>
      {displayBlogs.map((blogPost) => {
        return (
          <div className="single-blog" key={blogPost.id}>
            <p className="blog-author">{"Written By " + blogPost?.author}</p>
            <p className="blog-title">{blogPost?.title}</p>
            <p className="blog-content">{blogPost?.content}</p>

            <div className="btn-ctn">
              <FaRegEdit
                className="edit-icon"
                style={{ fontSize: 50 }}
                value="Delete"
              />
              <button
                className="delete-btn"
                onClick={() => handleDelete(blogPost._id)}
              >
                Delete Post
              </button>
            </div>
          </div>
        );
      })}
{/* 
      <div  className="loading-text">
         {loading ? <div className="text-center">Loading data ...</div> : ""}
         {noData ? <div className="text-center">End of Data ...</div> : ""}
      </div> */}
      
    </div>
  );
};

export default BlogPage;
