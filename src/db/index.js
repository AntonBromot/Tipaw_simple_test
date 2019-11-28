const mongoose = require("mongoose")

const Updates = require("./models/Updates")

const DATABASE_CONNECTION = 'mongodb://mongo/bromotec'

const firstEntrance = async () => {
    let updates
    try {
        updates = await Updates.find()
        if ( updates && updates.length ) return;

        updates = new Updates({})
        updates.save( ( err, data ) => {
            if ( err ) throw err
            console.log( "First entrence updates was created!", data )
        })
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }

}

const database = () => {
    mongoose.connect(DATABASE_CONNECTION)

    console.log("Trying to connect ", DATABASE_CONNECTION)

    const db = mongoose.connection

    db.on( "error", () => console.log( "connection error" ) )
    db.once( "open", () => { console.log("we are connected"); firstEntrance() } )
}

module.exports = database
