import { Component, OnInit, ViewChild } from '@angular/core';
import {MessagesService} from '../../services/messages.service'
import {AuthService} from './../../services/auth.service'
import {AutosizeModule} from 'ngx-autosize'
import { IonContent } from '@ionic/angular';
import {ToastService} from './../../services/toast.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  messages: any;
filterMessages: any;
currentUserName: string;
UserData:any;
newMsg:string;

public PostData = {
  MessageTo:'',
  SenderName:'',
  MessageFrom:'',
  MessageContent:'',
  Notes:'From Phone'
 
};
@ViewChild(IonContent) content: IonContent;

  constructor(public api:MessagesService, private authService: AuthService, private toastService: ToastService) { }

  ngOnInit() {
    
    this.authService.userData$.subscribe((res:any) => {
      this.UserData = res;
      console.log("meesage userinfo", res)
      this.currentUserName = res.UserName + "";   

      console.log("Message From: ",this.currentUserName);
     this.getData(res.UserName);      
      this.PostData.MessageTo = 'BrightCare';
      this.PostData.SenderName =res.FirstName;
      this.PostData.MessageFrom =res.UserName;
     
    })
   

  }

  getData(user: string){
    
     this.api.getData(user)
    .subscribe(res => {
      console.log(res);
      this.messages = res;
      this.filterMessages= res;
      console.log("Message List: " + this.messages);
    }, err=> {
      console.log(err);
  
    });
  }

 

  sendMessage(){
    this.messages.push({
      SenderName:this.currentUserName,
      CreatedDate: new Date().getTime(),
      MessageContent: this.newMsg
    });

    this.PostData.MessageContent = this.newMsg;
    
    this.newMsg='';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
    
   
    this.postMessage();
    console.log("Current User: ", this.UserData.UserName);
    this.getData(this.UserData.UserName + "");
  }

  
  postMessage(){

    console.log("messge content: ",this.PostData);

        this.authService.sendMessage(this.PostData).subscribe( (res:any) => {
        if (res) {
          console.log("message sent",res)
          this.toastService.presentToast("Message sent!");
       
        }
        else{

          console.log("Error", res)
        }

      },
      
        (error:any) => {
          console.log("error server", error.error);
          this.toastService.presentToast("Error sending message, please try again!");
        }
      
      
      )

    }
  
    
   
}



  


