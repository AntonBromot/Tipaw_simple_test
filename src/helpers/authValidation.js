
async function serviceAuth( request, authToken ) {
    const { headers: { service }, server } = request

    try {
      // something
    } catch (e) {
        console.log( "serviceAuth error:", e )
    }

    return { isValid: true };
}

async function simpleAuth( request, someKey ) {
    const { server } = request

    try {
        // something
    } catch (e) {
        console.log( " simpleAuth error: ", e )
    }

    return { isValid: true };
}

module.exports = { serviceAuth, simpleAuth }
