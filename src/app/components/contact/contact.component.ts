import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	first: String;
	last: String;
	email: String;
	message: String;

  constructor(
  	private validateService: ValidateService, 
  	private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onContactSubmit()
  {
  	const user =
  	{
  		first: this.first,
  		last: this.last,
  		email: this.email,
  		message: this.message
  	}

  // Required Fields
  if(!this.validateService.validateContact(user))
  {
  	this.flashMessage.show('please fill in all fields', { cssClass: 'alert-danger', timeout: 3000});
  	return false;
  }

  // Validate Email
  if(!this.validateService.validateEmail(user.email))
  {
  	this.flashMessage.show('please use a valid email', { cssClass: 'alert-danger', timeout: 3000});
  	return false;
  }

  }
}
