import * as React from 'react';
import { Input, Button, Radio } from '@material-tailwind/react';
import { AnyARecord } from 'dns';
export interface IAppProps {
}

export default function App ({setPage,debounceOnChange,handleOpenCompare,searchBy,setSearchBy}:any) {
    // export default function App (props: IAppProps) {
  return (
    <div>
       <div className="justify-center mx-auto mt-5 flex">
        <div className="">
          <Input className='w-72' onChange={e => { setPage(1); debounceOnChange(e.target.value) }} label={searchBy == "mission_name" ? "Mission" : "Rocket"} />
        </div>
        <div className='mx-4'>
          <Button onClick={handleOpenCompare}>Compare</Button>
        </div>
      </div>
      <div className="flex gap-5 mx-auto w-72">
        <Radio id="mission_name" name="type" label="Mission"
          checked={searchBy == 'mission_name' ? true : false}
          onClick={() => setSearchBy('mission_name')}
        />
        <Radio
          checked={searchBy == 'rocket_name' ? true : false}
          id="rocket_name" name="type" label="Rocket"
          onClick={() => setSearchBy('rocket_name')}
        />
      </div>
    </div>
  );
}
