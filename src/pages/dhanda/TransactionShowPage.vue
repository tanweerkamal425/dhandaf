<template>
    <div class="detail">
        <img src="/assets/img/dhanda.png" alt="dhanda-image">
        <h1 class="form-heading">Transaciton Details</h1>
        <table class="detail-table">
            <tr>
                <th>Id</th>
                <td>{{ transaction.id }}</td>
            </tr>
            <tr>
                <th>Amount</th>
                <td>&#x20B9;{{ transaction.amount }}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>{{ transaction.type }}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>{{ transaction.desc }}</td>
            </tr>
            <tr>
                <th>Party ID</th>
                <td>{{ transaction.party_id }}</td>
            </tr>
            <tr>
                <th>Created at</th>
                <td>{{ transaction.created_at }}</td>
            </tr>
        </table>
    </div>
    <div class="detail">  
        <h1 class="form-heading">Party Details</h1>
        <table class="detail-table">
            <tr>
                <th>ID</th>
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
    </div>
</template>

<script>
    export default {
    data() {
        return {
            partyId: null,
            txnId: null,
            transaction: {},
            party: {},
        };
    },

    methods: {
        fetchParty(partyId) {
            const url = `/api/v1/parties/${partyId}`;
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
                this.party = data;
            }).catch((error) => {
                console.log(error);
            })
        },

        fetchTransaction(txnId) {
            const url = `/api/v1/transactions/${txnId}`;
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data)
                this.transaction = data;
                this.fetchParty(data.party_id);
            }).catch((error) => {
                console.log(error);
            })
        }
    },

    mounted() {
        this.txnId = this.$route.params.id;
        console.log(this.txnId);
        this.fetchTransaction(this.txnId);
    }
}
</script>