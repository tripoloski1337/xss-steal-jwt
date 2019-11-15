import React from "react";


class Data extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<ul>
				{
					this.props.items.map((items , index ) => <li><a href={items} > {items} </a></li>)
				}

			</ul>
			);
	}
}

export default Data;
