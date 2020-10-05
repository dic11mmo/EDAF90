import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SeriesApiActions } from './api/actions';
import { SeriesAPIEpics } from './api/epics';
import { SeriesAPIService } from './api/service';

@NgModule({
  imports: [CommonModule],
  providers: [SeriesApiActions, SeriesAPIEpics, SeriesAPIService],
})
export class SeriesModule {}
