// cria um iceserver para chamada WebRtc

const servers = {
    iceServers: [
        {
            urls: ['stun:stun1.1.google.com:19302', 'stun:stun2.1.google.com:19302']
        }
    ]
}

// Visa criar um ponto de conexão
const createPeer = async(user) => {
    const peerConection = new RTCPeerConnection(servers); // instancia uma conexão de pares;
    const remoteStream = new MediaStream() // cria uma nova stream remota;

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

