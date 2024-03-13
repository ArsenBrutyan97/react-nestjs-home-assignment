import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiTags } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

@Schema({
  timestamps: true,
})
@ApiTags('users')
export class User {
  @Prop({ required: true })
  @IsString()
  @MaxLength(32)
  username: string;

  @Prop({ required: true })
  @IsString()
  @MaxLength(10)
  phoneNumber: string;

  @Prop({ required: true })
  @IsString()
  @MinLength(6)
  @MaxLength(12)
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
