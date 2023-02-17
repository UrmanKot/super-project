import {Injectable} from '@angular/core';
import {Nomenclature, NomenclatureImage} from '@shared/models/nomenclature';
import {BehaviorSubject} from 'rxjs';
import {NomenclatureService} from '@shared/services/nomenclature.service';
import {tap} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {AlbumComponent} from '@shared/modals/album/album.component';

export class AlbumItem {
  nomenclature: Nomenclature;
  image: string;
  numeric: number;
}

class NewAlbumItem {
  nomenclature: Nomenclature;
  images: NomenclatureImage[];
}

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  album: AlbumItem[];

  constructor(
    private readonly nomenclatureService: NomenclatureService,
    private readonly dialog: MatDialog,
  ) {
  }

  getNomenclaturesImages(nomenclatures: Nomenclature[]): void {
    this.loading$.next(true);

    const newAlbum: NewAlbumItem[] = [];
    nomenclatures.forEach(n => newAlbum.push({
      nomenclature: n,
      images: []
    }));

    this.nomenclatureService.getNomenclaturesImages(nomenclatures.map(n => n.id)).pipe(
      tap(images => newAlbum.forEach((item, i) => item.images = images[i])),
      tap(() => this.prepareForShow(newAlbum)),
      tap(() => this.loading$.next(false)),
      tap(() => this.showAlbumModal())
    ).subscribe();
  }

  showAlbumModal() {
    return this.dialog
      .open<AlbumComponent>(AlbumComponent, {
        width: '40rem',
        height: 'auto',
        data: this.album,
        autoFocus: false,
        enterAnimationDuration: '250ms'
      })
      .afterClosed();
  }

  prepareForShow(newAlbum: NewAlbumItem[]): void {
    this.album = [];

    newAlbum.forEach(item => {
      if (item.images.length === 0) {
        this.album.push({
          nomenclature: item.nomenclature,
          image: null,
          numeric: null,
        });
      } else {
        item.images.forEach((img, idx) => {
          this.album.push({
            nomenclature: item.nomenclature,
            image: <string>img.image,
            numeric: idx + 1
          });
        });
      }
    });
  }
}
