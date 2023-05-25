import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import db from "../../config/firebase";

class Model {
  table: string;
  data: any;
  old: any;
  _save: any;
  _delete: any;
  _update: any;

  constructor(table: string, data: any, extend: any = {}) {
    this.table = table;
    this.data = data;
    this.old = data;

    if (extend._save) {
      this._save = extend._save;
    }
    if (extend._update) {
      this._update = extend._update;
    }
    if (extend._delete) {
      this._delete = extend._delete;
    }
  }

  save = async () => {
    if (this._save != undefined) {
      try {
        await this._save();
      } catch (e) {}
    }

    return addDoc(collection(db, this.table), {
      ...this.data,
      created_at: Date.now(),
      updated_at: Date.now(),
      deleted_at: null,
    }).then((doc: any) => {
      this.old = doc;
      this.data.id = doc.id;
    });
  };

  update = async () => {
    if (this._update != undefined) {
      try {
        await this._update();
      } catch (e) {}
    }
    return updateDoc(doc(db, this.table, this.data.id), {
      ...this.data,
      updated_at: Date.now(),
    });
  };

  delete = async () => {
    if (this._delete != undefined) {
      try {
        await this._delete();
      } catch (e) {}
    }
    this.data.deleted_at = Date.now();
    this.update();
  };
}

export default Model;
