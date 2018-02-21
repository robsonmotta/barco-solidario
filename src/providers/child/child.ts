import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Child } from "../../models/child";

@Injectable()
export class ChildProvider {
  childCollectionRef: AngularFirestoreCollection<Child>;
  private PATH = 'child/';

  constructor(private afs: AngularFirestore) {
  }

  getAll() {
    this.childCollectionRef = this.afs.collection(this.PATH, ref => ref.orderBy('nome'));
    return this.childCollectionRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Child;
        data.key = a.payload.doc.id;
        return data;
      });
    });
  }

//  get(key: string) {
//    return this.afs.object(this.PATH + key).snapshotChanges()
//      .map(c => {
//        return { key: c.key, ...c.payload.val() };
//      });
//  }

  save(child: any) {
    return new Promise((resolve, reject) => {
      if (child.key) {
        this.childCollectionRef.doc(child.key).update({
            key: "",
            responsavel: child.responsavel,
            equipe: child.equipe,
            data: child.data,
            nome: child.nome,
            idade: child.idade,
            genero: child.genero,
            natural_de: child.natural_de,
            procedente_de: child.procedente_de,
            escola: child.escola,
            cor_preferida: child.cor_preferida,
          })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.childCollectionRef.add({
            key: "",
            responsavel: child.responsavel,
            equipe: child.equipe,
            data: child.data,
            nome: child.nome,
            idade: child.idade,
            genero: child.genero,
            natural_de: child.natural_de,
            procedente_de: child.procedente_de,
            escola: child.escola,
            cor_preferida: child.cor_preferida,
          })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.childCollectionRef.doc(key).delete();
  }
}
