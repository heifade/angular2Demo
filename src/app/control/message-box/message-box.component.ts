
/*
G.messageBoxComponent.show({
  title:"删除确认",
  message:"是否确定删除？",
  icon: 'question',
  buttons: [{
      title: '确定',
      click: (close) => {
        close();
      }
    }, {
      title: '取消',
      click: (close) => {
        close();
      }
    }]
});



G.messageBoxComponent.showConfirm({message: '是否确认？', onConfirm:(close) => {close();}});
G.messageBoxComponent.showWarn({message: '警告信息！'});
G.messageBoxComponent.showMessage({message: '提示信息！'});
G.messageBoxComponent.showError({message: '错误信息！'});
*/





import { Component, OnInit } from '@angular/core';
import { G } from '../../common/G';

@Component({
  selector: 'message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.less']
})
export class MessageBoxComponent implements OnInit {

  public isShow: boolean;
  public title: string;
  public iconClass: string;
  public message: string;
  public buttons = [];

  constructor() {

  }

  ngOnInit() {
    G.messageBoxComponent = this;
  }

  showMessage({message = '提示信息！', title = '提示' }) {
    this.show({
      title,
      message,
      icon: 'info',
      buttons: [{
        title: '确定',
        click: () => {
          this.hide();
        }
      }]
    });
  }

  showError({message = '错误信息！', title = '错误' }) {
    this.show({
      title,
      message,
      icon: 'error',
      buttons: [{
        title: '确定',
        click: () => {
          this.hide();
        }
      }]
    });
  }

  showWarn({message = '警告信息！', title = '警告' }) {
    this.show({
      title,
      message,
      icon: 'warn',
      buttons: [{
        title: '确定',
        click: () => {
          this.hide();
        }
      }]
    });
  }

  showConfirm({message = '是否确认？', title = '请确认', onConfirm = (close) => { close(); }  }) {
    this.show({
      title,
      message,
      icon: 'question',
      buttons: [{
        title: '确定',
        click: () => {
          onConfirm(() => {
            this.hide();
          });
        }
      }, {
        title: '取消',
        click: () => {
          this.hide();
        }
      }]
    });
  }

  show({message = '', title = '提示', icon = 'info', buttons = [{ title: '确定', click:(close) => { this.hide(); } }]}) {
    this.isShow = true;

    this.title = title;
    this.message = message;

    this.buttons = buttons;

    switch(icon) {
      case 'question':
        this.iconClass = 'glyphicon glyphicon-question-sign';
        break;
      case 'error':
        this.iconClass = 'glyphicon glyphicon-remove-sign';
        break;
      case 'warn':
        this.iconClass = 'glyphicon glyphicon-warning-sign';
        break;
      case 'info':
        this.iconClass = 'glyphicon glyphicon-info-sign';
        break;
    }
  }

  clickButton(button) {
    if(button && button.click) {
      button.click(() => {
        this.hide();
      });
    }
  }

  hide() {
    this.isShow = false;
  }

}
