<template>
    <div class="index-page">
        <div v-if="party" class="party-form">
        <img class="dhanda-img" src="/assets/img/dhanda.png" alt="dhanda-image" />
        <AppNavbar page="party" />
        <h3 class="form-heading">Edit Party</h3>
        <div class="form-container">
            <form>
            <fieldset>
                <label for="first-name">First name:
                    <input v-model="party.first_name" class="input" type="text" id="first-name" name="first-name" placeholder="Enter your name..." required />
                </label>
                <label for="last-name">Last name:
                    <input v-model="party.last_name" class="input" type="text" id="last-name" name="last-name" placeholder="Enter your name..." required />
                </label>
                <label for="phone">Phone:
                    <input v-model="party.phone" class="input" type="text" id="phone" name="phone" placeholder="e.g, 9331234567" required />
                </label>
                <label for="amount">Amount:
                    <input v-model.number="party.amount" class="input" type="text" id="amount" name="amount" placeholder="5000" required />
                </label>
            </fieldset>
            <button @click.prevent="updateParty" class="button">Save</button>
        </form>
        </div>
    </div>
    </div>
    
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
    export default {
        components: {
            AppNavbar,
        },
        
        data() {
            return {
                party: null,
                partyId: null,
            }
        },

        methods: {
            updateParty() {
                const url = `/api/v1/parties/${this.partyId}`;
                const options = {
                    method: "PATCH",
                    body: JSON.stringify(this.party),
                };

                fetch(url, options).then((res => {
                    console.log(res);
                    return res.json();
                })).then((data) => {
                    console.log(data);
                    this.$router.push({
                        name: "party.detail",
                        params: {
                            id: data.id,
                        }
                    });
                }).catch((error) => {
                    console.log(error);
                });
            },

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
        },

        mounted() {
            const id = this.$route.params.id;
            this.partyId = id;
            this.fetchParty(id);
        },
    }
</script>