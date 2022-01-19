import { Injectable } from '@nestjs/common';
import { Camp } from './camps.entity';
import { CampsRepository } from './camps.repository';
import { CampRegistDto } from './dto/camp_regist.dto';
import { UpdateCampDto } from './dto/camp_update.dto';

@Injectable()
export class CampsService {
  constructor(private campRepository: CampsRepository) {}

  async registCamp(campRegistDto: CampRegistDto): Promise<Camp> {
    const result = await this.campRepository.createCamp(campRegistDto);
    return result;
  }
}
