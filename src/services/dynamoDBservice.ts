import { ScanCommand, PutItemCommand, DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { dynamodbInstance } from "../config/dynamodb";
import { User } from "../types";


const getOnlineUsers = async () => {
  const params = {
    TableName: "OnlineUsers"
  };

  try {
    const data = await dynamodbInstance.send(new ScanCommand(params));
    return data.Items || [];
  } catch (error) {
    console.error("Error fetching online users:", error);
    return [];
  }
};


const addUser = async (user: User): Promise<boolean> => {
  const params = {
    TableName: "OnlineUsers",
    Item: {
      connectionId: { S: user.connectionId },
      username: { S: user.username },
    }
  };

  try {
    await dynamodbInstance.send(new PutItemCommand(params));
    return true;
  } catch (error) {
    console.error("Error adding new user:", error);
    return false;
  }
};

const deleteUserById = async (id: string): Promise<boolean> => {
  const params = {
    TableName: "OnlineUsers",
    Key: {
      connectionId: { S: id }
    }
  };

  try {
    await dynamodbInstance.send(new DeleteItemCommand(params));
    return true;
  } catch (error) {
    console.error("Error deleting user by ID:", error);
    return false;
  }
};

export {
  addUser,
  deleteUserById,
  getOnlineUsers
}