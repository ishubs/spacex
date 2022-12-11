import { gql } from 'graphql-request'


export const rocketQuery = gql`query($rocket:String,$page:Int){
    launchesPastResult(find: {rocket_name: $rocket}) {
      result {
        totalCount
      }
    }
    launchesPast(limit: 6, offset: $page, find:{rocket_name:$rocket}){
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        wikipedia
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
          }
        }
      }
      ships {
        name
        home_port
        image
      }
    }
  }
  `;
  
  export const missionQuery = gql`query($missionName:String,$page:Int){
    launchesPastResult(find: {mission_name: $missionName}) {
      result {
        totalCount
      }
    }
    launchesPast(limit: 6, offset: $page, find:{mission_name:$missionName}) {
      id
      mission_name
      launch_site {
        site_name_long
      }
      links {
        wikipedia
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            flight
            core {
              reuse_count
              status
            }
          }
        }
        second_stage {
          payloads {
            payload_type
            payload_mass_kg
          }
        }
        
      }
      ships {
        name
        home_port
        image
      }
    }
  }
  `;