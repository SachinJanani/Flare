var Spark = React.createClass({
	render: function(){
		return(
			<div>
				<h3>Spark</h3>
				<div id = 'infobox'>
					<span>
						<h5>Local Status: </h5>
						<div className= 'infotext' id='sparkLocalStatus'>NA</div>
					</span>
					<span>
						<h5>Connected: </h5>
						<div className= 'infotext' id='sparkConnected'>false</div>
					</span>
					<span>
						<h5>Public Address: </h5>
						<div className= 'infotext' id='sparkPublicAddress'>NA</div>
					</span>
					<span>
						<h5>Running Applications: </h5>
						<div className= 'infotext' id='sparkRunningApplications'>None</div>
					</span>
				</div>
			</div>
		)
	}
});
var Cassandra = React.createClass({
	render: function(){
		return(
			<div>
				<h3>Cassandra</h3>
				<div id = 'infobox'>
					<span>
						<h5>Local Status: </h5>
						<div className= 'infotext' id='cassLocalStatus'>NA</div>
					</span>
					<span>
						<h5>Connected: </h5>
						<div className= 'infotext' id='cassConnected'>false</div>
					</span>
					<span>
						<h5>Public Address: </h5>
						<div className= 'infotext' id='cassPublicAddress'>NA</div>
					</span>
				</div>
			</div>
		)
	}
});
var IPFS = React.createClass({
	render: function(){
		return(
			<div>
				<h3>IPFS</h3>
				<div id = 'infobox'>
					<span>
						<h5>Local Status: </h5>
						<div className= 'infotext' id='IPFSLocalStatus'>NA</div>
					</span>
					<span>
						<h5>Connected: </h5>
						<div className= 'infotext' id='IPFSConnected'>false</div>
					</span>
					<span>
						<h5>Peer ID: </h5>
						<div className= 'infotext' id='IPFSPublicAddress'>NA</div>
					</span>
					<span id='publickey'>
						<h5>Public Key: </h5>
						<div className= 'infotext' id='IPFSRunningApplications'>
							<textArea id='ipfs-public-key'></textArea>
						</div>
					</span>
				</div>
			</div>
		)
	}
});
var Home = React.createClass({
	displayName: "Home",
	render: function(){
		console.log('GET home');
		return (
			<div className='outline'>
				<Navbar/>
				<Sidebar path={window.location.pathnam}/>
				<div className='row'>
					<div className='container home'>
						<h2>Welcome to Project: FLARE</h2>
						<Spark/>
						<Cassandra/>
						<IPFS/>
					</div>
				</div>
			</div>
		)
	}
});


React.render(<Home />, document.body)
