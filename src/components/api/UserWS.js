import axios from 'axios'

const _apiRoot = 'http://localhost/'

export default {
    path(s) {
        return _apiRoot + s;
    },
    removeUser(e) {
        console.log(e)
        return axios(this.path("deleteuser.php"), {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                id: e
            },
        })
    },
    addUser(user) {
        return axios.post(this.path("createuser.php"), user);
    },
    getUsers() {
        return axios.get(this.path("getusers.php"));
    }
}