import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Avatar
} from "@material-tailwind/react";

export default function Example({ missions, open, handleOpen }: any) {


  return (
    <Fragment>

      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        className="min-w-min"
      >
        <DialogHeader>{missions[0]?.mission_name} vs {missions[1]?.mission_name}</DialogHeader>
        <DialogBody divider className="max-h-[30rem] overflow-scroll">
        <div className="flex">
          {missions.map((mission: any, index: any) => (
            <div id={index} className="mx-4" >
              <div className="flex">
                <Typography variant="h6">Launched on:&nbsp;</Typography>
                <Typography variant="h6">{mission?.launch_date_local}</Typography>
              </div>
              <div className="flex">
                <Typography variant="h6" className="mt-3" >Rocket:&nbsp;</Typography>
                <Typography className="mt-3" >{mission?.rocket.rocket_name}</Typography>
              </div>
              <div className=" relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" colSpan={3} className="py-3 px-6">
                        First Stage
                      </th>
                      <th scope="col" colSpan={2} className="py-3 px-6 border-l-2">
                        Second Stage
                      </th>
                    </tr>
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Flight
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Reuse Count
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Status
                      </th>
                      <th scope="col" className="py-3 px-6 border-l-2">
                        Payload Type
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Payload mass
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mission?.rocket?.first_stage.cores.map((core: any, index: any) =>
                      <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {core.flight}
                        </th>
                        <td className="py-4 px-6">
                          {core.core.reuse_count.toString()}
                        </td>
                        <td className="py-4 px-6">
                          {core.core.status}
                        </td>
                        <td className="py-4 px-6 border-l-2">
                          {mission?.rocket.second_stage.payloads[index]?.payload_type}
                        </td>
                        <td className="py-4 px-6">
                          {mission?.rocket.second_stage.payloads[index]?.payload_mass_kg}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div>
                <Typography variant="h6" className="mt-3">Ships</Typography>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  max-h-[10rem]">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-4 px-6">
                        Image
                      </th>
                      <th scope="col" className="py-4 px-6">
                        Name
                      </th>
                      <th scope="col" className="py-4 px-6">
                        Home Port
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mission?.ships?.map((ship: any, index: any) =>
                      <tr className="mx-3" id={index}>
                        <td className="py-4 px-6"><Avatar src={ship.image} alt="avatar" size="xl" /></td>
                        <td className="py-4 px-6">{ship.name}</td>
                        <td className="py-4 px-6">{ship.home_port}</td>
                      </tr>)}

                  </tbody>
                </table>
              </div>
            </div>
          ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}