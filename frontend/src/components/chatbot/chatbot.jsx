import React, { Component } from 'react';
import Chat from 'react-chatbot-kit';
import { Launcher } from 'react-chat-window';
import logo from '../../imgs/logo.png';

import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

import styles from './chatbot.module.css';

class Chatbot extends Component {
	constructor() {
		super();
		this.state = {
			temptext: "",
			messageList: []
		};
	}
	messagesEndRef = React.createRef();
	handleMessageText = (event) => {
		this.setState({
			temptext: event.currentTarget.value,
		});
	}
	componentDidUpdate() {
		this.scrollToBottom()
	}
	scrollToBottom = () => {
		this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
	}
	botResponse = (event) => {
		var userdata = {
			"message": this.state.temptext,
		};

		this.setState(prevState => ({
			messageList: [...prevState.messageList, { "text": this.state.temptext, "side": false, "name": "", "img": "https://image.flaticon.com/icons/svg/145/145867.svg" }]
		}));
		this.setState({
			temptext: "",
		})
		const putMethod = {
			method: 'POST', // Method itself
			headers: {
				'Content-type': 'application/json; charset=UTF-8', // Indicates the content
			},
			body: JSON.stringify(userdata) // We send data in JSON format
		};
		const url = window.location.href + "chatbot/chatmsg";
		// make the HTTP put request using fetch api
		fetch(url, putMethod)
			.then((response) => {
				response.json().then(async data => {
					this.setState(prevState => ({
						messageList: [...prevState.messageList, { "text": data.response, "side": true, "name": "Noddy", "img": "https://image.flaticon.com/icons/svg/327/327779.svg" }]
					}));
				});
			});
	}

	render() {
		return (
			<div>
				<div className={styles.body}>
					<section className={styles.msger}>
						<header className={styles.msger_header}>
							<div className={styles.msger_header_title}>
								<i> Noddy the Chatbot </i>
							</div>
						</header>
						<main className={styles.msger_chat}>
							<div className={styles.msg + " " + styles.left_msg}>
								<div className={styles.msg_img} style={{ backgroundImage: 'url("https://image.flaticon.com/icons/svg/327/327779.svg")' }}></div>
								<div className={styles.msg_bubble}>
									<div className={styles.msg_info}>
										<div className={styles.msg_info_name}>Noddy</div>
										<div className={styles.msg_info_time}></div>
									</div>
									<div >
										Hi, welcome to ManoVaidya Chatbot!
									</div >
									<div>
										you can ask me anything
									</div >
								</div >
							</div >
							{
								this.state.messageList.map(message => {
									return (
										<div>
											{ message.side ? (
												<div className={styles.msg + " " + styles.left_msg}>
													<div className={styles.msg_img} style={{ backgroundImage: 'url("https://image.flaticon.com/icons/svg/327/327779.svg")' }}></div>
													<div className={styles.msg_bubble}>
														<div className={styles.msg_info}>
															<div className={styles.msg_info_name}>{message.name}</div>
														</div>
														<div className={styles.msg_text}>{message.text}</div>
													</div>
												</div>
											) : (
													<div className={styles.msg + " " + styles.right_msg}>
														<div className={styles.msg_img} style={{ backgroundImage: 'url("https://image.flaticon.com/icons/svg/145/145867.svg")' }}></div>
														<div className={styles.msg_bubble}>
															<div className={styles.msg_info}>
																<div className={styles.msg_info_name}>{message.name}</div>
															</div>
															<div className={styles.msg_text}>{message.text}</div>
														</div>
													</div>
												)
											}
										</div>
									)
								})
							}
							<div ref={this.messagesEndRef} />
						</main >
						<form className={styles.msger_inputarea}>
							<input type="text" className={styles.msger_input} id="textInput" onChange={this.handleMessageText} placeholder="Enter your message..." value={this.state.temptext} />
							<Button className={styles.msger_send_btn} onClick={this.botResponse}>Send</Button>
						</form>
					</section>
				</div >

			</div >);
	}
}
export default Chatbot;
