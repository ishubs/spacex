import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import {useState} from 'react'
export default function CustomCard({ mission, handleOpen, compareMissions, setCompareMissions }: any) {
    const [present,setPresent] = useState(false)
    const check = (mission:any) => {
    const isThere = compareMissions.map((mission:any)=>mission.launch_date_local).indexOf(mission.launch_date_local)
    return isThere;
    }
    const addToCompare = ()=>{
        //check if already present 
        //if not present add 
        //if present update state
        if(compareMissions.length === 2) return;
        setCompareMissions([...compareMissions,mission])
        setPresent(true)
    }

    const removeFromCompare = () => {
        if(compareMissions.length===0) return;
        let copy = compareMissions
    const index = compareMissions.map((mission:any)=>mission.launch_date_local).indexOf(mission.launch_date_local)

            copy.splice(index, 1);
        setCompareMissions(copy)
        setPresent(false)
        console.log(copy)
        console.log(compareMissions)
    }
    return (
        <Card className="w-96 hover:drop-shadow-md">
            <CardHeader color="blue" className="relative h-56">
                <img
                    src={mission.ships[0]?.image || "https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BhY2V4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
                    alt="img-blur-shadow"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" className="mb-2 cursor-pointer" onClick={() => handleOpen(mission)}>
                    {mission.mission_name}
                </Typography>
                <Typography>

                </Typography>
                <Typography variant="small" color="gray" className="flex gap-1">
                    <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                    {mission.launch_site.site_name_long}
                </Typography>
            </CardBody>
            <CardFooter divider className="">

                <div className="flex justify-between">
                    <a onClick={(e) => e.stopPropagation()} target="_blank" href={mission.links.wikipedia}><Button>Read</Button></a>
                    
                    {!present? <Button onClick={addToCompare}>Select</Button>:
                    <Button onClick={removeFromCompare}>remove</Button>
                    }
                </div>
            </CardFooter>
        </Card>
    );
}
