const servers = {
    iceServers: [
        {
            urls: ['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
        }
    ]
}


const createPeer = async(user) => {
    const peerConection = new RTCPeerConnection(servers); // instancia uma conexão de pares;
    const remoteStream = new MediaStream() // cria uma nova stream remota;

    localStream.getTracks().forEach(element => {
        peerConection.add(element, localStream)
    });

    peerConection.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
            remoteStream.addTrack(track)
        })
    }

    peerConection.onicecandidate = async (event) => {
        if(!event.candidate) {
            return
        }

        socket.emit('candidate', {
            id: user.id,
            candidate: event.candidate
        })
    }


    peerConection.ondatachannel = function (event) {
        user.dc = event.channel
        setupDataChannel(user.dc)
    }
    
    return peerConection

}


function createOffer(user, socket) {
    user.dc = user.pc.createDataChannel('chat')
    setupDataChannel(user.dc)
    
    user.pc.createOffer().then(function (offer) {
        user.pc.setLocalDescription(offer).then(function () {
            socket.emit('offer', {
                id: user.id,
                offer: offer
            })
        })
    })
}

function answerPeer (user, offer, socket) {
    user.pc.setRemoteDescription(offer).then(function () {
        user.pc.createAnswer().then(function(answer) {
            user.pc.setLocalDescription(answer).then(function() {
                socket.emit('answer', {
                    id: user.id,
                    answer: answer
                })
            })
        })
    })
}

function setupDataChannel(dataChannel) {
    dataChannel.onopen = checkDataChannelState
    dataChannel.onclose = checkDataChannelState
    dataChannel.onmessage = function(e) {
        addMessage(e.data)
    }
}

function checkDataChannelState(dataChannel) {
    console.log('WebRTC channel state is:', dataChannel.type)
}