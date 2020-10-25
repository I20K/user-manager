<template>
  <div>
    <b-card title="Cadastros">
      <b-card-text class="mb-3"
        >Adicione ou remova usuários do sistema.
        <b-button variant="success" class="float-right" to="/new-user">Novo</b-button>
      </b-card-text>
      <UserTable />
    </b-card>
  </div>
</template>

<script>
import UserTable from "../components/UserTable";

export default {
  components: {
    UserTable,
  },
};
</script>