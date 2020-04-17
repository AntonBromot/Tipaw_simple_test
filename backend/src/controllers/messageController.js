import Messages from '../db/models/Messages';

async function create(req, res) {
    const { body: { firstName, lastName, email, phoneNumber, object, message } } = req,
          data = { firstName, lastName, email, phoneNumber, object, message };

    let newMessage;
    try {
        newMessage = await Messages.create(data);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }

    return res.send(newMessage);
};

async function getOne(req, res) {
    const { params: { messageId }} = req;

    let message;
    try {
        message = await Messages.findOne({ _id: messageId });
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }

    if (!message) return res.status(404).send({ error: 'Not found' });

    return res.send(message);
};

async function getAll(req, res) {
    let messages;
    try {
        messages = await Messages.find();
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }

    return res.send(messages);
};

async function remove(req, res) {
    const { params: { messageId }} = req;

    let message;
    try {
        message = await Messages.deleteOne({ _id: messageId });
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }

    if (!message) return res.status(404).send({ error: 'Not found' });

    return res.send({ success: 'Message was delete'});
};

export default { create, remove, getOne, getAll };
