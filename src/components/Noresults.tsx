import * as React from 'react';

export interface INoResultsProps {
}

export default function NoResults(props: INoResultsProps) {
    return (
        <div className="max-w-md mx-auto mt-5">
            <img src="https://cdn.dribbble.com/userupload/2905353/file/original-2022966da1fc3718d3feddfdc471ae47.png?compress=1&resize=400x300&vertical=top" />
        </div>
    );
}
