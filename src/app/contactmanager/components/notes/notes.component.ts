import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Note } from '../../models/note';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];
  
  displayedColumns: string[] = ['position', 'title', 'date'];

  @ViewChild(MatSort) sort: MatSort;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource:any;
  constructor() { }

  ngOnInit() {
    debugger;
   // this.dataSource = this.notes;
   this.dataSource = new MatTableDataSource<Note>(this.notes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
