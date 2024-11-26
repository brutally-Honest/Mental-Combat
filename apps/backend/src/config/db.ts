import { connect } from "mongoose";
import { shutdown } from "../utils/shutdown";
import { __ } from "./env";


const retryConnectToDB = async (dbUrl: string, retries = 3, delay = 3000): Promise<void> => {
    let attempt = 0;
    while (attempt < retries) {
        try {
            await connect(dbUrl);
            console.log(`Connected to MongoDB`);
            return;
        } catch (error) {
            attempt++;
            if (attempt >= retries) {
                console.log("Max retry attempts reached. Could not connect to DB.");
                throw new Error(`Failed to connect to MongoDB after ${retries} attempts.`);
            }
            console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

export const configureDB = async (): Promise<void> => {
    try {
        const dbUrl = __.DB_URL
        const dbName = __.DB_NAME
        await retryConnectToDB(`${dbUrl}/${dbName}`)
    } catch (error) {
        if (error instanceof Error) {
            shutdown({ error, signal: 'DB' });
        }
    }
};
