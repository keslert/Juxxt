export const defaultStyles = {
  overlay : {
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content : {
    position: 'absolute',
    top: 40,
    bottom: 40,
    left: 100,
    right: 100,
    padding: 0,
    border: 'none', // '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '0',
    outline: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    display: 'flex',
    flexDirection: 'column',
  }
}