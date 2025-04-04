import { IsMongoId, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  slug: string;

  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsMongoId()
  authorId: string;
}
