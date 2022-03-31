import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return {msg: 'signup token'};
    }

    signin() {
        return {msg: 'signin token'};
    }
}