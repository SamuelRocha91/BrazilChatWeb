import  { createContext, useState, useRef, useEffect } from "react";
import socketIO from 'socket.io-client';
import Peer from "simple-peer";
import propTypes from 'prop-types'

const SocketContext = createContext();

const socket = socketIO.connect('http://localhost:3000');

// lógica desenvolvida por https://github.dev/ThejasNU/video-chat-web-app/blob/main/client/src/components/Notifications.js
socket.on('connect', () => {
  console.log('connected to server');
});

const ContextProvider = ({ children }) => {
	const [callAccepted, setCallAccepted] = useState(false);
	const [callEnded, setCallEnded] = useState(false);
	const [stream, setStream] = useState();
	const [name, setName] = useState("");
	const [call, setCall] = useState({});
	const [me, setMe] = useState("");

	const myVideo = useRef(null);
	const userVideo = useRef(null);
	const connectionRef = useRef(null);

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
			console.log('Stream obtained:', currentStream);

				if (myVideo.current) {
					myVideo.current.srcObject = currentStream;
				}
				setStream(currentStream);
			}).catch((erro) => console.log(erro));

		socket.on("me", (id) => setMe(id));

		socket.on("callUser", ({ from, name: callerName, signal }) => {
			setCall({ isReceivingCall: true, from, name: callerName, signal });
		});
	}, []);

	const answerCall = () => {
		setCallAccepted(true);

		const peer = new Peer({ initiator: false, trickle: false, stream });

		peer.on("signal", (data) => {
			console.log('Signal:', data);

			socket.emit("answerCall", { signal: data, to: call.from });
		});

		peer.on("stream", (currentStream) => {
			console.log('Received Stream:', currentStream);
			userVideo.current.srcObject = currentStream;
		});

		peer.signal(call.signal);

		connectionRef.current = peer;
	};

	const callUser = (id) => {
		const peer = new Peer({ initiator: true, trickle: false, stream });

		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name,
			});
		});

		peer.on("stream", (currentStream) => {
			setStream(currentStream)
			userVideo.current.srcObject = currentStream;
		});

		socket.on("callAccepted", (signal) => {
			setCallAccepted(true);

			peer.signal(signal);
		});

		connectionRef.current = peer;
	};

	const leaveCall = () => {
		setCallEnded(true);

		connectionRef.current.destroy();

		window.location.reload();
	};
	return (
		<SocketContext.Provider
			value={{
				call,
				callAccepted,
				myVideo,
				userVideo,
				stream,
				name,
				setName,
				callEnded,
				me,
				callUser,
				leaveCall,
				answerCall,
			}}
		>
			{children}
		</SocketContext.Provider>
	);
};

ContextProvider.propTypes = {
	children: propTypes.elementType.isRequired,
}
export { ContextProvider, SocketContext };