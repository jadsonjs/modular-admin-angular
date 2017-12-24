import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var Quill: any;



@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    jQuery(".wyswyg").each(function() {

      var $toolbar = jQuery(this).find(".toolbar");
      var $editor =  jQuery(this).find(".editor");


      var editor = new Quill($editor.get(0), {
        theme: 'snow'
      });

      editor.addModule('toolbar', {
        container: $toolbar.get(0)     // Selector for toolbar container
      });



    });


  }

}
