import bcrypt from "bcryptjs";
import OTP from "otp-generator";
import jwt from "jsonwebtoken";
import { RegisterUserRequestDTO } from "../dto/requestDTO/registerUserRequestDTO.ts";
import { isEmailExist, createUser, findUserByEmail } from "../repository/userRepository.ts";

import  sendEmail  from "../utils/mailUtils.ts";  // Import mail utils
/** Đăng ký: kiểm tra, sinh OTP, gửi mail */
export const registerUserService = async (dtoData: RegisterUserRequestDTO) => {
  const { email, password, firstName, lastName } = dtoData;
  console.log(dtoData);
  console.log(email);
  console.log(password);
  console.log(firstName);
  console.log(lastName);
  try{
    if (!email || !password || !firstName || !lastName) {
      throw new Error("All fields are required");
    }
    if (await isEmailExist(email)) {
      throw new Error("Email is already registered");
    }
    else{
      const hashedPassword= await bcrypt.hash(password,10);
      const newUser = await createUser({ 
      email, 
      password: hashedPassword, 
      firstName, 
      lastName ,
      role: "User"
    });
    return { message: 'OTP verified successfully. You can now create your account.',
            newUser,
     };
    
    }
  }
  catch(error){
    console.log(error);
    return null;
  }
 
  
};

/** Đăng nhập */
export const loginUserService = async (payload: { email: string; password: string }) => {
  const user = await findUserByEmail(payload.email);
  if (!user) throw new Error("User not found");

  const ok = await bcrypt.compare(payload.password, user.password);
  if (!ok) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  return { token,
    user
   };
};





