class InterestList {
    constructor(){
        this.interestList = ['Basketball','Art','Music','Gaming','Books'];
        this.interestLeftListElement = $('#interest-list-1');
        this.interestRightListElement = $('#interest-list-2');
        this.dropdownContainer = $('#dropdown-container');
        this.openDropdownButton = $('#interest-select-menu-open');
        this.showDropdownButton = $('#show-dropdown');
        this.selectMenuOptions = $('#interest-select-menu').children('button');


        this.initInitialInterests(this.interestList);
        this.initDropdownMenu();
        this.showDropdownButton.on('click',this.showDropdown.bind(this));
    }
    interestIconMapping(interest){
        switch(interest){
            case "Basketball" : return {name:'basketball-ball',color:'orange'};
            case 'Art': return {name:'palette',color: 'red'};
            case 'Music': return {name:'music',color:'pink'};
            case 'Fishing': return {name: 'fish',color:'green'};
            case 'Books': return {name: 'book',color: 'blue'};
            case 'Gaming': return {name:'gamepad',color:'deep-purple'};
            case 'Football': return {name: 'football-ball',color: 'yellow'}
            default: return 'gamepad';
        }
    }

    addInterestToPage(interest, index){
        if(index%2==0){
            let icon = this.interestIconMapping(interest);
            this.interestLeftListElement.append(
                $('<li></li>').addClass("list-group-item").append(
                    $('<i></i>').addClass("fas fa-"+icon.name+" fa-3x interest-list-icon "+icon.color+"-text"),
                    $('<span></span>').addClass('interest-list-text').html(interest)
                )
            );
        } else if(index%2==1){
            let icon = this.interestIconMapping(interest);
            this.interestRightListElement.append(
                $('<li></li>').addClass("list-group-item").append(
                    $('<i></i>').addClass("fas fa-"+icon.name+" fa-3x interest-list-icon "+icon.color+"-text"),
                    $('<span></span>').addClass('interest-list-text').html(interest)
                )
            );
        }
    }

    handleDropdownSelection(event){
        this.interestList.push(event.target.innerHTML);
        this.addInterestToPage(event.target.innerHTML,this.interestList.length+1);
        this.hideDropdown();
    
    }

    initDropdownMenu(){
        this.selectMenuOptions.each((index,element)=>{
            $('#'+element.id).on('click',this.handleDropdownSelection.bind(this));
        })
    }

    hideDropdown(event){
        this.dropdownContainer.css("display","none");
        this.openDropdownButton.html("Interests");
        this.showDropdownButton.css("display","block");
    }

    showDropdown(event){
        this.dropdownContainer.css("display","block");
        this.showDropdownButton.css("display","none");
    }

    initInitialInterests(interests){
        interests.forEach((interest,index)=>{
            this.addInterestToPage(interest,index);
        });
    }
}
var interestList = new InterestList();
