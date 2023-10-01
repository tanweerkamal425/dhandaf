<template>
    <div class="index-page">
        <img  class="dhanda-img" src="/assets/img/dhanda.png" alt="dhanda-image" />
                
        <AppNavbar v-model="searchInput" page="transaction" />

        <div class="transaction">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Party ID</th>
                </tr>
                <tr v-for="(t, index) in transactions">
                    <td>
                        <router-link
                            :to="{ name: 'transaction.show', params: { id: t.id } }">
                        {{ t.id }}</router-link>
                    </td>
                    <td>{{ t.desc }}</td>
                    <td>
                        <span :class="{'text-success': t.type == 0, 'text-danger': t.type == 1}">&#x20B9;{{ t.amount }}</span>
                    </td>
                    <td>{{ t.party_id }}</td>
                </tr>
            </table>
            <Pagination
                :page="page"
                @on-next="page = page + 1"
                @on-prev="page = page > 1 ? page - 1 : page"
            >         
            </Pagination>
        </div>
    </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import Pagination from '@/components/Pagination.vue';
import txnData from '@/../txn.json';
    export default {
        components: {
            AppNavbar,
            Pagination,
        },

        data() {
            return {
                transactions: [],
                page: 1,
                searchInput: ""
            };
        },

        methods: {
            fetchTransactions(query = {}) {
                // Call candidates API
                // http://127.0.0.1:8080
                let queryParams = new URLSearchParams(query);
                let url = "/api/v1/transactions?" + queryParams.toString();

                fetch(url).then((res) => {
                    return res.json();
                }).then((data) => {
                    console.log(data);
                    this.transactions = data.transactions;
                    console.log(this.transactions);

                }).catch((error) => {
                    console.log(error);
                });

                // this.transactions = txnData.transactions;
            }
        },

        mounted() {
            this.fetchTransactions();
        },

        watch: {
            page() {
                if (this.transactions) {
                    this.fetchTransactions({page: this.page});
                }
            },

            searchInput() {
                this.fetchTransactions({page: this.page, query: this.searchInput});
            }
        },
    }   
</script>