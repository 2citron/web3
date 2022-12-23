export interface Boxeurs {
    _id? : string;
    nbGame : number;
    nbVictory:number;
    nbKO:number;
    nbTKO:number;
    nbDefeat:number;
    name:string;
    nickname:string;
    firstMatch:string;
    isActive : Boolean;
    opponents:[string];
    cityBoxedIn:[string];
    weightClass:string;
}
