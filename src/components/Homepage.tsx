import Card from './Card';
import * as React from 'react';
import Modal from './Modal'
import CompareModal from './CompareModal';
import { Button, Input, Radio } from '@material-tailwind/react';
import { GraphQLClient, gql } from 'graphql-request'
import { rocketQuery, missionQuery } from './queries'
import Spinner from './Spinner';
import Pagination from './Pagination';
import NoResults from './Noresults';
import { useDebounce } from '../utils/useDebounce';
import {mission} from "./types"
import Search from "./Search"
export interface IAppProps {
}



const pageStyles = {
  inActive: "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
  active: "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
}

export default function App(props: IAppProps) {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true)
  const [compareMissions, setCompareMissions] = React.useState([])
  const [mission, setMission] = React.useState<mission|null>(null)
  const [openCompare, setOpenCompare] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [dataLaunches, setData] = React.useState({ launchesPast: [], launchesPastResult: { result: { totalCount: 0 } } })
  const [searchBy, setSearchBy] = React.useState('mission_name')
  const [search,setSearch] = React.useState('')
  const handleOpen = (mission: mission | null) => {
    setMission(mission)
    console.log("opening")
    setOpen(!open)
  };

  React.useEffect(() => {
    fetc(search)
  }, [page])

  async function fetc(search: any) {
    setLoading(true)
    setSearch(search)
    setCompareMissions([])
    let endpoint = "https://api.spacex.land/graphql/";
    const graphQLClient = new GraphQLClient(endpoint)
    const variables: any = searchBy == "mission_name" ? { "missionName": search, "page": page - 1 } : { "rocket": search, "page": (page - 1) * 6 }
    const res = await graphQLClient.request(searchBy == 'mission_name' ? missionQuery : rocketQuery, variables)
    setData(res)
    setLoading(false)
  }

  const debounce = useDebounce(fetc,1000)
  const debounceOnChange = React.useCallback(debounce, [searchBy]);


  const handleOpenCompare = () => {
    if (compareMissions.length == 2) setOpenCompare(!openCompare);
    else alert('Please Select two Missions to Compare')
  }


  return (
    <div>
     <Search setPage={setPage} debounceOnChange={debounceOnChange} handleOpenCompare={handleOpenCompare} searchBy={searchBy} setSearchBy={setSearchBy}/>
      {loading ? <Spinner />
        : <div>
          {!dataLaunches.launchesPast.length ?
            <NoResults />
            :
            <div className="flex flex-wrap justify-around">
              {dataLaunches.launchesPast?.map((mission: any, index: any) => <div key={index} className='my-8'><Card mission={mission} handleOpen={handleOpen} setCompareMissions={setCompareMissions} compareMissions={compareMissions} /></div>)}
            </div>
          }
        </div>}
      <Pagination setPage={setPage} page={page} styles={pageStyles} count={dataLaunches.launchesPastResult.result.totalCount} />
      <Modal mission={mission} handleOpen={handleOpen} open={open} />
      <CompareModal missions={compareMissions} handleOpen={handleOpenCompare} open={openCompare} />
    </div>
  );
}
