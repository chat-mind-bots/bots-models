import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now, Schema as MongooseSchema } from 'mongoose';
import tt from 'typegram';
import { CreateUserDto } from 'lib/user/dto';
@Schema()
export class User implements CreateUserDto {
  @Prop({ type: MongooseSchema.Types.Mixed, required: false })
  telegram?: tt.User;

  @Prop({ type: [String], required: true, default: [] })
  bots: string[];

  @Prop({ type: Date, default: now() })
  createdAt: Date;

  @Prop({ type: Date, default: now() })
  updatedAt: Date;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
