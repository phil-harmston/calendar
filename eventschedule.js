class eventschedule {
    constructor(eventname){
        i = 0;
        this.eventID = i++;
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