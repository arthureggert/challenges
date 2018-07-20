export class MainController {
  constructor($log, shared) {
    'ngInject';

    this.$log = $log;
    this.$shared = shared;
    this.traducao = [
      {chave: 0, valor: 'Tornado'},
      {chave: 1, valor: 'Tempestade Tropical'},
      {chave: 2, valor: 'Furacão'},
      {chave: 3, valor: 'Trovoada'},
      {chave: 4, valor: 'Trovoada'},
      {chave: 5, valor: 'Chuva e Neve'},
      {chave: 6, valor: 'Chuva e Neve'},
      {chave: 7, valor: 'Chuva e Neve'},
      {chave: 8, valor: 'Geada'},
      {chave: 9, valor: 'Geada'},
      {chave: 10, valor: 'Geada'},
      {chave: 11, valor: 'Chuva Leve'},
      {chave: 12, valor: 'Chuva Leve'},
      {chave: 13, valor: 'Neve'},
      {chave: 14, valor: 'Neve'},
      {chave: 15, valor: 'Neve'},
      {chave: 16, valor: 'Neve'},
      {chave: 17, valor: 'Granizo'},
      {chave: 18, valor: 'Geada'},
      {chave: 19, valor: 'Poeira'},
      {chave: 20, valor: 'Nevoeiro'},
      {chave: 21, valor: 'Neblina'},
      {chave: 22, valor: 'Neblina'},
      {chave: 23, valor: 'Tempestuoso'},
      {chave: 24, valor: 'Vento'},
      {chave: 25, valor: 'Frio'},
      {chave: 26, valor: 'Nublado'},
      {chave: 27, valor: 'Nublado'},
      {chave: 28, valor: 'Nublado'},
      {chave: 29, valor: 'Parcialmente Nublado'},
      {chave: 30, valor: 'Parcialmente Nublado'},
      {chave: 31, valor: 'Limpo'},
      {chave: 32, valor: 'Ensolarado'},
      {chave: 33, valor: 'Limpo'},
      {chave: 34, valor: 'Limpo'},
      {chave: 35, valor: 'Chuva e Neblina'},
      {chave: 36, valor: 'Quente'},
      {chave: 37, valor: 'Trovoadas Isoladas'},
      {chave: 38, valor: 'Trovoadas Dispersas'},
      {chave: 39, valor: 'Trovoadas Dispersas'},
      {chave: 40, valor: 'Trovoadas Dispersas'},
      {chave: 41, valor: 'Muita Neve'},
      {chave: 42, valor: 'Neve'},
      {chave: 43, valor: 'Neve Pesada'},
      {chave: 44, valor: 'Parcialmente Nublado'},
      {chave: 45, valor: 'Trovoada'},
      {chave: 46, valor: 'Neve'},
      {chave: 47, valor: 'Trovoadas Isoladas'},
      {chave: 3200, valor: 'N/D'}
    ]
  }

  getResultado() {
    return this.$shared.getObjectToShare();
  }

  hasResult() {
    return angular.isDefined(this.getResultado());
  }

  getCidadeEstado() {
    if (this.hasResult()) {
      return this.getResultado().location.city
    }
  }

  getPrevisaoProximosDias() {
    if (this.hasResult()) {
      return this.getResultado().item.forecast;
    }
  }

  getDescricao(codigo) {
    let codigoAsNumber = parseInt(codigo);
    return _.find(this.traducao, (object) => object.chave === codigoAsNumber).valor;
  }

  getMaximaPeriodo() {
    if (this.hasResult()) {
      return _.orderBy(this.getPrevisaoProximosDias(), ['high'], ['desc'])[0];
    }
  }

  getMinimaPeriodo() {
    if (this.hasResult()) {
      return _.orderBy(this.getPrevisaoProximosDias(), ['low'], ['asc'])[0];
    }
  }

  getFinalSemana() {
    let retorno;
    if (this.hasResult()) {
      _.forEach(this.getPrevisaoProximosDias(), (previsao) => {
        let data = new Date(previsao.date)
        if (data.getDay() === 6) {
          retorno = previsao
          return false;
        }
      })
    }
    return retorno;
  }

  deuPraia() {
    let finalDeSemana = this.getFinalSemana();
    if (angular.isDefined(finalDeSemana)) {
      if (finalDeSemana.code === "36" && finalDeSemana.high >= 25) {
        return "Vamos para PRAIA!"
      } else {
        return "Não vai dar praia dessa vez!"
      }
    }
  }

  getChart() {
    let rows = [];
    if (this.hasResult()) {
      _.forEach(this.getPrevisaoProximosDias(), (previsao) => {
          rows.push({
            c: [
              {v: previsao.date},
              {v: parseInt(previsao.high)},
              {v: parseInt(previsao.low)}
            ]
          })
        }
      );
    }

    let myChartObject = {};

    myChartObject.type = "ColumnChart";
    myChartObject.data = {
      "cols": [
        {id: "d", label: "Dia", type: "string"},
        {id: "t", label: "Máxima", type: "number"},
        {id: "m", label: "Minima", type: "number"}
      ],
      "rows": rows
    };


    return myChartObject
  }
}
