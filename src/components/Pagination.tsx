import { interactive } from '@material-tailwind/react/types/components/popover';
import * as React from 'react';

export interface IPaginationProps {
    styles: {active:string,inActive:string},
    count: any,
    setPage : (x:any)=>void,
    page: any
}

export default function Pagination ({styles,count,setPage,page}: IPaginationProps) {
  return (
    <div>
      <nav aria-label="Page navigation example" className='my-5'>
        <ul className="inline-flex -space-x-px">
          {Array.from({ length: (count) / 6 }, (_, index) => index + 1).map((_, index) => (
            <li key={index} onClick={() => setPage(index + 1)}>
              <a href="#" className={page == index + 1 ? styles.active : styles.inActive}>{index + 1}</a>
            </li>
          ))}

        </ul>
      </nav>
    </div>
  );
}
