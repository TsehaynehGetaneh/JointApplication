import Image from "next/image";
import React, {useState} from 'react';
// import { useAddBlogMutation } from "@/store/blog/blogs-api";
import { nanoid } from "nanoid";
import TextEditor from "./TextEditor";

const NewsForm: React.FC = () => {
  // define states
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  
  // addBlog mutation hook to post a blog
//   const [addBlog, { isLoading }] = useAddBlogMutation();

  // handle title changes
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  // handle text editor content changes
  const handleContentChange = (value: string): void => {
    setContent(value);
  };

  // handle cancel changes
  const handleCancelChange = () => {
    setTitle("");
    setContent("");
  }

  // handle form submission
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     addBlog({
//       userID: "Johnsnow1",
//       id: nanoid(), // generate a unique id from nanoid package
//       title,
//       content,
//       date : "2/2/2023",
//       author: {
//         name : "John",
//         email : "john@example.com",
//         image : "/img/blog/profile.jpg",
//         profession: "SWE",
//         userName: "John",
//       },
//       blogImage: "/img/blog/coding.jpg",
//       readTime: 4,
//       shortDescription: "short description",
//     });

//     // clear states
//     setTitle("");
//     setContent("");
    
//   };

  const canSaveChanges = Boolean(title) && Boolean(content);

  return (
    <form  className="m-5 w-screen h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col w-5/6  md:w-3/5">
          {/* Title Input Section */}
          <input
            className="w-full sm:w-3/5 border-l-2 border-blue-500 py-3 px-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:rounded-md"
            placeholder="Enter the title of the blog"
            required
            value = {title}
            onChange = {handleTitleChange}
          />

          {/* Image and File Upload Section */}
          <div className="max-w-2xl max-h-96 md:max-h-72 mt-8 bg-gray-100 rounded-lg flex items-center justify-center flex-col p-5">
            <Image
              src="/img/plan/AAU.jpg"
              alt="File Upload"
              width={200}
              height={200}
              objectFit="cover"
            />
          </div>
          

          {/* Editor Section */}
          <div className="container py-4 max-w-2xl">
            <TextEditor
              value={content}
              onChange={handleContentChange}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-9/12 mt-10 lg:mt-2 p-4 justify-end lg:justify-center">
          <button type="submit" className="bg-primary text-white bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-500">
            Submit
          </button>
        </div>
    </form>
  );
};

export default NewsForm;