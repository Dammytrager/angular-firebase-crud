import {Injectable} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {CHANGE_LOADING, CHANGE_USERS, REPLACE_USERS} from '../state/actions';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../state/interface';

@Injectable()

export class FirebaseService {
    constructor(
        private _storage: AngularFireStorage,
        private _db: AngularFirestore,
        private _ngRedux: NgRedux<AppState>) {
    }

    getUsers() {
        return this._db.collection('users').get().toPromise().then((snapshot) => {
            const users = [];
            snapshot.docs.forEach((doc) => {
                users.push({...{id: doc.id}, ...doc.data()});
            });
            this._ngRedux.dispatch({type: REPLACE_USERS, users: users});
            this._ngRedux.dispatch({type: CHANGE_LOADING, loading: false});
        });
    }

    filter(by, value, condition) {
        const collection = this._db.collection('users',
                ref => ref.where(by, condition, value));
        return collection.get().toPromise();
    }

    uploadFile(file, ref) {
        const fileRef = this._storage.ref(`${ref}.jpg`);
        return fileRef.put(file);
    }

    getFileUrl(id) {
        const fileRef =  this._storage.ref(`${id}.jpg`);
        return fileRef.getDownloadURL().toPromise();
    }

    deleteFile(id) {
        const fileRef = this._storage.ref(`${id}.jpg`);
        return fileRef.delete().toPromise();
    }

    CreateUser(data) {
        return this._db.collection('users').add(data);
    }

    updateAvatar(url, id) {
        return this._db.collection('users').doc(id).update({avatar: url});
    }

    updateUser(data, id) {
        return this._db.collection('users').doc(id).update(data);
    }

    deleteUser(id) {
        return this._db.collection('users').doc(id).delete();
    }
}
