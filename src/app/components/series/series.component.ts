import { Component }               from '@angular/core';
import { Series, SeriesValue } 	   from '../../models/series';
import { Season } 	               from '../../models/season';
import { ombdapiService }          from '../../services/omdbapi.service'

@Component({
	selector: 'series',
	templateUrl: './series.component.html',
	styleUrls: ['./series.component.scss']
})
export class SeriesComponent {
	public series_list: Array<Series> = [
		{ title: "Game of Thrones", value:<SeriesValue> {} },
		{ title: "Lucifer",         value:<SeriesValue> {} },
		{ title: "Friends",         value:<SeriesValue> {} },
		{ title: "The Last Kingdom",value:<SeriesValue> {} },
		{ title: "Dark",            value:<SeriesValue> {} }
	];

  public loading = false;
  public showModal = false;
  public keys;
  public currentSeason;
  public episode;
  public seasons = [];
  public season = 'Chose season';
	public selected_series = 'Chose series';

  constructor(private service: ombdapiService) { }

	setSeries(item:Series): void {
    this.season = 'Chose season';
    const name = this.selected_series = item.title;
    const value = this.series_list.find(element => element.title == name).value;

    if(! Object.keys(value).length) {
      this.service.getSeries(name).subscribe((series: SeriesValue) => {
        this.series_list.find(element => element.title == name).value = series;
        this.setSeasons(Number(series.totalSeasons));
      });
    }
    else {
      this.setSeasons(Number(value.totalSeasons));
    }
  }

  setSeason(season: number) {
    this.season = String(season);
    this.service.getSeason(this.selected_series, this.season).subscribe((season: Season) => {
      this.currentSeason = season;
    });
  }

  setSeasons(season: number) {
    this.seasons = Array(season);
  }

  rowClick(value) {
    this.showModal = ! this.showModal;
    this.loading = true;
    this.service.getEpisode(this.selected_series, this.season, value.dataItem.Episode).subscribe((episode: any) => {
      this.episode = episode;
      this.loading = false;
    });
  }

  getKeys(obj) {
    return Object.keys(obj)
  }
}
