<template>
    <div>
        <datatable :data="getUsers" :columns="columns" :actions="actions"></datatable>
    </div>
</template>

<script>
require("bootstrap-vue-datatable");

export default {
    data() {
        return {
            columns: [
                {
                    name: 'username',
                    th: 'Usuário'
                },
                {
                    name: 'password',
                    th: "Senha"
                },
                {
                    name: 'name',
                    th: 'Nome'
                },
                {
                    name: 'phone',
                    th: 'Telefone'
                }
            ],
            actions: [
                {
                    text: 'Remover', color: 'danger', action: (row, index) => {
                        var id = row.id;
                        
                        if(confirm('Tem certeza que deseja deletar esse usuário?')) {
                            this.$store.commit('removeUser', { 'i': index, 'id': id })
                        }
                    }
                }
            ]
        }
    },
    computed: {
        getUsers() {
            return this.$store.getters.allUsers;
        }
    },
    beforeMount() {
        if(this.$store.getters.allUsers === undefined || this.$store.getters.allUsers.length === 0) {
            this.$store.commit('fetchUsers')
            console.log(this.$store.getters.allUsers)
        }
    }
}
</script>