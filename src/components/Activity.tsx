import React from 'react';
import TagsDisplay from './TagsDisplay';
import Tasks from './Tasks';

interface ActivityProps {
    id: string;
    title: string;
    activityState: string;
    priority: number;
    originalEsimate?: number;
    remainingWork?: number;
    tags?: string[];
    tasks?: Task[];
}

export default function Activity({id, title, activityState, priority, originalEsimate, remainingWork, tags, tasks}: ActivityProps) {
    return (
        <div style={{margin: '2px 5px', border: '1px solid black'}}>
            <div style={{padding: '5px'}}>
                <div>{id}</div>
                <div>{title}</div>
                <div>{activityState}</div>
                <div>{priority}</div>
                {
                    originalEsimate &&
                    <div>{originalEsimate}</div>
                }
                {
                    remainingWork &&
                    <div>{originalEsimate}</div>
                }
                {
                    tags && tags.length > 0 &&
                    <TagsDisplay tags={tags} />
                }
                {
                    tasks && tasks.length > 0 && 
                    <Tasks tasks={tasks} />
                }
            </div>
        </div>
    )
}
