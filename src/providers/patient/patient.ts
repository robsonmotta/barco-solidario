import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Patient } from "../../models/patient";

@Injectable()
export class PatientProvider {
  patientCollectionRef: AngularFirestoreCollection<Patient>;
  private PATH = 'patient/';

  constructor(private afs: AngularFirestore) {
  }

  getAll() {
    this.patientCollectionRef = this.afs.collection(this.PATH, ref => ref.orderBy('nome'));
    return this.patientCollectionRef.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Patient;
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

  save(patient: any) {
    return new Promise((resolve, reject) => {
      if (patient.key) {
        this.patientCollectionRef.doc(patient.key).update({
            key: "",
            responsavel: patient.responsavel,
            equipe: patient.equipe,
            data: patient.data,
            nome: patient.nome,
            idade: patient.idade,
            genero: patient.genero,
            cor: patient.cor,
            profissao: patient.profissao,
            natural_de: patient.natural_de,
            procedente_de: patient.procedente_de,
            queixa: patient.queixa,
            isda: patient.isda,
            pessoal_verminose: patient.pessoal_verminose,
            pessoal_dm: patient.pessoal_dm,
            pessoal_has: patient.pessoal_has,
            pessoal_cancer: patient.pessoal_cancer,
            pessoal_tb: patient.pessoal_tb,
            pessoal_avc: patient.pessoal_avc,
            pessoal_alcool: patient.pessoal_alcool,
            pessoal_cigarro: patient.pessoal_cigarro,
            pessoal_drogas: patient.pessoal_drogas,
            pessoal_alergias: patient.pessoal_alergias,
            pessoal_outros: patient.pessoal_outros,
            pessoal_cirurgias_previas: patient.pessoal_cirurgias_previas,
            familiar_verminose: patient.familiar_verminose,
            familiar_dm: patient.familiar_dm,
            familiar_has: patient.familiar_has,
            familiar_cancer: patient.familiar_cancer,
            familiar_tb: patient.familiar_tb,
            familiar_avc: patient.familiar_avc,
            familiar_alergias: patient.familiar_alergias,
            familiar_outros: patient.familiar_outros,
            exame_fisico_geral_beg: patient.exame_fisico_geral_beg,
            exame_fisico_geral_reg: patient.exame_fisico_geral_reg,
            exame_fisico_geral_meg: patient.exame_fisico_geral_meg,
            exame_fisico_geral_corado: patient.exame_fisico_geral_corado,
            exame_fisico_geral_descorado: patient.exame_fisico_geral_descorado,
            exame_fisico_geral_descorado_qtd: patient.exame_fisico_geral_descorado_qtd,
            exame_fisico_geral_hidratado: patient.exame_fisico_geral_hidratado,
            exame_fisico_geral_desidratado: patient.exame_fisico_geral_desidratado,
            exame_fisico_geral_desidratado_qtd: patient.exame_fisico_geral_desidratado_qtd,
            exame_fisico_geral_eupneico: patient.exame_fisico_geral_eupneico,
            exame_fisico_geral_dispneico: patient.exame_fisico_geral_dispneico,
            exame_fisico_geral_taquipneico: patient.exame_fisico_geral_taquipneico,
            exame_fisico_geral_acianotico: patient.exame_fisico_geral_acianotico,
            exame_fisico_geral_cianose_periferica: patient.exame_fisico_geral_cianose_periferica,
            exame_fisico_geral_cianose_central: patient.exame_fisico_geral_cianose_central,
            exame_fisico_geral_anicterico: patient.exame_fisico_geral_anicterico,
            exame_fisico_geral_icterico: patient.exame_fisico_geral_icterico,
            exame_fisico_geral_icterico_grau: patient.exame_fisico_geral_icterico_grau,
            exame_fisico_geral_afebril: patient.exame_fisico_geral_afebril,
            exame_fisico_geral_febril: patient.exame_fisico_geral_febril,
            exame_fisico_geral_febril_qtd: patient.exame_fisico_geral_febril_qtd,
            exame_fisico_especifico_neuro: patient.exame_fisico_especifico_neuro,
            exame_fisico_especifico_ac: patient.exame_fisico_especifico_ac,
            exame_fisico_especifico_fc: patient.exame_fisico_especifico_fc,
            exame_fisico_especifico_pa: patient.exame_fisico_especifico_pa,
            exame_fisico_especifico_ap: patient.exame_fisico_especifico_ap,
            exame_fisico_especifico_fr: patient.exame_fisico_especifico_fr,
            exame_fisico_especifico_abdomen: patient.exame_fisico_especifico_abdomen,
            exame_fisico_especifico_genitourinario: patient.exame_fisico_especifico_genitourinario,
            exame_fisico_especifico_pele: patient.exame_fisico_especifico_pele,
            conduta: patient.conduta
          })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.patientCollectionRef.add({
            key: "",
            responsavel: patient.responsavel,
            equipe: patient.equipe,
            data: patient.data,
            nome: patient.nome,
            idade: patient.idade,
            genero: patient.genero,
            cor: patient.cor,
            profissao: patient.profissao,
            natural_de: patient.natural_de,
            procedente_de: patient.procedente_de,
            queixa: patient.queixa,
            isda: patient.isda,
            pessoal_verminose: patient.pessoal_verminose,
            pessoal_dm: patient.pessoal_dm,
            pessoal_has: patient.pessoal_has,
            pessoal_cancer: patient.pessoal_cancer,
            pessoal_tb: patient.pessoal_tb,
            pessoal_avc: patient.pessoal_avc,
            pessoal_alcool: patient.pessoal_alcool,
            pessoal_cigarro: patient.pessoal_cigarro,
            pessoal_drogas: patient.pessoal_drogas,
            pessoal_alergias: patient.pessoal_alergias,
            pessoal_outros: patient.pessoal_outros,
            pessoal_cirurgias_previas: patient.pessoal_cirurgias_previas,
            familiar_verminose: patient.familiar_verminose,
            familiar_dm: patient.familiar_dm,
            familiar_has: patient.familiar_has,
            familiar_cancer: patient.familiar_cancer,
            familiar_tb: patient.familiar_tb,
            familiar_avc: patient.familiar_avc,
            familiar_alergias: patient.familiar_alergias,
            familiar_outros: patient.familiar_outros,
            exame_fisico_geral_beg: patient.exame_fisico_geral_beg,
            exame_fisico_geral_reg: patient.exame_fisico_geral_reg,
            exame_fisico_geral_meg: patient.exame_fisico_geral_meg,
            exame_fisico_geral_corado: patient.exame_fisico_geral_corado,
            exame_fisico_geral_descorado: patient.exame_fisico_geral_descorado,
            exame_fisico_geral_descorado_qtd: patient.exame_fisico_geral_descorado_qtd,
            exame_fisico_geral_hidratado: patient.exame_fisico_geral_hidratado,
            exame_fisico_geral_desidratado: patient.exame_fisico_geral_desidratado,
            exame_fisico_geral_desidratado_qtd: patient.exame_fisico_geral_desidratado_qtd,
            exame_fisico_geral_eupneico: patient.exame_fisico_geral_eupneico,
            exame_fisico_geral_dispneico: patient.exame_fisico_geral_dispneico,
            exame_fisico_geral_taquipneico: patient.exame_fisico_geral_taquipneico,
            exame_fisico_geral_acianotico: patient.exame_fisico_geral_acianotico,
            exame_fisico_geral_cianose_periferica: patient.exame_fisico_geral_cianose_periferica,
            exame_fisico_geral_cianose_central: patient.exame_fisico_geral_cianose_central,
            exame_fisico_geral_anicterico: patient.exame_fisico_geral_anicterico,
            exame_fisico_geral_icterico: patient.exame_fisico_geral_icterico,
            exame_fisico_geral_icterico_grau: patient.exame_fisico_geral_icterico_grau,
            exame_fisico_geral_afebril: patient.exame_fisico_geral_afebril,
            exame_fisico_geral_febril: patient.exame_fisico_geral_febril,
            exame_fisico_geral_febril_qtd: patient.exame_fisico_geral_febril_qtd,
            exame_fisico_especifico_neuro: patient.exame_fisico_especifico_neuro,
            exame_fisico_especifico_ac: patient.exame_fisico_especifico_ac,
            exame_fisico_especifico_fc: patient.exame_fisico_especifico_fc,
            exame_fisico_especifico_pa: patient.exame_fisico_especifico_pa,
            exame_fisico_especifico_ap: patient.exame_fisico_especifico_ap,
            exame_fisico_especifico_fr: patient.exame_fisico_especifico_fr,
            exame_fisico_especifico_abdomen: patient.exame_fisico_especifico_abdomen,
            exame_fisico_especifico_genitourinario: patient.exame_fisico_especifico_genitourinario,
            exame_fisico_especifico_pele: patient.exame_fisico_especifico_pele,
            conduta: patient.conduta
          })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.patientCollectionRef.doc(key).delete();
  }
}
