import type { AvengerStatusType } from '../../common/enum/AvengerStatusEnum';
import type avengers from '../../resources/avengers';

export type GetAvengerByNameDto = {
  name: keyof typeof avengers;
};

export type GetAvengerOutput = {
  avenger: {
    name: string;
    secretIdentity: string;
    powers: string[];
    status: AvengerStatusType;
    enemy: string;
    lovers: string[];
  };
};
