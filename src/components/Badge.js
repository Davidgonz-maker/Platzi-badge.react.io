import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badege extends React.Component {
	render() {
		const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;

		return (
			<div className="Badge">
				<div className="Badge__header">
					<img src={confLogo} alt="Logo conferencia" />
				</div>

				<div className="Badge__section-name">
					<img className="Badge__avatar" src={avatarUrl} alt="avatar" />
					<h1>
						{firstName} <br /> {lastName}
					</h1>
				</div>

				<div className="Badge__section-info">
					<h3>{jobTitle}</h3>
					<div>@{twitter}</div>
				</div>

				<div className="Badge__footer">#platziconf</div>
			</div>
		);
	}
}
export default Badege;
