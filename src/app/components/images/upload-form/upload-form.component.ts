import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthUserService } from '../../user/auth-user.service';
import { AuthService } from '../../user/auth.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  user: any

  constructor(
    public userService: AuthService, 
    public authService :AuthUserService, 
    private act: ActivatedRoute){}

  ngOnInit(): void {
    const id_uid = this.act.snapshot.paramMap.get('id_uid')

    this.userService.getUserListId(id_uid).subscribe((doc) => {
        if(doc.payload.exists) {
          this.user = doc.payload.data()
        }else {
          console.log("erro em achar os dados por meio do usuário")
        }

      })

  }

  isHovering: boolean = false;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }
  }

}
