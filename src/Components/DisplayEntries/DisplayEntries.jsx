
const DisplayEntries = (props) => {
    return ( 
        <table>
        <thead>
          <tr>
            <th>
              NAME
              </th>
              <th>
                POST
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