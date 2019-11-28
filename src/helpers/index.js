const Boom = require('boom');

async function failAction(request, h, err) {
    if (process.env.NODE_ENV === 'production') {
        console.error('ValidationError:', err.message);
        throw Boom.badRequest(`Invalid request payload input`);
    } else {
        console.error(err);
        throw err;
    }
}

function addDefaultValuesToFields( fields, defaultValues ) {
    for ( let key in defaultValues ) {
        const isUndefined = fields[key] === undefined,
              isEmptyObject = !isUndefined && fields[key] && ( fields[key].constructor.name === "Object" ) && !Object.keys(fields[key]).length,
              isEmptyArray = !isUndefined && Array.isArray(fields[key]) && !fields[key].length;

        if ( isUndefined || isEmptyObject || isEmptyArray ) fields[key] = defaultValues[key]
    }

    return fields
}

function fieldsFilterBySchema( fields, schema, defaultValues ) {
    fields = fields.toObject()

    const schemaKeys = Object.keys(schema),
          hasDefaultValues = Object.keys(defaultValues).length;

    for ( let key in fields ) if ( !schemaKeys.includes(key) && fields.hasOwnProperty(key) ) delete fields[key]

    if ( hasDefaultValues ) fields = addDefaultValuesToFields( fields, defaultValues )

    return fields
}


module.exports = { failAction, fieldsFilterBySchema }
