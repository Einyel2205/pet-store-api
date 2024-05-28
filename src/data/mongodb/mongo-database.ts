import mongoose from "mongoose";

interface Options {
  // 5
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  //1

  static async connect(options: Options) {
    //2
    const { dbName, mongoUrl } = options;

    try {
      await mongoose.connect(mongoUrl, {
        dbName: dbName,
      });

      console.log("MongoDB connected");
      return true;
    } catch (error) {
      console.log("Mongo Connection Error");
      throw error;
    }
  }
}
