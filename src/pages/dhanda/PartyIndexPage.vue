<template>
    <div class="index-page">
        <img class="dhanda-img" src="/assets/img/dhanda.png" alt="dhanda-image">
        <AppNavbar v-model="searchInput" page="party" />
        <div class="party">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Phone No.</th>
                    <th>Amount</th>
                    <th>Created at</th>
                    <th>Updated at</th>
                    <th colspan="2">Actions</th>
                </tr>
                <tr v-for="(p, index) in parties">
                    <td>
                        <router-link
                            :to="{name: 'party.detail', params: {id: p.id}}">
                        {{ p.id }}</router-link>
                    </td>
                    <td>{{ p.first_name }} {{ p.last_name }}</td>
                    <td>{{ p.phone }}</td>
                    <td>
                        <span :class="{'text-success': p.amount > 0, 'text-danger': p.amount < 0}">&#x20B9;{{ p.amount >= 0 ? p.amount : p.amount * -1 }}</span>
                    </td>
                    <td>{{ p.created_at }}</td>
                    <td>{{ p.updated_at }}</td>
                    <td>
                        <router-link 
                            :to="{name: 'party.edit', params: {id: p.id}}">Edit</router-link>
                    </td>
                    <!-- <td><a class="delete" href="#">Delete</a></td> -->
                    <button @click="deleteParty(p.id)" class="delete-button">Delete</button>
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
import staticData from '@/../data.json';
    export default {
        components: {
            AppNavbar,
            Pagination,
        },

        data() {
            return {
                parties: [],
                page: 1,
                searchInput: "",
            };
        },

        methods: {
            fetchParties(query = {}) {
                // Call candidates API
                // http://127.0.0.1:8080
                let queryParams = new URLSearchParams(query);
                let url = "/api/v1/parties?" + queryParams.toString();
                // url = "/api/v1/parties?search=party&page=1"

                fetch(url).then((res) => {
                    return res.json();
                }).then((data) => {

                    this.parties = data.parties;

                }).catch((err) => {
                    console.log(error);
                });

                // this.parties = staticData.parties;
            },

            deleteParty(partyId) {
                const url = `/api/v1/parties/${partyId}`;
                const options = {
                    method: "DELETE",
                };

                fetch(url, options).then((res) => {
                    console.log(res);
                    // @TODO DO the removal of party from this.parties here.
                    this.fetchParties();
                }).catch((error) => {
                    console.log(error);
                })
            },

        },
        
        mounted() {
            this.fetchParties();
        },

        watch: {
            page() {
                if (this.parties) {
                    this.fetchParties({page: this.page});
                }
            },

            searchInput() {
                this.fetchParties({page: this.page, query: this.searchInput});
            }
        },

    }
</script>
