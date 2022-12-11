export interface mission {
    mission_name: String,
    launch_date_local: String,
    launch_site: {
        site_name_long: String,
    }
    links: {
        wikipedia: String,
    }
    rocket: {
        rocket_name: string,
        first_stage: {
            cores: {
                flight: string,
                core: {
                    reuse_count: Number,
                    status: string
                }
            }[]
        },
        second_stage: {
            payloads: {
                payload_type: string,
                payload_mass_kg: string,
            }[]
        }
    },
    ships: {
        name: String,
        home_port: String,
        image: String,
    }[]
}

