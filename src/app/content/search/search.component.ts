import { Component, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputValue :String ='www';
  @Output() inputEvent = new EventEmitter<String>();

  constructor() { }

  ngOnInit(): void {
  }

  sendInput(){
    
  }

  onKey(event:any) : void {
  this.inputValue = event.target.value;
  console.log(this.inputValue);
  this.inputEvent.emit(this.inputValue);
  console.log(this.inputValue)
  //this.sendInput();

}

  
}
