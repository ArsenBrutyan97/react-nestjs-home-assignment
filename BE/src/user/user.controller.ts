import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.model';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @Get()
  getAll(): Promise<Array<User>> {
    return this.userService.getAll();
  }

  @ApiOperation({ summary: 'Create new user' })
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.create(user);
  }
}
