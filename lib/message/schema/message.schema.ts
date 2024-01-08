import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, now, Schema as MongooseSchema } from 'mongoose';
import tt from 'typegram';
import { CreateMessageDto } from 'lib/message/dto';
@Schema()
export class Message implements CreateMessageDto {
  @Prop({
    type: MongooseSchema.Types.Mixed,
    required: true,
    default: {},
  })
  message: tt.Update.New & tt.Update.NonChannel & tt.Message;

  @Prop({ type: MongooseSchema.Types.Mixed, required: true, default: {} })
  from: tt.User;

  @Prop({ type: MongooseSchema.Types.Mixed, required: true, default: {} })
  chat:
    | tt.Chat.ChannelChat
    | tt.Chat.PrivateChat
    | tt.Chat.GroupChat
    | tt.Chat.SupergroupChat;

  @Prop({ type: String, required: true })
  botLogin: string;

  @Prop({ type: Date, default: now() })
  createdAt: Date;

  @Prop({ type: Date, default: now() })
  updatedAt: Date;
}

export type MessageDocument = HydratedDocument<Message>;
export const MessageSchema = SchemaFactory.createForClass(Message);
