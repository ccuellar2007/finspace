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

class MetaInfo{
    constructor(){
        this.editButton = $('#edit-button');
        this.nameText = $('#name-text');
        this.nameInput = $('#name-input');
        this.cityText = $('#city-text');
        this.cityInput = $('#city-input');
        this.cohortText = $('#cohort-text');
        this.cohortInput = $('#cohort-input');
        this.isEditable = false;
        this.editButton.on('click',this.toggleEdit.bind(this));
        window.onkeydown = (event)=>{
            (event.keyCode===13 && this.isEditable) ? this.toggleEdit() : null 
        }
        console.log(this.editButton);
    }

    toggleEdit(){
        if(this.isEditable){
            this.nameText.html(this.nameInput.val());
            this.cityText.html(this.cityInput.val());
            this.cohortText.html(this.cohortInput.val());

            this.nameInput.addClass('invisible');
            this.cityInput.addClass('invisible');
            this.cohortInput.addClass('invisible');
            this.nameText.removeClass('invisible');
            this.cityText.removeClass('invisible');
            this.cohortText.removeClass('invisible');
        } else {
            this.nameInput.val(this.nameText.html());
            this.cityInput.val(this.cityText.html());
            this.cohortInput.val(this.cohortText.html());

            this.nameText.addClass('invisible');
            this.cityText.addClass('invisible');
            this.cohortText.addClass('invisible');
            this.nameInput.removeClass('invisible');
            this.cityInput.removeClass('invisible');
            this.cohortInput.removeClass('invisible');
        }
        this.isEditable = !this.isEditable;
    }

}
var interestList = new InterestList();
var metainfo = new MetaInfo();
