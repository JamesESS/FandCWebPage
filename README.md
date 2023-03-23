# Founders and Coders Project Four
# --------About Me Webpage--------
#
# This is a webpage about myself and why I'd like to pursue web development
#
# Planning
I started by sketching out a few potential layouts for my webpage. I knew I wanted a splashcreen and I was quite keen to have a navigation bar so figured I could integrate the two features. I found a video about a really cool animated splashcreen and decided I'd try to make my own version.
As with all of the projects so far I didn't actually do that much planning. Once I had these core features I decided to start building and see what made sense from there.
#
# Building
I started by making the splashscreen and getting all of my different shapes to line up properly. Once I had everything in place I moved on to animating the whole thing.\
Then I built a page for each tab and using some tricks I learnt making my [movie database](https://github.com/JamesESS/Movie-Database) I was able to easily hide and display content as different buttons were pressed. Once I had everything showing/hiding as desired I needed to build out the individual pages\
I decided to use the colour of each navigation tab as the background for that page. I tried out creating and using variables in CSS for the first time on this project this helped a lot when it came to reusing the same colours throughout my site.
#
# Debugging
The JavaScript came together easily enough on this one. So it was mostly trying to make elements sit in a certain place, overlap or not overlap!\
I spent the entire project with a live server of my HTML running, dev tools open and using a pixel ruler extension. Everything required experimentation to reach it's final position. I've tried to use relative units everywhere so that the page scales nicely with display width.\
I also used a media query to alter the way content is displayed on screens below a certain size. Most of my project was created on a PC with two screens so it's taking a lot of effort to remind myself I need to account for smaller display sizes!!\
Going back and looking at my files for this one I realised I haven't commented my CSS at all! It's not something I'd really considered doing but even after about a week it's a bit difficult to tell what everything is and what weird dependencies are going on. In the future I'll definitely be commenting my CSS. Since doing the bulk of this I found out about a concept called modular CSS so I'd like to try and use that going forwards.
#
# Future changes
* I'd like to go through and add appropriate ARIA to my HTML.
* I really want to have the entire site scrollable as well as navigating through buttons. I tried using snap align on the entire page but didn't quite get it working. I settled for using it on the images in my about me.
* I want to make the text in my project page wrap around under the screenshots. I couldn't figure out a way to do this in grid. I suspect I'd have to remake this page with flex.