// import { client } from "../../../sanity/lib/client";
// import { Card} from "./types/interfaces";

// export async function getCards(){
//     const query =`
//     *[_type == "cardData"]{
//           _id,
//           image,
//           title,
//           status,
//           description,
//           users[] {
//             icon,
//             name
//           },
//           buttonText 

//     `
//     const data = await client.fetch(query);
//     return data as Card[];
// }