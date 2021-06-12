fx_version 'adamant'

game 'gta5'

name 'azael_ui-announcements-agency'

description 'UI - Agency Announcements (Add-on)'

version '1.0.0'

author 'Azael Dev'

url 'https://github.com/Azael-Dev/azael_ui-announcements-agency'

server_script {
	'config.shared.js',
	'server/main.js'
}

client_scripts {
	'config.shared.js',
	'client/main.js'
}

dependencies {
	'es_extended',
	'azael_ui-announcements'
}
