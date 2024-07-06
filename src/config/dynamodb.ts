import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const dynamodbInstance = new DynamoDBClient({
  region: "eu-central-1",
  endpoint: "http://dynamodb-local:8000",
  credentials: {
    accessKeyId: "dummy",  // NOTE: accessKey is not required in dvevelopment since we are running the db locally.
    secretAccessKey: "dummy",  // NOTE: secretAßccessKey is not required in dvevelopment since we are running the db locally.
  }
});


export { dynamodbInstance } 