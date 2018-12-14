import { IGame } from "./igame";

export class Game implements IGame {
    artist: string;
    designer: string;
    id: string;
    imageUrl: string;
    maxNumberOfPlayers: number;
    maxPlayingTime: number;
    minAge: number;
    minNumberOfPlayers: number;
    minPlayingTime: number;
    name: string;
    publisher: string;
    rate: number;
    year: number;
}