import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-zqxnnsj-shard-00-00.vamohnq.mongodb.net:27017,ac-zqxnnsj-shard-00-01.vamohnq.mongodb.net:27017,ac-zqxnnsj-shard-00-02.vamohnq.mongodb.net:27017/?ssl=true&replicaSet=atlas-rlho02-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;