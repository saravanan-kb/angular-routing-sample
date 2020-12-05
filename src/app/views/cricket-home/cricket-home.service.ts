import { Injectable } from '@angular/core';

@Injectable()
export class CricketHomeService {
  public getPlayerOfNation(player: string) {
    return CountryPlayerCombination[player];
  }
  public getPlayerNameFromId(id: number) {
    return Object.keys(CountryPlayerCombination).find(
      (player) => CountryPlayerCombination[player] === id
    );
  }
}
const CountryPlayerCombination = {
  kholi: 1,
  rohit: 2,
  warner: 3,
  smith: 4,
};
