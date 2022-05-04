
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
            </tr>
          )
        })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;