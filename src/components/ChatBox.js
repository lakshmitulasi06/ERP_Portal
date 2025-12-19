export default function ChatBox() {
  return (
    <div className="content-box chatbox-ui">
      <div className="chatbox-header" style={{background: '#075e54', color: '#fff', padding: '1rem', borderRadius: '12px 12px 0 0', fontWeight: 'bold', fontSize: '1.2rem'}}>WhatsApp Chat</div>
      <div className="chatbox-body" style={{background: '#ece5dd', minHeight: '320px', maxHeight: '400px', overflowY: 'auto', padding: '1rem', borderRadius: '0 0 12px 12px'}}>
        {/* Chat messages will be rendered here from database/user context */}
        <div className="chat-message chat-message-user" style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
          <div className="chat-avatar" style={{width: '40px', height: '40px', borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', marginRight: '0.7rem'}}>A</div>
          <div className="chat-username" style={{fontWeight: 'bold', color: '#075e54'}}>Username</div>
        </div>
        <div className="chat-message chat-message-user" style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
          <div className="chat-avatar" style={{width: '40px', height: '40px', borderRadius: '50%', background: '#128c7e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', marginRight: '0.7rem'}}>B</div>
          <div className="chat-username" style={{fontWeight: 'bold', color: '#075e54'}}>Username</div>
        </div>
        {/* More usernames will be rendered here */}
      </div>
      <div className="chatbox-footer" style={{background: '#fff', padding: '0.7rem', borderRadius: '0 0 12px 12px', borderTop: '1px solid #eee', textAlign: 'center', color: '#888'}}>Type a message... (disabled)</div>
    </div>
  );
}