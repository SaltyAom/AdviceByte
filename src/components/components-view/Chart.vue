<template>
    <div class="spiderChart">
        <canvas id="myChart" ref="myChart" width="400" height="400"></canvas>

        <button @click="increment">Click me</button>
    </div>
</template>

<script>
import Chart from 'chart.js'

export default {
    mounted() {
        var options = {
            responsive: false,
            maintainAspectRatio: true,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
        var ctx = document.getElementById('myChart').getContext('2d')
        // eslint-disable-next-line
        var myChart = new Chart(ctx, {
            type: 'radar',
            options: options,
            data: {
                ...this.myChart
            }
        })
    },
    data() {
        return {
            myChart: {
                labels: [
                    'Algorithm',
                    'Data Structure',
                    'Programming',
                    'Mathematic',
                    'Language',
                    'Communication',
                    'Problem Solivg',
                    'Self-motivation'
                ],
                datasets: [
                    {
                        label: 'Kritchagamol',
                        backgroundColor: 'rgb(35, 50, 120, 0.5)',
                        data: [40, 75, 75, 45, 85, 75, 65, 55]
                    },
                    {
                        label: 'Base Line',
                        backgroundColor: 'rgb(195, 195, 245, 0.3)',
                        data: [47.29, 57.29, 70.52, 47.29, 71.67, 71.35, 69.38, 63.96]
                    }
                ]
            }
        }
    },
    methods: {
        increment() {
            this.i += 1

            var options = {
                responsive: false,
                maintainAspectRatio: true,
                scale: {
                    ticks: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }

            var ctx = document.getElementById('myChart').getContext('2d')
            // eslint-disable-next-line
            var myChart = new Chart(ctx, {
                type: 'radar',
                options: options,
                data: {
                    labels: [
                        'Algorithm',
                        'Data Structure',
                        'Programming',
                        'Mathematic',
                        'Language',
                        'Communication',
                        'Problem Solivg',
                        'Self-motivation'
                    ],
                    datasets: [
                        {
                            label: 'Kritchagamol',
                            backgroundColor: 'rgb(35, 50, 120, 0.5)',
                            data: this.chartData
                        },
                        {
                            label: 'Base Line',
                            backgroundColor: 'rgb(195, 195, 245, 0.3)',
                            data: [47.29, 57.29, 70.52, 47.29, 71.67, 71.35, 69.38, 63.96]
                        }
                    ]
                }
            })
            console.log(ctx)
            console.log(myChart)
        }
    },
    computed: {
        chartData() {
            return [80, 75, 75, 85, 85, 75, 65, 55]
        }
    }
}
</script>

<style>
.spiderChart {
    width: 400px;
    height: 300px;
    margin: auto;
}
.input-custom {
    width: 300px;
    height: 60px;
    /* background: rgb(35, 50, 120); */
    margin: auto;
}
</style>
