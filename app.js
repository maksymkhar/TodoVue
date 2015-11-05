/**
 * Created by max on 5/11/15.
 */

new Vue({

    el: '#tasks',

    data: {

        tasks: [

            { body: 'Go to the store', completed: false}
        ],

        newTask: ''

    },

    methods: {

        addTask : function (e)
        {
            e.preventDefault();

            this.tasks.push({

                body: this.newTask,
                completed: false
            });

            this.newTask = '';
        },
        removeTask: function(task)
        {
            this.tasks.$remove(task);
        },
        editTask: function(task)
        {
            //remove task

            this.removeTask(task);

            //update new task

            this.newTask = task.body;

            //focus new task inoput

            this.$$.newTask.focus();
        }

    }

})