import React, {Component} from 'react';

class Home extends Component {
    render () {
        return (
            <div className="row ">
                <div className="medium-12 columns">


                <a href="#main" class="visuallyhidden">Skip navigation</a>
<div id="wrapper">
	<div id="header">
		<h1>Climbing the Triangle</h1>
	</div>
	<div id="sidebar">
		<ul>
			<li><a href="index.html">The Basics</a></li>
			<li><a href="types.html">Types of Climbing</a></li>
			<li><a href="safety.html">Safety</a></li>
			<li><a href="equipment.html">Equipment</a></li>
			<li><a href="where.html">Where to Climb</a></li>
		</ul>
	</div>
	<div id="main">
		<h2 id="basics">The Basics</h2>
		<img class="alignleft" src="img/climbing-woman.jpg" alt="A woman bouldering" />
		<p>Are you thinking about trying <a href="https://en.wikipedia.org/wiki/Rock_climbing" rel="noopener noreferrer" target="_blank">rock climbing?</a> Climbing is a fun and challenging sport that has a surge of popularity in recent years. Almost anyone can climb: you don't need a high level of strength or fitness to get started. Gear is available for men, women, and children of all shapes and sizes, and most gyms will allow children as young as three to climb. Climbing is not about brute force. Climbing more difficult routes does take some strength, mostly in your legs and hands, but it also takes skill and problem-solving ability.</p>		
		<p>Oh, and it is okay if you are afraid of heights. Really. Just keep your eyes on the wall.</p>
	</div>

	<div id="footer">
		<p>A sample site by Sylvia Richardson</p>
	</div>
</div>
                </div>
            </div>
        );
    }
}

export default Home;