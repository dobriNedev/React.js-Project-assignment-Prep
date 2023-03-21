const EmployeeTasks = () => {
    return(
        <section className="tasks-list">
       
        <h2 className="section-title"> Employee's tasks</h2>
        {/* {{#if tasks}} */}
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {/* {{#each tasks}}
                {{>taskCardShort}}
                {{/each}} */}
            </tbody>
        </table>
        {/* {{else}} */}
        <div>
            <h2>No Tasks yet!</h2>
        </div>
        
    </section>
    );
};

export default EmployeeTasks;