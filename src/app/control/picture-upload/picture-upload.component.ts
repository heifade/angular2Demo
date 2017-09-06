import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Http, Response } from '@angular/http';
import { upload } from "../../common/httpHelper";


@Component({
  selector: 'picture-upload',
  templateUrl: './picture-upload.component.html',
  styleUrls: ['./picture-upload.component.less']
})
export class PictureUploadComponent implements OnInit {

  @Input() public label: string; //标题文字
  @Input() controlName: string;
  @Input() form: FormGroup;

  // public fileValue: string;

  private formOfFile: any;
  private fileInput: any;

  private pictureName: string;
  private pictureFullName: string;

  public noPicture = 'assets/img/noPicture.png';


  constructor(public http: Http, public element: ElementRef) {
    // this.fileValue = "";
  }

  onUpload($event) {
    this.fileInput[0].click();
  }

  fileChange($event) {
    let formData = new FormData( this.formOfFile[0] );
    let url = '/api/Image/UserImage';
    
    upload(this.http, url, formData)
      .then((res: Response) => {
        let data = res.json();
        this.pictureName = data.ImageName;
        this.pictureFullName = data.ImageFullName;
      })
  }

  deletePicture() {
    this.pictureName = null;
    this.pictureFullName = '';
    this.fileInput[0].value = '';
  }

  ngOnInit() {
    this.formOfFile = this.element.nativeElement.getElementsByClassName('formOfFile');
    this.fileInput = this.element.nativeElement.getElementsByClassName('file');
  }

}
