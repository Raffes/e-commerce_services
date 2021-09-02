import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css']
})
export class UploadDetailsComponent implements OnInit {
  @Input()
  file!: File;

  selectedFile!: File;

  task!: AngularFireUploadTask;

  percentage!: Observable<any>;
  snapshot!: Observable<any>;
  downloadURL!: string;
  id_uid: any
  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private act: ActivatedRoute) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    this.id_uid = this.act.snapshot.paramMap.get('id_uid')

    // The storage path
    const path = `test/${Date.now()}_${this.file.name}`;


    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();

        this.db.collection("user-colletion").doc(this.id_uid).collection("files-products").add( { downloadURL: this.downloadURL, path });
        // this.db.collection('files').add( { downloadURL: this.downloadURL, path });
      }),
    );
  }

  remove(ref: any){

    const refUrl = this.storage.refFromURL(ref);
    refUrl.delete()
    

  }

  isActive(snapshot: any) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
