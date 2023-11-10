import './room.css'

function Room() {
    return (
      <>
        <div id="connect" className="row hide" >
            <div className="col s12 m4 offset-m4" >
                <div className="card">
                    <div className="card-action teal lighten-1 white-text" >
                        <h3 className="card-title" >Video Chat P2P</h3>
                    </div>
                </div>
            </div>
        </div>
        <div id="players" className="hide">
            <div className="row"  >
                <div id="players-row" className="row col s9">
                    <div className="col">
                        <div className="card videoWrapper" >
                            <video id="local-player" className="responsive-video" autoPlay muted></video>
                        </div>
                    </div>
                </div>
                <div className="col s3">
                    <div className="row">
                        <form id="chatForm" >
                                <div className="input-field">
                                    <input id="inputChatMessage" placeholder="Message" type="text" required />
                                    <label htmlFor="inputChatMessage">Message:</label>
                                </div>
                                <button type="submit" className="btn-large waves-effect waves-dark">
                                    <i className="material-icons">send</i>
                                </button>
                        </form>
                    </div>
                    <div id="message-printer" className="row">
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  
export default Room
