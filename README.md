# CoderSchool FTW - *Tetra-movie App*

Created with :blue_heart: by: Anh Nguyen
  
[//]: # (View online at:)

[//]: # (One or two sentence summary of your project.)

[//]: # (## Video Walkthrough)

[//]: # (Here's a walkthrough of implemented user stories.)


## User Stories

The following **required** functionalities are completed:

THE USER is

* [x] Able to see the top 20 "Currently Playing" movies on a page.
* [x] Able to see the Movie Title, Year, Rating, and Poster for each movie.
* [x] Able to see this information clearly on devices of various screen sizes.
* [x] Able to see "more" movies by tapping a "See More" button at the bottom. 

The following **optional** features are implemented:
THE USER is

* [] The user can enter a term into a search box to filter the currently loaded movies by search term. E.g.; the user can type "mar" and the results are reduced to show "Captain Marvel".
* [] The user can change the "source" from "Currently Playing" movies to "Top Rated" movies (or any other of the endpoints supplied by MovieDB).
* [] Sort by Rating and Popularity (from Lowest to Highest and Vice Versa)
* [] Have Year, Rating as a slider. Change the display dynamically when the slider is changed. You could use React Input Range package for this task.

[//]: # (The following **additional** features are implemented:)

[//]: # (* [x] List anything else that you can get done to improve the page!)

## Time Spent and Lessons Learned
* Review React-file architecture
* Something that I should consider in my future project is using <a href="https://www.npmjs.com/package/dependency-check"><i>dependency-check</i></a>

## Describe any challenges encountered while building the app.
History bugs:
* violate eslint-import <a href="https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/first.md">import/first</a>
* cards overlap each other due to d-flex attribute
* Text overflows inside card
* data fetched from API is incomplete
* Cannot load local image using <Card className="img-card"> from react-bootstrap ()
* Relative imports outside of src/ are not supported
* how to fire API requests endlessly by dumbly using onClick={ this.getmovies() } 
* Warning: <a href="https://reactjs.org/docs/lists-and-keys.html#keys">Each child in a list should have a unique "key" prop.</a>

## Version 1.0.1

## Version 1.0.0
Finished required user stories



## License

    Copyright 2019 Anh Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
