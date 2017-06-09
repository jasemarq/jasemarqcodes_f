import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  providers: [AuthService],
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit 
{

projects = Array<Object>();

  constructor(
  	private authService : AuthService, private router : Router) 
  	{
  		
  	}

  ngOnInit() 
  {
  	this.authService.getProjects().subscribe(data => 
  		this.projects = data.projects);

  }

}
