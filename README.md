# Library Viewer App

The project sets out to display a list of searchable and sortable books as a library app

### Thought Process

I began by thinking about music players and how they manage songs and album lists. I thought to build something similar.
I wanted the list to be clean and the menu to be easy to reach but still leave the content viewable. Single page.
I landed on three modes of viewing:

* Standard with thumbnail (Menu Toggle)
* Collapsed with only text (Menu Toggle)
* Expanded with lots of detail (Click Toggle) 

### Technologies

*AngularJS 
I knew I wanted to build the app with angular because I like the way it manages search and sort features
Also, I like the framework for how it handles api requests, transforming them into resources.
From catalog.json I make the book resource which I used to build scope context

* Angular-seed
I needed a seed to same time building components and this one is popular

* Foundation
I prefer it to Bootstrap. No good reason. I prefer their mascot?

* Snapjs
I needed a menu that was mobile and swipe capable

### Where to look

* view1/view1.js
* view1/view1.html
* css/app.css

1,2,3. Made it easy for ya.

### Still to Do

* Optimize
More time needs to be spent emulating devices to ensure this works as a true mobile app

* Fixed Header
I haven't worked with Snap enough to have figured this out but the search and menu should be fixed at the top -- not scroll

* Promises, Promises
There's a bug on load. Some of the angular $scope gets initiated too soon. There should be another promise in language and tag list builders.

* Menu Clarity
The menu could be better. Maybe words are better to describe sorting features -- or just better (changable) icons

* Css -> SCSS
Sass makes more sense for handling three different view states