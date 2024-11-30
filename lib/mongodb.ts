import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (global._mongoClientPromise) {
    clientPromise = global._mongoClientPromise;
  } else {
    global._mongoClientPromise = client.connect();
    clientPromise = global._mongoClientPromise;
  }
} else {
  clientPromise = client.connect();
}

export default clientPromise;
