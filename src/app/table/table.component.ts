import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  dataSource: any[] = [];
  id: number = 1;

  constructor() {
  }

  buildData(count: number = 1000) {
    var adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
    var colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
    var nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
    var data = [];
    for (var i = 0; i < count; i++) {
      data.push({ id: this.id, label: adjectives[this.random(adjectives.length)] + " " + colours[this.random(colours.length)] + " " + nouns[this.random(nouns.length)] });
      this.id++;
    }
    return data;
  }

  random(max: number) {
    return Math.round(Math.random() * 1000) % max;
  }

  create(num: number) {
    this.id = 1;
    this.dataSource = this.buildData(num);
  }

  add() {
    this.dataSource = this.dataSource.concat(this.buildData(1000))
  }

  clear() {
    this.dataSource = [];
  }
}
