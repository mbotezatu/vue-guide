// Declarative Rendering
var declarativeRendering = new Vue({
    el: '#declarativeRendering',
    data: {
        message: 'Hello Vue!'
    }
})

var declarativeRendering2 = new Vue({
    el: '#declarativeRendering2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

// Conditionals and Loops
var conditional = new Vue({
    el: '#conditional',
    data: {
        seen: true
    }
})

var loop = new Vue({
    el: '#loop',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build Something Awesome' }
        ]
    }
})

//Handling User Input
var userInput1 = new Vue({
    el: '#userInput1',
    data: {
        message : 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var userInput2 = new Vue({
    el: '#userInput2',
    data: {
        message: 'Hello Vue!'
    }
})

// Composing with Components
// Define a new component called todo-item
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var composingWithComponents = new Vue({
    el: '#composingWithComponents',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})