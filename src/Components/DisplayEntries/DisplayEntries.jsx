import CustomButton from "../LikeButton/LikeButton.jsx";
import likeButton from "../Like/Like.jsx";
const DisplayEntries = (props) => {
    return ( 

        <table className = "table">
        <thead>
          <tr>
            <th>   
              </th>
              <th>
                
              </th>
          </tr>
        </thead>
        <tbody>
        {props.parentFeedDisplay.map((feed) =>{
          return (
            <tr>
              <td>{feed.name}</td>
                
              <td>{feed.post}</td>

              <td>{likeButton()}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;