<template>
  <div>
    <h2 class="title">
      You don't know which pizza to choose?
      <br />Check it by completing the data in the calculator below!
    </h2>
    <b-row>
      <b-col sm="6">
        <b-jumbotron
          class="card content"
          :class="firstPizza.costOfCm > secondPizza.costOfCm ? 'loser': firstPizza.costOfCm < secondPizza.costOfCm ? 'winner': ''"
        >
          <div class="card-image">
            <b-img class="img" src="https://i.imgur.com/PTPIujd.jpg"></b-img>
          </div>
          <hr class="my-4" />
          <h4>First pizza</h4>
          <number-input
            id="firstPizzaDiameter"
            class="mb-2"
            v-model="firstPizza.diameter"
            :min="1"
            :max="100"
            controls
            rounded
            placeholder="Diameter [cm]"
          ></number-input>
          <number-input
            id="firstPizzaQuantity"
            class="mb-2"
            v-model="firstPizza.quantity"
            :min="1"
            :max="100"
            controls
            rounded
            placeholder="Quantity"
          ></number-input>
          <number-input
            id="firstPizzaPrice"
            class="mb-2"
            v-model="firstPizza.price"
            :min="1"
            :max="100"
            controls
            placeholder="Price per pizza [zl]"
          ></number-input>
          <div v-if="showResult">
            <p>
              Total area: {{firstPizza.area}} cm
              <sup>2</sup>
            </p>
            <p>
              Cost for 1 cm
              <sup>2</sup>
              of pizza: {{firstPizza.costOfCm}} gr
            </p>
          </div>
        </b-jumbotron>
      </b-col>
      <b-col sm="6">
        <b-jumbotron
          class="card content"
          :class="firstPizza.costOfCm > secondPizza.costOfCm ? 'winner': firstPizza.costOfCm < secondPizza.costOfCm ? 'loser': ''"
        >
          <div class="card-image">
            <b-img class="img" src="https://i.imgur.com/l7M6Ybj.jpg"></b-img>
          </div>
          <hr class="my-4" />
          <h4>Second pizza</h4>
          <number-input
            id="secondPizzaDiameter"
            class="mb-2"
            v-model="secondPizza.diameter"
            :min="1"
            :max="100"
            controls
            rounded
            placeholder="Diameter [cm]"
          ></number-input>
          <number-input
            id="secondPizzaQuantity"
            class="mb-2"
            v-model="secondPizza.quantity"
            :min="1"
            :max="100"
            controls
            rounded
            placeholder="Quantity"
          ></number-input>
          <number-input
            id="secondPizzaDiameter"
            ref="secondPizzaDiameter"
            :state="false"
            class="mb-2"
            v-model="secondPizza.price"
            :min="1"
            :max="100"
            controls
            placeholder="Price per pizza [zl]"
          ></number-input>
          <div v-if="showResult">
            <p>
              Total area: {{secondPizza.area}} cm
              <sup>2</sup>
            </p>
            <p>
              Cost for 1 cm
              <sup>2</sup>
              of pizza: {{secondPizza.costOfCm}} gr
            </p>
          </div>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-button class="text-center button-compare btn-lg btn-block" pill @click="submitData">Compare!</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstPizza: {
        area: 0,
        costOfCm: 0
      },
      secondPizza: {
        area: 0,
        costOfCm: 0
      },
      showResult: false
    };
  },
  methods: {
    submitData() {
      if (
        this.firstPizza.diameter &&
        this.firstPizza.quantity &&
        this.firstPizza.price &&
        this.secondPizza.diameter &&
        this.secondPizza.quantity &&
        this.secondPizza.price
      ) {
        this.show = true;
        this.choosePizza();
      } else {
        this.$bvModal.msgBoxOk(
          "Error occured. Fulfill all input boxes to check which pizza is more worth.",
          {
            title: "Ooops",
            size: "sm",
            buttonSize: "sm",
            okVariant: "warning",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true
          }
        );
      }
    },
    choosePizza() {
      let firstPizzaRadius = this.firstPizza.diameter / 2;
      this.firstPizza.area =
        Math.round(
          Math.PI *
            Math.pow(firstPizzaRadius, 2) *
            100 *
            this.firstPizza.quantity
        ) / 100;
      let secondPizzaRadius = this.secondPizza.diameter / 2;
      this.secondPizza.area =
        Math.round(
          Math.PI *
            Math.pow(secondPizzaRadius, 2) *
            100 *
            this.secondPizza.quantity
        ) / 100;
      this.firstPizza.costOfCm =
        Math.round(
          ((this.firstPizza.price * this.firstPizza.quantity) /
            this.firstPizza.area) *
            100
        ) / 100;
      this.secondPizza.costOfCm =
        Math.round(
          ((this.secondPizza.price * this.secondPizza.quantity) /
            this.secondPizza.area) *
            100
        ) / 100;
      this.showResult = true;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Gayathri|Manjari|Roboto+Slab&display=swap");

.card {
  display: inline-block;
  position: relative;
  margin-top: 50px;
  margin-bottom: 30px;
  border-radius: 15px;
  color: #4b357c;
  background: #eef0f1;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.6),
    0 3px 1px -2px rgba(0, 0, 0, 0.6), 0 1px 5px 0 rgba(0, 0, 0, 0.6);
}

.winner {
  background: #007849;
  color: #f4f6f7;
  animation: winner 2s 3;
}

.loser {
  background: #a64443;
  color: #f4f6f7;
}

.title {
  color: #eef0f1;
  font-weight: 700;
  font-family: "Gayathri", "Roboto Slab", "Manjari", "Times New Roman", serif;
  font-size: 2.2em;
  margin-bottom: 80px;
  margin-top: 5px;
}

.content {
  font-family: "Gayathri", "Roboto Slab", "Manjari", "Times New Roman", serif;
  font-weight: 300;
  line-height: 1.5em;
  font-size: 1em;
}

.card-image {
  height: 60%;
  position: relative;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -100px;
  border-radius: 6px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

img {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  pointer-events: none;
  vertical-align: middle;
  border: 0;
}

.button-compare {
  background-color: #eef0f1;
  color: #5b4c7f;
  font-family: "Gayathri", "Roboto Slab", "Manjari", "Times New Roman", serif;
  font-weight: 300;
  font-size: 1.5em;
}

.button-compare:hover {
  background-color: #5b4c7f;
  color: #eef0f1;
  font-family: "Gayathri", "Roboto Slab", "Manjari", "Times New Roman", serif;
  font-weight: 700;
  font-size: 1.5em;
}

@-webkit-keyframes winner {
  0% {
    -webkit-box-shadow: 0 0 0 0 #005d68;
  }
  70% {
    -webkit-box-shadow: 0 0 0 5px #005d68;
  }
  100% {
    -webkit-box-shadow: 0 0 0 0 #005d68;
  }
}
@keyframes winner {
  0% {
    -moz-box-shadow: 0 0 0 0 #005d68;
    box-shadow: 0 0 0 0 #005d68;
  }
  70% {
    -moz-box-shadow: 0 0 0 5px #005d68;
    box-shadow: 0 0 0 10px #005d68;
  }
  100% {
    -moz-box-shadow: 0 0 0 0 #005d68;
    box-shadow: 0 0 0 0 #005d68;
  }
}
</style>