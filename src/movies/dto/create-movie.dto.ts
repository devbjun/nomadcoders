import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    readonly title: string;

    @IsNumber({
        allowNaN: false,
        allowInfinity: false,
    })
    readonly year: number;

    @IsOptional()
    @IsString({ each: true })
    readonly genres: string[];
}