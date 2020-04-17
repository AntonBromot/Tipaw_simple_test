import mongoose from 'mongoose';

import Messages from './models/Messages';
import { DATABASE_CONNECTION, FIRST_MESSAGE } from '../constants';

const firstEntrance = async () => {
    let messages;
    try {
        messages = await Messages.find();
        if ( messages && messages.length ) return;

        messages = new Messages(FIRST_MESSAGE);
        messages.save( ( err, data ) => {
            if ( err ) throw err;
            console.log("First entrence message was created!", data);
        })
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }

};

const database = () => {
    console.log("Trying to connect ", DATABASE_CONNECTION)
    mongoose.connect(DATABASE_CONNECTION)

    const db = mongoose.connection;

    db.on( "error", () => console.log( "connection error" ) )
    db.once( "open", () => { console.log("we are connected"); firstEntrance(); })
};

export default database;
