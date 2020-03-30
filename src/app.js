import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
        tasks:
        [
            {name: "Do Homework", isHigh: true},
            {name: "Review code", isHigh: false},

        ],
        newTask: ""
        },
        methods: {
            saveTask: function(form){

                if (form.srcElement.elements[1].checked === true){
                    this.isHigh = true
                }else {
                    this.isHigh = false
                 };
                this.tasks.push({
                    name: this.newTask,
                    isHigh: this.isHigh
                });
                this.newTask = "";
            },
        }
    });
});