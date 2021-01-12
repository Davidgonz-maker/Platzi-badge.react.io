import React from "react";

import "../components/styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import BadgeForm from "../components/BadgeForms";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
	state = { form: {
		firstName: "",
		lastName: "",
		email: "",
		jobTitle: "",
		twitter: ""
	} }

	handleChange = e => {
		this.setState({
			form:{ 
				...this.state.form,
				//Key : Value
				[e.target.name]: e.target.value,
			},
		});
	}

	render() {
		
		return (
			<div>
				<Navbar />
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="Logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col">
							<Badge
								firstName={this.state.form.firstName}
								lastName={this.state.form.lastName} 
								twitter={this.state.form.twitter}
								jobTitle={this.state.form.jobTitle}
								email={this.state.form.email}
								avatarUrl="https://www.gravatar.com/avatar?d=identicon"
							/>
						</div>
						<div className="col-6">
							<BadgeForm onChange={this.handleChange} formValues="this.state.form"/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default BadgeNew;
