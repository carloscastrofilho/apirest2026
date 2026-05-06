import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import * as UserModel from "../model/usersModel.js" ;

export const logouf = async (req, res) => {
    return
}

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    const { data, message} = await UserModel.GetByEmail(email) ;
    
    if ( data.length > 0) 
        return res.status(400).json({ message: 'Email já cadastrado' });

    const hashedPassword = await bcrypt.hash(password, 10);
  
    const response = await UserModel.Post({ name, email, password: hashedPassword });
    
    res.status(201).json(response);

};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Credenciais inválidas' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Credenciais inválidas' });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
};