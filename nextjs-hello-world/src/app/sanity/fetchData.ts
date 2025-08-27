// import { SanityDocument } from "next-sanity";
// import { useEffect, useState } from "react";
// import { client } from "./client";

// interface FetchDataProps {
//     query: string;
// }

// export const FetchData = () => {
//       const [abouts, setAbouts] = useState<SanityDocument[]>([]);
    
//       useEffect(() => {
//         const fetchPosts = async () => {
//           const POSTS_QUERY = `*[_type=="pageInfo"]`;
//           const options = { next: { revalidate: 30 } };
//           const data = await client.fetch<SanityDocument[]>(
//             POSTS_QUERY,
//             {},
//             options
//           );
//           setAbouts(data);
//         };
//         fetchPosts();
//       }, []);
// }