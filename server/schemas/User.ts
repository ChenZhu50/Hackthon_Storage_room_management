import mongoose, { Schema, Document, Types } from 'mongoose';


const bcrypt = require('bcrypt');


interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  university: mongoose.Types.ObjectId; 
  clubLeaderships: mongoose.Types.ObjectId[]; 
  comparePassword(candidatePassword: string): Promise<boolean>; 
}


const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[eE][dD][uU]$/, 
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  university: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'University',
    required: true,
  },
  clubLeaderships: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Club',
    required: true
  }]
}, { timestamps: true });

// **密码加密（Pre-save Hook）**
// userSchema.pre<IUser>('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });


userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};


const User = mongoose.model<IUser>('User', userSchema);


const createUser = async () => {
  try {
    const newUser: IUser = new User({
      email: 'student@university.edu',
      password: 'securepassword123',
      firstName: 'Alice',
      lastName: 'Smith',
      university: new mongoose.Types.ObjectId(), 
      club_leaderships: {
        'AI Club': 'President',
        'Robotics Society': 'Vice President'
      }
    });

    await newUser.save();
    console.log('User created successfully!');
  } catch (error) {
    console.error('Error creating user:', error);
  }
};


createUser();

export default User;
