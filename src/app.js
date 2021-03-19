import { LightningElement } from "lwc";

export default class App extends LightningElement {

  _endIndex = 0;

  _addNextSet() {
    console.log('add next set');
    this._endIndex = this._endIndex + 3;
  }

  get itemToDisplay() {
    return ( this.items.slice(0, this._endIndex) );
  }

  get items() {
    return [
      {
        Id: "1",
        Name: "Item 1",
      },
      {
        Id: "2",
        Name: "Item 2",
      },
      {
        Id: "3",
        Name: "Item 3",
      },
      {
        Id: "4",
        Name: "Item 4",
      },
      {
        Id: "5",
        Name: "Item 5",
      },
      {
        Id: "6",
        Name: "Item 6",
      },
      {
        Id: "7",
        Name: "Item 7",
      },
      {
        Id: "8",
        Name: "Item 8",
      }
    ];
  }
}
