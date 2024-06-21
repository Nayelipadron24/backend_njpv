import { Request, Response } from "express";
import validator from "validator";
import model from '../models/authModelo';
import { utils } from "../utils/utils";

class AuthController {

    public async iniciarSesion(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            

            // Verificar que los datos no estén vacíos
            if (validator.isEmpty(email.trim()) ||
                validator.isEmpty(password.trim())) {
                return res
                    .status(400)
                    .json({ message: "Los campos son requeridos", code: 1 });
            }

            // Verificar usuario por email
            const lstUsers = await model.getuserByEmail(email);
                       
            let result = utils.checkPassword(password, lstUsers[0].password);
            result.then((value) =>{
                if(value){
                    return res.json({message: "Autenticacion correcta", code:0});
                }else{
                    return res.json({message: "Password Incorrecto", code:1});
                }


            })
           

        } catch (error: any) {
            return res.status(500).json({ message: `${error.message}` });
        }
    }
}

export const authController = new AuthController();
