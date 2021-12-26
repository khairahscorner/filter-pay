<template>
     <div class="page-table">
        <div :style="{height: '100px'}" v-if="requestDetails.loading">
            <loading-indicator :response="requestDetails.response" />
        </div>
        <div v-else-if="tableError" class="text-16 no-data spaced">Error processing request.</div>
        <div v-else class="wrapper">
            <div class="scroll-table">
                <table-wrapper v-if="usersData.length > 0" tableWidth="700px">
                            <thead>
                              <tr>
                                <th class="thead-check">
                                    <check-button :id="'checkhead'"/>
                                </th>
                                <th>Name</th>
                                <th>User Status</th>
                                <th>payment status</th>
                                <th class="align-right">amount</th>
                                <th>
                                    <more-icon />
                                </th>
                              </tr>
                            </thead>
                            <tbody v-for="(user, i) in usersData" :key="`user${i}`">
                                    <table-row 
                                        :paymentStatus="user.paymentStatus"
                                        :userStatus="user.userStatus"
                                        :class="{'activity-table-open': allVisible[i]}"
                                    >
                                        <td class="table-check">
                                            <check-button :id="`check${i}`" @option-checked="checkOption(i, user)"/>
                                            <div class="icon" :class="{toggle: allVisible[i]}" @click="toggleVisible(i)">
                                                <dropdown-icon />
                                            </div>
                                        </td>  
                                        <td>
                                            <div class="text-14 td-primary td-group">{{user.firstName}} {{user.lastName}}</div>
                                            <div class="text-14 td-secondary spaced">{{user.email}}</div>
                                        </td> 
                                        <td>
                                            <div class="user td-group">
                                                <div class="table-status">
                                                    <div class="dot"></div>
                                                    <div class="text text-12">{{user.userStatus}}</div>
                                                </div>
                                            </div>
                                            <div class="text-12 td-bold td-secondary">Last Login: {{formattedDate(user.lastLogin)}}</div>
                                        </td>  
                                        <td>
                                            <div class="payment td-group">
                                                <div class="table-status">
                                                    <div class="dot"></div>
                                                    <div class="text text-12">{{user.paymentStatus}}</div>
                                                </div>
                                            </div>
                                            <div v-if="user.paidOn" class="text-12 td-bold td-primary">Paid on {{formattedDate(user.paidOn)}}</div>
                                            <div v-else class="text-12 td-bold td-primary">
                                                <span class="span">{{user.paymentStatus}} </span> as at {{formattedDate(new Date())}}</div>
                                        </td>  
                                        <td class="align-right">
                                            <div class="text-14 td-group td-primary">{{user.amountInCents/100}}</div>
                                            <div class="text-12 td-secondary spaced">USD</div>
                                        </td> 
                                        <td>
                                            <div class="last-cell">
                                                <span class="text-12 td-secondary">View more</span>
                                                <more-icon />
                                            </div>
                                        </td>
                                    </table-row>
                                    <table-row v-if="allVisible[i]" class="activity-table-wrapper">
                                        <td class="activity-td" colspan="6">
                                            <div class="activity-table">
                                                <table-wrapper v-if="currentUserWithActivities.activities.length > 0" tableWidth="700px">
                                                    <thead>
                                                        <tr>
                                                            <th class="first-cell spaced">Date</th>
                                                            <th class="spaced">User Activity</th>
                                                            <th class="spaced">
                                                                Detail
                                                                <img src="../assets/icons/detail.svg" />
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <table-row v-for="(activity, i) in currentUserWithActivities.activities" :key="`activity${i}`">  
                                                            <td class="first-cell text-14 td-secondary spaced">{{formattedDate(activity.date)}}</td> 
                                                            <td class="middle-cell text-14 td-primary spaced">{{activity.userActivity}}</td> 
                                                            <td class="text-14 td-primary spaced">{{activity.details}}</td>
                                                        </table-row>
                                                    </tbody>
                                                </table-wrapper>
                                                <div v-else class="text-16 no-data spaced">No Records found.</div>
                                            </div>
                                        </td>
                                    </table-row>
                            </tbody>        
                </table-wrapper>
                <div v-else class="text-16 no-data spaced">No Users.</div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
import LoadingIndicator from './LoadingIndicator.vue'
import CheckButton from './CheckButton.vue' // custom checkbox
import DropdownIcon from './icons/DropdownIcon.vue'
import MoreIcon from './icons/MoreIcon.vue'
import {TableWrapper, TableRow} from '../styled-components/table'
import {formatMixin} from '../mixins'

export default {
    mixins: [formatMixin], //template uses the formattedDate method from this mixin
    props: {
        requestDetails: Object,
        tableError: Boolean,
        usersData: Array,
        currentCheckIndex: Number
    },
    data() {
        return {
            allVisible: [],
            currentUserWithActivities: null
        }
    },
    created() {
        let arr = Array(this.usersData.length).fill(false);
        this.allVisible = [...arr]
    },
    watch: {
        currentCheckIndex(newVal, oldVal) {
            console.log(newVal, oldVal)
            // watch checkIndex : when tab is switched, index(new value) is unchecked and value made null from switchTab method
            if(newVal == null){ //checks for index with null values so as to skip this step of removing class
                let oldEl = document.getElementById(`check${oldVal}`)
                if(oldEl){
                    oldEl.classList.remove('checked')
                }
            }
        }
    },
    methods: {
        //shows activity records for user
        toggleVisible(key) {
            const arr = [...this.allVisible].fill(false);
            if(this.allVisible[key] === false) {
                arr[key] = !arr[key];
            }
            this.allVisible = [...arr]
            this.currentUserWithActivities = this.usersData[key]
        },

        //marks checkbox of all rows, including heading
        // checkHeading() {
        //     Array.from(document.querySelectorAll('.checkbox__btn')).forEach((el) => el.classList.toggle('checked'))
        // },

        //marks checkbox of selected row, and closes the others
        checkOption(index, user) {
            let selected = {id: user.id, paymentStatus: user.paymentStatus } //extract id and paymentstatus to use in parent component
            if(this.currentCheckIndex == null) {
                document.getElementById(`check${index}`).classList.add('checked') //set new selected option              
            }
            else if(this.currentCheckIndex === index) {
                let el = document.getElementById(`check${index}`)
                el.classList.toggle('checked')
                if(!el.classList.contains('checked')){
                    selected = null
                    index = null
                }
            }
            else {
                document.getElementById(`check${this.currentCheckIndex}`).classList.remove('checked')
                document.getElementById(`check${index}`).classList.add('checked')
            }
            this.$emit('checked-user', index, selected)
        }
    },
    components: { 
        LoadingIndicator,
        MoreIcon,
        CheckButton,
        DropdownIcon,
        TableWrapper,
        TableRow
    },
    
}
</script>

<style scoped>
.page-table {
    position: relative;
    min-height: 100px;
    width: 100%;
    background-color: var(--color-bg);
}
.no-data {
    text-align: center;
    text-transform: uppercase;
    display: flex;
    width: 100%;
    align-self: center;
    justify-content: center;
    color: #6E6893;
    padding: 40px;
}
.wrapper {
    width: 100%;
    background-color: #FFFFFF;
}
.scroll-table {
    display: flex;
    min-height: 70px;
    overflow: scroll hidden;
}
.scroll-table::-webkit-scrollbar {
	height: 1px;
}	
.scroll-table::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px white; 
	border-radius: 3px;
}
.scroll-table::-webkit-scrollbar-thumb {
	border-radius: 3px;
	box-shadow: inset 0 0 6px white; 
}
</style>