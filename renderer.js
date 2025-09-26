const chromeVersion = document.getElementById('chrome-version')
chromeVersion.innerText = versions.chrome()

const nodeVersion = document.getElementById('node-version')
nodeVersion.innerText = versions.node()

const electronVersion = document.getElementById('electron-version')
electronVersion.innerText = versions.electron()
