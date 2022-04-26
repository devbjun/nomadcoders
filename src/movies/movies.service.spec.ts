import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

const ID = 1;
const MOVIE = {
    title: 'Test Movie',
    genres: ['test'],
    year: 2022,
};

describe('MoviesService', () => {
    let service: MoviesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [MoviesService]
        }).compile();

        service = module.get<MoviesService>(MoviesService);
        service.create(MOVIE);
    });

    it('shoud be defined', () => {
        expect(service).toBeDefined();
    });

    describe('getAll', () => {
        it('shoud return an array', () => {
            const result = service.getAll();
            expect(result).toBeInstanceOf(Array);
        });
    });

    describe('getOne', () => {
        it('shoud return a movie', () => {
            const movie = service.getOne(ID);
            expect(movie).toBeDefined();

            expect(movie).toEqual({
                id: ID,
                ...MOVIE,
            });
        });

        it('should throw a NotFoundException', () => {
            try {
                service.getOne(999);
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        });
    });

    describe('update', () => {
        it('should update a movie', () => {
            service.update(ID, {
                title: 'Updated Test',
            });

            const movie = service.getOne(ID);
            expect(movie.title).toEqual('Updated Test');
        })

        it('should throw a NotFoundException', () => {
            try {
                service.update(999, {});
            } catch (e) {
                expect(e).toBeInstanceOf(NotFoundException);
            }
        });
    });
});