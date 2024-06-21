import { Request, Response } from "express";
import validator from "validator";
import model from '../models/authModelo';
import jwt from 'jsonwebtoken';

import { utils } from "../utils/utils";

class AuthController {

    public async iniciarSesion(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            
            console.log(email, '' , password)
            // Verificar que los datos no estén vacíos
            if (validator.isEmpty(email.trim()) ||
                validator.isEmpty(password.trim())) {
                return res
                    .status(400)
                    .json({ message: "Los campos son requeridos", code: 1 });
            }
            console.log('Validaciones')

            // Verificar usuario por email
            const lstUsers = await model.getuserByEmail(email);
            console.log('DB ', lstUsers[0].email);
                       
            //let result = utils.checkPassword(password, lstUsers[0].password);
           // result.then((value) =>{
              //  if(value){
                 //   return res.json({message: "Autenticacion correcta", code:0});
               // }else{
                   // return res.json({message: "Password Incorrecto", code:1});
               // }


           // })

          /* let result = utils.checkPassword(password, lstUsers[0].password);
           result.then((value)=>{
            if(value){
                const newUser={
                    email:lstUsers[0].email,
                    password:lstUsers[0].password,
                    role:lstUsers[0].role
                }
                console.log(process.env.SECRET)
                const env=require('dotenv').config();
                let token = jwt.sign(newUser,process.env.SECRET,{expiresIn:'1H'} )
                return res.json({message: "Autenticacion correcta", token, code:0});

            }else{
                return res.json({message: "Password incorrecta", code:1});
            }

           })*/
           

        } catch (error: any) {
            return res.status(500).json({ message: `${error.message}` });
        }
    }
}

export const authController = new AuthController();
