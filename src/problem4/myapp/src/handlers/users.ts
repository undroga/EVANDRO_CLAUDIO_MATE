import {Request, Response} from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";

export function getUsers(request: Request, response: Response){
    response.send([]);
}

export function getUsersById(request: Request, response: Response){
    response.send([]);
}

export function createUser(request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>, response: Response){
    request.query.loginAfterCreate;
}

