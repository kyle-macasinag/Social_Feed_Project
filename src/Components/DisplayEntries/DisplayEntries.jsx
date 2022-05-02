
const DisplayEntries = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>
              Name
              </th>
              <th>
                Post
              </th>
          </tr>
        </thead>
        <tbody>
        {props.parentFeedDisplay.map((feed) =>{
          return (
            <tr>
              <td>{feed.title}</td>
              <td>{feed.post}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;