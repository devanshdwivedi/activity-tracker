import React from 'react';

interface TasksProps {
    tasks: Task[]
}

export default function Tasks({tasks}: TasksProps) {
    return (
        <div>
            {
                tasks && tasks.map((task: Task, index: number)=>{
                    return <div key={'Task-Id-' + index}>
                        <input style={{margin: '0 5px 0 0'}} type="checkbox" checked={task.completed} onChange={()=>{}} />
                        <span>{task.title}</span>
                    </div>
                })
            }
        </div>
    )
}
