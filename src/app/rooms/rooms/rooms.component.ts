import { Component, Output, Input } from '@angular/core';

@Component({
  selector: 'app-rooms-component',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  /** Rooms descriptions */
  @Output()
  rooms: Room[] = [new Room()];

  /** Max count of adults or childs in one room */
  @Input()
  maxAdultsOrChildCount = 12;

  /** Max age of child. Older person is adult */
  @Input()
  maxChildAge = 17;

  /** Max rooms count */
  @Input()
  maxRoomsCount = 3;

  /** Generates empty array with @itemsCount items */
  emptyArray(itemsCount): any[] {
    return new Array(itemsCount);
  }

  addRoom() {
    this.rooms.push(new Room());
  }

  removeRoom(index) {
    this.rooms.splice(index, 1);
  }

  childsCountChanged(roomIndex, newValue) {
    // adjust array of child ages for room according to childs count
    const array = this.rooms[roomIndex].childsAges;
    array && array.length
      ? array.length > newValue
        ? array.splice(newValue)
        : this.rooms[roomIndex].childsAges = array.concat(new Array(newValue - array.length))
      : this.rooms[roomIndex].childsAges = new Array(newValue);
  }
}

class Room {
  adults = 2;
  childs = 0;
  childsAges: number[];
}
