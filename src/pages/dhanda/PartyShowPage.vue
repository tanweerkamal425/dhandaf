<template>
    <div class="detail">
        <img src="/assets/img/dhanda.png" alt="dhanda-image">
        <h1 class="form-heading">Party Details</h1>
        <table class="detail-table">
            <tr>
                <th>Id</th>
                <td>{{ party.id }}</td>
            </tr>
            <tr>
                <th>Frist name</th>
                <td>{{ party.first_name }}</td>
            </tr>
            <tr>
                <th>Last name</th>
                <td>{{ party.last_name }}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>{{ party.phone }}</td>
            </tr>
            <tr>
                <th>Amount</th>
                <td>&#x20B9;{{ party.amount }}</td>
            </tr>
            <tr>
                <th>Created at</th>
                <td>{{ party.created_at }}</td>
            </tr>
        </table>
        <h1 class="form-heading">Transactions</h1>
        <div style="margin-left: -32px;">
            <div class="container">
                <div class="navbar-wrapper">
                    <!--<img class="logo" src="logo.png" />-->
                    <div class="search-box">
                        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z" fill="#000"></path></svg>
                        <input name="q" class="search" type="text" placeholder="Search ..." />
                    </div>
                    <div class="navbar-menu">
                        <router-link class="button" :to="{name: 'party.list' }">Home</router-link>
                        <router-link class="button" :to="{ name: 'transaction.create' }">Create</router-link>
                    </div>
                </div>
            </div>
            <div class="transaction">
                <table class="table">
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Party ID</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="(t, index) in transactions">
                        <td>{{ t.id }}</td>
                        <td>{{ t.descripttion }}</td>
                        <td>{{ t.amount }}</td>
                        <td>{{ t.party_id }}</td>
                        <td><a class="delete" href="#">Delete</a></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            partyId: null,
            party: {},
            transactions: [],
        }
    },
    
    methods: {
        fetchParty(partyId) {
            const url = `/api/v1/parties/${partyId}?includes=transactions`;
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
                this.party = data;
                this.transactions = data.transactions;
            }).catch((error) => {
                console.log(error);
            })
        },
    },

    mounted() {
        this.partyId = this.$route.params.id;
        this.fetchParty(this.partyId)
    }
}
</script>