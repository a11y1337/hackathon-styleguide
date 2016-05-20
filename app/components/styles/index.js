const colorPalette = {
  primary: '#005abc',
  grey: '#777',
  white: 'white'
}


const global = {
  headerContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    height: 50,
    backgroundColor: colorPalette.primary,
    color: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  categoryContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colorPalette.primary,
    color: '#fff'
  },
  categoryItem: {
    backgroundColor: colorPalette.grey,
    height: 20,
    padding: 20,
    color: colorPalette.white
  },
  sidebarItem: {
    padding: 20,
    color: colorPalette.white
  },
  logoContainer: {
    paddingLeft: 10,
    flex: 0.4,
    color: '#fff',
    fontSize: 30,
    margin: 5,
  },
  headerLink: {
    color: '#fff',
    paddingRight: 10,
  },
  headerTitle: {
    flex: 0.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerActionBar: {
    flex: 0.4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'right'
  },
  overlaySideFix: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,.7)'
  },
  sidebarContainer: {
    width: '200px',
    height: '100%',
    backgroundColor: colorPalette.primary,
    overflowY: 'scroll'
  },
  sidebarLink: {
    backgroundColor: '#a90000',
    borderBottom: '1px solid rgba(255,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
  }
}

export default global
