import morgan from 'morgan'
import fs from 'fs'
import path from 'path'
import moment from "moment-timezone";

export const useMorgan = (app: any) => {
 morgan.token('date', (req, res, tz) => {
  return moment.tz("Europe/Madrid").format();
 })
 morgan.format('myformat', ':remote-addr - :remote-user [:date[Europe/Madrid]] ":method :url HTTP/:http-version" :status  :response-time ms - :res[content-length]');

 app.use(morgan('dev', {
  skip: function (req, res) { return res.statusCode < 10 }
 }))
 app.use(morgan('myformat', {
  stream: fs.createWriteStream(path.join(__dirname, '../../access.log'), { flags: 'a' })
 }))

}