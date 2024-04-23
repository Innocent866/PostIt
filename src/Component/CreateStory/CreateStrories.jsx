import React from "react";

const CreateStrories = () => {
  return (
    <div className="container">
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "700",
          fontFamily: "Harmattan, sans-serif",
        }}
      >
        Create Story
      </h1>

      <form action="">
            <div className="d-flex flex-column gap-5 ">
            <input type="text" placeholder="Title" className="w-100 p-2 rounded-1" style={{border:"1px solid #757575"}}/>
        <input type="text" placeholder="Tag" className="w-100 p-2 rounded-1" style={{border:"1px solid #757575"}}/>
        <textarea  placeholder="Write a story. . . . . ." className="w-100 p-2 rounded-1" style={{border:"1px solid #757575", height:"568px"}}></textarea>
      
            </div>
       </form>
      <div className="text-center my-5">
        <button className="btn btn-primary w-50 p-3">Publish Story</button>
      </div>
    </div>
  );
};

export default CreateStrories;
