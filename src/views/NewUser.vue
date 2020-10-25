<template>
  <b-card title="Novo Usuário">
    <b-card-text class="mb-3">Adicione um usuário ao sistema. </b-card-text>
    <b-form @submit.stop.prevent>
      <b-row class="mb-4">
        <b-col cols="4">
          <label for="form-input-name">Nome</label>
          <b-input
            v-model="model.name"
            required
            id="form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Nome"
          ></b-input>
          <b-form-invalid-feedback :state="nameIsValid">
            Digite o nome completo do usuário.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="nameIsValid">
            Perfeito!
          </b-form-valid-feedback>
        </b-col>
        <b-col cols="4"
          ><label for="inline-form-input-username">Usuário</label>
          <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input
              v-model="model.username"
              required
              id="inline-form-input-username"
              placeholder="Usuário"
            ></b-input> 
            </b-input-group
        >
        <b-form-invalid-feedback :state="usernameIsValid">
            Digite um usuário.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="usernameIsValid">
            Perfeito!
          </b-form-valid-feedback></b-col>
        <b-col cols="4">
          <label for="form-input-phone">Telefone</label>
          <b-input
            v-model="model.phone"
            id="inline-form-input-phone"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Telefone"
            v-mask="'(##) ####-####'"
          ></b-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="4">
          <label for="form-input-password">Senha</label>
          <b-input
            v-model="model.password"
            type="password"
            id="form-input-password"
            required
          ></b-input>
          <b-form-invalid-feedback :state="passwordIsValid">
            Sua senha precisa de no mínimo 5 caracteres, um número, uma letra
            minúscula e uma letra maiúscula.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="passwordIsValid">
            Perfeito!
          </b-form-valid-feedback>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col>
          <b-button @click="submit" variant="success">Cadastrar</b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: null,
        password: null,
        phone: null,
        name: null,
      },
    };
  },
  methods: {
    submit() {
      // eslint-disable-next-line no-empty
      if (this.nameIsValid && this.passwordIsValid) {
        this.$store.commit("addUser", this.model);

        try {
          this.model = {
            username: null,
            password: null,
            phone: null,
            name: null,
          };

          this.$router.back();
          // eslint-disable-next-line no-empty
        } catch (e) {}
      } else {
        alert("Corrija todos os erros no formulário e tente novamente.");
      }
    },
  },
  computed: {
    usernameIsValid() {
      return (this.model.username ?? "").length != 0
    },
    nameIsValid() {
      return (
        (this.model.name ?? "").split(" ").length > 1 &&
        (this.model.name ?? "").split(" ")[1].length > 1
      );
    },
    passwordIsValid() {
      return (
        (this.model.password ?? "").match(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/
        ) != null
      );
    },
  },
};
</script>