import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character';
import { FetchCharacterService } from '../fetch-character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  @Input() charUrls: string[];
  charList: Character[] = [];

  getChar(url: string) {
    this.fetchCharacterService.getCharData(url).subscribe((data) => {
      this.charList.push(data);
    });
  }

  constructor(private fetchCharacterService: FetchCharacterService) {}

  ngOnInit(): void {
    if (this.charUrls) {
      this.charUrls.map((x) => this.getChar(x));
    }
  }
}
