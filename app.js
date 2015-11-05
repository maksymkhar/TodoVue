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

    computed: {

        completions: function()
        {
            return this.tasks.filter(function (task) {
                return task.completed;
            });
        },
        remaining: function ()
        {
            return this.tasks.filter(function (task) {
                return ! task.completed;
            });
        }
    },

    filters: {

        inProcess: function(tasks)
        {
            return tasks.filter(function(task)
            {
                return ! task.completed;
            });
        }
    },

    methods: {

        addTask : function (e)
        {
            e.preventDefault();

            if ( ! this.newTask) return;

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
        },
        toggleTaskCompletion: function(task)
        {
            task.completed = ! task.completed;
        },
        completeAll: function ()
        {
            this.tasks.forEach(function(task) {
                task.completed = true;
            });
        }

    }

})