# angular-bindOnceOrStatic

Angular one time binding with the least impact on usual Angular as possible.

## What is the problem ?

Each time your doing interpolation (```{{foo.bar}}```), Angular adds a watcher on this expression in case it will change over time.

For some use cases, watcher is not needed as the value doesn't change.

To avoid watcher on binding, you would have 2 usuals solutions :
- write your own binding without watcher
- use bindonce from https://github.com/Pasvaz/bindonce

None of these solutions are OK for me.
I don't want to rewrite for any new project a binding without watcher, I need a module to manage it.
Bindonce is also a no go as I don't like the idea of creating new directives, I'd like to stick with usual Angular.

Still, I admit that I have to change the way I work with Angular to get rid of non-wanted watchers.

## Introducing angular-bindOnceOrStatic

I like the curly bracket notation (```{{foo.bar}}```).
It is simple.
It is something Angular developers are used to.

So to make it clear, I want a tweak for the curly bracket notation =)

### A new module

You'll need to add a module to your application :

```
angular.module('mySuperApp', ["bindOnceOrStatic"]);
```

### A new javascript file

Add this script to your HTML file :
```
<script src="bower_components/angular-bindOnceOrStatic/dist/angular-bindOnceOrStatic-min.js"></script>
```

### Binding without watcher

We'll use ```[[foo.bar]]``` to do binding without watcher (kind of like bindonce does).
Unlike bindonce, you can mix your interpolated variable within string, the same way the curly bracket notation allow you to do.
The interpolation is done against the scope.

### Binding without watcher at view compilation phase

Sometimes, you may want to do interpolation at loading, once and for all.
This project allow the use of a dictionary, defined outside any scope.
We'll use ```[[[foo.bar]]]``` to do binding without watcher at compilation time.
The directive will look into the ```boosDictionary``` service for a property ```foo```.

If you want to use this feature, you'll need to add information to the dictionary :

```
angular.module('mySuperApp').config(function (boosDictionaryProvider) {
  // localization is a service containing a subdirectory defined for mySuperApp
  boosDictionaryProvider.add('localization');
});
```

## Why all of this ?

It's been a while that I have this project in mind.
Here is the Google+ thread that started the initial bootstrap :
https://plus.google.com/117415782545013334199/posts/bABiT5aEEq5

## What's next

[] Find a better way to retrieve the initial $interpolateProvider
[] Manage the binding outside attributes (in plain HTML content)

## Release History

- 0.3.0 : initial version
