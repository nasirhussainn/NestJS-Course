import { IsMongoId, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  comment: string;

  @IsMongoId()
  postId: string;
}
