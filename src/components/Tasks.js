import { useState } from 'react';
const Tasks = () => {
    const [tasks,setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder:true,
        },
        {
            id: 2,
            text: 'Meeting',
            day: 'Feb 5th at 1:30pm',
            reminder:true,
        },
        {
            id: 3,
            text: 'Food shopping',
            day: 'Feb 5th at 2:30pm',
            reminder:false,
        }
    ])
    return (
        <>
            {/* used to iterate through all tasks using map function with arrow function*/}
            {/* Object-Name.map((for accessing elements such as i in for loop) =>(operation)) */}
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}
export default Tasks