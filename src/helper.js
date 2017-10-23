
import moment from 'moment'

class Help {
	constructor{
		this.moment = moment
}

	getTime(){
		return  this.moment.getTime()
	}
	getDate(){
		return
	}
}