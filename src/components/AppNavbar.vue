<template>
    <div class="container">
        <div class="navbar-wrapper">
            <!--<img class="logo" src="logo.png" />-->
            <div class="navbar-menu">
                <div class="tab">
                    <router-link :class="{'active': page == 'party'}" class="navbar-menu-item" :to="{ name: 'party.list' }">Party</router-link>
                </div>
                <div class="tab">
                    <router-link :class="{ 'active': page == 'transaction' }" class="navbar-menu-item" :to="{ name: 'transaction.list' }">Transaction</router-link>
                </div>
            </div>
            <div class="search-box">
                <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z" fill="#000"></path></svg>
                <input @input="emitInput" :value="modelValue" name="q" class="search" type="text" placeholder="Search ..." />
            </div>
            <div class="navbar-menu">
                <router-link class="button home-button" :to="{ name: 'home' }">Home</router-link>
                <router-link v-if="page === 'party'" class="button" :to="{ name: 'party.create' }">Create</router-link>
                <router-link v-if="page === 'transaction'" class="button" :to="{ name: 'transaction.create' }">Create</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        modelValue: {
            type: String,
            default: "",
        },
        page: {
            type: String,
        },
    },

    emits: ["update:modelValue"],

    methods: {
        emitInput(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>