import { DescribeTableCommand, CreateTableCommand, CreateTableCommandInput } from "@aws-sdk/client-dynamodb";
import { dynamodbInstance } from "../config/dynamodb";



async function checkTableExists(tableName: string): Promise<boolean> {
  const params = {
    TableName: tableName
  };

  try {
    await dynamodbInstance.send(new DescribeTableCommand(params));
    console.log(`Table "${tableName}" already exists.`);
    return true;
  } catch (error: any) {
    if (error.name === "ResourceNotFoundException") {
      return false;
    } else {
      console.error("Error checking table existence:", JSON.stringify(error, null, 2));
      throw error;
    }
  }
}

async function createDynamoDbTable(tableName: string, tableParams: CreateTableCommandInput): Promise<void> {

  const exists = await checkTableExists(tableName);
  if (exists) { 
    return;
  }

  try {
    const data = await dynamodbInstance.send(new CreateTableCommand(tableParams));
    console.log("Table created:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error creating table:", JSON.stringify(error, null, 2));
  }
}

function createOnlineUsersTable() {
  const tableName = 'OnlineUsers'

  const params: CreateTableCommandInput = {
    TableName: tableName,
    KeySchema: [
      { AttributeName: "connectionId", KeyType: "HASH" },  
      { AttributeName: "username", KeyType: "RANGE" }     
    ],
    AttributeDefinitions: [
      { AttributeName: "connectionId", AttributeType: "S" },
      { AttributeName: "username", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    } 
  };  
  
  createDynamoDbTable(tableName, params)
}

export {
  createOnlineUsersTable,
  createDynamoDbTable
}