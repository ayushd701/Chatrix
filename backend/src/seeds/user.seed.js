import { config } from "dotenv";
import { connectMongoDb } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const users = [
    { 
      email: "arjun.sharma@example.com",
      fullName: "Arjun Sharma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/10.jpg"
    },
    { 
      email: "priya.verma@example.com",
      fullName: "Priya Verma",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/11.jpg"
    },
    { 
      email: "rahul.patel@example.com",
      fullName: "Rahul Patel",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    { 
      email: "ananya.mishra@example.com",
      fullName: "Ananya Mishra",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/13.jpg"
    },
    { 
      email: "vivek.nair@example.com",
      fullName: "Vivek Nair",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/14.jpg"
    },
    { 
      email: "sneha.iyer@example.com",
      fullName: "Sneha Iyer",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/15.jpg"
    },
    { 
      email: "rohit.choudhary@example.com",
      fullName: "Rohit Choudhary",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/16.jpg"
    },
    { 
      email: "kavita.singh@example.com",
      fullName: "Kavita Singh",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/17.jpg"
    },
    { 
      email: "manish.kumar@example.com",
      fullName: "Manish Kumar",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/men/18.jpg"
    },
    { 
      email: "deepa.reddy@example.com",
      fullName: "Deepa Reddy",
      password: "123456",
      profilePic: "https://randomuser.me/api/portraits/women/19.jpg"
    }
  ];
  
  console.log(users);
  

const seedDatabase = async () => {
  try {
    await connectMongoDb();

    await User.insertMany(users);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();