<template>
  <div class="flex-height base-padding">
    <Header title="Oi!" text="conta pra gente sobre você antes da gente começar."></Header>
    <div class="flex-height">
      <div class="input-holder">
        <input class="input" type="text" placeholder="Como gostria de ser chamado?" v-model="form.name"/>
      </div>
      <div class="sub-title">Você é</div>
      <div class="genders">
        <div class="radio">
          <input type="radio" id="homem" value="1" v-model="form.gender" />
          <label for="homem">Homem</label>
        </div>
        <div class="radio">
          <input type="radio" id="mulher" value="2" v-model="form.gender" />
          <label for="mulher">Mulher</label>
        </div>
      </div>
    </div>
    <div class="button-bar">      
      <Button v-on:click="submit">Começar a usar</Button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header";
import Button from "@/components/Button";
export default {
  data() {
    return {
      form: {
        name: null,
        gender: null // 1 = homem | 2 = mulher | 3 = Outros
      }
    };
  },
  components: { Header, Button },
  methods: {
    ...mapGetters({
      user: "auth/user"
    }),
    submit() {
      let obj = this.user();
      let that = this;
      axios
        .put("/user/" + obj.id, this.form)
        .then(function(response) {
          console.log(response.data);
          that.$router.replace({
            name: "dashboard"
          });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  beforeMount() {
    let obj = this.user();
    console.log(obj);
    if (obj.name !== null && obj.gender !== null) {
      this.$router.replace({
        name: "dashboard"
      });
    }
  }
};
</script>

<style lang="scss">
.button-bar{
  text-align: right;
  margin-top: 16px;
}
.input-holder {
  border: 2px solid #c8c8c8;
  display: flex;
  border-radius: 24px;
  background-color: var(--background-color);

  .input {
    flex: 1;
    border: none;
    padding: 16px 24px;
    line-height: 16px;
    border-radius: 24px;
    font-size: 14px;
    flex: 1;
    text-align: center;
    background-color: var(--background-color);
    color: var(--neutral-color);

    &:focus {
      border: none;
      outline: none;
    }
  }
}

.radio {
  display: inline-block;
  label{
    display: inline-block;
    min-width: 48px;
    padding: 12px 12px;
    line-height: 24px;
    background: var(--fore-color);
    color: var(--neutral-color);
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 17px;
    font-weight: 500;
    border: 2px solid var(--shadow-color-s);
  }

  input{
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  input:checked + label {
    border-color: var(--main-color);
  }

  & + .radio {
    margin-left: 10px;
  }
}

.sub-title {
  font-size: 13px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: var(--neutral-color);
  text-transform: uppercase;
  font-weight: bold;
}

.genders {
  display: flex;
  flex-direction: row;
  line-height: 16px;
}
</style>