// Creating a Vue instance
// Vue's design was partially inspired by the MVVM pattern
var vm = new Vue({
    // options
})

// Data and Methods
var data = { a: 1}

// The object is added to a Vue instance
var vm2 = new Vue({
    data: data
})

// Getting the data from the instance returns the one from the original data
vm.a == data.a // => true

// Setting the property on the instance also affects the original data
vm.a = 2
data.a // => 2

// and vice-versa
data.a = 3
vm.a // => 3

// Properties in data are only reactive if they existed when the instance was created
// Changes to b will not trigger any view updates
vm.b = 'hi'

var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj
})

// Vue instances expose a number of useful instance properties and methods
// These are prefixed with $ to differentiate them from user-defined properties
var data = { a: 1 }

var vm3 = new Vue({
    el: '#example',
    data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function(newValue, oldValue) {
    // This callback will be called when 'vm.a' changes
})

// Instance Lifecycle Hooks
new Vue({
    data: {
        a: 1
    },
    created: function() {
        // 'this' points to the vm instance
        console.log('a is: ' + this.a)
    }
}) // => 1