import { Injectable } from '@nestjs/common';

import avengers from '../../resources/avengers';
import type { GetAvengerByNameDto, GetAvengerOutput } from '../dto/avenger.dto';
import { AvengerStatusType } from '../../common/enum/AvengerStatusEnum';

@Injectable()
export class GetAvengerService {
  public getAvengerByName(data: GetAvengerByNameDto): GetAvengerOutput {
    const { name } = data;

    console.log(avengers);

    const avenger = avengers[name];

    return {
      avenger: {
        name,
        secretIdentity: avenger['identidadeSecreta'],
        powers: avenger.poderes,
        status: avenger.status as AvengerStatusType,
        enemy: avenger.arquiInimigo,
        lovers: avenger.paresRomanticos,
      },
    };
  }
}
