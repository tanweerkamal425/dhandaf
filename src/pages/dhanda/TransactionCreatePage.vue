<template>
    <div class="index-page">
        <div class="transaction-form">
        <img  class="dhanda-img" src="/assets/img/dhanda.png" alt="dhanda-image" />
        <AppNavbar page="transaction" />
        <h3 class="form-heading">Create Transaciton</h3>
        <div class="form-container">
            <form>
            <fieldset>
                <label for="amount">Amount:
                    <input v-model.number="post.amount" class="input" type="text" id="amount" name="amount" placeholder="5000" required />
                </label>
                <label for="type">Type:
                    <!-- <input v-model="post.type" type="number" id="type" name="type" placeholder="Debit/Credit" required /> -->
                    <select class="input" v-model.number="post.type">
                        <option value="" selected disabled>debit/credit</option>
                        <option name="type" value="0">0</option>
                        <option name="type" value="1">1</option>
                    </select>
                </label>
                <label for="description">Description:
                    <input v-model="post.desc" class="input" type="text" id="description" name="description" placeholder="e.g, salt" required />
                </label>
                <label for="party-id">Party ID
                    <select @change="onPartyChange" class="input" id="party-id" name="party-id" placeholder="select one" required>
                        <option value="" selected disabled>Select party</option>
                        <option value="1000">1000</option>
                        <option v-for="p in parties" :value="p.id">
                            {{ `${p.first_name} ${p.last_name}`}}
                        </option>
                    </select>
                    <p v-if="selectedParty">{{ selectedParty.first_name }} - {{ selectedParty.phone }}</p>
                    <!-- <input v-model.number="post.party_id" class="input" type="text" id="party-id" name="party-id" placeholder="e.g, 1, 2, 3 ..." required /> -->
                </label>
            </fieldset>
            <button @click.prevent="createPost" class="button">Save</button>
        </form>
        </div>
        
    </div>
    </div>
    
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
let postModel = {
    amount: "",
    type: "",
    desc: "",
    party_id: "",
}

export default {
    components: {
        AppNavbar,
    },
    
    data() {
        return {
            post: postModel,
            parties: [],
            selectedParty: null,
        }
    },

    methods: {
        createPost() {
            const url = '/api/v1/transactions';
            const options = {
                method: 'POST',
                body: JSON.stringify(this.post),
            };

            fetch(url, options).then((res => {
                console.log(res);
                return res.json();
            })).then((data) => {
                console.log(data);
                this.$router.push({
                    name: "transaction.show",
                    params: {
                        id: data.id,
                    }
                });
            }).catch((error) => {
                console.log(error);
            });
        },

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



        onPartyChange(event) {
            const party_id = event.target.value;
            this.post.party_id = parseInt(party_id);

            this.parties.forEach((p) => {
                if (p.id == party_id) {
                    this.selectedParty = p;
                }
            })
        }
    },

    mounted() {
        this.fetchParties();
    },
}
</script>