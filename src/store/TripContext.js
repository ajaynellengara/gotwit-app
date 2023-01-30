import React, { createContext, useState } from "react";

export const TripContext = createContext(null);

const ContextTrip = ({ childern }) => {
  const [tripContent, setTripContent] = useState();

  return (
    <TripContext.Provider value={{ tripContent, setTripContent }}>
      {childern}
    </TripContext.Provider>
  );
};

export default ContextTrip;

// import React, { createContext, useState } from "react";

// export const PostContext = createContext();

// const ContextPost = ({ children }) => {
//   const [postContent, setPostContent] = useState([]);

//   return (
//     <PostContext.Provider value={{ postContent, setPostContent }}>
//       {children}
//     </PostContext.Provider>
//   );
// };
// export default ContextPost;

