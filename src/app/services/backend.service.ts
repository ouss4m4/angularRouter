import { Injectable } from '@angular/core';
import products from './listPoduit';
@Injectable()
export class ServiceLayer {
  private _randomRegistery = {};
  private _callonce = true;
  private _getRandomNumber(zeros) {
    return (
      Math.floor(
        Math.random() *
          (1000 * Math.pow(10, zeros) - 100 * Math.pow(10, zeros)) +
          100
      ) / 100
    );
  }

  private _getRandomRegisteryEntry(id, zeros = 6) {
    if (!this._randomRegistery.hasOwnProperty(id)) {
      const randomNumber = this._getRandomNumber(zeros);
      this._randomRegistery[id] = randomNumber;
    }
    return this._randomRegistery[id];
  }

  public chaCurrentYearByMonth() {
    return [
      { name: 'Jan', value: this._getRandomRegisteryEntry('id1', 1) },
      { name: 'Fev', value: this._getRandomRegisteryEntry('id2', 1) },
      { name: 'Mar', value: this._getRandomRegisteryEntry('id3', 1) },
      { name: 'Avr', value: this._getRandomRegisteryEntry('id4', 1) },
      { name: 'Mai', value: this._getRandomRegisteryEntry('id5', 1) },
      { name: 'Jun', value: this._getRandomRegisteryEntry('id6', 1) },
      { name: 'Jui', value: this._getRandomRegisteryEntry('id7', 1) }
    ];
  }
  public chaLastYearByMonth() {
    return [
      { name: 'Jan', value: this._getRandomRegisteryEntry('id8', 1) },
      { name: 'Fev', value: this._getRandomRegisteryEntry('id9', 1) },
      { name: 'Mar', value: this._getRandomRegisteryEntry('id10', 1) },
      { name: 'Avr', value: this._getRandomRegisteryEntry('id11', 1) },
      { name: 'Mai', value: this._getRandomRegisteryEntry('id12', 1) },
      { name: 'Jun', value: this._getRandomRegisteryEntry('id13', 1) },
      { name: 'Jui', value: this._getRandomRegisteryEntry('id14', 1) },
      { name: 'Aou', value: this._getRandomRegisteryEntry('id15', 1) },
      { name: 'Sep', value: this._getRandomRegisteryEntry('id16', 1) },
      { name: 'Oct', value: this._getRandomRegisteryEntry('id17', 1) },
      { name: 'Nov', value: this._getRandomRegisteryEntry('id18', 1) },
      { name: 'Dev', value: this._getRandomRegisteryEntry('id19', 1) }
    ];
  }
  public chaCurrentYear() {
    return this._getRandomRegisteryEntry('id20');
  }
  public chaLastYear() {
    return this._getRandomRegisteryEntry('id21');
  }
  public evolution() {
    return this._getRandomRegisteryEntry('id22', 1);
  }
  public dettes() {
    return this._getRandomRegisteryEntry('id23');
  }
  public etat() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          soldeAnterieur: 0.0,
          montantDu: 3288490.12,
          reglement: 0.0,
          restePayer: 3288490.12,
          montantBrut: 3502407.48,
          resteBrut: 3502407.48
        });
      }, 1000);
    });
  }
  public factures(date1, date2): Promise<any> {
    return new Promise((resolve, reject) => {
      if (Math.random() > 2) {
        reject('Some random error');
      } else {
        setTimeout(() => {
          resolve([
            {
              id: '1',
              DocNum: '180134503',
              total: this._getRandomRegisteryEntry('id24', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '2',
              DocNum: '180134505',
              total: this._getRandomRegisteryEntry('id25', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '3',
              DocNum: '180134508',
              total: this._getRandomRegisteryEntry('id26', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '4',
              DocNum: '180134509',
              total: this._getRandomRegisteryEntry('id27', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '5',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id28', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '6',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id29', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '7',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id30', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '8',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id31', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '9',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id32', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '10',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id33', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '11',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id34', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '12',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id35', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '13',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id36', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '14',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id37', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '15',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id38', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '16',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id39', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '17',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id40', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '18',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id41', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '19',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id42', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '20',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id43', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            }
          ]);
        }, 1000);
      }
    });
  }

  public facture(id): Promise<any> {
    return new Promise((resolve, reject) => {
      if (Math.random() > 2) {
        reject('Some random error');
      } else {
        setTimeout(() => {
          const test = [
            {
              id: '1',
              DocNum: '180134503',
              total: this._getRandomRegisteryEntry('id24', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '2',
              DocNum: '180134505',
              total: this._getRandomRegisteryEntry('id25', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '3',
              DocNum: '180134508',
              total: this._getRandomRegisteryEntry('id26', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '4',
              DocNum: '180134509',
              total: this._getRandomRegisteryEntry('id27', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '5',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id28', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '6',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id29', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '7',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id30', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '8',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id31', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '9',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id32', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '10',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id33', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '11',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id34', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '12',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id35', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '13',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id36', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '14',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id37', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '15',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id38', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '16',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id39', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '17',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id40', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '18',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id41', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '19',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id42', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            },
            {
              id: '20',
              DocNum: '180134510',
              total: this._getRandomRegisteryEntry('id43', 5),
              dateCreated: new Date(),
              dateModified: new Date()
            }
          ].find(x => {
            return x.id === id;
          });

          const object = Object.assign(test, { DocLines: meds });
          resolve(object);
        }, 1000);
      }
    });
  }

  public paiments() {
    return new Promise((resolve, reject) => {
      if (Math.random() > 1) {
        reject('Some random error');
      } else {
        setTimeout(() => {
          resolve(cheques);
        }, 1500);
      }
    });
  }

  public produitList(name: string): Promise<Array<Object>> {
    name = name.toUpperCase();
    return new Promise((resolve, reject) => {
      try {
        const response = products.filter(
          item => item['Produit'].indexOf(name) === 0
        );

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  }

  public produitDetail(id: string): Promise<any> {
    id = id.toUpperCase();
    return new Promise((resolve, reject) => {
      const response = products.find(item => {
        return item.Code === id;
      });
      if (response === undefined) {
        reject('error');
      } else {
        setTimeout(() => {
          resolve(response);
        }, 1000);
      }
    });
  }

  public produitGenerique(DCI): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
      const response = products.filter(item => item.DCI === DCI);

      if (response.length === 0) {
        reject('empty array');
      } else {
        setTimeout(() => {
          resolve(response);
        }, 500);
      }
    });
  }
}

const meds = [
  {
    name: 'OSSE D3 500MG/400UI CO',
    prixUnit: '625.00',
    Qts: '50',
    Total: '31250.00'
  },
  {
    name: 'DOLIRHUME 500MG/30MG ',
    prixUnit: '191.66',
    Qts: '10',
    Total: '1916.60'
  },
  {
    name: 'ISOMEDINE 0.1% SIROP ',
    prixUnit: '89.01',
    Qts: '20',
    Total: '1780.2'
  },
  {
    name: 'DENACINE 1% SOL DERM ',
    prixUnit: '432.94',
    Qts: '10',
    Total: '4329.40'
  },
  {
    name: 'BETADINE 0.45% COLLUTOI',
    prixUnit: '663.82',
    Qts: '5',
    Total: '3319.10'
  },
  {
    name: 'DENACINE 1% SOL DERM ',
    prixUnit: '432.94',
    Qts: '10',
    Total: '4329.40'
  },
  {
    name: 'DIAGLINIDE 1MG COMP B/30 ',
    prixUnit: '306.25',
    Qts: '12',
    Total: '3675.00'
  },
  {
    name: 'DIOVEINE 600MG COMP ',
    prixUnit: '425.00',
    Qts: '10',
    Total: '4250.00'
  },
  {
    name: 'DOLIRHUME 500MG/30MG ',
    prixUnit: '191.66',
    Qts: '10',
    Total: '1916.60'
  },
  {
    name: 'ISOMEDINE 0.1% SIROP ',
    prixUnit: '89.01',
    Qts: '20',
    Total: '1780.2'
  },
  {
    name: 'DENACINE 1% SOL DERM ',
    prixUnit: '432.94',
    Qts: '10',
    Total: '4329.40'
  },
  {
    name: 'ADDITIVA MAGNESIUM 15 ',
    prixUnit: '810.59',
    Qts: '12',
    Total: '9727.08'
  },
  {
    name: 'SERETIDE 100µG/50µG PD',
    prixUnit: '1418.55',
    Qts: '2',
    Total: '2837,10'
  },
  {
    name: 'DIAGLINIDE 1MG COMP B/30 ',
    prixUnit: '306.25',
    Qts: '12',
    Total: '3675.00'
  },
  {
    name: 'SOOTHEX FEMME ENCEINTE',
    prixUnit: '371.77',
    Qts: '10',
    Total: '3717.70'
  },
  {
    name: 'OSSE D3 500MG/400UI CO',
    prixUnit: '625.00',
    Qts: '50',
    Total: '31250.00'
  }
];

const cheques = [
  {
    type: 'Cheque',
    reference: 7484718,
    montant: 6464220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485048,
    montant: 34220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7051124,
    montant: 364220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 9500,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 100000,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 364220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 364220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 1452357.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 364220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 364220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 457220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 314720.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 9875220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 364220.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  },
  {
    type: 'Cheque',
    reference: 7485018,
    montant: 15000000.87,
    status: 'Encaisse',
    date: new Date(Date.now())
  }
];
