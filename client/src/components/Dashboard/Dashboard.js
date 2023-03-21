

const DashBoard = ({

}) => {
    
    return(
        <div className="top-employees">
        <h2 className="section-title">Top Employees</h2>
        {/* if topFive */}
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Tasks Completed</th>
                    {/* <!-- <th>Details</th> --> */}
                </tr>
            </thead>
            <tbody>
                {/* {{#each topFive}} */}
                {/* {{>topEmployeeCard}} */}
                {/* {{/each}} */}
                {}
            </tbody>
        </table>
        {/* else */}
        <h2>No statistics yet!</h2>
        
    </div>
    );
};

export default DashBoard;