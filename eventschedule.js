class eventschedule {
    constructor(eventname){
        this.eventID = "";
        this.eventname = eventname;
        
        
    }
    getId(){
        return this.eventID;
        
    }
    
    getEventName(){
        return this.eventname;
    }
    
    setEventName(name){
        this.eventname = name;
    }
}