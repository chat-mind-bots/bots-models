import tt from 'typegram';
export interface CreateMessageDto {
  message: tt.Update.New & tt.Update.NonChannel & tt.Message;
  from: tt.User;
  chat:
    | tt.Chat.ChannelChat
    | tt.Chat.PrivateChat
    | tt.Chat.GroupChat
    | tt.Chat.SupergroupChat;
  botLogin: string;
}
