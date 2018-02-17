import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { PatientOdonto } from "../../models/patient-odonto";

@Injectable()
export class PatientOdontoProvider {
  patientOdontoCollectionRef: AngularFirestoreCollection<PatientOdonto>;
  private PATH = 'patientOdonto/';

  constructor(private afs: AngularFirestore) {
  }

  getAll() {
    this.patientOdontoCollectionRef = this.afs.collection(this.PATH, ref => ref.orderBy('nome'));
    return this.patientOdontoCollectionRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as PatientOdonto;
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

  save(patientOdonto: any) {
    return new Promise((resolve, reject) => {
      if (patientOdonto.key) {
        this.patientOdontoCollectionRef.doc(patientOdonto.key).update({
            key: "",
            responsavel: patientOdonto.responsavel,
            equipe: patientOdonto.equipe,
            data: patientOdonto.data,
            nome: patientOdonto.nome,
            idade: patientOdonto.idade,
            genero: patientOdonto.genero,
            cor: patientOdonto.cor,
            profissao: patientOdonto.profissao,
            natural_de: patientOdonto.natural_de,
            procedente_de: patientOdonto.procedente_de,
            tratamento_medico: patientOdonto.tratamento_medico,
            tomando_medicamento: patientOdonto.tomando_medicamento,
            teve_doenca: patientOdonto.teve_doenca,
            doenca_coracao: patientOdonto.doenca_coracao,
            diabetico: patientOdonto.diabetico,
            hipertenso: patientOdonto.hipertenso,
            hemofilico: patientOdonto.hemofilico,
            pes_incham: patientOdonto.pes_incham,
            tosse_persistente: patientOdonto.tosse_persistente,
            alergia: patientOdonto.alergia,
            demora_cicatrizar: patientOdonto.demora_cicatrizar,
            anestesia_tratamento_odontologico: patientOdonto.anestesia_tratamento_odontologico,
            teve_hemorragia: patientOdonto.teve_hemorragia,
            tem_vicio: patientOdonto.tem_vicio,
            esta_gravida: patientOdonto.esta_gravida,
            sofre_epilepsia: patientOdonto.sofre_epilepsia,
            declaracao: patientOdonto.declaracao,
            situacao_55: patientOdonto.situacao_55,
            situacao_54: patientOdonto.situacao_54,
            situacao_53: patientOdonto.situacao_53,
            situacao_52: patientOdonto.situacao_52,
            situacao_51: patientOdonto.situacao_51,
            situacao_61: patientOdonto.situacao_61,
            situacao_62: patientOdonto.situacao_62,
            situacao_63: patientOdonto.situacao_63,
            situacao_64: patientOdonto.situacao_64,
            situacao_65: patientOdonto.situacao_65,
            situacao_18: patientOdonto.situacao_18,
            situacao_17: patientOdonto.situacao_17,
            situacao_16: patientOdonto.situacao_16,
            situacao_15: patientOdonto.situacao_15,
            situacao_14: patientOdonto.situacao_14,
            situacao_13: patientOdonto.situacao_13,
            situacao_12: patientOdonto.situacao_12,
            situacao_11: patientOdonto.situacao_11,
            situacao_21: patientOdonto.situacao_21,
            situacao_22: patientOdonto.situacao_22,
            situacao_23: patientOdonto.situacao_23,
            situacao_24: patientOdonto.situacao_24,
            situacao_25: patientOdonto.situacao_25,
            situacao_26: patientOdonto.situacao_26,
            situacao_27: patientOdonto.situacao_27,
            situacao_28: patientOdonto.situacao_28,
            situacao_48: patientOdonto.situacao_48,
            situacao_47: patientOdonto.situacao_47,
            situacao_46: patientOdonto.situacao_46,
            situacao_45: patientOdonto.situacao_45,
            situacao_44: patientOdonto.situacao_44,
            situacao_43: patientOdonto.situacao_43,
            situacao_42: patientOdonto.situacao_42,
            situacao_41: patientOdonto.situacao_41,
            situacao_31: patientOdonto.situacao_31,
            situacao_32: patientOdonto.situacao_32,
            situacao_33: patientOdonto.situacao_33,
            situacao_34: patientOdonto.situacao_34,
            situacao_35: patientOdonto.situacao_35,
            situacao_36: patientOdonto.situacao_36,
            situacao_37: patientOdonto.situacao_37,
            situacao_38: patientOdonto.situacao_38,
            situacao_85: patientOdonto.situacao_85,
            situacao_84: patientOdonto.situacao_84,
            situacao_83: patientOdonto.situacao_83,
            situacao_82: patientOdonto.situacao_82,
            situacao_81: patientOdonto.situacao_81,
            situacao_71: patientOdonto.situacao_71,
            situacao_72: patientOdonto.situacao_72,
            situacao_73: patientOdonto.situacao_73,
            situacao_74: patientOdonto.situacao_74,
            situacao_75: patientOdonto.situacao_75,
          })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.patientOdontoCollectionRef.add({
            key: "",
            responsavel: patientOdonto.responsavel,
            equipe: patientOdonto.equipe,
            data: patientOdonto.data,
            nome: patientOdonto.nome,
            idade: patientOdonto.idade,
            genero: patientOdonto.genero,
            cor: patientOdonto.cor,
            profissao: patientOdonto.profissao,
            natural_de: patientOdonto.natural_de,
            procedente_de: patientOdonto.procedente_de,
            tratamento_medico: patientOdonto.tratamento_medico,
            tomando_medicamento: patientOdonto.tomando_medicamento,
            teve_doenca: patientOdonto.teve_doenca,
            doenca_coracao: patientOdonto.doenca_coracao,
            diabetico: patientOdonto.diabetico,
            hipertenso: patientOdonto.hipertenso,
            hemofilico: patientOdonto.hemofilico,
            pes_incham: patientOdonto.pes_incham,
            tosse_persistente: patientOdonto.tosse_persistente,
            alergia: patientOdonto.alergia,
            demora_cicatrizar: patientOdonto.demora_cicatrizar,
            anestesia_tratamento_odontologico: patientOdonto.anestesia_tratamento_odontologico,
            teve_hemorragia: patientOdonto.teve_hemorragia,
            tem_vicio: patientOdonto.tem_vicio,
            esta_gravida: patientOdonto.esta_gravida,
            sofre_epilepsia: patientOdonto.sofre_epilepsia,
            declaracao: patientOdonto.declaracao,
            situacao_55: patientOdonto.situacao_55,
            situacao_54: patientOdonto.situacao_54,
            situacao_53: patientOdonto.situacao_53,
            situacao_52: patientOdonto.situacao_52,
            situacao_51: patientOdonto.situacao_51,
            situacao_61: patientOdonto.situacao_61,
            situacao_62: patientOdonto.situacao_62,
            situacao_63: patientOdonto.situacao_63,
            situacao_64: patientOdonto.situacao_64,
            situacao_65: patientOdonto.situacao_65,
            situacao_18: patientOdonto.situacao_18,
            situacao_17: patientOdonto.situacao_17,
            situacao_16: patientOdonto.situacao_16,
            situacao_15: patientOdonto.situacao_15,
            situacao_14: patientOdonto.situacao_14,
            situacao_13: patientOdonto.situacao_13,
            situacao_12: patientOdonto.situacao_12,
            situacao_11: patientOdonto.situacao_11,
            situacao_21: patientOdonto.situacao_21,
            situacao_22: patientOdonto.situacao_22,
            situacao_23: patientOdonto.situacao_23,
            situacao_24: patientOdonto.situacao_24,
            situacao_25: patientOdonto.situacao_25,
            situacao_26: patientOdonto.situacao_26,
            situacao_27: patientOdonto.situacao_27,
            situacao_28: patientOdonto.situacao_28,
            situacao_48: patientOdonto.situacao_48,
            situacao_47: patientOdonto.situacao_47,
            situacao_46: patientOdonto.situacao_46,
            situacao_45: patientOdonto.situacao_45,
            situacao_44: patientOdonto.situacao_44,
            situacao_43: patientOdonto.situacao_43,
            situacao_42: patientOdonto.situacao_42,
            situacao_41: patientOdonto.situacao_41,
            situacao_31: patientOdonto.situacao_31,
            situacao_32: patientOdonto.situacao_32,
            situacao_33: patientOdonto.situacao_33,
            situacao_34: patientOdonto.situacao_34,
            situacao_35: patientOdonto.situacao_35,
            situacao_36: patientOdonto.situacao_36,
            situacao_37: patientOdonto.situacao_37,
            situacao_38: patientOdonto.situacao_38,
            situacao_85: patientOdonto.situacao_85,
            situacao_84: patientOdonto.situacao_84,
            situacao_83: patientOdonto.situacao_83,
            situacao_82: patientOdonto.situacao_82,
            situacao_81: patientOdonto.situacao_81,
            situacao_71: patientOdonto.situacao_71,
            situacao_72: patientOdonto.situacao_72,
            situacao_73: patientOdonto.situacao_73,
            situacao_74: patientOdonto.situacao_74,
            situacao_75: patientOdonto.situacao_75,
          })
          .then(() => resolve());
      }
    })
  }

//  save_old(patientOdonto: any) {
//    return new Promise((resolve, reject) => {
//      if (patientOdonto.key) {
//        this.db.list(this.PATH)
//          .update(patientOdonto.key, {
//            responsavel: patientOdonto.responsavel,
//            equipe: patientOdonto.equipe,
//            data: patientOdonto.data,
//            nome: patientOdonto.nome,
//            tratamento: patientOdonto.tratamento,
//            numero_ficha: patientOdonto.numero_ficha,
//            idade: patientOdonto.idade,
//            genero: patientOdonto.genero,
//            etinia: patientOdonto.etinia,
//            atendimento: patientOdonto.atendimento,
//            encaminhamento: patientOdonto.encaminhamento,
//            comunidade_escola: patientOdonto.comunidade_escola,
//            sala: patientOdonto.sala,
//            periodo: patientOdonto.periodo,
//            autorizacao: patientOdonto.autorizacao,
//            superior_18: patientOdonto.superior_18,
//            superior_17: patientOdonto.superior_17,
//            inferior_18: patientOdonto.inferior_18,
//            inferior_17: patientOdonto.inferior_17,
//          })
//          .then(() => resolve())
//          .catch((e) => reject(e));
//      } else {
//        this.db.list(this.PATH)
//          .push({
//            responsavel: patientOdonto.responsavel,
//            equipe: patientOdonto.equipe,
//            data: patientOdonto.data,
//            nome: patientOdonto.nome,
//            tratamento: patientOdonto.tratamento,
//            numero_ficha: patientOdonto.numero_ficha,
//            idade: patientOdonto.idade,
//            genero: patientOdonto.genero,
//            etinia: patientOdonto.etinia,
//            atendimento: patientOdonto.atendimento,
//            encaminhamento: patientOdonto.encaminhamento,
//            comunidade_escola: patientOdonto.comunidade_escola,
//            sala: patientOdonto.sala,
//            periodo: patientOdonto.periodo,
//            autorizacao: patientOdonto.autorizacao,
//            superior_18: patientOdonto.superior_18,
//            superior_17: patientOdonto.superior_17,
//            inferior_18: patientOdonto.inferior_18,
//            inferior_17: patientOdonto.inferior_17,
//          })
//          .then(() => resolve());
//      }
//    })
//  }

  remove(key: string) {
    return this.patientOdontoCollectionRef.doc(key).delete();
  }
}
