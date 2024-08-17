const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['237656520674'] 
global.ownername = "☞⌜ KG TECH⌝☜" 
global.ytname = "YT: Kermhacktools" 
global.socialm = "GitHub: Kgtech-cmr" 
global.location = "Cameroon , Douala" 

//bot bomdy 
global.ownernomer = "237656520674" 
global.premium = ['237650564445'] 
global.botname = '✫𝕂𝔼ℝ𝕄 𝕄𝔻 𝕍3✫' 
global.linkz = "https://chat.whatsapp.com/FpxvVBFOozA6IhNxIWhwFw" 
global.websitex = "https://www.helacloud.ga" 
global.botscript = 'https://github.com/Kgtech-cmr/KERM_MD-v3' 
global.themeemoji = "🥷🏽" 
global.packname = "BRAND PRODUCT OF ☞⌜ KG TECH⌝☜" 
global.author = "☞⌜ KG TECH⌝☜" 
global.wm = "☞⌜ KG TECH⌝☜" 

// Other
global.sessionName = 'put your session here'
global.prefa = ['null','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Yess, c est bon! 😆',
    admin: 'Uniquement pour les administrateurs aka, tu veux quoi ?!',
    botAdmin: 'Mettez moi d abord administrateur!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'Uniquement pour mon Owner bro!',
    group: 'Seulement dans les groupes bro!',
    private: 'Seulement dans les Dm bro!',
    bot: 'Seulement pour le bot bro!',
    wait: 'Wait un peu...',
    linkm: 'Le lien est maintenant où donc?',
    endLimit: 'Tu as atteint ta limite du jour, Ça se réinitialise chaque 12 heures donc attends.',
    nsfw: 'Le nsfw n est pas activé ici , demande à ladministrateur d activer.',
}

//media target
global.thum = fs.readFileSync("./KermMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./KermMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./KermMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./KermMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
