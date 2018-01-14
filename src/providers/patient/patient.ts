import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class PatientProvider {
  private PATH = 'patient/';

  constructor(private db: AngularFireDatabase) {
  }

  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('name'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }

  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(patient: any) {
    return new Promise((resolve, reject) => {
      if (patient.key) {
        this.db.list(this.PATH)
          .update(patient.key, {
            responsible: patient.responsible,
            responsible_team: patient.responsible_team,
            date: patient.date,
            name: patient.name,
            age: patient.age,
            gender: patient.gender,
            skin_color: patient.skin_color,
            occupation: patient.occupation,
            born_at: patient.born_at,
            came_from: patient.came_from,
            complaint: patient.complaint,
            isda: patient.isda,
            personal_worm_infestation: patient.personal_worm_infestation,
            personal_dm: patient.personal_dm,
            personal_sah: patient.personal_sah,
            personal_cancer: patient.personal_cancer,
            personal_tuberculosis: patient.personal_tuberculosis,
            personal_stroke: patient.personal_stroke,
            personal_alcohol: patient.personal_alcohol,
            personal_cigarette: patient.personal_cigarette,
            personal_drug: patient.personal_drug,
            personal_allergy: patient.personal_allergy,
            personal_other: patient.personal_other,
            personal_previous_surgery: patient.personal_previous_surgery,
            family_worm_infestation: patient.family_worm_infestation,
            family_dm: patient.family_dm,
            family_sah: patient.family_sah,
            family_cancer: patient.family_cancer,
            family_tuberculosis: patient.family_tuberculosis,
            family_stroke: patient.family_stroke,
            family_allergy: patient.family_allergy,
            family_other: patient.family_other,
            exam_general_beg: patient.exam_general_beg,
            exam_general_reg: patient.exam_general_reg,
            exam_general_meg: patient.exam_general_meg,
            exam_general_corado: patient.exam_general_corado,
            exam_general_descorado: patient.exam_general_descorado,
            exam_general_descorado_qtd: patient.exam_general_descorado_qtd,
            exam_general_hidratado: patient.exam_general_hidratado,
            exam_general_hidratado_qtd: patient.exam_general_hidratado_qtd,
            exam_general_eupneico: patient.exam_general_eupneico,
            exam_general_dispneico: patient.exam_general_dispneico,
            exam_general_taquipneico: patient.exam_general_taquipneico,
            exam_general_acianotico: patient.exam_general_acianotico,
            exam_general_cianose_periferica: patient.exam_general_cianose_periferica,
            exam_general_cianose_central: patient.exam_general_cianose_central,
            exam_general_anicterico: patient.exam_general_anicterico,
            exam_general_icterico: patient.exam_general_icterico,
            exam_general_icterico_grau: patient.exam_general_icterico_grau,
            exam_general_afebril: patient.exam_general_afebril,
            exam_general_febril: patient.exam_general_febril,
            exam_general_febril_qtd: patient.exam_general_febril_qtd,
            exam_specific_neuro: patient.exam_specific_neuro,
            exam_specific_ac: patient.exam_specific_ac,
            exam_specific_fc: patient.exam_specific_fc,
            exam_specific_pa: patient.exam_specific_pa,
            exam_specific_ap: patient.exam_specific_ap,
            exam_specific_fr: patient.exam_specific_fr,
            exam_specific_abdomen: patient.exam_specific_abdomen,
            exam_specific_genitourinario: patient.exam_specific_genitourinario,
            exam_specific_pele: patient.exam_specific_pele,
            conduta: patient.conduta
          })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({
            responsible: patient.responsible,
            responsible_team: patient.responsible_team,
            date: patient.date,
            name: patient.name,
            age: patient.age,
            gender: patient.gender,
            skin_color: patient.skin_color,
            occupation: patient.occupation,
            born_at: patient.born_at,
            came_from: patient.came_from,
            complaint: patient.complaint,
            isda: patient.isda,
            personal_worm_infestation: patient.personal_worm_infestation,
            personal_dm: patient.personal_dm,
            personal_sah: patient.personal_sah,
            personal_cancer: patient.personal_cancer,
            personal_tuberculosis: patient.personal_tuberculosis,
            personal_stroke: patient.personal_stroke,
            personal_alcohol: patient.personal_alcohol,
            personal_cigarette: patient.personal_cigarette,
            personal_drug: patient.personal_drug,
            personal_allergy: patient.personal_allergy,
            personal_other: patient.personal_other,
            personal_previous_surgery: patient.personal_previous_surgery,
            family_worm_infestation: patient.family_worm_infestation,
            family_dm: patient.family_dm,
            family_sah: patient.family_sah,
            family_cancer: patient.family_cancer,
            family_tuberculosis: patient.family_tuberculosis,
            family_stroke: patient.family_stroke,
            family_allergy: patient.family_allergy,
            family_other: patient.family_other,
            exam_general_beg: patient.exam_general_beg,
            exam_general_reg: patient.exam_general_reg,
            exam_general_meg: patient.exam_general_meg,
            exam_general_corado: patient.exam_general_corado,
            exam_general_descorado: patient.exam_general_descorado,
            exam_general_descorado_qtd: patient.exam_general_descorado_qtd,
            exam_general_hidratado: patient.exam_general_hidratado,
            exam_general_hidratado_qtd: patient.exam_general_hidratado_qtd,
            exam_general_eupneico: patient.exam_general_eupneico,
            exam_general_dispneico: patient.exam_general_dispneico,
            exam_general_taquipneico: patient.exam_general_taquipneico,
            exam_general_acianotico: patient.exam_general_acianotico,
            exam_general_cianose_periferica: patient.exam_general_cianose_periferica,
            exam_general_cianose_central: patient.exam_general_cianose_central,
            exam_general_anicterico: patient.exam_general_anicterico,
            exam_general_icterico: patient.exam_general_icterico,
            exam_general_icterico_grau: patient.exam_general_icterico_grau,
            exam_general_afebril: patient.exam_general_afebril,
            exam_general_febril: patient.exam_general_febril,
            exam_general_febril_qtd: patient.exam_general_febril_qtd,
            exam_specific_neuro: patient.exam_specific_neuro,
            exam_specific_ac: patient.exam_specific_ac,
            exam_specific_fc: patient.exam_specific_fc,
            exam_specific_pa: patient.exam_specific_pa,
            exam_specific_ap: patient.exam_specific_ap,
            exam_specific_fr: patient.exam_specific_fr,
            exam_specific_abdomen: patient.exam_specific_abdomen,
            exam_specific_genitourinario: patient.exam_specific_genitourinario,
            exam_specific_pele: patient.exam_specific_pele,
            conduta: patient.conduta
          })
          .then(() => resolve());
      }
    })
  }

  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
