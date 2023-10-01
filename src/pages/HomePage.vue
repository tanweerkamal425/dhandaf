<template>
    <section>
        <div class="hero-container border">
            <div class="hero-wrapper">
                <div class="hero-section">
                    <h2>Dhanda</h2>
                    <h4>CRUD Application</h4>
                    <h1>Business Statistics</h1>
                    <p>total number of parties and transactions of your business</p>
                    <!-- <input class="button color" type="submit" value="START" name="add" /> -->
                    <router-link class="button color" :to="{ name: 'party.list' }">Start</router-link>
                </div>
                <div class="illustration">
                    <img class="undraw" src="/assets/icons/undraw_finance_re_gnv2.svg" alt="undraw-finance-image" />
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="records">
            <div class="dashboard-component">
                <svg style="width: 50px; height: 50px; fill: #8600ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path></svg>
                <p>{{ total_party }}</p>
                <p>Total Parties</p>
            </div>
            <div class="dashboard-component">
                <svg style="width: 50px; height: 50px; fill: #8600ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3.00488 3.00293H21.0049C21.5572 3.00293 22.0049 3.45064 22.0049 4.00293V20.0029C22.0049 20.5552 21.5572 21.0029 21.0049 21.0029H3.00488C2.4526 21.0029 2.00488 20.5552 2.00488 20.0029V4.00293C2.00488 3.45064 2.4526 3.00293 3.00488 3.00293ZM4.00488 5.00293V19.0029H20.0049V5.00293H4.00488ZM8.50488 14.0029H14.0049C14.281 14.0029 14.5049 13.7791 14.5049 13.5029C14.5049 13.2268 14.281 13.0029 14.0049 13.0029H10.0049C8.62417 13.0029 7.50488 11.8836 7.50488 10.5029C7.50488 9.12222 8.62417 8.00293 10.0049 8.00293H11.0049V6.00293H13.0049V8.00293H15.5049V10.0029H10.0049C9.72874 10.0029 9.50488 10.2268 9.50488 10.5029C9.50488 10.7791 9.72874 11.0029 10.0049 11.0029H14.0049C15.3856 11.0029 16.5049 12.1222 16.5049 13.5029C16.5049 14.8836 15.3856 16.0029 14.0049 16.0029H13.0049V18.0029H11.0049V16.0029H8.50488V14.0029Z"></path></svg>
                <p>{{ total_txn }}</p>
                <p>Total Transactions</p>
            </div>
            <div class="dashboard-component">
                <svg style="width: 50px; height: 50px; fill: #8600ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20H7.69043C8.59297 19.0595 9.21538 17.8481 9.42355 16.5H12C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12V15.5C7.5 17.6416 6.00399 19.4338 4 19.8885V12C4 7.58172 7.58172 4 12 4ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12V22H12ZM9.5 14.5V12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5H9.5Z"></path></svg>
                <p>{{ balance_dr }}</p>
                <p>Total Debits</p>
            </div>
            <div class="dashboard-component">
                <svg style="width: 50px; height: 50px; fill: #8600ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7C9.23999 7 7 9.23999 7 12C7 14.76 9.23999 17 12 17C13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15C10.3425 15 9 13.6575 9 12C9 10.3425 10.3425 9 12 9C13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773Z M22 12C22 6.47998 17.52 2 12 2C6.47998 2 2 6.47998 2 12C2 17.52 6.47998 22 12 22C17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4C16.42 4 20 7.57996 20 12C20 16.42 16.42 20 12 20C7.57996 20 4 16.42 4 12Z"></path></svg>
                <p>&#x20B9;{{ balance_cr }}</p>
                <p>Total Credits</p>
            </div>
        </div>
    </section>
    <section>
        <div class="hero-container">
            <div class="records stats">
                <div id="txnChart"></div>
                <div id="txnLineChart"></div>
            </div>
        </div>
    </section>
</template>

<script>
import ApexCharts from 'apexcharts';

export default {
    data() {
        return {
            total_party: null,
            total_txn: null,
            balance_cr: null,
            balance_dr: null,
            balance_bar_graph: []
        }
    },

    methods: {
        getStats() {
            const url = "api/v1/stats";
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
                this.total_party = data.total_party;
                this.total_txn = data.total_txn;
                this.balance_cr = data.balance_cr;
                this.balance_dr = data.balance_dr;
                this.balance_bar_graph = data.balance_bar_graph;
                // console.log(data);
                this.createChart();
                this.createLineChart();

            }).catch((error) => {
                console.log(error);
            });
        },

        createChart() {
            let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let dataSeries = [];
            dataSeries.push({ data: [], });
            dataSeries.push({ data: [], });
            for (let i = 0; i < this.balance_bar_graph.length; ++i) {
                dataSeries[0].data.push(this.balance_bar_graph[i].balance_dr);
                // dataSeries[0].data.push(0);
            }
            for (let i = 0; i < this.balance_bar_graph.length; ++i) {
                dataSeries[1].data.push(this.balance_bar_graph[i].balance_cr);    
                // dataSeries[1].data.push(0);
            }
            console.log("OK", dataSeries);

            // balance_bar_graph = [{balance_dr: 0, balance_cr: 0}, .. ]
            // dataseries = [{data: []}, ..]

            let categories = [];
            for (let i = 0; i < this.balance_bar_graph.length; ++i) {
                categories.push(months[this.balance_bar_graph[i].month - 1]);
            }

            const options = {
                chart: {
                    type: 'bar',
                    // height: 300,
                    // width: 250,
                    toolbar: {
                        show: false,
                    }
                },

                series: dataSeries,
                xaxis:{
                  categories: categories,
                },
                
                // fill: {
                //   opacity: 0.7,
                // },
                // dataLabels: {
                //     style: {
                //         fontSize: '12px',
                //         colors: ["#000"],
                //         backgroudColor: ["#fff"],
                //     }
                // },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '30%',
                    endingShape: 'rounded',
                  },
                },
            };


            // console.log(options);
            const chart = new ApexCharts(document.querySelector("#txnChart"), options);
            chart.render();
        },

        createLineChart() {
            let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let arr = [];
            let arr2 = [];
            for (let i = 0; i < this.balance_bar_graph.length; ++i) {
                arr[i] = this.balance_bar_graph[i].balance_cr;
                arr2[i] = this.balance_bar_graph[i].balance_dr;
            }

            let categories = [];
            for (let i = 0; i < this.balance_bar_graph.length; ++i) {
                categories.push(months[this.balance_bar_graph[i].month - 1]);
            }

            
            const options = {
                series: [{
                
                    data: arr,
                },
                {
                    data: arr2,
                }],
                xaxis:{
                  categories: categories,
                },

                chart: {
                  height: 350,
                  type: 'line',
                  toolbar: {
                    show: false,
                  }
                },
            };

            const chart = new ApexCharts(document.querySelector("#txnLineChart"), options);
            // chart.toolbar.show = false;
            chart.render();
        },

    },

    mounted() {
        this.getStats();
    }
}
</script>