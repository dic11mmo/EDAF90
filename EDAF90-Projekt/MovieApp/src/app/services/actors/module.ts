import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ActorsApiActions } from './api/actions';
import { ActorsAPIEpics } from './api/epics';
import { ActorsAPIService } from './api/service';

@NgModule({
  imports: [CommonModule],
  providers: [ActorsApiActions, ActorsAPIEpics, ActorsAPIService],
})
export class ActorModule {}
