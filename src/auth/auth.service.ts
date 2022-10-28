import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    ){}

  async validateUser(email: string, password: string): Promise<any>{
    const user = await this.userService.findByEmail(email);
    if(user && user.password === password){
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {username: user.username, sub: user.userId}
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
