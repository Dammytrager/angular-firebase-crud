import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable()

export class FirebaseService {
    constructor (private _storage: AngularFireStorage) {
    }

    uploadFile(file) {
        const fileRef = this._storage.ref('upload.jpg');
        return fileRef.put(file)
    }

    getFileUrl() {
        const fileRef =  this._storage.ref('upload.jpg');
        return fileRef.getDownloadURL().toPromise();
    }

    deleteFile() {
        const fileRef = this._storage.ref('upload.jpg');
        return fileRef.delete().toPromise();
    }

    UpdateFile(file) {
        return this.deleteFile().then((data) => {
            this.uploadFile(file);
        });
    }
}
